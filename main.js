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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: Lucida Sans Unicode; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-items: center; }\n  body .textarea-block {\n    width: 996px;\n    height: 200px;\n    margin-top: 20px; }\n  body .keyboard-block {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 1010px;\n    margin: 30px; }\n  body .keyboard-button {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .-functional {\n    padding: 5px;\n    font-size: 16px; }\n  body .-arrow {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: 3px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .-space {\n    width: 135px; }\n  body .-tab {\n    width: 80px;\n    text-align: left; }\n  body .-del {\n    text-align: right; }\n  body .-caps {\n    width: 100px;\n    text-align: left; }\n  body .-lshift {\n    width: 120px;\n    text-align: left; }\n  body .-lctrl {\n    text-align: left; }\n  body .-backspace {\n    width: 146px;\n    text-align: right; }\n  body .-enter {\n    width: 172px;\n    text-align: right; }\n  body .-rshift {\n    width: 152px;\n    text-align: right; }\n  body .-space {\n    width: 384px; }\n  body .-info {\n    width: 86px;\n    text-align: right; }\n  body .lineBreak {\n    width: 100%; }\n", "",{"version":3,"sources":["webpack://src/scss/main.scss","webpack://src/scss/globals.scss"],"names":[],"mappings":"AAEA;EACE,gCCHwB,EAAA;;ADM1B;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB,EAAA;EAJrB;IAOI,YAAY;IACZ,aAAa;IACb,gBAAgB,EAAA;EATpB;IAaI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,YAAY,EAAA;EAjBhB;IAqBI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB,EAAA;EA1BtB;IA8BI,YAAY;IACZ,eAAe,EAAA;EA/BnB;IAmCI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB,EAAA;EAxCtB;IA4CI,YAAY,EAAA;EA5ChB;IAgDI,WAAW;IACX,gBAAgB,EAAA;EAjDpB;IAqDI,iBAAiB,EAAA;EArDrB;IAyDI,YAAY;IACZ,gBAAgB,EAAA;EA1DpB;IA8DI,YAAY;IACZ,gBAAgB,EAAA;EA/DpB;IAmEI,gBAAgB,EAAA;EAnEpB;IAuEI,YAAY;IACZ,iBAAiB,EAAA;EAxErB;IA4EI,YAAY;IACZ,iBAAiB,EAAA;EA7ErB;IAiFI,YAAY;IACZ,iBAAiB,EAAA;EAlFrB;IAsFI,YAAY,EAAA;EAtFhB;IA0FI,WAAW;IACX,iBAAiB,EAAA;EA3FrB;IA+FI,WAAW,EAAA","sourcesContent":["@import 'globals';\r\n\r\n* {\r\n  font-family: $font;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n\r\n  .textarea-block {\r\n    width: 996px;\r\n    height: 200px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .keyboard-block {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    width: 1010px;\r\n    margin: 30px;\r\n  }\r\n\r\n  .keyboard-button {\r\n    font-size: 25px;\r\n    width: 60px;\r\n    height: 60px;\r\n    margin: 3px;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .-functional {\r\n    padding: 5px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .-arrow {\r\n    font-size: 25px;\r\n    width: 60px;\r\n    height: 60px;\r\n    margin: 3px;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .-space {\r\n    width: 135px;\r\n  }\r\n\r\n  .-tab {\r\n    width: 80px;\r\n    text-align: left;\r\n  }\r\n\r\n  .-del {\r\n    text-align: right;\r\n  }\r\n\r\n  .-caps {\r\n    width: 100px;\r\n    text-align: left;\r\n  }\r\n\r\n  .-lshift {\r\n    width: 120px;\r\n    text-align: left;\r\n  }\r\n\r\n  .-lctrl {\r\n    text-align: left;\r\n  }\r\n\r\n  .-backspace {\r\n    width: 146px;\r\n    text-align: right;\r\n  }\r\n\r\n  .-enter {\r\n    width: 172px;\r\n    text-align: right;\r\n  }\r\n\r\n  .-rshift {\r\n    width: 152px;\r\n    text-align: right;\r\n  }\r\n\r\n  .-space {\r\n    width: 384px;\r\n  }\r\n\r\n  .-info {\r\n    width: 86px;\r\n    text-align: right;\r\n  }\r\n\r\n  .lineBreak {\r\n    width: 100%;\r\n  }\r\n}\r\n","$font: Lucida Sans Unicode;\r\n"],"sourceRoot":""}]);
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
const processor = __webpack_require__(/*! ./js/processor.js */ "./src/js/processor.js");




// let kbEng = ['~ \`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_ -', '+ =', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[ {', '] }', '| \\', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', '\" \'', 'Enter'];
// for (let i = 0; i < array.length; i++) {
//   array[i]
// }

document.body.append(processor.createHtml('textarea', 'textarea-block'));

// main keyboard block
document.body.append(processor.createHtml('div', 'keyboard-block'));

// keyboard buttons
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '~ \`'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '1'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '2'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '3'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '4'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '5'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '6'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '7'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '8'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '9'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '0'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '_ -'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '+='));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -backspace', 'Backspace'));
document.querySelector('.keyboard-block').append(processor.createHtml('div', 'lineBreak'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -tab', 'Tab'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'Q'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'W'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'E'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'R'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'T'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'Y'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'U'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'I'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'O'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'P'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '{ ['));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '} ]'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '| \\'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -del', 'Del'));
document.querySelector('.keyboard-block').append(processor.createHtml('div', 'lineBreak'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -caps', 'Caps Lock'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'A'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'S'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'D'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'F'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'G'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'H'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'J'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'K'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'L'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', ': ;'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '\" \''));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -enter', 'Enter'));
document.querySelector('.keyboard-block').append(processor.createHtml('div', 'lineBreak'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -lshift', 'Shift'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'Z'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'X'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'C'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'V'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'B'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'N'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', 'M'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '< ,'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '> .'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '? /'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keybpard-button -arrow', '<i class="fas fa-angle-up"></i>'))
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -rshift', 'Shift'));
document.querySelector('.keyboard-block').append(processor.createHtml('div', 'lineBreak'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -lctrl', 'Ctrl'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button', '<i class="fab fa-windows"></i>'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional', 'Alt'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -space', ''));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional', 'Alt'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional', 'Ctrl'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -arrow', '<i class="fas fa-angle-left"></i>'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -arrow', '<i class="fas fa-angle-down"></i>'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -arrow', '<i class="fas fa-angle-right"></i>'));
document.querySelector('.keyboard-block').append(processor.createHtml('button', 'keyboard-button -functional -info', 'Info'));
document.querySelector('.keyboard-block').append(processor.createHtml('div', 'lineBreak'));


/***/ }),

/***/ "./src/js/processor.js":
/*!*****************************!*\
  !*** ./src/js/processor.js ***!
  \*****************************/
/*! exports provided: createHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHLHFHQUFxRztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUFBO0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBb0c7O0FBRXRJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7IH1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICBib2R5IC50ZXh0YXJlYS1ibG9jayB7XFxuICAgIHdpZHRoOiA5OTZweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcbiAgYm9keSAua2V5Ym9hcmQtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDEwcHg7XFxuICAgIG1hcmdpbjogMzBweDsgfVxcbiAgYm9keSAua2V5Ym9hcmQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuLWZ1bmN0aW9uYWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgYm9keSAuLWFycm93IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuLXNwYWNlIHtcXG4gICAgd2lkdGg6IDEzNXB4OyB9XFxuICBib2R5IC4tdGFiIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1kZWwge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLWNhcHMge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1sc2hpZnQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1sY3RybCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIGJvZHkgLi1iYWNrc3BhY2Uge1xcbiAgICB3aWR0aDogMTQ2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tZW50ZXIge1xcbiAgICB3aWR0aDogMTcycHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICBib2R5IC4tcnNoaWZ0IHtcXG4gICAgd2lkdGg6IDE1MnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAuLXNwYWNlIHtcXG4gICAgd2lkdGg6IDM4NHB4OyB9XFxuICBib2R5IC4taW5mbyB7XFxuICAgIHdpZHRoOiA4NnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3Njc3MvZ2xvYmFscy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NDSHdCLEVBQUE7O0FETTFCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7RUFKckI7SUFPSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQixFQUFBO0VBVHBCO0lBYUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVksRUFBQTtFQWpCaEI7SUFxQkksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBQTtFQTFCdEI7SUE4QkksWUFBWTtJQUNaLGVBQWUsRUFBQTtFQS9CbkI7SUFtQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBQTtFQXhDdEI7SUE0Q0ksWUFBWSxFQUFBO0VBNUNoQjtJQWdESSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUFqRHBCO0lBcURJLGlCQUFpQixFQUFBO0VBckRyQjtJQXlESSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUExRHBCO0lBOERJLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQS9EcEI7SUFtRUksZ0JBQWdCLEVBQUE7RUFuRXBCO0lBdUVJLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQXhFckI7SUE0RUksWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBN0VyQjtJQWlGSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFsRnJCO0lBc0ZJLFlBQVksRUFBQTtFQXRGaEI7SUEwRkksV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBM0ZyQjtJQStGSSxXQUFXLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnZ2xvYmFscyc7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJGZvbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAudGV4dGFyZWEtYmxvY2sge1xcclxcbiAgICB3aWR0aDogOTk2cHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAua2V5Ym9hcmQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHdpZHRoOiAxMDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5rZXlib2FyZC1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLi1mdW5jdGlvbmFsIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuLWFycm93IHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW46IDNweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC4tc3BhY2Uge1xcclxcbiAgICB3aWR0aDogMTM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuLXRhYiB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLi1kZWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC4tY2FwcyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC4tbHNoaWZ0IHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLi1sY3RybCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuLWJhY2tzcGFjZSB7XFxyXFxuICAgIHdpZHRoOiAxNDZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuLWVudGVyIHtcXHJcXG4gICAgd2lkdGg6IDE3MnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC4tcnNoaWZ0IHtcXHJcXG4gICAgd2lkdGg6IDE1MnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC4tc3BhY2Uge1xcclxcbiAgICB3aWR0aDogMzg0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuLWluZm8ge1xcclxcbiAgICB3aWR0aDogODZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGluZUJyZWFrIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJGZvbnQ6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxcanNcXFxccHJvY2Vzc29yLmpzJyk7XHJcblxyXG5pbXBvcnQgJy5cXFxcc2Nzc1xcXFxtYWluLnNjc3MnO1xyXG5cclxuXHJcbi8vIGxldCBrYkVuZyA9IFsnfiBcXGAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICdfIC0nLCAnKyA9JywgJ0JhY2tzcGFjZScsICdUYWInLCAnUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnVScsICdJJywgJ08nLCAnUCcsICdbIHsnLCAnXSB9JywgJ3wgXFxcXCcsICdDYXBzIExvY2snLCAnQScsICdTJywgJ0QnLCAnRicsICdHJywgJ0gnLCAnSicsICdLJywgJ0wnLCAnOiA7JywgJ1xcXCIgXFwnJywgJ0VudGVyJ107XHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuLy8gICBhcnJheVtpXVxyXG4vLyB9XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgndGV4dGFyZWEnLCAndGV4dGFyZWEtYmxvY2snKSk7XHJcblxyXG4vLyBtYWluIGtleWJvYXJkIGJsb2NrXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAna2V5Ym9hcmQtYmxvY2snKSk7XHJcblxyXG4vLyBrZXlib2FyZCBidXR0b25zXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICd+IFxcYCcpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJzEnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICcyJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnMycpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJzQnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICc1JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnNicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJzcnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICc4JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnOScpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJzAnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdfIC0nKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICcrPScpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uIC1mdW5jdGlvbmFsIC1iYWNrc3BhY2UnLCAnQmFja3NwYWNlJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdsaW5lQnJlYWsnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbiAtZnVuY3Rpb25hbCAtdGFiJywgJ1RhYicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ1EnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdXJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnRScpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ1InKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdUJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnWScpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ1UnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdJJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnTycpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ1AnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICd7IFsnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICd9IF0nKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICd8IFxcXFwnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbiAtZnVuY3Rpb25hbCAtZGVsJywgJ0RlbCcpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWZ1bmN0aW9uYWwgLWNhcHMnLCAnQ2FwcyBMb2NrJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnQScpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ1MnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdEJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnRicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ0cnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdIJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnSicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ0snKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdMJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnOiA7JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnXFxcIiBcXCcnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbiAtZnVuY3Rpb25hbCAtZW50ZXInLCAnRW50ZXInKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uIC1mdW5jdGlvbmFsIC1sc2hpZnQnLCAnU2hpZnQnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdaJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnWCcpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ0MnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdWJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnQicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uJywgJ04nKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICdNJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnPCAsJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnPiAuJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24nLCAnPyAvJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlicGFyZC1idXR0b24gLWFycm93JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXVwXCI+PC9pPicpKVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWZ1bmN0aW9uYWwgLXJzaGlmdCcsICdTaGlmdCcpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWZ1bmN0aW9uYWwgLWxjdHJsJywgJ0N0cmwnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbicsICc8aSBjbGFzcz1cImZhYiBmYS13aW5kb3dzXCI+PC9pPicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uIC1mdW5jdGlvbmFsJywgJ0FsdCcpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uIC1zcGFjZScsICcnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbiAtZnVuY3Rpb25hbCcsICdBbHQnKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2tleWJvYXJkLWJ1dHRvbiAtZnVuY3Rpb25hbCcsICdDdHJsJykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWFycm93JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIj48L2k+JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWFycm93JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+JykpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtYmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdrZXlib2FyZC1idXR0b24gLWFycm93JywgJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPicpKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtleWJvYXJkLWJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAna2V5Ym9hcmQtYnV0dG9uIC1mdW5jdGlvbmFsIC1pbmZvJywgJ0luZm8nKSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC1ibG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxuIiwiLy8gY3JlYXRlIGh0bWwgZWxlbWVudCB3aXRoIGdpdmVuIGF0dHJpYnV0ZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWwoc2VsZWN0b3IsIGNsYXNzTmFtZSwgaW5uZXJUZXh0LCAuLi5rZXlzVmFsdWVzKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xyXG4gIGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gZWxlbS5jbGFzc05hbWUgPSAnJyA6IGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIGlubmVyVGV4dCA9PT0gdW5kZWZpbmVkID8gZWxlbS5pbm5lckhUTUwgPSAnJyA6IGVsZW0uaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gIGlmIChrZXlzVmFsdWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbGV0IGkgPSAxO1xyXG4gICAgd2hpbGUgKGkgPCBrZXlzVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXlzVmFsdWVzW2kgLSAxXSwga2V5c1ZhbHVlc1tpXSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=