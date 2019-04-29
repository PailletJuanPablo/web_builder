export default (editor) => {
  const cmdm = editor.Commands;

  cmdm.add('clean-all', {
    run: function(editor, sender) {
      sender && sender.set('active', false);
      if (confirm('Estás seguro de eliminar todo?')) {
        var comps = editor.DomComponents.clear();
        setTimeout(function() {
          localStorage.clear();
        }, 0);
      }
    }
  });
};
