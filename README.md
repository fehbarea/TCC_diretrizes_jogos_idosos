# Diretrizes Web - Interface de Acessibilidade

Uma interface React moderna e acessível para apresentação de diretrizes de acessibilidade web, seguindo os princípios WCAG (Web Content Accessibility Guidelines).

## Características

-  **Interface Acessível**: Segue diretrizes WCAG 2.1
-  **Design Responsivo**: Funciona em desktop e mobile
-  **Navegação por Teclado**: Totalmente acessível via teclado
-  **Contraste Adequado**: Cores com contraste mínimo de 4.5:1
-  **Agrupamento por Tipo**: Diretrizes organizadas por categoria
-  **Expansão Interativa**: Clique na seta para ver detalhes
-  **Fundo Claro**: Design limpo com fundo cinza claro

## Estrutura dos Dados

Cada diretriz contém os seguintes campos:

```json
{
  "id": 1,
  "tipo": "Acessibilidade",
  "diretriz": "Descrição da diretriz",
  "exemplo": "Exemplo prático de implementação",
  "excecao": "Casos onde a diretriz não se aplica",
  "comentario": "Informações adicionais e dicas"
}
```

## Tipos de Diretrizes

- **Acessibilidade**: Princípios gerais de acessibilidade
- **Navegação**: Estrutura e navegação do site
- **Conteúdo**: Formatação e estrutura do conteúdo
- **Multimídia**: Vídeos, áudios e elementos interativos

## Como Usar

1. **Visualizar Diretrizes**: As diretrizes são exibidas agrupadas por tipo
2. **Expandir Detalhes**: Clique na seta () ao lado de cada diretriz
3. **Navegação por Teclado**: Use Tab para navegar e Enter para expandir
4. **Leitores de Tela**: Totalmente compatível com tecnologias assistivas

## Tecnologias Utilizadas

- React 19.1.1
- CSS3 com foco em acessibilidade
- JSON para armazenamento de dados
- Princípios WCAG 2.1

## Executar o Projeto

```bash
npm install
npm start
```

A aplicação será aberta em `http://localhost:3000`

## Acessibilidade

Esta interface implementa as seguintes práticas de acessibilidade:

- **Semântica HTML**: Uso correto de elementos semânticos
- **ARIA**: Atributos ARIA para melhor experiência com leitores de tela
- **Foco Visível**: Indicadores claros de foco para navegação por teclado
- **Contraste**: Cores com contraste adequado para legibilidade
- **Responsividade**: Design que se adapta a diferentes tamanhos de tela
- **Animações**: Respeita preferências de movimento reduzido

## Estrutura do Projeto

```
src/
 components/
    DiretrizItem.js      # Componente individual de diretriz
    DiretrizItem.css     # Estilos do componente
    ListaDiretrizes.js   # Lista principal com agrupamento
    ListaDiretrizes.css  # Estilos da lista
 data/
    diretrizes.json      # Dados das diretrizes
 App.js                   # Componente principal
 App.css                  # Estilos globais
 index.css               # Estilos base
```
