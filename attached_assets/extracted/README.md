# Naiper's Club - Quiz de Perfumes Importados

## 📋 Sobre o Projeto

Quiz interativo para qualificação de leads interessados em perfumes importados e no Naiper's Club. O quiz conduz o usuário através de 5 perguntas progressivas até uma página de oferta final.

## 🎨 Design

- **Cores**: Fundo preto (#000000) com detalhes em amarelo/dourado (#FFD700)
- **Tipografia**: Poppins (bold e extrabold)
- **Estilo**: Moderno, luxuoso e minimalista

## 🚀 Como Executar

1. Clique em "Run" no Replit
2. O quiz abrirá automaticamente no navegador
3. Pronto! O quiz está funcionando

## 📝 Estrutura do Quiz

### Tela 1: Boas-vindas
- Apresenta duas opções principais:
  - 70% de Economia
  - Renda Extra

### Pergunta 1 (20%)
"De quem você comprava perfumes importados até este momento?"
- Sites e lojas no Brasil
- Comprava do Paraguai
- De um conhecido

### Pergunta 2 (40%)
"Você já cogitou revender perfumes importados..."
- Já cogitei revender perfumes importados
- Pretendo apenas economizar em minhas compras pessoais

### Pergunta 3 (60%)
"O Naipers Club vai te oferecer:"
- Apresenta 4 benefícios
- 2 opções de resposta

### Pergunta 4 (80%)
"Veja o que os membros do clube estão falando..."
- Área para depoimentos
- 2 opções de resposta

### Pergunta 5 (100%)
Resultado: "ALTA!"
- Mostra chance alta de sucesso
- Botão para avançar

### Página Final
"Veja a Transformação"
- Comparação Antes x Depois
- Botão de compra: "12x DE R$ 52,37"
- Lista de benefícios inclusos

## 🛠️ Como Editar

### Editar Perguntas

Abra o arquivo: `client/src/pages/Quiz.tsx`

Encontre o array `questions` (linha ~8):

```typescript
const questions = [
  {
    id: 0,
    type: "welcome",
    title: "AQUI VOCÊ EDITA O TÍTULO",
    subtitle: "Aqui você edita o subtítulo...",
    options: [
      {
        icon: "💰",
        title: "EDITE AQUI",
        subtitle: "Edite a descrição aqui"
      },
      // ...
    ]
  },
  // ... outras perguntas
];
```

### Editar Cores

Abra: `client/src/index.css`

Procure por `--primary:` (linha ~169):
```css
--primary: 45 100% 51%; /* Amarelo - mude os valores HSL */
```

### Editar Preço

Abra: `client/src/pages/Quiz.tsx`

Procure por "COMPRAR AGORA" (linha ~160 e ~215):
```typescript
COMPRAR AGORA POR 12x DE R$ 52,37
```

Mude o valor para o preço desejado.

### Editar Textos da Página Final

Abra: `client/src/pages/Quiz.tsx`

Procure pela seção "Veja a Transformação" (linha ~80):
```typescript
<h1>Veja a Transformação</h1>
```

Edite os textos "Antes" e "Depois" nas linhas seguintes.

### Editar Logo/Título

Abra: `client/src/pages/Quiz.tsx`

Procure por "NAIPER'S CLUB" para alterar o nome do clube:
```typescript
<h1 className="...">
  NAIPER'S<br />CLUB
</h1>
```

## 📁 Estrutura de Arquivos

```
client/
├── src/
│   ├── pages/
│   │   └── Quiz.tsx          # ⭐ PRINCIPAL - Todo o quiz está aqui
│   ├── App.tsx               # Roteamento
│   ├── index.css             # Cores e estilos
│   └── components/           # Componentes reutilizáveis
└── index.html                # Arquivo HTML base

server/
└── (arquivos do backend - não necessários para o quiz)
```

## 🎯 Passos para Personalização Completa

1. **Editar Perguntas**: `client/src/pages/Quiz.tsx` → array `questions`
2. **Editar Cores**: `client/src/index.css` → variável `--primary`
3. **Editar Preço**: `client/src/pages/Quiz.tsx` → "COMPRAR AGORA POR..."
4. **Editar Nome do Clube**: `client/src/pages/Quiz.tsx` → "NAIPER'S CLUB"
5. **Editar Benefícios Finais**: `client/src/pages/Quiz.tsx` → seção "O que você vai receber"

## 💡 Dicas

- Sempre que editar, salve o arquivo (Ctrl+S ou Cmd+S)
- O Replit recarrega automaticamente após salvar
- Mantenha o formato dos objetos ao editar perguntas
- Use aspas duplas ("") para textos em português

## 🔧 Tecnologias Utilizadas

- React + TypeScript
- Tailwind CSS
- Vite
- shadcn/ui

## 📱 Responsividade

O quiz é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🆘 Problemas Comuns

**Quiz não abre?**
- Clique em "Run" novamente
- Verifique se há erros no console

**Mudanças não aparecem?**
- Salve o arquivo (Ctrl+S)
- Aguarde alguns segundos
- Recarregue a página

**Cores não mudaram?**
- Verifique se editou o arquivo correto: `client/src/index.css`
- Use formato HSL: `45 100% 51%` (sem vírgulas!)

---

**Criado para Naiper's Club** 🌟
