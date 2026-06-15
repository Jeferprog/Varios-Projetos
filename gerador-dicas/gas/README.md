# Gerador de Dicas — Implantação via Google Apps Script (GAS)

Esta pasta contém os arquivos prontos para publicar o gerador como um **Web App**
no Google Apps Script, gerando uma URL que qualquer colaborador pode acessar pelo
navegador (sem instalação).

## Arquivos

| Arquivo no GAS | Origem nesta pasta |
| -------------- | ------------------ |
| `Code.gs`      | `Code.gs`          |
| `Index.html`   | `Index.html`       |

> ⚠️ O arquivo HTML **precisa** se chamar exatamente **`Index`** no projeto GAS,
> pois é assim que o `doGet()` o referencia (`createHtmlOutputFromFile('Index')`).

## Passo a passo

1. Acesse <https://script.google.com> e clique em **Novo projeto**.
2. No arquivo `Code.gs` (já existente), apague o conteúdo padrão e cole o conteúdo de **`Code.gs`** desta pasta.
3. Clique em **+ > HTML**, nomeie o arquivo como **`Index`** e cole o conteúdo de **`Index.html`** desta pasta.
4. Salve o projeto (💾).
5. Clique em **Implantar > Nova implantação**.
   - Em **Tipo**, escolha **App da Web**.
   - **Executar como:** Eu (`seu-email@...`).
   - **Quem tem acesso:** escolha conforme a necessidade — por exemplo
     *"Qualquer pessoa da [organização]"* (acesso interno) ou
     *"Qualquer pessoa"* (acesso público).
6. Clique em **Implantar**, autorize o acesso quando solicitado e copie a **URL do app da Web**.
7. Compartilhe a URL com a equipe. Para atualizar o gerador no futuro, edite os
   arquivos e use **Implantar > Gerenciar implantações > ✏️ Editar > Nova versão**.

## Observações

- A exportação em PNG (html2canvas) e as fontes (Google Fonts) são carregadas via
  CDN, portanto é necessário estar conectado à internet.
- O HtmlService roda em modo `IFRAME`; o download do PNG via clique funciona
  normalmente nesse modo.
