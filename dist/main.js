/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: Lucida Sans Unicode;\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  height: 97%;\n  background: linear-gradient(180deg, white 0%, #99bbff 100%); }\n  body .textarea-block {\n    font-size: 20px;\n    width: 996px;\n    height: 200px;\n    margin-top: 20px;\n    background-color: #99bbff;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .keyboard-block {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 1010px;\n    margin: 30px;\n    user-select: none; }\n  body .keyboard-button {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px;\n    background-color: white;\n    outline: none; }\n    body .keyboard-button:hover {\n      background-color: #ffff99; }\n    body .keyboard-button:active {\n      background-color: #ffff66; }\n  body sup {\n    margin-left: 8px;\n    font-size: 20px; }\n  body .-functional {\n    padding: 5px;\n    font-size: 16px;\n    background-color: #d9d9d9; }\n  body ._pressed {\n    background-color: #ffff66; }\n  body .-arrow {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .-win {\n    font-size: 25px; }\n  body .-space {\n    width: 135px; }\n  body .-tab {\n    width: 80px;\n    text-align: left; }\n  body .-del {\n    text-align: right; }\n  body .-caps {\n    width: 100px;\n    text-align: left; }\n  body .capsActive {\n    background-color: #ffff66; }\n  body .-lshift {\n    width: 120px;\n    text-align: left; }\n  body .-lctrl {\n    text-align: left; }\n  body .-backspace {\n    width: 146px;\n    text-align: right; }\n  body .-enter {\n    width: 172px;\n    text-align: right; }\n  body .-rshift {\n    width: 152px;\n    text-align: right; }\n  body .-space {\n    width: 384px; }\n  body .-info {\n    width: 86px;\n    text-align: right; }\n  body .lineBreak {\n    width: 100%; }\n  body .info-block-wrapper {\n    font-size: 20px;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1000;\n    user-select: none; }\n  body .info-block {\n    position: relative;\n    top: 10%;\n    width: 600px;\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 20px;\n    border: 2px solid black;\n    background: linear-gradient(180deg, white 0%, #99bbff 100%); }\n  body .info-block-button {\n    position: absolute;\n    background-color: #f2f20d;\n    right: -2px;\n    bottom: -2px;\n    padding: 2px 10px;\n    cursor: pointer;\n    border: 2px solid black;\n    border-bottom-right-radius: 20px;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 5px;\n    border-top-right-radius: 5px;\n    outline: none; }\n    body .info-block-button:hover {\n      filter: brightness(90%); }\n    body .info-block-button:active {\n      filter: brightness(80%); }\n  body ._hidden {\n    display: none; }\n  body .button-span {\n    text-shadow: 0px 5px 15px black;\n    color: #f2f20d; }\n", "",{"version":3,"sources":["webpack://src/scss/main.scss","webpack://src/scss/globals.scss","webpack://src/scss/kbButtons.scss","webpack://src/scss/infoBlock.scss"],"names":[],"mappings":"AAEA;EACE,gCCHwB;EDIxB,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,2DAAqF,EAAA;EANvF;IASI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa,EAAA;EAhBjB;IAoBI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,iBAAiB,EAAA;EAzBrB;IEXE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,aAAa,EAAA;IFIf;MEDI,yBAAyB,EAAA;IFC7B;MEGI,yBAAyB,EAAA;EFH7B;IEQE,gBAAgB;IAChB,eAAe,EAAA;EFTjB;IEaE,YAAY;IACZ,eAAe;IACf,yBAAyB,EAAA;EFf3B;IEmBE,yBAAyB,EAAA;EFnB3B;IEuBE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB,EAAA;EF5BpB;IEgCE,eAAe,EAAA;EFhCjB;IEoCE,YAAY,EAAA;EFpCd;IEwCE,WAAW;IACX,gBAAgB,EAAA;EFzClB;IE6CE,iBAAiB,EAAA;EF7CnB;IEiDE,YAAY;IACZ,gBAAgB,EAAA;EFlDlB;IEsDE,yBAAyB,EAAA;EFtD3B;IE0DE,YAAY;IACZ,gBAAgB,EAAA;EF3DlB;IE+DE,gBAAgB,EAAA;EF/DlB;IEmEE,YAAY;IACZ,iBAAiB,EAAA;EFpEnB;IEwEE,YAAY;IACZ,iBAAiB,EAAA;EFzEnB;IE6EE,YAAY;IACZ,iBAAiB,EAAA;EF9EnB;IEkFE,YAAY,EAAA;EFlFd;IEsFE,WAAW;IACX,iBAAiB,EAAA;EFvFnB;IE2FE,WAAW,EAAA;EF3Fb;IGXE,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,iBAAiB,EAAA;EHKnB;IGDE,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2DAAqF,EAAA;EHPvF;IGWE,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,gCAAgC;IAChC,4BAA4B;IAC5B,8BAA8B;IAC9B,4BAA4B;IAC5B,aAAa,EAAA;IHtBf;MGyBI,uBAAuB,EAAA;IHzB3B;MG6BI,uBAAuB,EAAA;EH7B3B;IGkCE,aAAa,EAAA;EHlCf;IGsCE,+BAA0C;IAC1C,cAAc,EAAA","sourcesContent":["@import 'globals';\r\n\r\n* {\r\n  font-family: $font;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  height: 97%;\r\n  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(153,187,255,1) 100%);\r\n\r\n  .textarea-block {\r\n    font-size: 20px;\r\n    width: 996px;\r\n    height: 200px;\r\n    margin-top: 20px;\r\n    background-color: #99bbff;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    outline: none;\r\n  }\r\n\r\n  .keyboard-block {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 1010px;\r\n    margin: 30px;\r\n    user-select: none;\r\n  }\r\n\r\n  @import 'kbButtons';\r\n\r\n  @import 'infoBlock';\r\n}\r\n","$font: Lucida Sans Unicode;\r\n",".keyboard-button {\r\n  font-size: 25px;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 3px;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  outline: none;\r\n\r\n  &:hover {\r\n    background-color: #ffff99;\r\n  }\r\n\r\n  &:active {\r\n    background-color: #ffff66;\r\n  }\r\n}\r\n\r\nsup {\r\n  margin-left: 8px;\r\n  font-size: 20px;\r\n}\r\n\r\n.-functional {\r\n  padding: 5px;\r\n  font-size: 16px;\r\n  background-color: #d9d9d9;\r\n}\r\n\r\n._pressed {\r\n  background-color: #ffff66;\r\n}\r\n\r\n.-arrow {\r\n  font-size: 25px;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 3px;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.-win {\r\n  font-size: 25px;\r\n}\r\n\r\n.-space {\r\n  width: 135px;\r\n}\r\n\r\n.-tab {\r\n  width: 80px;\r\n  text-align: left;\r\n}\r\n\r\n.-del {\r\n  text-align: right;\r\n}\r\n\r\n.-caps {\r\n  width: 100px;\r\n  text-align: left;\r\n}\r\n\r\n.capsActive {\r\n  background-color: #ffff66;\r\n}\r\n\r\n.-lshift {\r\n  width: 120px;\r\n  text-align: left;\r\n}\r\n\r\n.-lctrl {\r\n  text-align: left;\r\n}\r\n\r\n.-backspace {\r\n  width: 146px;\r\n  text-align: right;\r\n}\r\n\r\n.-enter {\r\n  width: 172px;\r\n  text-align: right;\r\n}\r\n\r\n.-rshift {\r\n  width: 152px;\r\n  text-align: right;\r\n}\r\n\r\n.-space {\r\n  width: 384px;\r\n}\r\n\r\n.-info {\r\n  width: 86px;\r\n  text-align: right;\r\n}\r\n\r\n.lineBreak {\r\n  width: 100%;\r\n}\r\n",".info-block-wrapper {\r\n  font-size: 20px;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 1000;\r\n  user-select: none;\r\n}\r\n\r\n.info-block {\r\n  position: relative;\r\n  top: 10%;\r\n  width: 600px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(153,187,255,1) 100%);\r\n}\r\n\r\n.info-block-button {\r\n  position: absolute;\r\n  background-color: #f2f20d;\r\n  right: -2px;\r\n  bottom: -2px;\r\n  padding: 2px 10px;\r\n  cursor: pointer;\r\n  border: 2px solid black;\r\n  border-bottom-right-radius: 20px;\r\n  border-top-left-radius: 20px;\r\n  border-bottom-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  outline: none;\r\n\r\n  &:hover {\r\n    filter: brightness(90%);\r\n  }\r\n\r\n  &:active {\r\n    filter: brightness(80%);\r\n  }\r\n}\r\n\r\n._hidden {\r\n  display: none;\r\n}\r\n\r\n.button-span {\r\n  text-shadow: 0px 5px 15px rgba(0, 0, 0, 1);\r\n  color: #f2f20d;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_viewGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/viewGenerator.js */ "./src/js/viewGenerator.js");
const processor = __webpack_require__(/*! ./js/processor.js */ "./src/js/processor.js");
const viewGenerator = __webpack_require__(/*! ./js/viewGenerator.js */ "./src/js/viewGenerator.js");



// generating html page view

document.body.focus();

processor.physicalClickHandler();

// configuring the mutation observer for delegation to work properly
const field = document.getElementsByTagName('body')[0];

const config = {
  childList: true,
};

const observer = new MutationObserver(processor.virtualClickHandler);
observer.observe(field, config);


/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: kbEngLower, kbEngUpper, kbRusLower, kbRusUpper, kbClass, arrowRegExp, infoBlockText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbEngLower", function() { return kbEngLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbEngUpper", function() { return kbEngUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbRusLower", function() { return kbRusLower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbRusUpper", function() { return kbRusUpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbClass", function() { return kbClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowRegExp", function() { return arrowRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBlockText", function() { return infoBlockText; });
// export const kbEngLower = ['<sup>~</sup> <sub>\`</sub>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '_ -', '+=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[ {', '] }', '| \\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ': ;', '\" \'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ,', '> .', '? /', '<i class="fas fa-angle-up"></i>', 'Shift', 'Ctrl', '<i class="fab fa-windows"></i>', 'Alt', '', 'Alt', 'Ctrl', '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-down"></i>', '<i class="fas fa-angle-right"></i>', 'Info'];
//
// export const kbEngUpper = ['<sup>~</sup> <sub>\`</sub>', '1<sup>!</sup>', '2<sup>@</sup>', '3<sup>#</sup>', '4<sup>$</sup>', '5<sup>%</sup>', '6<sup>^</sup>', '7<sup>&</sup>', '8<sup>*</sup>', '9<sup>(</sup>', '0<sup>)</sup>', '_ -', '+=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[ {', '] }', '| \\', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', '\" \'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '< ,', '> .', '? /', '<i class="fas fa-angle-up"></i>', 'Shift', 'Ctrl', '<i class="fab fa-windows"></i>', 'Alt', '', 'Alt', 'Ctrl', '<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-down"></i>', '<i class="fas fa-angle-right"></i>', 'Info'];

const kbEngLower = ['\`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];

const kbEngUpper = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];

const kbRusLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];

const kbRusUpper = ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];

const kbClass = [' Backquote', ' Digit1', ' Digit2', ' Digit3', ' Digit4', ' Digit5', ' Digit6', ' Digit7', ' Digit8', ' Digit9', ' Digit0', ' Minus', ' Equal', ' -functional -backspace Backspace', ' -functional -tab Tab', ' KeyQ', ' KeyW', ' KeyE', ' KeyR', ' KeyT', ' KeyY', ' KeyU', ' KeyI', ' KeyO', ' KeyP', ' BracketLeft', ' BracketRight', ' Backslash', ' -functional -del Delete', ' -functional -caps CapsLock', ' KeyA', ' KeyS', ' KeyD', ' KeyF', ' KeyG', ' KeyH', ' KeyJ', ' KeyK', ' KeyL', ' Semicolon', ' Quote', ' -functional -enter Enter', ' -functional -lshift ShiftLeft', ' KeyZ', ' KeyX', ' KeyC', ' KeyV', ' KeyB', ' KeyN', ' KeyM', ' Comma', ' Period', ' Slash', ' -arrow ArrowUp', ' -functional -rshift ShiftRight', ' -functional -lctrl ControlLeft', ' -functional -win MetaLeft', ' -functional AltLeft', ' -functional -space Space', ' -functional AltRight', ' -functional ControlRight', '  -arrow ArrowLeft', ' -arrow ArrowDown', ' -arrow ArrowRight', ' -functional -info'];

const arrowRegExp = /^Arrow.+$/;

const infoBlockText = 'Virtual Keyboard Project <br><br> Highlights keys pressed both on the physical and on the virtual keyboards and adds symbols to the textarea. <br><br> This keyboard was created on windows OS. <br><br> Use <span class = button-span>Alt</span> + <span class = button-span>Shift</span> buttons to change language. <br> Press <span class = buttonSpan>Caps Lock</span> to switch symbols on virtual keyboard. <br><br> To show this screen press <span class = button-span>Info</span> button in the right bottom corner';


/***/ }),

/***/ "./src/js/infoBlock.js":
/*!*****************************!*\
  !*** ./src/js/infoBlock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const processor = __webpack_require__(/*! ./processor.js */ "./src/js/processor.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");

class InfoBlock {

  constructor(text) {
    this.element = processor.createHtml('div', 'info-block-wrapper _hidden');
    let infoBlock = processor.createHtml('div', 'info-block');
    let infoBlockButton = processor.createHtml('div', 'info-block-button');

    this.element.append(infoBlock);
    infoBlock.innerHTML = text;
    infoBlockButton.innerHTML = 'Got It';
    infoBlock.append(infoBlockButton);
    document.body.append(this.element);
  }

  show() {
    this.element.classList.remove('_hidden');
  }

  hide() {
    this.element.classList.add('_hidden');
  }
}

const info = new InfoBlock(constants.infoBlockText);
/* harmony default export */ __webpack_exports__["default"] = (info);


/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoBlock.js */ "./src/js/infoBlock.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");
const processor = __webpack_require__(/*! ./processor.js */ "./src/js/processor.js");



class Keyboard {

  constructor() {
    if (!localStorage.getItem('kbLang')) {
      localStorage.setItem('kbLang', 'eng');
    }

    if (!localStorage.getItem('isFirstVisit')) {
      localStorage.setItem('isFirstVisit', 'true');
    }
  }

  createKb() {
    let kb = processor.createHtml('div', 'keyboard-block');
    let kbLang = localStorage.getItem('kbLang');

    if (kbLang == 'eng') {
      for (let i = 0; i < constants.kbEngLower.length; i++) {
        let el = processor.createHtml('button', 'keyboard-button');
        el.innerHTML = constants.kbEngLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    } else if (kbLang == 'rus') {
      for (let i = 0; i < constants.kbRusLower.length; i++) {
        let el = processor.createHtml('button', 'keyboard-button');
        el.innerHTML = constants.kbRusLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    }

    document.body.append(kb);

    if (localStorage.getItem('isFirstVisit') == 'true') {
      let infoBlockButton = document.querySelector('.info-block-button');
      _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].show();
      infoBlockButton.addEventListener('click', () => {
        _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
      });
      localStorage.setItem('isFirstVisit', 'false');
    }
  }

}

const virtualKb = new Keyboard();
/* harmony default export */ __webpack_exports__["default"] = (virtualKb);


/***/ }),

/***/ "./src/js/processor.js":
/*!*****************************!*\
  !*** ./src/js/processor.js ***!
  \*****************************/
/*! exports provided: createHtml, changeLang, physicalClickHandler, virtualClickHandler, highlightKey, darkenKey, changeRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLang", function() { return changeLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physicalClickHandler", function() { return physicalClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualClickHandler", function() { return virtualClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightKey", function() { return highlightKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkenKey", function() { return darkenKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRegister", function() { return changeRegister; });
/* harmony import */ var _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoBlock.js */ "./src/js/infoBlock.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");



// create html element with given attributes
function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  className === undefined ? elem.className = '' : elem.className = className;
  innerText === undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length !== 0) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

function changeLang() {
  let kb = document.querySelector('.keyboard-block');
  let kbLang = localStorage.getItem('kbLang');

  if (kbLang == 'eng') {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbRusLower[i];
    });
    localStorage.setItem('kbLang', 'rus');

  } else if (kbLang == 'rus') {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbEngLower[i];
    });
    localStorage.setItem('kbLang', 'eng');
  }
}

// handle pressed key event
function physicalClickHandler() {
  let tArea = document.querySelector('.textarea-block');

  document.addEventListener('keydown', function(event) {
    highlightKey(event.code);

    // if alt & shift are pressed together
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      changeLang();
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      return;
    }

    if (event.ctrlKey) {
      return;
    }

    if (event.altKey) {
      event.preventDefault();
      return;
    }

    if (event.code == 'Tab') {
      event.preventDefault();
      tArea.innerHTML += '    ';
      return;
    }

    if (event.code == 'CapsLock') {
      changeRegister();
      return;
    }

    if (event.code == 'Backspace') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (event.code == 'Delete') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (event.code == 'Enter') {
      tArea.innerHTML += '\n';
      return;
    }

    if (event.metaKey) {
      event.preventDefault();
      return;
    }

    // if arrow key is pressed
    if (event.code.match(constants.arrowRegExp)) {
      if (event.code == 'ArrowUp') {
        tArea.innerHTML += '↑';
        return;
      }

      if (event.code == 'ArrowDown') {
        tArea.innerHTML += '↓';
        return;
      }

      if (event.code == 'ArrowLeft') {
        tArea.innerHTML += '←';
        return;
      }

      if (event.code == 'ArrowRight') {
        tArea.innerHTML += '→';
        return;
      }
      return;
    }

    document.addEventListener('keyup', function (event) {
      darkenKey(event.code);
    });

    // if any other key is pressed
    tArea.innerHTML += event.key;
  })
}

const virtualClickHandler = function () {
  let kb = document.querySelector('.keyboard-block');
  let tArea = document.querySelector('.textarea-block');

  kb.onclick = function (event) {
    let target = event.target;
    if (!target.classList.contains('keyboard-button')) return;

    if (target.innerHTML == 'Shift') {
      return;
    }

    if (target.innerHTML == 'Ctrl') {
      return;
    }

    if (target.innerHTML == 'Alt') {
      return;
    }

    if (target.innerHTML == 'Tab') {
      tArea.innerHTML += '    ';
      return;
    }

    if (target.innerHTML == '') {
      tArea.innerHTML += ' ';
    }

    if (target.innerHTML == 'Caps Lock') {
      changeRegister();
      return;
    }

    if (target.innerHTML == 'Backspace') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (target.innerHTML == 'Del') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (target.innerHTML == 'Enter') {
      tArea.innerHTML += '\n';
      return;
    }

    // if arrow key is pressed
    if (target.innerHTML.match(constants.arrowRegExp)) {
      if (target.innerHTML == 'ArrowUp') {
        tArea.innerHTML += '↑';
        return;
      }

      if (target.innerHTML == 'ArrowDown') {
        tArea.innerHTML += '↓';
        return;
      }

      if (target.innerHTML == 'ArrowLeft') {
        tArea.innerHTML += '←';
        return;
      }

      if (target.innerHTML == 'ArrowRight') {
        tArea.innerHTML += '→';
        return;
      }
      return;
    }

    if (target.innerHTML == 'Info') {
      let infoBlockButton = document.querySelector('.info-block-button');
      _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].show();

      infoBlockButton.addEventListener('click', () => {
        _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
      });
      return;
    }

    tArea.innerHTML += target.innerHTML;
  }
}

// highlight key
function highlightKey(keyCode) {
  const pressedKey = document.querySelector(`.${keyCode}`);

  pressedKey.classList.add('_pressed');
}

// darken key
function darkenKey(keyCode) {
  const pressedKey = document.querySelector(`.${keyCode}`);

  pressedKey.classList.remove('_pressed');
}

function changeRegister() {
  let kb = document.querySelector('.keyboard-block');
  let kbLang = localStorage.getItem('kbLang');
  let caps = document.querySelector('.CapsLock');

  caps.classList.toggle('capsActive');
  if (caps.classList.contains('capsActive')) {
    if (kbLang == 'eng') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngUpper[i];
      });
    }
    if (kbLang == 'rus') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusUpper[i];
      });
    }
  } else {
    if (kbLang == 'eng') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngLower[i];
      });
    }
    if (kbLang == 'rus') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusLower[i];
      });
    }
  }
  return;
}


/***/ }),

/***/ "./src/js/viewGenerator.js":
/*!*********************************!*\
  !*** ./src/js/viewGenerator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.js */ "./src/js/keyboard.js");
/* harmony import */ var _infoBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoBlock.js */ "./src/js/infoBlock.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");
const processor = __webpack_require__(/*! ./processor.js */ "./src/js/processor.js");





class HTMLPage {

  constructor() {
    // text area creation
    document.body.append(processor.createHtml('textarea', 'textarea-block'));

    // main keyboard block
    _keyboard_js__WEBPACK_IMPORTED_MODULE_0__["default"].createKb();
  }

}

const virtualKbHTML = new HTMLPage();
/* harmony default export */ __webpack_exports__["default"] = (virtualKbHTML);


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmZvQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0scURBQUk7O0FBRVY7QUFDQSxRQUFRLHFEQUFJO0FBQ1osT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxnREFBZ0QsUUFBUTs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsZ0RBQWdELFFBQVE7O0FBRXhEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxUUE7QUFBQTtBQUFBO0FBQUEsa0JBQWtCLG1CQUFPLENBQUMsNkNBQWlCO0FBQzNDLGtCQUFrQixtQkFBTyxDQUFDLDZDQUFpQjs7QUFFSjs7QUFFSjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBUztBQUNiOztBQUVBOztBQUVBO0FBQ2UsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7O0FDcEI3QixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk3JTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDAlLCAjOTliYmZmIDEwMCUpOyB9XFxuICBib2R5IC50ZXh0YXJlYS1ibG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDk5NnB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTliYmZmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgYm9keSAua2V5Ym9hcmQtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDEwcHg7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGJvZHkgLmtleWJvYXJkLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmtleWJvYXJkLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTsgfVxcbiAgICBib2R5IC5rZXlib2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2OyB9XFxuICBib2R5IHN1cCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgYm9keSAuLWZ1bmN0aW9uYWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTsgfVxcbiAgYm9keSAuX3ByZXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2OyB9XFxuICBib2R5IC4tYXJyb3cge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICBib2R5IC4td2luIHtcXG4gICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICBib2R5IC4tc3BhY2Uge1xcbiAgICB3aWR0aDogMTM1cHg7IH1cXG4gIGJvZHkgLi10YWIge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgYm9keSAuLWRlbCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tY2FwcyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgYm9keSAuY2Fwc0FjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7IH1cXG4gIGJvZHkgLi1sc2hpZnQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1sY3RybCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1iYWNrc3BhY2Uge1xcbiAgICB3aWR0aDogMTQ2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tZW50ZXIge1xcbiAgICB3aWR0aDogMTcycHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tcnNoaWZ0IHtcXG4gICAgd2lkdGg6IDE1MnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLXNwYWNlIHtcXG4gICAgd2lkdGg6IDM4NHB4OyB9XFxuICBib2R5IC4taW5mbyB7XFxuICAgIHdpZHRoOiA4NnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGJvZHkgLmluZm8tYmxvY2std3JhcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICBib2R5IC5pbmZvLWJsb2NrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgd2hpdGUgMCUsICM5OWJiZmYgMTAwJSk7IH1cXG4gIGJvZHkgLmluZm8tYmxvY2stYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMjBkO1xcbiAgICByaWdodDogLTJweDtcXG4gICAgYm90dG9tOiAtMnB4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5pbmZvLWJsb2NrLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7IH1cXG4gICAgYm9keSAuaW5mby1ibG9jay1idXR0b246YWN0aXZlIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTsgfVxcbiAgYm9keSAuX2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIGJvZHkgLmJ1dHRvbi1zcGFuIHtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCA1cHggMTVweCBibGFjaztcXG4gICAgY29sb3I6ICNmMmYyMGQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvZ2xvYmFscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3Mva2JCdXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Nzcy9pbmZvQmxvY2suc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQ0h3QjtFREl4QixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwyREFBcUYsRUFBQTtFQU52RjtJQVNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUFoQmpCO0lBb0JJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUF6QnJCO0lFWEUsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWEsRUFBQTtJRklmO01FREkseUJBQXlCLEVBQUE7SUZDN0I7TUVHSSx5QkFBeUIsRUFBQTtFRkg3QjtJRVFFLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUZUakI7SUVhRSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QixFQUFBO0VGZjNCO0lFbUJFLHlCQUF5QixFQUFBO0VGbkIzQjtJRXVCRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQixFQUFBO0VGNUJwQjtJRWdDRSxlQUFlLEVBQUE7RUZoQ2pCO0lFb0NFLFlBQVksRUFBQTtFRnBDZDtJRXdDRSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUZ6Q2xCO0lFNkNFLGlCQUFpQixFQUFBO0VGN0NuQjtJRWlERSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUZsRGxCO0lFc0RFLHlCQUF5QixFQUFBO0VGdEQzQjtJRTBERSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUYzRGxCO0lFK0RFLGdCQUFnQixFQUFBO0VGL0RsQjtJRW1FRSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUZwRW5CO0lFd0VFLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFRnpFbkI7SUU2RUUsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VGOUVuQjtJRWtGRSxZQUFZLEVBQUE7RUZsRmQ7SUVzRkUsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VGdkZuQjtJRTJGRSxXQUFXLEVBQUE7RUYzRmI7SUdYRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixpQkFBaUIsRUFBQTtFSEtuQjtJR0RFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkRBQXFGLEVBQUE7RUhQdkY7SUdXRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGFBQWEsRUFBQTtJSHRCZjtNR3lCSSx1QkFBdUIsRUFBQTtJSHpCM0I7TUc2QkksdUJBQXVCLEVBQUE7RUg3QjNCO0lHa0NFLGFBQWEsRUFBQTtFSGxDZjtJR3NDRSwrQkFBMEM7SUFDMUMsY0FBYyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2dsb2JhbHMnO1xcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDk3JTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMTUzLDE4NywyNTUsMSkgMTAwJSk7XFxyXFxuXFxyXFxuICAudGV4dGFyZWEtYmxvY2sge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5OTZweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5YmJmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAua2V5Ym9hcmQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiAxMDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW1wb3J0ICdrYkJ1dHRvbnMnO1xcclxcblxcclxcbiAgQGltcG9ydCAnaW5mb0Jsb2NrJztcXHJcXG59XFxyXFxuXCIsXCIkZm9udDogTHVjaWRhIFNhbnMgVW5pY29kZTtcXHJcXG5cIixcIi5rZXlib2FyZC1idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLWZ1bmN0aW9uYWwge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcXHJcXG59XFxyXFxuXFxyXFxuLl9wcmVzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7XFxyXFxufVxcclxcblxcclxcbi4tYXJyb3cge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLXdpbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi4tc3BhY2Uge1xcclxcbiAgd2lkdGg6IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLXRhYiB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi4tZGVsIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uLWNhcHMge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcHNBY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLi1sc2hpZnQge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLi1sY3RybCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uLWJhY2tzcGFjZSB7XFxyXFxuICB3aWR0aDogMTQ2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1lbnRlciB7XFxyXFxuICB3aWR0aDogMTcycHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1yc2hpZnQge1xcclxcbiAgd2lkdGg6IDE1MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi4tc3BhY2Uge1xcclxcbiAgd2lkdGg6IDM4NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLWluZm8ge1xcclxcbiAgd2lkdGg6IDg2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmVCcmVhayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCIuaW5mby1ibG9jay13cmFwcGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMTUzLDE4NywyNTUsMSkgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWJsb2NrLWJ1dHRvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMjBkO1xcclxcbiAgcmlnaHQ6IC0ycHg7XFxyXFxuICBib3R0b206IC0ycHg7XFxyXFxuICBwYWRkaW5nOiAycHggMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uX2hpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXNwYW4ge1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbiAgY29sb3I6ICNmMmYyMGQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXGpzXFxcXHByb2Nlc3Nvci5qcycpO1xyXG5jb25zdCB2aWV3R2VuZXJhdG9yID0gcmVxdWlyZSgnLlxcXFxqc1xcXFx2aWV3R2VuZXJhdG9yLmpzJyk7XHJcblxyXG5pbXBvcnQgJy5cXFxcc2Nzc1xcXFxtYWluLnNjc3MnO1xyXG5cclxuLy8gZ2VuZXJhdGluZyBodG1sIHBhZ2Ugdmlld1xyXG5pbXBvcnQgdmlydHVhbEtiSFRNTCBmcm9tICcuXFxcXGpzXFxcXHZpZXdHZW5lcmF0b3IuanMnO1xyXG5kb2N1bWVudC5ib2R5LmZvY3VzKCk7XHJcblxyXG5wcm9jZXNzb3IucGh5c2ljYWxDbGlja0hhbmRsZXIoKTtcclxuXHJcbi8vIGNvbmZpZ3VyaW5nIHRoZSBtdXRhdGlvbiBvYnNlcnZlciBmb3IgZGVsZWdhdGlvbiB0byB3b3JrIHByb3Blcmx5XHJcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBjaGlsZExpc3Q6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHByb2Nlc3Nvci52aXJ0dWFsQ2xpY2tIYW5kbGVyKTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShmaWVsZCwgY29uZmlnKTtcclxuIiwiLy8gZXhwb3J0IGNvbnN0IGtiRW5nTG93ZXIgPSBbJzxzdXA+fjwvc3VwPiA8c3ViPlxcYDwvc3ViPicsICcxPHN1cD4hPC9zdXA+JywgJzI8c3VwPkA8L3N1cD4nLCAnMzxzdXA+Izwvc3VwPicsICc0PHN1cD4kPC9zdXA+JywgJzU8c3VwPiU8L3N1cD4nLCAnNjxzdXA+Xjwvc3VwPicsICc3PHN1cD4mPC9zdXA+JywgJzg8c3VwPio8L3N1cD4nLCAnOTxzdXA+KDwvc3VwPicsICcwPHN1cD4pPC9zdXA+JywgJ18gLScsICcrPScsICdCYWNrc3BhY2UnLCAnVGFiJywgJ3EnLCAndycsICdlJywgJ3InLCAndCcsICd5JywgJ3UnLCAnaScsICdvJywgJ3AnLCAnWyB7JywgJ10gfScsICd8IFxcXFwnLCAnRGVsJywgJ0NhcHMgTG9jaycsICdhJywgJ3MnLCAnZCcsICdmJywgJ2cnLCAnaCcsICdqJywgJ2snLCAnbCcsICc6IDsnLCAnXFxcIiBcXCcnLCAnRW50ZXInLCAnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICc8ICwnLCAnPiAuJywgJz8gLycsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS11cFwiPjwvaT4nLCAnU2hpZnQnLCAnQ3RybCcsICc8aSBjbGFzcz1cImZhYiBmYS13aW5kb3dzXCI+PC9pPicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIj48L2k+JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPicsICdJbmZvJ107XHJcbi8vXHJcbi8vIGV4cG9ydCBjb25zdCBrYkVuZ1VwcGVyID0gWyc8c3VwPn48L3N1cD4gPHN1Yj5cXGA8L3N1Yj4nLCAnMTxzdXA+ITwvc3VwPicsICcyPHN1cD5APC9zdXA+JywgJzM8c3VwPiM8L3N1cD4nLCAnNDxzdXA+JDwvc3VwPicsICc1PHN1cD4lPC9zdXA+JywgJzY8c3VwPl48L3N1cD4nLCAnNzxzdXA+Jjwvc3VwPicsICc4PHN1cD4qPC9zdXA+JywgJzk8c3VwPig8L3N1cD4nLCAnMDxzdXA+KTwvc3VwPicsICdfIC0nLCAnKz0nLCAnQmFja3NwYWNlJywgJ1RhYicsICdRJywgJ1cnLCAnRScsICdSJywgJ1QnLCAnWScsICdVJywgJ0knLCAnTycsICdQJywgJ1sgeycsICddIH0nLCAnfCBcXFxcJywgJ0RlbCcsICdDYXBzIExvY2snLCAnQScsICdTJywgJ0QnLCAnRicsICdHJywgJ0gnLCAnSicsICdLJywgJ0wnLCAnOiA7JywgJ1xcXCIgXFwnJywgJ0VudGVyJywgJ1NoaWZ0JywgJ1onLCAnWCcsICdDJywgJ1YnLCAnQicsICdOJywgJ00nLCAnPCAsJywgJz4gLicsICc/IC8nLCAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+JywgJ1NoaWZ0JywgJ0N0cmwnLCAnPGkgY2xhc3M9XCJmYWIgZmEtd2luZG93c1wiPjwvaT4nLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPicsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT4nLCAnSW5mbyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtiRW5nTG93ZXIgPSBbJ1xcYCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcwJywgJy0nLCAnPScsICdCYWNrc3BhY2UnLCAnVGFiJywgJ3EnLCAndycsICdlJywgJ3InLCAndCcsICd5JywgJ3UnLCAnaScsICdvJywgJ3AnLCAnWycsICddJywgJ1xcXFwnLCAnRGVsJywgJ0NhcHMgTG9jaycsICdhJywgJ3MnLCAnZCcsICdmJywgJ2cnLCAnaCcsICdqJywgJ2snLCAnbCcsICc7JywgJ1xcJycsICdFbnRlcicsICdTaGlmdCcsICd6JywgJ3gnLCAnYycsICd2JywgJ2InLCAnbicsICdtJywgJywnLCAnLicsICcvJywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrYkVuZ1VwcGVyID0gWyd+JywgJyEnLCAnQCcsICcjJywgJyQnLCAnJScsICdeJywgJyYnLCAnKicsICcoJywgJyknLCAnXycsICcrJywgJ0JhY2tzcGFjZScsICdUYWInLCAnUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnVScsICdJJywgJ08nLCAnUCcsICd7JywgJ30nLCAnfCcsICdEZWwnLCAnQ2FwcyBMb2NrJywgJ0EnLCAnUycsICdEJywgJ0YnLCAnRycsICdIJywgJ0onLCAnSycsICdMJywgJzonLCAnXFxcIicsICdFbnRlcicsICdTaGlmdCcsICdaJywgJ1gnLCAnQycsICdWJywgJ0InLCAnTicsICdNJywgJzwnLCAnPicsICc/JywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrYlJ1c0xvd2VyID0gWyfRkScsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcwJywgJy0nLCAnPScsICdCYWNrc3BhY2UnLCAnVGFiJywgJ9C5JywgJ9GGJywgJ9GDJywgJ9C6JywgJ9C1JywgJ9C9JywgJ9CzJywgJ9GIJywgJ9GJJywgJ9C3JywgJ9GFJywgJ9GKJywgJ1xcXFwnLCAnRGVsJywgJ0NhcHMgTG9jaycsICfRhCcsICfRiycsICfQsicsICfQsCcsICfQvycsICfRgCcsICfQvicsICfQuycsICfQtCcsICfQticsICfRjScsICdFbnRlcicsICdTaGlmdCcsICfRjycsICfRhycsICfRgScsICfQvCcsICfQuCcsICfRgicsICfRjCcsICfQsScsICfRjicsICcuJywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrYlJ1c1VwcGVyID0gWyfQgScsICchJywgJ1xcXCInLCAn4oSWJywgJzsnLCAnJScsICc6JywgJz8nLCAnKicsICcoJywgJyknLCAnXycsICcrJywgJ0JhY2tzcGFjZScsICdUYWInLCAn0JknLCAn0KYnLCAn0KMnLCAn0JonLCAn0JUnLCAn0J0nLCAn0JMnLCAn0KgnLCAn0KknLCAn0JcnLCAn0KUnLCAn0KonLCAnLycsICdEZWwnLCAnQ2FwcyBMb2NrJywgJ9CkJywgJ9CrJywgJ9CSJywgJ9CQJywgJ9CfJywgJ9CgJywgJ9CeJywgJ9CbJywgJ9CUJywgJ9CWJywgJ9CtJywgJ0VudGVyJywgJ1NoaWZ0JywgJ9CvJywgJ9CnJywgJ9ChJywgJ9CcJywgJ9CYJywgJ9CiJywgJ9CsJywgJ9CRJywgJ9CuJywgJywnLCAn4oaRJywgJ1NoaWZ0JywgJ0N0cmwnLCAn4p2WJywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAn4oaQJywgJ+KGkycsICfihpInLCAnSW5mbyddO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtiQ2xhc3MgPSBbJyBCYWNrcXVvdGUnLCAnIERpZ2l0MScsICcgRGlnaXQyJywgJyBEaWdpdDMnLCAnIERpZ2l0NCcsICcgRGlnaXQ1JywgJyBEaWdpdDYnLCAnIERpZ2l0NycsICcgRGlnaXQ4JywgJyBEaWdpdDknLCAnIERpZ2l0MCcsICcgTWludXMnLCAnIEVxdWFsJywgJyAtZnVuY3Rpb25hbCAtYmFja3NwYWNlIEJhY2tzcGFjZScsICcgLWZ1bmN0aW9uYWwgLXRhYiBUYWInLCAnIEtleVEnLCAnIEtleVcnLCAnIEtleUUnLCAnIEtleVInLCAnIEtleVQnLCAnIEtleVknLCAnIEtleVUnLCAnIEtleUknLCAnIEtleU8nLCAnIEtleVAnLCAnIEJyYWNrZXRMZWZ0JywgJyBCcmFja2V0UmlnaHQnLCAnIEJhY2tzbGFzaCcsICcgLWZ1bmN0aW9uYWwgLWRlbCBEZWxldGUnLCAnIC1mdW5jdGlvbmFsIC1jYXBzIENhcHNMb2NrJywgJyBLZXlBJywgJyBLZXlTJywgJyBLZXlEJywgJyBLZXlGJywgJyBLZXlHJywgJyBLZXlIJywgJyBLZXlKJywgJyBLZXlLJywgJyBLZXlMJywgJyBTZW1pY29sb24nLCAnIFF1b3RlJywgJyAtZnVuY3Rpb25hbCAtZW50ZXIgRW50ZXInLCAnIC1mdW5jdGlvbmFsIC1sc2hpZnQgU2hpZnRMZWZ0JywgJyBLZXlaJywgJyBLZXlYJywgJyBLZXlDJywgJyBLZXlWJywgJyBLZXlCJywgJyBLZXlOJywgJyBLZXlNJywgJyBDb21tYScsICcgUGVyaW9kJywgJyBTbGFzaCcsICcgLWFycm93IEFycm93VXAnLCAnIC1mdW5jdGlvbmFsIC1yc2hpZnQgU2hpZnRSaWdodCcsICcgLWZ1bmN0aW9uYWwgLWxjdHJsIENvbnRyb2xMZWZ0JywgJyAtZnVuY3Rpb25hbCAtd2luIE1ldGFMZWZ0JywgJyAtZnVuY3Rpb25hbCBBbHRMZWZ0JywgJyAtZnVuY3Rpb25hbCAtc3BhY2UgU3BhY2UnLCAnIC1mdW5jdGlvbmFsIEFsdFJpZ2h0JywgJyAtZnVuY3Rpb25hbCBDb250cm9sUmlnaHQnLCAnICAtYXJyb3cgQXJyb3dMZWZ0JywgJyAtYXJyb3cgQXJyb3dEb3duJywgJyAtYXJyb3cgQXJyb3dSaWdodCcsICcgLWZ1bmN0aW9uYWwgLWluZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcnJvd1JlZ0V4cCA9IC9eQXJyb3cuKyQvO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluZm9CbG9ja1RleHQgPSAnVmlydHVhbCBLZXlib2FyZCBQcm9qZWN0IDxicj48YnI+IEhpZ2hsaWdodHMga2V5cyBwcmVzc2VkIGJvdGggb24gdGhlIHBoeXNpY2FsIGFuZCBvbiB0aGUgdmlydHVhbCBrZXlib2FyZHMgYW5kIGFkZHMgc3ltYm9scyB0byB0aGUgdGV4dGFyZWEuIDxicj48YnI+IFRoaXMga2V5Ym9hcmQgd2FzIGNyZWF0ZWQgb24gd2luZG93cyBPUy4gPGJyPjxicj4gVXNlIDxzcGFuIGNsYXNzID0gYnV0dG9uLXNwYW4+QWx0PC9zcGFuPiArIDxzcGFuIGNsYXNzID0gYnV0dG9uLXNwYW4+U2hpZnQ8L3NwYW4+IGJ1dHRvbnMgdG8gY2hhbmdlIGxhbmd1YWdlLiA8YnI+IFByZXNzIDxzcGFuIGNsYXNzID0gYnV0dG9uU3Bhbj5DYXBzIExvY2s8L3NwYW4+IHRvIHN3aXRjaCBzeW1ib2xzIG9uIHZpcnR1YWwga2V5Ym9hcmQuIDxicj48YnI+IFRvIHNob3cgdGhpcyBzY3JlZW4gcHJlc3MgPHNwYW4gY2xhc3MgPSBidXR0b24tc3Bhbj5JbmZvPC9zcGFuPiBidXR0b24gaW4gdGhlIHJpZ2h0IGJvdHRvbSBjb3JuZXInO1xyXG4iLCJjb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcblxuY2xhc3MgSW5mb0Jsb2NrIHtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdpbmZvLWJsb2NrLXdyYXBwZXIgX2hpZGRlbicpO1xuICAgIGxldCBpbmZvQmxvY2sgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2luZm8tYmxvY2snKTtcbiAgICBsZXQgaW5mb0Jsb2NrQnV0dG9uID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdpbmZvLWJsb2NrLWJ1dHRvbicpO1xuXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZChpbmZvQmxvY2spO1xuICAgIGluZm9CbG9jay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGluZm9CbG9ja0J1dHRvbi5pbm5lckhUTUwgPSAnR290IEl0JztcbiAgICBpbmZvQmxvY2suYXBwZW5kKGluZm9CbG9ja0J1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19oaWRkZW4nKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19oaWRkZW4nKTtcbiAgfVxufVxuXG5jb25zdCBpbmZvID0gbmV3IEluZm9CbG9jayhjb25zdGFudHMuaW5mb0Jsb2NrVGV4dCk7XG5leHBvcnQgZGVmYXVsdCBpbmZvO1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcclxuY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcclxuXHJcbmltcG9ydCBpbmZvIGZyb20gJy5cXFxcaW5mb0Jsb2NrLmpzJztcclxuXHJcbmNsYXNzIEtleWJvYXJkIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrYkxhbmcnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2JMYW5nJywgJ2VuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRmlyc3RWaXNpdCcpKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0ZpcnN0VmlzaXQnLCAndHJ1ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlS2IoKSB7XHJcbiAgICBsZXQga2IgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2tleWJvYXJkLWJsb2NrJyk7XHJcbiAgICBsZXQga2JMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tiTGFuZycpO1xyXG5cclxuICAgIGlmIChrYkxhbmcgPT0gJ2VuZycpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25zdGFudHMua2JFbmdMb3dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBlbCA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJyk7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiRW5nTG93ZXJbaV07XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0ICs9IGNvbnN0YW50cy5rYkNsYXNzW2ldO1xyXG4gICAgICAgIGtiLmFwcGVuZChlbCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoa2JMYW5nID09ICdydXMnKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RhbnRzLmtiUnVzTG93ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZWwgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c0xvd2VyW2ldO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdCArPSBjb25zdGFudHMua2JDbGFzc1tpXTtcclxuICAgICAgICBrYi5hcHBlbmQoZWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoa2IpO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNGaXJzdFZpc2l0JykgPT0gJ3RydWUnKSB7XHJcbiAgICAgIGxldCBpbmZvQmxvY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1ibG9jay1idXR0b24nKTtcclxuICAgICAgaW5mby5zaG93KCk7XHJcbiAgICAgIGluZm9CbG9ja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpbmZvLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0ZpcnN0VmlzaXQnLCAnZmFsc2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB2aXJ0dWFsS2IgPSBuZXcgS2V5Ym9hcmQoKTtcclxuZXhwb3J0IGRlZmF1bHQgdmlydHVhbEtiO1xyXG4iLCJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuXFxcXGNvbnN0YW50cy5qcycpO1xyXG5cclxuaW1wb3J0IGluZm8gZnJvbSAnLlxcXFxpbmZvQmxvY2suanMnO1xyXG5cclxuLy8gY3JlYXRlIGh0bWwgZWxlbWVudCB3aXRoIGdpdmVuIGF0dHJpYnV0ZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWwoc2VsZWN0b3IsIGNsYXNzTmFtZSwgaW5uZXJUZXh0LCAuLi5rZXlzVmFsdWVzKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xyXG4gIGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gZWxlbS5jbGFzc05hbWUgPSAnJyA6IGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIGlubmVyVGV4dCA9PT0gdW5kZWZpbmVkID8gZWxlbS5pbm5lckhUTUwgPSAnJyA6IGVsZW0uaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gIGlmIChrZXlzVmFsdWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgd2hpbGUgKGkgPCBrZXlzVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXlzVmFsdWVzW2kgLSAxXSwga2V5c1ZhbHVlc1tpXSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VMYW5nKCkge1xyXG4gIGxldCBrYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpO1xyXG4gIGxldCBrYkxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2JMYW5nJyk7XHJcblxyXG4gIGlmIChrYkxhbmcgPT0gJ2VuZycpIHtcclxuICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JSdXNMb3dlcltpXTtcclxuICAgIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tiTGFuZycsICdydXMnKTtcclxuXHJcbiAgfSBlbHNlIGlmIChrYkxhbmcgPT0gJ3J1cycpIHtcclxuICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JFbmdMb3dlcltpXTtcclxuICAgIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tiTGFuZycsICdlbmcnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGhhbmRsZSBwcmVzc2VkIGtleSBldmVudFxyXG5leHBvcnQgZnVuY3Rpb24gcGh5c2ljYWxDbGlja0hhbmRsZXIoKSB7XHJcbiAgbGV0IHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWJsb2NrJyk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaGlnaGxpZ2h0S2V5KGV2ZW50LmNvZGUpO1xyXG5cclxuICAgIC8vIGlmIGFsdCAmIHNoaWZ0IGFyZSBwcmVzc2VkIHRvZ2V0aGVyXHJcbiAgICBpZiAoZXZlbnQuYWx0S2V5ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNoYW5nZUxhbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnU2hpZnRMZWZ0JyB8fCBldmVudC5jb2RlID09ICdTaGlmdFJpZ2h0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5hbHRLZXkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5jb2RlID09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCArPSAnICAgICc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnQ2Fwc0xvY2snKSB7XHJcbiAgICAgIGNoYW5nZVJlZ2lzdGVyKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PSAnQmFja3NwYWNlJykge1xyXG4gICAgICBsZXQgdEFyZWFUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWJsb2NrJykuaW5uZXJIVE1MO1xyXG4gICAgICB0QXJlYVRleHQgPSB0QXJlYVRleHQuc3Vic3RyaW5nKDAsIHRBcmVhVGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgdEFyZWEuaW5uZXJIVE1MID0gdEFyZWFUZXh0O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0RlbGV0ZScpIHtcclxuICAgICAgbGV0IHRBcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYS1ibG9jaycpLmlubmVySFRNTDtcclxuICAgICAgdEFyZWFUZXh0ID0gdEFyZWFUZXh0LnN1YnN0cmluZygxLCB0QXJlYVRleHQubGVuZ3RoKTtcclxuICAgICAgdEFyZWEuaW5uZXJIVE1MID0gdEFyZWFUZXh0O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0VudGVyJykge1xyXG4gICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ1xcbic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQubWV0YUtleSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYXJyb3cga2V5IGlzIHByZXNzZWRcclxuICAgIGlmIChldmVudC5jb2RlLm1hdGNoKGNvbnN0YW50cy5hcnJvd1JlZ0V4cCkpIHtcclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICfihpEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkyc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaQJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChldmVudC5jb2RlID09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaSJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGRhcmtlbktleShldmVudC5jb2RlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmIGFueSBvdGhlciBrZXkgaXMgcHJlc3NlZFxyXG4gICAgdEFyZWEuaW5uZXJIVE1MICs9IGV2ZW50LmtleTtcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmlydHVhbENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICBsZXQga2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKTtcclxuICBsZXQgdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEtYmxvY2snKTtcclxuXHJcbiAga2Iub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygna2V5Ym9hcmQtYnV0dG9uJykpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnU2hpZnQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnQ3RybCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdBbHQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnVGFiJykge1xyXG4gICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJyAgICAnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJycpIHtcclxuICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICcgJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnQ2FwcyBMb2NrJykge1xyXG4gICAgICBjaGFuZ2VSZWdpc3RlcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgbGV0IHRBcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0YXJlYS1ibG9jaycpLmlubmVySFRNTDtcclxuICAgICAgdEFyZWFUZXh0ID0gdEFyZWFUZXh0LnN1YnN0cmluZygwLCB0QXJlYVRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCA9IHRBcmVhVGV4dDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdEZWwnKSB7XHJcbiAgICAgIGxldCB0QXJlYVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEtYmxvY2snKS5pbm5lckhUTUw7XHJcbiAgICAgIHRBcmVhVGV4dCA9IHRBcmVhVGV4dC5zdWJzdHJpbmcoMSwgdEFyZWFUZXh0Lmxlbmd0aCk7XHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCA9IHRBcmVhVGV4dDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdFbnRlcicpIHtcclxuICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICdcXG4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYXJyb3cga2V5IGlzIHByZXNzZWRcclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MLm1hdGNoKGNvbnN0YW50cy5hcnJvd1JlZ0V4cCkpIHtcclxuICAgICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICfihpEnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkyc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaQJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaSJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdJbmZvJykge1xyXG4gICAgICBsZXQgaW5mb0Jsb2NrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tYmxvY2stYnV0dG9uJyk7XHJcbiAgICAgIGluZm8uc2hvdygpO1xyXG5cclxuICAgICAgaW5mb0Jsb2NrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGluZm8uaGlkZSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRBcmVhLmlubmVySFRNTCArPSB0YXJnZXQuaW5uZXJIVE1MO1xyXG4gIH1cclxufVxyXG5cclxuLy8gaGlnaGxpZ2h0IGtleVxyXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0S2V5KGtleUNvZGUpIHtcclxuICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7a2V5Q29kZX1gKTtcclxuXHJcbiAgcHJlc3NlZEtleS5jbGFzc0xpc3QuYWRkKCdfcHJlc3NlZCcpO1xyXG59XHJcblxyXG4vLyBkYXJrZW4ga2V5XHJcbmV4cG9ydCBmdW5jdGlvbiBkYXJrZW5LZXkoa2V5Q29kZSkge1xyXG4gIGNvbnN0IHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtrZXlDb2RlfWApO1xyXG5cclxuICBwcmVzc2VkS2V5LmNsYXNzTGlzdC5yZW1vdmUoJ19wcmVzc2VkJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSZWdpc3RlcigpIHtcclxuICBsZXQga2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKTtcclxuICBsZXQga2JMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tiTGFuZycpO1xyXG4gIGxldCBjYXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNhcHNMb2NrJyk7XHJcblxyXG4gIGNhcHMuY2xhc3NMaXN0LnRvZ2dsZSgnY2Fwc0FjdGl2ZScpO1xyXG4gIGlmIChjYXBzLmNsYXNzTGlzdC5jb250YWlucygnY2Fwc0FjdGl2ZScpKSB7XHJcbiAgICBpZiAoa2JMYW5nID09ICdlbmcnKSB7XHJcbiAgICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYkVuZ1VwcGVyW2ldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChrYkxhbmcgPT0gJ3J1cycpIHtcclxuICAgICAga2IuY2hpbGROb2Rlcy5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiUnVzVXBwZXJbaV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoa2JMYW5nID09ICdlbmcnKSB7XHJcbiAgICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYkVuZ0xvd2VyW2ldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChrYkxhbmcgPT0gJ3J1cycpIHtcclxuICAgICAga2IuY2hpbGROb2Rlcy5mb3JFYWNoKChidG4sIGkpID0+IHtcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiUnVzTG93ZXJbaV07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm47XHJcbn1cclxuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcclxuY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcclxuXHJcbmltcG9ydCB2aXJ0dWFsS2IgZnJvbSAnLlxcXFxrZXlib2FyZC5qcyc7XHJcblxyXG5pbXBvcnQgaW5mbyBmcm9tICcuXFxcXGluZm9CbG9jay5qcyc7XHJcblxyXG5jbGFzcyBIVE1MUGFnZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGV4dCBhcmVhIGNyZWF0aW9uXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgndGV4dGFyZWEnLCAndGV4dGFyZWEtYmxvY2snKSk7XHJcblxyXG4gICAgLy8gbWFpbiBrZXlib2FyZCBibG9ja1xyXG4gICAgdmlydHVhbEtiLmNyZWF0ZUtiKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdmlydHVhbEtiSFRNTCA9IG5ldyBIVE1MUGFnZSgpO1xyXG5leHBvcnQgZGVmYXVsdCB2aXJ0dWFsS2JIVE1MO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==