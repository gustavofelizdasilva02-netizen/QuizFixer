# 📝 GUIA RÁPIDO DE EDIÇÃO - Naiper's Club Quiz

## 🎯 ARQUIVO PRINCIPAL

**TODO O QUIZ ESTÁ EM UM ÚNICO ARQUIVO:**
```
client/src/pages/Quiz.tsx
```

## ✏️ Como Editar as Perguntas

### 1. Abra o arquivo Quiz.tsx

### 2. Encontre a linha 24 que começa com: `const questions: Question[] = [`

### 3. Edite cada pergunta:

#### TELA DE BOAS-VINDAS (Pergunta 0)
```typescript
{
  id: 0,
  type: "welcome",
  title: "Me responda uma coisa...",  // ← EDITE O TÍTULO AQUI
  subtitle: "Você gostaria de...",     // ← EDITE O SUBTÍTULO AQUI
  options: [
    {
      icon: "💰",                       // ← MUDE O EMOJI
      title: "70% de Economia",        // ← MUDE O TÍTULO
      subtitle: "Economize até 70%..." // ← MUDE A DESCRIÇÃO
    },
    // ... segunda opção
  ]
}
```

#### PERGUNTA 1 (20%)
```typescript
{
  id: 1,
  progress: 20,                                    // ← Porcentagem (não mude)
  title: "De quem você comprava perfumes...",     // ← EDITE A PERGUNTA
  options: [
    "Sites e lojas no Brasil",                    // ← EDITE AS RESPOSTAS
    "Comprava do Paraguai",
    "De um conhecido"
  ]
}
```

#### PERGUNTA 2 (40%)
```typescript
{
  id: 2,
  progress: 40,
  title: "Você já cogitou revender...",  // ← EDITE AQUI
  options: [
    "Resposta 1",                        // ← EDITE AQUI
    "Resposta 2"
  ]
}
```

#### PERGUNTA 3 (60%) - Com Lista de Benefícios
```typescript
{
  id: 3,
  progress: 60,
  title: "O Naipers Club vai te oferecer:",
  options: [
    "até 70% de economia",          // ← Edite os benefícios
    "possibilidade de fazer...",
    "Cota de compra de 5 perfumes...",
    "Acesso a área de membros..."
  ],
  info: [
    { text: "Maravilha, parece ser muito bom!", selectable: true },  // ← Botões clicáveis
    { text: "Me prova que vale a pena", selectable: true }
  ]
}
```

#### PERGUNTA 4 (80%) - Depoimentos
```typescript
{
  id: 4,
  progress: 80,
  title: "Veja o que os membros...",  // ← EDITE O TÍTULO
  type: "testimonials",
  options: [
    "Também quero receber...",        // ← EDITE AS OPÇÕES
    "Vou deixar essa oportunidade..."
  ]
}
```

#### PERGUNTA 5 (100%) - Resultado
```typescript
{
  id: 5,
  progress: 100,
  type: "result",
  title: "Com base nas suas respostas...",  // ← EDITE O TEXTO
  result: "ALTA!",                           // ← MUDE O RESULTADO
  subtitle: "Você está literalmente..."      // ← EDITE A MENSAGEM
}
```

## 💰 Como Editar o Preço

Procure por "COMPRAR AGORA" no arquivo (existem 2 lugares):

**Linha ~159:**
```typescript
COMPRAR AGORA POR 12x DE R$ 52,37
```

**Linha ~214:**
```typescript
COMPRAR AGORA POR 12x DE R$ 52,37
```

Mude ambos para o preço desejado!

## 🎨 Como Editar as Cores

### Arquivo: `client/src/index.css`

Procure pela linha 169 (dentro de `.dark`):
```css
--primary: 45 100% 51%;  /* Amarelo = H:45, S:100%, L:51% */
```

**Para mudar a cor amarela:**
- Vermelho: `0 100% 50%`
- Azul: `210 100% 50%`
- Verde: `120 100% 50%`
- Roxo: `270 100% 50%`
- Rosa: `330 100% 70%`

## 📱 Como Editar o Nome do Clube

Procure por "NAIPER'S CLUB" no arquivo Quiz.tsx e mude:

```typescript
<h1 className="...">
  NAIPER'S<br />CLUB  {/* ← MUDE AQUI */}
</h1>
```

## 🎁 Como Editar os Benefícios da Página Final

Procure pela seção "O que você vai receber:" (linha ~173):

```typescript
<li className="flex gap-2">
  <Check className="..." />
  <span>Acesso Imediato a área de membros...</span>  {/* ← EDITE AQUI */}
</li>
```

## 📋 Lista Antes x Depois

Procure por "Antes" (linha ~130) e "Depois" (linha ~159):

```typescript
// ANTES (Negativo)
<li className="flex gap-3">
  <span>Gastava em lojas caríssimas</span>  {/* ← EDITE */}
</li>

// DEPOIS (Positivo)
<li className="flex gap-3">
  <span>Economizo economizando até 70%</span>  {/* ← EDITE */}
</li>
```

## ⚡ Dicas Importantes

1. **Sempre salve** após editar (Ctrl+S ou Cmd+S)
2. **Mantenha as aspas duplas** ("")
3. **Não apague as vírgulas** entre itens
4. **Não mude** os `id` e `progress`
5. **Use emojis** copiando e colando (não digite)

## 🚀 Ver as Mudanças

1. Salve o arquivo
2. Aguarde 2-3 segundos
3. A página recarrega automaticamente!

## ❓ Problemas?

**Página em branco?**
- Verifique se você não apagou uma vírgula ou aspas
- Veja se todas as chaves `{}` estão fechadas

**Cor não mudou?**
- Certifique-se de editar o arquivo `index.css`
- Use o formato: `número número% número%`

**Texto não aparece?**
- Verifique se você usou aspas duplas ""
- Não use aspas dentro de aspas (use aspas simples se precisar)

---

✅ **PRONTO! Agora você pode personalizar todo o quiz!**
