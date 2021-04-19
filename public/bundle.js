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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/tishvo/work/projectCatwalk/client/app.jsx: Unexpected token (5:0)\\n\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m \\u001b[36mimport\\u001b[39m axios \\u001b[36mfrom\\u001b[39m \\u001b[32m'axios'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[33mOverview\\u001b[39m \\u001b[36mfrom\\u001b[39m \\u001b[32m'./components/Overview/Overview.jsx'\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 |\\u001b[39m \\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 |\\u001b[39m \\u001b[90m// import PAT from '../config.js';\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 |\\u001b[39m \\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 |\\u001b[39m \\u001b[33m>>>\\u001b[39m\\u001b[33m>>>\\u001b[39m\\u001b[33m>\\u001b[39m \\u001b[35m1e09\\u001b[39mc54c48d96e946b75e08350d957a12fac28d5\\u001b[0m\\n    at Object._raise (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:776:17)\\n    at Object.raiseWithData (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:769:17)\\n    at Object.raise (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:737:17)\\n    at Object.unexpected (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:9735:16)\\n    at Object.parseExprAtom (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:11131:20)\\n    at Object.parseExprAtom (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:5174:20)\\n    at Object.parseExprSubscripts (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:10708:23)\\n    at Object.parseUpdate (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:10688:21)\\n    at Object.parseMaybeUnary (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:10666:23)\\n    at Object.parseExprOps (/Users/tishvo/work/projectCatwalk/node_modules/@babel/parser/lib/index.js:10523:23)\");\n\n//# sourceURL=webpack:///./client/app.jsx?");

/***/ })

/******/ });