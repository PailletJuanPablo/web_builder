import loadCommands from './commands';
import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadDevices from './devices';

export const bSettings = (editor, opts = {}) => {
  window.editor = editor;

  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];

  const default_blocks = {
    default: true,
    text: true,
    link: true,
    image: true,
    // LAYOUT
    container: true,
    row: true,
    column: true,
    column_break: true,
    media_object: true,
    // COMPONENTS
    alert: true,
    tabs: true,
    badge: true,
    button: true,
    button_group: true,
    button_toolbar: true,
    card: true,
    card_container: true,
    collapse: true,
    dropdown: true,
    // TYPOGRAPHY
    header: true,
    paragraph: true,
    // BASIC
    list: true,
    // FORMS
    form: true,
    input: true,
    form_group_input: true,
    input_group: true,
    textarea: true,
    select: true,
    label: true,
    checkbox: true,
    radio: true
  };

  const default_labels = {
    // LAYOUT
    container: 'Contenedor',
    row: 'Fila',
    column: 'Columna',
    column_break: 'Cierre de columna',
    media_object: 'Objeto multimedia',
    // COMPONENTS
    button: 'Botón',
    card: 'Carta',
    card_container: 'Contenedor de cartas',
    // TYPOGRAPHY
    text: 'Texto',
    header: 'Encabezado',
    paragraph: 'Párrafo',
    // BASIC
    image: 'Imagen',
    link: 'Link',
    list: 'Lista',
    // FORMS
    type_button: 'Botón'
  };

  const default_categories = {
    layout: true,
    components: true,
    typography: true,
    basic: true,
    forms: true
  };

  let options = {
    ...{
      blocks: Object.assign(default_blocks, opts_blocks),
      labels: Object.assign(default_labels, opts_labels),
      blockCategories: Object.assign(default_categories, opts_categories),
      optionsStringSeparator: '::',
      gridDevices: true,
      gridDevicesPanel: false,
      classNavigation: 'nav',
      classTabPanes: 'tab-content',
      classTabPane: 'tab-pane',
      classTab: 'nav-item'
    },
    ...opts
  };

  editor.addComponents(`
    <style>

      /* Estilos generales */

       .container,  .container-fluid,
       .tab-pane,
       .row,
       .col,  [class^="col-"] {
        min-height: 1.5rem !important;
      }
       .w-100 {
        min-height: .25rem !important;
        background-color: rgba(0,0,0,0.1);
      }
       img {
        min-width: 25px;
        min-height: 25px;
        background-color: rgba(0,0,0,0.5);
      }

      /* Components */
      
       .btn-group,
       .btn-toolbar {
        padding-right: 1.5rem !important;
        min-height: 1.5rem !important;
      }
       .card,
       .card-group,  .card-deck,  .card-columns {
        min-height: 1.5rem !important;
      }
       .collapse {
        display: block !important;
        min-height: 1.5rem !important;
      }
       .dropdown {
        display: block !important;
        min-height: 1.5rem !important;
      }
       .dropdown-menu {
        min-height: 1.5rem !important;
        display: block !important;
      }

      .row, .container {
                min-height: 75px !important;
      }
      img {
        max-width: 100%
      }

    </style>
  `);

  // Add components
  loadCommands(editor, options);
  loadTraits(editor, options);
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadDevices(editor, options);

  // TODO Remove
  //editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
};
