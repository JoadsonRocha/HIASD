const { app, BrowserWindow, ipcMain } = require('electron');
const { dialog } = require('electron')
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    icon: __dirname + '/img/icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  ipcMain.on('play-mp4', (event, fileName) => {
    const filePath = path.join(__dirname, `${fileName}.mp4`);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        dialog.showErrorBox('', 'Hino Não Encontrado.');
        return;
      }
      exec(`xdg-open "${filePath}"`, { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
          dialog.showErrorBox('', 'Hino Não Encontrado.');
          return;
        }
        if (stderr) {
          dialog.showErrorBox('', 'Erro ao abrir o Arquivo.');
          return;
        }
      });
    });
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
