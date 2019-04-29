module.exports = {
  stylePrefix: 'trt-',

  // Specify the element to use as a container, string (query) or HTMLElement
  // With the empty value, nothing will be rendered
  appendTo: '',
  labelContainer: 'Configuración del elemento',

  // Placeholder label for text input types
  labelPlhText: 'ej. Texto aquí',

  // Placeholder label for href input
  labelPlhHref: 'ej. https://google.com',

  // Default options for the target input
  optionsTarget: [
    { value: '', name: 'Esta ventana' },
    { value: '_blank', name: 'Nueva ventana' }
  ],

  // Text to show in case no element selected
  textNoElement: 'Selecciona a un elemento para acceder a su configuración'
};
