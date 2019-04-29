import videoBackground from './video_background';
export default (editor, options = {}) => {
  window.editor = editor;


  // Add components
  videoBackground(editor, options);
 
  // TODO Remove
  //editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
};
