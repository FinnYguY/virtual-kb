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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: Lucida Sans Unicode;\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center;\n  height: 97%;\n  background: linear-gradient(180deg, white 0%, #99bbff 100%); }\n  body .textarea-block {\n    font-size: 20px;\n    width: 996px;\n    height: 200px;\n    margin-top: 20px;\n    background-color: #99bbff;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .keyboard-block {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 1010px;\n    margin: 30px;\n    user-select: none; }\n  body .keyboard-button {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px;\n    background-color: white;\n    outline: none; }\n    body .keyboard-button:hover {\n      background-color: #ffff99; }\n    body .keyboard-button:active {\n      background-color: #ffff66; }\n  body sup {\n    margin-left: 8px;\n    font-size: 20px; }\n  body .-functional {\n    padding: 5px;\n    font-size: 16px;\n    background-color: #d9d9d9; }\n  body ._pressed {\n    background-color: #ffff66; }\n  body .-arrow {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .-win {\n    font-size: 25px; }\n  body .-space {\n    width: 135px; }\n  body .-tab {\n    width: 80px;\n    text-align: left; }\n  body .-del {\n    text-align: right; }\n  body .-caps {\n    width: 100px;\n    text-align: left; }\n  body .capsActive {\n    background-color: #ffff66; }\n  body .-lshift {\n    width: 120px;\n    text-align: left; }\n  body .-lctrl {\n    text-align: left; }\n  body .-backspace {\n    width: 146px;\n    text-align: right; }\n  body .-enter {\n    width: 172px;\n    text-align: right; }\n  body .-rshift {\n    width: 152px;\n    text-align: right; }\n  body .-space {\n    width: 384px; }\n  body .-info {\n    width: 86px;\n    text-align: right; }\n  body .lineBreak {\n    width: 100%; }\n  body .info-block {\n    position: relative;\n    top: 10%;\n    width: 600px;\n    height: auto;\n    margin: 0 auto;\n    padding: 10px;\n    border-radius: 20px;\n    border: 2px solid black;\n    background: linear-gradient(180deg, white 0%, #99bbff 100%); }\n    body .info-block-wrapper {\n      font-size: 20px;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      z-index: 1000;\n      user-select: none; }\n    body .info-block-button {\n      position: absolute;\n      background-color: #f2f20d;\n      right: -2px;\n      bottom: -2px;\n      padding: 2px 10px;\n      cursor: pointer;\n      border: 2px solid black;\n      border-bottom-right-radius: 20px;\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 5px;\n      border-top-right-radius: 5px;\n      outline: none; }\n      body .info-block-button:hover {\n        filter: brightness(90%); }\n      body .info-block-button:active {\n        filter: brightness(80%); }\n  body ._hidden {\n    display: none; }\n  body .button-span {\n    text-shadow: 0px 5px 15px black;\n    color: #f2f20d; }\n", "",{"version":3,"sources":["webpack://src/scss/main.scss","webpack://src/scss/globals.scss","webpack://src/scss/kbButtons.scss","webpack://src/scss/infoBlock.scss"],"names":[],"mappings":"AAEA;EACE,gCCHwB;EDIxB,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,YAAY,EAAA;;AAGd;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,2DChBoF,EAAA;EDUtF;IASI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,yBCnBa;IDoBb,uBCtBgC;IDuBhC,mBAAmB;IACnB,aAAa,EAAA;EAhBjB;IAoBI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,YAAY;IACZ,iBAAiB,EAAA;EAzBrB;IEXE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBDDkC;ICElC,kBAAkB;IAClB,uBDec;ICdd,aAAa,EAAA;IFIf;MEDI,yBDGmB,EAAA;IDFvB;MEGI,yBDCoB,EAAA;EDJxB;IEQE,gBAAgB;IAChB,eAAe,EAAA;EFTjB;IEaE,YAAY;IACZ,eAAe;IACf,yBDTyB,EAAA;EDN3B;IEmBE,yBDX0B,EAAA;EDR5B;IEuBE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBDnCkC;ICoClC,kBAAkB,EAAA;EF5BpB;IEgCE,eAAe,EAAA;EFhCjB;IEoCE,YAAY,EAAA;EFpCd;IEwCE,WAAW;IACX,gBAAgB,EAAA;EFzClB;IE6CE,iBAAiB,EAAA;EF7CnB;IEiDE,YAAY;IACZ,gBAAgB,EAAA;EFlDlB;IEsDE,yBDlDsB,EAAA;EDJxB;IE0DE,YAAY;IACZ,gBAAgB,EAAA;EF3DlB;IE+DE,gBAAgB,EAAA;EF/DlB;IEmEE,YAAY;IACZ,iBAAiB,EAAA;EFpEnB;IEwEE,YAAY;IACZ,iBAAiB,EAAA;EFzEnB;IE6EE,YAAY;IACZ,iBAAiB,EAAA;EF9EnB;IEkFE,YAAY,EAAA;EFlFd;IEsFE,WAAW;IACX,iBAAiB,EAAA;EFvFnB;IE2FE,WAAW,EAAA;EF3Fb;IGXE,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBFJkC;IEKlC,2DFPoF,EAAA;IDUtF;MGAI,eAAe;MACf,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,oCFRmC;MESnC,aAAa;MACb,iBAAiB,EAAA;IHNrB;MGUI,kBAAkB;MAClB,yBFbuB;MEcvB,WAAW;MACX,YAAY;MACZ,iBAAiB;MACjB,eAAe;MACf,uBFxBgC;MEyBhC,gCAAgC;MAChC,4BAA4B;MAC5B,8BAA8B;MAC9B,4BAA4B;MAC5B,aAAa,EAAA;MHrBjB;QGwBM,uBAAuB,EAAA;MHxB7B;QG4BM,uBAAuB,EAAA;EH5B7B;IGmCE,aAAa,EAAA;EHnCf;IGuCE,+BAA0C;IAC1C,cFxC0B,EAAA","sourcesContent":["@import 'globals';\r\n\r\n* {\r\n  font-family: $font;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  height: 97%;\r\n  background: $gradientBg;\r\n\r\n  .textarea-block {\r\n    font-size: 20px;\r\n    width: 996px;\r\n    height: 200px;\r\n    margin-top: 20px;\r\n    background-color: $tAreaBg;\r\n    border: $defaultBlackBorder;\r\n    border-radius: 10px;\r\n    outline: none;\r\n  }\r\n\r\n  .keyboard-block {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 1010px;\r\n    margin: 30px;\r\n    user-select: none;\r\n  }\r\n\r\n  @import 'kbButtons';\r\n\r\n  @import 'infoBlock';\r\n}\r\n","$font: Lucida Sans Unicode;\r\n\r\n$gradientBg: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(153,187,255,1) 100%);\r\n\r\n$defaultBlackBorder: 2px solid black;\r\n\r\n$tAreaBg: #99bbff;\r\n\r\n$infoBlockWrapperBg: rgba(0, 0, 0, 0.5);\r\n\r\n$infoBlockButtonBg: #f2f20d;\r\n\r\n$infoBlockSpanColor: #f2f20d;\r\n\r\n$kbButtonHover: #ffff99;\r\n\r\n$kbButtonActive: #ffff66;\r\n\r\n$kbButtonFuncHover: #d9d9d9;\r\n\r\n$kbButtonFuncActive: #ffff66;\r\n\r\n$buttonBg: white;\r\n",".keyboard-button {\r\n  font-size: 25px;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 3px;\r\n  border: $defaultBlackBorder;\r\n  border-radius: 5px;\r\n  background-color: $buttonBg;\r\n  outline: none;\r\n\r\n  &:hover {\r\n    background-color: $kbButtonHover;\r\n  }\r\n\r\n  &:active {\r\n    background-color: $kbButtonActive;\r\n  }\r\n}\r\n\r\nsup {\r\n  margin-left: 8px;\r\n  font-size: 20px;\r\n}\r\n\r\n.-functional {\r\n  padding: 5px;\r\n  font-size: 16px;\r\n  background-color: $kbButtonFuncHover;\r\n}\r\n\r\n._pressed {\r\n  background-color: $kbButtonFuncActive;\r\n}\r\n\r\n.-arrow {\r\n  font-size: 25px;\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: 3px;\r\n  border: $defaultBlackBorder;\r\n  border-radius: 5px;\r\n}\r\n\r\n.-win {\r\n  font-size: 25px;\r\n}\r\n\r\n.-space {\r\n  width: 135px;\r\n}\r\n\r\n.-tab {\r\n  width: 80px;\r\n  text-align: left;\r\n}\r\n\r\n.-del {\r\n  text-align: right;\r\n}\r\n\r\n.-caps {\r\n  width: 100px;\r\n  text-align: left;\r\n}\r\n\r\n.capsActive {\r\n  background-color: $kbButtonActive;\r\n}\r\n\r\n.-lshift {\r\n  width: 120px;\r\n  text-align: left;\r\n}\r\n\r\n.-lctrl {\r\n  text-align: left;\r\n}\r\n\r\n.-backspace {\r\n  width: 146px;\r\n  text-align: right;\r\n}\r\n\r\n.-enter {\r\n  width: 172px;\r\n  text-align: right;\r\n}\r\n\r\n.-rshift {\r\n  width: 152px;\r\n  text-align: right;\r\n}\r\n\r\n.-space {\r\n  width: 384px;\r\n}\r\n\r\n.-info {\r\n  width: 86px;\r\n  text-align: right;\r\n}\r\n\r\n.lineBreak {\r\n  width: 100%;\r\n}\r\n",".info-block {\r\n  position: relative;\r\n  top: 10%;\r\n  width: 600px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  border-radius: 20px;\r\n  border: $defaultBlackBorder;\r\n  background: $gradientBg;\r\n\r\n  &-wrapper {\r\n    font-size: 20px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: $infoBlockWrapperBg;\r\n    z-index: 1000;\r\n    user-select: none;\r\n  }\r\n\r\n  &-button {\r\n    position: absolute;\r\n    background-color: $infoBlockButtonBg;\r\n    right: -2px;\r\n    bottom: -2px;\r\n    padding: 2px 10px;\r\n    cursor: pointer;\r\n    border: $defaultBlackBorder;\r\n    border-bottom-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    outline: none;\r\n\r\n    &:hover {\r\n      filter: brightness(90%);\r\n    }\r\n\r\n    &:active {\r\n      filter: brightness(80%);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n._hidden {\r\n  display: none;\r\n}\r\n\r\n.button-span {\r\n  text-shadow: 0px 5px 15px rgba(0, 0, 0, 1);\r\n  color: $infoBlockSpanColor;\r\n}\r\n"],"sourceRoot":""}]);
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
/*! exports provided: kbEngLower, kbEngUpper, kbRusLower, kbRusUpper, kbClass, arrowRegExp, infoBlockText, kbLangConst, isFirstVisitConst, infoBlock, infoBlockButtonQS, infoBlockButton, keyboardBlockQS, keyboardBlock, keyboardButton, tAreaBlockQS, tAreaBlock, eng, rus, capsButton, capsLock, capsActive, lShift, rShift, tab, backspace, del, enter, space, arrowUp, arrowDown, arrowLeft, arrowRight */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbLangConst", function() { return kbLangConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstVisitConst", function() { return isFirstVisitConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBlock", function() { return infoBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBlockButtonQS", function() { return infoBlockButtonQS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBlockButton", function() { return infoBlockButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardBlockQS", function() { return keyboardBlockQS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardBlock", function() { return keyboardBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardButton", function() { return keyboardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tAreaBlockQS", function() { return tAreaBlockQS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tAreaBlock", function() { return tAreaBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eng", function() { return eng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rus", function() { return rus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capsButton", function() { return capsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capsLock", function() { return capsLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capsActive", function() { return capsActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lShift", function() { return lShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rShift", function() { return rShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tab", function() { return tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backspace", function() { return backspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enter", function() { return enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowUp", function() { return arrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowDown", function() { return arrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowLeft", function() { return arrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowRight", function() { return arrowRight; });
const kbEngLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];
Object.freeze(kbEngLower);

const kbEngUpper = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];
Object.freeze(kbEngUpper);

const kbRusLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];
Object.freeze(kbRusLower);

const kbRusUpper = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', 'Shift', 'Ctrl', '❖', 'Alt', '', 'Alt', 'Ctrl', '←', '↓', '→', 'Info'];
Object.freeze(kbRusUpper);

const kbClass = [' Backquote', ' Digit1', ' Digit2', ' Digit3', ' Digit4', ' Digit5', ' Digit6', ' Digit7', ' Digit8', ' Digit9', ' Digit0', ' Minus', ' Equal', ' -functional -backspace Backspace', ' -functional -tab Tab', ' KeyQ', ' KeyW', ' KeyE', ' KeyR', ' KeyT', ' KeyY', ' KeyU', ' KeyI', ' KeyO', ' KeyP', ' BracketLeft', ' BracketRight', ' Backslash', ' -functional -del Delete', ' -functional -caps CapsLock', ' KeyA', ' KeyS', ' KeyD', ' KeyF', ' KeyG', ' KeyH', ' KeyJ', ' KeyK', ' KeyL', ' Semicolon', ' Quote', ' -functional -enter Enter', ' -functional -lshift ShiftLeft', ' KeyZ', ' KeyX', ' KeyC', ' KeyV', ' KeyB', ' KeyN', ' KeyM', ' Comma', ' Period', ' Slash', ' -arrow ArrowUp', ' -functional -rshift ShiftRight', ' -functional -lctrl ControlLeft', ' -functional -win MetaLeft', ' -functional AltLeft', ' -functional -space Space', ' -functional AltRight', ' -functional ControlRight', '  -arrow ArrowLeft', ' -arrow ArrowDown', ' -arrow ArrowRight', ' -functional -info'];
Object.freeze(kbClass);

const arrowRegExp = /^Arrow.+$/;

const infoBlockText = 'Virtual Keyboard Project <br><br> Highlights keys pressed both on the physical and on the virtual keyboards and adds symbols to the textarea. <br><br> This keyboard was created on windows OS. <br><br> Use <span class = button-span>Alt</span> + <span class = button-span>Shift</span> buttons to change language. <br> Press <span class = buttonSpan>Caps Lock</span> to switch symbols on virtual keyboard. <br><br> To show this screen press <span class = button-span>Info</span> button in the right bottom corner';

const kbLangConst = 'kbLang';
const isFirstVisitConst = 'isFirstVisit';
const infoBlock = 'info-block';
const infoBlockButtonQS = '.info-block-button';
const infoBlockButton = 'info-block-button';
const keyboardBlockQS = '.keyboard-block';
const keyboardBlock = 'keyboard-block';
const keyboardButton = 'keyboard-button';
const tAreaBlockQS = '.textarea-block';
const tAreaBlock = 'textarea-block';
const eng = 'eng';
const rus = 'rus';
const capsButton = '.CapsLock';
const capsLock = 'CapsLock';
const capsActive = 'capsActive';
const lShift = 'ShiftLeft';
const rShift = 'ShiftRight';
const tab = 'Tab';
const backspace = 'Backspace';
const del = 'Delete';
const enter = 'Enter';
const space = 'Space';
const arrowUp = 'ArrowUp';
const arrowDown = 'ArrowDown';
const arrowLeft = 'ArrowLeft';
const arrowRight = 'ArrowRight';


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
    const infoBlock = processor.createHtml('div', constants.infoBlock);
    const infoBlockButton = processor.createHtml('div', constants.infoBlockButton);

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
    if (!localStorage.getItem(constants.kbLangConst)) {
      localStorage.setItem(constants.kbLangConst, 'eng');
    }

    if (!localStorage.getItem(constants.isFirstVisitConst)) {
      localStorage.setItem(constants.isFirstVisitConst, 'true');
    }
  }

  createKb() {
    const kb = processor.createHtml('div', constants.keyboardBlock);
    const kbLang = localStorage.getItem(constants.kbLangConst);

    if (kbLang === 'eng') {
      for (let i = 0; i < constants.kbEngLower.length; i += 1) {
        const el = processor.createHtml('button', constants.keyboardButton);
        el.innerHTML = constants.kbEngLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    } else if (kbLang === 'rus') {
      for (let i = 0; i < constants.kbRusLower.length; i += 1) {
        const el = processor.createHtml('button', constants.keyboardButton);
        el.innerHTML = constants.kbRusLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    }

    document.body.append(kb);

    if (localStorage.getItem(constants.isFirstVisitConst) === 'true') {
      const infoBlockButton = document.querySelector(constants.infoBlockButtonQS);
      _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].show();
      infoBlockButton.addEventListener('click', () => {
        _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
      });
      localStorage.setItem(constants.isFirstVisitConst, 'false');
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
/*! exports provided: createHtml, highlightKey, darkenKey, changeRegister, changeLang, physicalClickHandler, virtualClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightKey", function() { return highlightKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkenKey", function() { return darkenKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRegister", function() { return changeRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLang", function() { return changeLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physicalClickHandler", function() { return physicalClickHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualClickHandler", function() { return virtualClickHandler; });
/* harmony import */ var _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoBlock.js */ "./src/js/infoBlock.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/js/constants.js");



// create html element with given attributes
function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  if (className) elem.className = className;
  if (innerText) elem.innerHTML = innerText;
  if (keysValues.length) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

// highlight key
function highlightKey(eventCode, eventKey) {
  try {
    const pressedKey = document.querySelector(`.${eventCode}`);

    pressedKey.classList.add('_pressed');
  } catch (e) {
    if (e.name === 'TypeError') {
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
    if (e.name === 'TypeError') {
      console.log(`Pressed button (event.code = ${eventCode}, event.key = ${eventKey}) is not present on virtual keyboard`);
    }
  }
}

function changeRegister() {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const kbLang = localStorage.getItem(constants.kbLangConst);
  const caps = document.querySelector(constants.capsButton);

  caps.classList.toggle(constants.capsActive);
  if (caps.classList.contains(constants.capsActive)) {
    if (kbLang === constants.eng) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngUpper[i];
      });
    }
    if (kbLang === constants.rus) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusUpper[i];
      });
    }
  } else {
    if (kbLang === constants.eng) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngLower[i];
      });
    }
    if (kbLang === constants.rus) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusLower[i];
      });
    }
  }
}

function changeLang() {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const kbLang = localStorage.getItem(constants.kbLang);

  if (kbLang === constants.eng) {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbRusLower[i];
    });
    localStorage.setItem(constants.kbLang, constants.rus);

  } else if (kbLang === constants.rus) {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbEngLower[i];
    });
    localStorage.setItem(constants.kbLang, constants.eng);
  }
}

// handle pressed key event
function physicalClickHandler() {
  const tArea = document.querySelector(constants.tAreaBlockQS);

  document.addEventListener('keydown', (event) => {
    highlightKey(event.code, event.key);

    document.addEventListener('keyup', (event) => {
      darkenKey(event.code, event.key);
    });

    if (event.location === 3) {
      return;
    }

    // if alt & shift are pressed together
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      changeLang();
      return;
    }

    if (event.code === constants.lShift || event.code === constants.rShift) {
      return;
    }

    if (event.ctrlKey) {
      return;
    }

    if (event.altKey) {
      event.preventDefault();
      return;
    }

    if (event.code === constants.tab) {
      event.preventDefault();
      tArea.value += '    ';
      return;
    }

    if (event.code === constants.capsLock) {
      changeRegister();
      return;
    }

    if (event.code === constants.backspace) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.value = tAreaText;
      return;
    }

    if (event.code === constants.del) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.value = tAreaText;
      return;
    }

    if (event.code === constants.enter) {
      event.preventDefault();
      tArea.value += '\n';
      return;
    }

    if (event.metaKey) {
      event.preventDefault();
      return;
    }

    if (event.code === constants.space) {
      event.preventDefault();
      tArea.value += ' ';
      return;
    }

    // if arrow key is pressed
    if (event.code.match(constants.arrowRegExp)) {
      if (event.code === constants.arrowUp) {
        tArea.value += '↑';
        return;
      }

      if (event.code === constants.arrowDown) {
        tArea.value += '↓';
        return;
      }

      if (event.code === constants.arrowLeft) {
        tArea.value += '←';
        return;
      }

      if (event.code === constants.arrowRight) {
        tArea.value += '→';
        return;
      }
      return;
    }

    // if any other key is pressed
    tArea.value += event.key;
  });
}

const virtualClickHandler = () => {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const tArea = document.querySelector(constants.tAreaBlockQS);
  const infoBlockButton = document.querySelector(constants.infoBlockButtonQS);

  kb.onclick = (event) => {
    const { target } = event;

    if (!target.classList.contains(constants.keyboardButton)) return;

    if (target.innerHTML === 'Shift') {
      return;
    }

    if (target.innerHTML === 'Ctrl') {
      return;
    }

    if (target.innerHTML === 'Alt') {
      return;
    }

    if (target.innerHTML === constants.tab) {
      tArea.value += '    ';
      return;
    }

    if (target.innerHTML === '') {
      tArea.value += ' ';
    }

    if (target.innerHTML === 'Caps Lock') {
      changeRegister();
      return;
    }

    if (target.innerHTML === constants.backspace) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.value = tAreaText;
      return;
    }

    if (target.innerHTML === 'Del') {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.value = tAreaText;
      return;
    }

    if (target.innerHTML === constants.enter) {
      tArea.value += '\n';
      return;
    }

    if (target.innerHTML === 'Info') {
      _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].show();

      infoBlockButton.addEventListener('click', () => {
        _infoBlock_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
      });
      return;
    }

    tArea.value += target.innerHTML;
  };
};


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
    document.body.append(processor.createHtml('textarea', constants.tAreaBlock));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmZvQmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzZkMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsU0FBUzs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFEQUFJOztBQUVWO0FBQ0EsUUFBUSxxREFBSTtBQUNaLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFRQTtBQUFBO0FBQUE7QUFBQSxrQkFBa0IsbUJBQU8sQ0FBQyw2Q0FBaUI7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsNkNBQWlCOztBQUVKOztBQUVKOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBOztBQUVBO0FBQ2UsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7O0FDbEI3QixVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDRNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDk3JTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHdoaXRlIDAlLCAjOTliYmZmIDEwMCUpOyB9XFxuICBib2R5IC50ZXh0YXJlYS1ibG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDk5NnB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTliYmZmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgYm9keSAua2V5Ym9hcmQtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDEwcHg7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIGJvZHkgLmtleWJvYXJkLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmtleWJvYXJkLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTsgfVxcbiAgICBib2R5IC5rZXlib2FyZC1idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2OyB9XFxuICBib2R5IHN1cCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgYm9keSAuLWZ1bmN0aW9uYWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTsgfVxcbiAgYm9keSAuX3ByZXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2OyB9XFxuICBib2R5IC4tYXJyb3cge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICBib2R5IC4td2luIHtcXG4gICAgZm9udC1zaXplOiAyNXB4OyB9XFxuICBib2R5IC4tc3BhY2Uge1xcbiAgICB3aWR0aDogMTM1cHg7IH1cXG4gIGJvZHkgLi10YWIge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgYm9keSAuLWRlbCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tY2FwcyB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgYm9keSAuY2Fwc0FjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmNjY7IH1cXG4gIGJvZHkgLi1sc2hpZnQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1sY3RybCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1iYWNrc3BhY2Uge1xcbiAgICB3aWR0aDogMTQ2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tZW50ZXIge1xcbiAgICB3aWR0aDogMTcycHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tcnNoaWZ0IHtcXG4gICAgd2lkdGg6IDE1MnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLXNwYWNlIHtcXG4gICAgd2lkdGg6IDM4NHB4OyB9XFxuICBib2R5IC4taW5mbyB7XFxuICAgIHdpZHRoOiA4NnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGJvZHkgLmluZm8tYmxvY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTAlO1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB3aGl0ZSAwJSwgIzk5YmJmZiAxMDAlKTsgfVxcbiAgICBib2R5IC5pbmZvLWJsb2NrLXdyYXBwZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICB6LWluZGV4OiAxMDAwO1xcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAgIGJvZHkgLmluZm8tYmxvY2stYnV0dG9uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjIwZDtcXG4gICAgICByaWdodDogLTJweDtcXG4gICAgICBib3R0b206IC0ycHg7XFxuICAgICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIGJvZHkgLmluZm8tYmxvY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpOyB9XFxuICAgICAgYm9keSAuaW5mby1ibG9jay1idXR0b246YWN0aXZlIHtcXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpOyB9XFxuICBib2R5IC5faGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgYm9keSAuYnV0dG9uLXNwYW4ge1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDVweCAxNXB4IGJsYWNrO1xcbiAgICBjb2xvcjogI2YyZjIwZDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Nzcy9nbG9iYWxzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2Nzcy9rYkJ1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zY3NzL2luZm9CbG9jay5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NDSHdCO0VESXhCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDJEQ2hCb0YsRUFBQTtFRFV0RjtJQVNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkNuQmE7SURvQmIsdUJDdEJnQztJRHVCaEMsbUJBQW1CO0lBQ25CLGFBQWEsRUFBQTtFQWhCakI7SUFvQkksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQXpCckI7SUVYRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJERGtDO0lDRWxDLGtCQUFrQjtJQUNsQix1QkRlYztJQ2RkLGFBQWEsRUFBQTtJRklmO01FREkseUJER21CLEVBQUE7SURGdkI7TUVHSSx5QkRDb0IsRUFBQTtFREp4QjtJRVFFLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUZUakI7SUVhRSxZQUFZO0lBQ1osZUFBZTtJQUNmLHlCRFR5QixFQUFBO0VETjNCO0lFbUJFLHlCRFgwQixFQUFBO0VEUjVCO0lFdUJFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkRuQ2tDO0lDb0NsQyxrQkFBa0IsRUFBQTtFRjVCcEI7SUVnQ0UsZUFBZSxFQUFBO0VGaENqQjtJRW9DRSxZQUFZLEVBQUE7RUZwQ2Q7SUV3Q0UsV0FBVztJQUNYLGdCQUFnQixFQUFBO0VGekNsQjtJRTZDRSxpQkFBaUIsRUFBQTtFRjdDbkI7SUVpREUsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VGbERsQjtJRXNERSx5QkRsRHNCLEVBQUE7RURKeEI7SUUwREUsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VGM0RsQjtJRStERSxnQkFBZ0IsRUFBQTtFRi9EbEI7SUVtRUUsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VGcEVuQjtJRXdFRSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUZ6RW5CO0lFNkVFLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFRjlFbkI7SUVrRkUsWUFBWSxFQUFBO0VGbEZkO0lFc0ZFLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFRnZGbkI7SUUyRkUsV0FBVyxFQUFBO0VGM0ZiO0lHWEUsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCRkprQztJRUtsQywyREZQb0YsRUFBQTtJRFV0RjtNR0FJLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWixvQ0ZSbUM7TUVTbkMsYUFBYTtNQUNiLGlCQUFpQixFQUFBO0lITnJCO01HVUksa0JBQWtCO01BQ2xCLHlCRmJ1QjtNRWN2QixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsdUJGeEJnQztNRXlCaEMsZ0NBQWdDO01BQ2hDLDRCQUE0QjtNQUM1Qiw4QkFBOEI7TUFDOUIsNEJBQTRCO01BQzVCLGFBQWEsRUFBQTtNSHJCakI7UUd3Qk0sdUJBQXVCLEVBQUE7TUh4QjdCO1FHNEJNLHVCQUF1QixFQUFBO0VINUI3QjtJR21DRSxhQUFhLEVBQUE7RUhuQ2Y7SUd1Q0UsK0JBQTBDO0lBQzFDLGNGeEMwQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2dsb2JhbHMnO1xcclxcblxcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDk3JTtcXHJcXG4gIGJhY2tncm91bmQ6ICRncmFkaWVudEJnO1xcclxcblxcclxcbiAgLnRleHRhcmVhLWJsb2NrIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTk2cHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0QXJlYUJnO1xcclxcbiAgICBib3JkZXI6ICRkZWZhdWx0QmxhY2tCb3JkZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAua2V5Ym9hcmQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiAxMDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW1wb3J0ICdrYkJ1dHRvbnMnO1xcclxcblxcclxcbiAgQGltcG9ydCAnaW5mb0Jsb2NrJztcXHJcXG59XFxyXFxuXCIsXCIkZm9udDogTHVjaWRhIFNhbnMgVW5pY29kZTtcXHJcXG5cXHJcXG4kZ3JhZGllbnRCZzogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgxNTMsMTg3LDI1NSwxKSAxMDAlKTtcXHJcXG5cXHJcXG4kZGVmYXVsdEJsYWNrQm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuJHRBcmVhQmc6ICM5OWJiZmY7XFxyXFxuXFxyXFxuJGluZm9CbG9ja1dyYXBwZXJCZzogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcblxcclxcbiRpbmZvQmxvY2tCdXR0b25CZzogI2YyZjIwZDtcXHJcXG5cXHJcXG4kaW5mb0Jsb2NrU3BhbkNvbG9yOiAjZjJmMjBkO1xcclxcblxcclxcbiRrYkJ1dHRvbkhvdmVyOiAjZmZmZjk5O1xcclxcblxcclxcbiRrYkJ1dHRvbkFjdGl2ZTogI2ZmZmY2NjtcXHJcXG5cXHJcXG4ka2JCdXR0b25GdW5jSG92ZXI6ICNkOWQ5ZDk7XFxyXFxuXFxyXFxuJGtiQnV0dG9uRnVuY0FjdGl2ZTogI2ZmZmY2NjtcXHJcXG5cXHJcXG4kYnV0dG9uQmc6IHdoaXRlO1xcclxcblwiLFwiLmtleWJvYXJkLWJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgYm9yZGVyOiAkZGVmYXVsdEJsYWNrQm9yZGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbkJnO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAka2JCdXR0b25Ib3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGtiQnV0dG9uQWN0aXZlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLi1mdW5jdGlvbmFsIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRrYkJ1dHRvbkZ1bmNIb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLl9wcmVzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRrYkJ1dHRvbkZ1bmNBY3RpdmU7XFxyXFxufVxcclxcblxcclxcbi4tYXJyb3cge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIGJvcmRlcjogJGRlZmF1bHRCbGFja0JvcmRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLi13aW4ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLXNwYWNlIHtcXHJcXG4gIHdpZHRoOiAxMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLi10YWIge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uLWRlbCB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1jYXBzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5jYXBzQWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRrYkJ1dHRvbkFjdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLi1sc2hpZnQge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLi1sY3RybCB7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uLWJhY2tzcGFjZSB7XFxyXFxuICB3aWR0aDogMTQ2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1lbnRlciB7XFxyXFxuICB3aWR0aDogMTcycHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLi1yc2hpZnQge1xcclxcbiAgd2lkdGg6IDE1MnB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi4tc3BhY2Uge1xcclxcbiAgd2lkdGg6IDM4NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uLWluZm8ge1xcclxcbiAgd2lkdGg6IDg2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmVCcmVhayB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCIuaW5mby1ibG9jayB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDEwJTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6ICRkZWZhdWx0QmxhY2tCb3JkZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAkZ3JhZGllbnRCZztcXHJcXG5cXHJcXG4gICYtd3JhcHBlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5mb0Jsb2NrV3JhcHBlckJnO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5mb0Jsb2NrQnV0dG9uQmc7XFxyXFxuICAgIHJpZ2h0OiAtMnB4O1xcclxcbiAgICBib3R0b206IC0ycHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogJGRlZmF1bHRCbGFja0JvcmRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjphY3RpdmUge1xcclxcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5faGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tc3BhbiB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMSk7XFxyXFxuICBjb2xvcjogJGluZm9CbG9ja1NwYW5Db2xvcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxcanNcXFxccHJvY2Vzc29yLmpzJyk7XG5jb25zdCB2aWV3R2VuZXJhdG9yID0gcmVxdWlyZSgnLlxcXFxqc1xcXFx2aWV3R2VuZXJhdG9yLmpzJyk7XG5cbmltcG9ydCAnLlxcXFxzY3NzXFxcXG1haW4uc2Nzcyc7XG5cbi8vIGdlbmVyYXRpbmcgaHRtbCBwYWdlIHZpZXdcbmltcG9ydCB2aXJ0dWFsS2JIVE1MIGZyb20gJy5cXFxcanNcXFxcdmlld0dlbmVyYXRvci5qcyc7XG5kb2N1bWVudC5ib2R5LmZvY3VzKCk7XG5cbnByb2Nlc3Nvci5waHlzaWNhbENsaWNrSGFuZGxlcigpO1xuXG4vLyBjb25maWd1cmluZyB0aGUgbXV0YXRpb24gb2JzZXJ2ZXIgZm9yIGRlbGVnYXRpb24gdG8gd29yayBwcm9wZXJseVxuY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbn07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc29yLnZpcnR1YWxDbGlja0hhbmRsZXIpO1xub2JzZXJ2ZXIub2JzZXJ2ZShmaWVsZCwgY29uZmlnKTtcbiIsImV4cG9ydCBjb25zdCBrYkVuZ0xvd2VyID0gWydgJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzAnLCAnLScsICc9JywgJ0JhY2tzcGFjZScsICdUYWInLCAncScsICd3JywgJ2UnLCAncicsICd0JywgJ3knLCAndScsICdpJywgJ28nLCAncCcsICdbJywgJ10nLCAnXFxcXCcsICdEZWwnLCAnQ2FwcyBMb2NrJywgJ2EnLCAncycsICdkJywgJ2YnLCAnZycsICdoJywgJ2onLCAnaycsICdsJywgJzsnLCAnXFwnJywgJ0VudGVyJywgJ1NoaWZ0JywgJ3onLCAneCcsICdjJywgJ3YnLCAnYicsICduJywgJ20nLCAnLCcsICcuJywgJy8nLCAn4oaRJywgJ1NoaWZ0JywgJ0N0cmwnLCAn4p2WJywgJ0FsdCcsICcnLCAnQWx0JywgJ0N0cmwnLCAn4oaQJywgJ+KGkycsICfihpInLCAnSW5mbyddO1xuT2JqZWN0LmZyZWV6ZShrYkVuZ0xvd2VyKTtcblxuZXhwb3J0IGNvbnN0IGtiRW5nVXBwZXIgPSBbJ34nLCAnIScsICdAJywgJyMnLCAnJCcsICclJywgJ14nLCAnJicsICcqJywgJygnLCAnKScsICdfJywgJysnLCAnQmFja3NwYWNlJywgJ1RhYicsICdRJywgJ1cnLCAnRScsICdSJywgJ1QnLCAnWScsICdVJywgJ0knLCAnTycsICdQJywgJ3snLCAnfScsICd8JywgJ0RlbCcsICdDYXBzIExvY2snLCAnQScsICdTJywgJ0QnLCAnRicsICdHJywgJ0gnLCAnSicsICdLJywgJ0wnLCAnOicsICdcIicsICdFbnRlcicsICdTaGlmdCcsICdaJywgJ1gnLCAnQycsICdWJywgJ0InLCAnTicsICdNJywgJzwnLCAnPicsICc/JywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcbk9iamVjdC5mcmVlemUoa2JFbmdVcHBlcik7XG5cbmV4cG9ydCBjb25zdCBrYlJ1c0xvd2VyID0gWyfRkScsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcwJywgJy0nLCAnPScsICdCYWNrc3BhY2UnLCAnVGFiJywgJ9C5JywgJ9GGJywgJ9GDJywgJ9C6JywgJ9C1JywgJ9C9JywgJ9CzJywgJ9GIJywgJ9GJJywgJ9C3JywgJ9GFJywgJ9GKJywgJ1xcXFwnLCAnRGVsJywgJ0NhcHMgTG9jaycsICfRhCcsICfRiycsICfQsicsICfQsCcsICfQvycsICfRgCcsICfQvicsICfQuycsICfQtCcsICfQticsICfRjScsICdFbnRlcicsICdTaGlmdCcsICfRjycsICfRhycsICfRgScsICfQvCcsICfQuCcsICfRgicsICfRjCcsICfQsScsICfRjicsICcuJywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcbk9iamVjdC5mcmVlemUoa2JSdXNMb3dlcik7XG5cbmV4cG9ydCBjb25zdCBrYlJ1c1VwcGVyID0gWyfQgScsICchJywgJ1wiJywgJ+KElicsICc7JywgJyUnLCAnOicsICc/JywgJyonLCAnKCcsICcpJywgJ18nLCAnKycsICdCYWNrc3BhY2UnLCAnVGFiJywgJ9CZJywgJ9CmJywgJ9CjJywgJ9CaJywgJ9CVJywgJ9CdJywgJ9CTJywgJ9CoJywgJ9CpJywgJ9CXJywgJ9ClJywgJ9CqJywgJy8nLCAnRGVsJywgJ0NhcHMgTG9jaycsICfQpCcsICfQqycsICfQkicsICfQkCcsICfQnycsICfQoCcsICfQnicsICfQmycsICfQlCcsICfQlicsICfQrScsICdFbnRlcicsICdTaGlmdCcsICfQrycsICfQpycsICfQoScsICfQnCcsICfQmCcsICfQoicsICfQrCcsICfQkScsICfQricsICcsJywgJ+KGkScsICdTaGlmdCcsICdDdHJsJywgJ+KdlicsICdBbHQnLCAnJywgJ0FsdCcsICdDdHJsJywgJ+KGkCcsICfihpMnLCAn4oaSJywgJ0luZm8nXTtcbk9iamVjdC5mcmVlemUoa2JSdXNVcHBlcik7XG5cbmV4cG9ydCBjb25zdCBrYkNsYXNzID0gWycgQmFja3F1b3RlJywgJyBEaWdpdDEnLCAnIERpZ2l0MicsICcgRGlnaXQzJywgJyBEaWdpdDQnLCAnIERpZ2l0NScsICcgRGlnaXQ2JywgJyBEaWdpdDcnLCAnIERpZ2l0OCcsICcgRGlnaXQ5JywgJyBEaWdpdDAnLCAnIE1pbnVzJywgJyBFcXVhbCcsICcgLWZ1bmN0aW9uYWwgLWJhY2tzcGFjZSBCYWNrc3BhY2UnLCAnIC1mdW5jdGlvbmFsIC10YWIgVGFiJywgJyBLZXlRJywgJyBLZXlXJywgJyBLZXlFJywgJyBLZXlSJywgJyBLZXlUJywgJyBLZXlZJywgJyBLZXlVJywgJyBLZXlJJywgJyBLZXlPJywgJyBLZXlQJywgJyBCcmFja2V0TGVmdCcsICcgQnJhY2tldFJpZ2h0JywgJyBCYWNrc2xhc2gnLCAnIC1mdW5jdGlvbmFsIC1kZWwgRGVsZXRlJywgJyAtZnVuY3Rpb25hbCAtY2FwcyBDYXBzTG9jaycsICcgS2V5QScsICcgS2V5UycsICcgS2V5RCcsICcgS2V5RicsICcgS2V5RycsICcgS2V5SCcsICcgS2V5SicsICcgS2V5SycsICcgS2V5TCcsICcgU2VtaWNvbG9uJywgJyBRdW90ZScsICcgLWZ1bmN0aW9uYWwgLWVudGVyIEVudGVyJywgJyAtZnVuY3Rpb25hbCAtbHNoaWZ0IFNoaWZ0TGVmdCcsICcgS2V5WicsICcgS2V5WCcsICcgS2V5QycsICcgS2V5VicsICcgS2V5QicsICcgS2V5TicsICcgS2V5TScsICcgQ29tbWEnLCAnIFBlcmlvZCcsICcgU2xhc2gnLCAnIC1hcnJvdyBBcnJvd1VwJywgJyAtZnVuY3Rpb25hbCAtcnNoaWZ0IFNoaWZ0UmlnaHQnLCAnIC1mdW5jdGlvbmFsIC1sY3RybCBDb250cm9sTGVmdCcsICcgLWZ1bmN0aW9uYWwgLXdpbiBNZXRhTGVmdCcsICcgLWZ1bmN0aW9uYWwgQWx0TGVmdCcsICcgLWZ1bmN0aW9uYWwgLXNwYWNlIFNwYWNlJywgJyAtZnVuY3Rpb25hbCBBbHRSaWdodCcsICcgLWZ1bmN0aW9uYWwgQ29udHJvbFJpZ2h0JywgJyAgLWFycm93IEFycm93TGVmdCcsICcgLWFycm93IEFycm93RG93bicsICcgLWFycm93IEFycm93UmlnaHQnLCAnIC1mdW5jdGlvbmFsIC1pbmZvJ107XG5PYmplY3QuZnJlZXplKGtiQ2xhc3MpO1xuXG5leHBvcnQgY29uc3QgYXJyb3dSZWdFeHAgPSAvXkFycm93LiskLztcblxuZXhwb3J0IGNvbnN0IGluZm9CbG9ja1RleHQgPSAnVmlydHVhbCBLZXlib2FyZCBQcm9qZWN0IDxicj48YnI+IEhpZ2hsaWdodHMga2V5cyBwcmVzc2VkIGJvdGggb24gdGhlIHBoeXNpY2FsIGFuZCBvbiB0aGUgdmlydHVhbCBrZXlib2FyZHMgYW5kIGFkZHMgc3ltYm9scyB0byB0aGUgdGV4dGFyZWEuIDxicj48YnI+IFRoaXMga2V5Ym9hcmQgd2FzIGNyZWF0ZWQgb24gd2luZG93cyBPUy4gPGJyPjxicj4gVXNlIDxzcGFuIGNsYXNzID0gYnV0dG9uLXNwYW4+QWx0PC9zcGFuPiArIDxzcGFuIGNsYXNzID0gYnV0dG9uLXNwYW4+U2hpZnQ8L3NwYW4+IGJ1dHRvbnMgdG8gY2hhbmdlIGxhbmd1YWdlLiA8YnI+IFByZXNzIDxzcGFuIGNsYXNzID0gYnV0dG9uU3Bhbj5DYXBzIExvY2s8L3NwYW4+IHRvIHN3aXRjaCBzeW1ib2xzIG9uIHZpcnR1YWwga2V5Ym9hcmQuIDxicj48YnI+IFRvIHNob3cgdGhpcyBzY3JlZW4gcHJlc3MgPHNwYW4gY2xhc3MgPSBidXR0b24tc3Bhbj5JbmZvPC9zcGFuPiBidXR0b24gaW4gdGhlIHJpZ2h0IGJvdHRvbSBjb3JuZXInO1xuXG5leHBvcnQgY29uc3Qga2JMYW5nQ29uc3QgPSAna2JMYW5nJztcbmV4cG9ydCBjb25zdCBpc0ZpcnN0VmlzaXRDb25zdCA9ICdpc0ZpcnN0VmlzaXQnO1xuZXhwb3J0IGNvbnN0IGluZm9CbG9jayA9ICdpbmZvLWJsb2NrJztcbmV4cG9ydCBjb25zdCBpbmZvQmxvY2tCdXR0b25RUyA9ICcuaW5mby1ibG9jay1idXR0b24nO1xuZXhwb3J0IGNvbnN0IGluZm9CbG9ja0J1dHRvbiA9ICdpbmZvLWJsb2NrLWJ1dHRvbic7XG5leHBvcnQgY29uc3Qga2V5Ym9hcmRCbG9ja1FTID0gJy5rZXlib2FyZC1ibG9jayc7XG5leHBvcnQgY29uc3Qga2V5Ym9hcmRCbG9jayA9ICdrZXlib2FyZC1ibG9jayc7XG5leHBvcnQgY29uc3Qga2V5Ym9hcmRCdXR0b24gPSAna2V5Ym9hcmQtYnV0dG9uJztcbmV4cG9ydCBjb25zdCB0QXJlYUJsb2NrUVMgPSAnLnRleHRhcmVhLWJsb2NrJztcbmV4cG9ydCBjb25zdCB0QXJlYUJsb2NrID0gJ3RleHRhcmVhLWJsb2NrJztcbmV4cG9ydCBjb25zdCBlbmcgPSAnZW5nJztcbmV4cG9ydCBjb25zdCBydXMgPSAncnVzJztcbmV4cG9ydCBjb25zdCBjYXBzQnV0dG9uID0gJy5DYXBzTG9jayc7XG5leHBvcnQgY29uc3QgY2Fwc0xvY2sgPSAnQ2Fwc0xvY2snO1xuZXhwb3J0IGNvbnN0IGNhcHNBY3RpdmUgPSAnY2Fwc0FjdGl2ZSc7XG5leHBvcnQgY29uc3QgbFNoaWZ0ID0gJ1NoaWZ0TGVmdCc7XG5leHBvcnQgY29uc3QgclNoaWZ0ID0gJ1NoaWZ0UmlnaHQnO1xuZXhwb3J0IGNvbnN0IHRhYiA9ICdUYWInO1xuZXhwb3J0IGNvbnN0IGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xuZXhwb3J0IGNvbnN0IGRlbCA9ICdEZWxldGUnO1xuZXhwb3J0IGNvbnN0IGVudGVyID0gJ0VudGVyJztcbmV4cG9ydCBjb25zdCBzcGFjZSA9ICdTcGFjZSc7XG5leHBvcnQgY29uc3QgYXJyb3dVcCA9ICdBcnJvd1VwJztcbmV4cG9ydCBjb25zdCBhcnJvd0Rvd24gPSAnQXJyb3dEb3duJztcbmV4cG9ydCBjb25zdCBhcnJvd0xlZnQgPSAnQXJyb3dMZWZ0JztcbmV4cG9ydCBjb25zdCBhcnJvd1JpZ2h0ID0gJ0Fycm93UmlnaHQnO1xuIiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XG5cbmNsYXNzIEluZm9CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2luZm8tYmxvY2std3JhcHBlciBfaGlkZGVuJyk7XG4gICAgY29uc3QgaW5mb0Jsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsIGNvbnN0YW50cy5pbmZvQmxvY2spO1xuICAgIGNvbnN0IGluZm9CbG9ja0J1dHRvbiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCBjb25zdGFudHMuaW5mb0Jsb2NrQnV0dG9uKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoaW5mb0Jsb2NrKTtcbiAgICBpbmZvQmxvY2suaW5uZXJIVE1MID0gdGV4dDtcbiAgICBpbmZvQmxvY2tCdXR0b24uaW5uZXJIVE1MID0gJ0dvdCBJdCc7XG4gICAgaW5mb0Jsb2NrLmFwcGVuZChpbmZvQmxvY2tCdXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfaGlkZGVuJyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfaGlkZGVuJyk7XG4gIH1cbn1cblxuY29uc3QgaW5mbyA9IG5ldyBJbmZvQmxvY2soY29uc3RhbnRzLmluZm9CbG9ja1RleHQpO1xuZXhwb3J0IGRlZmF1bHQgaW5mbztcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XG5jb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuXG5pbXBvcnQgaW5mbyBmcm9tICcuXFxcXGluZm9CbG9jay5qcyc7XG5cbmNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMua2JMYW5nQ29uc3QpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb25zdGFudHMua2JMYW5nQ29uc3QsICdlbmcnKTtcbiAgICB9XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5pc0ZpcnN0VmlzaXRDb25zdCkpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbnN0YW50cy5pc0ZpcnN0VmlzaXRDb25zdCwgJ3RydWUnKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVLYigpIHtcbiAgICBjb25zdCBrYiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCBjb25zdGFudHMua2V5Ym9hcmRCbG9jayk7XG4gICAgY29uc3Qga2JMYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLmtiTGFuZ0NvbnN0KTtcblxuICAgIGlmIChrYkxhbmcgPT09ICdlbmcnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0YW50cy5rYkVuZ0xvd2VyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGVsID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsIGNvbnN0YW50cy5rZXlib2FyZEJ1dHRvbik7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYkVuZ0xvd2VyW2ldO1xuICAgICAgICBlbC5jbGFzc0xpc3QgKz0gY29uc3RhbnRzLmtiQ2xhc3NbaV07XG4gICAgICAgIGtiLmFwcGVuZChlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrYkxhbmcgPT09ICdydXMnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnN0YW50cy5rYlJ1c0xvd2VyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGVsID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsIGNvbnN0YW50cy5rZXlib2FyZEJ1dHRvbik7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c0xvd2VyW2ldO1xuICAgICAgICBlbC5jbGFzc0xpc3QgKz0gY29uc3RhbnRzLmtiQ2xhc3NbaV07XG4gICAgICAgIGtiLmFwcGVuZChlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoa2IpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5pc0ZpcnN0VmlzaXRDb25zdCkgPT09ICd0cnVlJykge1xuICAgICAgY29uc3QgaW5mb0Jsb2NrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25zdGFudHMuaW5mb0Jsb2NrQnV0dG9uUVMpO1xuICAgICAgaW5mby5zaG93KCk7XG4gICAgICBpbmZvQmxvY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGluZm8uaGlkZSgpO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb25zdGFudHMuaXNGaXJzdFZpc2l0Q29uc3QsICdmYWxzZScpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCB2aXJ0dWFsS2IgPSBuZXcgS2V5Ym9hcmQoKTtcbmV4cG9ydCBkZWZhdWx0IHZpcnR1YWxLYjtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XG5cbmltcG9ydCBpbmZvIGZyb20gJy5cXFxcaW5mb0Jsb2NrLmpzJztcblxuLy8gY3JlYXRlIGh0bWwgZWxlbWVudCB3aXRoIGdpdmVuIGF0dHJpYnV0ZXNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sKHNlbGVjdG9yLCBjbGFzc05hbWUsIGlubmVyVGV4dCwgLi4ua2V5c1ZhbHVlcykge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxlY3Rvcik7XG4gIGlmIChjbGFzc05hbWUpIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAoaW5uZXJUZXh0KSBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcbiAgaWYgKGtleXNWYWx1ZXMubGVuZ3RoKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaSAtIDFdLCBrZXlzVmFsdWVzW2ldKTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59XG5cbi8vIGhpZ2hsaWdodCBrZXlcbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHRLZXkoZXZlbnRDb2RlLCBldmVudEtleSkge1xuICB0cnkge1xuICAgIGNvbnN0IHByZXNzZWRLZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtldmVudENvZGV9YCk7XG5cbiAgICBwcmVzc2VkS2V5LmNsYXNzTGlzdC5hZGQoJ19wcmVzc2VkJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09PSAnVHlwZUVycm9yJykge1xuICAgICAgY29uc29sZS5sb2coYFByZXNzZWQgYnV0dG9uIChldmVudC5jb2RlID0gJHtldmVudENvZGV9LCBldmVudC5rZXkgPSAke2V2ZW50S2V5fSkgaXMgbm90IHByZXNlbnQgb24gdmlydHVhbCBrZXlib2FyZGApO1xuICAgIH1cbiAgfVxufVxuXG4vLyBkYXJrZW4ga2V5XG5leHBvcnQgZnVuY3Rpb24gZGFya2VuS2V5KGV2ZW50Q29kZSwgZXZlbnRLZXkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcmVzc2VkS2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZXZlbnRDb2RlfWApO1xuXG4gICAgcHJlc3NlZEtleS5jbGFzc0xpc3QucmVtb3ZlKCdfcHJlc3NlZCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1R5cGVFcnJvcicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQcmVzc2VkIGJ1dHRvbiAoZXZlbnQuY29kZSA9ICR7ZXZlbnRDb2RlfSwgZXZlbnQua2V5ID0gJHtldmVudEtleX0pIGlzIG5vdCBwcmVzZW50IG9uIHZpcnR1YWwga2V5Ym9hcmRgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJlZ2lzdGVyKCkge1xuICBjb25zdCBrYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uc3RhbnRzLmtleWJvYXJkQmxvY2tRUyk7XG4gIGNvbnN0IGtiTGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5rYkxhbmdDb25zdCk7XG4gIGNvbnN0IGNhcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnN0YW50cy5jYXBzQnV0dG9uKTtcblxuICBjYXBzLmNsYXNzTGlzdC50b2dnbGUoY29uc3RhbnRzLmNhcHNBY3RpdmUpO1xuICBpZiAoY2Fwcy5jbGFzc0xpc3QuY29udGFpbnMoY29uc3RhbnRzLmNhcHNBY3RpdmUpKSB7XG4gICAgaWYgKGtiTGFuZyA9PT0gY29uc3RhbnRzLmVuZykge1xuICAgICAga2IuY2hpbGROb2Rlcy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYkVuZ1VwcGVyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChrYkxhbmcgPT09IGNvbnN0YW50cy5ydXMpIHtcbiAgICAgIGtiLmNoaWxkTm9kZXMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JSdXNVcHBlcltpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoa2JMYW5nID09PSBjb25zdGFudHMuZW5nKSB7XG4gICAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gY29uc3RhbnRzLmtiRW5nTG93ZXJbaV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGtiTGFuZyA9PT0gY29uc3RhbnRzLnJ1cykge1xuICAgICAga2IuY2hpbGROb2Rlcy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c0xvd2VyW2ldO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VMYW5nKCkge1xuICBjb25zdCBrYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uc3RhbnRzLmtleWJvYXJkQmxvY2tRUyk7XG4gIGNvbnN0IGtiTGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5rYkxhbmcpO1xuXG4gIGlmIChrYkxhbmcgPT09IGNvbnN0YW50cy5lbmcpIHtcbiAgICBrYi5jaGlsZE5vZGVzLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgYnRuLmlubmVySFRNTCA9IGNvbnN0YW50cy5rYlJ1c0xvd2VyW2ldO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbnN0YW50cy5rYkxhbmcsIGNvbnN0YW50cy5ydXMpO1xuXG4gIH0gZWxzZSBpZiAoa2JMYW5nID09PSBjb25zdGFudHMucnVzKSB7XG4gICAga2IuY2hpbGROb2Rlcy5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBjb25zdGFudHMua2JFbmdMb3dlcltpXTtcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb25zdGFudHMua2JMYW5nLCBjb25zdGFudHMuZW5nKTtcbiAgfVxufVxuXG4vLyBoYW5kbGUgcHJlc3NlZCBrZXkgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBwaHlzaWNhbENsaWNrSGFuZGxlcigpIHtcbiAgY29uc3QgdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnN0YW50cy50QXJlYUJsb2NrUVMpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBoaWdobGlnaHRLZXkoZXZlbnQuY29kZSwgZXZlbnQua2V5KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBkYXJrZW5LZXkoZXZlbnQuY29kZSwgZXZlbnQua2V5KTtcbiAgICB9KTtcblxuICAgIGlmIChldmVudC5sb2NhdGlvbiA9PT0gMykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGFsdCAmIHNoaWZ0IGFyZSBwcmVzc2VkIHRvZ2V0aGVyXG4gICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNoYW5nZUxhbmcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gY29uc3RhbnRzLmxTaGlmdCB8fCBldmVudC5jb2RlID09PSBjb25zdGFudHMuclNoaWZ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuYWx0S2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09PSBjb25zdGFudHMudGFiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdEFyZWEudmFsdWUgKz0gJyAgICAnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09PSBjb25zdGFudHMuY2Fwc0xvY2spIHtcbiAgICAgIGNoYW5nZVJlZ2lzdGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IGNvbnN0YW50cy5iYWNrc3BhY2UpIHtcbiAgICAgIGxldCB0QXJlYVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnN0YW50cy50QXJlYUJsb2NrUVMpLnZhbHVlO1xuICAgICAgdEFyZWFUZXh0ID0gdEFyZWFUZXh0LnN1YnN0cmluZygwLCB0QXJlYVRleHQubGVuZ3RoIC0gMSk7XG4gICAgICB0QXJlYS52YWx1ZSA9IHRBcmVhVGV4dDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gY29uc3RhbnRzLmRlbCkge1xuICAgICAgbGV0IHRBcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uc3RhbnRzLnRBcmVhQmxvY2tRUykudmFsdWU7XG4gICAgICB0QXJlYVRleHQgPSB0QXJlYVRleHQuc3Vic3RyaW5nKDEsIHRBcmVhVGV4dC5sZW5ndGgpO1xuICAgICAgdEFyZWEudmFsdWUgPSB0QXJlYVRleHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IGNvbnN0YW50cy5lbnRlcikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRBcmVhLnZhbHVlICs9ICdcXG4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5tZXRhS2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jb2RlID09PSBjb25zdGFudHMuc3BhY2UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0QXJlYS52YWx1ZSArPSAnICc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgYXJyb3cga2V5IGlzIHByZXNzZWRcbiAgICBpZiAoZXZlbnQuY29kZS5tYXRjaChjb25zdGFudHMuYXJyb3dSZWdFeHApKSB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gY29uc3RhbnRzLmFycm93VXApIHtcbiAgICAgICAgdEFyZWEudmFsdWUgKz0gJ+KGkSc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IGNvbnN0YW50cy5hcnJvd0Rvd24pIHtcbiAgICAgICAgdEFyZWEudmFsdWUgKz0gJ+KGkyc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IGNvbnN0YW50cy5hcnJvd0xlZnQpIHtcbiAgICAgICAgdEFyZWEudmFsdWUgKz0gJ+KGkCc7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IGNvbnN0YW50cy5hcnJvd1JpZ2h0KSB7XG4gICAgICAgIHRBcmVhLnZhbHVlICs9ICfihpInO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgYW55IG90aGVyIGtleSBpcyBwcmVzc2VkXG4gICAgdEFyZWEudmFsdWUgKz0gZXZlbnQua2V5O1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHZpcnR1YWxDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGtiID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25zdGFudHMua2V5Ym9hcmRCbG9ja1FTKTtcbiAgY29uc3QgdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnN0YW50cy50QXJlYUJsb2NrUVMpO1xuICBjb25zdCBpbmZvQmxvY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnN0YW50cy5pbmZvQmxvY2tCdXR0b25RUyk7XG5cbiAga2Iub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjb25zdGFudHMua2V5Ym9hcmRCdXR0b24pKSByZXR1cm47XG5cbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PT0gJ1NoaWZ0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09PSAnQ3RybCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PT0gJ0FsdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PT0gY29uc3RhbnRzLnRhYikge1xuICAgICAgdEFyZWEudmFsdWUgKz0gJyAgICAnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgdEFyZWEudmFsdWUgKz0gJyAnO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09PSAnQ2FwcyBMb2NrJykge1xuICAgICAgY2hhbmdlUmVnaXN0ZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmlubmVySFRNTCA9PT0gY29uc3RhbnRzLmJhY2tzcGFjZSkge1xuICAgICAgbGV0IHRBcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uc3RhbnRzLnRBcmVhQmxvY2tRUykudmFsdWU7XG4gICAgICB0QXJlYVRleHQgPSB0QXJlYVRleHQuc3Vic3RyaW5nKDAsIHRBcmVhVGV4dC5sZW5ndGggLSAxKTtcbiAgICAgIHRBcmVhLnZhbHVlID0gdEFyZWFUZXh0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuaW5uZXJIVE1MID09PSAnRGVsJykge1xuICAgICAgbGV0IHRBcmVhVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uc3RhbnRzLnRBcmVhQmxvY2tRUykudmFsdWU7XG4gICAgICB0QXJlYVRleHQgPSB0QXJlYVRleHQuc3Vic3RyaW5nKDEsIHRBcmVhVGV4dC5sZW5ndGgpO1xuICAgICAgdEFyZWEudmFsdWUgPSB0QXJlYVRleHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT09IGNvbnN0YW50cy5lbnRlcikge1xuICAgICAgdEFyZWEudmFsdWUgKz0gJ1xcbic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT09ICdJbmZvJykge1xuICAgICAgaW5mby5zaG93KCk7XG5cbiAgICAgIGluZm9CbG9ja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaW5mby5oaWRlKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0QXJlYS52YWx1ZSArPSB0YXJnZXQuaW5uZXJIVE1MO1xuICB9O1xufTtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XG5jb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuXG5pbXBvcnQgdmlydHVhbEtiIGZyb20gJy5cXFxca2V5Ym9hcmQuanMnO1xuXG5pbXBvcnQgaW5mbyBmcm9tICcuXFxcXGluZm9CbG9jay5qcyc7XG5cbmNsYXNzIEhUTUxQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGV4dCBhcmVhIGNyZWF0aW9uXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3RleHRhcmVhJywgY29uc3RhbnRzLnRBcmVhQmxvY2spKTtcblxuICAgIC8vIG1haW4ga2V5Ym9hcmQgYmxvY2tcbiAgICB2aXJ0dWFsS2IuY3JlYXRlS2IoKTtcbiAgfVxufVxuXG5jb25zdCB2aXJ0dWFsS2JIVE1MID0gbmV3IEhUTUxQYWdlKCk7XG5leHBvcnQgZGVmYXVsdCB2aXJ0dWFsS2JIVE1MO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=