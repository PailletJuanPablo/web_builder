
export default (editor, config) => {
  const cmdm = editor.Commands;
  const storageManager = editor.StorageManager;
  const userId = localStorage.getItem('user_web_id');
  const db = firebase.firestore();
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

  cmdm.add('save-firestore', {
    run: () => {
      console.log('saved');
      var htmldata = editor.getHtml();
      var cssdata = editor.getCss();
      storageManager.store({ html: htmldata, css: cssdata });
      const modal = editor.Modal;
      modal.open({
        title: 'Guardado correctamente con el id: ' + userId,
        content: 'Utilizar este id desde cualquier dispositivo para cargar tu web'
      });
    }
  });

  cmdm.add('load-firestore', {
    run: () => {
      const id = prompt('Ingrese ID a cargar:');
      if (id != null) {
        localStorage.setItem('user_web_id', id);
       
        window.location.reload();
      
      }
    }
  });

  cmdm.add('show_info_id', {
    run: () => {
      const modal = editor.Modal;
      modal.open({
        title: 'Tu Id es ' + userId,
        content: 'El mismo te permitirá restaurar tu progreso desde cualquier lugar utilizando la herramienta "Cargar"'
      });
    }
  });

  cmdm.add('open-site', {
    run: () => {
      window.open("http://cursodesarrolloweb.net/sitios/"+userId);
    }
  });


  

};
