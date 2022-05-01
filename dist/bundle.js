/******/ ;(() => {
  // webpackBootstrap
  /******/ "use strict"
  /******/ var __webpack_modules__ = [
    ,
    /* 0 */ /* 1 */
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(2)
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        )
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(3)
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
        )
      var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_0_b_css__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(4)
      var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(6)
      var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__
        )
      // Imports

      var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
        /* asset import */ __webpack_require__(7),
        __webpack_require__.b
      )
      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        )
      ___CSS_LOADER_EXPORT___.i(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_0_b_css__WEBPACK_IMPORTED_MODULE_2__[
          "default"
        ]
      )
      var ___CSS_LOADER_URL_REPLACEMENT_0___ =
        _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(
          ___CSS_LOADER_URL_IMPORT_0___
        )
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        "@base: #f938ab;\n\n.cOSANyreDvRI6qF_r9oQ when (iscolor(@c)) {\n  -webkit-box-shadow: @style @c;\n  box-shadow:         @style @c;\n}\n\n.W9oSJ9Al9h8VzNfEnheI {\n  font-size: 16px;\n  background: url(" +
          ___CSS_LOADER_URL_REPLACEMENT_0___ +
          ") no-repeat;\n\n  span {\n    color: pink;\n  }\n}\n\n",
        "",
      ])
      // Exports
      ___CSS_LOADER_EXPORT___.locals = {
        "box-shadow(@style, @c)": "cOSANyreDvRI6qF_r9oQ",
        a: "W9oSJ9Al9h8VzNfEnheI",
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___

      /***/
    },
    /* 2 */
    /***/ (module) => {
      module.exports = function (i) {
        return i[1]
      }

      /***/
    },
    /* 3 */
    /***/ (module) => {
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
      module.exports = function (cssWithMappingToString) {
        var list = [] // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = ""
            var needLayer = typeof item[5] !== "undefined"

            if (item[4]) {
              content += "@supports (".concat(item[4], ") {")
            }

            if (item[2]) {
              content += "@media ".concat(item[2], " {")
            }

            if (needLayer) {
              content += "@layer".concat(
                item[5].length > 0 ? " ".concat(item[5]) : "",
                " {"
              )
            }

            content += cssWithMappingToString(item)

            if (needLayer) {
              content += "}"
            }

            if (item[2]) {
              content += "}"
            }

            if (item[4]) {
              content += "}"
            }

            return content
          }).join("")
        } // import a list of modules into the list

        list.i = function i(modules, media, dedupe, supports, layer) {
          if (typeof modules === "string") {
            modules = [[null, modules, undefined]]
          }

          var alreadyImportedModules = {}

          if (dedupe) {
            for (var k = 0; k < this.length; k++) {
              var id = this[k][0]

              if (id != null) {
                alreadyImportedModules[id] = true
              }
            }
          }

          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k])

            if (dedupe && alreadyImportedModules[item[0]]) {
              continue
            }

            if (typeof layer !== "undefined") {
              if (typeof item[5] === "undefined") {
                item[5] = layer
              } else {
                item[1] = "@layer"
                  .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                  .concat(item[1], "}")
                item[5] = layer
              }
            }

            if (media) {
              if (!item[2]) {
                item[2] = media
              } else {
                item[1] = "@media ".concat(item[2], " {").concat(item[1], "}")
                item[2] = media
              }
            }

            if (supports) {
              if (!item[4]) {
                item[4] = "".concat(supports)
              } else {
                item[1] = "@supports ("
                  .concat(item[4], ") {")
                  .concat(item[1], "}")
                item[4] = supports
              }
            }

            list.push(item)
          }
        }

        return list
      }

      /***/
    },
    /* 4 */
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(2)
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        )
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(3)
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
        )
      var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_0_c_css__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(5)
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        )
      ___CSS_LOADER_EXPORT___.i(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_0_c_css__WEBPACK_IMPORTED_MODULE_2__[
          "default"
        ]
      )
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        ".SZmqGCxkfr4u3yu8XruE {\ncolor: red;\n}",
        "",
      ])
      // Exports
      ___CSS_LOADER_EXPORT___.locals = {
        b: "SZmqGCxkfr4u3yu8XruE",
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___

      /***/
    },
    /* 5 */
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      })
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(2)
      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
        )
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(3)
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
        )
      // Imports

      var ___CSS_LOADER_EXPORT___ =
        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
          _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
        )
      // Module
      ___CSS_LOADER_EXPORT___.push([
        module.id,
        ".GskJ_QYe7brJIrBdiBGe {\n  font-weight: bolder;\n}\n",
        "",
      ])
      // Exports
      ___CSS_LOADER_EXPORT___.locals = {
        c: "GskJ_QYe7brJIrBdiBGe",
      }
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        ___CSS_LOADER_EXPORT___

      /***/
    },
    /* 6 */
    /***/ (module) => {
      module.exports = function (url, options) {
        if (!options) {
          options = {}
        }

        if (!url) {
          return url
        }

        url = String(url.__esModule ? url.default : url) // If url is already wrapped in quotes, remove them

        if (/^['"].*['"]$/.test(url)) {
          url = url.slice(1, -1)
        }

        if (options.hash) {
          url += options.hash
        } // Should url be wrapped?
        // See https://drafts.csswg.org/css-values-3/#urls

        if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
          return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
        }

        return url
      }

      /***/
    },
    /* 7 */
    /***/ (module, __unused_webpack_exports, __webpack_require__) => {
      module.exports = __webpack_require__.p + "a848cf8567d308912a3e.png"

      /***/
    },
    /******/
  ]
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    )
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m =
    __webpack_modules__ /* webpack/runtime/compat get default export */
  /******/
  /************************************************************************/
  /******/
  /******/
  ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })() /* webpack/runtime/define property getters */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })() /* webpack/runtime/global */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis
      /******/ try {
        /******/ return this || new Function("return this")()
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window
        /******/
      }
      /******/
    })()
    /******/
  })() /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })() /* webpack/runtime/make namespace object */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        })
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true })
      /******/
    }
    /******/
  })() /* webpack/runtime/publicPath */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ var scriptUrl
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + ""
    /******/ var document = __webpack_require__.g.document
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script")
        /******/ if (scripts.length) scriptUrl = scripts[scripts.length - 1].src
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser")
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/")
    /******/ __webpack_require__.p = scriptUrl
    /******/
  })() /* webpack/runtime/jsonp chunk loading */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ 0: 0,
      /******/
    }
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  ;(() => {
    __webpack_require__.r(__webpack_exports__)
    var _a_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1)

    console.log("hello world!")
  })()

  /******/
})()
