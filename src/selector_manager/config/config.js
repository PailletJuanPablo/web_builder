module.exports = {
  // Style prefix
  stylePrefix: 'clm-',

  // Specify the element to use as a container, string (query) or HTMLElement
  // With the empty value, nothing will be rendered
  appendTo: '',

  // Default selectors
  selectors: [],

  // Label for selectors
  label: 'Clases',

  // Label for states
  statesLabel: '- Estado -',

  selectedLabel: 'Seleccionado',

  // States
  states: [
    { name: 'hover', label: 'Hover' },
    { name: 'active', label: 'Click' },
    { name: 'nth-of-type(2n)', label: 'Even/Odd' }
  ]
};
