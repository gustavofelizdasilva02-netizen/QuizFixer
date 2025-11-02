# ⚡ INSTALAÇÃO RÁPIDA - QUIZ NAIPER'S CLUB (VERSÃO CORRIGIDA)

## 🎯 O QUE MUDOU?

**BUG DA PERGUNTA 3 FOI CORRIGIDO!** ✅

Agora você tem uma versão completamente nova do quiz que:
- ✅ Funciona 100% sem bugs
- ✅ Pergunta 3 não trava mais com tela preta
- ✅ Todas as 6 perguntas navegam perfeitamente
- ✅ Pronto para usar na Hostinger

---

## 📦 ARQUIVOS PARA ENVIAR À HOSTINGER

### Copie ESTES arquivos do Replit para a Hostinger:

```
📁 public_html/
│
├── 🆕 index.html              (SUBSTITUIR o antigo)
│
├── 🆕 assets/                 (SUBSTITUIR a pasta antiga)
│   ├── index-DDUX6Zw0.js
│   ├── index-BinwZ6zZ.css
│   └── favicon-CaZstnN0.png
│
├── ✅ logo-naipers.png         (manter o que já tem)
│
├── ✅ testimonials/            (manter a pasta que já tem)
│   ├── depoimento-1.jpg
│   ├── depoimento-2.jpg
│   ├── depoimento-3.jpg
│   ├── depoimento-4.jpg
│   ├── depoimento-5.jpg
│   ├── depoimento-6.jpg
│   ├── depoimento-7.jpg
│   └── depoimento-8.jpg
│
├── ✅ config.php               (manter configurado como está)
├── ✅ login.php                (não mexer)
├── ✅ dashboard.php            (não mexer)
├── ✅ tracking.php             (não mexer)
└── ✅ database.sql             (já foi importado, não precisa mais)
```

---

## 🚀 PASSO A PASSO - 5 MINUTOS

### 1️⃣ Acesse o Gerenciador de Arquivos da Hostinger
   - Login no painel: https://hpanel.hostinger.com
   - Vá em **Arquivos** → **Gerenciador de Arquivos**
   - Entre na pasta **public_html**

### 2️⃣ Faça Backup (Opcional mas Recomendado)
   - Clique com botão direito na pasta `assets/` → **Download**
   - Clique com botão direito no `index.html` → **Download**

### 3️⃣ DELETE os Arquivos Antigos
   - ❌ DELETE a pasta `assets/` antiga
   - ❌ DELETE o arquivo `index.html` antigo

### 4️⃣ Faça Upload dos Novos Arquivos
   - ✅ Clique em **Enviar** → **Arquivo**
   - ✅ Selecione o novo `index.html` do Replit
   - ✅ Clique em **Enviar** → **Pasta**
   - ✅ Selecione a nova pasta `assets/` do Replit

### 5️⃣ Teste o Quiz
   - Acesse: https://wheat-lemur-290123.hostingersite.com/
   - Navegue pelas perguntas 0, 1, 2
   - **Na pergunta 3**: Veja os 4 items, role para baixo e clique em um dos 2 botões
   - Deve avançar para pergunta 4 **SEM tela preta**! 🎉

---

## ✅ CHECKLIST DE VERIFICAÇÃO

```
☐ Deletei a pasta assets/ antiga
☐ Deletei o index.html antigo
☐ Enviei a pasta assets/ nova
☐ Enviei o index.html novo
☐ Testei o quiz completo
☐ Pergunta 3 funciona (sem tela preta)
☐ Pergunta 4 mostra depoimentos
☐ Quiz chega até a tela final
☐ Painel admin ainda funciona
☐ Banco de dados está conectado
```

---

## 🔧 CONFIGURAÇÃO DO BANCO (SE AINDA NÃO FEZ)

Se você ainda NÃO configurou o banco de dados MySQL:

### 1. Criar Banco MySQL
   - Painel Hostinger → **MySQL** → **Criar Banco**
   - Nome: `naipers_quiz`
   - Anote: host, usuário, senha

### 2. Importar Estrutura
   - **phpMyAdmin** → Selecione seu banco
   - Aba **Importar** → Selecione `database.sql`
   - Clique em **Executar**

### 3. Configurar config.php
   - Edite o arquivo `config.php` no servidor
   - Linhas 5-8: Cole seus dados MySQL
   - Linha 15: Mude a senha do admin

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'seu_banco_aqui');
define('DB_USER', 'seu_usuario_aqui');
define('DB_PASS', 'sua_senha_aqui');

define('ADMIN_PASS', 'mude_esta_senha');
```

---

## 🔐 PAINEL ADMINISTRATIVO

**URL**: https://wheat-lemur-290123.hostingersite.com/login.php

**Credenciais Padrão**:
```
Usuário: admin
Senha: naiper2025
```

⚠️ **MUDE A SENHA** no arquivo `config.php` antes de divulgar!

---

## 📊 O QUE O ADMIN MOSTRA

- 📈 Total de visitantes
- 🎯 Cliques por etapa do funil
- 💰 Taxa de conversão
- 📋 Tabela com IPs e respostas
- 🔄 Atualização automática a cada 30s

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### Quiz não carrega (tela branca)
- Verifique se a pasta `assets/` foi enviada corretamente
- Limpe o cache: Ctrl+Shift+R

### Pergunta 3 ainda fica preta
- Confirme que o `index.html` novo foi enviado
- Confirme que a pasta `assets/` nova foi enviada
- Teste em modo anônimo

### Pergunta 4 não mostra imagens
- Verifique se a pasta `testimonials/` existe
- Acesse: https://seudominio.com/testimonials/depoimento-1.jpg
- Deve mostrar a imagem

### Erro de conexão com banco
- Verifique se o `config.php` tem os dados corretos
- Teste acessando: https://seudominio.com/config.php
- NÃO deve mostrar erro

### Admin não aceita login
- Verifique no `config.php` linha 15: `ADMIN_PASS`
- Use a senha que está definida lá

---

## 📖 DOCUMENTAÇÃO COMPLETA

Para mais detalhes, leia:

- 📘 **COMO_USAR.md** → Guia completo de instalação e uso
- 🐛 **BUG_PERGUNTA_3_CORRIGIDO.md** → Detalhes técnicos do bug e solução
- 🔧 **CORREÇÃO_BUG.md** → Explicação sobre o bug da pergunta 4 (depoimentos)

---

## ⏱️ TEMPO ESTIMADO

- Upload dos arquivos: **2 minutos**
- Teste do quiz: **3 minutos**
- **Total: 5 minutos**

---

## 🎉 PRONTO!

Após seguir esses passos, seu quiz estará:
- ✅ 100% funcional
- ✅ Sem bugs
- ✅ Pronto para capturar leads
- ✅ Rastreando métricas
- ✅ Gerando vendas!

**Boa sorte com seu negócio! 🚀💰**

---

## 📞 SUPORTE

Se tiver dúvidas, revise os arquivos de documentação ou abra o console do navegador (F12) para ver erros específicos.
