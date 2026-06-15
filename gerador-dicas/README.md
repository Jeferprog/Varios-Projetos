# 💡 Gerador de Dicas

Ferramenta para criar **cards de novidades e dicas** que chamam a atenção do colaborador, no padrão visual dos comunicados internos (selo "NOVIDADE #03", título com emoji, bloco "🚀 O que muda na prática?").

## Como usar

1. Abra o arquivo `index.html` em qualquer navegador (basta dar dois cliques — não precisa de servidor nem instalação).
2. Preencha os campos no painel da esquerda:
   - **Selo** — tipo (Novidade, Dica, Atenção, Melhoria, Tutorial) e número sequencial.
   - **Conteúdo** — emoji, título, subtítulo opcional e o texto "O que é".
   - **O que muda na prática?** — adicione quantos itens quiser, cada um com um destaque em negrito e a explicação do benefício.
   - **Tema** — escolha entre 6 cores (verde, azul, roxo, laranja, vinho e grafite).
3. O preview à direita é atualizado em tempo real.
4. Clique em **⬇️ Baixar PNG** para exportar o card em alta resolução (1040 px de largura), pronto para WhatsApp, e-mail ou mural interno.

## Observações

- A exportação em PNG usa a biblioteca [html2canvas](https://html2canvas.hertzen.com/) carregada via CDN, e as fontes (Poppins/Roboto) vêm do Google Fonts — por isso é necessário estar conectado à internet ao usar a ferramenta.
- A altura do card se ajusta automaticamente à quantidade de conteúdo.

## Exemplo de card gerado

O layout reproduz o modelo de referência:

- Fundo em degradê com círculos decorativos
- Selo branco em pílula no topo
- Título grande em negrito com emoji
- Subtítulo em tom claro
- Card branco interno com a seção "O que muda na prática?"
