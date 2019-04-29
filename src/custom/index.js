import loadCustomCommands from './commands';
const { bSettings } = require('../bootstrap');
import Templates from '../templates';
export default (editor, opts = {}) => {
  const storageManager = editor.StorageManager;

  loadCustomCommands(editor);
  bSettings(editor, opts);

  storageManager.setAutosave(true);


  editor.BlockManager.add('testBlock', {
    label: 'Texto Centrado',
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    type: 'div',
    category: 'Básicos',
    content: `<p style="padding-top:50px; padding-bottom:50px; text-align:center"> Doble clic para editar este texto </p> `
  });

  editor.BlockManager.add('testBlock2', {
    label: 'Texto con imagen arriba',
    attributes: { class: 'fa fa-picture-o' },
    type: 'div',
    category: 'Básicos',
    content: `
                      <style>

              .img-top-demo {
                  width: 100%;
                  height: 150px;
                  text-align: center;
                  padding-top: 50px;
                  background-image: url('https://ak8.picdn.net/shutterstock/videos/31579318/thumb/1.jpg');
                  color: white;
              }

              .texto-bottom {
                padding-top: 25px;
                  text-align: center;
                  font-weight: bold;
              }

              </style>

              <div class="img-top-demo"> <h1> Editor en tiempo real</h1> </div>

              <div class="texto-bottom">
              <p> La finalidad de esta herramienta es aprender HTML y CSS por la práctica, pudiendo visualizar los elementos en tiempo real </p>
              <p> A la derecha podrás visualizar distintas opciones para utilizar este editor </p>
              </div>`
  });
  


};
