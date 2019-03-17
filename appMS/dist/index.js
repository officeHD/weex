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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\navBar.vue"
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
/* 1 */
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
            console.log(this.$router);
            if (this.$router) {
                this.$router.push(to);
            }
        },
        getImagePath: function getImagePath(name) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var abs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '../../';

            return 'http://192.168.1.221/img/' + name + type;
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
/* 2 */
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

function timeAgo(dateTimeStamp) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var year = month * 12;
	var now = new Date().getTime();
	var diffValue = now - getDateTimeStamp(dateTimeStamp);
	if (diffValue < 0) {
		return;
	}
	var yearC = diffValue / year;
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	var result = "";
	if (yearC >= 1) {
		result = "" + parseInt(yearC) + "年前";
	} else if (monthC >= 1) {
		result = "" + parseInt(monthC) + "月前";
	} else if (weekC >= 1) {
		result = "" + parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		result = "" + parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		result = "" + parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		result = "" + parseInt(minC) + "分钟前";
	} else result = "刚刚";
	return result;
}
// 转换标准时间为时间戳
function getDateTimeStamp(dateStr) {
	return Date.parse(dateStr.replace(/-/gi, "/"));
}

function unescape(text) {
	var res = text || '';
	[['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
		res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
	});

	return res;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(10);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }
      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight == 1792);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),
/* 5 */
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
/* 6 */
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
    props: ['title', 'MainPage'],
    methods: {
        backPage: function backPage() {

            if (this.MainPage) {
                this.toBack();
            } else {
                this.$router.go(-1);
            }
        }
    }
};

/***/ }),
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var utilFunc = {
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_1082618_piy2su56vr.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\/]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\BottomBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4cda0aa0"
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(11)
  , qs = __webpack_require__(12)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof global !== 'undefined') globalVar = global;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(value));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "w-ipx": {
    "height": "140"
  },
  "wrappers": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "100",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa",
    "alignItems": "center",
    "width": "750"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "22",
    "paddingTop": "5"
  },
  "bar-ic": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "38"
  },
  "bar-active": {
    "color": "#b4282d"
  }
}

/***/ }),
/* 14 */
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
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    computed: {},
    props: {
        pIndexKey: ""
    },
    data: function data() {
        return {
            // pIndexKey: 'home'
        };
    },
    mounted: function mounted() {},

    methods: {
        isActive: function isActive(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo: function tabTo(_key) {
            if (this.pIndexKey == _key) return;
            // this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            });
        }
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrappers', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [(_vm.pIndexKey == 'home') ? _c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('home')]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["bar-ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("赚钱")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('user')
      }
    }
  }, [(_vm.pIndexKey == 'user') ? _c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('user')]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["bar-ic", "iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('user')]
  }, [_vm._v("我")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#f4f4f4",
    "flex": 1
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _BottomBar = __webpack_require__(9);

var _BottomBar2 = _interopRequireDefault(_BottomBar);

var _util = __webpack_require__(8);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

var globalEvent = weex.requireModule("globalEvent");
var eventModule = weex.requireModule("CommonModule");
exports.default = {
  name: "App",
  data: function data() {
    return {
      isShow: true,
      realHeight: _utils2.default.env.getScreenHeight()
    };
  },

  components: {
    "bottom-bar": _BottomBar2.default
  },
  created: function created() {
    _util2.default.initIconFont();
    var objThis = this;
    this.realHeight = _utils2.default.env.getScreenHeight();
    // if (objThis.$route.path  == "/home" && objThis.$route.path == "/user") {
    //   this.isshow = true;
    // }else{
    //      this.isshow = false;
    // }
    globalEvent.addEventListener("androidback", function (e) {
      if (objThis.$route.path == "/home" || objThis.$route.path == "/login") {
        eventModule.closeApp();
      } else {
        objThis.$router.go(-1);
      }
    });
  },

  methods: {
    onTabTo: function onTabTo(_result) {
      var _key = _result.data.key || "";
      this.$router && this.$router.push("/" + _key);
    }
  },
  updated: function updated() {
    var objThis = this;
    console.log(objThis.$route.path);
    if (objThis.$route.path == "/home" && objThis.$route.path == "/user") {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    style: {
      height: _vm.realHeight
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(21);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\node_modules\\_weex-ui@0.6.10@weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a06c9274"
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked: function cellClicked(e) {
      var link = this.link;
      this.$emit('wxcCellClicked', { e: e });
      link && _utils2.default.goToH5Page(link, true);
    }
  }
}; //
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
//
//

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(26);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\node_modules\\_weex-ui@0.6.10@weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10cfe870"
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "left": 0,
    "top": 0,
    "bottom": 0,
    "right": 0
  }
}

/***/ }),
/* 28 */
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
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
exports.default = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: function _default() {
        return ['ease-in', 'ease-out'];
      }
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: 'rgba(0, 0, 0,' + this.opacity + ')'
      };
    },
    shouldShow: function shouldShow() {
      var _this = this;

      var show = this.show,
          hasAnimation = this.hasAnimation;

      hasAnimation && setTimeout(function () {
        _this.appearOverlay(show);
      }, 50);
      return show;
    }
  },
  methods: {
    overlayClicked: function overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },
    appearOverlay: function appearOverlay(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.duration;
      var hasAnimation = this.hasAnimation,
          timingFunction = this.timingFunction,
          canAutoClose = this.canAutoClose;

      var needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      var overlayEl = this.$refs['wxc-overlay'];
      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration: duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, function () {
          needEmit && _this2.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\orderList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-137f6cde"
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navBar = __webpack_require__(0);

var _navBar2 = _interopRequireDefault(_navBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule("storage"); //
//
//
//
//
//

exports.default = {
  components: {
    navBar: _navBar2.default
  },
  data: function data() {
    return {
      imagePath: "",
      titleName: "订单"
    };
  },

  created: function created() {
    var self = this;
    var query = this.getQuery();
    if (query.orderId) {
      // 储存id
      storage.setItem("orderId", query.orderId, function (event) {
        self.reset("orderDetail");
      });
    }
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navBar', {
    attrs: {
      "title": _vm.titleName,
      "MainPage": true
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(81);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(86)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\node_modules\\_weex-ui@0.6.10@weex-ui\\packages\\wxc-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-deff2e32"
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mixins = __webpack_require__(1);

var _mixins2 = _interopRequireDefault(_mixins);

var _filters = __webpack_require__(2);

var filters = _interopRequireWildcard(_filters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global Vue*/

/* weex initialized here, please do not move this line */
var _require = __webpack_require__(38),
    router = _require.router;

var App = __webpack_require__(16);


// register global utility filters.
Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
});

// register global mixins.
Vue.mixin(_mixins2.default);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.router = undefined;

var _vueRouter = __webpack_require__(3);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = __webpack_require__(39);

var _home2 = _interopRequireDefault(_home);

var _user = __webpack_require__(66);

var _user2 = _interopRequireDefault(_user);

var _visitor = __webpack_require__(70);

var _visitor2 = _interopRequireDefault(_visitor);

var _orderList = __webpack_require__(30);

var _orderList2 = _interopRequireDefault(_orderList);

var _invite = __webpack_require__(74);

var _invite2 = _interopRequireDefault(_invite);

var _register = __webpack_require__(78);

var _register2 = _interopRequireDefault(_register);

var _login = __webpack_require__(89);

var _login2 = _interopRequireDefault(_login);

var _flash = __webpack_require__(93);

var _flash2 = _interopRequireDefault(_flash);

var _startup = __webpack_require__(97);

var _startup2 = _interopRequireDefault(_startup);

var _verify = __webpack_require__(101);

var _verify2 = _interopRequireDefault(_verify);

var _forget = __webpack_require__(105);

var _forget2 = _interopRequireDefault(_forget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Message from '@/pages/message'


// import Salary from '@/pages/salary'
/*global Vue*/
Vue.use(_vueRouter2.default);
// import Claims from '@/pages/claims'

// import StarSalary from '@/pages/starSalary'
// import ExtendFee from '@/pages/extendFee'
// import RecomFee from '@/pages/recomFee'


// import UserFile from '@/pages/userFile'
// import CardList from '@/pages/cardList'
// import CardAdd from '@/pages/cardAdd'

// import DrawCash from '@/pages/drawCash'
// import Customer from '@/pages/customer'
var router = exports.router = new _vueRouter2.default({
    routes: [{
        path: '/home',
        component: _home2.default,
        meta: {
            keepAlive: true
        }
    }, {
        path: '/user',
        component: _user2.default,
        meta: {
            keepAlive: true
        }
    },

    // {
    //     path: '/cardlist',
    //     component: CardList
    // },
    // {
    //     path: '/cardadd',
    //     component: CardAdd
    // },

    // {
    //     path: '/drawcash',
    //     component: DrawCash
    // },
    // {
    //     path: '/customer',
    //     component: Customer
    // },
    {
        path: '/visitor',
        component: _visitor2.default
    }, {
        path: '/orderlist',
        component: _orderList2.default
    },
    // {
    //     path: '/claims',
    //     component: Claims
    // },

    // {
    //     path: '/starsalary',
    //     component: StarSalary
    // },
    // {
    //     path: '/extendfee',
    //     component: ExtendFee
    // },
    // {
    //     path: '/recomfee',
    //     component: RecomFee
    // },
    {
        path: '/invite',
        component: _invite2.default
    }, {
        path: '/register',
        component: _register2.default
    }, {
        path: '/login',
        component: _login2.default
    }, {
        path: '/forget',
        component: _forget2.default
    }, {
        path: '/startUp',
        component: _startup2.default
    }, {
        path: '/flash',
        component: _flash2.default
    }, {
        path: '/verify',
        component: _verify2.default
    }, {
        path: '/',
        redirect: '/startUp'
    }]
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(65)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-324fb87d"
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
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "main-list": {
    "position": "fixed",
    "top": "184",
    "bottom": "100",
    "left": 0,
    "right": 0
  },
  "ml-ipx": {
    "top": "224",
    "bottom": "140"
  },
  "cell-button": {
    "paddingBottom": "18"
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Header = __webpack_require__(42);

var _Header2 = _interopRequireDefault(_Header);

var _SelectBar = __webpack_require__(46);

var _SelectBar2 = _interopRequireDefault(_SelectBar);

var _refresh = __webpack_require__(55);

var _refresh2 = _interopRequireDefault(_refresh);

var _GoodsList = __webpack_require__(59);

var _GoodsList2 = _interopRequireDefault(_GoodsList);

var _BottomBar = __webpack_require__(9);

var _BottomBar2 = _interopRequireDefault(_BottomBar);

var _api = __webpack_require__(63);

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream') || {};
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');

exports.default = {
	components: {
		'home-header': _Header2.default,
		'refresher': _refresh2.default,
		'home-selectBar': _SelectBar2.default,
		'goodsList': _GoodsList2.default,
		'bottom-bar': _BottomBar2.default
	},

	data: function data() {
		return {
			hasMore: false,
			pIndexKey: "home",
			showPrise: true,
			goodsList: [{
				img: 'https://planbook.kbao123.com/market-rest/api/file/download?path=market%2F%7BchannelId%7D%2Fproduct%2FPRO20181012000003%2Fminimg%2F6.jpg&isOnline=true&channelId=',
				companyName: '泰康人寿',
				ageLabel: '5天-70周岁',
				coveragePeriod: '终身',
				productName: '泰康人寿华夏红华夏红华夏红',
				info: '人气推荐 · 好物精选',
				culture: [{
					title: '重大疾病保险',
					content: '5万元'
				}, {
					title: '轻症疾病保险金',
					content: '1.5万元，三次'
				}, {
					title: '被保险人轻症豁免保险费',
					content: '豁免后期保险费'
				}],
				price: '33',
				benfit: '3%+15%'
			}, {
				img: 'https://planbook.kbao123.com/market-rest/api/file/download?path=market%2F%7BchannelId%7D%2Fproduct%2FPRO20181012000003%2Fminimg%2F6.jpg&isOnline=true&channelId=',
				companyName: '泰康人寿',
				productName: '华夏红',
				info: '人气推荐 · 好物精选',
				ageLabel: '5天-70周岁',
				coveragePeriod: '终身',
				culture: [{
					title: '重大疾病保险',
					content: '5万元'
				}, {
					title: '轻症疾病保险金',
					content: '1.5万元，三次'
				}, {
					title: '被保险人轻症豁免保险费',
					content: '豁免后期保险费'
				}],
				price: '33',
				benfit: '3%+15%'
			}],
			showLoading: 'hide'
		};
	},
	created: function created() {
		// 			api.getList('', res => {
		// 				console.log(res);
		// 			});
		// 			let data = {
		// 				workNum: '',
		// 				page: 1,
		// 				size: 10,
		// 				isMain: 0,
		// 				type: '',
		// 				comName: '',
		// 				productName: ''
		// 			};
		// 			api.getComList({
		// 				data: JSON.stringify(data)
		// 			}, res => {
		// 				console.log(res);
		// 				if (res.result == "1") {
		// 					// this.goodsList=res.list   
		// 				}
		// 			});
	},

	methods: {
		onloading: function onloading() {
			var _this = this;

			if (!hasMore) {
				return false;
			}
			modal.toast({
				message: 'loading',
				duration: 0.3
			});
			this.showLoading = 'show';
			setTimeout(function () {
				_this.showLoading = 'hide';
			}, 300);
		},
		onloadmore: function onloadmore() {
			if (!hasMore) {
				return false;
			}
			modal.toast({
				message: 'loading',
				duration: 0.3
			});
			setTimeout(function () {}, 100);
		},
		loadingDown: function loadingDown() {},
		hidePrice: function hidePrice() {
			this.showPrise = !this.showPrise;
		},
		onTabTo: function onTabTo(_result) {
			var _key = _result.data.key || '';
			this.$router && this.$router.push('/' + _key);
		}
	}
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-379b36f6"
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
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "104",
    "paddingTop": "20",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#ffffff",
    "opacity": 0.99
  },
  "w-ipx": {
    "height": "144",
    "paddingTop": "84"
  },
  "notice": {
    "height": "60",
    "width": "96",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "ic": {
    "fontSize": "32"
  },
  "search": {
    "textAlign": "left",
    "color": "#666666",
    "fontWeight": "300",
    "flex": 1,
    "height": "60",
    "fontSize": "26",
    "paddingTop": "13",
    "backgroundColor": "#ededed",
    "borderRadius": "60",
    "marginLeft": "10",
    "paddingLeft": "30"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(8);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: {
        hidePrice: {
            type: Function,
            default: null
        },
        showPrise: Boolean
    },
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/search';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: 'false'
            });
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('text', {
    staticClass: ["search", "iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v(" 搜索产品")]), _c('div', {
    staticClass: ["notice"],
    on: {
      "click": _vm.hidePrice
    }
  }, [(_vm.showPrise) ? _c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")]) : _c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(54)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\SelectBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-79c65aa2"
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
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "w-ipx": {
    "top": "144"
  },
  "wrapper": {
    "position": "fixed",
    "top": "104",
    "left": 0,
    "right": 0,
    "height": "80",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff"
  },
  "bar-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "color": "#666666",
    "fontSize": "28",
    "justifyContent": "flex-start"
  },
  "shaixuan": {
    "fontSize": "34"
  },
  "bar-txt": {
    "textAlign": "center",
    "fontSize": "22",
    "paddingTop": "5"
  },
  "bar-ic": {
    "textAlign": "center",
    "fontSize": "38"
  },
  "chose-content": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "flex": 1,
    "position": "relative"
  },
  "scrollContent": {
    "height": "500",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0
  },
  "actionBar": {
    "height": "88",
    "display": "flex",
    "flexDirection": "row"
  },
  "surBtn": {
    "color": "#ffffff",
    "backgroundColor": "#DA251E",
    "flex": 1,
    "height": "88",
    "lineHeight": "88",
    "textAlign": "center"
  },
  "canceleBtn": {
    "color": "#ffffff",
    "backgroundColor": "#CCCCCC",
    "flex": 1,
    "height": "88",
    "lineHeight": "88",
    "textAlign": "center"
  },
  "typeName": {
    "fontSize": "30",
    "color": "#000000",
    "marginBottom": "10",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20"
  },
  "choseBox": {
    "marginBottom": "30",
    "display": "flex",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "choseAge": {
    "marginBottom": "10",
    "display": "flex",
    "flexDirection": "row"
  },
  "choseItem": {
    "width": "200",
    "marginTop": "10",
    "marginRight": "20",
    "marginBottom": "10",
    "marginLeft": "20",
    "textAlign": "center",
    "backgroundColor": "#f2f2f2",
    "height": "55",
    "lineHeight": "55",
    "color": "#666666",
    "borderRadius": "5"
  },
  "active": {
    "backgroundColor": "#DA251E",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _wxcPopup = __webpack_require__(49);

var _wxcPopup2 = _interopRequireDefault(_wxcPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
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
//
//
//
//
//
//
//

exports.default = {
	components: {
		WxcPopup: _wxcPopup2.default
	},
	data: function data() {
		return {
			isBottomShow: false,
			choseType: "company",
			companyid: "",
			productType: "",
			moreType: ""
		};
	},
	mounted: function mounted() {},

	methods: {
		tabTo: function tabTo(_key) {},
		openBottomPopup: function openBottomPopup(type) {
			this.choseType = type;
			this.isBottomShow = true;
		},

		//非状态组件，需要在这里关闭
		popupOverlayBottomClick: function popupOverlayBottomClick() {
			this.isBottomShow = false;
		}
	}
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(50);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\node_modules\\_weex-ui@0.6.10@weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-848230b8"
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
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _wxcOverlay = __webpack_require__(25);

var _wxcOverlay2 = _interopRequireDefault(_wxcOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//

var animation = weex.requireModule('animation');
var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
exports.default = {
  components: { WxcOverlay: _wxcOverlay2.default },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: function _default() {
        return {
          hasAnimation: true,
          timingFunction: ['ease-in', 'ease-out'],
          duration: 300,
          opacity: 0.6
        };
      }
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: function _default() {
        return {
          timingFunction: 'ease-in'
        };
      }
    }
  },
  data: function data() {
    return {
      haveOverlay: true,
      isOverShow: true
    };
  },
  computed: {
    isNeedShow: function isNeedShow() {
      var _this = this;

      setTimeout(function () {
        _this.appearPopup(_this.show);
      }, 50);
      return this.show;
    },
    _height: function _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },
    padStyle: function padStyle() {
      var pos = this.pos,
          width = this.width,
          height = this.height,
          popupColor = this.popupColor,
          standOut = this.standOut;

      var stand = parseInt(standOut, 10);
      var style = {
        width: width + 'px',
        backgroundColor: popupColor
      };
      pos === 'top' && (style = _extends({}, style, {
        top: -height + stand + 'px',
        height: height + 'px'
      }));
      pos === 'bottom' && (style = _extends({}, style, {
        bottom: -height + stand + 'px',
        height: height + 'px'
      }));
      pos === 'left' && (style = _extends({}, style, {
        left: -width + stand + 'px'
      }));
      pos === 'right' && (style = _extends({}, style, {
        right: -width + stand + 'px'
      }));
      return style;
    }
  },
  methods: {
    handleTouchEnd: function handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      var platform = weex.config.env.platform;

      platform === 'Web' && e.preventDefault && e.preventDefault();
    },
    hide: function hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },
    wxcOverlayBodyClicking: function wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },
    appearPopup: function appearPopup(bool) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

      this.isShow = bool;
      var popupEl = this.$refs['wxc-popup'];
      if (!popupEl) {
        return;
      }
      animation.transition(popupEl, _extends({
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration: duration,
        delay: 0
      }, this.animation), function () {
        if (!bool) {
          _this2.$emit('wxcPopupOverlayClicked', { pos: _this2.pos });
        }
      });
    },
    getTransform: function getTransform(pos, width, height, bool) {
      var _size = pos === 'top' || pos === 'bottom' ? height : width;
      bool && (_size = 0);
      var _transform = void 0;
      switch (pos) {
        case 'top':
          _transform = 'translateY(' + _size + 'px)';
          break;
        case 'bottom':
          _transform = 'translateY(-' + _size + 'px)';
          break;
        case 'left':
          _transform = 'translateX(' + _size + 'px)';
          break;
        case 'right':
          _transform = 'translateX(-' + _size + 'px)';
          break;
      }
      return _transform;
    }
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: ['wrapper']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.openBottomPopup('company')
      }
    }
  }, [_c('text', [_vm._v("全部类型")]), _c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["bar-item", "rightItem"],
    on: {
      "click": function($event) {
        _vm.openBottomPopup('')
      }
    }
  }, [_c('text', [_vm._v("筛选")]), _c('text', {
    staticClass: ["iconfont", "shaixuan"]
  }, [_vm._v("")])])]), _c('wxc-popup', {
    attrs: {
      "popupColor": "rgb(255,255,255)",
      "show": _vm.isBottomShow,
      "pos": "top",
      "height": "588"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["chose-content"]
  }, [_c('scroller', {
    staticClass: ["scrollContent"]
  }, [(_vm.choseType === 'company') ? _c('div', [_c('text', {
    staticClass: ["typeName"]
  }, [_vm._v("保险公司")]), _c('div', {
    staticClass: ["choseBox"]
  }, [_c('text', {
    class: ['choseItem', _vm.companyid == '' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.companyid = ''
      }
    }
  }, [_vm._v("全部")]), _c('text', {
    class: ['choseItem', _vm.companyid == '2' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.companyid = 2
      }
    }
  }, [_vm._v("复兴联合健康")]), _c('text', {
    class: ['choseItem', _vm.companyid == '3' ? 'active' : '']
  }, [_vm._v("更新中...")])]), _c('text', {
    staticClass: ["typeName"]
  }, [_vm._v("年龄")]), _c('div', {
    staticClass: ["choseAge"]
  }, [_c('text', {
    staticClass: ["choseItem"]
  }, [_vm._v("起始年龄")]), _c('text', {
    staticClass: ["choseItem"]
  }, [_vm._v("截止年龄")])])]) : _c('div', [_c('text', {
    staticClass: ["typeName"]
  }, [_vm._v("产品类型")]), _c('div', {
    staticClass: ["choseBox"]
  }, [_c('text', {
    class: ['choseItem', _vm.productType == '' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = ''
      }
    }
  }, [_vm._v("全部")]), _c('text', {
    class: ['choseItem', _vm.productType == '1' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = '1'
      }
    }
  }, [_vm._v("健康险")]), _c('text', {
    class: ['choseItem', _vm.productType == '2' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = '2'
      }
    }
  }, [_vm._v("意外")]), _c('text', {
    class: ['choseItem', _vm.productType == '3' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = '3'
      }
    }
  }, [_vm._v("卡单")]), _c('text', {
    class: ['choseItem', _vm.productType == '4' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = '4'
      }
    }
  }, [_vm._v("重疾险")]), _c('text', {
    class: ['choseItem', _vm.productType == '5' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.productType = '5'
      }
    }
  }, [_vm._v("年金险")])]), _c('text', {
    staticClass: ["typeName"]
  }, [_vm._v("更多")]), _c('div', {
    staticClass: ["choseAge"]
  }, [_c('text', {
    class: ['choseItem', _vm.moreType == '6' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.moreType = '6'
      }
    }
  }, [_vm._v("新上线")]), _c('text', {
    class: ['choseItem', _vm.moreType == '7' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.moreType = '7'
      }
    }
  }, [_vm._v("老年人")]), _c('text', {
    class: ['choseItem', _vm.moreType == '8' ? 'active' : ''],
    on: {
      "click": function($event) {
        _vm.moreType = '8'
      }
    }
  }, [_vm._v("儿童")])])])]), _c('div', {
    staticClass: ["actionBar"]
  }, [_c('text', {
    staticClass: ["surBtn"],
    on: {
      "click": _vm.popupOverlayBottomClick
    }
  }, [_vm._v("确定")]), _c('text', {
    staticClass: ["canceleBtn"]
  }, [_vm._v("重置")])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(58)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-afe8d39a"
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
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": "170",
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": "250",
    "marginTop": "40",
    "width": "250",
    "height": "120"
  },
  "l-txt-box": {
    "height": "106",
    "width": "200",
    "overflow": "hidden"
  },
  "l-txt": {
    "height": "30",
    "width": "30",
    "fontSize": "25",
    "position": "absolute",
    "top": "105",
    "left": "87",
    "color": "#666666"
  }
}

/***/ }),
/* 57 */
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
//
//
//
//

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: [],
    data: function data() {
        return {
            refreshing: false,
            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
            }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            //                console.log('is refreshing')
            //                modal.toast({ message: 'refresh', duration: 1 })
            this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 1300);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('image', {
    staticClass: ["loading-bg"],
    attrs: {
      "resize": "contain",
      "src": "http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"
    }
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("好")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("的")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("生")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("活")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("没")]), _c('text', {
    ref: "lTxt6",
    staticClass: ["l-txt", "l-txt-6"]
  }, [_vm._v("那")]), _c('text', {
    ref: "lTxt7",
    staticClass: ["l-txt", "l-txt-7"]
  }, [_vm._v("么")]), _c('text', {
    ref: "lTxt8",
    staticClass: ["l-txt", "l-txt-8"]
  }, [_vm._v("贵")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(60)
)

/* script */
__vue_exports__ = __webpack_require__(61)

/* template */
var __vue_template__ = __webpack_require__(62)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\components\\GoodsList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-39680068"
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
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "marginRight": "5"
  },
  "org": {
    "color": "#f5921a"
  },
  "wrapper": {
    "backgroundColor": "#f2f2f2",
    "paddingBottom": "10",
    "paddingTop": "26",
    "width": "750"
  },
  "gb-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "marginBottom": "15",
    "backgroundColor": "#ffffff",
    "width": "750"
  },
  "item-img": {
    "width": "200",
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": "25"
  },
  "gd-img": {
    "width": "150",
    "height": "150",
    "backgroundColor": "#f4f4f4"
  },
  "ml15": {
    "marginLeft": "15"
  },
  "gd-companyName": {
    "display": "block",
    "fontSize": "28",
    "height": "65",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "15",
    "paddingBottom": "15",
    "color": "#333333",
    "backgroundColor": "#f4f6f5",
    "overflow": "hidden",
    "textAlign": "center",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "item-info": {
    "width": "550",
    "paddingTop": "25",
    "paddingRight": "25",
    "paddingBottom": "25",
    "paddingLeft": 0
  },
  "gd-name": {
    "fontSize": "34",
    "color": "#000000",
    "display": "block",
    "marginBottom": "15",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "gd-label": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "15",
    "width": "525"
  },
  "labelTxt": {
    "fontSize": "24",
    "color": "#666666",
    "marginRight": "10",
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "center"
  },
  "cul_list": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center",
    "marginBottom": "8"
  },
  "list_item": {
    "fontSize": "28",
    "color": "#666666"
  },
  "price-item": {
    "display": "flex",
    "flexDirection": "row",
    "color": "#dd403b",
    "fontSize": "28"
  },
  "price-benfit": {
    "color": "#dd403b",
    "fontSize": "28"
  },
  "price": {
    "fontSize": "50",
    "color": "#dd403b",
    "marginLeft": "8",
    "marginRight": "8"
  },
  "mt15": {
    "marginTop": "15"
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(8);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: {
        showPrise: Boolean,
        goods: Array
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
            var url = this.$getConfig().bundleUrl;
            //             navigator.push({
            //                 url: util.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
            //                 animated: 'true'
            //             });
        }
    }
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, _vm._l((_vm.goods), function(item, key, index) {
    return _c('div', {
      key: index,
      staticClass: ["gb-box"],
      on: {
        "click": function($event) {
          _vm.jumpWeb(item.url)
        }
      }
    }, [_c('div', {
      staticClass: ["item-img"]
    }, [_c('image', {
      staticClass: ["gd-img"],
      attrs: {
        "resize": "cover",
        "src": item.img
      }
    }), _c('text', {
      staticClass: ["gd-companyName"]
    }, [_vm._v(_vm._s(item.companyName))])]), _c('div', {
      staticClass: ["item-info"]
    }, [_c('text', {
      staticClass: ["gd-name"]
    }, [_vm._v(_vm._s(item.productName))]), _c('div', {
      staticClass: ["gd-label"]
    }, [_c('div', {
      staticClass: ["labelTxt"]
    }, [_c('text', {
      staticClass: ["iconfont", "org"]
    }, [_vm._v("")]), _c('text', [_vm._v("投保年龄：" + _vm._s(item.ageLabel))])]), _c('div', {
      staticClass: ["labelTxt", "ml15"]
    }, [_c('text', {
      staticClass: ["iconfont", "org"]
    }, [_vm._v("")]), _c('text', [_vm._v("保障期限：" + _vm._s(item.coveragePeriod))])])]), _vm._l((item.culture), function(items, key, index) {
      return _c('div', {
        key: index,
        staticClass: ["cul_list"]
      }, [_c('text', {
        staticClass: ["list_item"]
      }, [_vm._v(_vm._s(items.title))]), _c('text', {
        staticClass: ["list_item"]
      }, [_vm._v(_vm._s(items.content))])])
    }), _c('div', {
      staticClass: ["cul_list", "mt15"]
    }, [_c('div', {
      staticClass: ["price-item"]
    }, [_c('text', [_vm._v("¥")]), _c('text', {
      staticClass: ["price"]
    }, [_vm._v(_vm._s(item.price))]), _c('text', [_vm._v("元起")])]), (_vm.showPrise) ? _c('text', {
      staticClass: ["price-benfit"]
    }, [_vm._v("推广费 " + _vm._s(item.benfit))]) : _vm._e()])], 2)])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComList = exports.getList = undefined;

var _fetch = __webpack_require__(64);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//供应商列表
var ctx = 'http://192.168.1.234:8080/mstps';

var getList = exports.getList = function getList(data, cb) {

  (0, _fetch2.default)(ctx + '/mobile/insurance/common/plan/book', data, cb);
};
//计划书列表
var getComList = exports.getComList = function getComList(data, cb) {
  (0, _fetch2.default)(ctx + '/mobile/insurance/common/plan/getProductList', data, cb);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stream = weex.requireModule('stream') || {};
var modal = weex.requireModule('modal') || {};

function objToParams(obj) {
    var list = [];
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            list.push(key + '=' + obj[key]);
        }
    }
    return list.join('&');
}
var zAJAX = function zAJAX(url, datas, func) {

    stream.fetch({
        method: 'POST',
        url: url,
        type: 'json',
        headers: {
            'Accept': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: objToParams(datas)
    }, function (res) {

        if (!res.ok) {
            modal.toast({
                message: 'Network Error!',
                duration: 3
            });
        } else {
            func(res.data);
        }
    });
};

module.exports = zAJAX;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header', {
    attrs: {
      "hidePrice": _vm.hidePrice,
      "showPrise": _vm.showPrise
    }
  }), _c('home-selectBar'), _c('scroller', {
    class: ['main-list', _vm.isIpx && _vm.isIpx() ? 'ml-ipx' : ''],
    attrs: {
      "offsetAccuracy": "300",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher', {
    on: {
      "loadingDown": _vm.loadingDown
    }
  }), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('goodsList', {
    attrs: {
      "goods": _vm.goodsList,
      "showPrise": _vm.showPrise
    }
  })], 1), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.showLoading
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator"]
  }, [_vm._v("...")])])], 1), _c('bottom-bar', {
    attrs: {
      "pIndexKey": _vm.pIndexKey
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(67)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(69)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\user.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3f685969"
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
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "user": {
    "width": "750",
    "height": "1198"
  },
  "wrapperc": {
    "backgroundColor": "#f2f2f2",
    "paddingBottom": "100",
    "fontSize": "28",
    "width": "750",
    "display": "flex",
    "justifyContent": "flex-start",
    "flex": 1,
    "position": "fixed",
    "left": 0,
    "top": 0
  },
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "userMessage": {
    "position": "absolute",
    "right": "20",
    "top": "20",
    "color": "#ffffff",
    "fontSize": "44"
  },
  "scroller": {
    "flex": 1,
    "paddingBottom": "100"
  },
  "imgBox": {
    "width": "150",
    "display": "flex",
    "alignItems": "center"
  },
  "nameBox": {
    "display": "flex",
    "flexDirection": "row",
    "width": "600",
    "paddingTop": "20"
  },
  "userHeader": {
    "height": "200",
    "backgroundColor": "#f55b39",
    "display": "flex",
    "width": "750",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "avator": {
    "width": "120",
    "height": "120",
    "borderRadius": "50"
  },
  "userInfo": {
    "height": "200",
    "color": "#ffffff",
    "justifyContent": "center"
  },
  "userName": {
    "color": "#ffffff",
    "fontSize": "34",
    "marginBottom": "10"
  },
  "userType": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginLeft": "10",
    "backgroundColor": "#fbc82f",
    "paddingTop": "5",
    "paddingRight": "20",
    "paddingBottom": "5",
    "paddingLeft": "20",
    "borderRadius": "30",
    "fontSize": "20",
    "position": "relative",
    "top": "-10",
    "color": "#ffffff"
  },
  "infoTips": {
    "fontSize": "22",
    "color": "#f2f2f2",
    "width": "600"
  },
  "seticon": {
    "fontSize": "36",
    "color": "#999999"
  },
  "f50": {
    "fontSize": "50"
  },
  "itemName": {
    "fontSize": "32",
    "marginTop": "10",
    "color": "#666666"
  },
  "flexStart": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "item-name": {
    "fontSize": "24",
    "color": "#666666",
    "marginTop": "10"
  },
  "red": {
    "color": "#da251e"
  },
  "count": {
    "backgroundColor": "#ffffff",
    "marginBottom": "20"
  },
  "countTitle": {
    "lineHeight": "80",
    "fontSize": "32",
    "paddingLeft": "20"
  },
  "listName": {
    "fontSize": "32",
    "marginLeft": "20"
  },
  "bb": {
    "borderBottomColor": "#cccccc",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid"
  },
  "mt20": {
    "marginTop": "20"
  },
  "betweenFlex": {
    "display": "flex",
    "width": "750",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "backgroundColor": "#ffffff",
    "height": "90",
    "alignItems": "center"
  },
  "countList": {
    "display": "flex",
    "flexDirection": "row",
    "width": "750",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0
  },
  "flexCenter": {
    "display": "flex",
    "flexDirection": "row",
    "width": "750",
    "backgroundColor": "#ffffff",
    "paddingTop": "30",
    "paddingRight": 0,
    "paddingBottom": "30",
    "paddingLeft": 0,
    "alignItems": "center",
    "marginBottom": "20"
  },
  "money": {
    "color": "#000000",
    "fontSize": "40"
  },
  "item": {
    "flex": 1,
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column"
  },
  "hotLine": {
    "textAlign": "center",
    "width": "750",
    "fontSize": "28",
    "color": "#666666",
    "marginTop": "100"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _BottomBar = __webpack_require__(9);

var _BottomBar2 = _interopRequireDefault(_BottomBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//

exports.default = {
  components: {
    "bottom-bar": _BottomBar2.default
  },
  data: function data() {
    return {
      pIndexKey: "user",
      screenHeight: 0,
      ImagePath: "",
      ImagePathS: ""
    };
  },


  created: function created() {
    this.ImagePath = this.getImagePath("avator", ".png");
    this.ImagePathS = this.getImagePath("user", ".jpg");

    console.log(weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750);
    this.screenHeight = _utils2.default.env.getScreenHeight();
  },
  methods: {
    onTabTo: function onTabTo(_result) {
      console.log(_result);
      var _key = _result.data.key || "";
      this.$router && this.$router.push("/" + _key);
    },
    tabTo: function tabTo(_key) {
      this.$router && this.$router.push("/" + _key);
    },
    itemClick: function itemClick(url, parmars) {
      this.jumpWithParams(url, {
        title: ""
      });
    }
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapperc"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["userHeader"]
  }, [_c('div', {
    staticClass: ["imgBox"]
  }, [_c('image', {
    staticClass: ["avator"],
    attrs: {
      "resize": "contain",
      "src": _vm.ImagePath
    }
  })]), _c('div', {
    staticClass: ["userInfo"]
  }, [_c('div', {
    staticClass: ["nameBox"]
  }, [_c('text', {
    staticClass: ["userName"]
  }, [_vm._v("路人甲")]), _c('text', {
    staticClass: ["userType"],
    on: {
      "click": function($event) {
        _vm.tabTo('verify')
      }
    }
  }, [_vm._v("去认证")])]), _vm._m(0), _c('text', {
    staticClass: ["userMessage", "iconfont"],
    on: {
      "click": function($event) {
        _vm.itemClick('message')
      }
    }
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["count"],
    on: {
      "click": function($event) {
        _vm.itemClick('count')
      }
    }
  }, [_c('text', {
    staticClass: ["countTitle"]
  }, [_vm._v("我的账户")]), _vm._m(1)]), _c('div', {
    staticClass: ["flexCenter"]
  }, [_c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.itemClick('order')
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "f50", "red"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["itemName"]
  }, [_vm._v("订单")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.itemClick('customer')
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "f50", "red"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["itemName"]
  }, [_vm._v("客户")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.itemClick('claims')
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "f50", "red"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["itemName"]
  }, [_vm._v("理赔")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.itemClick('team')
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont", "f50", "red"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["itemName"]
  }, [_vm._v("团队")])])]), _c('div', {
    staticClass: ["betweenFlex", "bb"],
    on: {
      "click": function($event) {
        _vm.itemClick('userfile')
      }
    }
  }, [_vm._m(2), _vm._m(3)]), _c('div', {
    staticClass: ["betweenFlex"],
    on: {
      "click": function($event) {
        _vm.tabTo('invite')
      }
    }
  }, [_vm._m(4), _vm._m(5)]), _c('div', {
    staticClass: ["betweenFlex", "mt20"],
    on: {
      "click": function($event) {
        _vm.itemClick('setting')
      }
    }
  }, [_vm._m(6), _vm._m(7)]), _c('text', {
    staticClass: ["hotLine"]
  }, [_vm._v("客服热线：400-880-2177")])]), _c('bottom-bar', {
    attrs: {
      "pIndexKey": _vm.pIndexKey
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["infoTips"]
  }, [_vm._v("普通会员，申请成为客户经理获得更丰厚的待遇")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["countList"]
  }, [_c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["money"]
  }, [_vm._v("162.90")]), _c('text', {
    staticClass: ["item-name"]
  }, [_vm._v("可提现(元)")])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["money"]
  }, [_vm._v("162.90")]), _c('text', {
    staticClass: ["item-name"]
  }, [_vm._v("结算中(元)")])]), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["money"]
  }, [_vm._v("214568.90")]), _c('text', {
    staticClass: ["item-name"]
  }, [_vm._v("累计收入(元)")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flexStart"]
  }, [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["listName"]
  }, [_vm._v("我的资料")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flexStart"]
  }, [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["listName"]
  }, [_vm._v("邀请好友")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["flexStart"]
  }, [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["listName"]
  }, [_vm._v("设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticClass: ["iconfont", "seticon"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\visitor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8c515c80"
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
/* 71 */
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
/* 72 */
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
      titleName: "访客记录"
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\invite.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2e2fc427"
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
/* 75 */
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
  },
  "logo": {
    "height": "2561",
    "width": "750",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 76 */
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
    'navBar': _navBar2.default
  },
  data: function data() {
    return {
      imagePath: "",
      titleName: "邀请好友赚奖金"
    };
  },

  created: function created() {
    this.imagePath = this.getImagePath("invite", ".jpg");
  }
}; //
//
//
//
//
//
//
//
//
//

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navBar', {
    attrs: {
      "title": _vm.titleName
    }
  }), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.imagePath
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(79)
)

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(88)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\register.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2954bd41"
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
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flex": 1,
    "width": "750",
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "30",
    "paddingRight": "50",
    "paddingBottom": "30",
    "paddingLeft": "50",
    "backgroundColor": "#F95651"
  },
  "scroller": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "display": "flex",
    "alignItems": "center"
  },
  "register": {
    "position": "fixed",
    "fontSize": "30",
    "color": "#DA251E",
    "right": "20",
    "top": "20"
  },
  "logo": {
    "width": "480",
    "height": "90",
    "marginTop": "100",
    "marginBottom": "150"
  },
  "forget": {
    "fontSize": "28"
  },
  "readP": {
    "fontSize": "28"
  },
  "registerTop1": {
    "width": "750",
    "height": "209"
  },
  "registerTop": {
    "width": "750",
    "height": "600"
  },
  "messageImg": {
    "width": "150",
    "height": "58",
    "marginRight": "25"
  },
  "inputItem": {
    "height": "90",
    "marginBottom": "20",
    "paddingBottom": "5",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#FE9B07",
    "display": "flex",
    "flexDirection": "row",
    "borderRadius": "5",
    "width": "650",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "sendMesBtn": {
    "width": "200",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#FE9B07",
    "borderRadius": "5",
    "height": "90",
    "lineHeight": "90",
    "fontSize": "28"
  },
  "sendMesBtnDisabled": {
    "width": "200",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "1",
    "borderLeftColor": "#FE9B07",
    "height": "90",
    "lineHeight": "90",
    "fontSize": "28",
    "backgroundColor": "#cccccc"
  },
  "input": {
    "flex": 1,
    "height": "90",
    "color": "#FFFFFF",
    "paddingLeft": "20"
  },
  "loginBtn": {
    "height": "100",
    "borderRadius": "20",
    "width": "500",
    "backgroundImage": "linear-gradient(to right, #FF8DAE, #FFA360)",
    "textAlign": "center",
    "lineHeight": "100",
    "color": "#FFFFFF",
    "marginTop": "40",
    "fontSize": "40",
    "marginBottom": "40"
  },
  "aboutPW": {
    "width": "650",
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "registerNum": {
    "textAlign": "center",
    "fontSize": "26",
    "color": "#F8EF6E",
    "marginBottom": "30"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _wxcCheckboxList = __webpack_require__(34);

var _wxcCheckboxList2 = _interopRequireDefault(_wxcCheckboxList);

var _wxcCheckbox = __webpack_require__(36);

var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
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
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
	components: {
		WxcCheckbox: _wxcCheckbox2.default,
		WxcCheckboxList: _wxcCheckboxList2.default
	},
	data: function data() {
		return {
			phoneNum: "",
			messageImg: "",
			registerTop: "",
			isRightPhone: false,
			time: 60, // 发送验证码倒计时
			sendMsgDisabled: false,
			isRightCode: false, //图片验证码是否正确
			codeImg: "", //用户输入的图片Code
			lineCode: "", //获取的图片code
			messageCode: "", //用户输入的短信code
			lineMessage: "", //用户获取的短信code
			isRightMessage: false //短信验证码是否正确
		};
	},

	created: function created() {
		var that = this;
		this.registerTop = "http://192.168.1.221/img/registerTop2.jpg";
		this.registerTop1 = "http://192.168.1.221/img/registerTop1.jpg";
		//获取图片验证码
		this.getCodeImg();
		//滚动到按钮位置
		setTimeout(function () {
			var containerEl = that.$refs.registerTop1;
			dom.scrollToElement(containerEl, {});
		}, 1200);
	},

	methods: {
		changePhoneNum: function changePhoneNum(e) {
			// 输入手机号并验证
			this.phoneNum = e.value;
		},
		wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
			console.log(e);
		},
		getCodeImg: function getCodeImg() {
			//获取验证码图片 
			this.lineCode = "69859";
			this.messageImg = "http://192.168.1.221/img/message.jpg";
		},
		changeCode: function changeCode(e) {
			//输入图片验证码 同时校验是否正确
			this.codeImg = e.value;
			if (this.codeImg == this.lineCode) {
				this.isRightCode = true;
			}
		},
		getMessage: function getMessage() {
			//判断图片验证码是否正确，正确就获取短信验证码
			if (this.isRightCode) {
				var that = this;
				that.sendMsgDisabled = true;
				var interval = setInterval(function () {
					if (that.time-- <= 0) {
						that.time = 60;
						that.sendMsgDisabled = false;
						clearInterval(interval);
					}
				}, 1000);
			} else {
				modal.toast({
					message: '图片验证码错误',
					duration: 0.8
				});
			}
		},
		changeMessage: function changeMessage(e) {
			// 输入短信验证码同时校验是否正确
			this.messageCode = e.value;
			if (this.messageCode == this.lineMessage) {
				this.isRightMessage = true;
			}
		},
		actionRegister: function actionRegister() {
			// 注册
			// 判断手机号码格式、图片验证码和短信验证码是否输入 并校验
			if (this.isRightPhone && this.isRightCode && this.isRightMessage) {
				this.reset("/user");
			} else {
				if (!this.isRightPhone) {
					modal.toast({
						message: '请输入正确的手机号',
						duration: 0.8
					});
				} else if (!this.isRightCode) {
					modal.toast({
						message: '请输入正确的图片验证码',
						duration: 0.8
					});
				} else if (!this.isRightMessage) {
					modal.toast({
						message: '短信验证码错误',
						duration: 0.8
					});
				}
			}
		}
	}
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(87)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\node_modules\\_weex-ui@0.6.10@weex-ui\\packages\\wxc-checkbox-list\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(35);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { WxcCheckbox: _index2.default },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      checkedList: []
    };
  },
  created: function created() {
    var _this = this;

    var list = this.list;

    if (list && list.length > 0) {
      list.forEach(function (item, i) {
        item.checked && _this.checkedList.push(item.value);
      });
    }
  },

  methods: {
    wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
      if (e.checked) {
        this.checkedList.push(e.value);
      } else {
        var index = this.checkedList.indexOf(e.value);
        this.checkedList.splice(index, 1);
      }
      this.$emit('wxcCheckBoxListChecked', { checkedList: this.checkedList });
    }
  }
}; //
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
//
//

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "width": "48",
    "height": "48"
  },
  "title-text": {
    "fontSize": "30"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcCell = __webpack_require__(20);

var _wxcCell2 = _interopRequireDefault(_wxcCell);

var _type = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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
//
//
//
//
//
//
//
//

exports.default = {
  components: { WxcCell: _wxcCell2.default },
  props: {
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number, Object],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      icon: [_type.CHECKED, _type.UNCHECKED, _type.CHECKED_DISABLED, _type.UNCHECKED_DISABLED],
      color: '#3D3D3D',
      innerChecked: false
    };
  },
  computed: {
    checkIcon: function checkIcon() {
      var icon = this.icon,
          disabled = this.disabled,
          innerChecked = this.innerChecked,
          config = this.config;

      var mergeIcon = [].concat(_toConsumableArray(icon));
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
      config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
      config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);
      if (disabled) {
        return mergeIcon[innerChecked ? 2 : 3];
      } else {
        return mergeIcon[innerChecked ? 0 : 1];
      }
    },
    textColor: function textColor() {
      var innerChecked = this.innerChecked,
          disabled = this.disabled,
          config = this.config;

      var checkedColor = config.checkedColor ? config.checkedColor : '#EE9900';
      return innerChecked && !disabled ? checkedColor : '#3D3D3D';
    }
  },
  watch: {
    checked: function checked(newChecked) {
      this.innerChecked = newChecked;
    }
  },
  created: function created() {
    var checked = this.checked;

    this.innerChecked = checked;
  },

  methods: {
    wxcCellClicked: function wxcCellClicked() {
      var disabled = this.disabled,
          innerChecked = this.innerChecked,
          value = this.value;

      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.$emit('wxcCheckBoxItemChecked', { value: value, checked: this.innerChecked });
      }
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2017/10/21.
 */

var CHECKED = exports.CHECKED = 'https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';
var UNCHECKED = exports.UNCHECKED = 'https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';
var CHECKED_DISABLED = exports.CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';
var UNCHECKED_DISABLED = exports.UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "hasBottomBorder": _vm.hasBottomBorder,
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.textColor
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["checkbox"],
    attrs: {
      "slot": "value",
      "src": _vm.checkIcon
    },
    slot: "value"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.list), function(item, i) {
    return _c('wxc-checkbox', _vm._b({
      key: i,
      attrs: {
        "config": _vm.config
      },
      on: {
        "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
      }
    }, 'wxc-checkbox', item, false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_c('image', {
    staticClass: ["registerTop1"],
    attrs: {
      "resize": "contain",
      "src": _vm.registerTop1
    }
  }), _c('image', {
    staticClass: ["registerTop"],
    attrs: {
      "resize": "contain",
      "src": _vm.registerTop
    }
  }), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "手机号",
      "maxlength": "11",
      "placeholderColor": "#fff"
    },
    on: {
      "input": _vm.changePhoneNum
    }
  })]), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "验证码",
      "maxlength": "6",
      "placeholderColor": "#fff"
    },
    on: {
      "input": _vm.changeCode
    }
  }), _c('image', {
    staticClass: ["messageImg"],
    attrs: {
      "resize": "contain",
      "src": _vm.messageImg
    },
    on: {
      "click": _vm.getCodeImg
    }
  })]), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "短信验证码",
      "maxlength": "6",
      "placeholderColor": "#fff"
    },
    on: {
      "input": _vm.changeMessage
    }
  }), (_vm.sendMsgDisabled) ? _c('text', {
    staticClass: ["sendMesBtnDisabled"]
  }, [_vm._v(_vm._s(_vm.time + '秒后获取'))]) : _vm._e(), (!_vm.sendMsgDisabled) ? _c('text', {
    staticClass: ["sendMesBtn"],
    on: {
      "click": _vm.getMessage
    }
  }, [_vm._v("获取验证码")]) : _vm._e()]), _c('text', {
    ref: "registerTop1",
    staticClass: ["loginBtn"],
    on: {
      "click": _vm.actionRegister
    }
  }, [_vm._v("立即注册")]), _c('text', {
    staticClass: ["registerNum"]
  }, [_vm._v("44595人已经注册")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(91)

/* template */
var __vue_template__ = __webpack_require__(92)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-358c3dbb"
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
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "flex": 1,
    "width": "750",
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50",
    "backgroundColor": "#FFFFFF"
  },
  "register": {
    "position": "fixed",
    "fontSize": "30",
    "color": "#DA251E",
    "right": "20",
    "top": "20"
  },
  "logo": {
    "width": "480",
    "height": "90",
    "marginTop": "100",
    "marginBottom": "150"
  },
  "forget": {
    "fontSize": "28"
  },
  "readP": {
    "fontSize": "28"
  },
  "inputItem": {
    "height": "60",
    "marginBottom": "80",
    "paddingBottom": "5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc",
    "display": "flex",
    "flexDirection": "row",
    "width": "650",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "5"
  },
  "unIcon": {
    "width": "60",
    "lineHeight": "60",
    "fontSize": "34",
    "textAlign": "center"
  },
  "pwIcon": {
    "width": "60",
    "lineHeight": "60",
    "fontSize": "34",
    "textAlign": "center"
  },
  "loginBtn": {
    "height": "90",
    "borderRadius": "45",
    "width": "650",
    "backgroundColor": "#DA251E",
    "textAlign": "center",
    "lineHeight": "90",
    "color": "#FFFFFF",
    "marginTop": "40",
    "fontSize": "34",
    "marginBottom": "40"
  },
  "input": {
    "flex": 1,
    "height": "60",
    "paddingLeft": "10"
  },
  "aboutPW": {
    "width": "650",
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _wxcCheckboxList = __webpack_require__(34);

var _wxcCheckboxList2 = _interopRequireDefault(_wxcCheckboxList);

var _wxcCheckbox = __webpack_require__(36);

var _wxcCheckbox2 = _interopRequireDefault(_wxcCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		WxcCheckbox: _wxcCheckbox2.default,
		WxcCheckboxList: _wxcCheckboxList2.default
	},
	data: function data() {
		return {
			imagePath: ""
		};
	},

	created: function created() {
		this.imagePath = "http://192.168.1.221/img/logo.png";
	},
	methods: {
		changeUserName: function changeUserName(e) {
			console.log(e);
		}
	}
}; //
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
//
//
//
//
//
//
//
//
//

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["register"],
    on: {
      "click": function($event) {
        _vm.reset('/register')
      }
    }
  }, [_vm._v("注册")]), _c('image', {
    staticClass: ["logo"],
    attrs: {
      "resize": "contain",
      "src": _vm.imagePath
    }
  }), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('text', {
    staticClass: ["iconfont", "unIcon"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "用户名/邮箱"
    },
    on: {
      "input": _vm.changeUserName
    }
  })]), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('text', {
    staticClass: ["iconfont", "pwIcon"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "密码"
    },
    on: {
      "input": _vm.changePassWord
    }
  })]), _c('text', {
    staticClass: ["loginBtn"]
  }, [_vm._v("登录")]), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["aboutPW"]
  }, [_c('text', {
    staticClass: ["readP", "iconfont"]
  }, [_vm._v(" 记住密码")]), _c('text', {
    staticClass: ["forget"]
  }, [_vm._v("忘记密码")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(95)

/* template */
var __vue_template__ = __webpack_require__(96)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\flash.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57a4a2c2"
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
/* 94 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("首次展示页")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(99)

/* template */
var __vue_template__ = __webpack_require__(100)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\startup.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-82e67f62"
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
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "position": "fixed",
    "right": 0,
    "top": 0,
    "left": 0,
    "bottom": 0
  },
  "container": {
    "width": "1500",
    "height": "1000",
    "display": "flex",
    "flexDirection": "row",
    "position": "fixed",
    "left": 0,
    "backgroundColor": "#FFFFFF",
    "bottom": "44"
  },
  "image": {
    "width": "750",
    "height": "1000"
  },
  "loading": {
    "width": "70",
    "height": "70",
    "borderRadius": "35",
    "borderWidth": "5",
    "borderColor": "#BEBEBE",
    "borderStyle": "solid",
    "borderTopColor": "#498aca",
    "position": "fixed",
    "right": "50",
    "top": "50"
  },
  "jump": {
    "position": "fixed",
    "right": "50",
    "top": "50",
    "width": "70",
    "height": "70",
    "lineHeight": "70",
    "fontSize": "24",
    "textAlign": "center"
  }
}

/***/ }),
/* 99 */
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
//

var storage = weex.requireModule('storage');
var animation = weex.requireModule('animation');
exports.default = {
	components: {},
	data: function data() {
		return {
			imagePath1: "http://192.168.1.221/img/star2.jpg",
			imagePath: 'http://192.168.1.221/img/star1.jpg'
		};
	},

	methods: {
		scrollChange: function scrollChange(e) {
			console.log(e);
		},
		jumpHome: function jumpHome() {
			this.reset("/home");
		},
		scanPage: function scanPage() {
			var that = this;

			var testEl = that.$refs.test;
			var containerEl = that.$refs.container;
			animation.transition(testEl, {
				styles: {
					color: '#FF0000',
					transform: 'rotate(360deg)',
					transformOrigin: 'center center'
				},
				duration: 5000, //ms

				delay: 0 //ms
			}, function () {
				// 进入首页
				storage.setItem("isScan", "true", function (event) {
					that.reset("/home");
				});
			});
			setTimeout(function () {
				animation.transition(containerEl, {
					styles: {
						transform: 'translateX(-750px)'
					},
					duration: 500,
					delay: 0
				});
			}, 1200);
		}
	},
	created: function created() {
		var that = this;
		setTimeout(function () {
			//获取缓存判断是否打开过APP
			storage.getItem('isScan', function (event) {
				if (event.result === "success") {
					console.log(event);
					that.reset("/home");
				} else {
					that.scanPage();
				}
			});
		}, 300);
	}
};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    ref: "test",
    staticClass: ["loading"]
  }), _c('div', {
    ref: "container",
    staticClass: ["container"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "contain",
      "src": _vm.imagePath
    }
  }), _c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "contain",
      "src": _vm.imagePath1
    }
  })]), _c('text', {
    staticClass: ["jump"],
    on: {
      "click": _vm.jumpHome
    }
  }, [_vm._v("跳过")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(102)
)

/* script */
__vue_exports__ = __webpack_require__(103)

/* template */
var __vue_template__ = __webpack_require__(104)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\verify.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ad9834d2"
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
/* 102 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flex": 1,
    "backgroundColor": "#f2f2f2",
    "fontSize": "28",
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  "logo": {
    "height": "3239",
    "width": "750",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 103 */
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
      titleName: "认证"
    };
  },

  created: function created() {
    this.imagePath = this.getImagePath("vertify", ".jpg");
  }
}; //
//
//
//
//
//
//
//
//

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navBar', {
    attrs: {
      "title": _vm.titleName
    }
  }), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.imagePath
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(108)
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
__vue_options__.__file = "F:\\Workspace\\weex\\appMS\\src\\pages\\forget.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-78fd35ea"
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
/* 106 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "flex": 1,
    "width": "750",
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50",
    "backgroundColor": "#FFFFFF"
  },
  "register": {
    "position": "fixed",
    "fontSize": "30",
    "color": "#DA251E",
    "right": "20",
    "top": "20"
  },
  "logo": {
    "width": "480",
    "height": "90",
    "marginTop": "100",
    "marginBottom": "150"
  },
  "forget": {
    "fontSize": "28"
  },
  "readP": {
    "fontSize": "28"
  },
  "inputItem": {
    "height": "60",
    "marginBottom": "80",
    "paddingBottom": "5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc",
    "display": "flex",
    "flexDirection": "row",
    "width": "650",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "5"
  },
  "unIcon": {
    "width": "60",
    "lineHeight": "60",
    "fontSize": "34",
    "textAlign": "center"
  },
  "pwIcon": {
    "width": "60",
    "lineHeight": "60",
    "fontSize": "34",
    "textAlign": "center"
  },
  "loginBtn": {
    "height": "90",
    "borderRadius": "45",
    "width": "650",
    "backgroundColor": "#DA251E",
    "textAlign": "center",
    "lineHeight": "90",
    "color": "#FFFFFF",
    "marginTop": "40",
    "fontSize": "34",
    "marginBottom": "40"
  },
  "input": {
    "flex": 1,
    "height": "60",
    "paddingLeft": "10"
  },
  "aboutPW": {
    "width": "650",
    "display": "flex",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "sendMesBtn": {
    "width": "200",
    "textAlign": "center",
    "color": "#666666",
    "borderRadius": "5",
    "height": "60",
    "lineHeight": "60",
    "fontSize": "28"
  },
  "sendMesBtnDisabled": {
    "width": "200",
    "textAlign": "center",
    "color": "#FFFFFF",
    "height": "60",
    "lineHeight": "60",
    "fontSize": "28",
    "backgroundColor": "#cccccc"
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _navBar = __webpack_require__(0);

var _navBar2 = _interopRequireDefault(_navBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
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
//
//

var modal = weex.requireModule('modal');
exports.default = {
	components: {
		navBar: _navBar2.default
	},
	data: function data() {
		return {
			imagePath: "",
			titleName: "更改密码",
			time: 60, // 发送验证码倒计时
			sendMsgDisabled: false
		};
	},

	created: function created() {},
	methods: {
		changeUserName: function changeUserName(e) {
			console.log(e);
		},
		getMessage: function getMessage() {
			//判断手机号是否正确，正确就获取短信验证码
			if (this.isRightPhone) {
				var that = this;
				that.sendMsgDisabled = true;
				var interval = setInterval(function () {
					if (that.time-- <= 0) {
						that.time = 60;
						that.sendMsgDisabled = false;
						clearInterval(interval);
					}
				}, 1000);
			} else {
				modal.toast({
					message: '手机号格式错误',
					duration: 0.8
				});
			}
		}
	}
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navBar', {
    attrs: {
      "title": _vm.titleName
    }
  }), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('text', {
    staticClass: ["iconfont", "unIcon"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "请输入您的手机号"
    },
    on: {
      "input": _vm.changeUserName
    }
  })]), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('text', {
    staticClass: ["iconfont", "unIcon"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "请输入短信验证码",
      "maxlength": "6"
    },
    on: {
      "input": _vm.changeMessage
    }
  }), (_vm.sendMsgDisabled) ? _c('text', {
    staticClass: ["sendMesBtnDisabled"]
  }, [_vm._v(_vm._s(_vm.time + '秒后获取'))]) : _vm._e(), (!_vm.sendMsgDisabled) ? _c('text', {
    staticClass: ["sendMesBtn"],
    on: {
      "click": _vm.getMessage
    }
  }, [_vm._v("获取验证码")]) : _vm._e()]), _c('div', {
    staticClass: ["inputItem"]
  }, [_c('text', {
    staticClass: ["iconfont", "pwIcon"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "placeholder": "请输入您的密码"
    },
    on: {
      "input": _vm.changePassWord
    }
  })]), _c('text', {
    staticClass: ["loginBtn"]
  }, [_vm._v("确定修改")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);