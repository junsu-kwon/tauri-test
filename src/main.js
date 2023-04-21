import { WebviewWindow } from '@tauri-apps/api/window';
const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke('greet', { name: greetInputEl.value });
}

window.addEventListener('DOMContentLoaded', () => {
  greetInputEl = document.querySelector('#greet-input');
  greetMsgEl = document.querySelector('#greet-msg');
  document
    .querySelector('#greet-button')
    .addEventListener('click', () => greet());
});

const mainWindow = WebviewWindow.getByLabel('main');


import { emit, listen } from '@tauri-apps/api/event'

const unlisten = await listen('click', (event) => {
  console.log(event.theMessage);
})

emit('click', {
  theMessage: 'Tauri is awesome!',
})