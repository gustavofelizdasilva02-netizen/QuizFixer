# Quiz Naiper's Club - Funil de Vendas de Perfumes

## 📋 Visão Geral
Aplicação de quiz interativo em React para qualificação de leads e conversão de vendas do Naiper's Club (clube de perfumes importados). O quiz guia o usuário por 6 perguntas, apresenta benefícios e depoimentos, e direciona para página de compra.

## 🎯 Status Atual
- ✅ **Versão 2.0 - Totalmente Reconstruída (02/11/2025)**
- ✅ Bug da Pergunta 3 (tela preta) CORRIGIDO
- ✅ Bug da Pergunta 4 (depoimentos) CORRIGIDO
- ✅ Todas as 6 perguntas funcionando perfeitamente
- ✅ Build de produção compilado e testado
- ✅ Pronto para deploy na Hostinger

## 🏗️ Arquitetura do Projeto

### Frontend (React + Vite + TypeScript)
```
src/
  └── App.tsx              → Componente principal com todas as 6 perguntas
  └── main.tsx             → Entry point da aplicação
  └── index.css            → Estilos globais com Tailwind

dist/ (Build de Produção)
  └── index.html           → HTML compilado
  └── assets/
      ├── index-DS34wBzr.js     → JavaScript bundle (287 KB)
      ├── index-BinwZ6zZ.css    → CSS bundle (10.7 KB)
      └── favicon-CaZstnN0-CaZstnN0.png
```

### Backend (PHP + MySQL)
```
config.php              → Configurações do banco e credenciais admin
tracking.php           → API para rastreamento de analytics
login.php              → Autenticação do admin
dashboard.php          → Painel administrativo com métricas
database.sql           → Estrutura do banco de dados
```

### Assets
```
logo-naipers.png       → Logo do clube (usada em todas as telas)
testimonials/          → 8 imagens de depoimentos (pergunta 4)
  ├── depoimento-1.jpg
  ├── depoimento-2.jpg
  └── ... (até depoimento-8.jpg)
```

## 🔧 Estrutura das Perguntas

1. **Pergunta 0 (Welcome)**: "Me responda uma coisa..." → 2 opções
2. **Pergunta 1 (Normal)**: "De quem você comprava perfumes..." → 3 opções
3. **Pergunta 2 (Normal)**: "Você já cogitou revender..." → 2 opções
4. **Pergunta 3 (Benefits)**: "O Naipers Club vai te oferecer:" → 4 items informativos + 2 CTAs
5. **Pergunta 4 (Testimonials)**: Carrossel com 8 depoimentos → 2 CTAs
6. **Pergunta 5 (Result)**: "Analisando suas respostas..." → 1 botão
7. **Tela Final**: Comparação ANTES/DEPOIS → Botão de compra Kiwify

## 🐛 Bugs Corrigidos

### Bug Crítico da Pergunta 3 (Corrigido em 02/11/2025)
**Sintoma**: Ao clicar em qualquer opção da pergunta 3, a tela ficava preta e o quiz parava.

**Causa Raiz**: 
- Código antigo renderizava os 4 items de benefícios como botões clicáveis
- Ao clicar, chamava `handleAnswer()` diretamente nos items informativos
- Isso causava conflito na navegação e renderizava tela preta

**Solução Implementada**:
- Reconstrução completa do projeto React do zero
- Pergunta tipo "benefits" agora renderiza:
  - 4 items como `<div>` (NÃO clicáveis, apenas informativos com checkmark ✓)
  - 2 botões de CTA como `<button>` (CLICÁVEIS, abaixo dos items)
- Código em `src/App.tsx` linhas 322-363

### Bug da Pergunta 4 (Corrigido anteriormente)
**Sintoma**: Imagens dos depoimentos não carregavam.
**Solução**: Ajustado caminho das imagens para `/testimonials/depoimento-X.jpg`

## 🚀 Stack Tecnológico

### Frontend
- **React 18** - Framework UI
- **Vite 5** - Build tool e dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animações
- **Embla Carousel** - Carrossel de depoimentos

### Backend
- **PHP 7+** - Server-side
- **MySQL/MariaDB** - Banco de dados
- **Hostinger** - Hosting

## 📊 Analytics e Tracking

O sistema rastreia via `tracking.php`:
- Page views (cada pergunta)
- Button clicks (cada resposta selecionada)
- Purchase clicks (botão final de compra)
- IP do visitante
- Timestamp de cada ação

## 🔐 Credenciais Padrão

**Painel Admin:**
- URL: `/login.php`
- Usuário: `admin`
- Senha: `naiper2025` (definida em `config.php` linha 15)

⚠️ **IMPORTANTE**: Trocar senha antes de divulgar!

## 📦 Deploy para Hostinger

### Arquivos para fazer upload:
1. **index.html** (substituir o antigo)
2. **assets/** (substituir pasta antiga inteira)
3. Manter: logo-naipers.png, testimonials/, *.php, database.sql

### Passos:
1. Delete `index.html` antigo
2. Delete pasta `assets/` antiga
3. Upload `index.html` novo
4. Upload pasta `assets/` nova
5. Teste navegando por todas as perguntas

## 📚 Documentação Disponível

- **LEIA-ME.md** - Resumo geral do projeto
- **INSTALAÇÃO_RÁPIDA.md** - Guia de 5 minutos para upload
- **COMO_USAR.md** - Documentação completa (MySQL, admin, etc)
- **BUG_PERGUNTA_3_CORRIGIDO.md** - Detalhes técnicos do bug e solução
- **CORREÇÃO_BUG.md** - Explicação do bug da pergunta 4

## 🛠️ Desenvolvimento Local

### Rodar em desenvolvimento:
```bash
npm install
npm run dev
```
Acessa em: http://localhost:5000

### Build para produção:
```bash
npm run build
```
Output em: `dist/`

### Servir build localmente (PHP):
```bash
php -S localhost:5000
```

## 🔄 Workflows Configurados

- **Quiz Server** - Serve o quiz via PHP na porta 5000
  - Comando: `php -S 0.0.0.0:5000`
  - Output: webview
  - Status: ✅ Ativo

## 📝 Mudanças Recentes

### 02/11/2025 - v2.0 (Reconstrução Completa)
- ✅ Reconstruído projeto React do zero
- ✅ Corrigido bug da pergunta 3 (tela preta)
- ✅ Implementadas todas as 6 perguntas corretamente
- ✅ Compilado build de produção
- ✅ Testado navegação completa
- ✅ Criada documentação completa em português

## ⚠️ Observações Importantes

1. **Porta 5000 obrigatória** para webview no Replit
2. **Logo deve estar em `/logo-naipers.png`** (raiz)
3. **Depoimentos em `/testimonials/depoimento-X.jpg`** (raiz)
4. **Vite configurado** para servir assets corretamente
5. **PHP tracking** espera JSON no body da request
6. **Database.sql** pode mostrar erro de CREATE DATABASE (ignorar se usar phpMyAdmin)

## 🎯 KPIs e Métricas

O painel admin mostra:
- Total de visitantes únicos
- Cliques por etapa do funil (6 perguntas)
- Taxa de conversão (visitantes → compra)
- Histórico detalhado com IP e respostas
- Atualização automática a cada 30s

## 🔗 Links Importantes

- Quiz: `https://wheat-lemur-290123.hostingersite.com/`
- Admin: `https://wheat-lemur-290123.hostingersite.com/login.php`
- Página de Compra: `https://pay.kiwify.com.br/exemplo` (configurar URL real)

## 📞 Próximos Passos Recomendados

1. ✅ Upload dos arquivos para Hostinger
2. ⚠️ Configurar URL real da página Kiwify (linha 178 de App.tsx)
3. ⚠️ Trocar senha do admin no config.php
4. ⚠️ Configurar credenciais do MySQL no config.php
5. ✅ Testar quiz completo no ambiente de produção
6. ✅ Verificar analytics no painel admin

## 🎉 Status: PRONTO PARA PRODUÇÃO ✅
