/**
 * Gerador de Dicas — Web App (Google Apps Script)
 *
 * Implantação:
 * 1. Crie um novo projeto em https://script.google.com
 * 2. Cole este conteúdo no arquivo "Code.gs"
 * 3. Crie um arquivo HTML chamado exatamente "Index" (Index.html) e cole o
 *    conteúdo do Index.html fornecido junto.
 * 4. Implantar > Nova implantação > Tipo: App da Web
 *    - Executar como: Eu
 *    - Quem tem acesso: defina conforme a necessidade (ex.: "Qualquer pessoa
 *      da organização" ou "Qualquer pessoa")
 * 5. Copie a URL gerada e compartilhe com os colaboradores.
 */

/**
 * Ponto de entrada do Web App. Serve a página do gerador de dicas.
 * @return {HtmlOutput}
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Gerador de Dicas')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}
