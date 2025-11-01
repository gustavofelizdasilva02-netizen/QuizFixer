╔═══════════════════════════════════════════════════════════════════╗
║                    NAIPER'S CLUB QUIZ                              ║
║              INSTRUÇÕES DE INSTALAÇÃO NA HOSTINGER                 ║
╚═══════════════════════════════════════════════════════════════════╝

📦 CONTEÚDO DO PACOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ index.html            - Página principal do quiz
✅ assets/               - CSS e JavaScript compilados (React + Tailwind)
✅ favicon.png           - Ícone do site
✅ logo-naipers.png      - Logo do Naiper's Club
✅ testimonials/         - 8 imagens de depoimentos do WhatsApp
✅ config.php            - Configurações de banco de dados e admin
✅ tracking.php          - API de tracking de métricas
✅ login.php             - Página de login do administrador
✅ dashboard.php         - Painel administrativo com métricas
✅ database.sql          - Estrutura do banco de dados
✅ README_HOSTINGER.txt  - Este arquivo de instruções


🚀 PASSO A PASSO COMPLETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────────┐
│ PASSO 1: CRIAR BANCO DE DADOS MYSQL                              │
└─────────────────────────────────────────────────────────────────┘

1. Acesse o Painel da Hostinger (hpanel.hostinger.com.br)
2. Vá em: Bancos de Dados > MySQL
3. Clique em "CRIAR BANCO DE DADOS"
4. Preencha os dados:
   - Nome do banco: naipers_quiz (ou qualquer outro nome)
   - Nome de usuário: (será criado automaticamente)
   - Senha: (escolha uma senha forte)
5. Clique em "CRIAR"
6. Anote as informações:
   ✏️ Nome do banco: _________________
   ✏️ Usuário:       _________________
   ✏️ Senha:         _________________
   ✏️ Host:          localhost (geralmente)


┌─────────────────────────────────────────────────────────────────┐
│ PASSO 2: IMPORTAR ESTRUTURA DO BANCO DE DADOS                    │
└─────────────────────────────────────────────────────────────────┘

1. No painel MySQL, clique em "phpMyAdmin"
2. Selecione o banco de dados criado (naipers_quiz)
3. Clique na aba "Importar"
4. Clique em "Escolher arquivo"
5. Selecione o arquivo: database.sql
6. Clique em "Executar"
7. Aguarde a mensagem: "Importação finalizada com sucesso"


┌─────────────────────────────────────────────────────────────────┐
│ PASSO 3: CONFIGURAR CREDENCIAIS                                  │
└─────────────────────────────────────────────────────────────────┘

1. Abra o arquivo config.php
2. Edite as seguintes linhas com os dados do PASSO 1:

   define('DB_HOST', 'localhost');              // Geralmente é localhost
   define('DB_NAME', 'naipers_quiz');           // Nome do seu banco
   define('DB_USER', 'seu_usuario_mysql');      // Usuário criado
   define('DB_PASS', 'sua_senha_mysql');        // Senha do banco

3. Configure as credenciais do administrador:

   define('ADMIN_USER', 'admin');               // Escolha um usuário
   define('ADMIN_PASS', 'SuaSenhaForte123!');   // MUDE ESTA SENHA!

4. Salve o arquivo


┌─────────────────────────────────────────────────────────────────┐
│ PASSO 4: FAZER UPLOAD DOS ARQUIVOS                               │
└─────────────────────────────────────────────────────────────────┘

1. Acesse: Arquivos > Gerenciador de Arquivos
2. Navegue até a pasta: public_html
3. Se quiser instalar no domínio principal:
   - Faça upload de TODOS os arquivos diretamente em public_html
   
4. Se quiser instalar em uma subpasta (ex: seusite.com/quiz):
   - Crie uma pasta "quiz" dentro de public_html
   - Faça upload de TODOS os arquivos dentro dessa pasta

5. Arquivos para upload:
   ✅ index.html
   ✅ favicon.png
   ✅ logo-naipers.png
   ✅ assets/ (pasta inteira)
   ✅ testimonials/ (pasta inteira com 8 imagens)
   ✅ config.php
   ✅ tracking.php
   ✅ login.php
   ✅ dashboard.php

   ⚠️  NÃO FAÇA UPLOAD DO database.sql (já foi importado no PASSO 2)


┌─────────────────────────────────────────────────────────────────┐
│ PASSO 5: TESTAR O SITE                                           │
└─────────────────────────────────────────────────────────────────┘

1. Quiz principal:
   🌐 https://seudominio.com/
   ou
   🌐 https://seudominio.com/quiz/
   
2. Painel administrativo:
   🔐 https://seudominio.com/login.php
   ou
   🔐 https://seudominio.com/quiz/login.php

3. Faça login com as credenciais configuradas no config.php


📊 PAINEL ADMINISTRATIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O dashboard mostra:
✅ Total de visitas e visitas de hoje
✅ Total de cliques e cliques de hoje  
✅ Número de conversões (cliques em "COMPRAR")
✅ Taxa de conversão em porcentagem
✅ Funil completo (quantas pessoas passaram por cada etapa)
✅ Atividade recente em tempo real


⚙️ CONFIGURAÇÕES IMPORTANTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  SEGURANÇA:
   - MUDE a senha do admin no config.php
   - Use uma senha forte (letras, números, símbolos)
   - Nunca compartilhe suas credenciais

⚠️  PERMISSÕES:
   - Os arquivos devem ter permissão 644
   - As pastas devem ter permissão 755
   - O config.php deve ter permissão 600 (mais seguro)

⚠️  DOMÍNIO:
   - Se seu site não carregar corretamente, verifique se:
     • Todos os arquivos foram enviados
     • O config.php está configurado corretamente
     • O banco de dados foi importado


🔧 PROBLEMAS COMUNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ PROBLEMA: "Erro ao conectar ao banco de dados"
✅ SOLUÇÃO: Verifique as credenciais no config.php

❌ PROBLEMA: "Página não encontrada" (404)
✅ SOLUÇÃO: Verifique se fez upload dos arquivos na pasta correta

❌ PROBLEMA: Login não funciona
✅ SOLUÇÃO: Certifique-se que configurou ADMIN_USER e ADMIN_PASS

❌ PROBLEMA: Dashboard não mostra dados
✅ SOLUÇÃO: Teste o quiz primeiro para gerar dados

❌ PROBLEMA: Quiz carrega mas não salva métricas
✅ SOLUÇÃO: Verifique se o tracking.php está funcionando
            Teste acessando: seusite.com/tracking.php

❌ PROBLEMA: Imagens dos depoimentos não aparecem
✅ SOLUÇÃO: Verifique se a pasta testimonials/ foi enviada
            Certifique-se que as permissões estão corretas (755)


📞 SUPORTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Para problemas técnicos:
- Suporte Hostinger: https://www.hostinger.com.br/contato

Para dúvidas sobre o banco de dados:
- Acesse phpMyAdmin e verifique se as tabelas foram criadas
- Execute: SHOW TABLES; para ver todas as tabelas


✨ PRONTO! SEU QUIZ ESTÁ NO AR!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Seu quiz do Naiper's Club está 100% funcional com:
✅ 7 páginas completas do funil
✅ Logo do Naiper's Club em todas as páginas
✅ Carrossel de depoimentos do WhatsApp (8 imagens reais)
✅ Design preto e amarelo responsivo
✅ Animações suaves
✅ Sistema de tracking automático
✅ Painel administrativo completo

Tecnologias utilizadas:
✅ React 18 (compilado para JavaScript puro)
✅ Tailwind CSS (compilado para CSS puro)
✅ Embla Carousel (carrossel profissional)
✅ Framer Motion (animações suaves)
✅ PHP 7.4+ (backend)
✅ MySQL (banco de dados)

Boas vendas! 🚀💰
