// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\appMS(1)\\src\\pages\\components\\navBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e18e048"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _filters = __webpack_require__(5);

var filters = _interopRequireWildcard(_filters);

var _SettingPage = __webpack_require__(28);

var _SettingPage2 = _interopRequireDefault(_SettingPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//设置

Object.keys(filters).forEach(function (key) {
  Vue.filter(key, filters[key]);
});

// register global mixins.
Vue.mixin(_index2.default);

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root' }, _SettingPage2.default));

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\weex\\appMS(1)\\src\\pages\\SettingPage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e59e169e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flex": 1,
    "backgroundColor": "#f2f2f2",
    "paddingBottom": "100",
    "fontSize": "28",
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "flex-start"
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navBar = __webpack_require__(0);

var _navBar2 = _interopRequireDefault(_navBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    navBar: _navBar2.default
  },
  data: function data() {
    return {
      imagePath: "",
      titleName: "设置"
    };
  },

  created: function created() {}
}; //
//
//
//
//
//

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navBar', {
    attrs: {
      "title": _vm.titleName
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stream = weex.requireModule('stream') || {};
//全局方法
exports.default = {
    methods: {
        reset: function reset(to) {
            if (WXEnvironment.platform === 'Web') {
                if (this.$router) {
                    this.$router.replace(to);
                }
            } else {
                if (this.$router) {
                    this.$router.replace(to);
                }
            }
        },
        getNavigator: function getNavigator() {
            return weex.requireModule('navigator');
        },
        toBack: function toBack() {
            if (WXEnvironment.platform === 'Web') {
                this.$router.back();
            } else {
                this.getNavigator().pop({
                    animated: "true"
                });
            }
        },
        jumpInter: function jumpInter(to) {
            if (this.$router) {
                this.$router.push(to);
            }
        },
        getImagePath: function getImagePath(name) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var abs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '../../';

            return 'http://192.168.1.234:8080/mstps/static/trscript/img/app/' + name + type;
            // if (WXEnvironment.platform === 'Web') {
            //     return `${abs}static/img/${name}${type}`
            // } else if (WXEnvironment.platform === 'android') {
            //     return `local:///${name}`;
            // } else {
            //     return `local:///${name}${type}`;
            // }
        },

        //带参数跳转
        jumpWithParams: function jumpWithParams(to, params) {
            console.log(to, WXEnvironment.platform);
            if (WXEnvironment.platform === 'Web') {
                if (this.$router) {
                    this.$router.push(to);
                }
            } else {
                var path = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/' + to + '.js'; // 将a.js的绝对地址转为b.js的绝对地址;
                console.log(path);
                var q = this.createQuery(params);
                this.getNavigator().push({
                    url: path + q,
                    animated: "true"
                }, function (event) {
                    //modal.toast({ message: 'callback: ' + event })
                });
            }
        },

        // object 转 URL 参数
        createQuery: function createQuery(obj) {
            if (obj === null || obj === "" || obj.length === 0) {
                return "";
            }
            var url = '?';
            for (var key in obj) {
                if (obj[key] !== null) {
                    url += key + '=' + encodeURIComponent(obj[key]) + '&';
                }
            }
            return url.substring(0, url.lastIndexOf('&'));
        },


        //获取地址参数
        getQuery: function getQuery() {
            if (WXEnvironment.platform === 'Web') {
                return this.$route.params;
            } else {
                return this.getQueryData(weex.config.bundleUrl);
            }
        },

        // 'xxx.js?name=aa' 转 {name: 'aa'}
        getQueryData: function getQueryData(url) {
            url = url.substring(url.indexOf('.js?') + 3);
            var result = {};
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return result;
        },
        getBaseUrl: function getBaseUrl() {
            var bundleUrl = weex.config.bundleUrl;
            console.log(bundleUrl);
            bundleUrl = String(bundleUrl);
            var nativeBase = void 0;
            var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

            var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist/';
            } else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            } else {
                var host = 'localhost:3001/';
                var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
                if (matches && matches.length >= 2) {
                    host = matches[1];
                }
                nativeBase = 'http://' + host + '/dist/';
            }
            return nativeBase;
        },
        isIpx: function isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        getData: function getData(api, data, callback) {
            console.log(stream);
            return stream.fetch({
                method: 'POST',
                url: api,
                type: 'json',
                body: {
                    data: data
                }
            }, callback);
        }
    }
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.host = host;
exports.https = https;
exports.timeAgo = timeAgo;
exports.unescape = unescape;
function host(url) {
  if (!url) return '';
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function https(url) {
  var env = weex.config.env || WXEnvironment;
  if (env.platform === 'iOS' && typeof url === 'string') {
    return url.replace(/^http\:/, 'https:');
  }
  return url;
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

function unescape(text) {
  var res = text || '';[['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
  });

  return res;
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "clearFix": {
    "height": "90",
    "width": "750",
    "backgroundColor": "#ffffff"
  },
  "navBar": {
    "backgroundColor": "#ffffff",
    "height": "90",
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "center": {
    "width": "550",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "display": "flex",
    "flexDirection": "row"
  },
  "left": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "100"
  },
  "right": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "100"
  },
  "backIcon": {
    "color": "#DA251E",
    "fontSize": "42"
  },
  "title": {
    "fontSize": "36",
    "color": "#000000"
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['title'],
    methods: {
        backPage: function backPage() {
            if (this.$router) {
                this.$router.go(-1);
            } else {
                this.toBack();
            }
        }
    }
};

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["clearFix"]
  }, [_c('div', {
    staticClass: ["navBar"]
  }, [_c('div', {
    staticClass: ["left"],
    on: {
      "click": function($event) {
        _vm.backPage()
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "backIcon"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["center"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });