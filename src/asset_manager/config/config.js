import {Spinner} from '../../custom/loader';

module.exports = {
  // Default assets
  // eg. [
  //  'https://...image1.png',
  //  'https://...image2.png',
  //  {type: 'image', src: 'https://...image3.png', someOtherCustomProp: 1},
  //  ..
  // ]
  assets: [],

  // Content to add where there is no assets to show
  // eg. 'No <b>assets</b> here, drag to upload'
  noAssets: '',

  // Style prefix
  stylePrefix: 'am-',

  // Upload endpoint, set `false` to disable upload
  // upload: 'https://endpoint/upload/assets',
  // upload: false,
  upload: true,

  // The name used in POST to pass uploaded files
  uploadName: 'files',

  // Custom headers to pass with the upload request
  headers: {},

  // Custom parameters to pass with the upload request, eg. csrf token
  params: {},

  // The credentials setting for the upload request, eg. 'include', 'omit'
  credentials: 'include',

  // Allow uploading multiple files per request.
  // If disabled filename will not have '[]' appended
  multiUpload: false,

  // If true, tries to add automatically uploaded assets.
  // To make it work the server should respond with a JSON containing assets
  // in a data key, eg:
  // {
  //  data: [
  //    'https://.../image.png',
  //    ...
  //    {src: 'https://.../image2.png'},
  //    ...
  //  ]
  // }
  autoAdd: 1,

  // Text on upload input
  uploadText: 'Arrastrar archivos o hacer click aquí para subir',

  // Label for the add button
  addBtnText: 'Añadir',

  // To upload your assets, the module uses Fetch API, with this option you
  // overwrite it with something else.
  // It should return a Promise
  // @example
  // customFetch: (url, options) => axios(url, { data: options.body }),
  customFetch: '',

  // Custom uploadFile function.
  // Differently from the `customFetch` option, this gives a total control
  // over the uploading process, but you also have to emit all `asset:upload:*` events
  // by yourself (if you need to use them somewhere)
  // @example
  // uploadFile: (e) => {
  //   var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
  //   // ...send somewhere
  // }
  uploadFile: e => {

    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    console.log(file);
    if(file){
      document.getElementById("custom_loader").style.display = "block";
      document.getElementById("loader_text").style.display = "block";
  
      console.log(e)
      uploadToFirebase(file).then((url) => {
        editor.AssetManager.add(url);
        document.getElementById("custom_loader").style.display = "none";
        document.getElementById("loader_text").style.display = "none";
  
      }).catch((error) => {
        document.getElementById("custom_loader").style.display = "none";
        document.getElementById("loader_text").style.display = "none";
        alert('Hubo un error subiendo la imagen');

      });
    }
 
    // console.log(files)
  },

  // In the absence of 'uploadFile' or 'upload' assets will be embedded as Base64
  embedAsBase64: 0,

  // Handle the image url submit from the built-in 'Add image' form
  // @example
  // handleAdd: (textFromInput) => {
  //   // some check...
  //   editor.AssetManager.add(textFromInput);
  // }
  handleAdd: '',

  // Enable an upload dropzone on the entire editor (not document) when dragging
  // files over it
  // If active the dropzone disable/hide the upload dropzone in asset modal,
  // otherwise you will get double drops (#507)
  dropzone: 0,

  // Open the asset manager once files are been dropped via the dropzone
  openAssetsOnDrop: 1,

  // Any dropzone content to append inside dropzone element
  dropzoneContent: '',

  // Default title for the asset manager modal
  modalTitle: 'Seleccionar imagen',

  //Default placeholder for input
  inputPlaceholder: 'Puedes escribir urls, como http://url/de/la/imagen.jpg'
};


const uploadToFirebase = file => {
  return new Promise((resolve, reject) => {
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
      resolve(url)
   //   console.log(url);
    })
    .catch((error) => reject(error));
  })

};
