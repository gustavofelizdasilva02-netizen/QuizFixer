<?php
// config.php - Configuração do sistema

// Configurações do Banco de Dados
define('DB_HOST', 'localhost');
define('DB_NAME', 'naipers_quiz');
define('DB_USER', 'root');
define('DB_PASS', '');

// Credenciais do Administrador
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'naiper2025');

// Fuso horário
date_default_timezone_set('America/Sao_Paulo');

// Conexão com o banco de dados
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}

// Função para verificar login
function isLoggedIn() {
    session_start();
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

// Função para fazer login
function login($username, $password) {
    if ($username === ADMIN_USER && $password === ADMIN_PASS) {
        session_start();
        $_SESSION['admin_logged_in'] = true;
        $_SESSION['admin_user'] = $username;
        return true;
    }
    return false;
}

// Função para fazer logout
function logout() {
    session_start();
    session_destroy();
    header('Location: login.php');
    exit;
}
?>
