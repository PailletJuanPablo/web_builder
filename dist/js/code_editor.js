/*! grapesjs-code-editor - 0.1.1 */
!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports['grapesjs-code-editor'] = t())
    : (e['grapesjs-code-editor'] = t());
})('undefined' != typeof self ? self : this, function() {
  return (function(e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var s = (i[n] = { i: n, l: !1, exports: {} });
      return e[n].call(s.exports, s, s.exports, t), (s.l = !0), s.exports;
    }
    var i = {};
    return (
      (t.m = e),
      (t.c = i),
      (t.d = function(e, i, n) {
        t.o(e, i) || Object.defineProperty(e, i, { configurable: !1, enumerable: !0, get: n });
      }),
      (t.n = function(e) {
        var i =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(i, 'a', i), i;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 0))
    );
  })([
    function(e, t, i) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.panels = t.codeCommand = void 0);
      var s = i(1),
        o = n(s),
        r = i(3),
        a = n(r),
        l = null,
        d = {
          id: 'open-code',
          run: function(e, t) {
            l || (l = new o.default(e)), l.showCodePanel();
          },
          stop: function(e, t) {
            l && l.hideCodePanel();
          }
        };
      (t.codeCommand = d), (t.panels = a.default);
    },
    function(e, t, i) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = (function() {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t;
          };
        })(),
        o = i(2),
        r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        a = document.getElementById.bind(document),
        l = (function() {
          function e(t) {
            n(this, e), (this.editor = t), (this.isShowing = !0), this.buildCodePanel();
          }
          return (
            s(e, [
              {
                key: 'findPanel',
                value: function() {
                  var e = this.editor.Panels,
                    t = 'views-container';
                  return e.getPanel(t) || e.addPanel({ id: t });
                }
              },
              {
                key: 'buildCodeEditor',
                value: function(e) {
                  var t = this.editor.CodeManager.getViewer('CodeMirror').clone();
                  return (
                    t.set({
                      codeName: 'html' === e ? 'htmlmixed' : 'css',
                      readOnly: !1,
                      theme: 'hopscotch',
                      autoBeautify: !0,
                      autoCloseTags: !0,
                      autoCloseBrackets: !0,
                      styleActiveLine: !0,
                      smartIndent: !0
                    }),
                    t
                  );
                }
              },
              {
                key: 'buildSection',
                value: function(e, t, i) {
                  var n = document.createElement('section');
                  return (
                    (n.innerHTML = '<div class="codepanel-separator">\n        <div class="codepanel-label">' + e + '</div>\n        <button id="cp-save-' + e + '">Guardar</button>\n      </div>'),
                    n.appendChild(i),
                    this.codePanel.appendChild(n),
                    n
                  );
                }
              },
              {
                key: 'buildCodePanel',
                value: function() {
                  var e = this,
                    t = this.findPanel();
                  (this.codePanel = document.createElement('div')),
                    this.codePanel.classList.add('code-panel'),
                    (this.htmlCodeEditor = this.buildCodeEditor('html')),
                    (this.cssCodeEditor = this.buildCodeEditor('css'));
                  var i = document.createElement('textarea'),
                    n = document.createElement('textarea'),
                    s = [this.buildSection('html', this.htmlCodeEditor, i), this.buildSection('css', this.cssCodeEditor, n)];
                  return (
                    t.set('appendContent', this.codePanel).trigger('change:appendContent'),
                    this.htmlCodeEditor.init(i),
                    this.cssCodeEditor.init(n),
                    this.updateEditorContents(),
                    a('cp-save-html').addEventListener('click', this.updateHtml.bind(this)),
                    a('cp-save-css').addEventListener('click', this.updateCss.bind(this)),
                    (0, r.default)(s, { direction: 'vertical', sizes: [50, 50], minSize: 100, gutterSize: 2, onDragEnd: this.refreshEditors.bind(this) }),
                    this.editor.on('component:add', function(t) {
                      e.updateEditorContents();
                    }),
                    this.editor.on('component:remove', function(t) {
                      e.updateEditorContents();
                    }),
                    this.editor.on('component:update', function(t) {
                      e.updateEditorContents();
                    }),
                    this.codePanel
                  );
                }
              },
              {
                key: 'showCodePanel',
                value: function() {
                  (this.isShowing = !0),
                    this.updateEditorContents(),
                    (this.codePanel.style.display = 'block'),
                    setTimeout(this.refreshEditors.bind(this), 320),
                    (this.editor.$('.gjs-pn-views-container').get(0).style.width = '35%'),
                    (this.editor.$('.gjs-cv-canvas').get(0).style.width = '65%');
                }
              },
              {
                key: 'hideCodePanel',
                value: function() {
                  this.codePanel && (this.codePanel.style.display = 'none'),
                    (this.editor.$('.gjs-pn-views-container').get(0).style.width = '15%'),
                    (this.editor.$('.gjs-cv-canvas').get(0).style.width = '85%'),
                    (this.isShowing = !1);
                }
              },
              {
                key: 'refreshEditors',
                value: function() {
                  this.htmlCodeEditor.editor.refresh(), this.cssCodeEditor.editor.refresh();
                }
              },
              {
                key: 'updateHtml',
                value: function() {
                  var e = this.htmlCodeEditor.editor.getValue();
                  e && e !== this.previousHtmlCode && ((this.previousHtmlCode = e), this.editor.setComponents(e));
                }
              },
              {
                key: 'updateCss',
                value: function() {
                  var e = this.cssCodeEditor.editor.getValue();
                  e && e !== this.previousCssCode && ((this.previousCssCode = e), this.editor.setStyle(e));
                }
              },
              {
                key: 'updateEditorContents',
                value: function() {
                  this.isShowing && (this.htmlCodeEditor.setContent(this.editor.getHtml()), this.cssCodeEditor.setContent(this.editor.getCss({ avoidProtected: !0 })));
                }
              }
            ]),
            e
          );
        })();
      t.default = l;
    },
    function(e, t, i) {
      /*! Split.js - v1.3.5 */
      !(function(t, i) {
        e.exports = i();
      })(0, function() {
        'use strict';
        var e = window,
          t = e.document,
          i = 'addEventListener',
          n = 'removeEventListener',
          s = 'getBoundingClientRect',
          o = function() {
            return !1;
          },
          r = e.attachEvent && !e[i],
          a =
            ['', '-webkit-', '-moz-', '-o-']
              .filter(function(e) {
                var i = t.createElement('div');
                return (i.style.cssText = 'width:' + e + 'calc(9px)'), !!i.style.length;
              })
              .shift() + 'calc',
          l = function(e) {
            return 'string' == typeof e || e instanceof String ? t.querySelector(e) : e;
          };
        return function(d, c) {
          function u(e, t, i) {
            var n = N(z, t, i);
            Object.keys(n).forEach(function(t) {
              return (e.style[t] = n[t]);
            });
          }
          function h(e, t) {
            var i = D(z, t);
            Object.keys(i).forEach(function(t) {
              return (e.style[t] = i[t]);
            });
          }
          function f(e) {
            var t = E[this.a],
              i = E[this.b],
              n = t.size + i.size;
            (t.size = (e / this.size) * n), (i.size = n - (e / this.size) * n), u(t.element, t.size, this.aGutterSize), u(i.element, i.size, this.bGutterSize);
          }
          function m(e) {
            var t;
            this.dragging &&
              ((t = 'touches' in e ? e.touches[0][S] - this.start : e[S] - this.start),
              t <= E[this.a].minSize + O + this.aGutterSize
                ? (t = E[this.a].minSize + this.aGutterSize)
                : t >= this.size - (E[this.b].minSize + O + this.bGutterSize) && (t = this.size - (E[this.b].minSize + this.bGutterSize)),
              f.call(this, t),
              c.onDrag && c.onDrag());
          }
          function p() {
            var e = E[this.a].element,
              t = E[this.b].element;
            (this.size = e[s]()[z] + t[s]()[z] + this.aGutterSize + this.bGutterSize), (this.start = e[s]()[C]);
          }
          function v() {
            var t = this,
              i = E[t.a].element,
              s = E[t.b].element;
            t.dragging && c.onDragEnd && c.onDragEnd(),
              (t.dragging = !1),
              e[n]('mouseup', t.stop),
              e[n]('touchend', t.stop),
              e[n]('touchcancel', t.stop),
              t.parent[n]('mousemove', t.move),
              t.parent[n]('touchmove', t.move),
              delete t.stop,
              delete t.move,
              i[n]('selectstart', o),
              i[n]('dragstart', o),
              s[n]('selectstart', o),
              s[n]('dragstart', o),
              (i.style.userSelect = ''),
              (i.style.webkitUserSelect = ''),
              (i.style.MozUserSelect = ''),
              (i.style.pointerEvents = ''),
              (s.style.userSelect = ''),
              (s.style.webkitUserSelect = ''),
              (s.style.MozUserSelect = ''),
              (s.style.pointerEvents = ''),
              (t.gutter.style.cursor = ''),
              (t.parent.style.cursor = '');
          }
          function g(t) {
            var n = this,
              s = E[n.a].element,
              r = E[n.b].element;
            !n.dragging && c.onDragStart && c.onDragStart(),
              t.preventDefault(),
              (n.dragging = !0),
              (n.move = m.bind(n)),
              (n.stop = v.bind(n)),
              e[i]('mouseup', n.stop),
              e[i]('touchend', n.stop),
              e[i]('touchcancel', n.stop),
              n.parent[i]('mousemove', n.move),
              n.parent[i]('touchmove', n.move),
              s[i]('selectstart', o),
              s[i]('dragstart', o),
              r[i]('selectstart', o),
              r[i]('dragstart', o),
              (s.style.userSelect = 'none'),
              (s.style.webkitUserSelect = 'none'),
              (s.style.MozUserSelect = 'none'),
              (s.style.pointerEvents = 'none'),
              (r.style.userSelect = 'none'),
              (r.style.webkitUserSelect = 'none'),
              (r.style.MozUserSelect = 'none'),
              (r.style.pointerEvents = 'none'),
              (n.gutter.style.cursor = _),
              (n.parent.style.cursor = _),
              p.call(n);
          }
          function y(e) {
            e.forEach(function(t, i) {
              if (i > 0) {
                var n = U[i - 1],
                  s = E[n.a],
                  o = E[n.b];
                (s.size = e[i - 1]), (o.size = t), u(s.element, s.size, n.aGutterSize), u(o.element, o.size, n.bGutterSize);
              }
            });
          }
          function b() {
            U.forEach(function(e) {
              e.parent.removeChild(e.gutter), (E[e.a].element.style[z] = ''), (E[e.b].element.style[z] = '');
            });
          }
          void 0 === c && (c = {});
          var z,
            S,
            C,
            E,
            w = l(d[0]).parentNode,
            P = e.getComputedStyle(w).flexDirection,
            k =
              c.sizes ||
              d.map(function() {
                return 100 / d.length;
              }),
            x = void 0 !== c.minSize ? c.minSize : 100,
            j = Array.isArray(x)
              ? x
              : d.map(function() {
                  return x;
                }),
            G = void 0 !== c.gutterSize ? c.gutterSize : 10,
            O = void 0 !== c.snapOffset ? c.snapOffset : 30,
            M = c.direction || 'horizontal',
            _ = c.cursor || ('horizontal' === M ? 'ew-resize' : 'ns-resize'),
            L =
              c.gutter ||
              function(e, i) {
                var n = t.createElement('div');
                return (n.className = 'gutter gutter-' + i), n;
              },
            N =
              c.elementStyle ||
              function(e, t, i) {
                var n = {};
                return 'string' == typeof t || t instanceof String ? (n[e] = t) : (n[e] = r ? t + '%' : a + '(' + t + '% - ' + i + 'px)'), n;
              },
            D =
              c.gutterStyle ||
              function(e, t) {
                return (i = {}), (i[e] = t + 'px'), i;
                var i;
              };
          'horizontal' === M
            ? ((z = 'width'), 'clientWidth', (S = 'clientX'), (C = 'left'), 'paddingLeft')
            : 'vertical' === M && ((z = 'height'), 'clientHeight', (S = 'clientY'), (C = 'top'), 'paddingTop');
          var U = [];
          return (
            (E = d.map(function(e, t) {
              var n,
                o = { element: l(e), size: k[t], minSize: j[t] };
              if (
                t > 0 &&
                ((n = { a: t - 1, b: t, dragging: !1, isFirst: 1 === t, isLast: t === d.length - 1, direction: M, parent: w }),
                (n.aGutterSize = G),
                (n.bGutterSize = G),
                n.isFirst && (n.aGutterSize = G / 2),
                n.isLast && (n.bGutterSize = G / 2),
                'row-reverse' === P || 'column-reverse' === P)
              ) {
                var a = n.a;
                (n.a = n.b), (n.b = a);
              }
              if (!r && t > 0) {
                var c = L(t, M);
                h(c, G), c[i]('mousedown', g.bind(n)), c[i]('touchstart', g.bind(n)), w.insertBefore(c, o.element), (n.gutter = c);
              }
              0 === t || t === d.length - 1 ? u(o.element, o.size, G / 2) : u(o.element, o.size, G);
              var f = o.element[s]()[z];
              return f < o.minSize && (o.minSize = f), t > 0 && U.push(n), o;
            })),
            r
              ? { setSizes: y, destroy: b }
              : {
                  setSizes: y,
                  getSizes: function() {
                    return E.map(function(e) {
                      return e.size;
                    });
                  },
                  collapse: function(e) {
                    if (e === U.length) {
                      var t = U[e - 1];
                      p.call(t), r || f.call(t, t.size - t.bGutterSize);
                    } else {
                      var i = U[e];
                      p.call(i), r || f.call(i, i.aGutterSize);
                    }
                  },
                  destroy: b
                }
          );
        };
      });
    },
    function(e, t, i) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = 'sw-visibility',
        s = 'open-layers',
        o = 'open-blocks',
        r = 'fullscreen',
        a = 'preview',
        l = {
          defaults: [
            {
              id: 'options',
              buttons: [
                { active: !0, id: n, className: 'fa fa-square-o', command: n, context: n, attributes: { title: 'View components' } },
                { id: a, className: 'fa fa-eye', command: a, context: a, attributes: { title: 'Preview' } },
                { id: r, className: 'fa fa-arrows-alt', command: r, context: r, attributes: { title: 'Fullscreen' } }
              ]
            },
            {
              id: 'views',
              buttons: [
                { id: 'open-sm', className: 'fa fa-paint-brush', command: 'open-sm', active: !0, attributes: { title: 'Open Style Manager' } },
                { id: 'open-tm', className: 'fa fa-cog', command: 'open-tm', attributes: { title: 'Settings' } },
                { id: s, className: 'fa fa-bars', command: s, attributes: { title: 'Open Layer Manager' } },
                { id: o, className: 'fa fa-th-large', command: o, attributes: { title: 'Open Blocks' } },
                { id: 'open-code', className: 'fa fa-code', command: 'open-code', attributes: { title: 'Open Code' } }
              ]
            }
          ]
        };
      t.default = l;
    }
  ]);
});
