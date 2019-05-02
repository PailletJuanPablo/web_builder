import loadCustomCommands from './commands';
const { bSettings } = require('../bootstrap');
import Templates from '../templates';
import CustomBlocks from './blocks';
import FireUpload from './fireUpload';

export default (editor, opts = {}) => {
  const storageManager = editor.StorageManager;
  const assetManager = editor.AssetManager;

  loadCustomCommands(editor, opts);
  bSettings(editor, opts);
  CustomBlocks(editor, opts);
  FireUpload(editor, opts);

  storageManager.setAutosave(true);

  editor.on('load', () => {
    storageManager.load(['html', 'css'], res => {
      editor.setComponents(res['html']);
    });
  });

  editor.on('run:add_custom_id:before', () => {
    setTimeout(() => {
      document.getElementById('setNewId').addEventListener('click', function() {
        const newId = document.getElementById('newId').value;
        console.log(newId);
        localStorage.setItem('user_web_id', newId);
        window.location.reload();
      });
    }, 1000);
  });
};
