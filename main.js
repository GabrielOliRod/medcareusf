// Importa as classes `app` e `BrowserWindow` do módulo `electron`
const { app, BrowserWindow } = require('electron');
// Importa o módulo `path` para manipulação de caminhos de arquivos
const path = require('path');

// Função que cria uma nova janela do aplicativo
function createWindow() {
  // Cria uma instância de `BrowserWindow` com as dimensões definidas
  const win = new BrowserWindow({
    width: 400, // Define a largura da janela em pixels
    height: 600, // Define a altura da janela em pixels
    webPreferences: {
      // Define o caminho para o arquivo `renderer.js` que será carregado antes do conteúdo da página
      preload: path.join(__dirname, 'renderer.js') // `__dirname` garante o caminho correto do arquivo
    }
  });

  // Carrega o arquivo `index.html` na janela recém-criada
  win.loadFile('index.html');
}

// Evento que ocorre quando o aplicativo está pronto para iniciar
app.whenReady().then(() => {
  createWindow(); // Cria a janela do aplicativo

  // Evento `activate` que dispara em sistemas como macOS ao clicar no ícone do aplicativo quando não há janelas abertas
  app.on('activate', () => {
    // Verifica se não há nenhuma janela aberta e, se for o caso, cria uma nova
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Evento que dispara quando todas as janelas do aplicativo são fechadas
app.on('window-all-closed', () => {
  // No macOS, é comum que o aplicativo continue rodando, mesmo sem janelas abertas
  // Este código fecha o aplicativo se não estiver no macOS
  if (process.platform !== 'darwin') {
    app.quit(); // Encerra o aplicativo
  }
});