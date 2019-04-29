export default (editor, config = {}) => {
  const c = config;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  let cats = c.blockCategories;

  // LAYOUT

  if (cats.layout) {

    bm.add('single-col').set({
      label: 'Fila de 1 bloque (Ancho comprimido)' ,
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container">
          <div class="row">
            <div class="col-md-12">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
          </div>
        </div>
    `
    });

    bm.add('single-col-fl').set({
      label: 'Fila de 1 bloque (Ancho completo)' ,
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
          </div>
        </div>
    `
    });


    bm.add('two-col').set({
      label: 'Fila de 2 bloques (Ancho comprimido)',
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container">
          <div class="row">
            <div class="col-6">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-6">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
          </div>
        </div>
    `
    });

    bm.add('two-col-fl').set({
      label: 'Fila de 2 bloques (Ancho completo)',
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container-fluid">
          <div class="row">
            <div class="col-6">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-6">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
          </div>
        </div>
    `
    });


    bm.add('three-col').set({
      label: 'Fila de 3 bloques (Ancho comprimido)',
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container">
          <div class="row">
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
          </div>
          </div>
        </div>
    `
    });

    bm.add('three-col-fl').set({
      label: 'Fila de 3 bloques (Ancho completo)',
      category: 'Estructura',
      attributes: { class: 'fa fa-columns' },
      content: `
        <div class="container-fluid">
          <div class="row">
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
            </div>
            <div class="col-4">
            <p> Texto de demostración (puede agregar otros bloques aquí) </p>
          </div>
          </div>
        </div>
    `
    });



    if (blocks.column_break) {
      bm.add('column_break').set({
        label: `
            <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fas" data-icon="equals" class="svg-inline--fa fa-equals fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 304H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32zm0-192H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            <div class="gjs-block-label"> Salto de bloques </div>
        `,
        category: 'Estructura',
        draggable: true,
        content: {
          type: 'column_break'
        }
      });
    }

    
    
  }

  // COMPONENTS

  if (cats.components) {
  
      bm.add('card', {
        label: c.labels.card,
        category: 'Básicos',
        attributes: { class: 'fa fa-credit-card' },
        content: {
          type: 'card'
        }
      });

    
  // TYPOGRAPHY

  if (cats.typography) {
    if (blocks.text) {
      bm.add('text', {
        label: c.labels.text,
        category: 'Textos',
        attributes: { class: 'fa fa-font' },
        content: {
          type: 'text',
          content: 'Doble clic para modificar el texto'
        }
      });
    }

    if (blocks.header) {
      bm.add('header', {
        label: c.labels.header,
        category: 'Textos',
        attributes: { class: 'fa fa-header' },
        content: {
          type: 'header',
          content: 'Encabezado'
        }
      });
    }

    if (blocks.paragraph) {
      bm.add('paragraph', {
        label: c.labels.paragraph,
        category: 'Textos',
        attributes: { class: 'fa fa-paragraph' },
        content: {
          type: 'paragraph',
          content: 'Texto de relleno del párrafo.'
        }
      });
    }
  }

  // BASIC

  if (cats.basic) {
    if (blocks.link) {
      bm.add('link', {
        label: c.labels.link,
        category: 'Básicos',
        attributes: { class: 'fa fa-link' },
        content: {
          type: 'link',
          content: 'Texto del Link'
        }
      });
    }

    if (blocks.image) {
      // example of how we might include encoded image as default src. i like the idea but it mucks up the settings src field
      //let default_src = 'data:image/png;base64,iVB\ORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEU\AAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8\yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAEl\FTkSuQmCC'
      bm.add('image', {
        label: c.labels.image,
        category: 'Básicos',
        attributes: { class: 'fa fa-picture-o' },
        content: {
          type: 'image'
        }
      });
    }

    bm.add('media_object').set({
      label: 'Texto con imagen a la derecha',
      category: 'Básicos',
      attributes: { class: 'fa fa-columns' },
      content: `<div class="media">
               <img class="mr-3" src="">
               <div class="media-body">
               <h5>Encabezado Bloque</h5>
               <div>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
               </div>
               </div>`
    });


  }

  // FORMS
  if (blocks.button) {
    bm.add('button', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">Botón Principal</div>`,
      category: 'Botones',
      content: '<button class="btn btn-primary"> Texto Botón </button>'
    });
  }

  if (blocks.button) {
    bm.add('button-danger', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">Botón Alerta</div>`,
      category: 'Botones',
      content: '<button class="btn btn-danger"> Texto Botón </button>'
    });
  }

}};
