import loadCustomCommands from './commands';
const { bSettings } = require('../bootstrap');
import Templates from '../templates';
import CustomBlocks from './blocks';

export default (editor, opts = {}) => {
  const storageManager = editor.StorageManager;

  loadCustomCommands(editor, opts);
  bSettings(editor, opts);
  CustomBlocks(editor, opts);

  storageManager.setAutosave(true);

  editor.on('load', () => {
    storageManager.load(['html', 'css'], res => {
      editor.setComponents(res['html']);
    });
  });
};
