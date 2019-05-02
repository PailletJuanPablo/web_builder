var swv = 'sw-visibility';
var expt = 'export-template';
var osm = 'open-sm';
var otm = 'open-tm';
var ola = 'open-layers';
var obl = 'open-blocks';
var ful = 'fullscreen';
var prv = 'preview';
const svf = 'save-firestore';
const ldf = 'load-firestore';
const userId = localStorage.getItem('user_web_id');

module.exports = {
  stylePrefix: 'pn-',

  // Default panels fa-sliders for features
  defaults: [
    {
      id: 'commands',
      buttons: [
        {
          active: false,
          id: svf,
          className: 'fa fa-save',
          command: svf,
          attributes: { title: 'Guardar' }
        },
        {
          active: false,
          id: ldf,
          className: 'fa fa-cloud-download',
          command: ldf,
          attributes: { title: 'Cargar' }
        },
        {
          active: false,
          command: 'show_info_id',
          id: 'asddas',
          className: 'info_data',
          label: 'Tu id es ' + userId,
          togglable: false,
        },
        {
          id: 'add_custom_id',
          className: 'fa fa-edit ',
          command: 'add_custom_id',
          attributes: { title: 'Añadir nuevo ID!' }
        }
      ]
    },
    {
      id: 'options',
      buttons: [
        {
          active: false,
          id: swv,
          className: 'fa fa-square-o',
          command: swv,
          context: swv,
          attributes: { title: 'Gúias de diseño' }
        },
        {
          id: prv,
          className: 'fa fa-eye',
          command: prv,
          context: prv,
          attributes: { title: 'Vista Previa' }
        },
        {
          id: ful,
          className: 'fa fa-arrows-alt',
          command: ful,
          context: ful,
          attributes: { title: 'Pantalla Completa' }
        },
        {
          id: expt,
          className: 'fa fa-html5',
          command: expt,
          context: expt,
          attributes: { title: 'Ver código final' }
        },
        {
          id: expt,
          className: 'fa fa-download',
          command: 'gjs-export-zip',
          context: expt,
          attributes: { title: 'Exportar sitio' }
        },
        {
          id: 'clean-all',
          className: 'fa fa-trash icon-blank',
          command: 'clean-all',
          attributes: { title: 'Eliminar todo' }
        },
        {
          id: 'open-site',
          className: 'fa fa-play icon-blank',
          command: 'open-site',
          attributes: { title: 'Ver Online!' }
        }
        
      ]
    },
    {
      id: 'views',
      buttons: [
        {
          id: obl,
          className: 'fa fa-th-large',
          command: obl,
          active: true,
          togglable: 0,
          attributes: { title: 'Bloques de Código' }
        },
        {
          id: osm,
          className: 'fa fa-paint-brush',
          command: osm,
          togglable: 0,
          attributes: { title: 'Estilos' }
        },
        {
          id: 'open-code',
          className: 'fa fa-code',
          attributes: { title: 'Modificar Código' },
          command: 'open-code',
          attributes: {
            title: 'Editar Código'
          }
        },
        {
          id: ola,
          className: 'fa fa-align-justify',
          command: ola,
          active: false,
          togglable: 0,
          attributes: { title: 'Estructura de Etiquetas' }
        }
        /*
        {
          id: otm,
          className: 'fa fa-cog',
          command: otm,
          togglable: 0,
          attributes: { title: 'Configuración' }
        },*/
        
      ]
    }
  ],

  // Editor model
  em: null,

  // Delay before show children buttons (in milliseconds)
  delayBtnsShow: 300
};
