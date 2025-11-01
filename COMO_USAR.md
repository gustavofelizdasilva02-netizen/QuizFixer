# 🎯 QUIZ NAIPER'S CLUB - GUIA COMPLETO DE USO

## 📋 ÍNDICE
1. [Como Conectar ao MySQL da Hostinger](#conectar-mysql)
2. [Como Acessar o Painel Administrativo](#acessar-admin)
3. [Solução do Bug da Pergunta 4](#bug-pergunta-4)
4. [Instalação Passo a Passo](#instalacao)
5. [Estrutura dos Arquivos](#estrutura)

---

## 🗄️ CONECTAR AO MYSQL DA HOSTINGER {#conectar-mysql}

### Passo 1: Criar o Banco de Dados na Hostinger

1. **Acesse o painel da Hostinger**
   - Faça login em: https://hpanel.hostinger.com

2. **Vá para MySQL**
   - No menu lateral, clique em **"Banco de Dados"** → **"MySQL"**

3. **Crie um novo banco**
   - Clique em **"Criar Banco de Dados"**
   - Nome sugerido: `naipers_quiz`
   - Anote as seguintes informações:
     ```
     Host: localhost (ou outro fornecido pela Hostinger)
     Nome do Banco: u123456789_naipers (exemplo)
     Usuário: u123456789_admin (exemplo)
     Senha: (a senha que você definiu)
     ```

### Passo 2: Importar a Estrutura do Banco

1. **Acesse o phpMyAdmin**
   - No painel MySQL da Hostinger, clique em **"phpMyAdmin"**

2. **Selecione seu banco**
   - No menu lateral esquerdo, clique no banco que você criou

3. **Importe o arquivo SQL**
   - Clique na aba **"Importar"**
   - Clique em **"Escolher arquivo"**
   - Selecione o arquivo **`database.sql`** (que está na raiz do projeto)
   - Clique em **"Executar"**
   - Aguarde a mensagem de sucesso

### Passo 3: Configurar o Arquivo config.php

1. **Abra o arquivo `config.php`** no seu editor de código ou pelo gerenciador de arquivos da Hostinger

2. **Edite as linhas 5-8** com os dados do seu banco:

```php
<?php
// config.php - Configuração do sistema

// Configurações do Banco de Dados
define('DB_HOST', 'localhost');              // ← Cole o HOST aqui
define('DB_NAME', 'u123456789_naipers');     // ← Cole o NOME DO BANCO aqui
define('DB_USER', 'u123456789_admin');       // ← Cole o USUÁRIO aqui
define('DB_PASS', 'SuaSenhaAqui123');        // ← Cole a SENHA aqui

// Credenciais do Administrador
define('ADMIN_USER', 'admin');               // ← Usuário do painel admin
define('ADMIN_PASS', 'naiper2025');          // ← MUDE esta senha!
```

3. **IMPORTANTE**: Mude a senha do admin (linha 12) para uma senha forte!

4. **Salve o arquivo**

### Passo 4: Fazer Upload dos Arquivos

1. **Acesse o Gerenciador de Arquivos** da Hostinger
   - No painel, vá em **"Arquivos"** → **"Gerenciador de Arquivos"**

2. **Navegue até a pasta `public_html`**

3. **Faça upload de TODOS os arquivos do projeto**:
   ```
   ✅ index.html
   ✅ favicon.png
   ✅ logo-naipers.png
   ✅ config.php (já editado!)
   ✅ login.php
   ✅ dashboard.php
   ✅ tracking.php
   ✅ assets/ (pasta completa com JS e CSS)
   ✅ testimonials/ (pasta com as 8 imagens de depoimentos)
   ```

   ⚠️ **NÃO faça upload do `database.sql`** (ele já foi importado no phpMyAdmin)

### Passo 5: Testar a Conexão

1. **Acesse seu site**: `https://seudominio.com`
2. **Se aparecer o quiz**: ✅ Tudo funcionando!
3. **Se aparecer erro de conexão**: Verifique se os dados do `config.php` estão corretos

---

## 🔐 ACESSAR O PAINEL ADMINISTRATIVO {#acessar-admin}

### Como Acessar

1. **URL do Admin**:
   ```
   https://seudominio.com/login.php
   ```

2. **Credenciais Padrão** (definidas no `config.php`):
   ```
   Usuário: admin
   Senha: naiper2025
   ```
   ⚠️ **MUDE a senha no arquivo `config.php` antes de publicar!**

### O Que Você Pode Fazer no Admin

O painel administrativo (`dashboard.php`) mostra:

1. **📊 Estatísticas em Tempo Real**
   - Total de visitantes
   - Total de cliques no funil
   - Taxa de conversão
   - Conversões totais

2. **📈 Métricas por Etapa**
   - Quantas pessoas visitaram cada pergunta
   - Quantas pessoas clicaram em cada opção
   - Taxa de abandono em cada etapa

3. **📋 Tabelas de Dados**
   - **Visitas**: IP, navegador, página, data/hora
   - **Cliques**: IP, etapa, resposta escolhida, data/hora
   - **Conversões**: IP, data/hora da compra

4. **🔄 Atualização Automática**
   - Os dados são atualizados automaticamente a cada 30 segundos

### Como Usar o Dashboard

1. **Faça login** usando as credenciais
2. **Analise as métricas** para entender o comportamento dos usuários
3. **Identifique gargalos**: Veja em qual pergunta as pessoas mais desistem
4. **Otimize o funil**: Use os dados para melhorar o quiz

### Como Fazer Logout

- Clique no botão **"Sair"** no canto superior direito do dashboard

---

## 🐛 SOLUÇÃO DO BUG DA PERGUNTA 4 (TELA PRETA) {#bug-pergunta-4}

### O Problema

A tela ficava preta na pergunta 4 (página de depoimentos) porque:

1. **Imagens faltando**: As 8 imagens de depoimentos não estavam no servidor
2. **Caminho errado**: O código procurava por `/testimonials/depoimento-X.jpg`
3. **Erro não tratado**: Se as imagens não carregassem, a tela ficava preta sem mensagem de erro

### A Solução

✅ **Já está corrigido!** Este projeto inclui:

1. **8 imagens de depoimentos** na pasta `testimonials/`:
   - depoimento-1.jpg até depoimento-8.jpg
   - Imagens reais de conversas do WhatsApp

2. **Código verificado** para garantir que:
   - O carrossel Embla funciona corretamente
   - As imagens carregam no caminho correto
   - Há tratamento de erros

3. **Estrutura correta de pastas**:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-D5c_9uwf.js
   │   └── index-DALObQQT.css
   └── testimonials/
       ├── depoimento-1.jpg
       ├── depoimento-2.jpg
       ├── depoimento-3.jpg
       ├── depoimento-4.jpg
       ├── depoimento-5.jpg
       ├── depoimento-6.jpg
       ├── depoimento-7.jpg
       └── depoimento-8.jpg
   ```

### Como Verificar se Está Funcionando

1. **Acesse o quiz**: `https://seudominio.com`
2. **Responda as perguntas 1, 2 e 3**
3. **Na pergunta 4**: Você deve ver:
   - ✅ Carrossel com depoimentos do WhatsApp
   - ✅ Setas esquerda/direita para navegar
   - ✅ Indicadores de posição (bolinhas)
   - ✅ Contador "1 de 8 depoimentos"
   - ✅ Botões "Também quero receber..." e "Vou deixar..."

4. **Se ainda aparecer tela preta**:
   - Verifique se a pasta `testimonials/` foi enviada corretamente
   - Abra o console do navegador (F12) e procure por erros
   - Verifique se as imagens estão acessíveis: `https://seudominio.com/testimonials/depoimento-1.jpg`

---

## 📦 INSTALAÇÃO PASSO A PASSO {#instalacao}

### Checklist Completo

```
☐ 1. Criar banco de dados MySQL na Hostinger
☐ 2. Importar database.sql no phpMyAdmin
☐ 3. Editar config.php com dados do banco
☐ 4. Mudar senha do admin no config.php
☐ 5. Fazer upload de todos os arquivos para public_html
☐ 6. Verificar se a pasta testimonials/ foi enviada
☐ 7. Testar o quiz: https://seudominio.com
☐ 8. Testar o admin: https://seudominio.com/login.php
☐ 9. Verificar se a pergunta 4 aparece corretamente
☐ 10. Celebrar! 🎉
```

### Tempo Estimado

- **Criar banco**: 5 minutos
- **Importar SQL**: 2 minutos
- **Configurar config.php**: 3 minutos
- **Upload de arquivos**: 5-10 minutos (depende da internet)
- **Testes**: 5 minutos

**Total**: ~20-25 minutos

---

## 📁 ESTRUTURA DOS ARQUIVOS {#estrutura}

```
projeto/
│
├── index.html              # Página principal do quiz
├── favicon.png             # Ícone do site
├── logo-naipers.png        # Logo do Naiper's Club (264px)
│
├── assets/                 # Arquivos compilados (React + CSS)
│   ├── index-D5c_9uwf.js   # JavaScript compilado (410 KB)
│   └── index-DALObQQT.css  # CSS compilado (72.74 KB)
│
├── testimonials/           # Imagens de depoimentos
│   ├── depoimento-1.jpg
│   ├── depoimento-2.jpg
│   ├── depoimento-3.jpg
│   ├── depoimento-4.jpg
│   ├── depoimento-5.jpg
│   ├── depoimento-6.jpg
│   ├── depoimento-7.jpg
│   └── depoimento-8.jpg
│
├── config.php              # ⚙️ Configuração MySQL e credenciais admin
├── login.php               # 🔐 Página de login do admin
├── dashboard.php           # 📊 Painel administrativo
├── tracking.php            # 📈 API de tracking (registra cliques)
│
├── database.sql            # 🗄️ Estrutura do banco MySQL
├── COMO_USAR.md            # 📖 Este guia
└── CORREÇÃO_BUG.md         # 🐛 Detalhes técnicos do bug
```

---

## ❓ PERGUNTAS FREQUENTES

### 1. O quiz não aparece, só uma tela branca

**Solução**: Verifique se você enviou a pasta `assets/` com os arquivos JS e CSS.

### 2. Erro: "Erro ao conectar ao banco de dados"

**Solução**: Verifique se os dados no `config.php` estão corretos (host, nome, usuário, senha).

### 3. A pergunta 4 fica preta

**Solução**: Verifique se você enviou a pasta `testimonials/` com as 8 imagens.

### 4. Não consigo fazer login no admin

**Solução**: Verifique se você está usando as credenciais corretas definidas no `config.php`.

### 5. As métricas não aparecem no dashboard

**Solução**: Verifique se o banco de dados foi importado corretamente com o arquivo `database.sql`.

---

## 🆘 SUPORTE

Se você tiver problemas:

1. **Verifique o checklist** acima - 90% dos problemas vêm de passos esquecidos
2. **Abra o console do navegador** (F12) e procure por erros em vermelho
3. **Teste a conexão do banco** acessando `config.php` diretamente no navegador
4. **Verifique as permissões** dos arquivos no servidor (devem ser 644 para arquivos, 755 para pastas)

---

## ✅ PRONTO!

Agora você tem:
- ✅ Quiz funcionando sem bugs
- ✅ Banco de dados MySQL configurado
- ✅ Painel administrativo acessível
- ✅ Sistema de tracking de métricas
- ✅ Tudo pronto para capturar leads!

**Próximos passos sugeridos**:
1. Divulgue o quiz nas suas redes sociais
2. Acompanhe as métricas no dashboard
3. Otimize o funil baseado nos dados
4. Escale suas vendas! 🚀💰
