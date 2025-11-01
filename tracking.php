<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config.php';

function getClientIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$event = $input['event'] ?? '';
$data = $input['data'] ?? [];
$step = $input['step'] ?? 0;

$ip = getClientIP();
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

try {
    switch ($event) {
        case 'page_view':
            $stmt = $pdo->prepare("INSERT INTO visits (ip_address, user_agent, page_step) VALUES (?, ?, ?)");
            $stmt->execute([$ip, $userAgent, $step]);
            break;

        case 'button_click':
            $answer = json_encode($data['answer'] ?? '');
            $stmt = $pdo->prepare("INSERT INTO funnel_clicks (ip_address, step, answer) VALUES (?, ?, ?)");
            $stmt->execute([$ip, $step, $answer]);
            break;

        case 'purchase_click':
            $stmt = $pdo->prepare("INSERT INTO conversions (ip_address) VALUES (?)");
            $stmt->execute([$ip]);
            break;
    }

    $stmt = $pdo->prepare("INSERT INTO events (event_type, event_data, step, ip_address) VALUES (?, ?, ?, ?)");
    $stmt->execute([$event, json_encode($data), $step, $ip]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>
