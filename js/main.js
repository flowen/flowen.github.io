/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Elevator = __webpack_require__(2);
	
	var App = __webpack_require__(3);
	
	new App();
	
	// Simple elevator usage.
	var elementButton = document.querySelector('.elevator');
	var elevator = new Elevator({
	    element: elementButton,
	    mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
	    endAudio: './music/ding.mp3'
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	var Elevator = function Elevator(n) {
	  "use strict";
	  function e(n, e, t, o) {
	    return n /= o / 2, 1 > n ? t / 2 * n * n + e : (n--, -t / 2 * (n * (n - 2) - 1) + e);
	  }function t(n, e) {
	    for (var t in e) {
	      var o = void 0 === n[t] && "function" != typeof t;o && (n[t] = e[t]);
	    }return n;
	  }function o(n) {
	    for (var e = 0; n;) {
	      e += n.offsetTop || 0, n = n.offsetParent;
	    }return g && (e -= g), e;
	  }function l(n) {
	    T || (T = n);var t = n - T,
	        o = e(t, k, y - k, b);window.scrollTo(0, o), b > t ? w = requestAnimationFrame(l) : r();
	  }function i() {
	    return window.requestAnimationFrame && window.Audio && window.addEventListener;
	  }function u() {
	    T = null, k = null, h = !1;
	  }function a() {
	    C && (y = o(C));
	  }function r() {
	    u(), f && (f.pause(), f.currentTime = 0), p && p.play(), v && v();
	  }function d() {
	    h && (cancelAnimationFrame(w), u(), f && (f.pause(), f.currentTime = 0), a(), window.scrollTo(0, y));
	  }function c(n) {
	    n.addEventListener ? n.addEventListener("click", F.elevate, !1) : n.attachEvent("onclick", function () {
	      a(), document.documentElement.scrollTop = y, document.body.scrollTop = y, window.scroll(0, y);
	    });
	  }function s(n) {
	    A = document.body;var e = { duration: void 0, mainAudio: !1, endAudio: !1, preloadAudio: !0, loopAudio: !0, startCallback: null, endCallback: null };n = t(n, e), n.element && c(n.element), i() && (n.duration && (E = !0, b = n.duration), n.targetElement && (C = n.targetElement), n.verticalPadding && (g = n.verticalPadding), window.addEventListener("blur", d, !1), n.mainAudio && (f = new Audio(n.mainAudio), f.setAttribute("preload", n.preloadAudio), f.setAttribute("loop", n.loopAudio)), n.endAudio && (p = new Audio(n.endAudio), p.setAttribute("preload", "true")), n.endCallback && (v = n.endCallback), n.startCallback && (m = n.startCallback));
	  }var m,
	      f,
	      p,
	      v,
	      A = null,
	      w = null,
	      b = null,
	      E = !1,
	      T = null,
	      k = null,
	      y = 0,
	      C = null,
	      g = null,
	      h = !1,
	      F = this;this.elevate = function () {
	    h || (h = !0, k = document.documentElement.scrollTop || A.scrollTop, a(), E || (b = 1.5 * Math.abs(y - k)), requestAnimationFrame(l), f && f.play(), m && m());
	  }, s(n);
	};"undefined" != typeof module && module.exports && (module.exports = Elevator);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	// Object destructuring
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _require = __webpack_require__(4),
	    STATE = _require.STATE,
	    STATUS = _require.STATUS;
	
	// Class
	
	
	var Client = function () {
		// Destructuring
		function Client() {
			var _this = this;
	
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
			_classCallCheck(this, Client);
	
			this.arr = [10, 50, 0];
			this.foo = 5;
	
			this.path = '';
	
			this.info(("local") + ' ' + STATE + ' ' + this.path);
	
			// Arrow Functions
			this.info(this.arr.reduce(function (a, b) {
				return a + b;
			}, 0));
			// Lexical this
			this.arr.forEach(function (i) {
				_this.info(i * _this.foo);
			});
		}
	
		_createClass(Client, [{
			key: 'info',
			value: function info() {
				var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
				// Template Literals
				console.info(Date.now() + ': ' + message);
			}
	
			// Rest operator (...)
	
		}, {
			key: 'wait',
			value: function wait(a) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}
	
				this.info(a, args);
			}
		}]);
	
		return Client;
	}();
	
	;
	
	module.exports = Client;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
		STATE: 'LOADING',
		STATUS: 'INIT'
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map