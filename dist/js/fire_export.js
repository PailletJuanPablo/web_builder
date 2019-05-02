/*! grapesjs-firestore - 0.1.1 */
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('grapesjs')))
    : 'function' == typeof define && define.amd
    ? define(['grapesjs'], t)
    : 'object' == typeof exports
    ? (exports['grapesjs-firestore'] = t(require('grapesjs')))
    : (e['grapesjs-firestore'] = t(e.grapesjs));
})(window, function(e) {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 1))
    );
  })([
    function(t, n) {
      t.exports = e;
    },
    function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r,
        o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n(0),
        c = (r = i) && r.__esModule ? r : { default: r };
      t.default = c.default.plugins.add('grapesjs-firestore', function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = o({ apiKey: '', storageBucket: '', authDomain: '', projectId: '', docId: 'gjs', collectionName: 'templates', enableOffline: !0, settings: {  } }, t),
          r = e.StorageManager,
          i = void 0,
          c = void 0,
          a = void 0,
          s = void 0,
          u = n.apiKey,
          f = n.authDomain,
          p = n.projectId,
          d = n.settings,
          st = n.storageBucket,
          l = function(e) {
            return r.onError('firestore', e.code || e);
          },
          g = function() {
            return a || n.docId;
          },
          j = function(e) {
            !(function(e) {
              if (s) return e(s);
              firebase.initializeApp({ apiKey: u, authDomain: f, projectId: p, storageBucket: st });
              var t = firebase.firestore();
              t.settings(d);
              var r = function() {
                (i = firebase.firestore()), (s = i.collection(n.collectionName)), e(s);
              };
              n.enableOffline
                ? t
                    .enablePersistence()
                    .then(r)
                    .catch(l)
                : r();
            })(function(t) {
              (c = t.doc(g())), e(c);
            });
          };
        r.add('firestore', {
          getDoc: function() {
            return c;
          },
          getDocId: g,
          setDocId: function(e) {
            a = e;
          },
          load: function(e, t, n) {
            j(function(e) {
              e.get()
                .then(function(e) {
                  return e.exists && t(e.data());
                })
                .catch(n);
            });
          },
          store: function(e, t, n) {
            j(function(r) {
              r.set(e)
                .then(t)
                .catch(n);
            });
          }
        });
      });
    }
  ]);
});
//# sourceMappingURL=grapesjs-firestore.min.js.map
