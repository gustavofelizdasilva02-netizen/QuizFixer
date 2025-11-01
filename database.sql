-- ============================================
-- NAIPER'S CLUB QUIZ - DATABASE SCHEMA
-- ============================================
-- Sistema de tracking e métricas para o quiz
-- 
-- INSTRUÇÕES DE USO:
-- 1. Crie um banco de dados MySQL chamado: naipers_quiz
-- 2. Importe este arquivo SQL no banco criado
-- 3. Configure as credenciais no arquivo config.php
--
-- No cPanel/Hostinger:
-- 1. Painel MySQL > Criar Banco de Dados
-- 2. Importar > Selecione este arquivo
-- ============================================

CREATE DATABASE IF NOT EXISTS naipers_quiz 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE naipers_quiz;

-- Tabela de visitas (page views)
CREATE TABLE IF NOT EXISTS visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    page_step INT DEFAULT 0,
    visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_visited_at (visited_at),
    INDEX idx_page_step (page_step),
    INDEX idx_ip (ip_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de cliques no funil
CREATE TABLE IF NOT EXISTS funnel_clicks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    step INT NOT NULL,
    answer TEXT,
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_clicked_at (clicked_at),
    INDEX idx_step (step),
    INDEX idx_ip (ip_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de conversões (cliques em "Comprar")
CREATE TABLE IF NOT EXISTS conversions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    converted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_converted_at (converted_at),
    INDEX idx_ip (ip_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de eventos gerais
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(50) NOT NULL,
    event_data JSON,
    step INT DEFAULT 0,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at),
    INDEX idx_event_type (event_type),
    INDEX idx_step (step)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- DADOS DE TESTE (OPCIONAL - REMOVA EM PRODUÇÃO)
-- ============================================
-- Descomente as linhas abaixo para inserir dados de teste

-- INSERT INTO visits (ip_address, user_agent, page_step) VALUES
-- ('127.0.0.1', 'Mozilla/5.0', 0),
-- ('127.0.0.1', 'Mozilla/5.0', 1),
-- ('127.0.0.1', 'Mozilla/5.0', 2);

-- INSERT INTO funnel_clicks (ip_address, step, answer) VALUES
-- ('127.0.0.1', 0, '{"title": "70% de Economia"}'),
-- ('127.0.0.1', 1, 'Sites e lojas no Brasil'),
-- ('127.0.0.1', 2, 'Já cogitei revender perfumes importados');

-- INSERT INTO conversions (ip_address) VALUES
-- ('127.0.0.1');

-- INSERT INTO events (event_type, event_data, step, ip_address) VALUES
-- ('page_view', '{"step": 0}', 0, '127.0.0.1'),
-- ('button_click', '{"answer": "70% de Economia"}', 0, '127.0.0.1');

-- ============================================
-- VERIFICAÇÃO DAS TABELAS
-- ============================================
-- Execute esta query para verificar se tudo foi criado:
-- SHOW TABLES;
-- 
-- Para ver a estrutura de uma tabela:
-- DESCRIBE visits;
-- 
-- Para limpar todos os dados (CUIDADO!):
-- TRUNCATE TABLE visits;
-- TRUNCATE TABLE funnel_clicks;
-- TRUNCATE TABLE conversions;
-- TRUNCATE TABLE events;
