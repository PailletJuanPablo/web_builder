export default (editor, config) => {
  const am = editor.AssetManager;

  editor.on('asset:upload:response', ( data) => {
    console.log('from event', data)
    // do something
 })

  am.uploadFile = e => {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    console.log(file);
    uploadToFirebase(file);
    // console.log(files)
  };

  am.uploadToFirebase = file => {
    // Get a reference to the storage service, which is used to create references in your storage bucket

    // Create a storage reference from our storage service
    var ref = firebase
      .app()
      .storage('gs://cursomm-a0549.appspot.com')
      .ref();
    //const ref = firebase.storage('gs://cursomm-a0549.appspot.com').ref();

    const name = +new Date() + '-' + file.name;
    const metadata = {
      contentType: file.type
    };

    console.log(name);

    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
      //  am.add(url);
      })
      .catch(console.error);
  };
};
