<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Naiper's Club Admin</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
            min-height: 100vh;
            color: #fff;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding: 20px;
            background: #1a1a1a;
            border: 2px solid #FFD700;
            border-radius: 15px;
        }

        .header h1 {
            color: #FFD700;
            font-size: 28px;
        }

        .logout-btn {
            padding: 10px 20px;
            background: #ff4444;
            border: none;
            border-radius: 8px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }

        .logout-btn:hover {
            background: #ff3333;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: #1a1a1a;
            border: 2px solid #3a3a3a;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s;
        }

        .stat-card:hover {
            border-color: #FFD700;
            transform: translateY(-5px);
        }

        .stat-card h3 {
            color: #999;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 15px;
        }

        .stat-card .number {
            color: #FFD700;
            font-size: 48px;
            font-weight: bold;
        }

        .funnel-section {
            background: #1a1a1a;
            border: 2px solid #3a3a3a;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 40px;
        }

        .funnel-section h2 {
            color: #FFD700;
            margin-bottom: 30px;
            font-size: 24px;
        }

        .funnel-step {
            background: #2a2a2a;
            border-left: 4px solid #FFD700;
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .funnel-step .step-name {
            font-weight: 600;
            font-size: 16px;
        }

        .funnel-step .step-count {
            background: #FFD700;
            color: #000;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: bold;
        }

        .recent-activity {
            background: #1a1a1a;
            border: 2px solid #3a3a3a;
            border-radius: 15px;
            padding: 30px;
        }

        .recent-activity h2 {
            color: #FFD700;
            margin-bottom: 20px;
            font-size: 24px;
        }

        .activity-item {
            padding: 15px;
            background: #2a2a2a;
            margin-bottom: 10px;
            border-radius: 8px;
            font-size: 14px;
        }

        .activity-time {
            color: #999;
            font-size: 12px;
        }

        .conversion-rate {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            color: #000;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: bold;
            display: inline-block;
        }
    </style>
</head>
<body>
    <?php
    require_once 'config.php';

    if (!isLoggedIn()) {
        header('Location: login.php');
        exit;
    }

    if (isset($_GET['logout'])) {
        logout();
    }

    $totalVisits = $pdo->query("SELECT COUNT(*) FROM visits")->fetchColumn();
    
    $totalClicks = $pdo->query("SELECT COUNT(*) FROM funnel_clicks")->fetchColumn();
    
    $totalConversions = $pdo->query("SELECT COUNT(*) FROM conversions")->fetchColumn();
    
    $conversionRate = $totalVisits > 0 ? round(($totalConversions / $totalVisits) * 100, 2) : 0;
    
    $funnelSteps = $pdo->query("
        SELECT step, COUNT(*) as count 
        FROM funnel_clicks 
        GROUP BY step 
        ORDER BY step
    ")->fetchAll();

    $stepNames = [
        0 => 'Página Inicial (Boas-vindas)',
        1 => 'Pergunta 1 - Origem da Compra (20%)',
        2 => 'Pergunta 2 - Interesse em Revenda (40%)',
        3 => 'Pergunta 3 - Benefícios (60%)',
        4 => 'Pergunta 4 - Depoimentos (80%)',
        5 => 'Pergunta 5 - Resultado (100%)',
        7 => 'Página Final - Compra'
    ];

    $recentActivity = $pdo->query("
        SELECT event_type, event_data, step, created_at 
        FROM events 
        ORDER BY created_at DESC 
        LIMIT 10
    ")->fetchAll();

    $visitsToday = $pdo->query("
        SELECT COUNT(*) FROM visits 
        WHERE DATE(visited_at) = CURDATE()
    ")->fetchColumn();

    $clicksToday = $pdo->query("
        SELECT COUNT(*) FROM funnel_clicks 
        WHERE DATE(clicked_at) = CURDATE()
    ")->fetchColumn();
    ?>

    <div class="container">
        <div class="header">
            <div>
                <h1>NAIPER'S CLUB</h1>
                <p style="color: #999; margin-top: 5px;">Dashboard Administrativo</p>
            </div>
            <a href="?logout=1" class="logout-btn">SAIR</a>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <h3>Total de Visitas</h3>
                <div class="number"><?= number_format($totalVisits) ?></div>
            </div>

            <div class="stat-card">
                <h3>Visitas Hoje</h3>
                <div class="number"><?= number_format($visitsToday) ?></div>
            </div>

            <div class="stat-card">
                <h3>Total de Cliques</h3>
                <div class="number"><?= number_format($totalClicks) ?></div>
            </div>

            <div class="stat-card">
                <h3>Cliques Hoje</h3>
                <div class="number"><?= number_format($clicksToday) ?></div>
            </div>

            <div class="stat-card">
                <h3>Conversões</h3>
                <div class="number"><?= number_format($totalConversions) ?></div>
            </div>

            <div class="stat-card">
                <h3>Taxa de Conversão</h3>
                <div class="number"><?= $conversionRate ?>%</div>
            </div>
        </div>

        <div class="funnel-section">
            <h2>📊 Funil de Conversão</h2>
            <?php 
            $stepCounts = [];
            foreach ($funnelSteps as $step) {
                $stepCounts[$step['step']] = $step['count'];
            }
            
            foreach ($stepNames as $stepNum => $stepName): 
                $count = $stepCounts[$stepNum] ?? 0;
            ?>
                <div class="funnel-step">
                    <div class="step-name"><?= htmlspecialchars($stepName) ?></div>
                    <div class="step-count"><?= number_format($count) ?> cliques</div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="recent-activity">
            <h2>📌 Atividade Recente</h2>
            <?php if (empty($recentActivity)): ?>
                <div class="activity-item">Nenhuma atividade registrada ainda.</div>
            <?php else: ?>
                <?php foreach ($recentActivity as $activity): ?>
                    <div class="activity-item">
                        <strong><?= htmlspecialchars($activity['event_type']) ?></strong>
                        <?php if ($activity['step']): ?>
                            - Etapa <?= $activity['step'] ?>
                        <?php endif; ?>
                        <div class="activity-time">
                            <?= date('d/m/Y H:i:s', strtotime($activity['created_at'])) ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
