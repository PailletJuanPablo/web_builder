module.exports = {
  stylePrefix: 'sm-',

  sectors: [ {
    name: 'General',
    open: false,
    buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
  },
  {
    name: 'Tamaño',
    open: false,
    buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding']
  },
  {
    name: 'Fuente',
    open: false,
    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow']
  },
  {
    name: 'Decoraciones',
    open: false,
    buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background']
  }],

  // Specify the element to use as a container, string (query) or HTMLElement
  // With the empty value, nothing will be rendered
  appendTo: '',

  // Text to show in case no element selected
  textNoElement: 'Hacer clic en algún elemento para modificar su estilo',

  // Hide the property in case it's not stylable for the
  // selected component (each component has 'stylable' property)
  hideNotStylable: true,

  // Highlight changed properties of the selected component
  highlightChanged: true,

  // Highlight computed properties of the selected component
  highlightComputed: true,

  // Show computed properties of the selected component, if this value
  // is set to false, highlightComputed will not take effect
  showComputed: true,

  // Adds the possibility to clear property value from the target style
  clearProperties: 0,

  // Properties not to take in account for computed styles
  avoidComputed: ['width', 'height']
};
