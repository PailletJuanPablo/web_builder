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
        content:
          'Utilizar este id desde cualquier dispositivo para cargar tu web. También podrás verla online en el siguiente link: <a style="color: white" target="_blank" href="http://cursodesarrolloweb.net/sitios/' +
          userId +
          '" >  http://cursodesarrolloweb.net/sitios/' +
          userId +
          '</a>'
      });
    }
  });

  cmdm.add('load-firestore', {
    run: () => {
      const id = prompt('Ingrese ID a cargar:');
      if (id != null) {
        const template = db.collection('templates').doc(id);

        template
          .get()
          .then(function(doc) {
            if (template.exists) {
              localStorage.setItem('user_web_id', id);
              window.location.reload();
            } else {
              alert('No existe una pagina registrada con ese id');
            }
          })
          .catch(function(error) {
            alert('Error extraño del server, intenta más tarde y por favor notificarme. Gracias!')
            console.log('Error:', error);
          });
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

  cmdm.add('add_custom_id', {
    run: () => {
      const modal = editor.Modal;
      modal.open({
        title: 'Establecer ID personalizado',
        content: `Podes agregar un nuevo ID, la página se actualizará con el mismo. <input id="newId"> <button style="color: #fff;background-color: #007bff;border-color: #007bff" id="setNewId"> Establecer </button>`
      });
    }
  });


  cmdm.add('open-site', {
    run: () => {
      window.open('http://cursodesarrolloweb.net/sitios/' + userId);
    }
  });
};
