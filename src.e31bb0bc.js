// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\dm-sans-v6-latin-ext_latin-regular.eot":[["dm-sans-v6-latin-ext_latin-regular.63bb03d5.eot","fonts/dm-sans-v6-latin-ext_latin-regular.eot"],"fonts/dm-sans-v6-latin-ext_latin-regular.eot"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-regular.woff2":[["dm-sans-v6-latin-ext_latin-regular.8ee808df.woff2","fonts/dm-sans-v6-latin-ext_latin-regular.woff2"],"fonts/dm-sans-v6-latin-ext_latin-regular.woff2"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-regular.woff":[["dm-sans-v6-latin-ext_latin-regular.3aa2f8d2.woff","fonts/dm-sans-v6-latin-ext_latin-regular.woff"],"fonts/dm-sans-v6-latin-ext_latin-regular.woff"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-regular.ttf":[["dm-sans-v6-latin-ext_latin-regular.444a00b7.ttf","fonts/dm-sans-v6-latin-ext_latin-regular.ttf"],"fonts/dm-sans-v6-latin-ext_latin-regular.ttf"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-regular.svg":[["dm-sans-v6-latin-ext_latin-regular.fe9b66f3.svg","fonts/dm-sans-v6-latin-ext_latin-regular.svg"],"fonts/dm-sans-v6-latin-ext_latin-regular.svg"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-500.eot":[["dm-sans-v6-latin-ext_latin-500.0da8f1fc.eot","fonts/dm-sans-v6-latin-ext_latin-500.eot"],"fonts/dm-sans-v6-latin-ext_latin-500.eot"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-500.woff2":[["dm-sans-v6-latin-ext_latin-500.92db400f.woff2","fonts/dm-sans-v6-latin-ext_latin-500.woff2"],"fonts/dm-sans-v6-latin-ext_latin-500.woff2"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-500.woff":[["dm-sans-v6-latin-ext_latin-500.334dd7a6.woff","fonts/dm-sans-v6-latin-ext_latin-500.woff"],"fonts/dm-sans-v6-latin-ext_latin-500.woff"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-500.ttf":[["dm-sans-v6-latin-ext_latin-500.574b2766.ttf","fonts/dm-sans-v6-latin-ext_latin-500.ttf"],"fonts/dm-sans-v6-latin-ext_latin-500.ttf"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-500.svg":[["dm-sans-v6-latin-ext_latin-500.110bdc8c.svg","fonts/dm-sans-v6-latin-ext_latin-500.svg"],"fonts/dm-sans-v6-latin-ext_latin-500.svg"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-700.eot":[["dm-sans-v6-latin-ext_latin-700.015983ea.eot","fonts/dm-sans-v6-latin-ext_latin-700.eot"],"fonts/dm-sans-v6-latin-ext_latin-700.eot"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-700.woff2":[["dm-sans-v6-latin-ext_latin-700.87b2bb72.woff2","fonts/dm-sans-v6-latin-ext_latin-700.woff2"],"fonts/dm-sans-v6-latin-ext_latin-700.woff2"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-700.woff":[["dm-sans-v6-latin-ext_latin-700.fe2e2d00.woff","fonts/dm-sans-v6-latin-ext_latin-700.woff"],"fonts/dm-sans-v6-latin-ext_latin-700.woff"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-700.ttf":[["dm-sans-v6-latin-ext_latin-700.c5635615.ttf","fonts/dm-sans-v6-latin-ext_latin-700.ttf"],"fonts/dm-sans-v6-latin-ext_latin-700.ttf"],"./..\\fonts\\dm-sans-v6-latin-ext_latin-700.svg":[["dm-sans-v6-latin-ext_latin-700.c808c693.svg","fonts/dm-sans-v6-latin-ext_latin-700.svg"],"fonts/dm-sans-v6-latin-ext_latin-700.svg"],"./..\\fonts\\titan-one-v8-latin-ext_latin-regular.eot":[["titan-one-v8-latin-ext_latin-regular.5543ac79.eot","fonts/titan-one-v8-latin-ext_latin-regular.eot"],"fonts/titan-one-v8-latin-ext_latin-regular.eot"],"./..\\fonts\\titan-one-v8-latin-ext_latin-regular.woff2":[["titan-one-v8-latin-ext_latin-regular.110e9df3.woff2","fonts/titan-one-v8-latin-ext_latin-regular.woff2"],"fonts/titan-one-v8-latin-ext_latin-regular.woff2"],"./..\\fonts\\titan-one-v8-latin-ext_latin-regular.woff":[["titan-one-v8-latin-ext_latin-regular.49070f2c.woff","fonts/titan-one-v8-latin-ext_latin-regular.woff"],"fonts/titan-one-v8-latin-ext_latin-regular.woff"],"./..\\fonts\\titan-one-v8-latin-ext_latin-regular.ttf":[["titan-one-v8-latin-ext_latin-regular.f83264d7.ttf","fonts/titan-one-v8-latin-ext_latin-regular.ttf"],"fonts/titan-one-v8-latin-ext_latin-regular.ttf"],"./..\\fonts\\titan-one-v8-latin-ext_latin-regular.svg":[["titan-one-v8-latin-ext_latin-regular.9a92751d.svg","fonts/titan-one-v8-latin-ext_latin-regular.svg"],"fonts/titan-one-v8-latin-ext_latin-regular.svg"],"./..\\images\\img-about\\background-milk-mob\\mob@1x-320.png":[["mob@1x-320.2719bf4f.png","images/img-about/background-milk-mob/mob@1x-320.png"],"images/img-about/background-milk-mob/mob@1x-320.png"],"./..\\images\\img-about\\background-milk-mob\\mob@2x-640.png":[["mob@2x-640.77d97ab7.png","images/img-about/background-milk-mob/mob@2x-640.png"],"images/img-about/background-milk-mob/mob@2x-640.png"],"./..\\images\\img-about\\background-milk-mob\\mob@3x-960.png":[["mob@3x-960.218aec6d.png","images/img-about/background-milk-mob/mob@3x-960.png"],"images/img-about/background-milk-mob/mob@3x-960.png"],"./..\\images\\img-about\\background-milk-desk\\desk@1x-1282.png":[["desk@1x-1282.c6bc4d88.png","images/img-about/background-milk-desk/desk@1x-1282.png"],"images/img-about/background-milk-desk/desk@1x-1282.png"],"./..\\images\\img-about\\background-milk-desk\\desk@2x-2564.png":[["desk@2x-2564.142cd651.png","images/img-about/background-milk-desk/desk@2x-2564.png"],"images/img-about/background-milk-desk/desk@2x-2564.png"],"./..\\images\\img-about\\background-milk-desk\\desk@3x-3786.png":[["desk@3x-3786.7feddf78.png","images/img-about/background-milk-desk/desk@3x-3786.png"],"images/img-about/background-milk-desk/desk@3x-3786.png"],"./..\\images\\icons-advantages\\icon-milk-advantages\\icon-milk@1x.png":[["icon-milk@1x.efd45908.png","images/icons-advantages/icon-milk-advantages/icon-milk@1x.png"],"images/icons-advantages/icon-milk-advantages/icon-milk@1x.png"],"./..\\images\\icons-advantages\\icon-milk-advantages\\icon-milk@2x.png":[["icon-milk@2x.76cea06b.png","images/icons-advantages/icon-milk-advantages/icon-milk@2x.png"],"images/icons-advantages/icon-milk-advantages/icon-milk@2x.png"],"./..\\images\\icons-advantages\\icon-milk-advantages\\icon-milk@3x.png":[["icon-milk@3x.a825641d.png","images/icons-advantages/icon-milk-advantages/icon-milk@3x.png"],"images/icons-advantages/icon-milk-advantages/icon-milk@3x.png"],"./..\\images\\icons-advantages\\icon-fruit-advantages\\icon-fruit@1x.png":[["icon-fruit@1x.0a772a0c.png","images/icons-advantages/icon-fruit-advantages/icon-fruit@1x.png"],"images/icons-advantages/icon-fruit-advantages/icon-fruit@1x.png"],"./..\\images\\icons-advantages\\icon-fruit-advantages\\icon-fruit@2x.png":[["icon-fruit@2x.abe731c9.png","images/icons-advantages/icon-fruit-advantages/icon-fruit@2x.png"],"images/icons-advantages/icon-fruit-advantages/icon-fruit@2x.png"],"./..\\images\\icons-advantages\\icon-fruit-advantages\\icon-fruit@3x.png":[["icon-fruit@3x.fc7ec49d.png","images/icons-advantages/icon-fruit-advantages/icon-fruit@3x.png"],"images/icons-advantages/icon-fruit-advantages/icon-fruit@3x.png"],"./..\\images\\icons-advantages\\icon-caramel-advantages\\icon-caramel@1x.png":[["icon-caramel@1x.e13a00ea.png","images/icons-advantages/icon-caramel-advantages/icon-caramel@1x.png"],"images/icons-advantages/icon-caramel-advantages/icon-caramel@1x.png"],"./..\\images\\icons-advantages\\icon-caramel-advantages\\icon-caramel@2x.png":[["icon-caramel@2x.b31500e2.png","images/icons-advantages/icon-caramel-advantages/icon-caramel@2x.png"],"images/icons-advantages/icon-caramel-advantages/icon-caramel@2x.png"],"./..\\images\\icons-advantages\\icon-caramel-advantages\\icon-caramel@3x.png":[["icon-caramel@3x.4aecfc2e.png","images/icons-advantages/icon-caramel-advantages/icon-caramel@3x.png"],"images/icons-advantages/icon-caramel-advantages/icon-caramel@3x.png"],"./..\\images\\location\\bg-location@1x.png":[["bg-location@1x.1a2d9588.png","images/location/bg-location@1x.png"],"images/location/bg-location@1x.png"],"./..\\images\\img-customer\\dots.svg":[["dots.21730691.svg","images/img-customer/dots.svg"],"images/img-customer/dots.svg"],"./..\\images\\img-customer\\quote-customer.svg":[["quote-customer.c64874c1.svg","images/img-customer/quote-customer.svg"],"images/img-customer/quote-customer.svg"],"./..\\images\\icon-check.svg":[["icon-check.72789738.svg","images/icon-check.svg"],"images/icon-check.svg"],"./..\\images\\img-customer\\home.svg":[["home.29f6d261.svg","images/img-customer/home.svg"],"images/img-customer/home.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62433" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map