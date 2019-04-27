var swv = 'sw-visibility';
var expt = 'export-template';
var osm = 'open-sm';
var otm = 'open-tm';
var ola = 'open-layers';
var obl = 'open-blocks';
var ful = 'fullscreen';
var prv = 'preview';

module.exports = {
  stylePrefix: 'pn-',

  // Default panels fa-sliders for features
  defaults: [
    {
      id: 'commands',
      buttons: [{}]
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
            title: 'Editar Code'
          }
        }
      ]
    }
  ],

  // Editor model
  em: null,

  // Delay before show children buttons (in milliseconds)
  delayBtnsShow: 300
};
