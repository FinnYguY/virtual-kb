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
      highlightKey(event.code, event.key);

      document.addEventListener('keyup', function (event) {
        darkenKey(event.code, event.key);
      });

      if (event.location == 3) {
        return;
      }

      // if alt & shift are pressed together
      if (event.altKey && event.shiftKey) {
        event.preventDefault();
        changeLang();
        return;
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
function highlightKey(eventCode, eventKey) {
  try {
    const pressedKey = document.querySelector(`.${eventCode}`);

    pressedKey.classList.add('_pressed');
  } catch (e) {
    if (e.name == 'TypeError') {
      console.log(`Pressed button (event.code = ${eventCode}, event.key = ${eventKey}) is not present on virtual keyboard`);
    }
  }
}

// darken key
function darkenKey(eventCode, eventKey) {
  try {
    const pressedKey = document.querySelector(`.${eventCode}`);

    pressedKey.classList.remove('_pressed');
  } catch (e) {
    if (e.name == 'TypeError') {
      console.log(`Pressed button (event.code = ${eventCode}, event.key = ${eventKey}) is not present on virtual keyboard`);
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmZvQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVJBO0FBQUE7QUFBQTtBQUFBLGtCQUFrQixtQkFBTyxDQUFDLDZDQUFpQjtBQUMzQyxrQkFBa0IsbUJBQU8sQ0FBQyw2Q0FBaUI7O0FBRUo7O0FBRUo7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVM7QUFDYjs7QUFFQTs7QUFFQTtBQUNlLDRFQUFhLEVBQUM7Ozs7Ozs7Ozs7OztBQ3BCN0IsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5NyU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB3aGl0ZSAwJSwgIzk5YmJmZiAxMDAlKTsgfVxcbiAgYm9keSAudGV4dGFyZWEtYmxvY2sge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiA5OTZweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5YmJmZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIGJvZHkgLmtleWJvYXJkLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAxMHB4O1xcbiAgICBtYXJnaW46IDMwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICBib2R5IC5rZXlib2FyZC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5rZXlib2FyZC1idXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7IH1cXG4gICAgYm9keSAua2V5Ym9hcmQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjsgfVxcbiAgYm9keSBzdXAge1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIGJvZHkgLi1mdW5jdGlvbmFsIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7IH1cXG4gIGJvZHkgLl9wcmVzc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjsgfVxcbiAgYm9keSAuLWFycm93IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuLXdpbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgYm9keSAuLXNwYWNlIHtcXG4gICAgd2lkdGg6IDEzNXB4OyB9XFxuICBib2R5IC4tdGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1kZWwge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLWNhcHMge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLmNhcHNBY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2OyB9XFxuICBib2R5IC4tbHNoaWZ0IHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICBib2R5IC4tbGN0cmwge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICBib2R5IC4tYmFja3NwYWNlIHtcXG4gICAgd2lkdGg6IDE0NnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLWVudGVyIHtcXG4gICAgd2lkdGg6IDE3MnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLXJzaGlmdCB7XFxuICAgIHdpZHRoOiAxNTJweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIGJvZHkgLi1zcGFjZSB7XFxuICAgIHdpZHRoOiAzODRweDsgfVxcbiAgYm9keSAuLWluZm8ge1xcbiAgICB3aWR0aDogODZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIGJvZHkgLmxpbmVCcmVhayB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBib2R5IC5pbmZvLWJsb2NrLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgYm9keSAuaW5mby1ibG9jayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDAlLCAjOTliYmZmIDEwMCUpOyB9XFxuICBib2R5IC5pbmZvLWJsb2NrLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjIwZDtcXG4gICAgcmlnaHQ6IC0ycHg7XFxuICAgIGJvdHRvbTogLTJweDtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAuaW5mby1ibG9jay1idXR0b246aG92ZXIge1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpOyB9XFxuICAgIGJvZHkgLmluZm8tYmxvY2stYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7IH1cXG4gIGJvZHkgLl9oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICBib2R5IC5idXR0b24tc3BhbiB7XFxuICAgIHRleHQtc2hhZG93OiAwcHggNXB4IDE1cHggYmxhY2s7XFxuICAgIGNvbG9yOiAjZjJmMjBkOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zY3NzL2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zY3NzL2tiQnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvaW5mb0Jsb2NrLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQ0NId0I7RURJeEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsMkRBQXFGLEVBQUE7RUFOdkY7SUFTSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0VBaEJqQjtJQW9CSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBekJyQjtJRVhFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhLEVBQUE7SUZJZjtNRURJLHlCQUF5QixFQUFBO0lGQzdCO01FR0kseUJBQXlCLEVBQUE7RUZIN0I7SUVRRSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VGVGpCO0lFYUUsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUIsRUFBQTtFRmYzQjtJRW1CRSx5QkFBeUIsRUFBQTtFRm5CM0I7SUV1QkUsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBQTtFRjVCcEI7SUVnQ0UsZUFBZSxFQUFBO0VGaENqQjtJRW9DRSxZQUFZLEVBQUE7RUZwQ2Q7SUV3Q0UsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VGekNsQjtJRTZDRSxpQkFBaUIsRUFBQTtFRjdDbkI7SUVpREUsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VGbERsQjtJRXNERSx5QkFBeUIsRUFBQTtFRnREM0I7SUUwREUsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VGM0RsQjtJRStERSxnQkFBZ0IsRUFBQTtFRi9EbEI7SUVtRUUsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VGcEVuQjtJRXdFRSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUZ6RW5CO0lFNkVFLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFRjlFbkI7SUVrRkUsWUFBWSxFQUFBO0VGbEZkO0lFc0ZFLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFRnZGbkI7SUUyRkUsV0FBVyxFQUFBO0VGM0ZiO0lHWEUsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUhLbkI7SUdERSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJEQUFxRixFQUFBO0VIUHZGO0lHV0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixhQUFhLEVBQUE7SUh0QmY7TUd5QkksdUJBQXVCLEVBQUE7SUh6QjNCO01HNkJJLHVCQUF1QixFQUFBO0VIN0IzQjtJR2tDRSxhQUFhLEVBQUE7RUhsQ2Y7SUdzQ0UsK0JBQTBDO0lBQzFDLGNBQWMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdnbG9iYWxzJztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA5NyU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDE1MywxODcsMjU1LDEpIDEwMCUpO1xcclxcblxcclxcbiAgLnRleHRhcmVhLWJsb2NrIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTk2cHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OWJiZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmtleWJvYXJkLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB3aWR0aDogMTAxMHB4O1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGltcG9ydCAna2JCdXR0b25zJztcXHJcXG5cXHJcXG4gIEBpbXBvcnQgJ2luZm9CbG9jayc7XFxyXFxufVxcclxcblwiLFwiJGZvbnQ6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxyXFxuXCIsXCIua2V5Ym9hcmQtYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLi1mdW5jdGlvbmFsIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XFxyXFxufVxcclxcblxcclxcbi5fcHJlc3NlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2O1xcclxcbn1cXHJcXG5cXHJcXG4uLWFycm93IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLi13aW4ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLXNwYWNlIHtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLi10YWIge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uLWRlbCB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1jYXBzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXBzQWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7XFxyXFxufVxcclxcblxcclxcbi4tbHNoaWZ0IHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi4tbGN0cmwge1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLi1iYWNrc3BhY2Uge1xcclxcbiAgd2lkdGg6IDE0NnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi4tZW50ZXIge1xcclxcbiAgd2lkdGg6IDE3MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi4tcnNoaWZ0IHtcXHJcXG4gIHdpZHRoOiAxNTJweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uLXNwYWNlIHtcXHJcXG4gIHdpZHRoOiAzODRweDtcXHJcXG59XFxyXFxuXFxyXFxuLi1pbmZvIHtcXHJcXG4gIHdpZHRoOiA4NnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5saW5lQnJlYWsge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiLmluZm8tYmxvY2std3JhcHBlciB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tYmxvY2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAxMCU7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDE1MywxODcsMjU1LDEpIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1ibG9jay1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjIwZDtcXHJcXG4gIHJpZ2h0OiAtMnB4O1xcclxcbiAgYm90dG9tOiAtMnB4O1xcclxcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLl9oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1zcGFuIHtcXHJcXG4gIHRleHQtc2hhZG93OiAwcHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG4gIGNvbG9yOiAjZjJmMjBkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxqc1xcXFxwcm9jZXNzb3IuanMnKTtcclxuY29uc3Qgdmlld0dlbmVyYXRvciA9IHJlcXVpcmUoJy5cXFxcanNcXFxcdmlld0dlbmVyYXRvci5qcycpO1xyXG5cclxuaW1wb3J0ICcuXFxcXHNjc3NcXFxcbWFpbi5zY3NzJztcclxuXHJcbi8vIGdlbmVyYXRpbmcgaHRtbCBwYWdlIHZpZXdcclxuaW1wb3J0IHZpcnR1YWxLYkhUTUwgZnJvbSAnLlxcXFxqc1xcXFx2aWV3R2VuZXJhdG9yLmpzJztcclxuZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG5cclxucHJvY2Vzc29yLnBoeXNpY2FsQ2xpY2tIYW5kbGVyKCk7XHJcblxyXG4vLyBjb25maWd1cmluZyB0aGUgbXV0YXRpb24gb2JzZXJ2ZXIgZm9yIGRlbGVnYXRpb24gdG8gd29yayBwcm9wZXJseVxyXG5jb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgY2hpbGRMaXN0OiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihwcm9jZXNzb3IudmlydHVhbENsaWNrSGFuZGxlcik7XHJcbm9ic2VydmVyLm9ic2VydmUoZmllbGQsIGNvbmZpZyk7XHJcbiIsIi8vIGV4cG9ydCBjb25zdCBrYkVuZ0xvd2VyID0gWyc8c3VwPn48L3N1cD4gPHN1Yj5cXGA8L3N1Yj4nLCAnMTxzdXA+ITwvc3VwPicsICcyPHN1cD5APC9zdXA+JywgJzM8c3VwPiM8L3N1cD4nLCAnNDxzdXA+JDwvc3VwPicsICc1PHN1cD4lPC9zdXA+JywgJzY8c3VwPl48L3N1cD4nLCAnNzxzdXA+Jjwvc3VwPicsICc4PHN1cD4qPC9zdXA+JywgJzk8c3VwPig8L3N1cD4nLCAnMDxzdXA+KTwvc3VwPicsICdfIC0nLCAnKz0nLCAnQmFja3NwYWNlJywgJ1RhYicsICdxJywgJ3cnLCAnZScsICdyJywgJ3QnLCAneScsICd1JywgJ2knLCAnbycsICdwJywgJ1sgeycsICddIH0nLCAnfCBcXFxcJywgJ0RlbCcsICdDYXBzIExvY2snLCAnYScsICdzJywgJ2QnLCAnZicsICdnJywgJ2gnLCAnaicsICdrJywgJ2wnLCAnOiA7JywgJ1xcXCIgXFwnJywgJ0VudGVyJywgJ1NoaWZ0JywgJ3onLCAneCcsICdjJywgJ3YnLCAnYicsICduJywgJ20nLCAnPCAsJywgJz4gLicsICc/IC8nLCAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+JywgJ1NoaWZ0JywgJ0N0cmwnLCAnPGkgY2xhc3M9XCJmYWIgZmEtd2luZG93c1wiPjwvaT4nLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPicsICc8aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1yaWdodFwiPjwvaT4nLCAnSW5mbyddO1xyXG4vL1xyXG4vLyBleHBvcnQgY29uc3Qga2JFbmdVcHBlciA9IFsnPHN1cD5+PC9zdXA+IDxzdWI+XFxgPC9zdWI+JywgJzE8c3VwPiE8L3N1cD4nLCAnMjxzdXA+QDwvc3VwPicsICczPHN1cD4jPC9zdXA+JywgJzQ8c3VwPiQ8L3N1cD4nLCAnNTxzdXA+JTwvc3VwPicsICc2PHN1cD5ePC9zdXA+JywgJzc8c3VwPiY8L3N1cD4nLCAnODxzdXA+Kjwvc3VwPicsICc5PHN1cD4oPC9zdXA+JywgJzA8c3VwPik8L3N1cD4nLCAnXyAtJywgJys9JywgJ0JhY2tzcGFjZScsICdUYWInLCAnUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnVScsICdJJywgJ08nLCAnUCcsICdbIHsnLCAnXSB9JywgJ3wgXFxcXCcsICdEZWwnLCAnQ2FwcyBMb2NrJywgJ0EnLCAnUycsICdEJywgJ0YnLCAnRycsICdIJywgJ0onLCAnSycsICdMJywgJzogOycsICdcXFwiIFxcJycsICdFbnRlcicsICdTaGlmdCcsICdaJywgJ1gnLCAnQycsICdWJywgJ0InLCAnTicsICdNJywgJzwgLCcsICc+IC4nLCAnPyAvJywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXVwXCI+PC9pPicsICdTaGlmdCcsICdDdHJsJywgJzxpIGNsYXNzPVwiZmFiIGZhLXdpbmRvd3NcIj48L2k+JywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHRcIj48L2k+JywgJ0luZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrYkVuZ0xvd2VyID0gWydcXGAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLCAnQmFja3NwYWNlJywgJ1RhYicsICdxJywgJ3cnLCAnZScsICdyJywgJ3QnLCAneScsICd1JywgJ2knLCAnbycsICdwJywgJ1snLCAnXScsICdcXFxcJywgJ0RlbCcsICdDYXBzIExvY2snLCAnYScsICdzJywgJ2QnLCAnZicsICdnJywgJ2gnLCAnaicsICdrJywgJ2wnLCAnOycsICdcXCcnLCAnRW50ZXInLCAnU2hpZnQnLCAneicsICd4JywgJ2MnLCAndicsICdiJywgJ24nLCAnbScsICcsJywgJy4nLCAnLycsICfihpEnLCAnU2hpZnQnLCAnQ3RybCcsICfinZYnLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICfihpAnLCAn4oaTJywgJ+KGkicsICdJbmZvJ107XHJcblxyXG5leHBvcnQgY29uc3Qga2JFbmdVcHBlciA9IFsnficsICchJywgJ0AnLCAnIycsICckJywgJyUnLCAnXicsICcmJywgJyonLCAnKCcsICcpJywgJ18nLCAnKycsICdCYWNrc3BhY2UnLCAnVGFiJywgJ1EnLCAnVycsICdFJywgJ1InLCAnVCcsICdZJywgJ1UnLCAnSScsICdPJywgJ1AnLCAneycsICd9JywgJ3wnLCAnRGVsJywgJ0NhcHMgTG9jaycsICdBJywgJ1MnLCAnRCcsICdGJywgJ0cnLCAnSCcsICdKJywgJ0snLCAnTCcsICc6JywgJ1xcXCInLCAnRW50ZXInLCAnU2hpZnQnLCAnWicsICdYJywgJ0MnLCAnVicsICdCJywgJ04nLCAnTScsICc8JywgJz4nLCAnPycsICfihpEnLCAnU2hpZnQnLCAnQ3RybCcsICfinZYnLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICfihpAnLCAn4oaTJywgJ+KGkicsICdJbmZvJ107XHJcblxyXG5leHBvcnQgY29uc3Qga2JSdXNMb3dlciA9IFsn0ZEnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLCAnQmFja3NwYWNlJywgJ1RhYicsICfQuScsICfRhicsICfRgycsICfQuicsICfQtScsICfQvScsICfQsycsICfRiCcsICfRiScsICfQtycsICfRhScsICfRiicsICdcXFxcJywgJ0RlbCcsICdDYXBzIExvY2snLCAn0YQnLCAn0YsnLCAn0LInLCAn0LAnLCAn0L8nLCAn0YAnLCAn0L4nLCAn0LsnLCAn0LQnLCAn0LYnLCAn0Y0nLCAnRW50ZXInLCAnU2hpZnQnLCAn0Y8nLCAn0YcnLCAn0YEnLCAn0LwnLCAn0LgnLCAn0YInLCAn0YwnLCAn0LEnLCAn0Y4nLCAnLicsICfihpEnLCAnU2hpZnQnLCAnQ3RybCcsICfinZYnLCAnQWx0JywgJycsICdBbHQnLCAnQ3RybCcsICfihpAnLCAn4oaTJywgJ+KGkicsICdJbmZvJ107XHJcblxyXG5leHBvcnQgY29uc3Qga2JSdXNVcHBlciA9IFsn0IEnLCAnIScsICdcXFwiJywgJ+KElicsICc7JywgJyUnLCAnOicsICc/JywgJyonLCAnKCcsICcpJywgJ18nLCAnKycsICdCYWNrc3BhY2UnLCAnVGFiJywgJ9CZJywgJ9CmJywgJ9CjJywgJ9CaJywgJ9CVJywgJ9CdJywgJ9CTJywgJ9CoJywgJ9CpJywgJ9CXJywgJ9ClJywgJ9CqJywgJy8nLCAnRGVsJywgJ0NhcHMgTG9jaycsICfQpCcsICfQqycsICfQkicsICfQkCcsICfQnycsICfQoCcsICfQnicsICfQmycsICfQlCcsICfQlicsICfQrScsICdFbnRlcicsICdTaGlmdCcsICfQrycsICfQpycsICfQoScsICfQnCcsICfQmCcsICfQoicsICfQrCcsICfQkScsICfQricsICcsJywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrYkNsYXNzID0gWycgQmFja3F1b3RlJywgJyBEaWdpdDEnLCAnIERpZ2l0MicsICcgRGlnaXQzJywgJyBEaWdpdDQnLCAnIERpZ2l0NScsICcgRGlnaXQ2JywgJyBEaWdpdDcnLCAnIERpZ2l0OCcsICcgRGlnaXQ5JywgJyBEaWdpdDAnLCAnIE1pbnVzJywgJyBFcXVhbCcsICcgLWZ1bmN0aW9uYWwgLWJhY2tzcGFjZSBCYWNrc3BhY2UnLCAnIC1mdW5jdGlvbmFsIC10YWIgVGFiJywgJyBLZXlRJywgJyBLZXlXJywgJyBLZXlFJywgJyBLZXlSJywgJyBLZXlUJywgJyBLZXlZJywgJyBLZXlVJywgJyBLZXlJJywgJyBLZXlPJywgJyBLZXlQJywgJyBCcmFja2V0TGVmdCcsICcgQnJhY2tldFJpZ2h0JywgJyBCYWNrc2xhc2gnLCAnIC1mdW5jdGlvbmFsIC1kZWwgRGVsZXRlJywgJyAtZnVuY3Rpb25hbCAtY2FwcyBDYXBzTG9jaycsICcgS2V5QScsICcgS2V5UycsICcgS2V5RCcsICcgS2V5RicsICcgS2V5RycsICcgS2V5SCcsICcgS2V5SicsICcgS2V5SycsICcgS2V5TCcsICcgU2VtaWNvbG9uJywgJyBRdW90ZScsICcgLWZ1bmN0aW9uYWwgLWVudGVyIEVudGVyJywgJyAtZnVuY3Rpb25hbCAtbHNoaWZ0IFNoaWZ0TGVmdCcsICcgS2V5WicsICcgS2V5WCcsICcgS2V5QycsICcgS2V5VicsICcgS2V5QicsICcgS2V5TicsICcgS2V5TScsICcgQ29tbWEnLCAnIFBlcmlvZCcsICcgU2xhc2gnLCAnIC1hcnJvdyBBcnJvd1VwJywgJyAtZnVuY3Rpb25hbCAtcnNoaWZ0IFNoaWZ0UmlnaHQnLCAnIC1mdW5jdGlvbmFsIC1sY3RybCBDb250cm9sTGVmdCcsICcgLWZ1bmN0aW9uYWwgLXdpbiBNZXRhTGVmdCcsICcgLWZ1bmN0aW9uYWwgQWx0TGVmdCcsICcgLWZ1bmN0aW9uYWwgLXNwYWNlIFNwYWNlJywgJyAtZnVuY3Rpb25hbCBBbHRSaWdodCcsICcgLWZ1bmN0aW9uYWwgQ29udHJvbFJpZ2h0JywgJyAgLWFycm93IEFycm93TGVmdCcsICcgLWFycm93IEFycm93RG93bicsICcgLWFycm93IEFycm93UmlnaHQnLCAnIC1mdW5jdGlvbmFsIC1pbmZvJ107XHJcblxyXG5leHBvcnQgY29uc3QgYXJyb3dSZWdFeHAgPSAvXkFycm93LiskLztcclxuXHJcbmV4cG9ydCBjb25zdCBpbmZvQmxvY2tUZXh0ID0gJ1ZpcnR1YWwgS2V5Ym9hcmQgUHJvamVjdCA8YnI+PGJyPiBIaWdobGlnaHRzIGtleXMgcHJlc3NlZCBib3RoIG9uIHRoZSBwaHlzaWNhbCBhbmQgb24gdGhlIHZpcnR1YWwga2V5Ym9hcmRzIGFuZCBhZGRzIHN5bWJvbHMgdG8gdGhlIHRleHRhcmVhLiA8YnI+PGJyPiBUaGlzIGtleWJvYXJkIHdhcyBjcmVhdGVkIG9uIHdpbmRvd3MgT1MuIDxicj48YnI+IFVzZSA8c3BhbiBjbGFzcyA9IGJ1dHRvbi1zcGFuPkFsdDwvc3Bhbj4gKyA8c3BhbiBjbGFzcyA9IGJ1dHRvbi1zcGFuPlNoaWZ0PC9zcGFuPiBidXR0b25zIHRvIGNoYW5nZSBsYW5ndWFnZS4gPGJyPiBQcmVzcyA8c3BhbiBjbGFzcyA9IGJ1dHRvblNwYW4+Q2FwcyBMb2NrPC9zcGFuPiB0byBzd2l0Y2ggc3ltYm9scyBvbiB2aXJ0dWFsIGtleWJvYXJkLiA8YnI+PGJyPiBUbyBzaG93IHRoaXMgc2NyZWVuIHByZXNzIDxzcGFuIGNsYXNzID0gYnV0dG9uLXNwYW4+SW5mbzwvc3Bhbj4gYnV0dG9uIGluIHRoZSByaWdodCBib3R0b20gY29ybmVyJztcclxuIiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XG5cbmNsYXNzIEluZm9CbG9jayB7XG5cbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mby1ibG9jay13cmFwcGVyIF9oaWRkZW4nKTtcbiAgICBsZXQgaW5mb0Jsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdpbmZvLWJsb2NrJyk7XG4gICAgbGV0IGluZm9CbG9ja0J1dHRvbiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mby1ibG9jay1idXR0b24nKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoaW5mb0Jsb2NrKTtcbiAgICBpbmZvQmxvY2suaW5uZXJIVE1MID0gdGV4dDtcbiAgICBpbmZvQmxvY2tCdXR0b24uaW5uZXJIVE1MID0gJ0dvdCBJdCc7XG4gICAgaW5mb0Jsb2NrLmFwcGVuZChpbmZvQmxvY2tCdXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfaGlkZGVuJyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfaGlkZGVuJyk7XG4gIH1cbn1cblxuY29uc3QgaW5mbyA9IG5ldyBJbmZvQmxvY2soY29uc3RhbnRzLmluZm9CbG9ja1RleHQpO1xuZXhwb3J0IGRlZmF1bHQgaW5mbztcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XHJcbmNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XHJcblxyXG5pbXBvcnQgaW5mbyBmcm9tICcuXFxcXGluZm9CbG9jay5qcyc7XHJcblxyXG5jbGFzcyBLZXlib2FyZCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2JMYW5nJykpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tiTGFuZycsICdlbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0ZpcnN0VmlzaXQnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNGaXJzdFZpc2l0JywgJ3RydWUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUtiKCkge1xyXG4gICAgbGV0IGtiID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdrZXlib2FyZC1ibG9jaycpO1xyXG4gICAgbGV0IGtiTGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrYkxhbmcnKTtcclxuXHJcbiAgICBpZiAoa2JMYW5nID09ICdlbmcnKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uc3RhbnRzLmtiRW5nTG93ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZWwgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicpO1xyXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYkVuZ0xvd2VyW2ldO1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdCArPSBjb25zdGFudHMua2JDbGFzc1tpXTtcclxuICAgICAgICBrYi5hcHBlbmQoZWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGtiTGFuZyA9PSAncnVzJykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0YW50cy5rYlJ1c0xvd2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGVsID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nKTtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBjb25zdGFudHMua2JSdXNMb3dlcltpXTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QgKz0gY29uc3RhbnRzLmtiQ2xhc3NbaV07XHJcbiAgICAgICAga2IuYXBwZW5kKGVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGtiKTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRmlyc3RWaXNpdCcpID09ICd0cnVlJykge1xyXG4gICAgICBsZXQgaW5mb0Jsb2NrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tYmxvY2stYnV0dG9uJyk7XHJcbiAgICAgIGluZm8uc2hvdygpO1xyXG4gICAgICBpbmZvQmxvY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaW5mby5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNGaXJzdFZpc2l0JywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdmlydHVhbEtiID0gbmV3IEtleWJvYXJkKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHZpcnR1YWxLYjtcclxuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcclxuXHJcbmltcG9ydCBpbmZvIGZyb20gJy5cXFxcaW5mb0Jsb2NrLmpzJztcclxuXHJcbi8vIGNyZWF0ZSBodG1sIGVsZW1lbnQgd2l0aCBnaXZlbiBhdHRyaWJ1dGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sKHNlbGVjdG9yLCBjbGFzc05hbWUsIGlubmVyVGV4dCwgLi4ua2V5c1ZhbHVlcykge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGVjdG9yKTtcclxuICBjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/IGVsZW0uY2xhc3NOYW1lID0gJycgOiBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICBpbm5lclRleHQgPT09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICBpZiAoa2V5c1ZhbHVlcy5sZW5ndGggIT09IDApIHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5c1ZhbHVlc1tpIC0gMV0sIGtleXNWYWx1ZXNbaV0pO1xyXG4gICAgICBpICs9IDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTGFuZygpIHtcclxuICBsZXQga2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKTtcclxuICBsZXQga2JMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tiTGFuZycpO1xyXG5cclxuICBpZiAoa2JMYW5nID09ICdlbmcnKSB7XHJcbiAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICBidG4uaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiUnVzTG93ZXJbaV07XHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrYkxhbmcnLCAncnVzJyk7XHJcblxyXG4gIH0gZWxzZSBpZiAoa2JMYW5nID09ICdydXMnKSB7XHJcbiAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICBidG4uaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiRW5nTG93ZXJbaV07XHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrYkxhbmcnLCAnZW5nJyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBoYW5kbGUgcHJlc3NlZCBrZXkgZXZlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIHBoeXNpY2FsQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgbGV0IHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWJsb2NrJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGhpZ2hsaWdodEtleShldmVudC5jb2RlLCBldmVudC5rZXkpO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBkYXJrZW5LZXkoZXZlbnQuY29kZSwgZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXZlbnQubG9jYXRpb24gPT0gMykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgYWx0ICYgc2hpZnQgYXJlIHByZXNzZWQgdG9nZXRoZXJcclxuICAgICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2hhbmdlTGFuZygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ1NoaWZ0TGVmdCcgfHwgZXZlbnQuY29kZSA9PSAnU2hpZnRSaWdodCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChldmVudC5jb2RlID09ICdUYWInKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJyAgICAnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0NhcHNMb2NrJykge1xyXG4gICAgICAgIGNoYW5nZVJlZ2lzdGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgIGxldCB0QXJlYVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEtYmxvY2snKS5pbm5lckhUTUw7XHJcbiAgICAgICAgdEFyZWFUZXh0ID0gdEFyZWFUZXh0LnN1YnN0cmluZygwLCB0QXJlYVRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdEFyZWEuaW5uZXJIVE1MID0gdEFyZWFUZXh0O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0RlbGV0ZScpIHtcclxuICAgICAgICBsZXQgdEFyZWFUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWJsb2NrJykuaW5uZXJIVE1MO1xyXG4gICAgICAgIHRBcmVhVGV4dCA9IHRBcmVhVGV4dC5zdWJzdHJpbmcoMSwgdEFyZWFUZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgdEFyZWEuaW5uZXJIVE1MID0gdEFyZWFUZXh0O1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0VudGVyJykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAnXFxuJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIGFycm93IGtleSBpcyBwcmVzc2VkXHJcbiAgICAgIGlmIChldmVudC5jb2RlLm1hdGNoKGNvbnN0YW50cy5hcnJvd1JlZ0V4cCkpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaRJztcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkyc7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSAnQXJyb3dMZWZ0Jykge1xyXG4gICAgICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICfihpAnO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0Fycm93UmlnaHQnKSB7XHJcbiAgICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkic7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgYW55IG90aGVyIGtleSBpcyBwcmVzc2VkXHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCArPSBldmVudC5rZXk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmlydHVhbENsaWNrSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICBsZXQga2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKTtcclxuICBsZXQgdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEtYmxvY2snKTtcclxuXHJcbiAga2Iub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2tleWJvYXJkLWJ1dHRvbicpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ1NoaWZ0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0N0cmwnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnQWx0Jykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ1RhYicpIHtcclxuICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICcgICAgJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICcnKSB7XHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCArPSAnICc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0NhcHMgTG9jaycpIHtcclxuICAgICAgY2hhbmdlUmVnaXN0ZXIoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgIGxldCB0QXJlYVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEtYmxvY2snKS5pbm5lckhUTUw7XHJcbiAgICAgIHRBcmVhVGV4dCA9IHRBcmVhVGV4dC5zdWJzdHJpbmcoMCwgdEFyZWFUZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICB0QXJlYS5pbm5lckhUTUwgPSB0QXJlYVRleHQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnRGVsJykge1xyXG4gICAgICBsZXQgdEFyZWFUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhLWJsb2NrJykuaW5uZXJIVE1MO1xyXG4gICAgICB0QXJlYVRleHQgPSB0QXJlYVRleHQuc3Vic3RyaW5nKDEsIHRBcmVhVGV4dC5sZW5ndGgpO1xyXG4gICAgICB0QXJlYS5pbm5lckhUTUwgPSB0QXJlYVRleHQ7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnRW50ZXInKSB7XHJcbiAgICAgIHRBcmVhLmlubmVySFRNTCArPSAnXFxuJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGFycm93IGtleSBpcyBwcmVzc2VkXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTC5tYXRjaChjb25zdGFudHMuYXJyb3dSZWdFeHApKSB7XHJcbiAgICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIHRBcmVhLmlubmVySFRNTCArPSAn4oaRJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgdEFyZWEuaW5uZXJIVE1MICs9ICfihpMnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkCc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgICB0QXJlYS5pbm5lckhUTUwgKz0gJ+KGkic7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PSAnSW5mbycpIHtcclxuICAgICAgbGV0IGluZm9CbG9ja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWJsb2NrLWJ1dHRvbicpO1xyXG4gICAgICBpbmZvLnNob3coKTtcclxuXHJcbiAgICAgIGluZm9CbG9ja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpbmZvLmhpZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0QXJlYS5pbm5lckhUTUwgKz0gdGFyZ2V0LmlubmVySFRNTDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGhpZ2hsaWdodCBrZXlcclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodEtleShldmVudENvZGUsIGV2ZW50S2V5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtldmVudENvZGV9YCk7XHJcblxyXG4gICAgcHJlc3NlZEtleS5jbGFzc0xpc3QuYWRkKCdfcHJlc3NlZCcpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChlLm5hbWUgPT0gJ1R5cGVFcnJvcicpIHtcclxuICAgICAgY29uc29sZS5sb2coYFByZXNzZWQgYnV0dG9uIChldmVudC5jb2RlID0gJHtldmVudENvZGV9LCBldmVudC5rZXkgPSAke2V2ZW50S2V5fSkgaXMgbm90IHByZXNlbnQgb24gdmlydHVhbCBrZXlib2FyZGApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gZGFya2VuIGtleVxyXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuS2V5KGV2ZW50Q29kZSwgZXZlbnRLZXkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJlc3NlZEtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2V2ZW50Q29kZX1gKTtcclxuXHJcbiAgICBwcmVzc2VkS2V5LmNsYXNzTGlzdC5yZW1vdmUoJ19wcmVzc2VkJyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKGUubmFtZSA9PSAnVHlwZUVycm9yJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUHJlc3NlZCBidXR0b24gKGV2ZW50LmNvZGUgPSAke2V2ZW50Q29kZX0sIGV2ZW50LmtleSA9ICR7ZXZlbnRLZXl9KSBpcyBub3QgcHJlc2VudCBvbiB2aXJ0dWFsIGtleWJvYXJkYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmVnaXN0ZXIoKSB7XHJcbiAgbGV0IGtiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJyk7XHJcbiAgbGV0IGtiTGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrYkxhbmcnKTtcclxuICBsZXQgY2FwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DYXBzTG9jaycpO1xyXG5cclxuICBjYXBzLmNsYXNzTGlzdC50b2dnbGUoJ2NhcHNBY3RpdmUnKTtcclxuICBpZiAoY2Fwcy5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcHNBY3RpdmUnKSkge1xyXG4gICAgaWYgKGtiTGFuZyA9PSAnZW5nJykge1xyXG4gICAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JFbmdVcHBlcltpXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoa2JMYW5nID09ICdydXMnKSB7XHJcbiAgICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c1VwcGVyW2ldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGtiTGFuZyA9PSAnZW5nJykge1xyXG4gICAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xyXG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JFbmdMb3dlcltpXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoa2JMYW5nID09ICdydXMnKSB7XHJcbiAgICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c0xvd2VyW2ldO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuO1xyXG59XHJcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XHJcbmNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XHJcblxyXG5pbXBvcnQgdmlydHVhbEtiIGZyb20gJy5cXFxca2V5Ym9hcmQuanMnO1xyXG5cclxuaW1wb3J0IGluZm8gZnJvbSAnLlxcXFxpbmZvQmxvY2suanMnO1xyXG5cclxuY2xhc3MgSFRNTFBhZ2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRleHQgYXJlYSBjcmVhdGlvblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3RleHRhcmVhJywgJ3RleHRhcmVhLWJsb2NrJykpO1xyXG5cclxuICAgIC8vIG1haW4ga2V5Ym9hcmQgYmxvY2tcclxuICAgIHZpcnR1YWxLYi5jcmVhdGVLYigpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHZpcnR1YWxLYkhUTUwgPSBuZXcgSFRNTFBhZ2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgdmlydHVhbEtiSFRNTDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=