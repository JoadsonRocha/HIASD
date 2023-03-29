/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const { ipcRenderer } = require('electron');

const playButton = document.getElementById('play-button');
const fileInput = document.getElementById('file-input');

playButton.addEventListener('click', () => {
  const fileName = fileInput.value;

  if (fileName) {
    ipcRenderer.send('play-mp4', fileName);
  }
});





