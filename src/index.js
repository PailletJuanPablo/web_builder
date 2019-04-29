import $ from 'cash-dom';
import Editor from './editor';
import { isElement, isFunction } from 'underscore';
import polyfills from 'utils/polyfills';
import PluginManager from './plugin_manager';

import CustomConf from './custom';

polyfills();

module.exports = (() => {
  const plugins = new PluginManager();
  const editors = [];
  const defaultConfig = {
    // If true renders editor on init
    autorender: 1,

    // Array of plugins to init
    plugins: [],

    // Custom options for plugins
    pluginsOpts: {}
  };

  return {
    $,

    editors,

    plugins,

    // Will be replaced on build
    version: '<# VERSION #>',

    /**
     * Initialize the editor with passed options
     * @param {Object} config Configuration object
     * @param {string|HTMLElement} config.container Selector which indicates where render the editor
     * @param {Boolean} [config.autorender=true] If true, auto-render the content
     * @param {Array} [config.plugins=[]] Array of plugins to execute on start
     * @param {Object} [config.pluginsOpts={}] Custom options for plugins
     * @return {Editor} Editor instance
     * @example
     * var editor = grapesjs.init({
     *   container: '#myeditor',
     *   components: '<article class="hello">Hello world</article>',
     *   style: '.hello{color: red}',
     * })
     */
    init(config = {}) {


      let localId = localStorage.getItem('user_web_id');
      if(!localId){
        let timestamp = Math.round((new Date()).getTime() / 1000);
        localStorage.setItem('user_web_id', timestamp);
        localId = String(timestamp);
      }
      console.log(localId)

      config.showOffsets = 1;
      config.noticeOnUnload = 0;
      config.container = '#gjs';
      config.height = '100%';
      config.fromElement = true;
      config.storageManager = { autoload: 0 };
      config.showDevices = false;
      config.storageManager = { type: 'firestore' };
      (config.plugins = ['grapesjs-firestore', 'grapesjs-plugin-export']),
        (config.pluginsOpts = {
          'grapesjs-firestore': {
            docId: localId,
            apiKey: 'AIzaSyAsx0BigxXLRmLzYTuVmdF5eh2NFon2hC0',
            authDomain: 'cursomm-a0549.firebaseapp.com',
            projectId: 'cursomm-a0549'
          },
          'grapesjs-plugin-export': {
            btnLabel: 'Descargar mi web',
            filenamePfx: 'misitio',
            root: {
              css: {
                'style.css': ed => ed.getCss()
              },
              'index.html': ed => `
            <!doctype html>
              <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <link rel="stylesheet" href='./css/style.css'>
                  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
                </head>
                <body>${ed.getHtml()}</body>
              <html>
            `
            }
          }
        });

      const els = config.container;
      if (!els) throw new Error("'container' is required");
      config = { ...defaultConfig, ...config };
      config.el = isElement(els) ? els : document.querySelector(els);
      const editor = new Editor(config).init();

      // Load plugins
      config.plugins.forEach(pluginId => {
        let plugin = plugins.get(pluginId);
        const plgOptions = config.pluginsOpts[pluginId] || {};

        // Try to search in global context
        if (!plugin) {
          const wplg = window[pluginId];
          plugin = wplg && wplg.default ? wplg.default : wplg;
        }

        if (plugin) {
          plugin(editor, plgOptions);
        } else if (isFunction(pluginId)) {
          pluginId(editor, plgOptions);
        } else {
          console.warn(`Plugin ${pluginId} not found`);
        }
      });

      // Execute `onLoad` on modules once all plugins are initialized.
      // A plugin might have extended/added some custom type so this
      // is a good point to load stuff like components, css rules, etc.
      editor.getModel().loadOnStart();
      config.autorender && editor.render();
      CustomConf(editor, config);

      editors.push(editor);


      return editor;
    }
  };
})();
