(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Kinto = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"core-js/fn/regexp/escape":26,"core-js/shim":422,"regenerator-runtime/runtime":436}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":27}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":28}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":29}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":30}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":31}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":32}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":33}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":34}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":35}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":36}],12:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":37}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":38}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":39}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _promise = require("../core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
},{"../core-js/promise":12}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":7}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":5}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _getPrototypeOf = require("../core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
},{"../core-js/object/get-own-property-descriptor":8,"../core-js/object/get-prototype-of":9}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":6,"../core-js/object/set-prototype-of":11,"../helpers/typeof":23}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":23}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":2}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":13,"../core-js/symbol/iterator":14}],24:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":435}],25:[function(require,module,exports){

},{}],26:[function(require,module,exports){
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;
},{"../../modules/_core":150,"../../modules/core.regexp.escape":246}],27:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":47,"../../modules/es6.array.from":114,"../../modules/es6.string.iterator":125}],28:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":113,"../modules/es6.string.iterator":125,"../modules/web.dom.iterable":129}],29:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":47}],30:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":47,"../../modules/es6.object.assign":116}],31:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":47,"../../modules/es6.object.create":117}],32:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":47,"../../modules/es6.object.define-property":118}],33:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};
},{"../../modules/_core":47,"../../modules/es6.object.get-own-property-descriptor":119}],34:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":47,"../../modules/es6.object.get-prototype-of":120}],35:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":47,"../../modules/es6.object.keys":121}],36:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":47,"../../modules/es6.object.set-prototype-of":122}],37:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":47,"../modules/es6.object.to-string":123,"../modules/es6.promise":124,"../modules/es6.string.iterator":125,"../modules/web.dom.iterable":129}],38:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":47,"../../modules/es6.object.to-string":123,"../../modules/es6.symbol":126,"../../modules/es7.symbol.async-iterator":127,"../../modules/es7.symbol.observable":128}],39:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":110,"../../modules/es6.string.iterator":125,"../../modules/web.dom.iterable":129}],40:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],41:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],42:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],43:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":67}],44:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":102,"./_to-iobject":104,"./_to-length":105}],45:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":46,"./_wks":111}],46:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],47:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],48:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":80,"./_property-desc":91}],49:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":40}],50:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],51:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":56}],52:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":58,"./_is-object":67}],53:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],54:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":85,"./_object-keys":88,"./_object-pie":89}],55:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":47,"./_ctx":49,"./_global":58,"./_hide":60}],56:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],57:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":43,"./_ctx":49,"./_is-array-iter":65,"./_iter-call":68,"./_to-length":105,"./core.get-iterator-method":112}],58:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],59:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],60:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":51,"./_object-dp":80,"./_property-desc":91}],61:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":58}],62:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":51,"./_dom-create":52,"./_fails":56}],63:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],64:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":46}],65:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":73,"./_wks":111}],66:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":46}],67:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],68:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":43}],69:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":60,"./_object-create":79,"./_property-desc":91,"./_set-to-string-tag":96,"./_wks":111}],70:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":55,"./_has":59,"./_hide":60,"./_iter-create":69,"./_iterators":73,"./_library":75,"./_object-gpo":86,"./_redefine":93,"./_set-to-string-tag":96,"./_wks":111}],71:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":111}],72:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],73:[function(require,module,exports){
module.exports = {};
},{}],74:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":88,"./_to-iobject":104}],75:[function(require,module,exports){
module.exports = true;
},{}],76:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":56,"./_has":59,"./_is-object":67,"./_object-dp":80,"./_uid":108}],77:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":46,"./_global":58,"./_task":101}],78:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":56,"./_iobject":64,"./_object-gops":85,"./_object-keys":88,"./_object-pie":89,"./_to-object":106}],79:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":43,"./_dom-create":52,"./_enum-bug-keys":53,"./_html":61,"./_object-dps":81,"./_shared-key":97}],80:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":43,"./_descriptors":51,"./_ie8-dom-define":62,"./_to-primitive":107}],81:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":43,"./_descriptors":51,"./_object-dp":80,"./_object-keys":88}],82:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":51,"./_has":59,"./_ie8-dom-define":62,"./_object-pie":89,"./_property-desc":91,"./_to-iobject":104,"./_to-primitive":107}],83:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":84,"./_to-iobject":104}],84:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":53,"./_object-keys-internal":87}],85:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],86:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":59,"./_shared-key":97,"./_to-object":106}],87:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":44,"./_has":59,"./_shared-key":97,"./_to-iobject":104}],88:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":53,"./_object-keys-internal":87}],89:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],90:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":47,"./_export":55,"./_fails":56}],91:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],92:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":60}],93:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":60}],94:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":43,"./_ctx":49,"./_is-object":67,"./_object-gopd":82}],95:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":47,"./_descriptors":51,"./_global":58,"./_object-dp":80,"./_wks":111}],96:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":59,"./_object-dp":80,"./_wks":111}],97:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":98,"./_uid":108}],98:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":58}],99:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":40,"./_an-object":43,"./_wks":111}],100:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":50,"./_to-integer":103}],101:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":46,"./_ctx":49,"./_dom-create":52,"./_global":58,"./_html":61,"./_invoke":63}],102:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":103}],103:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],104:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":50,"./_iobject":64}],105:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":103}],106:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":50}],107:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":67}],108:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],109:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":47,"./_global":58,"./_library":75,"./_object-dp":80,"./_wks-ext":110}],110:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":111}],111:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":58,"./_shared":98,"./_uid":108}],112:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":45,"./_core":47,"./_iterators":73,"./_wks":111}],113:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":43,"./_core":47,"./core.get-iterator-method":112}],114:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":48,"./_ctx":49,"./_export":55,"./_is-array-iter":65,"./_iter-call":68,"./_iter-detect":71,"./_to-length":105,"./_to-object":106,"./core.get-iterator-method":112}],115:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":41,"./_iter-define":70,"./_iter-step":72,"./_iterators":73,"./_to-iobject":104}],116:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":55,"./_object-assign":78}],117:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":55,"./_object-create":79}],118:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":51,"./_export":55,"./_object-dp":80}],119:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = require('./_to-iobject')
  , $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./_object-gopd":82,"./_object-sap":90,"./_to-iobject":104}],120:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":86,"./_object-sap":90,"./_to-object":106}],121:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":88,"./_object-sap":90,"./_to-object":106}],122:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":55,"./_set-proto":94}],123:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],124:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":40,"./_an-instance":42,"./_classof":45,"./_core":47,"./_ctx":49,"./_export":55,"./_for-of":57,"./_global":58,"./_is-object":67,"./_iter-detect":71,"./_library":75,"./_microtask":77,"./_redefine-all":92,"./_set-species":95,"./_set-to-string-tag":96,"./_species-constructor":99,"./_task":101,"./_wks":111}],125:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":70,"./_string-at":100}],126:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":43,"./_descriptors":51,"./_enum-keys":54,"./_export":55,"./_fails":56,"./_global":58,"./_has":59,"./_hide":60,"./_is-array":66,"./_keyof":74,"./_library":75,"./_meta":76,"./_object-create":79,"./_object-dp":80,"./_object-gopd":82,"./_object-gopn":84,"./_object-gopn-ext":83,"./_object-gops":85,"./_object-keys":88,"./_object-pie":89,"./_property-desc":91,"./_redefine":93,"./_set-to-string-tag":96,"./_shared":98,"./_to-iobject":104,"./_to-primitive":107,"./_uid":108,"./_wks":111,"./_wks-define":109,"./_wks-ext":110}],127:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":109}],128:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":109}],129:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":58,"./_hide":60,"./_iterators":73,"./_wks":111,"./es6.array.iterator":115}],130:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40}],131:[function(require,module,exports){
var cof = require('./_cof');
module.exports = function(it, msg){
  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
  return +it;
};
},{"./_cof":145}],132:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables')
  , ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined)require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};
},{"./_hide":167,"./_wks":244}],133:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],134:[function(require,module,exports){
arguments[4][43][0].apply(exports,arguments)
},{"./_is-object":176,"dup":43}],135:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object')
  , toIndex  = require('./_to-index')
  , toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = toIndex(target, len)
    , from  = toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};
},{"./_to-index":232,"./_to-length":235,"./_to-object":236}],136:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object')
  , toIndex  = require('./_to-index')
  , toLength = require('./_to-length');
module.exports = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};
},{"./_to-index":232,"./_to-length":235,"./_to-object":236}],137:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":164}],138:[function(require,module,exports){
arguments[4][44][0].apply(exports,arguments)
},{"./_to-index":232,"./_to-iobject":234,"./_to-length":235,"dup":44}],139:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":142,"./_ctx":152,"./_iobject":172,"./_to-length":235,"./_to-object":236}],140:[function(require,module,exports){
var aFunction = require('./_a-function')
  , toObject  = require('./_to-object')
  , IObject   = require('./_iobject')
  , toLength  = require('./_to-length');

module.exports = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};
},{"./_a-function":130,"./_iobject":172,"./_to-length":235,"./_to-object":236}],141:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":174,"./_is-object":176,"./_wks":244}],142:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":141}],143:[function(require,module,exports){
'use strict';
var aFunction  = require('./_a-function')
  , isObject   = require('./_is-object')
  , invoke     = require('./_invoke')
  , arraySlice = [].slice
  , factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};
},{"./_a-function":130,"./_invoke":171,"./_is-object":176}],144:[function(require,module,exports){
arguments[4][45][0].apply(exports,arguments)
},{"./_cof":145,"./_wks":244,"dup":45}],145:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"dup":46}],146:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":133,"./_ctx":152,"./_defined":154,"./_descriptors":155,"./_for-of":164,"./_iter-define":180,"./_iter-step":182,"./_meta":189,"./_object-create":193,"./_object-dp":194,"./_redefine-all":213,"./_set-species":218}],147:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":137,"./_classof":144}],148:[function(require,module,exports){
'use strict';
var redefineAll       = require('./_redefine-all')
  , getWeak           = require('./_meta').getWeak
  , anObject          = require('./_an-object')
  , isObject          = require('./_is-object')
  , anInstance        = require('./_an-instance')
  , forOf             = require('./_for-of')
  , createArrayMethod = require('./_array-methods')
  , $has              = require('./_has')
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
},{"./_an-instance":133,"./_an-object":134,"./_array-methods":139,"./_for-of":164,"./_has":166,"./_is-object":176,"./_meta":189,"./_redefine-all":213}],149:[function(require,module,exports){
'use strict';
var global            = require('./_global')
  , $export           = require('./_export')
  , redefine          = require('./_redefine')
  , redefineAll       = require('./_redefine-all')
  , meta              = require('./_meta')
  , forOf             = require('./_for-of')
  , anInstance        = require('./_an-instance')
  , isObject          = require('./_is-object')
  , fails             = require('./_fails')
  , $iterDetect       = require('./_iter-detect')
  , setToStringTag    = require('./_set-to-string-tag')
  , inheritIfRequired = require('./_inherit-if-required');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":133,"./_export":159,"./_fails":161,"./_for-of":164,"./_global":165,"./_inherit-if-required":170,"./_is-object":176,"./_iter-detect":181,"./_meta":189,"./_redefine":214,"./_redefine-all":213,"./_set-to-string-tag":219}],150:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"dup":47}],151:[function(require,module,exports){
arguments[4][48][0].apply(exports,arguments)
},{"./_object-dp":194,"./_property-desc":212,"dup":48}],152:[function(require,module,exports){
arguments[4][49][0].apply(exports,arguments)
},{"./_a-function":130,"dup":49}],153:[function(require,module,exports){
'use strict';
var anObject    = require('./_an-object')
  , toPrimitive = require('./_to-primitive')
  , NUMBER      = 'number';

module.exports = function(hint){
  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};
},{"./_an-object":134,"./_to-primitive":237}],154:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50}],155:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"./_fails":161,"dup":51}],156:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"./_global":165,"./_is-object":176,"dup":52}],157:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],158:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"./_object-gops":200,"./_object-keys":203,"./_object-pie":204,"dup":54}],159:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , hide      = require('./_hide')
  , redefine  = require('./_redefine')
  , ctx       = require('./_ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":150,"./_ctx":152,"./_global":165,"./_hide":167,"./_redefine":214}],160:[function(require,module,exports){
var MATCH = require('./_wks')('match');
module.exports = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};
},{"./_wks":244}],161:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"dup":56}],162:[function(require,module,exports){
'use strict';
var hide     = require('./_hide')
  , redefine = require('./_redefine')
  , fails    = require('./_fails')
  , defined  = require('./_defined')
  , wks      = require('./_wks');

module.exports = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};
},{"./_defined":154,"./_fails":161,"./_hide":167,"./_redefine":214,"./_wks":244}],163:[function(require,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};
},{"./_an-object":134}],164:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"./_an-object":134,"./_ctx":152,"./_is-array-iter":173,"./_iter-call":178,"./_to-length":235,"./core.get-iterator-method":245,"dup":57}],165:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"dup":58}],166:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"dup":59}],167:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"./_descriptors":155,"./_object-dp":194,"./_property-desc":212,"dup":60}],168:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"./_global":165,"dup":61}],169:[function(require,module,exports){
arguments[4][62][0].apply(exports,arguments)
},{"./_descriptors":155,"./_dom-create":156,"./_fails":161,"dup":62}],170:[function(require,module,exports){
var isObject       = require('./_is-object')
  , setPrototypeOf = require('./_set-proto').set;
module.exports = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};
},{"./_is-object":176,"./_set-proto":217}],171:[function(require,module,exports){
arguments[4][63][0].apply(exports,arguments)
},{"dup":63}],172:[function(require,module,exports){
arguments[4][64][0].apply(exports,arguments)
},{"./_cof":145,"dup":64}],173:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"./_iterators":183,"./_wks":244,"dup":65}],174:[function(require,module,exports){
arguments[4][66][0].apply(exports,arguments)
},{"./_cof":145,"dup":66}],175:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object')
  , floor    = Math.floor;
module.exports = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
};
},{"./_is-object":176}],176:[function(require,module,exports){
arguments[4][67][0].apply(exports,arguments)
},{"dup":67}],177:[function(require,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object')
  , cof      = require('./_cof')
  , MATCH    = require('./_wks')('match');
module.exports = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};
},{"./_cof":145,"./_is-object":176,"./_wks":244}],178:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"./_an-object":134,"dup":68}],179:[function(require,module,exports){
arguments[4][69][0].apply(exports,arguments)
},{"./_hide":167,"./_object-create":193,"./_property-desc":212,"./_set-to-string-tag":219,"./_wks":244,"dup":69}],180:[function(require,module,exports){
arguments[4][70][0].apply(exports,arguments)
},{"./_export":159,"./_has":166,"./_hide":167,"./_iter-create":179,"./_iterators":183,"./_library":185,"./_object-gpo":201,"./_redefine":214,"./_set-to-string-tag":219,"./_wks":244,"dup":70}],181:[function(require,module,exports){
arguments[4][71][0].apply(exports,arguments)
},{"./_wks":244,"dup":71}],182:[function(require,module,exports){
arguments[4][72][0].apply(exports,arguments)
},{"dup":72}],183:[function(require,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"dup":73}],184:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"./_object-keys":203,"./_to-iobject":234,"dup":74}],185:[function(require,module,exports){
module.exports = false;
},{}],186:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;
},{}],187:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};
},{}],188:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};
},{}],189:[function(require,module,exports){
arguments[4][76][0].apply(exports,arguments)
},{"./_fails":161,"./_has":166,"./_is-object":176,"./_object-dp":194,"./_uid":241,"dup":76}],190:[function(require,module,exports){
var Map     = require('./es6.map')
  , $export = require('./_export')
  , shared  = require('./_shared')('metadata')
  , store   = shared.store || (shared.store = new (require('./es6.weak-map')));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function(O){
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};
},{"./_export":159,"./_shared":221,"./es6.map":276,"./es6.weak-map":382}],191:[function(require,module,exports){
arguments[4][77][0].apply(exports,arguments)
},{"./_cof":145,"./_global":165,"./_task":231,"dup":77}],192:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"./_fails":161,"./_iobject":172,"./_object-gops":200,"./_object-keys":203,"./_object-pie":204,"./_to-object":236,"dup":78}],193:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"./_an-object":134,"./_dom-create":156,"./_enum-bug-keys":157,"./_html":168,"./_object-dps":195,"./_shared-key":220,"dup":79}],194:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"./_an-object":134,"./_descriptors":155,"./_ie8-dom-define":169,"./_to-primitive":237,"dup":80}],195:[function(require,module,exports){
arguments[4][81][0].apply(exports,arguments)
},{"./_an-object":134,"./_descriptors":155,"./_object-dp":194,"./_object-keys":203,"dup":81}],196:[function(require,module,exports){
// Forced replacement prototype accessors methods
module.exports = require('./_library')|| !require('./_fails')(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete require('./_global')[K];
});
},{"./_fails":161,"./_global":165,"./_library":185}],197:[function(require,module,exports){
arguments[4][82][0].apply(exports,arguments)
},{"./_descriptors":155,"./_has":166,"./_ie8-dom-define":169,"./_object-pie":204,"./_property-desc":212,"./_to-iobject":234,"./_to-primitive":237,"dup":82}],198:[function(require,module,exports){
arguments[4][83][0].apply(exports,arguments)
},{"./_object-gopn":199,"./_to-iobject":234,"dup":83}],199:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"./_enum-bug-keys":157,"./_object-keys-internal":202,"dup":84}],200:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"dup":85}],201:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"./_has":166,"./_shared-key":220,"./_to-object":236,"dup":86}],202:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"./_array-includes":138,"./_has":166,"./_shared-key":220,"./_to-iobject":234,"dup":87}],203:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"./_enum-bug-keys":157,"./_object-keys-internal":202,"dup":88}],204:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"dup":89}],205:[function(require,module,exports){
arguments[4][90][0].apply(exports,arguments)
},{"./_core":150,"./_export":159,"./_fails":161,"dup":90}],206:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject')
  , isEnum    = require('./_object-pie').f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./_object-keys":203,"./_object-pie":204,"./_to-iobject":234}],207:[function(require,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN     = require('./_object-gopn')
  , gOPS     = require('./_object-gops')
  , anObject = require('./_an-object')
  , Reflect  = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
  var keys       = gOPN.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./_an-object":134,"./_global":165,"./_object-gopn":199,"./_object-gops":200}],208:[function(require,module,exports){
var $parseFloat = require('./_global').parseFloat
  , $trim       = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;
},{"./_global":165,"./_string-trim":229,"./_string-ws":230}],209:[function(require,module,exports){
var $parseInt = require('./_global').parseInt
  , $trim     = require('./_string-trim').trim
  , ws        = require('./_string-ws')
  , hex       = /^[\-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;
},{"./_global":165,"./_string-trim":229,"./_string-ws":230}],210:[function(require,module,exports){
'use strict';
var path      = require('./_path')
  , invoke    = require('./_invoke')
  , aFunction = require('./_a-function');
module.exports = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./_a-function":130,"./_invoke":171,"./_path":211}],211:[function(require,module,exports){
module.exports = require('./_global');
},{"./_global":165}],212:[function(require,module,exports){
arguments[4][91][0].apply(exports,arguments)
},{"dup":91}],213:[function(require,module,exports){
var redefine = require('./_redefine');
module.exports = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};
},{"./_redefine":214}],214:[function(require,module,exports){
var global    = require('./_global')
  , hide      = require('./_hide')
  , has       = require('./_has')
  , SRC       = require('./_uid')('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
},{"./_core":150,"./_global":165,"./_has":166,"./_hide":167,"./_uid":241}],215:[function(require,module,exports){
module.exports = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};
},{}],216:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],217:[function(require,module,exports){
arguments[4][94][0].apply(exports,arguments)
},{"./_an-object":134,"./_ctx":152,"./_is-object":176,"./_object-gopd":197,"dup":94}],218:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_descriptors":155,"./_global":165,"./_object-dp":194,"./_wks":244}],219:[function(require,module,exports){
arguments[4][96][0].apply(exports,arguments)
},{"./_has":166,"./_object-dp":194,"./_wks":244,"dup":96}],220:[function(require,module,exports){
arguments[4][97][0].apply(exports,arguments)
},{"./_shared":221,"./_uid":241,"dup":97}],221:[function(require,module,exports){
arguments[4][98][0].apply(exports,arguments)
},{"./_global":165,"dup":98}],222:[function(require,module,exports){
arguments[4][99][0].apply(exports,arguments)
},{"./_a-function":130,"./_an-object":134,"./_wks":244,"dup":99}],223:[function(require,module,exports){
var fails = require('./_fails');

module.exports = function(method, arg){
  return !!method && fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};
},{"./_fails":161}],224:[function(require,module,exports){
arguments[4][100][0].apply(exports,arguments)
},{"./_defined":154,"./_to-integer":233,"dup":100}],225:[function(require,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp')
  , defined  = require('./_defined');

module.exports = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};
},{"./_defined":154,"./_is-regexp":177}],226:[function(require,module,exports){
var $export = require('./_export')
  , fails   = require('./_fails')
  , defined = require('./_defined')
  , quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};
},{"./_defined":154,"./_export":159,"./_fails":161}],227:[function(require,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length')
  , repeat   = require('./_string-repeat')
  , defined  = require('./_defined');

module.exports = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":154,"./_string-repeat":228,"./_to-length":235}],228:[function(require,module,exports){
'use strict';
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');

module.exports = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./_defined":154,"./_to-integer":233}],229:[function(require,module,exports){
var $export = require('./_export')
  , defined = require('./_defined')
  , fails   = require('./_fails')
  , spaces  = require('./_string-ws')
  , space   = '[' + spaces + ']'
  , non     = '\u200b\u0085'
  , ltrim   = RegExp('^' + space + space + '*')
  , rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;
},{"./_defined":154,"./_export":159,"./_fails":161,"./_string-ws":230}],230:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
},{}],231:[function(require,module,exports){
arguments[4][101][0].apply(exports,arguments)
},{"./_cof":145,"./_ctx":152,"./_dom-create":156,"./_global":165,"./_html":168,"./_invoke":171,"dup":101}],232:[function(require,module,exports){
arguments[4][102][0].apply(exports,arguments)
},{"./_to-integer":233,"dup":102}],233:[function(require,module,exports){
arguments[4][103][0].apply(exports,arguments)
},{"dup":103}],234:[function(require,module,exports){
arguments[4][104][0].apply(exports,arguments)
},{"./_defined":154,"./_iobject":172,"dup":104}],235:[function(require,module,exports){
arguments[4][105][0].apply(exports,arguments)
},{"./_to-integer":233,"dup":105}],236:[function(require,module,exports){
arguments[4][106][0].apply(exports,arguments)
},{"./_defined":154,"dup":106}],237:[function(require,module,exports){
arguments[4][107][0].apply(exports,arguments)
},{"./_is-object":176,"dup":107}],238:[function(require,module,exports){
'use strict';
if(require('./_descriptors')){
  var LIBRARY             = require('./_library')
    , global              = require('./_global')
    , fails               = require('./_fails')
    , $export             = require('./_export')
    , $typed              = require('./_typed')
    , $buffer             = require('./_typed-buffer')
    , ctx                 = require('./_ctx')
    , anInstance          = require('./_an-instance')
    , propertyDesc        = require('./_property-desc')
    , hide                = require('./_hide')
    , redefineAll         = require('./_redefine-all')
    , toInteger           = require('./_to-integer')
    , toLength            = require('./_to-length')
    , toIndex             = require('./_to-index')
    , toPrimitive         = require('./_to-primitive')
    , has                 = require('./_has')
    , same                = require('./_same-value')
    , classof             = require('./_classof')
    , isObject            = require('./_is-object')
    , toObject            = require('./_to-object')
    , isArrayIter         = require('./_is-array-iter')
    , create              = require('./_object-create')
    , getPrototypeOf      = require('./_object-gpo')
    , gOPN                = require('./_object-gopn').f
    , getIterFn           = require('./core.get-iterator-method')
    , uid                 = require('./_uid')
    , wks                 = require('./_wks')
    , createArrayMethod   = require('./_array-methods')
    , createArrayIncludes = require('./_array-includes')
    , speciesConstructor  = require('./_species-constructor')
    , ArrayIterators      = require('./es6.array.iterator')
    , Iterators           = require('./_iterators')
    , $iterDetect         = require('./_iter-detect')
    , setSpecies          = require('./_set-species')
    , arrayFill           = require('./_array-fill')
    , arrayCopyWithin     = require('./_array-copy-within')
    , $DP                 = require('./_object-dp')
    , $GOPD               = require('./_object-gopd')
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    }
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true)
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
},{"./_an-instance":133,"./_array-copy-within":135,"./_array-fill":136,"./_array-includes":138,"./_array-methods":139,"./_classof":144,"./_ctx":152,"./_descriptors":155,"./_export":159,"./_fails":161,"./_global":165,"./_has":166,"./_hide":167,"./_is-array-iter":173,"./_is-object":176,"./_iter-detect":181,"./_iterators":183,"./_library":185,"./_object-create":193,"./_object-dp":194,"./_object-gopd":197,"./_object-gopn":199,"./_object-gpo":201,"./_property-desc":212,"./_redefine-all":213,"./_same-value":216,"./_set-species":218,"./_species-constructor":222,"./_to-index":232,"./_to-integer":233,"./_to-length":235,"./_to-object":236,"./_to-primitive":237,"./_typed":240,"./_typed-buffer":239,"./_uid":241,"./_wks":244,"./core.get-iterator-method":245,"./es6.array.iterator":257}],239:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , DESCRIPTORS    = require('./_descriptors')
  , LIBRARY        = require('./_library')
  , $typed         = require('./_typed')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , fails          = require('./_fails')
  , anInstance     = require('./_an-instance')
  , toInteger      = require('./_to-integer')
  , toLength       = require('./_to-length')
  , gOPN           = require('./_object-gopn').f
  , dP             = require('./_object-dp').f
  , arrayFill      = require('./_array-fill')
  , setToStringTag = require('./_set-to-string-tag')
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value)
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    };
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
},{"./_an-instance":133,"./_array-fill":136,"./_descriptors":155,"./_fails":161,"./_global":165,"./_hide":167,"./_library":185,"./_object-dp":194,"./_object-gopn":199,"./_redefine-all":213,"./_set-to-string-tag":219,"./_to-integer":233,"./_to-length":235,"./_typed":240}],240:[function(require,module,exports){
var global = require('./_global')
  , hide   = require('./_hide')
  , uid    = require('./_uid')
  , TYPED  = uid('typed_array')
  , VIEW   = uid('view')
  , ABV    = !!(global.ArrayBuffer && global.DataView)
  , CONSTR = ABV
  , i = 0, l = 9, Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i < l){
  if(Typed = global[TypedArrayConstructors[i++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW
};
},{"./_global":165,"./_hide":167,"./_uid":241}],241:[function(require,module,exports){
arguments[4][108][0].apply(exports,arguments)
},{"dup":108}],242:[function(require,module,exports){
arguments[4][109][0].apply(exports,arguments)
},{"./_core":150,"./_global":165,"./_library":185,"./_object-dp":194,"./_wks-ext":243,"dup":109}],243:[function(require,module,exports){
arguments[4][110][0].apply(exports,arguments)
},{"./_wks":244,"dup":110}],244:[function(require,module,exports){
arguments[4][111][0].apply(exports,arguments)
},{"./_global":165,"./_shared":221,"./_uid":241,"dup":111}],245:[function(require,module,exports){
arguments[4][112][0].apply(exports,arguments)
},{"./_classof":144,"./_core":150,"./_iterators":183,"./_wks":244,"dup":112}],246:[function(require,module,exports){
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export')
  , $re     = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

},{"./_export":159,"./_replacer":215}],247:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {copyWithin: require('./_array-copy-within')});

require('./_add-to-unscopables')('copyWithin');
},{"./_add-to-unscopables":132,"./_array-copy-within":135,"./_export":159}],248:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $every  = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":139,"./_export":159,"./_strict-method":223}],249:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {fill: require('./_array-fill')});

require('./_add-to-unscopables')('fill');
},{"./_add-to-unscopables":132,"./_array-fill":136,"./_export":159}],250:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":139,"./_export":159,"./_strict-method":223}],251:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export')
  , $find   = require('./_array-methods')(6)
  , KEY     = 'findIndex'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":132,"./_array-methods":139,"./_export":159}],252:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export')
  , $find   = require('./_array-methods')(5)
  , KEY     = 'find'
  , forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);
},{"./_add-to-unscopables":132,"./_array-methods":139,"./_export":159}],253:[function(require,module,exports){
'use strict';
var $export  = require('./_export')
  , $forEach = require('./_array-methods')(0)
  , STRICT   = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":139,"./_export":159,"./_strict-method":223}],254:[function(require,module,exports){
arguments[4][114][0].apply(exports,arguments)
},{"./_create-property":151,"./_ctx":152,"./_export":159,"./_is-array-iter":173,"./_iter-call":178,"./_iter-detect":181,"./_to-length":235,"./_to-object":236,"./core.get-iterator-method":245,"dup":114}],255:[function(require,module,exports){
'use strict';
var $export       = require('./_export')
  , $indexOf      = require('./_array-includes')(false)
  , $native       = [].indexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});
},{"./_array-includes":138,"./_export":159,"./_strict-method":223}],256:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', {isArray: require('./_is-array')});
},{"./_export":159,"./_is-array":174}],257:[function(require,module,exports){
arguments[4][115][0].apply(exports,arguments)
},{"./_add-to-unscopables":132,"./_iter-define":180,"./_iter-step":182,"./_iterators":183,"./_to-iobject":234,"dup":115}],258:[function(require,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export   = require('./_export')
  , toIObject = require('./_to-iobject')
  , arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});
},{"./_export":159,"./_iobject":172,"./_strict-method":223,"./_to-iobject":234}],259:[function(require,module,exports){
'use strict';
var $export       = require('./_export')
  , toIObject     = require('./_to-iobject')
  , toInteger     = require('./_to-integer')
  , toLength      = require('./_to-length')
  , $native       = [].lastIndexOf
  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});
},{"./_export":159,"./_strict-method":223,"./_to-integer":233,"./_to-iobject":234,"./_to-length":235}],260:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $map    = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":139,"./_export":159,"./_strict-method":223}],261:[function(require,module,exports){
'use strict';
var $export        = require('./_export')
  , createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});
},{"./_create-property":151,"./_export":159,"./_fails":161}],262:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});
},{"./_array-reduce":140,"./_export":159,"./_strict-method":223}],263:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});
},{"./_array-reduce":140,"./_export":159,"./_strict-method":223}],264:[function(require,module,exports){
'use strict';
var $export    = require('./_export')
  , html       = require('./_html')
  , cof        = require('./_cof')
  , toIndex    = require('./_to-index')
  , toLength   = require('./_to-length')
  , arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function(){
  if(html)arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});
},{"./_cof":145,"./_export":159,"./_fails":161,"./_html":168,"./_to-index":232,"./_to-length":235}],265:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $some   = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});
},{"./_array-methods":139,"./_export":159,"./_strict-method":223}],266:[function(require,module,exports){
'use strict';
var $export   = require('./_export')
  , aFunction = require('./_a-function')
  , toObject  = require('./_to-object')
  , fails     = require('./_fails')
  , $sort     = [].sort
  , test      = [1, 2, 3];

$export($export.P + $export.F * (fails(function(){
  // IE8-
  test.sort(undefined);
}) || !fails(function(){
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});
},{"./_a-function":130,"./_export":159,"./_fails":161,"./_strict-method":223,"./_to-object":236}],267:[function(require,module,exports){
require('./_set-species')('Array');
},{"./_set-species":218}],268:[function(require,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});
},{"./_export":159}],269:[function(require,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export')
  , fails   = require('./_fails')
  , getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});
},{"./_export":159,"./_fails":161}],270:[function(require,module,exports){
'use strict';
var $export     = require('./_export')
  , toObject    = require('./_to-object')
  , toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});
},{"./_export":159,"./_fails":161,"./_to-object":236,"./_to-primitive":237}],271:[function(require,module,exports){
var TO_PRIMITIVE = require('./_wks')('toPrimitive')
  , proto        = Date.prototype;

if(!(TO_PRIMITIVE in proto))require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));
},{"./_date-to-primitive":153,"./_hide":167,"./_wks":244}],272:[function(require,module,exports){
var DateProto    = Date.prototype
  , INVALID_DATE = 'Invalid Date'
  , TO_STRING    = 'toString'
  , $toString    = DateProto[TO_STRING]
  , getTime      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  require('./_redefine')(DateProto, TO_STRING, function toString(){
    var value = getTime.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}
},{"./_redefine":214}],273:[function(require,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', {bind: require('./_bind')});
},{"./_bind":143,"./_export":159}],274:[function(require,module,exports){
'use strict';
var isObject       = require('./_is-object')
  , getPrototypeOf = require('./_object-gpo')
  , HAS_INSTANCE   = require('./_wks')('hasInstance')
  , FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))require('./_object-dp').f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});
},{"./_is-object":176,"./_object-dp":194,"./_object-gpo":201,"./_wks":244}],275:[function(require,module,exports){
var dP         = require('./_object-dp').f
  , createDesc = require('./_property-desc')
  , has        = require('./_has')
  , FProto     = Function.prototype
  , nameRE     = /^\s*function ([^ (]*)/
  , NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});
},{"./_descriptors":155,"./_has":166,"./_object-dp":194,"./_property-desc":212}],276:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":149,"./_collection-strong":146}],277:[function(require,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export')
  , log1p   = require('./_math-log1p')
  , sqrt    = Math.sqrt
  , $acosh  = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});
},{"./_export":159,"./_math-log1p":187}],278:[function(require,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export')
  , $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});
},{"./_export":159}],279:[function(require,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export')
  , $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});
},{"./_export":159}],280:[function(require,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export')
  , sign    = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});
},{"./_export":159,"./_math-sign":188}],281:[function(require,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});
},{"./_export":159}],282:[function(require,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export')
  , exp     = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});
},{"./_export":159}],283:[function(require,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export')
  , $expm1  = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});
},{"./_export":159,"./_math-expm1":186}],284:[function(require,module,exports){
// 20.2.2.16 Math.fround(x)
var $export   = require('./_export')
  , sign      = require('./_math-sign')
  , pow       = Math.pow
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export($export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});
},{"./_export":159,"./_math-sign":188}],285:[function(require,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export')
  , abs     = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});
},{"./_export":159}],286:[function(require,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export')
  , $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});
},{"./_export":159,"./_fails":161}],287:[function(require,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});
},{"./_export":159}],288:[function(require,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', {log1p: require('./_math-log1p')});
},{"./_export":159,"./_math-log1p":187}],289:[function(require,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
},{"./_export":159}],290:[function(require,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', {sign: require('./_math-sign')});
},{"./_export":159,"./_math-sign":188}],291:[function(require,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export')
  , expm1   = require('./_math-expm1')
  , exp     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});
},{"./_export":159,"./_fails":161,"./_math-expm1":186}],292:[function(require,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export')
  , expm1   = require('./_math-expm1')
  , exp     = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});
},{"./_export":159,"./_math-expm1":186}],293:[function(require,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});
},{"./_export":159}],294:[function(require,module,exports){
'use strict';
var global            = require('./_global')
  , has               = require('./_has')
  , cof               = require('./_cof')
  , inheritIfRequired = require('./_inherit-if-required')
  , toPrimitive       = require('./_to-primitive')
  , fails             = require('./_fails')
  , gOPN              = require('./_object-gopn').f
  , gOPD              = require('./_object-gopd').f
  , dP                = require('./_object-dp').f
  , $trim             = require('./_string-trim').trim
  , NUMBER            = 'Number'
  , $Number           = global[NUMBER]
  , Base              = $Number
  , proto             = $Number.prototype
  // Opera ~12 has broken Object#toString
  , BROKEN_COF        = cof(require('./_object-create')(proto)) == NUMBER
  , TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}
},{"./_cof":145,"./_descriptors":155,"./_fails":161,"./_global":165,"./_has":166,"./_inherit-if-required":170,"./_object-create":193,"./_object-dp":194,"./_object-gopd":197,"./_object-gopn":199,"./_redefine":214,"./_string-trim":229,"./_to-primitive":237}],295:[function(require,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});
},{"./_export":159}],296:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export   = require('./_export')
  , _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});
},{"./_export":159,"./_global":165}],297:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', {isInteger: require('./_is-integer')});
},{"./_export":159,"./_is-integer":175}],298:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});
},{"./_export":159}],299:[function(require,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export   = require('./_export')
  , isInteger = require('./_is-integer')
  , abs       = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});
},{"./_export":159,"./_is-integer":175}],300:[function(require,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});
},{"./_export":159}],301:[function(require,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});
},{"./_export":159}],302:[function(require,module,exports){
var $export     = require('./_export')
  , $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});
},{"./_export":159,"./_parse-float":208}],303:[function(require,module,exports){
var $export   = require('./_export')
  , $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});
},{"./_export":159,"./_parse-int":209}],304:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , toInteger    = require('./_to-integer')
  , aNumberValue = require('./_a-number-value')
  , repeat       = require('./_string-repeat')
  , $toFixed     = 1..toFixed
  , floor        = Math.floor
  , data         = [0, 0, 0, 0, 0, 0]
  , ERROR        = 'Number.toFixed: incorrect invocation!'
  , ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});
},{"./_a-number-value":131,"./_export":159,"./_fails":161,"./_string-repeat":228,"./_to-integer":233}],305:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , $fails       = require('./_fails')
  , aNumberValue = require('./_a-number-value')
  , $toPrecision = 1..toPrecision;

$export($export.P + $export.F * ($fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});
},{"./_a-number-value":131,"./_export":159,"./_fails":161}],306:[function(require,module,exports){
arguments[4][116][0].apply(exports,arguments)
},{"./_export":159,"./_object-assign":192,"dup":116}],307:[function(require,module,exports){
arguments[4][117][0].apply(exports,arguments)
},{"./_export":159,"./_object-create":193,"dup":117}],308:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperties: require('./_object-dps')});
},{"./_descriptors":155,"./_export":159,"./_object-dps":195}],309:[function(require,module,exports){
arguments[4][118][0].apply(exports,arguments)
},{"./_descriptors":155,"./_export":159,"./_object-dp":194,"dup":118}],310:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});
},{"./_is-object":176,"./_meta":189,"./_object-sap":205}],311:[function(require,module,exports){
arguments[4][119][0].apply(exports,arguments)
},{"./_object-gopd":197,"./_object-sap":205,"./_to-iobject":234,"dup":119}],312:[function(require,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function(){
  return require('./_object-gopn-ext').f;
});
},{"./_object-gopn-ext":198,"./_object-sap":205}],313:[function(require,module,exports){
arguments[4][120][0].apply(exports,arguments)
},{"./_object-gpo":201,"./_object-sap":205,"./_to-object":236,"dup":120}],314:[function(require,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
},{"./_is-object":176,"./_object-sap":205}],315:[function(require,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});
},{"./_is-object":176,"./_object-sap":205}],316:[function(require,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});
},{"./_is-object":176,"./_object-sap":205}],317:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', {is: require('./_same-value')});
},{"./_export":159,"./_same-value":216}],318:[function(require,module,exports){
arguments[4][121][0].apply(exports,arguments)
},{"./_object-keys":203,"./_object-sap":205,"./_to-object":236,"dup":121}],319:[function(require,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});
},{"./_is-object":176,"./_meta":189,"./_object-sap":205}],320:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object')
  , meta     = require('./_meta').onFreeze;

require('./_object-sap')('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});
},{"./_is-object":176,"./_meta":189,"./_object-sap":205}],321:[function(require,module,exports){
arguments[4][122][0].apply(exports,arguments)
},{"./_export":159,"./_set-proto":217,"dup":122}],322:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof')
  , test    = {};
test[require('./_wks')('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require('./_redefine')(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}
},{"./_classof":144,"./_redefine":214,"./_wks":244}],323:[function(require,module,exports){
var $export     = require('./_export')
  , $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});
},{"./_export":159,"./_parse-float":208}],324:[function(require,module,exports){
var $export   = require('./_export')
  , $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});
},{"./_export":159,"./_parse-int":209}],325:[function(require,module,exports){
arguments[4][124][0].apply(exports,arguments)
},{"./_a-function":130,"./_an-instance":133,"./_classof":144,"./_core":150,"./_ctx":152,"./_export":159,"./_for-of":164,"./_global":165,"./_is-object":176,"./_iter-detect":181,"./_library":185,"./_microtask":191,"./_redefine-all":213,"./_set-species":218,"./_set-to-string-tag":219,"./_species-constructor":222,"./_task":231,"./_wks":244,"dup":124}],326:[function(require,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = require('./_export')
  , aFunction = require('./_a-function')
  , anObject  = require('./_an-object')
  , rApply    = (require('./_global').Reflect || {}).apply
  , fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});
},{"./_a-function":130,"./_an-object":134,"./_export":159,"./_fails":161,"./_global":165}],327:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export    = require('./_export')
  , create     = require('./_object-create')
  , aFunction  = require('./_a-function')
  , anObject   = require('./_an-object')
  , isObject   = require('./_is-object')
  , fails      = require('./_fails')
  , bind       = require('./_bind')
  , rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails(function(){
  rConstruct(function(){});
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});
},{"./_a-function":130,"./_an-object":134,"./_bind":143,"./_export":159,"./_fails":161,"./_global":165,"./_is-object":176,"./_object-create":193}],328:[function(require,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP          = require('./_object-dp')
  , $export     = require('./_export')
  , anObject    = require('./_an-object')
  , toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function(){
  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_an-object":134,"./_export":159,"./_fails":161,"./_object-dp":194,"./_to-primitive":237}],329:[function(require,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export  = require('./_export')
  , gOPD     = require('./_object-gopd').f
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});
},{"./_an-object":134,"./_export":159,"./_object-gopd":197}],330:[function(require,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export  = require('./_export')
  , anObject = require('./_an-object');
var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});
},{"./_an-object":134,"./_export":159,"./_iter-create":179}],331:[function(require,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD     = require('./_object-gopd')
  , $export  = require('./_export')
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD.f(anObject(target), propertyKey);
  }
});
},{"./_an-object":134,"./_export":159,"./_object-gopd":197}],332:[function(require,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export  = require('./_export')
  , getProto = require('./_object-gpo')
  , anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject(target));
  }
});
},{"./_an-object":134,"./_export":159,"./_object-gpo":201}],333:[function(require,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD           = require('./_object-gopd')
  , getPrototypeOf = require('./_object-gpo')
  , has            = require('./_has')
  , $export        = require('./_export')
  , isObject       = require('./_is-object')
  , anObject       = require('./_an-object');

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {get: get});
},{"./_an-object":134,"./_export":159,"./_has":166,"./_is-object":176,"./_object-gopd":197,"./_object-gpo":201}],334:[function(require,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});
},{"./_export":159}],335:[function(require,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export       = require('./_export')
  , anObject      = require('./_an-object')
  , $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});
},{"./_an-object":134,"./_export":159}],336:[function(require,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', {ownKeys: require('./_own-keys')});
},{"./_export":159,"./_own-keys":207}],337:[function(require,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export            = require('./_export')
  , anObject           = require('./_an-object')
  , $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_an-object":134,"./_export":159}],338:[function(require,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export  = require('./_export')
  , setProto = require('./_set-proto');

if(setProto)$export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});
},{"./_export":159,"./_set-proto":217}],339:[function(require,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP             = require('./_object-dp')
  , gOPD           = require('./_object-gopd')
  , getPrototypeOf = require('./_object-gpo')
  , has            = require('./_has')
  , $export        = require('./_export')
  , createDesc     = require('./_property-desc')
  , anObject       = require('./_an-object')
  , isObject       = require('./_is-object');

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    dP.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {set: set});
},{"./_an-object":134,"./_export":159,"./_has":166,"./_is-object":176,"./_object-dp":194,"./_object-gopd":197,"./_object-gpo":201,"./_property-desc":212}],340:[function(require,module,exports){
var global            = require('./_global')
  , inheritIfRequired = require('./_inherit-if-required')
  , dP                = require('./_object-dp').f
  , gOPN              = require('./_object-gopn').f
  , isRegExp          = require('./_is-regexp')
  , $flags            = require('./_flags')
  , $RegExp           = global.RegExp
  , Base              = $RegExp
  , proto             = $RegExp.prototype
  , re1               = /a/g
  , re2               = /a/g
  // "new" creates a new object, old webkit buggy here
  , CORRECT_NEW       = new $RegExp(re1) !== re1;

if(require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function(){
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function(){ return Base[key]; },
      set: function(it){ Base[key] = it; }
    });
  };
  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');
},{"./_descriptors":155,"./_fails":161,"./_flags":163,"./_global":165,"./_inherit-if-required":170,"./_is-regexp":177,"./_object-dp":194,"./_object-gopn":199,"./_redefine":214,"./_set-species":218,"./_wks":244}],341:[function(require,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if(require('./_descriptors') && /./g.flags != 'g')require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});
},{"./_descriptors":155,"./_flags":163,"./_object-dp":194}],342:[function(require,module,exports){
// @@match logic
require('./_fix-re-wks')('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});
},{"./_fix-re-wks":162}],343:[function(require,module,exports){
// @@replace logic
require('./_fix-re-wks')('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});
},{"./_fix-re-wks":162}],344:[function(require,module,exports){
// @@search logic
require('./_fix-re-wks')('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});
},{"./_fix-re-wks":162}],345:[function(require,module,exports){
// @@split logic
require('./_fix-re-wks')('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = require('./_is-regexp')
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});
},{"./_fix-re-wks":162,"./_is-regexp":177}],346:[function(require,module,exports){
'use strict';
require('./es6.regexp.flags');
var anObject    = require('./_an-object')
  , $flags      = require('./_flags')
  , DESCRIPTORS = require('./_descriptors')
  , TO_STRING   = 'toString'
  , $toString   = /./[TO_STRING];

var define = function(fn){
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(require('./_fails')(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString.name != TO_STRING){
  define(function toString(){
    return $toString.call(this);
  });
}
},{"./_an-object":134,"./_descriptors":155,"./_fails":161,"./_flags":163,"./_redefine":214,"./es6.regexp.flags":341}],347:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.2 Set Objects
module.exports = require('./_collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./_collection":149,"./_collection-strong":146}],348:[function(require,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});
},{"./_string-html":226}],349:[function(require,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});
},{"./_string-html":226}],350:[function(require,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});
},{"./_string-html":226}],351:[function(require,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});
},{"./_string-html":226}],352:[function(require,module,exports){
'use strict';
var $export = require('./_export')
  , $at     = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"./_export":159,"./_string-at":224}],353:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export   = require('./_export')
  , toLength  = require('./_to-length')
  , context   = require('./_string-context')
  , ENDS_WITH = 'endsWith'
  , $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});
},{"./_export":159,"./_fails-is-regexp":160,"./_string-context":225,"./_to-length":235}],354:[function(require,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});
},{"./_string-html":226}],355:[function(require,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});
},{"./_string-html":226}],356:[function(require,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});
},{"./_string-html":226}],357:[function(require,module,exports){
var $export        = require('./_export')
  , toIndex        = require('./_to-index')
  , fromCharCode   = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./_export":159,"./_to-index":232}],358:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export  = require('./_export')
  , context  = require('./_string-context')
  , INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});
},{"./_export":159,"./_fails-is-regexp":160,"./_string-context":225}],359:[function(require,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});
},{"./_string-html":226}],360:[function(require,module,exports){
arguments[4][125][0].apply(exports,arguments)
},{"./_iter-define":180,"./_string-at":224,"dup":125}],361:[function(require,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});
},{"./_string-html":226}],362:[function(require,module,exports){
var $export   = require('./_export')
  , toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./_export":159,"./_to-iobject":234,"./_to-length":235}],363:[function(require,module,exports){
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});
},{"./_export":159,"./_string-repeat":228}],364:[function(require,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});
},{"./_string-html":226}],365:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export     = require('./_export')
  , toLength    = require('./_to-length')
  , context     = require('./_string-context')
  , STARTS_WITH = 'startsWith'
  , $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});
},{"./_export":159,"./_fails-is-regexp":160,"./_string-context":225,"./_to-length":235}],366:[function(require,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});
},{"./_string-html":226}],367:[function(require,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});
},{"./_string-html":226}],368:[function(require,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});
},{"./_string-html":226}],369:[function(require,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});
},{"./_string-trim":229}],370:[function(require,module,exports){
arguments[4][126][0].apply(exports,arguments)
},{"./_an-object":134,"./_descriptors":155,"./_enum-keys":158,"./_export":159,"./_fails":161,"./_global":165,"./_has":166,"./_hide":167,"./_is-array":174,"./_keyof":184,"./_library":185,"./_meta":189,"./_object-create":193,"./_object-dp":194,"./_object-gopd":197,"./_object-gopn":199,"./_object-gopn-ext":198,"./_object-gops":200,"./_object-keys":203,"./_object-pie":204,"./_property-desc":212,"./_redefine":214,"./_set-to-string-tag":219,"./_shared":221,"./_to-iobject":234,"./_to-primitive":237,"./_uid":241,"./_wks":244,"./_wks-define":242,"./_wks-ext":243,"dup":126}],371:[function(require,module,exports){
'use strict';
var $export      = require('./_export')
  , $typed       = require('./_typed')
  , buffer       = require('./_typed-buffer')
  , anObject     = require('./_an-object')
  , toIndex      = require('./_to-index')
  , toLength     = require('./_to-length')
  , isObject     = require('./_is-object')
  , ArrayBuffer  = require('./_global').ArrayBuffer
  , speciesConstructor = require('./_species-constructor')
  , $ArrayBuffer = buffer.ArrayBuffer
  , $DataView    = buffer.DataView
  , $isView      = $typed.ABV && ArrayBuffer.isView
  , $slice       = $ArrayBuffer.prototype.slice
  , VIEW         = $typed.VIEW
  , ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = toIndex(start, len)
      , final  = toIndex(end === undefined ? len : end, len)
      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);
},{"./_an-object":134,"./_export":159,"./_fails":161,"./_global":165,"./_is-object":176,"./_set-species":218,"./_species-constructor":222,"./_to-index":232,"./_to-length":235,"./_typed":240,"./_typed-buffer":239}],372:[function(require,module,exports){
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});
},{"./_export":159,"./_typed":240,"./_typed-buffer":239}],373:[function(require,module,exports){
require('./_typed-array')('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],374:[function(require,module,exports){
require('./_typed-array')('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],375:[function(require,module,exports){
require('./_typed-array')('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],376:[function(require,module,exports){
require('./_typed-array')('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],377:[function(require,module,exports){
require('./_typed-array')('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],378:[function(require,module,exports){
require('./_typed-array')('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],379:[function(require,module,exports){
require('./_typed-array')('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],380:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});
},{"./_typed-array":238}],381:[function(require,module,exports){
require('./_typed-array')('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);
},{"./_typed-array":238}],382:[function(require,module,exports){
'use strict';
var each         = require('./_array-methods')(0)
  , redefine     = require('./_redefine')
  , meta         = require('./_meta')
  , assign       = require('./_object-assign')
  , weak         = require('./_collection-weak')
  , isObject     = require('./_is-object')
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
},{"./_array-methods":139,"./_collection":149,"./_collection-weak":148,"./_is-object":176,"./_meta":189,"./_object-assign":192,"./_redefine":214}],383:[function(require,module,exports){
'use strict';
var weak = require('./_collection-weak');

// 23.4 WeakSet Objects
require('./_collection')('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./_collection":149,"./_collection-weak":148}],384:[function(require,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export   = require('./_export')
  , $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');
},{"./_add-to-unscopables":132,"./_array-includes":138,"./_export":159}],385:[function(require,module,exports){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export   = require('./_export')
  , microtask = require('./_microtask')()
  , process   = require('./_global').process
  , isNode    = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn){
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});
},{"./_cof":145,"./_export":159,"./_global":165,"./_microtask":191}],386:[function(require,module,exports){
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export')
  , cof     = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it){
    return cof(it) === 'Error';
  }
});
},{"./_cof":145,"./_export":159}],387:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":147,"./_export":159}],388:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});
},{"./_export":159}],389:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});
},{"./_export":159}],390:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});
},{"./_export":159}],391:[function(require,module,exports){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});
},{"./_export":159}],392:[function(require,module,exports){
'use strict';
var $export         = require('./_export')
  , toObject        = require('./_to-object')
  , aFunction       = require('./_a-function')
  , $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});
},{"./_a-function":130,"./_descriptors":155,"./_export":159,"./_object-dp":194,"./_object-forced-pam":196,"./_to-object":236}],393:[function(require,module,exports){
'use strict';
var $export         = require('./_export')
  , toObject        = require('./_to-object')
  , aFunction       = require('./_a-function')
  , $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});
},{"./_a-function":130,"./_descriptors":155,"./_export":159,"./_object-dp":194,"./_object-forced-pam":196,"./_to-object":236}],394:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = require('./_export')
  , $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./_export":159,"./_object-to-array":206}],395:[function(require,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export        = require('./_export')
  , ownKeys        = require('./_own-keys')
  , toIObject      = require('./_to-iobject')
  , gOPD           = require('./_object-gopd')
  , createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = gOPD.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});
},{"./_create-property":151,"./_export":159,"./_object-gopd":197,"./_own-keys":207,"./_to-iobject":234}],396:[function(require,module,exports){
'use strict';
var $export                  = require('./_export')
  , toObject                 = require('./_to-object')
  , toPrimitive              = require('./_to-primitive')
  , getPrototypeOf           = require('./_object-gpo')
  , getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});
},{"./_descriptors":155,"./_export":159,"./_object-forced-pam":196,"./_object-gopd":197,"./_object-gpo":201,"./_to-object":236,"./_to-primitive":237}],397:[function(require,module,exports){
'use strict';
var $export                  = require('./_export')
  , toObject                 = require('./_to-object')
  , toPrimitive              = require('./_to-primitive')
  , getPrototypeOf           = require('./_object-gpo')
  , getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});
},{"./_descriptors":155,"./_export":159,"./_object-forced-pam":196,"./_object-gopd":197,"./_object-gpo":201,"./_to-object":236,"./_to-primitive":237}],398:[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export')
  , $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
},{"./_export":159,"./_object-to-array":206}],399:[function(require,module,exports){
'use strict';
// https://github.com/zenparsing/es-observable
var $export     = require('./_export')
  , global      = require('./_global')
  , core        = require('./_core')
  , microtask   = require('./_microtask')()
  , OBSERVABLE  = require('./_wks')('observable')
  , aFunction   = require('./_a-function')
  , anObject    = require('./_an-object')
  , anInstance  = require('./_an-instance')
  , redefineAll = require('./_redefine-all')
  , hide        = require('./_hide')
  , forOf       = require('./_for-of')
  , RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core.Promise || global.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export($export.G, {Observable: $Observable});

require('./_set-species')('Observable');
},{"./_a-function":130,"./_an-instance":133,"./_an-object":134,"./_core":150,"./_export":159,"./_for-of":164,"./_global":165,"./_hide":167,"./_microtask":191,"./_redefine-all":213,"./_set-species":218,"./_wks":244}],400:[function(require,module,exports){
var metadata                  = require('./_metadata')
  , anObject                  = require('./_an-object')
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});
},{"./_an-object":134,"./_metadata":190}],401:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , toMetaKey              = metadata.key
  , getOrCreateMetadataMap = metadata.map
  , store                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
}});
},{"./_an-object":134,"./_metadata":190}],402:[function(require,module,exports){
var Set                     = require('./es6.set')
  , from                    = require('./_array-from-iterable')
  , metadata                = require('./_metadata')
  , anObject                = require('./_an-object')
  , getPrototypeOf          = require('./_object-gpo')
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"./_an-object":134,"./_array-from-iterable":137,"./_metadata":190,"./_object-gpo":201,"./es6.set":347}],403:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , getPrototypeOf         = require('./_object-gpo')
  , ordinaryHasOwnMetadata = metadata.has
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":134,"./_metadata":190,"./_object-gpo":201}],404:[function(require,module,exports){
var metadata                = require('./_metadata')
  , anObject                = require('./_an-object')
  , ordinaryOwnMetadataKeys = metadata.keys
  , toMetaKey               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
}});
},{"./_an-object":134,"./_metadata":190}],405:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryGetOwnMetadata = metadata.get
  , toMetaKey              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":134,"./_metadata":190}],406:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , getPrototypeOf         = require('./_object-gpo')
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":134,"./_metadata":190,"./_object-gpo":201}],407:[function(require,module,exports){
var metadata               = require('./_metadata')
  , anObject               = require('./_an-object')
  , ordinaryHasOwnMetadata = metadata.has
  , toMetaKey              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
}});
},{"./_an-object":134,"./_metadata":190}],408:[function(require,module,exports){
var metadata                  = require('./_metadata')
  , anObject                  = require('./_an-object')
  , aFunction                 = require('./_a-function')
  , toMetaKey                 = metadata.key
  , ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
}});
},{"./_a-function":130,"./_an-object":134,"./_metadata":190}],409:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Set', {toJSON: require('./_collection-to-json')('Set')});
},{"./_collection-to-json":147,"./_export":159}],410:[function(require,module,exports){
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export')
  , $at     = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"./_export":159,"./_string-at":224}],411:[function(require,module,exports){
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export     = require('./_export')
  , defined     = require('./_defined')
  , toLength    = require('./_to-length')
  , isRegExp    = require('./_is-regexp')
  , getFlags    = require('./_flags')
  , RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});
},{"./_defined":154,"./_export":159,"./_flags":163,"./_is-regexp":177,"./_iter-create":179,"./_to-length":235}],412:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export')
  , $pad    = require('./_string-pad');

$export($export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});
},{"./_export":159,"./_string-pad":227}],413:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export')
  , $pad    = require('./_string-pad');

$export($export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});
},{"./_export":159,"./_string-pad":227}],414:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');
},{"./_string-trim":229}],415:[function(require,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');
},{"./_string-trim":229}],416:[function(require,module,exports){
arguments[4][127][0].apply(exports,arguments)
},{"./_wks-define":242,"dup":127}],417:[function(require,module,exports){
arguments[4][128][0].apply(exports,arguments)
},{"./_wks-define":242,"dup":128}],418:[function(require,module,exports){
// https://github.com/ljharb/proposal-global
var $export = require('./_export');

$export($export.S, 'System', {global: require('./_global')});
},{"./_export":159,"./_global":165}],419:[function(require,module,exports){
var $iterators    = require('./es6.array.iterator')
  , redefine      = require('./_redefine')
  , global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , wks           = require('./_wks')
  , ITERATOR      = wks('iterator')
  , TO_STRING_TAG = wks('toStringTag')
  , ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
  }
}
},{"./_global":165,"./_hide":167,"./_iterators":183,"./_redefine":214,"./_wks":244,"./es6.array.iterator":257}],420:[function(require,module,exports){
var $export = require('./_export')
  , $task   = require('./_task');
$export($export.G + $export.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./_export":159,"./_task":231}],421:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global     = require('./_global')
  , $export    = require('./_export')
  , invoke     = require('./_invoke')
  , partial    = require('./_partial')
  , navigator  = global.navigator
  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout:  wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});
},{"./_export":159,"./_global":165,"./_invoke":171,"./_partial":210}],422:[function(require,module,exports){
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.umulh');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');
},{"./modules/_core":150,"./modules/es6.array.copy-within":247,"./modules/es6.array.every":248,"./modules/es6.array.fill":249,"./modules/es6.array.filter":250,"./modules/es6.array.find":252,"./modules/es6.array.find-index":251,"./modules/es6.array.for-each":253,"./modules/es6.array.from":254,"./modules/es6.array.index-of":255,"./modules/es6.array.is-array":256,"./modules/es6.array.iterator":257,"./modules/es6.array.join":258,"./modules/es6.array.last-index-of":259,"./modules/es6.array.map":260,"./modules/es6.array.of":261,"./modules/es6.array.reduce":263,"./modules/es6.array.reduce-right":262,"./modules/es6.array.slice":264,"./modules/es6.array.some":265,"./modules/es6.array.sort":266,"./modules/es6.array.species":267,"./modules/es6.date.now":268,"./modules/es6.date.to-iso-string":269,"./modules/es6.date.to-json":270,"./modules/es6.date.to-primitive":271,"./modules/es6.date.to-string":272,"./modules/es6.function.bind":273,"./modules/es6.function.has-instance":274,"./modules/es6.function.name":275,"./modules/es6.map":276,"./modules/es6.math.acosh":277,"./modules/es6.math.asinh":278,"./modules/es6.math.atanh":279,"./modules/es6.math.cbrt":280,"./modules/es6.math.clz32":281,"./modules/es6.math.cosh":282,"./modules/es6.math.expm1":283,"./modules/es6.math.fround":284,"./modules/es6.math.hypot":285,"./modules/es6.math.imul":286,"./modules/es6.math.log10":287,"./modules/es6.math.log1p":288,"./modules/es6.math.log2":289,"./modules/es6.math.sign":290,"./modules/es6.math.sinh":291,"./modules/es6.math.tanh":292,"./modules/es6.math.trunc":293,"./modules/es6.number.constructor":294,"./modules/es6.number.epsilon":295,"./modules/es6.number.is-finite":296,"./modules/es6.number.is-integer":297,"./modules/es6.number.is-nan":298,"./modules/es6.number.is-safe-integer":299,"./modules/es6.number.max-safe-integer":300,"./modules/es6.number.min-safe-integer":301,"./modules/es6.number.parse-float":302,"./modules/es6.number.parse-int":303,"./modules/es6.number.to-fixed":304,"./modules/es6.number.to-precision":305,"./modules/es6.object.assign":306,"./modules/es6.object.create":307,"./modules/es6.object.define-properties":308,"./modules/es6.object.define-property":309,"./modules/es6.object.freeze":310,"./modules/es6.object.get-own-property-descriptor":311,"./modules/es6.object.get-own-property-names":312,"./modules/es6.object.get-prototype-of":313,"./modules/es6.object.is":317,"./modules/es6.object.is-extensible":314,"./modules/es6.object.is-frozen":315,"./modules/es6.object.is-sealed":316,"./modules/es6.object.keys":318,"./modules/es6.object.prevent-extensions":319,"./modules/es6.object.seal":320,"./modules/es6.object.set-prototype-of":321,"./modules/es6.object.to-string":322,"./modules/es6.parse-float":323,"./modules/es6.parse-int":324,"./modules/es6.promise":325,"./modules/es6.reflect.apply":326,"./modules/es6.reflect.construct":327,"./modules/es6.reflect.define-property":328,"./modules/es6.reflect.delete-property":329,"./modules/es6.reflect.enumerate":330,"./modules/es6.reflect.get":333,"./modules/es6.reflect.get-own-property-descriptor":331,"./modules/es6.reflect.get-prototype-of":332,"./modules/es6.reflect.has":334,"./modules/es6.reflect.is-extensible":335,"./modules/es6.reflect.own-keys":336,"./modules/es6.reflect.prevent-extensions":337,"./modules/es6.reflect.set":339,"./modules/es6.reflect.set-prototype-of":338,"./modules/es6.regexp.constructor":340,"./modules/es6.regexp.flags":341,"./modules/es6.regexp.match":342,"./modules/es6.regexp.replace":343,"./modules/es6.regexp.search":344,"./modules/es6.regexp.split":345,"./modules/es6.regexp.to-string":346,"./modules/es6.set":347,"./modules/es6.string.anchor":348,"./modules/es6.string.big":349,"./modules/es6.string.blink":350,"./modules/es6.string.bold":351,"./modules/es6.string.code-point-at":352,"./modules/es6.string.ends-with":353,"./modules/es6.string.fixed":354,"./modules/es6.string.fontcolor":355,"./modules/es6.string.fontsize":356,"./modules/es6.string.from-code-point":357,"./modules/es6.string.includes":358,"./modules/es6.string.italics":359,"./modules/es6.string.iterator":360,"./modules/es6.string.link":361,"./modules/es6.string.raw":362,"./modules/es6.string.repeat":363,"./modules/es6.string.small":364,"./modules/es6.string.starts-with":365,"./modules/es6.string.strike":366,"./modules/es6.string.sub":367,"./modules/es6.string.sup":368,"./modules/es6.string.trim":369,"./modules/es6.symbol":370,"./modules/es6.typed.array-buffer":371,"./modules/es6.typed.data-view":372,"./modules/es6.typed.float32-array":373,"./modules/es6.typed.float64-array":374,"./modules/es6.typed.int16-array":375,"./modules/es6.typed.int32-array":376,"./modules/es6.typed.int8-array":377,"./modules/es6.typed.uint16-array":378,"./modules/es6.typed.uint32-array":379,"./modules/es6.typed.uint8-array":380,"./modules/es6.typed.uint8-clamped-array":381,"./modules/es6.weak-map":382,"./modules/es6.weak-set":383,"./modules/es7.array.includes":384,"./modules/es7.asap":385,"./modules/es7.error.is-error":386,"./modules/es7.map.to-json":387,"./modules/es7.math.iaddh":388,"./modules/es7.math.imulh":389,"./modules/es7.math.isubh":390,"./modules/es7.math.umulh":391,"./modules/es7.object.define-getter":392,"./modules/es7.object.define-setter":393,"./modules/es7.object.entries":394,"./modules/es7.object.get-own-property-descriptors":395,"./modules/es7.object.lookup-getter":396,"./modules/es7.object.lookup-setter":397,"./modules/es7.object.values":398,"./modules/es7.observable":399,"./modules/es7.reflect.define-metadata":400,"./modules/es7.reflect.delete-metadata":401,"./modules/es7.reflect.get-metadata":403,"./modules/es7.reflect.get-metadata-keys":402,"./modules/es7.reflect.get-own-metadata":405,"./modules/es7.reflect.get-own-metadata-keys":404,"./modules/es7.reflect.has-metadata":406,"./modules/es7.reflect.has-own-metadata":407,"./modules/es7.reflect.metadata":408,"./modules/es7.set.to-json":409,"./modules/es7.string.at":410,"./modules/es7.string.match-all":411,"./modules/es7.string.pad-end":412,"./modules/es7.string.pad-start":413,"./modules/es7.string.trim-left":414,"./modules/es7.string.trim-right":415,"./modules/es7.symbol.async-iterator":416,"./modules/es7.symbol.observable":417,"./modules/es7.system.global":418,"./modules/web.dom.iterable":419,"./modules/web.immediate":420,"./modules/web.timers":421}],423:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],424:[function(require,module,exports){
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":439}],425:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SUPPORTED_PROTOCOL_VERSION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _desc, _value, _class;

var _utils = require("./utils");

var _http = require("./http");

var _http2 = _interopRequireDefault(_http);

var _endpoint = require("./endpoint");

var _endpoint2 = _interopRequireDefault(_endpoint);

var _requests = require("./requests");

var requests = _interopRequireWildcard(_requests);

var _batch = require("./batch");

var _bucket = require("./bucket");

var _bucket2 = _interopRequireDefault(_bucket);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Currently supported protocol version.
 * @type {String}
 */
var SUPPORTED_PROTOCOL_VERSION = exports.SUPPORTED_PROTOCOL_VERSION = "v1";

/**
 * High level HTTP client for the Kinto API.
 *
 * @example
 * const client = new KintoClient("https://kinto.dev.mozaws.net/v1");
 * client.bucket("default")
*    .collection("my-blog")
*    .createRecord({title: "First article"})
 *   .then(console.log.bind(console))
 *   .catch(console.error.bind(console));
 */
var KintoClientBase = (_dec = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec2 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec3 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec4 = (0, _utils.nobatch)("This operation is not supported within a batch operation."), _dec5 = (0, _utils.nobatch)("Can't use batch within a batch!"), _dec6 = (0, _utils.capable)(["permissions_endpoint"]), _dec7 = (0, _utils.support)("1.4", "2.0"), (_class = function () {
  /**
   * Constructor.
   *
   * @param  {String}       remote  The remote URL.
   * @param  {Object}       [options={}]                  The options object.
   * @param  {Boolean}      [options.safe=true]           Adds concurrency headers to every requests.
   * @param  {EventEmitter} [options.events=EventEmitter] The events handler instance.
   * @param  {Object}       [options.headers={}]          The key-value headers to pass to each request.
   * @param  {String}       [options.bucket="default"]    The default bucket to use.
   * @param  {String}       [options.requestMode="cors"]  The HTTP request mode (from ES6 fetch spec).
   * @param  {Number}       [options.timeout=5000]        The requests timeout in ms.
   */

  function KintoClientBase(remote) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, KintoClientBase);

    if (typeof remote !== "string" || !remote.length) {
      throw new Error("Invalid remote URL: " + remote);
    }
    if (remote[remote.length - 1] === "/") {
      remote = remote.slice(0, -1);
    }
    this._backoffReleaseTime = null;

    /**
     * Default request options container.
     * @private
     * @type {Object}
     */
    this.defaultReqOptions = {
      bucket: options.bucket || "default",
      headers: options.headers || {},
      safe: !!options.safe
    };

    this._options = options;
    this._requests = [];
    this._isBatch = !!options.batch;

    // public properties
    /**
     * The remote server base URL.
     * @type {String}
     */
    this.remote = remote;
    /**
     * Current server information.
     * @ignore
     * @type {Object|null}
     */
    this.serverInfo = null;
    /**
     * The event emitter instance. Should comply with the `EventEmitter`
     * interface.
     * @ignore
     * @type {Class}
     */
    this.events = options.events;

    var requestMode = options.requestMode;
    var timeout = options.timeout;
    /**
     * The HTTP instance.
     * @ignore
     * @type {HTTP}
     */

    this.http = new _http2.default(this.events, { requestMode: requestMode, timeout: timeout });
    this._registerHTTPEvents();
  }

  /**
   * The remote endpoint base URL. Setting the value will also extract and
   * validate the version.
   * @type {String}
   */


  _createClass(KintoClientBase, [{
    key: "_registerHTTPEvents",


    /**
     * Registers HTTP events.
     * @private
     */
    value: function _registerHTTPEvents() {
      var _this = this;

      // Prevent registering event from a batch client instance
      if (!this._isBatch) {
        this.events.on("backoff", function (backoffMs) {
          _this._backoffReleaseTime = backoffMs;
        });
      }
    }

    /**
     * Retrieve a bucket object to perform operations on it.
     *
     * @param  {String}  name              The bucket name.
     * @param  {Object}  [options={}]      The request options.
     * @param  {Boolean} [options.safe]    The resulting safe option.
     * @param  {String}  [options.bucket]  The resulting bucket name option.
     * @param  {Object}  [options.headers] The extended headers object option.
     * @return {Bucket}
     */

  }, {
    key: "bucket",
    value: function bucket(name) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var bucketOptions = (0, _utils.omit)(this._getRequestOptions(options), "bucket");
      return new _bucket2.default(this, name, bucketOptions);
    }

    /**
     * Generates a request options object, deeply merging the client configured
     * defaults with the ones provided as argument.
     *
     * Note: Headers won't be overriden but merged with instance default ones.
     *
     * @private
     * @param    {Object}  [options={}]      The request options.
     * @property {Boolean} [options.safe]    The resulting safe option.
     * @property {String}  [options.bucket]  The resulting bucket name option.
     * @property {Object}  [options.headers] The extended headers object option.
     * @return   {Object}
     */

  }, {
    key: "_getRequestOptions",
    value: function _getRequestOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return _extends({}, this.defaultReqOptions, options, {
        batch: this._isBatch,
        // Note: headers should never be overriden but extended
        headers: _extends({}, this.defaultReqOptions.headers, options.headers)
      });
    }

    /**
     * Retrieves server information and persist them locally. This operation is
     * usually performed a single time during the instance lifecycle.
     *
     * @param  {Object}  [options={}] The request options.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerInfo",
    value: function fetchServerInfo() {
      var _this2 = this;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (this.serverInfo) {
        return Promise.resolve(this.serverInfo);
      }
      return this.http.request(this.remote + (0, _endpoint2.default)("root"), {
        headers: _extends({}, this.defaultReqOptions.headers, options.headers)
      }).then(function (_ref) {
        var json = _ref.json;

        _this2.serverInfo = json;
        return _this2.serverInfo;
      });
    }

    /**
     * Retrieves Kinto server settings.
     *
     * @param  {Object}  [options={}] The request options.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerSettings",
    value: function fetchServerSettings() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.fetchServerInfo(options).then(function (_ref2) {
        var settings = _ref2.settings;
        return settings;
      });
    }

    /**
     * Retrieve server capabilities information.
     *
     * @param  {Object}  [options={}] The request options.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchServerCapabilities",
    value: function fetchServerCapabilities() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.fetchServerInfo(options).then(function (_ref3) {
        var capabilities = _ref3.capabilities;
        return capabilities;
      });
    }

    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchUser",
    value: function fetchUser() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.fetchServerInfo(options).then(function (_ref4) {
        var user = _ref4.user;
        return user;
      });
    }

    /**
     * Retrieve authenticated user information.
     *
     * @param  {Object}  [options={}] The request options.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "fetchHTTPApiVersion",
    value: function fetchHTTPApiVersion() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.fetchServerInfo(options).then(function (_ref5) {
        var http_api_version = _ref5.http_api_version;

        return http_api_version;
      });
    }

    /**
     * Process batch requests, chunking them according to the batch_max_requests
     * server setting when needed.
     *
     * @param  {Array}  requests     The list of batch subrequests to perform.
     * @param  {Object} [options={}] The options object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "_batchRequests",
    value: function _batchRequests(requests) {
      var _this3 = this;
      //console.log("requests", JSON.stringify(requests));

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var headers = _extends({}, this.defaultReqOptions.headers, options.headers);
      if (!requests.length) {
        return Promise.resolve([]);
      }
      return this.fetchServerSettings().then(function (serverSettings) {
        var maxRequests = serverSettings["batch_max_requests"];
        if (maxRequests && requests.length > maxRequests) {
          var chunks = (0, _utils.partition)(requests, maxRequests);
          return (0, _utils.pMap)(chunks, function (chunk) {
            return _this3._batchRequests(chunk, options);
          });
        }
        return _this3.execute({
          path: (0, _endpoint2.default)("batch"),
          method: "POST",
          headers: headers,
          body: {
            defaults: { headers: headers },
            requests: requests
          }
        })
        // we only care about the responses
        .then(function (_ref6) {
          //console.log("responses", JSON.stringify(_ref6));
          var responses = _ref6.responses;
          return responses;
        });
      });
    }

    /**
     * Sends batch requests to the remote server.
     *
     * Note: Reserved for internal use only.
     *
     * @ignore
     * @param  {Function} fn                        The function to use for describing batch ops.
     * @param  {Object}   [options={}]              The options object.
     * @param  {Boolean}  [options.safe]            The safe option.
     * @param  {String}   [options.bucket]          The bucket name option.
     * @param  {String}   [options.collection]      The collection name option.
     * @param  {Object}   [options.headers]         The headers object option.
     * @param  {Boolean}  [options.aggregate=false] Produces an aggregated result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function batch(fn) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var rootBatch = new KintoClientBase(this.remote, _extends({}, this._options, this._getRequestOptions(options), {
        batch: true
      }));
      var bucketBatch = void 0,
          collBatch = void 0;
      if (options.bucket) {
        bucketBatch = rootBatch.bucket(options.bucket);
        if (options.collection) {
          collBatch = bucketBatch.collection(options.collection);
        }
      }
      var batchClient = collBatch || bucketBatch || rootBatch;
      try {
        fn(batchClient);
      } catch (err) {
        return Promise.reject(err);
      }
      return this._batchRequests(rootBatch._requests, options).then(function (responses) {
        if (options.aggregate) {
          return (0, _batch.aggregate)(responses, rootBatch._requests);
        }
        return responses;
      });
    }

    /**
     * Executes an atomic HTTP request.
     *
     * @private
     * @param  {Object}  request             The request object.
     * @param  {Object}  [options={}]        The options object.
     * @param  {Boolean} [options.raw=false] If true, resolve with full response
     * @param  {Boolean} [options.stringify=true] If true, serialize body data to
     * JSON.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "execute",
    value: function execute(request) {
      var _this4 = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? { raw: false, stringify: true } : arguments[1];
      var raw = options.raw;
      var stringify = options.stringify;
      // If we're within a batch, add the request to the stack to send at once.

      if (this._isBatch) {
        this._requests.push(request);
        // Resolve with a message in case people attempt at consuming the result
        // from within a batch operation.
        var msg = "This result is generated from within a batch " + "operation and should not be consumed.";
        return Promise.resolve(raw ? { json: msg, headers: {
            get: function get() {}
          } } : msg);
      }
      var promise = this.fetchServerSettings().then(function (_) {
        return _this4.http.request(_this4.remote + request.path, _extends({}, request, {
          body: stringify ? JSON.stringify(request.body) : request.body
        }));
      });
      return raw ? promise : promise.then(function (_ref7) {
        var json = _ref7.json;
        return json;
      });
    }
  }, {
    key: "paginatedList",
    value: function paginatedList(path, params) {
      var _this5 = this;

      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var _sort$params = _extends({
        sort: "-last_modified"
      }, params);

      var sort = _sort$params.sort;
      var filters = _sort$params.filters;
      var limit = _sort$params.limit;
      var pages = _sort$params.pages;
      var since = _sort$params.since;
      // Safety/Consistency check on ETag value.

      if (since && typeof since !== "string") {
        throw new Error("Invalid value for since (" + since + "), should be ETag value.");
      }

      var querystring = (0, _utils.qsify)(_extends({}, filters, {
        _sort: sort,
        _limit: limit,
        _since: since
      }));
      var results = [],
          current = 0;

      var next = function next(nextPage) {
        if (!nextPage) {
          throw new Error("Pagination exhausted.");
        }
        return processNextPage(nextPage);
      };

      var processNextPage = function processNextPage(nextPage) {
        var headers = options.headers;

        return _this5.http.request(nextPage, { headers: headers }).then(handleResponse);
      };

      var pageResults = function pageResults(results, nextPage, etag, totalRecords) {
        // ETag string is supposed to be opaque and stored «as-is».
        // ETag header values are quoted (because of * and W/"foo").
        return {
          last_modified: etag ? etag.replace(/"/g, "") : etag,
          data: results,
          next: next.bind(null, nextPage),
          hasNextPage: !!nextPage,
          totalRecords: totalRecords
        };
      };

      var handleResponse = function handleResponse(_ref8) {
        var headers = _ref8.headers;
        var json = _ref8.json;

        var nextPage = headers.get("Next-Page");
        var etag = headers.get("ETag");
        var totalRecords = parseInt(headers.get("Total-Records"), 10);

        if (!pages) {
          return pageResults(json.data, nextPage, etag, totalRecords);
        }
        // Aggregate new results with previous ones
        results = results.concat(json.data);
        current += 1;
        if (current >= pages || !nextPage) {
          // Pagination exhausted
          return pageResults(results, nextPage, etag, totalRecords);
        }
        // Follow next page
        return processNextPage(nextPage);
      };

      return this.execute(_extends({
        path: path + "?" + querystring
      }, options), { raw: true }).then(handleResponse);
    }

    /**
     * Lists all permissions.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object[], Error>}
     */

  }, {
    key: "listPermissions",
    value: function listPermissions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.execute({
        path: (0, _endpoint2.default)("permissions"),
        headers: _extends({}, this.defaultReqOptions.headers, options.headers)
      });
    }

    /**
     * Retrieves the list of buckets.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object[], Error>}
     */

  }, {
    key: "listBuckets",
    value: function listBuckets() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var path = (0, _endpoint2.default)("bucket");
      var reqOptions = this._getRequestOptions(options);
      return this.paginatedList(path, options, reqOptions);
    }

    /**
     * Creates a new bucket on the server.
     *
     * @param  {String}   id                The bucket name.
     * @param  {Object}   [options={}]      The options object.
     * @param  {Boolean}  [options.data]    The bucket data option.
     * @param  {Boolean}  [options.safe]    The safe option.
     * @param  {Object}   [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createBucket",
    value: function createBucket(id) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!id) {
        throw new Error("A bucket id is required.");
      }
      // Note that we simply ignore any "bucket" option passed here, as the one
      // we're interested in is the one provided as a required argument.
      var reqOptions = this._getRequestOptions(options);
      var _reqOptions$data = reqOptions.data;
      var data = _reqOptions$data === undefined ? {} : _reqOptions$data;
      var permissions = reqOptions.permissions;

      data.id = id;
      var path = (0, _endpoint2.default)("bucket", id);
      return this.execute(requests.createRequest(path, { data: data, permissions: permissions }, reqOptions));
    }

    /**
     * Deletes a bucket from the server.
     *
     * @ignore
     * @param  {Object|String} bucket                  The bucket to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteBucket",
    value: function deleteBucket(bucket) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var bucketObj = (0, _utils.toDataBody)(bucket);
      if (!bucketObj.id) {
        throw new Error("A bucket id is required.");
      }
      var path = (0, _endpoint2.default)("bucket", bucketObj.id);
      var _bucketObj = { bucketObj: bucketObj };
      var last_modified = _bucketObj.last_modified;

      var reqOptions = this._getRequestOptions(_extends({ last_modified: last_modified }, options));
      return this.execute(requests.deleteRequest(path, reqOptions));
    }

    /**
     * Deletes all buckets on the server.
     *
     * @ignore
     * @param  {Object}  [options={}]            The options object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteBuckets",
    value: function deleteBuckets() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var reqOptions = this._getRequestOptions(options);
      var path = (0, _endpoint2.default)("bucket");
      return this.execute(requests.deleteRequest(path, reqOptions));
    }
  }, {
    key: "remote",
    get: function get() {
      return this._remote;
    }

    /**
     * @ignore
     */
    ,
    set: function set(url) {
      var version = void 0;
      try {
        version = url.match(/\/(v\d+)\/?$/)[1];
      } catch (err) {
        throw new Error("The remote URL must contain the version: " + url);
      }
      if (version !== SUPPORTED_PROTOCOL_VERSION) {
        throw new Error("Unsupported protocol version: " + version);
      }
      this._remote = url;
      this._version = version;
    }

    /**
     * The current server protocol version, eg. `v1`.
     * @type {String}
     */

  }, {
    key: "version",
    get: function get() {
      return this._version;
    }

    /**
     * Backoff remaining time, in milliseconds. Defaults to zero if no backoff is
     * ongoing.
     *
     * @type {Number}
     */

  }, {
    key: "backoff",
    get: function get() {
      var currentTime = new Date().getTime();
      if (this._backoffReleaseTime && currentTime < this._backoffReleaseTime) {
        return this._backoffReleaseTime - currentTime;
      }
      return 0;
    }
  }]);

  return KintoClientBase;
}(), (_applyDecoratedDescriptor(_class.prototype, "fetchServerSettings", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "fetchServerSettings"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchServerCapabilities", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "fetchServerCapabilities"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchUser", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "fetchUser"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchHTTPApiVersion", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "fetchHTTPApiVersion"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "batch", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "batch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "listPermissions", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "listPermissions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteBuckets", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "deleteBuckets"), _class.prototype)), _class));
exports.default = KintoClientBase;
},{"./batch":426,"./bucket":427,"./endpoint":429,"./http":431,"./requests":433,"./utils":434}],426:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregate = aggregate;
/**
 * Exports batch responses as a result object.
 *
 * @private
 * @param  {Array} responses The batch subrequest responses.
 * @param  {Array} requests  The initial issued requests.
 * @return {Object}
 */
function aggregate() {
  var responses = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var requests = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (responses.length !== requests.length) {
    throw new Error("Responses length should match requests one.");
  }
  var results = {
    errors: [],
    published: [],
    conflicts: [],
    skipped: []
  };
  return responses.reduce(function (acc, response, index) {
    var status = response.status;

    var request = requests[index];
    if (status >= 200 && status < 400) {
      acc.published.push(response.body);
    } else if (status === 404) {
      // Extract the id manually from request path while waiting for Kinto/kinto#818
      var extracts = request.path.match(/(buckets|groups|collections|records)\/([^\/]+)$/);
      var id = extracts.length === 3 ? extracts[2] : undefined;
      acc.skipped.push({
        id: id,
        path: request.path,
        error: response.body
      });
    } else if (status === 412) {
      acc.conflicts.push({
        // XXX: specifying the type is probably superfluous
        type: "outgoing",
        local: request.body,
        remote: response.body.details && response.body.details.existing || null
      });
    } else {
      acc.errors.push({
        path: request.path,
        sent: request,
        error: response.body
      });
    }
    return acc;
  }, results);
}
},{}],427:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _utils = require("./utils");

var _collection = require("./collection");

var _collection2 = _interopRequireDefault(_collection);

var _requests = require("./requests");

var requests = _interopRequireWildcard(_requests);

var _endpoint = require("./endpoint");

var _endpoint2 = _interopRequireDefault(_endpoint);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Abstract representation of a selected bucket.
 *
 */
var Bucket = (_dec = (0, _utils.capable)(["history"]), (_class = function () {
  /**
   * Constructor.
   *
   * @param  {KintoClient} client            The client instance.
   * @param  {String}      name              The bucket name.
   * @param  {Object}      [options={}]      The headers object option.
   * @param  {Object}      [options.headers] The headers object option.
   * @param  {Boolean}     [options.safe]    The safe option.
   */

  function Bucket(client, name) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, Bucket);

    /**
     * @ignore
     */
    this.client = client;
    /**
     * The bucket name.
     * @type {String}
     */
    this.name = name;
    /**
     * The default options object.
     * @ignore
     * @type {Object}
     */
    this.options = options;
    /**
     * @ignore
     */
    this._isBatch = !!options.batch;
  }

  /**
   * Merges passed request options with default bucket ones, if any.
   *
   * @private
   * @param  {Object} [options={}] The options to merge.
   * @return {Object}              The merged options.
   */


  _createClass(Bucket, [{
    key: "_bucketOptions",
    value: function _bucketOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var headers = _extends({}, this.options && this.options.headers, options.headers);
      return _extends({}, this.options, options, {
        headers: headers,
        bucket: this.name,
        batch: this._isBatch
      });
    }

    /**
     * Selects a collection.
     *
     * @param  {String}  name              The collection name.
     * @param  {Object}  [options={}]      The options object.
     * @param  {Object}  [options.headers] The headers object option.
     * @param  {Boolean} [options.safe]    The safe option.
     * @return {Collection}
     */

  }, {
    key: "collection",
    value: function collection(name) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return new _collection2.default(this.client, this, name, this._bucketOptions(options));
    }

    /**
     * Retrieves bucket data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getData",
    value: function getData() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.client.execute({
        path: (0, _endpoint2.default)("bucket", this.name),
        headers: _extends({}, this.options.headers, options.headers)
      }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Set bucket data.
     * @param  {Object}  data                    The bucket data object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Boolean} [options.patch]         The patch option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setData",
    value: function setData(data) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(data)) {
        throw new Error("A bucket object is required.");
      }

      var bucket = _extends({}, data, { id: this.name });

      // For default bucket, we need to drop the id from the data object.
      // Bug in Kinto < 3.1.1
      var bucketId = bucket.id;
      if (bucket.id === "default") {
        delete bucket.id;
      }

      var path = (0, _endpoint2.default)("bucket", bucketId);
      var permissions = options.permissions;

      var reqOptions = _extends({}, this._bucketOptions(options));
      var request = requests.updateRequest(path, { data: bucket, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Retrieves the list of history entries in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listHistory",
    value: function listHistory() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var path = (0, _endpoint2.default)("history", this.name);
      var reqOptions = this._bucketOptions(options);
      return this.client.paginatedList(path, options, reqOptions);
    }

    /**
     * Retrieves the list of collections in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listCollections",
    value: function listCollections() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var path = (0, _endpoint2.default)("collection", this.name);
      var reqOptions = this._bucketOptions(options);
      return this.client.paginatedList(path, options, reqOptions);
    }

    /**
     * Creates a new collection in current bucket.
     *
     * @param  {String|undefined}  id          The collection id.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Object}  [options.permissions] The permissions object.
     * @param  {Object}  [options.data]        The data object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createCollection",
    value: function createCollection(id) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var reqOptions = this._bucketOptions(options);
      var permissions = reqOptions.permissions;
      var _reqOptions$data = reqOptions.data;
      var data = _reqOptions$data === undefined ? {} : _reqOptions$data;

      data.id = id;
      var path = (0, _endpoint2.default)("collection", this.name, id);
      var request = requests.createRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Deletes a collection from the current bucket.
     *
     * @param  {Object|String} collection              The collection to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteCollection",
    value: function deleteCollection(collection) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var collectionObj = (0, _utils.toDataBody)(collection);
      if (!collectionObj.id) {
        throw new Error("A collection id is required.");
      }
      var id = collectionObj.id;
      var last_modified = collectionObj.last_modified;

      var reqOptions = this._bucketOptions(_extends({ last_modified: last_modified }, options));
      var path = (0, _endpoint2.default)("collection", this.name, id);
      var request = requests.deleteRequest(path, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Retrieves the list of groups in the current bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Array<Object>, Error>}
     */

  }, {
    key: "listGroups",
    value: function listGroups() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var path = (0, _endpoint2.default)("group", this.name);
      var reqOptions = this._bucketOptions(options);
      return this.client.paginatedList(path, options, reqOptions);
    }

    /**
     * Creates a new group in current bucket.
     *
     * @param  {String} id                The group id.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getGroup",
    value: function getGroup(id) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.client.execute({
        path: (0, _endpoint2.default)("group", this.name, id),
        headers: _extends({}, this.options.headers, options.headers)
      });
    }

    /**
     * Creates a new group in current bucket.
     *
     * @param  {String|undefined}  id                    The group id.
     * @param  {Array<String>}     [members=[]]          The list of principals.
     * @param  {Object}            [options={}]          The options object.
     * @param  {Object}            [options.data]        The data object.
     * @param  {Object}            [options.permissions] The permissions object.
     * @param  {Boolean}           [options.safe]        The safe option.
     * @param  {Object}            [options.headers]     The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createGroup",
    value: function createGroup(id) {
      var members = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var reqOptions = this._bucketOptions(options);
      var data = _extends({}, options.data, {
        id: id,
        members: members
      });
      var path = (0, _endpoint2.default)("group", this.name, id);
      var permissions = options.permissions;

      var request = requests.createRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Updates an existing group in current bucket.
     *
     * @param  {Object}  group                   The group object.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.data]          The data object.
     * @param  {Object}  [options.permissions]   The permissions object.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "updateGroup",
    value: function updateGroup(group) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(group)) {
        throw new Error("A group object is required.");
      }
      if (!group.id) {
        throw new Error("A group id is required.");
      }
      var reqOptions = this._bucketOptions(options);
      var data = _extends({}, options.data, group);
      var path = (0, _endpoint2.default)("group", this.name, group.id);
      var permissions = options.permissions;

      var request = requests.updateRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Deletes a group from the current bucket.
     *
     * @param  {Object|String} group                   The group to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteGroup",
    value: function deleteGroup(group) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var groupObj = (0, _utils.toDataBody)(group);
      var id = groupObj.id;
      var last_modified = groupObj.last_modified;

      var reqOptions = this._bucketOptions(_extends({ last_modified: last_modified }, options));
      var path = (0, _endpoint2.default)("group", this.name, id);
      var request = requests.deleteRequest(path, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Retrieves the list of permissions for this bucket.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getPermissions",
    value: function getPermissions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this.client.execute({
        path: (0, _endpoint2.default)("bucket", this.name),
        headers: _extends({}, this.options.headers, options.headers)
      }).then(function (res) {
        return res.permissions;
      });
    }

    /**
     * Replaces all existing bucket permissions with the ones provided.
     *
     * @param  {Object}  permissions             The permissions object.
     * @param  {Object}  [options={}]            The options object
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Object}  [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setPermissions",
    value: function setPermissions(permissions) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(permissions)) {
        throw new Error("A permissions object is required.");
      }
      var path = (0, _endpoint2.default)("bucket", this.name);
      var reqOptions = _extends({}, this._bucketOptions(options));
      var last_modified = options.last_modified;

      var data = { last_modified: last_modified };
      var request = requests.updateRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Performs batch operations at the current bucket level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function batch(fn) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.client.batch(fn, this._bucketOptions(options));
    }
  }]);

  return Bucket;
}(), (_applyDecoratedDescriptor(_class.prototype, "listHistory", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "listHistory"), _class.prototype)), _class));
exports.default = Bucket;
},{"./collection":428,"./endpoint":429,"./requests":433,"./utils":434}],428:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

var _uuid = require("uuid");

var _utils = require("./utils");

var _requests = require("./requests");

var requests = _interopRequireWildcard(_requests);

var _endpoint = require("./endpoint");

var _endpoint2 = _interopRequireDefault(_endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Abstract representation of a selected collection.
 *
 */
var Collection = (_dec = (0, _utils.capable)(["attachments"]), _dec2 = (0, _utils.capable)(["attachments"]), (_class = function () {
  /**
   * Constructor.
   *
   * @param  {KintoClient}  client            The client instance.
   * @param  {Bucket}       bucket            The bucket instance.
   * @param  {String}       name              The collection name.
   * @param  {Object}       [options={}]      The options object.
   * @param  {Object}       [options.headers] The headers object option.
   * @param  {Boolean}      [options.safe]    The safe option.
   */

  function Collection(client, bucket, name) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    _classCallCheck(this, Collection);

    /**
     * @ignore
     */
    this.client = client;
    /**
     * @ignore
     */
    this.bucket = bucket;
    /**
     * The collection name.
     * @type {String}
     */
    this.name = name;

    /**
     * The default collection options object, embedding the default bucket ones.
     * @ignore
     * @type {Object}
     */
    this.options = _extends({}, this.bucket.options, options, {
      headers: _extends({}, this.bucket.options && this.bucket.options.headers, options.headers)
    });
    /**
     * @ignore
     */
    this._isBatch = !!options.batch;
  }

  /**
   * Merges passed request options with default bucket and collection ones, if
   * any.
   *
   * @private
   * @param  {Object} [options={}] The options to merge.
   * @return {Object}              The merged options.
   */


  _createClass(Collection, [{
    key: "_collOptions",
    value: function _collOptions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var headers = _extends({}, this.options && this.options.headers, options.headers);
      return _extends({}, this.options, options, {
        headers: headers
      });
    }

    /**
     * Retrieves the total number of records in this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Number, Error>}
     */

  }, {
    key: "getTotalRecords",
    value: function getTotalRecords() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _collOptions2 = this._collOptions(options);

      var headers = _collOptions2.headers;

      return this.client.execute({
        method: "HEAD",
        path: (0, _endpoint2.default)("record", this.bucket.name, this.name),
        headers: headers
      }, { raw: true }).then(function (_ref) {
        var headers = _ref.headers;
        return parseInt(headers.get("Total-Records"), 10);
      });
    }

    /**
     * Retrieves collection data.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getData",
    value: function getData() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _collOptions3 = this._collOptions(options);

      var headers = _collOptions3.headers;

      return this.client.execute({
        path: (0, _endpoint2.default)("collection", this.bucket.name, this.name),
        headers: headers
      }).then(function (res) {
        return res.data;
      });
    }

    /**
     * Set collection data.
     * @param  {Object}   data                    The collection data object.
     * @param  {Object}   [options={}]            The options object.
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Boolean}  [options.patch]         The patch option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setData",
    value: function setData(data) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(data)) {
        throw new Error("A collection object is required.");
      }
      var reqOptions = this._collOptions(options);
      var permissions = reqOptions.permissions;


      var path = (0, _endpoint2.default)("collection", this.bucket.name, this.name);
      var request = requests.updateRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Retrieves the list of permissions for this collection.
     *
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getPermissions",
    value: function getPermissions() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _collOptions4 = this._collOptions(options);

      var headers = _collOptions4.headers;

      return this.client.execute({
        path: (0, _endpoint2.default)("collection", this.bucket.name, this.name),
        headers: headers
      }).then(function (res) {
        return res.permissions;
      });
    }

    /**
     * Replaces all existing collection permissions with the ones provided.
     *
     * @param  {Object}   permissions             The permissions object.
     * @param  {Object}   [options={}]            The options object
     * @param  {Object}   [options.headers]       The headers object option.
     * @param  {Boolean}  [options.safe]          The safe option.
     * @param  {Number}   [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "setPermissions",
    value: function setPermissions(permissions) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(permissions)) {
        throw new Error("A permissions object is required.");
      }
      var reqOptions = this._collOptions(options);
      var path = (0, _endpoint2.default)("collection", this.bucket.name, this.name);
      var data = { last_modified: options.last_modified };
      var request = requests.updateRequest(path, { data: data, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Creates a record in current collection.
     *
     * @param  {Object}  record                The record to create.
     * @param  {Object}  [options={}]          The options object.
     * @param  {Object}  [options.headers]     The headers object option.
     * @param  {Boolean} [options.safe]        The safe option.
     * @param  {Object}  [options.permissions] The permissions option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "createRecord",
    value: function createRecord(record) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var reqOptions = this._collOptions(options);
      var permissions = reqOptions.permissions;

      var path = (0, _endpoint2.default)("record", this.bucket.name, this.name, record.id);
      var request = requests.createRequest(path, { data: record, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Adds an attachment to a record, creating the record when it doesn't exist.
     *
     * @param  {String}  dataURL                 The data url.
     * @param  {Object}  [record={}]             The record data.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @param  {String}  [options.filename]      Force the attachment filename.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "addAttachment",
    value: function addAttachment(dataURI) {
      var _this = this;

      var record = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var reqOptions = this._collOptions(options);
      var permissions = reqOptions.permissions;

      var id = record.id || _uuid.v4.v4();
      var path = (0, _endpoint2.default)("attachment", this.bucket.name, this.name, id);
      var addAttachmentRequest = requests.addAttachmentRequest(path, dataURI, {
        data: record,
        permissions: permissions
      }, reqOptions);
      return this.client.execute(addAttachmentRequest, { stringify: false }).then(function () {
        return _this.getRecord(id);
      });
    }

    /**
     * Removes an attachment from a given record.
     *
     * @param  {Object}  recordId                The record id.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     */

  }, {
    key: "removeAttachment",
    value: function removeAttachment(recordId) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var reqOptions = this._collOptions(options);
      var path = (0, _endpoint2.default)("attachment", this.bucket.name, this.name, recordId);
      var request = requests.deleteRequest(path, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Updates a record in current collection.
     *
     * @param  {Object}  record                  The record to update.
     * @param  {Object}  [options={}]            The options object.
     * @param  {Object}  [options.headers]       The headers object option.
     * @param  {Boolean} [options.safe]          The safe option.
     * @param  {Number}  [options.last_modified] The last_modified option.
     * @param  {Object}  [options.permissions]   The permissions option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "updateRecord",
    value: function updateRecord(record) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!(0, _utils.isObject)(record)) {
        throw new Error("A record object is required.");
      }
      if (!record.id) {
        throw new Error("A record id is required.");
      }
      var reqOptions = this._collOptions(options);
      var permissions = reqOptions.permissions;

      var path = (0, _endpoint2.default)("record", this.bucket.name, this.name, record.id);
      var request = requests.updateRequest(path, { data: record, permissions: permissions }, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Deletes a record from the current collection.
     *
     * @param  {Object|String} record                  The record to delete.
     * @param  {Object}        [options={}]            The options object.
     * @param  {Object}        [options.headers]       The headers object option.
     * @param  {Boolean}       [options.safe]          The safe option.
     * @param  {Number}        [options.last_modified] The last_modified option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "deleteRecord",
    value: function deleteRecord(record) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var recordObj = (0, _utils.toDataBody)(record);
      if (!recordObj.id) {
        throw new Error("A record id is required.");
      }
      var id = recordObj.id;
      var last_modified = recordObj.last_modified;

      var reqOptions = this._collOptions(_extends({ last_modified: last_modified }, options));
      var path = (0, _endpoint2.default)("record", this.bucket.name, this.name, id);
      var request = requests.deleteRequest(path, reqOptions);
      return this.client.execute(request);
    }

    /**
     * Retrieves a record from the current collection.
     *
     * @param  {String} id                The record id to retrieve.
     * @param  {Object} [options={}]      The options object.
     * @param  {Object} [options.headers] The headers object option.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "getRecord",
    value: function getRecord(id) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.client.execute(_extends({
        path: (0, _endpoint2.default)("record", this.bucket.name, this.name, id)
      }, this._collOptions(options)));
    }

    /**
     * Lists records from the current collection.
     *
     * Sorting is done by passing a `sort` string option:
     *
     * - The field to order the results by, prefixed with `-` for descending.
     * Default: `-last_modified`.
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/sorting.html
     *
     * Filtering is done by passing a `filters` option object:
     *
     * - `{fieldname: "value"}`
     * - `{min_fieldname: 4000}`
     * - `{in_fieldname: "1,2,3"}`
     * - `{not_fieldname: 0}`
     * - `{exclude_fieldname: "0,1"}`
     *
     * @see http://kinto.readthedocs.io/en/stable/api/1.x/filtering.html
     *
     * Paginating is done by passing a `limit` option, then calling the `next()`
     * method from the resolved result object to fetch the next page, if any.
     *
     * @param  {Object}   [options={}]                    The options object.
     * @param  {Object}   [options.headers]               The headers object option.
     * @param  {Object}   [options.filters=[]]            The filters object.
     * @param  {String}   [options.sort="-last_modified"] The sort field.
     * @param  {String}   [options.limit=null]            The limit field.
     * @param  {String}   [options.pages=1]               The number of result pages to aggregate.
     * @param  {Number}   [options.since=null]            Only retrieve records modified since the provided timestamp.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "listRecords",
    value: function listRecords() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var path = (0, _endpoint2.default)("record", this.bucket.name, this.name);
      var reqOptions = this._collOptions(options);
      return this.client.paginatedList(path, options, reqOptions);
    }

    /**
     * Performs batch operations at the current collection level.
     *
     * @param  {Function} fn                   The batch operation function.
     * @param  {Object}   [options={}]         The options object.
     * @param  {Object}   [options.headers]    The headers object option.
     * @param  {Boolean}  [options.safe]       The safe option.
     * @param  {Boolean}  [options.aggregate]  Produces a grouped result object.
     * @return {Promise<Object, Error>}
     */

  }, {
    key: "batch",
    value: function batch(fn) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var reqOptions = this._collOptions(options);
      return this.client.batch(fn, _extends({}, reqOptions, {
        bucket: this.bucket.name,
        collection: this.name
      }));
    }
  }]);

  return Collection;
}(), (_applyDecoratedDescriptor(_class.prototype, "addAttachment", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addAttachment"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeAttachment", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "removeAttachment"), _class.prototype)), _class));
exports.default = Collection;
},{"./endpoint":429,"./requests":433,"./utils":434,"uuid":438}],429:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = endpoint;
/**
 * Endpoints templates.
 * @type {Object}
 */
var ENDPOINTS = {
  root: function root() {
    return "/";
  },
  batch: function batch() {
    return "/batch";
  },
  permissions: function permissions() {
    return "/permissions";
  },
  bucket: function bucket(_bucket) {
    return "/buckets" + (_bucket ? "/" + _bucket : "");
  },
  history: function history(bucket) {
    return ENDPOINTS.bucket(bucket) + "/history";
  },
  collection: function collection(bucket, coll) {
    return ENDPOINTS.bucket(bucket) + "/collections" + (coll ? "/" + coll : "");
  },
  group: function group(bucket, _group) {
    return ENDPOINTS.bucket(bucket) + "/groups" + (_group ? "/" + _group : "");
  },
  record: function record(bucket, coll, id) {
    return ENDPOINTS.collection(bucket, coll) + "/records" + (id ? "/" + id : "");
  },
  attachment: function attachment(bucket, coll, id) {
    return ENDPOINTS.record(bucket, coll, id) + "/attachment";
  }
};

/**
 * Retrieves a server enpoint by its name.
 *
 * @private
 * @param  {String}    name The endpoint name.
 * @param  {...string} args The endpoint parameters.
 * @return {String}
 */
function endpoint(name) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return ENDPOINTS[name].apply(ENDPOINTS, args);
}
},{}],430:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Kinto server error code descriptors.
 * @type {Object}
 */
exports.default = {
  104: "Missing Authorization Token",
  105: "Invalid Authorization Token",
  106: "Request body was not valid JSON",
  107: "Invalid request parameter",
  108: "Missing request parameter",
  109: "Invalid posted data",
  110: "Invalid Token / id",
  111: "Missing Token / id",
  112: "Content-Length header was not provided",
  113: "Request body too large",
  114: "Resource was created, updated or deleted meanwhile",
  115: "Method not allowed on this end point (hint: server may be readonly)",
  116: "Requested version not available on this server",
  117: "Client has sent too many requests",
  121: "Resource access is forbidden for this user",
  122: "Another resource violates constraint",
  201: "Service Temporary unavailable due to high load",
  202: "Service deprecated",
  999: "Internal Server Error"
};
},{}],431:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _errors = require("./errors");

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Enhanced HTTP client for the Kinto protocol.
 * @private
 */

var HTTP = function () {
  _createClass(HTTP, null, [{
    key: "DEFAULT_REQUEST_HEADERS",

    /**
     * Default HTTP request headers applied to each outgoing request.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        "Accept": "application/json",
        "Content-Type": "application/json"
      };
    }

    /**
     * Default options.
     *
     * @type {Object}
     */

  }, {
    key: "defaultOptions",
    get: function get() {
      return { timeout: 5000, requestMode: "cors" };
    }

    /**
     * Constructor.
     *
     * @param {EventEmitter} events                       The event handler.
     * @param {Object}       [options={}}                 The options object.
     * @param {Number}       [options.timeout=5000]       The request timeout in ms (default: `5000`).
     * @param {String}       [options.requestMode="cors"] The HTTP request mode (default: `"cors"`).
     */

  }]);

  function HTTP(events) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, HTTP);

    // public properties
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */
    if (!events) {
      throw new Error("No events handler provided");
    }
    this.events = events;

    /**
     * The request mode.
     * @see  https://fetch.spec.whatwg.org/#requestmode
     * @type {String}
     */
    this.requestMode = options.requestMode || HTTP.defaultOptions.requestMode;

    /**
     * The request timeout.
     * @type {Number}
     */
    this.timeout = options.timeout || HTTP.defaultOptions.timeout;
  }

  /**
   * Performs an HTTP request to the Kinto server.
   *
   * Resolves with an objet containing the following HTTP response properties:
   * - `{Number}  status`  The HTTP status code.
   * - `{Object}  json`    The JSON response body.
   * - `{Headers} headers` The response headers object; see the ES6 fetch() spec.
   *
   * @param  {String} url               The URL.
   * @param  {Object} [options={}]      The fetch() options object.
   * @param  {Object} [options.headers] The request headers object (default: {})
   * @return {Promise}
   */


  _createClass(HTTP, [{
    key: "request",
    value: function request(url) {
      var _this = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? { headers: {} } : arguments[1];

      var response = void 0,
          status = void 0,
          statusText = void 0,
          headers = void 0,
          hasTimedout = void 0;
      // Ensure default request headers are always set
      options.headers = _extends({}, HTTP.DEFAULT_REQUEST_HEADERS, options.headers);
      // If a multipart body is provided, remove any custom Content-Type header as
      // the fetch() implementation will add the correct one for us.
      if (options.body && typeof options.body.append === "function") {
        delete options.headers["Content-Type"];
      }
      options.mode = this.requestMode;
      return new Promise(function (resolve, reject) {
        var _timeoutId = setTimeout(function () {
          hasTimedout = true;
          reject(new Error("Request timeout."));
        }, _this.timeout);
        fetch(url, options).then(function (res) {
          if (!hasTimedout) {
            clearTimeout(_timeoutId);
            resolve(res);
          }
        }).catch(function (err) {
          if (!hasTimedout) {
            clearTimeout(_timeoutId);
            reject(err);
          }
        });
      }).then(function (res) {
        response = res;
        headers = res.headers;
        status = res.status;
        statusText = res.statusText;
        _this._checkForDeprecationHeader(headers);
        _this._checkForBackoffHeader(status, headers);
        _this._checkForRetryAfterHeader(status, headers);
        return res.text();
      })
      // Check if we have a body; if so parse it as JSON.
      .then(function (text) {
        if (text.length === 0) {
          return null;
        }
        // Note: we can't consume the response body twice.
        return JSON.parse(text);
      }).catch(function (err) {
        var error = new Error("HTTP " + (status || 0) + "; " + err);
        error.response = response;
        error.stack = err.stack;
        throw error;
      }).then(function (json) {
        if (json && status >= 400) {
          var message = "HTTP " + status + " " + (json.error || "") + ": ";
          if (json.errno && json.errno in _errors2.default) {
            var errnoMsg = _errors2.default[json.errno];
            message += errnoMsg;
            if (json.message && json.message !== errnoMsg) {
              message += " (" + json.message + ")";
            }
          } else {
            message += statusText || "";
          }
          var error = new Error(message.trim());
          error.response = response;
          error.data = json;
          throw error;
        }
        return { status: status, json: json, headers: headers };
      });
    }
  }, {
    key: "_checkForDeprecationHeader",
    value: function _checkForDeprecationHeader(headers) {
      var alertHeader = headers.get("Alert");
      if (!alertHeader) {
        return;
      }
      var alert = void 0;
      try {
        alert = JSON.parse(alertHeader);
      } catch (err) {
        console.warn("Unable to parse Alert header message", alertHeader);
        return;
      }
      console.warn(alert.message, alert.url);
      this.events.emit("deprecated", alert);
    }
  }, {
    key: "_checkForBackoffHeader",
    value: function _checkForBackoffHeader(status, headers) {
      var backoffMs = void 0;
      var backoffSeconds = parseInt(headers.get("Backoff"), 10);
      if (backoffSeconds > 0) {
        backoffMs = new Date().getTime() + backoffSeconds * 1000;
      } else {
        backoffMs = 0;
      }
      this.events.emit("backoff", backoffMs);
    }
  }, {
    key: "_checkForRetryAfterHeader",
    value: function _checkForRetryAfterHeader(status, headers) {
      var retryAfter = headers.get("Retry-After");
      if (!retryAfter) {
        return;
      }
      retryAfter = new Date().getTime() + parseInt(retryAfter, 10) * 1000;
      this.events.emit("retry-after", retryAfter);
    }
  }]);

  return HTTP;
}();

exports.default = HTTP;
},{"./errors":430}],432:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

require("isomorphic-fetch");

var _events = require("events");

var _base = require("./base");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KintoClient = function (_KintoClientBase) {
  _inherits(KintoClient, _KintoClientBase);

  function KintoClient(remote) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, KintoClient);

    var events = options.events || new _events.EventEmitter();

    return _possibleConstructorReturn(this, Object.getPrototypeOf(KintoClient).call(this, remote, Object.assign({ events: events }, options)));
  }

  return KintoClient;
}(_base2.default);

// This is a hack to avoid Browserify to expose the above class
// at `new KintoClient()` instead of `new KintoClient.default()`.
// See https://github.com/Kinto/kinto-http.js/issues/77


exports.default = KintoClient;
if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object") {
  module.exports = KintoClient;
}
},{"./base":425,"events":423,"isomorphic-fetch":424}],433:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createRequest = createRequest;
exports.updateRequest = updateRequest;
exports.deleteRequest = deleteRequest;
exports.addAttachmentRequest = addAttachmentRequest;

var _utils = require("./utils");

var requestDefaults = {
  safe: false,
  // check if we should set default content type here
  headers: {},
  permissions: undefined,
  data: undefined,
  patch: false
};

/**
 * @private
 */
function safeHeader(safe, last_modified) {
  if (!safe) {
    return {};
  }
  if (last_modified) {
    return { "If-Match": "\"" + last_modified + "\"" };
  }
  return { "If-None-Match": "*" };
}

/**
 * @private
 */
function createRequest(path, _ref) {
  var data = _ref.data;
  var permissions = _ref.permissions;
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _requestDefaults$opti = _extends({}, requestDefaults, options);

  var headers = _requestDefaults$opti.headers;
  var safe = _requestDefaults$opti.safe;

  return {
    method: data && data.id ? "PUT" : "POST",
    path: path,
    headers: _extends({}, headers, safeHeader(safe)),
    body: {
      data: data,
      permissions: permissions
    }
  };
}

/**
 * @private
 */
function updateRequest(path, _ref2) {
  var data = _ref2.data;
  var permissions = _ref2.permissions;
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var _requestDefaults$opti2 = _extends({}, requestDefaults, options);

  var headers = _requestDefaults$opti2.headers;
  var safe = _requestDefaults$opti2.safe;
  var patch = _requestDefaults$opti2.patch;

  var _data$options = _extends({}, data, options);

  var last_modified = _data$options.last_modified;


  if (Object.keys((0, _utils.omit)(data, "id", "last_modified")).length === 0) {
    data = undefined;
  }

  return {
    method: patch ? "PATCH" : "PUT",
    path: path,
    headers: _extends({}, headers, safeHeader(safe, last_modified)),
    body: {
      data: data,
      permissions: permissions
    }
  };
}

/**
 * @private
 */
function deleteRequest(path) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _requestDefaults$opti3 = _extends({}, requestDefaults, options);

  var headers = _requestDefaults$opti3.headers;
  var safe = _requestDefaults$opti3.safe;
  var last_modified = _requestDefaults$opti3.last_modified;

  if (safe && !last_modified) {
    throw new Error("Safe concurrency check requires a last_modified value.");
  }
  return {
    method: "DELETE",
    path: path,
    headers: _extends({}, headers, safeHeader(safe, last_modified))
  };
}

/**
 * @private
 */
function addAttachmentRequest(path, dataURI) {
  var _ref3 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var data = _ref3.data;
  var permissions = _ref3.permissions;
  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  var _requestDefaults$opti4 = _extends({}, requestDefaults, options);

  var headers = _requestDefaults$opti4.headers;
  var safe = _requestDefaults$opti4.safe;

  var _data$options2 = _extends({}, data, options);

  var last_modified = _data$options2.last_modified;

  if (safe && !last_modified) {
    throw new Error("Safe concurrency check requires a last_modified value.");
  }

  var body = { data: data, permissions: permissions };
  var formData = (0, _utils.createFormData)(dataURI, body, options);

  return {
    method: "POST",
    path: path,
    headers: _extends({}, headers, safeHeader(safe, last_modified)),
    body: formData
  };
}
},{"./utils":434}],434:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.partition = partition;
exports.pMap = pMap;
exports.omit = omit;
exports.toDataBody = toDataBody;
exports.qsify = qsify;
exports.checkVersion = checkVersion;
exports.support = support;
exports.capable = capable;
exports.nobatch = nobatch;
exports.isObject = isObject;
exports.parseDataURL = parseDataURL;
exports.extractFileInfo = extractFileInfo;
exports.createFormData = createFormData;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Chunks an array into n pieces.
 *
 * @private
 * @param  {Array}  array
 * @param  {Number} n
 * @return {Array}
 */
function partition(array, n) {
  if (n <= 0) {
    return array;
  }
  return array.reduce(function (acc, x, i) {
    if (i === 0 || i % n === 0) {
      acc.push([x]);
    } else {
      acc[acc.length - 1].push(x);
    }
    return acc;
  }, []);
}

/**
 * Maps a list to promises using the provided mapping function, executes them
 * sequentially then returns a Promise resolving with ordered results obtained.
 * Think of this as a sequential Promise.all.
 *
 * @private
 * @param  {Array}    list The list to map.
 * @param  {Function} fn   The mapping function.
 * @return {Promise}
 */
function pMap(list, fn) {
  var results = [];
  return list.reduce(function (promise, entry) {
    return promise.then(function () {
      return Promise.resolve(fn(entry)).then(function (result) {
        return results = results.concat(result);
      });
    });
  }, Promise.resolve()).then(function () {
    return results;
  });
}

/**
 * Takes an object and returns a copy of it with the provided keys omitted.
 *
 * @private
 * @param  {Object}    obj  The source object.
 * @param  {...String} keys The keys to omit.
 * @return {Object}
 */
function omit(obj) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keys.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/**
 * Always returns a resource data object from the provided argument.
 *
 * @private
 * @param  {Object|String} resource
 * @return {Object}
 */
function toDataBody(resource) {
  if (isObject(resource)) {
    return resource;
  }
  if (typeof resource === "string") {
    return { id: resource };
  }
  throw new Error("Invalid argument.");
}

/**
 * Transforms an object into an URL query string, stripping out any undefined
 * values.
 *
 * @param  {Object} obj
 * @return {String}
 */
function qsify(obj) {
  var encode = function encode(v) {
    return encodeURIComponent(typeof v === "boolean" ? String(v) : v);
  };
  var stripUndefined = function stripUndefined(o) {
    return JSON.parse(JSON.stringify(o));
  };
  var stripped = stripUndefined(obj);
  return Object.keys(stripped).map(function (k) {
    var ks = encode(k) + "=";
    if (Array.isArray(stripped[k])) {
      return ks + stripped[k].map(function (v) {
        return encode(v);
      }).join(",");
    } else {
      return ks + encode(stripped[k]);
    }
  }).join("&");
}

/**
 * Checks if a version is within the provided range.
 *
 * @param  {String} version    The version to check.
 * @param  {String} minVersion The minimum supported version (inclusive).
 * @param  {String} maxVersion The minimum supported version (exclusive).
 * @throws {Error} If the version is outside of the provided range.
 */
function checkVersion(version, minVersion, maxVersion) {
  var extract = function extract(str) {
    return str.split(".").map(function (x) {
      return parseInt(x, 10);
    });
  };

  var _extract = extract(version);

  var _extract2 = _slicedToArray(_extract, 2);

  var verMajor = _extract2[0];
  var verMinor = _extract2[1];

  var _extract3 = extract(minVersion);

  var _extract4 = _slicedToArray(_extract3, 2);

  var minMajor = _extract4[0];
  var minMinor = _extract4[1];

  var _extract5 = extract(maxVersion);

  var _extract6 = _slicedToArray(_extract5, 2);

  var maxMajor = _extract6[0];
  var maxMinor = _extract6[1];

  var checks = [verMajor < minMajor, verMajor === minMajor && verMinor < minMinor, verMajor > maxMajor, verMajor === maxMajor && verMinor >= maxMinor];
  if (checks.some(function (x) {
    return x;
  })) {
    throw new Error("Version " + version + " doesn't satisfy " + (minVersion + " <= x < " + maxVersion));
  }
}

/**
 * Generates a decorator function ensuring a version check is performed against
 * the provided requirements before executing it.
 *
 * @param  {String} min The required min version (inclusive).
 * @param  {String} max The required max version (inclusive).
 * @return {Function}
 */
function support(min, max) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this = this;

        var wrappedMethod = function wrappedMethod() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          // "this" is the current instance which its method is decorated.
          var client = "client" in _this ? _this.client : _this;
          return client.fetchHTTPApiVersion().then(function (version) {
            return checkVersion(version, min, max);
          }).then(function () {
            return fn.apply(_this, args);
          });
        };
        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}

/**
 * Generates a decorator function ensuring that the specified capabilities are
 * available on the server before executing it.
 *
 * @param  {Array<String>} capabilities The required capabilities.
 * @return {Function}
 */
function capable(capabilities) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this2 = this;

        var wrappedMethod = function wrappedMethod() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          // "this" is the current instance which its method is decorated.
          var client = "client" in _this2 ? _this2.client : _this2;
          return client.fetchServerCapabilities().then(function (available) {
            var missing = capabilities.filter(function (c) {
              return !available.hasOwnProperty(c);
            });
            if (missing.length > 0) {
              throw new Error("Required capabilities " + missing.join(", ") + " " + "not present on server");
            }
          }).then(function () {
            return fn.apply(_this2, args);
          });
        };
        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}

/**
 * Generates a decorator function ensuring an operation is not performed from
 * within a batch request.
 *
 * @param  {String} message The error message to throw.
 * @return {Function}
 */
function nobatch(message) {
  return function (target, key, descriptor) {
    var fn = descriptor.value;
    return {
      configurable: true,
      get: function get() {
        var _this3 = this;

        var wrappedMethod = function wrappedMethod() {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          // "this" is the current instance which its method is decorated.
          if (_this3._isBatch) {
            throw new Error(message);
          }
          return fn.apply(_this3, args);
        };
        Object.defineProperty(this, key, {
          value: wrappedMethod,
          configurable: true,
          writable: true
        });
        return wrappedMethod;
      }
    };
  };
}

/**
 * Returns true if the specified value is an object (i.e. not an array nor null).
 * @param  {Object} thing The value to inspect.
 * @return {bool}
 */
function isObject(thing) {
  return (typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null && !Array.isArray(thing);
}

/**
 * Parses a data url.
 * @param  {String} dataURL The data url.
 * @return {Object}
 */
function parseDataURL(dataURL) {
  var regex = /^data:(.*);base64,(.*)/;
  var match = dataURL.match(regex);
  if (!match) {
    throw new Error("Invalid data-url: " + String(dataURL).substr(0, 32) + "...");
  }
  var props = match[1];
  var base64 = match[2];

  var _props$split = props.split(";");

  var _props$split2 = _toArray(_props$split);

  var type = _props$split2[0];

  var rawParams = _props$split2.slice(1);

  var params = rawParams.reduce(function (acc, param) {
    var _param$split = param.split("=");

    var _param$split2 = _slicedToArray(_param$split, 2);

    var key = _param$split2[0];
    var value = _param$split2[1];

    return _extends({}, acc, _defineProperty({}, key, value));
  }, {});
  return _extends({}, params, { type: type, base64: base64 });
}

/**
 * Extracts file information from a data url.
 * @param  {String} dataURL The data url.
 * @return {Object}
 */
function extractFileInfo(dataURL) {
  var _parseDataURL = parseDataURL(dataURL);

  var name = _parseDataURL.name;
  var type = _parseDataURL.type;
  var base64 = _parseDataURL.base64;

  var binary = atob(base64);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  var blob = new Blob([new Uint8Array(array)], { type: type });
  return { blob: blob, name: name };
}

/**
 * Creates a FormData instance from a data url and an existing JSON response
 * body.
 * @param  {String} dataURL            The data url.
 * @param  {Object} body               The response body.
 * @param  {Object} [options={}]       The options object.
 * @param  {Object} [options.filename] Force attachment file name.
 * @return {FormData}
 */
function createFormData(dataURL, body) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var _options$filename = options.filename;
  var filename = _options$filename === undefined ? "untitled" : _options$filename;

  var _extractFileInfo = extractFileInfo(dataURL);

  var blob = _extractFileInfo.blob;
  var name = _extractFileInfo.name;

  var formData = new FormData();
  formData.append("attachment", blob, name || filename);
  for (var property in body) {
    if (typeof body[property] !== "undefined") {
      formData.append(property, JSON.stringify(body[property]));
    }
  }
  return formData;
}
},{}],435:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":436}],436:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":25}],437:[function(require,module,exports){
(function (global){

var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],438:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":437}],439:[function(require,module,exports){
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (!body) {
        this._bodyText = ''
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = input
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input
      } else {
        request = new Request(input, init)
      }

      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

},{}],440:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _collection = require("./collection");

var _collection2 = _interopRequireDefault(_collection);

var _base = require("./adapters/base");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BUCKET_NAME = "default";
var DEFAULT_REMOTE = "http://localhost:8888/v1";

/**
 * KintoBase class.
 */

var KintoBase = function () {
  (0, _createClass3.default)(KintoBase, null, [{
    key: "adapters",

    /**
     * Provides a public access to the base adapter class. Users can create a
     * custom DB adapter by extending {@link BaseAdapter}.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        BaseAdapter: _base2.default
      };
    }

    /**
     * Synchronization strategies. Available strategies are:
     *
     * - `MANUAL`: Conflicts will be reported in a dedicated array.
     * - `SERVER_WINS`: Conflicts are resolved using remote data.
     * - `CLIENT_WINS`: Conflicts are resolved using local data.
     *
     * @type {Object}
     */

  }, {
    key: "syncStrategy",
    get: function get() {
      return _collection2.default.strategy;
    }

    /**
     * Constructor.
     *
     * Options:
     * - `{String}`       `remote`         The server URL to use.
     * - `{String}`       `bucket`         The collection bucket name.
     * - `{EventEmitter}` `events`         Events handler.
     * - `{BaseAdapter}`  `adapter`        The base DB adapter class.
     * - `{Object}`       `adapterOptions` Options given to the adapter.
     * - `{String}`       `dbPrefix`       The DB name prefix.
     * - `{Object}`       `headers`        The HTTP headers to use.
     * - `{String}`       `requestMode`    The HTTP CORS mode to use.
     * - `{Number}`       `timeout`        The requests timeout in ms (default: `5000`).
     *
     * @param  {Object} options The options object.
     */

  }]);

  function KintoBase() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, KintoBase);

    var defaults = {
      bucket: DEFAULT_BUCKET_NAME,
      remote: DEFAULT_REMOTE
    };
    this._options = (0, _extends3.default)({}, defaults, options);
    if (!this._options.adapter) {
      throw new Error("No adapter provided");
    }

    var _options = this._options;
    var remote = _options.remote;
    var events = _options.events;
    var headers = _options.headers;
    var requestMode = _options.requestMode;
    var timeout = _options.timeout;
    var ApiClass = _options.ApiClass;

    // public properties

    /**
     * The kinto HTTP client instance.
     * @type {KintoClient}
     */

    this.api = new ApiClass(remote, { events: events, headers: headers, requestMode: requestMode, timeout: timeout });
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */
    this.events = this._options.events;
  }

  /**
   * Creates a {@link Collection} instance. The second (optional) parameter
   * will set collection-level options like e.g. `remoteTransformers`.
   *
   * @param  {String} collName The collection name.
   * @param  {Object} options  May contain the following fields:
   *                           remoteTransformers: Array<RemoteTransformer>
   * @return {Collection}
   */


  (0, _createClass3.default)(KintoBase, [{
    key: "collection",
    value: function collection(collName) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!collName) {
        throw new Error("missing collection name");
      }

      var bucket = this._options.bucket;
      return new _collection2.default(bucket, collName, this.api, {
        events: this._options.events,
        adapter: this._options.adapter,
        adapterOptions: this._options.adapterOptions,
        dbPrefix: this._options.dbPrefix,
        idSchema: options.idSchema,
        remoteTransformers: options.remoteTransformers,
        hooks: options.hooks
      });
    }
  }]);
  return KintoBase;
}();

exports.default = KintoBase;

},{"./adapters/base":442,"./collection":443,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/extends":18}],441:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require("babel-runtime/helpers/get");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _base = require("./base.js");

var _base2 = _interopRequireDefault(_base);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INDEXED_FIELDS = ["id", "_status", "last_modified"];

/**
 * IDB cursor handlers.
 * @type {Object}
 */
var cursorHandlers = {
  all: function all(filters, done) {
    var results = [];
    return function (event) {
      var cursor = event.target.result;
      if (cursor) {
        if ((0, _utils.filterObject)(filters, cursor.value)) {
          results.push(cursor.value);
        }
        cursor.continue();
      } else {
        done(results);
      }
    };
  },
  in: function _in(values, done) {
    if (values.length === 0) {
      return done([]);
    }
    var sortedValues = [].slice.call(values).sort();
    var results = [];
    return function (event) {
      var cursor = event.target.result;
      if (!cursor) {
        done(results);
        return;
      }
      var key = cursor.key;
      var value = cursor.value;

      var i = 0;
      while (key > sortedValues[i]) {
        // The cursor has passed beyond this key. Check next.
        ++i;
        if (i === sortedValues.length) {
          done(results); // There is no next. Stop searching.
          return;
        }
      }
      if (key === sortedValues[i]) {
        results.push(value);
        cursor.continue();
      } else {
        cursor.continue(sortedValues[i]);
      }
    };
  }
};

/**
 * Extract from filters definition the first indexed field. Since indexes were
 * created on single-columns, extracting a single one makes sense.
 *
 * @param  {Object} filters The filters object.
 * @return {String|undefined}
 */
function findIndexedField(filters) {
  var filteredFields = (0, _keys2.default)(filters);
  var indexedFields = filteredFields.filter(function (field) {
    return INDEXED_FIELDS.indexOf(field) !== -1;
  });
  return indexedFields[0];
}

/**
 * Creates an IDB request and attach it the appropriate cursor event handler to
 * perform a list query.
 *
 * Multiple matching values are handled by passing an array.
 *
 * @param  {IDBStore}         store      The IDB store.
 * @param  {String|undefined} indexField The indexed field to query, if any.
 * @param  {Any}              value      The value to filter, if any.
 * @param  {Object}           filters    More filters.
 * @param  {Function}         done       The operation completion handler.
 * @return {IDBRequest}
 */
function createListRequest(store, indexField, value, filters, done) {
  if (!indexField) {
    // Get all records.
    var _request = store.openCursor();
    _request.onsuccess = cursorHandlers.all(filters, done);
    return _request;
  }

  // WHERE IN equivalent clause
  if (Array.isArray(value)) {
    var _request2 = store.index(indexField).openCursor();
    _request2.onsuccess = cursorHandlers.in(value, done);
    return _request2;
  }

  // WHERE field = value clause
  var request = store.index(indexField).openCursor(IDBKeyRange.only(value));
  request.onsuccess = cursorHandlers.all(filters, done);
  return request;
}

/**
 * IndexedDB adapter.
 *
 * This adapter doesn't support any options.
 */

var IDB = function (_BaseAdapter) {
  (0, _inherits3.default)(IDB, _BaseAdapter);

  /**
   * Constructor.
   *
   * @param  {String} dbname The database nale.
   */
  function IDB(dbname) {
    (0, _classCallCheck3.default)(this, IDB);

    var _this = (0, _possibleConstructorReturn3.default)(this, (IDB.__proto__ || (0, _getPrototypeOf2.default)(IDB)).call(this));

    _this._db = null;
    // public properties
    /**
     * The database name.
     * @type {String}
     */
    _this.dbname = dbname;
    return _this;
  }

  (0, _createClass3.default)(IDB, [{
    key: "_handleError",
    value: function _handleError(method, err) {
      var error = new Error(method + "() " + err.message);
      error.stack = err.stack;
      throw error;
    }

    /**
     * Ensures a connection to the IndexedDB database has been opened.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      if (this._db) {
        return _promise2.default.resolve(this);
      }
      return new _promise2.default(function (resolve, reject) {
        var request = indexedDB.open(_this2.dbname, 1);
        request.onupgradeneeded = function (event) {
          // DB object
          var db = event.target.result;
          // Main collection store
          var collStore = db.createObjectStore(_this2.dbname, {
            keyPath: "id"
          });
          // Primary key (generated by IdSchema, UUID by default)
          collStore.createIndex("id", "id", { unique: true });
          // Local record status ("synced", "created", "updated", "deleted")
          collStore.createIndex("_status", "_status");
          // Last modified field
          collStore.createIndex("last_modified", "last_modified");

          // Metadata store
          var metaStore = db.createObjectStore("__meta__", {
            keyPath: "name"
          });
          metaStore.createIndex("name", "name", { unique: true });
        };
        request.onerror = function (event) {
          return reject(event.target.error);
        };
        request.onsuccess = function (event) {
          _this2._db = event.target.result;
          resolve(_this2);
        };
      });
    }

    /**
     * Closes current connection to the database.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "close",
    value: function close() {
      if (this._db) {
        this._db.close(); // indexedDB.close is synchronous
        this._db = null;
      }
      return (0, _get3.default)(IDB.prototype.__proto__ || (0, _getPrototypeOf2.default)(IDB.prototype), "close", this).call(this);
    }

    /**
     * Returns a transaction and a store objects for this collection.
     *
     * To determine if a transaction has completed successfully, we should rather
     * listen to the transaction’s complete event rather than the IDBObjectStore
     * request’s success event, because the transaction may still fail after the
     * success event fires.
     *
     * @param  {String}      mode  Transaction mode ("readwrite" or undefined)
     * @param  {String|null} name  Store name (defaults to coll name)
     * @return {Object}
     */

  }, {
    key: "prepare",
    value: function prepare() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var storeName = name || this.dbname;
      // On Safari, calling IDBDatabase.transaction with mode == undefined raises
      // a TypeError.
      var transaction = mode ? this._db.transaction([storeName], mode) : this._db.transaction([storeName]);
      var store = transaction.objectStore(storeName);
      return { transaction: transaction, store: store };
    }

    /**
     * Deletes every records in the current collection.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "clear",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this3 = this;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.open();

              case 3:
                return _context.abrupt("return", new _promise2.default(function (resolve, reject) {
                  var _prepare = _this3.prepare("readwrite");

                  var transaction = _prepare.transaction;
                  var store = _prepare.store;

                  store.clear();
                  transaction.onerror = function (event) {
                    return reject(new Error(event.target.error));
                  };
                  transaction.oncomplete = function () {
                    return resolve();
                  };
                }));

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);

                this._handleError("clear", _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function clear() {
        return _ref.apply(this, arguments);
      }

      return clear;
    }()

    /**
     * Executes the set of synchronous CRUD operations described in the provided
     * callback within an IndexedDB transaction, for current db store.
     *
     * The callback will be provided an object exposing the following synchronous
     * CRUD operation methods: get, create, update, delete.
     *
     * Important note: because limitations in IndexedDB implementations, no
     * asynchronous code should be performed within the provided callback; the
     * promise will therefore be rejected if the callback returns a Promise.
     *
     * Options:
     * - {Array} preload: The list of record IDs to fetch and make available to
     *   the transaction object get() method (default: [])
     *
     * @example
     * const db = new IDB("example");
     * db.execute(transaction => {
     *   transaction.create({id: 1, title: "foo"});
     *   transaction.update({id: 2, title: "bar"});
     *   transaction.delete(3);
     *   return "foo";
     * })
     *   .catch(console.error.bind(console));
     *   .then(console.log.bind(console)); // => "foo"
     *
     * @param  {Function} callback The operation description callback.
     * @param  {Object}   options  The options object.
     * @return {Promise}
     */

  }, {
    key: "execute",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(callback) {
        var _this4 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { preload: [] };
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.open();

              case 2:
                return _context2.abrupt("return", new _promise2.default(function (resolve, reject) {
                  // Start transaction.
                  var _prepare2 = _this4.prepare("readwrite");

                  var transaction = _prepare2.transaction;
                  var store = _prepare2.store;
                  // Preload specified records using index.

                  var ids = options.preload;
                  store.index("id").openCursor().onsuccess = cursorHandlers.in(ids, function (records) {
                    // Store obtained records by id.
                    var preloaded = records.reduce(function (acc, record) {
                      acc[record.id] = record;
                      return acc;
                    }, {});
                    // Expose a consistent API for every adapter instead of raw store methods.
                    var proxy = transactionProxy(store, preloaded);
                    // The callback is executed synchronously within the same transaction.
                    var result = void 0;
                    try {
                      result = callback(proxy);
                    } catch (e) {
                      transaction.abort();
                      reject(e);
                    }
                    if (result instanceof _promise2.default) {
                      // XXX: investigate how to provide documentation details in error.
                      reject(new Error("execute() callback should not return a Promise."));
                    }
                    // XXX unsure if we should manually abort the transaction on error
                    transaction.onerror = function (event) {
                      return reject(new Error(event.target.error));
                    };
                    transaction.oncomplete = function (event) {
                      return resolve(result);
                    };
                  });
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function execute(_x4) {
        return _ref2.apply(this, arguments);
      }

      return execute;
    }()

    /**
     * Retrieve a record by its primary key from the IndexedDB database.
     *
     * @override
     * @param  {String} id The record id.
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
        var _this5 = this;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.open();

              case 3:
                return _context3.abrupt("return", new _promise2.default(function (resolve, reject) {
                  var _prepare3 = _this5.prepare();

                  var transaction = _prepare3.transaction;
                  var store = _prepare3.store;

                  var request = store.get(id);
                  transaction.onerror = function (event) {
                    return reject(new Error(event.target.error));
                  };
                  transaction.oncomplete = function () {
                    return resolve(request.result);
                  };
                }));

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

                this._handleError("get", _context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function get(_x5) {
        return _ref3.apply(this, arguments);
      }

      return get;
    }()

    /**
     * Lists all records from the IndexedDB database.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var _this6 = this;

        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { filters: {} };
        var filters, indexField, value, results;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                filters = params.filters;
                indexField = findIndexedField(filters);
                value = filters[indexField];
                _context4.prev = 3;
                _context4.next = 6;
                return this.open();

              case 6:
                _context4.next = 8;
                return new _promise2.default(function (resolve, reject) {
                  var results = [];
                  // If `indexField` was used already, don't filter again.
                  var remainingFilters = (0, _utils.omitKeys)(filters, indexField);

                  var _prepare4 = _this6.prepare();

                  var transaction = _prepare4.transaction;
                  var store = _prepare4.store;

                  createListRequest(store, indexField, value, remainingFilters, function (_results) {
                    // we have received all requested records, parking them within
                    // current scope
                    results = _results;
                  });
                  transaction.onerror = function (event) {
                    return reject(new Error(event.target.error));
                  };
                  transaction.oncomplete = function (event) {
                    return resolve(results);
                  };
                });

              case 8:
                results = _context4.sent;
                return _context4.abrupt("return", params.order ? (0, _utils.sortObjects)(params.order, results) : results);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](3);

                this._handleError("list", _context4.t0);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 12]]);
      }));

      function list() {
        return _ref4.apply(this, arguments);
      }

      return list;
    }()

    /**
     * Store the lastModified value into metadata store.
     *
     * @override
     * @param  {Number}  lastModified
     * @return {Promise}
     */

  }, {
    key: "saveLastModified",
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(lastModified) {
        var _this7 = this;

        var value;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                value = parseInt(lastModified, 10) || null;
                _context5.next = 3;
                return this.open();

              case 3:
                return _context5.abrupt("return", new _promise2.default(function (resolve, reject) {
                  var _prepare5 = _this7.prepare("readwrite", "__meta__");

                  var transaction = _prepare5.transaction;
                  var store = _prepare5.store;

                  store.put({ name: "lastModified", value: value });
                  transaction.onerror = function (event) {
                    return reject(event.target.error);
                  };
                  transaction.oncomplete = function (event) {
                    return resolve(value);
                  };
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveLastModified(_x7) {
        return _ref5.apply(this, arguments);
      }

      return saveLastModified;
    }()

    /**
     * Retrieve saved lastModified value.
     *
     * @override
     * @return {Promise}
     */

  }, {
    key: "getLastModified",
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var _this8 = this;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.open();

              case 2:
                return _context6.abrupt("return", new _promise2.default(function (resolve, reject) {
                  var _prepare6 = _this8.prepare(undefined, "__meta__");

                  var transaction = _prepare6.transaction;
                  var store = _prepare6.store;

                  var request = store.get("lastModified");
                  transaction.onerror = function (event) {
                    return reject(event.target.error);
                  };
                  transaction.oncomplete = function (event) {
                    resolve(request.result && request.result.value || null);
                  };
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getLastModified() {
        return _ref6.apply(this, arguments);
      }

      return getLastModified;
    }()

    /**
     * Load a dump of records exported from a server.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "loadDump",
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(records) {
        var previousLastModified, lastModified;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.execute(function (transaction) {
                  records.forEach(function (record) {
                    return transaction.update(record);
                  });
                });

              case 3:
                _context7.next = 5;
                return this.getLastModified();

              case 5:
                previousLastModified = _context7.sent;
                lastModified = Math.max.apply(Math, (0, _toConsumableArray3.default)(records.map(function (record) {
                  return record.last_modified;
                })));

                if (!(lastModified > previousLastModified)) {
                  _context7.next = 10;
                  break;
                }

                _context7.next = 10;
                return this.saveLastModified(lastModified);

              case 10:
                return _context7.abrupt("return", records);

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](0);

                this._handleError("loadDump", _context7.t0);

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 13]]);
      }));

      function loadDump(_x8) {
        return _ref7.apply(this, arguments);
      }

      return loadDump;
    }()
  }]);
  return IDB;
}(_base2.default);

/**
 * IDB transaction proxy.
 *
 * @param  {IDBStore} store     The IndexedDB database store.
 * @param  {Array}    preloaded The list of records to make available to
 *                              get() (default: []).
 * @return {Object}
 */


exports.default = IDB;
function transactionProxy(store) {
  var preloaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return {
    create: function create(record) {
      store.add(record);
    },
    update: function update(record) {
      store.put(record);
    },
    delete: function _delete(id) {
      store.delete(id);
    },
    get: function get(id) {
      return preloaded[id];
    }
  };
}

},{"../utils":445,"./base.js":442,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/get":19,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":21,"babel-runtime/helpers/toConsumableArray":22,"babel-runtime/regenerator":24}],442:[function(require,module,exports){
"use strict";

/**
 * Base db adapter.
 *
 * @abstract
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseAdapter = function () {
  function BaseAdapter() {
    (0, _classCallCheck3.default)(this, BaseAdapter);
  }

  (0, _createClass3.default)(BaseAdapter, [{
    key: "open",

    /**
     * Opens a connection to the database.
     *
     * @abstract
     * @return {Promise}
     */
    value: function open() {
      return _promise2.default.resolve();
    }

    /**
     * Closes current connection to the database.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "close",
    value: function close() {
      return _promise2.default.resolve();
    }

    /**
     * Deletes every records present in the database.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "clear",
    value: function clear() {
      throw new Error("Not Implemented.");
    }

    /**
     * Executes a batch of operations within a single transaction.
     *
     * @abstract
     * @param  {Function} callback The operation callback.
     * @param  {Object}   options  The options object.
     * @return {Promise}
     */

  }, {
    key: "execute",
    value: function execute(callback) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { preload: [] };

      throw new Error("Not Implemented.");
    }

    /**
     * Retrieve a record by its primary key from the database.
     *
     * @abstract
     * @param  {String} id The record id.
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(id) {
      throw new Error("Not Implemented.");
    }

    /**
     * Lists all records from the database.
     *
     * @abstract
     * @param  {Object} params  The filters and order to apply to the results.
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function list() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { filters: {}, order: "" };

      throw new Error("Not Implemented.");
    }

    /**
     * Store the lastModified value.
     *
     * @abstract
     * @param  {Number}  lastModified
     * @return {Promise}
     */

  }, {
    key: "saveLastModified",
    value: function saveLastModified(lastModified) {
      throw new Error("Not Implemented.");
    }

    /**
     * Retrieve saved lastModified value.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "getLastModified",
    value: function getLastModified() {
      throw new Error("Not Implemented.");
    }

    /**
     * Load a dump of records exported from a server.
     *
     * @abstract
     * @return {Promise}
     */

  }, {
    key: "loadDump",
    value: function loadDump(records) {
      throw new Error("Not Implemented.");
    }
  }]);
  return BaseAdapter;
}();

exports.default = BaseAdapter;

},{"babel-runtime/core-js/promise":12,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17}],443:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionTransaction = exports.SyncResultObject = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.recordsEqual = recordsEqual;

var _base = require("./adapters/base");

var _base2 = _interopRequireDefault(_base);

var _IDB = require("./adapters/IDB");

var _IDB2 = _interopRequireDefault(_IDB);

var _utils = require("./utils");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RECORD_FIELDS_TO_CLEAN = ["_status"];
var AVAILABLE_HOOKS = ["incoming-changes"];

/**
 * Compare two records omitting local fields and synchronization
 * attributes (like _status and last_modified)
 * @param {Object} a    A record to compare.
 * @param {Object} b    A record to compare.
 * @return {boolean}
 */
function recordsEqual(a, b) {
  var localFields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var fieldsToClean = RECORD_FIELDS_TO_CLEAN.concat(["last_modified"]).concat(localFields);
  var cleanLocal = function cleanLocal(r) {
    return (0, _utils.omitKeys)(r, fieldsToClean);
  };
  return (0, _utils.deepEqual)(cleanLocal(a), cleanLocal(b));
}

/**
 * Synchronization result object.
 */

var SyncResultObject = exports.SyncResultObject = function () {
  (0, _createClass3.default)(SyncResultObject, null, [{
    key: "defaults",

    /**
     * Object default values.
     * @type {Object}
     */
    get: function get() {
      return {
        ok: true,
        lastModified: null,
        errors: [],
        created: [],
        updated: [],
        deleted: [],
        published: [],
        conflicts: [],
        skipped: [],
        resolved: []
      };
    }

    /**
     * Public constructor.
     */

  }]);

  function SyncResultObject() {
    (0, _classCallCheck3.default)(this, SyncResultObject);

    /**
     * Current synchronization result status; becomes `false` when conflicts or
     * errors are registered.
     * @type {Boolean}
     */
    this.ok = true;
    (0, _assign2.default)(this, SyncResultObject.defaults);
  }

  /**
   * Adds entries for a given result type.
   *
   * @param {String} type    The result type.
   * @param {Array}  entries The result entries.
   * @return {SyncResultObject}
   */


  (0, _createClass3.default)(SyncResultObject, [{
    key: "add",
    value: function add(type, entries) {
      if (!Array.isArray(this[type])) {
        return;
      }
      // Deduplicate entries by id. If the values don't have `id` attribute, just
      // keep all.
      var deduplicated = this[type].concat(entries).reduce(function (acc, cur) {
        var existing = acc.filter(function (r) {
          return cur.id && r.id ? cur.id != r.id : true;
        });
        return existing.concat(cur);
      }, []);
      this[type] = deduplicated;
      this.ok = this.errors.length + this.conflicts.length === 0;
      return this;
    }

    /**
     * Reinitializes result entries for a given result type.
     *
     * @param  {String} type The result type.
     * @return {SyncResultObject}
     */

  }, {
    key: "reset",
    value: function reset(type) {
      this[type] = SyncResultObject.defaults[type];
      this.ok = this.errors.length + this.conflicts.length === 0;
      return this;
    }
  }]);
  return SyncResultObject;
}();

function createUUIDSchema() {
  return {
    generate: function generate() {
      return (0, _uuid.v4)();
    },
    validate: function validate(id) {
      return (0, _utils.isUUID)(id);
    }
  };
}

function markStatus(record, status) {
  return (0, _extends3.default)({}, record, { _status: status });
}

function markDeleted(record) {
  return markStatus(record, "deleted");
}

function markSynced(record) {
  return markStatus(record, "synced");
}

/**
 * Import a remote change into the local database.
 *
 * @param  {IDBTransactionProxy} transaction The transaction handler.
 * @param  {Object}              remote      The remote change object to import.
 * @param  {Array<String>}       localFields The list of fields that remain local.
 * @return {Object}
 */
function importChange(transaction, remote, localFields) {
  var local = transaction.get(remote.id);
  if (!local) {
    // Not found locally but remote change is marked as deleted; skip to
    // avoid recreation.
    if (remote.deleted) {
      return { type: "skipped", data: remote };
    }
    var _synced = markSynced(remote);
    transaction.create(_synced);
    return { type: "created", data: _synced };
  }
  // Compare local and remote, ignoring local fields.
  var isIdentical = recordsEqual(local, remote, localFields);
  // Apply remote changes on local record.
  var synced = (0, _extends3.default)({}, local, markSynced(remote));
  // Detect or ignore conflicts if record has also been modified locally.
  if (local._status !== "synced") {
    // Locally deleted, unsynced: scheduled for remote deletion.
    if (local._status === "deleted") {
      return { type: "skipped", data: local };
    }
    if (isIdentical) {
      // If records are identical, import anyway, so we bump the
      // local last_modified value from the server and set record
      // status to "synced".
      transaction.update(synced);
      return { type: "updated", data: { old: local, new: synced } };
    }
    if (local.last_modified !== undefined && local.last_modified === remote.last_modified) {
      // If our local version has the same last_modified as the remote
      // one, this represents an object that corresponds to a resolved
      // conflict. Our local version represents the final output, so
      // we keep that one. (No transaction operation to do.)
      // But if our last_modified is undefined,
      // that means we've created the same object locally as one on
      // the server, which *must* be a conflict.
      return { type: "void" };
    }
    return {
      type: "conflicts",
      data: { type: "incoming", local: local, remote: remote }
    };
  }
  // Local record was synced.
  if (remote.deleted) {
    transaction.delete(remote.id);
    return { type: "deleted", data: local };
  }
  // Import locally.
  transaction.update(synced);
  // if identical, simply exclude it from all SyncResultObject lists
  var type = isIdentical ? "void" : "updated";
  return { type: type, data: { old: local, new: synced } };
}

/**
 * Abstracts a collection of records stored in the local database, providing
 * CRUD operations and synchronization helpers.
 */

var Collection = function () {
  /**
   * Constructor.
   *
   * Options:
   * - `{BaseAdapter} adapter` The DB adapter (default: `IDB`)
   * - `{String} dbPrefix`     The DB name prefix (default: `""`)
   *
   * @param  {String} bucket  The bucket identifier.
   * @param  {String} name    The collection name.
   * @param  {Api}    api     The Api instance.
   * @param  {Object} options The options object.
   */
  function Collection(bucket, name, api) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck3.default)(this, Collection);

    this._bucket = bucket;
    this._name = name;
    this._lastModified = null;

    var DBAdapter = options.adapter || _IDB2.default;
    if (!DBAdapter) {
      throw new Error("No adapter provided");
    }
    var dbPrefix = options.dbPrefix || "";
    var db = new DBAdapter("" + dbPrefix + bucket + "/" + name, options.adapterOptions);
    if (!(db instanceof _base2.default)) {
      throw new Error("Unsupported adapter.");
    }
    // public properties
    /**
     * The db adapter instance
     * @type {BaseAdapter}
     */
    this.db = db;
    /**
     * The Api instance.
     * @type {KintoClient}
     */
    this.api = api;
    /**
     * The event emitter instance.
     * @type {EventEmitter}
     */
    this.events = options.events;
    /**
     * The IdSchema instance.
     * @type {Object}
     */
    this.idSchema = this._validateIdSchema(options.idSchema);
    /**
     * The list of remote transformers.
     * @type {Array}
     */
    this.remoteTransformers = this._validateRemoteTransformers(options.remoteTransformers);
    /**
     * The list of hooks.
     * @type {Object}
     */
    this.hooks = this._validateHooks(options.hooks);
    /**
     * The list of fields names that will remain local.
     * @type {Array}
     */
    this.localFields = options.localFields || [];
  }

  /**
   * The collection name.
   * @type {String}
   */


  (0, _createClass3.default)(Collection, [{
    key: "_validateIdSchema",


    /**
     * Validates an idSchema.
     *
     * @param  {Object|undefined} idSchema
     * @return {Object}
     */
    value: function _validateIdSchema(idSchema) {
      if (typeof idSchema === "undefined") {
        return createUUIDSchema();
      }
      if ((typeof idSchema === "undefined" ? "undefined" : (0, _typeof3.default)(idSchema)) !== "object") {
        throw new Error("idSchema must be an object.");
      } else if (typeof idSchema.generate !== "function") {
        throw new Error("idSchema must provide a generate function.");
      } else if (typeof idSchema.validate !== "function") {
        throw new Error("idSchema must provide a validate function.");
      }
      return idSchema;
    }

    /**
     * Validates a list of remote transformers.
     *
     * @param  {Array|undefined} remoteTransformers
     * @return {Array}
     */

  }, {
    key: "_validateRemoteTransformers",
    value: function _validateRemoteTransformers(remoteTransformers) {
      if (typeof remoteTransformers === "undefined") {
        return [];
      }
      if (!Array.isArray(remoteTransformers)) {
        throw new Error("remoteTransformers should be an array.");
      }
      return remoteTransformers.map(function (transformer) {
        if ((typeof transformer === "undefined" ? "undefined" : (0, _typeof3.default)(transformer)) !== "object") {
          throw new Error("A transformer must be an object.");
        } else if (typeof transformer.encode !== "function") {
          throw new Error("A transformer must provide an encode function.");
        } else if (typeof transformer.decode !== "function") {
          throw new Error("A transformer must provide a decode function.");
        }
        return transformer;
      });
    }

    /**
     * Validate the passed hook is correct.
     *
     * @param {Array|undefined} hook.
     * @return {Array}
     **/

  }, {
    key: "_validateHook",
    value: function _validateHook(hook) {
      if (!Array.isArray(hook)) {
        throw new Error("A hook definition should be an array of functions.");
      }
      return hook.map(function (fn) {
        if (typeof fn !== "function") {
          throw new Error("A hook definition should be an array of functions.");
        }
        return fn;
      });
    }

    /**
     * Validates a list of hooks.
     *
     * @param  {Object|undefined} hooks
     * @return {Object}
     */

  }, {
    key: "_validateHooks",
    value: function _validateHooks(hooks) {
      if (typeof hooks === "undefined") {
        return {};
      }
      if (Array.isArray(hooks)) {
        throw new Error("hooks should be an object, not an array.");
      }
      if ((typeof hooks === "undefined" ? "undefined" : (0, _typeof3.default)(hooks)) !== "object") {
        throw new Error("hooks should be an object.");
      }

      var validatedHooks = {};

      for (var hook in hooks) {
        if (AVAILABLE_HOOKS.indexOf(hook) === -1) {
          throw new Error("The hook should be one of " + AVAILABLE_HOOKS.join(", "));
        }
        validatedHooks[hook] = this._validateHook(hooks[hook]);
      }
      return validatedHooks;
    }

    /**
     * Deletes every records in the current collection and marks the collection as
     * never synced.
     *
     * @return {Promise}
     */

  }, {
    key: "clear",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.clear();

              case 2:
                _context.next = 4;
                return this.db.saveLastModified(null);

              case 4:
                return _context.abrupt("return", { data: [], permissions: {} });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clear() {
        return _ref.apply(this, arguments);
      }

      return clear;
    }()

    /**
     * Encodes a record.
     *
     * @param  {String} type   Either "remote" or "local".
     * @param  {Object} record The record object to encode.
     * @return {Promise}
     */

  }, {
    key: "_encodeRecord",
    value: function _encodeRecord(type, record) {
      if (!this[type + "Transformers"].length) {
        return _promise2.default.resolve(record);
      }
      return (0, _utils.waterfall)(this[type + "Transformers"].map(function (transformer) {
        return function (record) {
          return transformer.encode(record);
        };
      }), record);
    }

    /**
     * Decodes a record.
     *
     * @param  {String} type   Either "remote" or "local".
     * @param  {Object} record The record object to decode.
     * @return {Promise}
     */

  }, {
    key: "_decodeRecord",
    value: function _decodeRecord(type, record) {
      if (!this[type + "Transformers"].length) {
        return _promise2.default.resolve(record);
      }
      return (0, _utils.waterfall)(this[type + "Transformers"].reverse().map(function (transformer) {
        return function (record) {
          return transformer.decode(record);
        };
      }), record);
    }

    /**
     * Adds a record to the local database, asserting that none
     * already exist with this ID.
     *
     * Note: If either the `useRecordId` or `synced` options are true, then the
     * record object must contain the id field to be validated. If none of these
     * options are true, an id is generated using the current IdSchema; in this
     * case, the record passed must not have an id.
     *
     * Options:
     * - {Boolean} synced       Sets record status to "synced" (default: `false`).
     * - {Boolean} useRecordId  Forces the `id` field from the record to be used,
     *                          instead of one that is generated automatically
     *                          (default: `false`).
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "create",
    value: function create(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { useRecordId: false, synced: false };

      // Validate the record and its ID (if any), even though this
      // validation is also done in the CollectionTransaction method,
      // because we need to pass the ID to preloadIds.
      var reject = function reject(msg) {
        return _promise2.default.reject(new Error(msg));
      };
      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        return reject("Record is not an object.");
      }
      if ((options.synced || options.useRecordId) && !record.hasOwnProperty("id")) {
        return reject("Missing required Id; synced and useRecordId options require one");
      }
      if (!options.synced && !options.useRecordId && record.hasOwnProperty("id")) {
        return reject("Extraneous Id; can't create a record having one set.");
      }
      var newRecord = (0, _extends3.default)({}, record, {
        id: options.synced || options.useRecordId ? record.id : this.idSchema.generate(),
        _status: options.synced ? "synced" : "created"
      });
      if (!this.idSchema.validate(newRecord.id)) {
        return reject("Invalid Id: " + newRecord.id);
      }
      return this.execute(function (txn) {
        return txn.create(newRecord);
      }, { preloadIds: [newRecord.id] }).catch(function (err) {
        if (options.useRecordId) {
          throw new Error("Couldn't create record. It may have been virtually deleted.");
        }
        throw err;
      });
    }

    /**
     * Like {@link CollectionTransaction#update}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} synced: Sets record status to "synced" (default: false)
     * - {Boolean} patch:  Extends the existing record instead of overwriting it
     *   (default: false)
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "update",
    value: function update(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { synced: false, patch: false };

      // Validate the record and its ID, even though this validation is
      // also done in the CollectionTransaction method, because we need
      // to pass the ID to preloadIds.
      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        return _promise2.default.reject(new Error("Record is not an object."));
      }
      if (!record.hasOwnProperty("id")) {
        return _promise2.default.reject(new Error("Cannot update a record missing id."));
      }
      if (!this.idSchema.validate(record.id)) {
        return _promise2.default.reject(new Error("Invalid Id: " + record.id));
      }

      return this.execute(function (txn) {
        return txn.update(record, options);
      }, { preloadIds: [record.id] });
    }

    /**
     * Like {@link CollectionTransaction#upsert}, but wrapped in its own transaction.
     *
     * @param  {Object} record
     * @return {Promise}
     */

  }, {
    key: "upsert",
    value: function upsert(record) {
      // Validate the record and its ID, even though this validation is
      // also done in the CollectionTransaction method, because we need
      // to pass the ID to preloadIds.
      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        return _promise2.default.reject(new Error("Record is not an object."));
      }
      if (!record.hasOwnProperty("id")) {
        return _promise2.default.reject(new Error("Cannot update a record missing id."));
      }
      if (!this.idSchema.validate(record.id)) {
        return _promise2.default.reject(new Error("Invalid Id: " + record.id));
      }

      return this.execute(function (txn) {
        return txn.upsert(record);
      }, { preloadIds: [record.id] });
    }

    /**
     * Like {@link CollectionTransaction#get}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {String} id
     * @param  {Object} options
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { includeDeleted: false };

      return this.execute(function (txn) {
        return txn.get(id, options);
      }, { preloadIds: [id] });
    }

    /**
     * Like {@link CollectionTransaction#getAny}, but wrapped in its own transaction.
     *
     * @param  {String} id
     * @return {Promise}
     */

  }, {
    key: "getAny",
    value: function getAny(id) {
      return this.execute(function (txn) {
        return txn.getAny(id);
      }, { preloadIds: [id] });
    }

    /**
     * Same as {@link Collection#delete}, but wrapped in its own transaction.
     *
     * Options:
     * - {Boolean} virtual: When set to `true`, doesn't actually delete the record,
     *   update its `_status` attribute to `deleted` instead (default: true)
     *
     * @param  {String} id       The record's Id.
     * @param  {Object} options  The options object.
     * @return {Promise}
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { virtual: true };

      return this.execute(function (transaction) {
        return transaction.delete(id, options);
      }, { preloadIds: [id] });
    }

    /**
     * The same as {@link CollectionTransaction#deleteAny}, but wrapped
     * in its own transaction.
     *
     * @param  {String} id       The record's Id.
     * @return {Promise}
     */

  }, {
    key: "deleteAny",
    value: function deleteAny(id) {
      return this.execute(function (txn) {
        return txn.deleteAny(id);
      }, { preloadIds: [id] });
    }

    /**
     * Lists records from the local database.
     *
     * Params:
     * - {Object} filters Filter the results (default: `{}`).
     * - {String} order   The order to apply   (default: `-last_modified`).
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {Object} params  The filters and order to apply to the results.
     * @param  {Object} options The options object.
     * @return {Promise}
     */

  }, {
    key: "list",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { includeDeleted: false };
        var results, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = (0, _extends3.default)({ order: "-last_modified", filters: {} }, params);
                _context2.next = 3;
                return this.db.list(params);

              case 3:
                results = _context2.sent;
                data = results;

                if (!options.includeDeleted) {
                  data = results.filter(function (record) {
                    return record._status !== "deleted";
                  });
                }
                return _context2.abrupt("return", { data: data, permissions: {} });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function list() {
        return _ref2.apply(this, arguments);
      }

      return list;
    }()

    /**
     * Imports remote changes into the local database.
     * This method is in charge of detecting the conflicts, and resolve them
     * according to the specified strategy.
     * @param  {SyncResultObject} syncResultObject The sync result object.
     * @param  {Array}            decodedChanges   The list of changes to import in the local database.
     * @param  {String}           strategy         The {@link Collection.strategy} (default: MANUAL)
     * @return {Promise}
     */

  }, {
    key: "importChanges",
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(syncResultObject, decodedChanges) {
        var _this = this;

        var strategy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Collection.strategy.MANUAL;

        var _ref4, imports, resolved, data;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.db.execute(function (transaction) {
                  var imports = decodedChanges.map(function (remote) {
                    // Store remote change into local database.
                    return importChange(transaction, remote, _this.localFields);
                  });
                  var conflicts = imports.filter(function (i) {
                    return i.type === "conflicts";
                  }).map(function (i) {
                    return i.data;
                  });
                  var resolved = _this._handleConflicts(transaction, conflicts, strategy);
                  return { imports: imports, resolved: resolved };
                }, { preload: decodedChanges.map(function (record) {
                    return record.id;
                  }) });

              case 3:
                _ref4 = _context3.sent;
                imports = _ref4.imports;
                resolved = _ref4.resolved;

                // Lists of created/updated/deleted records

                imports.forEach(function (_ref5) {
                  var type = _ref5.type;
                  var data = _ref5.data;
                  return syncResultObject.add(type, data);
                });

                // Automatically resolved conflicts (if not manual)
                if (resolved.length > 0) {
                  syncResultObject.reset("conflicts").add("resolved", resolved);
                }
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                data = {
                  type: "incoming",
                  message: _context3.t0.message,
                  stack: _context3.t0.stack
                };
                // XXX one error of the whole transaction instead of per atomic op

                syncResultObject.add("errors", data);

              case 14:
                return _context3.abrupt("return", syncResultObject);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 10]]);
      }));

      function importChanges(_x10, _x11) {
        return _ref3.apply(this, arguments);
      }

      return importChanges;
    }()

    /**
     * Imports the responses of pushed changes into the local database.
     * Basically it stores the timestamp assigned by the server into the local
     * database.
     * @param  {SyncResultObject} syncResultObject The sync result object.
     * @param  {Array}            toApplyLocally   The list of changes to import in the local database.
     * @param  {Array}            conflicts        The list of conflicts that have to be resolved.
     * @param  {String}           strategy         The {@link Collection.strategy}.
     * @return {Promise}
     */

  }, {
    key: "_applyPushedResults",
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(syncResultObject, toApplyLocally, conflicts) {
        var _this2 = this;

        var strategy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Collection.strategy.MANUAL;

        var toDeleteLocally, toUpdateLocally, _ref7, published, resolved;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                toDeleteLocally = toApplyLocally.filter(function (r) {
                  return r.deleted;
                });
                toUpdateLocally = toApplyLocally.filter(function (r) {
                  return !r.deleted;
                });
                _context4.next = 4;
                return this.db.execute(function (transaction) {
                  var updated = toUpdateLocally.map(function (record) {
                    var synced = markSynced(record);
                    transaction.update(synced);
                    return synced;
                  });
                  var deleted = toDeleteLocally.map(function (record) {
                    transaction.delete(record.id);
                    // Amend result data with the deleted attribute set
                    return { id: record.id, deleted: true };
                  });
                  var published = updated.concat(deleted);
                  // Handle conflicts, if any
                  var resolved = _this2._handleConflicts(transaction, conflicts, strategy);
                  return { published: published, resolved: resolved };
                });

              case 4:
                _ref7 = _context4.sent;
                published = _ref7.published;
                resolved = _ref7.resolved;


                syncResultObject.add("published", published);

                if (resolved.length > 0) {
                  syncResultObject.reset("conflicts").reset("resolved").add("resolved", resolved);
                }
                return _context4.abrupt("return", syncResultObject);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _applyPushedResults(_x13, _x14, _x15) {
        return _ref6.apply(this, arguments);
      }

      return _applyPushedResults;
    }()

    /**
     * Handles synchronization conflicts according to specified strategy.
     *
     * @param  {SyncResultObject} result    The sync result object.
     * @param  {String}           strategy  The {@link Collection.strategy}.
     * @return {Promise}
     */

  }, {
    key: "_handleConflicts",
    value: function _handleConflicts(transaction, conflicts, strategy) {
      var _this3 = this;

      if (strategy === Collection.strategy.MANUAL) {
        return [];
      }
      return conflicts.map(function (conflict) {
        var resolution = strategy === Collection.strategy.CLIENT_WINS ? conflict.local : conflict.remote;
        var updated = _this3._resolveRaw(conflict, resolution);
        transaction.update(updated);
        return updated;
      });
    }

    /**
     * Execute a bunch of operations in a transaction.
     *
     * This transaction should be atomic -- either all of its operations
     * will succeed, or none will.
     *
     * The argument to this function is itself a function which will be
     * called with a {@link CollectionTransaction}. Collection methods
     * are available on this transaction, but instead of returning
     * promises, they are synchronous. execute() returns a Promise whose
     * value will be the return value of the provided function.
     *
     * Most operations will require access to the record itself, which
     * must be preloaded by passing its ID in the preloadIds option.
     *
     * Options:
     * - {Array} preloadIds: list of IDs to fetch at the beginning of
     *   the transaction
     *
     * @return {Promise} Resolves with the result of the given function
     *    when the transaction commits.
     */

  }, {
    key: "execute",
    value: function execute(doOperations) {
      var _this4 = this;

      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _ref8$preloadIds = _ref8.preloadIds;
      var preloadIds = _ref8$preloadIds === undefined ? [] : _ref8$preloadIds;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(preloadIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var id = _step.value;

          if (!this.idSchema.validate(id)) {
            return _promise2.default.reject(Error("Invalid Id: " + id));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this.db.execute(function (transaction) {
        var txn = new CollectionTransaction(_this4, transaction);
        var result = doOperations(txn);
        txn.emitEvents();
        return result;
      }, { preload: preloadIds });
    }

    /**
     * Resets the local records as if they were never synced; existing records are
     * marked as newly created, deleted records are dropped.
     *
     * A next call to {@link Collection.sync} will thus republish the whole
     * content of the local collection to the server.
     *
     * @return {Promise} Resolves with the number of processed records.
     */

  }, {
    key: "resetSyncStatus",
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
        var unsynced;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.list({ filters: { _status: ["deleted", "synced"] }, order: "" }, { includeDeleted: true });

              case 2:
                unsynced = _context5.sent;
                _context5.next = 5;
                return this.db.execute(function (transaction) {
                  unsynced.data.forEach(function (record) {
                    if (record._status === "deleted") {
                      // Garbage collect deleted records.
                      transaction.delete(record.id);
                    } else {
                      // Records that were synced become «created».
                      transaction.update((0, _extends3.default)({}, record, {
                        last_modified: undefined,
                        _status: "created"
                      }));
                    }
                  });
                });

              case 5:
                this._lastModified = null;
                _context5.next = 8;
                return this.db.saveLastModified(null);

              case 8:
                return _context5.abrupt("return", unsynced.data.length);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function resetSyncStatus() {
        return _ref9.apply(this, arguments);
      }

      return resetSyncStatus;
    }()

    /**
     * Returns an object containing two lists:
     *
     * - `toDelete`: unsynced deleted records we can safely delete;
     * - `toSync`: local updates to send to the server.
     *
     * @return {Promise}
     */

  }, {
    key: "gatherLocalChanges",
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
        var unsynced, deleted, toSync, toDelete;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.list({ filters: { _status: ["created", "updated"] }, order: "" });

              case 2:
                unsynced = _context6.sent;
                _context6.next = 5;
                return this.list({ filters: { _status: "deleted" }, order: "" }, { includeDeleted: true });

              case 5:
                deleted = _context6.sent;
                _context6.next = 8;
                return _promise2.default.all(unsynced.data.map(this._encodeRecord.bind(this, "remote")));

              case 8:
                toSync = _context6.sent;
                _context6.next = 11;
                return _promise2.default.all(deleted.data.map(this._encodeRecord.bind(this, "remote")));

              case 11:
                toDelete = _context6.sent;
                return _context6.abrupt("return", { toSync: toSync, toDelete: toDelete });

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function gatherLocalChanges() {
        return _ref10.apply(this, arguments);
      }

      return gatherLocalChanges;
    }()

    /**
     * Fetch remote changes, import them to the local database, and handle
     * conflicts according to `options.strategy`. Then, updates the passed
     * {@link SyncResultObject} with import results.
     *
     * Options:
     * - {String} strategy: The selected sync strategy.
     *
     * @param  {KintoClient.Collection} client           Kinto client Collection instance.
     * @param  {SyncResultObject}       syncResultObject The sync result object.
     * @param  {Object}                 options
     * @return {Promise}
     */

  }, {
    key: "pullChanges",
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(client, syncResultObject) {
        var _this5 = this;

        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var since, filters, exclude_id, _ref12, data, last_modified, unquoted, localSynced, serverChanged, emptyCollection, decodedChanges, payload, afterHooks;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (syncResultObject.ok) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", syncResultObject);

              case 2:
                if (!this.lastModified) {
                  _context7.next = 6;
                  break;
                }

                _context7.t0 = this.lastModified;
                _context7.next = 9;
                break;

              case 6:
                _context7.next = 8;
                return this.db.getLastModified();

              case 8:
                _context7.t0 = _context7.sent;

              case 9:
                since = _context7.t0;


                options = (0, _extends3.default)({
                  strategy: Collection.strategy.MANUAL,
                  lastModified: since,
                  headers: {}
                }, options);

                // Optionally ignore some records when pulling for changes.
                // (avoid redownloading our own changes on last step of #sync())
                filters = void 0;

                if (options.exclude) {
                  // Limit the list of excluded records to the first 50 records in order
                  // to remain under de-facto URL size limit (~2000 chars).
                  // http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url-in-different-browsers/417184#417184
                  exclude_id = options.exclude.slice(0, 50).map(function (r) {
                    return r.id;
                  }).join(",");

                  filters = { exclude_id: exclude_id };
                }
                // First fetch remote changes from the server
                _context7.next = 15;
                return client.listRecords({
                  // Since should be ETag (see https://github.com/Kinto/kinto.js/issues/356)
                  since: options.lastModified ? "" + options.lastModified : undefined,
                  headers: options.headers,
                  filters: filters
                });

              case 15:
                _ref12 = _context7.sent;
                data = _ref12.data;
                last_modified = _ref12.last_modified;
                // last_modified is the ETag header value (string).
                // For retro-compatibility with first kinto.js versions
                // parse it to integer.

                unquoted = last_modified ? parseInt(last_modified, 10) : undefined;

                // Check if server was flushed.
                // This is relevant for the Kinto demo server
                // (and thus for many new comers).

                localSynced = options.lastModified;
                serverChanged = unquoted > options.lastModified;
                emptyCollection = data.length === 0;

                if (!(!options.exclude && localSynced && serverChanged && emptyCollection)) {
                  _context7.next = 24;
                  break;
                }

                throw Error("Server has been flushed.");

              case 24:

                syncResultObject.lastModified = unquoted;

                // Decode incoming changes.
                _context7.next = 27;
                return _promise2.default.all(data.map(function (change) {
                  return _this5._decodeRecord("remote", change);
                }));

              case 27:
                decodedChanges = _context7.sent;

                // Hook receives decoded records.
                payload = { lastModified: unquoted, changes: decodedChanges };
                _context7.next = 31;
                return this.applyHook("incoming-changes", payload);

              case 31:
                afterHooks = _context7.sent;

                if (!(afterHooks.changes.length > 0)) {
                  _context7.next = 35;
                  break;
                }

                _context7.next = 35;
                return this.importChanges(syncResultObject, afterHooks.changes, options.strategy);

              case 35:
                return _context7.abrupt("return", syncResultObject);

              case 36:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function pullChanges(_x18, _x19) {
        return _ref11.apply(this, arguments);
      }

      return pullChanges;
    }()
  }, {
    key: "applyHook",
    value: function applyHook(hookName, payload) {
      var _this6 = this;

      if (typeof this.hooks[hookName] == "undefined") {
        return _promise2.default.resolve(payload);
      }
      return (0, _utils.waterfall)(this.hooks[hookName].map(function (hook) {
        return function (record) {
          var result = hook(payload, _this6);
          var resultThenable = result && typeof result.then === "function";
          var resultChanges = result && result.hasOwnProperty("changes");
          if (!(resultThenable || resultChanges)) {
            throw new Error("Invalid return value for hook: " + (0, _stringify2.default)(result) + " has no 'then()' or 'changes' properties");
          }
          return result;
        };
      }), payload);
    }

    /**
     * Publish local changes to the remote server and updates the passed
     * {@link SyncResultObject} with publication results.
     *
     * @param  {KintoClient.Collection} client           Kinto client Collection instance.
     * @param  {SyncResultObject}       syncResultObject The sync result object.
     * @param  {Object}                 changes          The change object.
     * @param  {Array}                  changes.toDelete The list of records to delete.
     * @param  {Array}                  changes.toSync   The list of records to create/update.
     * @param  {Object}                 options          The options object.
     * @return {Promise}
     */

  }, {
    key: "pushChanges",
    value: function () {
      var _ref14 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(client, _ref13, syncResultObject) {
        var _ref13$toDelete = _ref13.toDelete;
        var toDelete = _ref13$toDelete === undefined ? [] : _ref13$toDelete;
        var toSync = _ref13.toSync;

        var _this7 = this;

        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var safe, synced, conflicts, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, type, local, remote, safeLocal, realLocal, realRemote, conflict, missingRemotely, published, toApplyLocally, decoded;

        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (syncResultObject.ok) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", syncResultObject);

              case 2:
                safe = !options.strategy || options.strategy !== Collection.CLIENT_WINS;

                // Perform a batch request with every changes.

                _context8.next = 5;
                return client.batch(function (batch) {
                  toDelete.forEach(function (r) {
                    // never published locally deleted records should not be pusblished
                    if (r.last_modified) {
                      batch.deleteRecord(r);
                    }
                  });
                  toSync.forEach(function (r) {
                    // Clean local fields (like _status) before sending to server.
                    var published = _this7.cleanLocalFields(r);
                    if (r._status === "created") {
                      batch.createRecord(published);
                    } else {
                      batch.updateRecord(published);
                    }
                  });
                }, { headers: options.headers, safe: safe, aggregate: true });

              case 5:
                synced = _context8.sent;


                // Store outgoing errors into sync result object
                syncResultObject.add("errors", synced.errors.map(function (e) {
                  return (0, _extends3.default)({}, e, { type: "outgoing" });
                }));

                // Store outgoing conflicts into sync result object
                conflicts = [];
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context8.prev = 11;
                _iterator2 = (0, _getIterator3.default)(synced.conflicts);

              case 13:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context8.next = 30;
                  break;
                }

                _step2$value = _step2.value;
                type = _step2$value.type;
                local = _step2$value.local;
                remote = _step2$value.remote;

                // Note: we ensure that local data are actually available, as they may
                // be missing in the case of a published deletion.
                safeLocal = local && local.data || { id: remote.id };
                _context8.next = 21;
                return this._decodeRecord("remote", safeLocal);

              case 21:
                realLocal = _context8.sent;
                _context8.next = 24;
                return this._decodeRecord("remote", remote);

              case 24:
                realRemote = _context8.sent;
                conflict = { type: type, local: realLocal, remote: realRemote };

                conflicts.push(conflict);

              case 27:
                _iteratorNormalCompletion2 = true;
                _context8.next = 13;
                break;

              case 30:
                _context8.next = 36;
                break;

              case 32:
                _context8.prev = 32;
                _context8.t0 = _context8["catch"](11);
                _didIteratorError2 = true;
                _iteratorError2 = _context8.t0;

              case 36:
                _context8.prev = 36;
                _context8.prev = 37;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 39:
                _context8.prev = 39;

                if (!_didIteratorError2) {
                  _context8.next = 42;
                  break;
                }

                throw _iteratorError2;

              case 42:
                return _context8.finish(39);

              case 43:
                return _context8.finish(36);

              case 44:
                syncResultObject.add("conflicts", conflicts);

                // Records that must be deleted are either deletions that were pushed
                // to server (published) or deleted records that were never pushed (skipped).
                missingRemotely = synced.skipped.map(function (r) {
                  return (0, _extends3.default)({}, r, { deleted: true });
                });

                // For created and updated records, the last_modified coming from server
                // will be stored locally.
                // Reflect publication results locally using the response from
                // the batch request.

                published = synced.published.map(function (c) {
                  return c.data;
                });
                toApplyLocally = published.concat(missingRemotely);

                // Apply the decode transformers, if any

                _context8.next = 50;
                return _promise2.default.all(toApplyLocally.map(function (record) {
                  return _this7._decodeRecord("remote", record);
                }));

              case 50:
                decoded = _context8.sent;

                if (!(decoded.length > 0 || conflicts.length > 0)) {
                  _context8.next = 54;
                  break;
                }

                _context8.next = 54;
                return this._applyPushedResults(syncResultObject, decoded, conflicts, options.strategy);

              case 54:
                return _context8.abrupt("return", syncResultObject);

              case 55:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[11, 32, 36, 44], [37,, 39, 43]]);
      }));

      function pushChanges(_x21, _x22, _x23) {
        return _ref14.apply(this, arguments);
      }

      return pushChanges;
    }()

    /**
     * Return a copy of the specified record without the local fields.
     *
     * @param  {Object} record  A record with potential local fields.
     * @return {Object}
     */

  }, {
    key: "cleanLocalFields",
    value: function cleanLocalFields(record) {
      var localKeys = RECORD_FIELDS_TO_CLEAN.concat(this.localFields);
      return (0, _utils.omitKeys)(record, localKeys);
    }

    /**
     * Resolves a conflict, updating local record according to proposed
     * resolution — keeping remote record `last_modified` value as a reference for
     * further batch sending.
     *
     * @param  {Object} conflict   The conflict object.
     * @param  {Object} resolution The proposed record.
     * @return {Promise}
     */

  }, {
    key: "resolve",
    value: function resolve(conflict, resolution) {
      var _this8 = this;

      return this.db.execute(function (transaction) {
        var updated = _this8._resolveRaw(conflict, resolution);
        transaction.update(updated);
        return { data: updated, permissions: {} };
      });
    }

    /**
     * @private
     */

  }, {
    key: "_resolveRaw",
    value: function _resolveRaw(conflict, resolution) {
      var resolved = (0, _extends3.default)({}, resolution, {
        // Ensure local record has the latest authoritative timestamp
        last_modified: conflict.remote.last_modified
      });
      // If the resolution object is strictly equal to the
      // remote record, then we can mark it as synced locally.
      // Otherwise, mark it as updated (so that the resolution is pushed).
      var synced = (0, _utils.deepEqual)(resolved, conflict.remote);
      return markStatus(resolved, synced ? "synced" : "updated");
    }

    /**
     * Synchronize remote and local data. The promise will resolve with a
     * {@link SyncResultObject}, though will reject:
     *
     * - if the server is currently backed off;
     * - if the server has been detected flushed.
     *
     * Options:
     * - {Object} headers: HTTP headers to attach to outgoing requests.
     * - {Collection.strategy} strategy: See {@link Collection.strategy}.
     * - {Boolean} ignoreBackoff: Force synchronization even if server is currently
     *   backed off.
     * - {String} bucket: The remove bucket id to use (default: null)
     * - {String} collection: The remove collection id to use (default: null)
     * - {String} remote The remote Kinto server endpoint to use (default: null).
     *
     * @param  {Object} options Options.
     * @return {Promise}
     * @throws {Error} If an invalid remote option is passed.
     */

  }, {
    key: "sync",
    value: function () {
      var _ref15 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee9() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          strategy: Collection.strategy.MANUAL,
          headers: {},
          ignoreBackoff: false,
          bucket: null,
          collection: null,
          remote: null
        };

        var previousRemote, seconds, client, result, lastModified, _ref16, toDelete, toSync, resolvedUnsynced, resolvedEncoded, pullOpts;

        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                previousRemote = this.api.remote;

                if (options.remote) {
                  // Note: setting the remote ensures it's valid, throws when invalid.
                  this.api.remote = options.remote;
                }

                if (!(!options.ignoreBackoff && this.api.backoff > 0)) {
                  _context9.next = 5;
                  break;
                }

                seconds = Math.ceil(this.api.backoff / 1000);
                return _context9.abrupt("return", _promise2.default.reject(new Error("Server is asking clients to back off; retry in " + seconds + "s or use the ignoreBackoff option.")));

              case 5:
                client = this.api.bucket(options.bucket || this.bucket).collection(options.collection || this.name);
                result = new SyncResultObject();
                _context9.prev = 7;
                _context9.next = 10;
                return this.pullChanges(client, result, options);

              case 10:
                lastModified = result.lastModified;

                // Fetch local changes

                _context9.next = 13;
                return this.gatherLocalChanges();

              case 13:
                _ref16 = _context9.sent;
                toDelete = _ref16.toDelete;
                toSync = _ref16.toSync;

                // Publish local changes and pull local resolutions

                _context9.next = 18;
                return this.pushChanges(client, { toDelete: toDelete, toSync: toSync }, result, options);

              case 18:

                // Publish local resolution of push conflicts to server (on CLIENT_WINS)
                resolvedUnsynced = result.resolved.filter(function (r) {
                  return r._status !== "synced";
                });

                if (!(resolvedUnsynced.length > 0)) {
                  _context9.next = 25;
                  break;
                }

                _context9.next = 22;
                return _promise2.default.all(resolvedUnsynced.map(this._encodeRecord.bind(this, "remote")));

              case 22:
                resolvedEncoded = _context9.sent;
                _context9.next = 25;
                return this.pushChanges(client, { toSync: resolvedEncoded }, result, options);

              case 25:
                if (!(result.published.length > 0)) {
                  _context9.next = 29;
                  break;
                }

                // Avoid redownloading our own changes during the last pull.
                pullOpts = (0, _extends3.default)({}, options, { lastModified: lastModified, exclude: result.published });
                _context9.next = 29;
                return this.pullChanges(client, result, pullOpts);

              case 29:
                if (!result.ok) {
                  _context9.next = 33;
                  break;
                }

                _context9.next = 32;
                return this.db.saveLastModified(result.lastModified);

              case 32:
                this._lastModified = _context9.sent;

              case 33:
                _context9.prev = 33;

                // Ensure API default remote is reverted if a custom one's been used
                this.api.remote = previousRemote;
                return _context9.finish(33);

              case 36:
                return _context9.abrupt("return", result);

              case 37:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[7,, 33, 36]]);
      }));

      function sync() {
        return _ref15.apply(this, arguments);
      }

      return sync;
    }()

    /**
     * Load a list of records already synced with the remote server.
     *
     * The local records which are unsynced or whose timestamp is either missing
     * or superior to those being loaded will be ignored.
     *
     * @param  {Array} records The previously exported list of records to load.
     * @return {Promise} with the effectively imported records.
     */

  }, {
    key: "loadDump",
    value: function () {
      var _ref17 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee10(records) {
        var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, record, _ref18, data, existingById, newRecords;

        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (Array.isArray(records)) {
                  _context10.next = 2;
                  break;
                }

                throw new Error("Records is not an array.");

              case 2:
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                _context10.prev = 5;
                _iterator3 = (0, _getIterator3.default)(records);

              case 7:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                  _context10.next = 16;
                  break;
                }

                record = _step3.value;

                if (!(!record.hasOwnProperty("id") || !this.idSchema.validate(record.id))) {
                  _context10.next = 11;
                  break;
                }

                throw new Error("Record has invalid ID: " + (0, _stringify2.default)(record));

              case 11:
                if (record.last_modified) {
                  _context10.next = 13;
                  break;
                }

                throw new Error("Record has no last_modified value: " + (0, _stringify2.default)(record));

              case 13:
                _iteratorNormalCompletion3 = true;
                _context10.next = 7;
                break;

              case 16:
                _context10.next = 22;
                break;

              case 18:
                _context10.prev = 18;
                _context10.t0 = _context10["catch"](5);
                _didIteratorError3 = true;
                _iteratorError3 = _context10.t0;

              case 22:
                _context10.prev = 22;
                _context10.prev = 23;

                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }

              case 25:
                _context10.prev = 25;

                if (!_didIteratorError3) {
                  _context10.next = 28;
                  break;
                }

                throw _iteratorError3;

              case 28:
                return _context10.finish(25);

              case 29:
                return _context10.finish(22);

              case 30:
                _context10.next = 32;
                return this.list({}, { includeDeleted: true });

              case 32:
                _ref18 = _context10.sent;
                data = _ref18.data;
                existingById = data.reduce(function (acc, record) {
                  acc[record.id] = record;
                  return acc;
                }, {});
                newRecords = records.filter(function (record) {
                  var localRecord = existingById[record.id];
                  var shouldKeep =
                  // No local record with this id.
                  localRecord === undefined ||
                  // Or local record is synced
                  localRecord._status === "synced" &&
                  // And was synced from server
                  localRecord.last_modified !== undefined &&
                  // And is older than imported one.
                  record.last_modified > localRecord.last_modified;
                  return shouldKeep;
                });
                _context10.next = 38;
                return this.db.loadDump(newRecords.map(markSynced));

              case 38:
                return _context10.abrupt("return", _context10.sent);

              case 39:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[5, 18, 22, 30], [23,, 25, 29]]);
      }));

      function loadDump(_x25) {
        return _ref17.apply(this, arguments);
      }

      return loadDump;
    }()
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }

    /**
     * The bucket name.
     * @type {String}
     */

  }, {
    key: "bucket",
    get: function get() {
      return this._bucket;
    }

    /**
     * The last modified timestamp.
     * @type {Number}
     */

  }, {
    key: "lastModified",
    get: function get() {
      return this._lastModified;
    }

    /**
     * Synchronization strategies. Available strategies are:
     *
     * - `MANUAL`: Conflicts will be reported in a dedicated array.
     * - `SERVER_WINS`: Conflicts are resolved using remote data.
     * - `CLIENT_WINS`: Conflicts are resolved using local data.
     *
     * @type {Object}
     */

  }], [{
    key: "strategy",
    get: function get() {
      return {
        CLIENT_WINS: "client_wins",
        SERVER_WINS: "server_wins",
        MANUAL: "manual"
      };
    }
  }]);
  return Collection;
}();

/**
 * A Collection-oriented wrapper for an adapter's transaction.
 *
 * This defines the high-level functions available on a collection.
 * The collection itself offers functions of the same name. These will
 * perform just one operation in its own transaction.
 */


exports.default = Collection;

var CollectionTransaction = exports.CollectionTransaction = function () {
  function CollectionTransaction(collection, adapterTransaction) {
    (0, _classCallCheck3.default)(this, CollectionTransaction);

    this.collection = collection;
    this.adapterTransaction = adapterTransaction;

    this._events = [];
  }

  (0, _createClass3.default)(CollectionTransaction, [{
    key: "_queueEvent",
    value: function _queueEvent(action, payload) {
      this._events.push({ action: action, payload: payload });
    }

    /**
     * Emit queued events, to be called once every transaction operations have
     * been executed successfully.
     */

  }, {
    key: "emitEvents",
    value: function emitEvents() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = (0, _getIterator3.default)(this._events), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _step4.value;
          var action = _step4$value.action;
          var payload = _step4$value.payload;

          this.collection.events.emit(action, payload);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      if (this._events.length > 0) {
        var targets = this._events.map(function (_ref19) {
          var action = _ref19.action;
          var payload = _ref19.payload;
          return (0, _extends3.default)({ action: action }, payload);
        });
        this.collection.events.emit("change", { targets: targets });
      }
      this._events = [];
    }

    /**
     * Retrieve a record by its id from the local database, or
     * undefined if none exists.
     *
     * This will also return virtually deleted records.
     *
     * @param  {String} id
     * @return {Object}
     */

  }, {
    key: "getAny",
    value: function getAny(id) {
      var record = this.adapterTransaction.get(id);
      return { data: record, permissions: {} };
    }

    /**
     * Retrieve a record by its id from the local database.
     *
     * Options:
     * - {Boolean} includeDeleted: Include virtually deleted records.
     *
     * @param  {String} id
     * @param  {Object} options
     * @return {Object}
     */

  }, {
    key: "get",
    value: function get(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { includeDeleted: false };

      var res = this.getAny(id);
      if (!res.data || !options.includeDeleted && res.data._status === "deleted") {
        throw new Error("Record with id=" + id + " not found.");
      }

      return res;
    }

    /**
     * Deletes a record from the local database.
     *
     * Options:
     * - {Boolean} virtual: When set to `true`, doesn't actually delete the record,
     *   update its `_status` attribute to `deleted` instead (default: true)
     *
     * @param  {String} id       The record's Id.
     * @param  {Object} options  The options object.
     * @return {Object}
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { virtual: true };

      // Ensure the record actually exists.
      var existing = this.adapterTransaction.get(id);
      var alreadyDeleted = existing && existing._status == "deleted";
      if (!existing || alreadyDeleted && options.virtual) {
        throw new Error("Record with id=" + id + " not found.");
      }
      // Virtual updates status.
      if (options.virtual) {
        this.adapterTransaction.update(markDeleted(existing));
      } else {
        // Delete for real.
        this.adapterTransaction.delete(id);
      }
      this._queueEvent("delete", { data: existing });
      return { data: existing, permissions: {} };
    }

    /**
     * Deletes a record from the local database, if any exists.
     * Otherwise, do nothing.
     *
     * @param  {String} id       The record's Id.
     * @return {Object}
     */

  }, {
    key: "deleteAny",
    value: function deleteAny(id) {
      var existing = this.adapterTransaction.get(id);
      if (existing) {
        this.adapterTransaction.update(markDeleted(existing));
        this._queueEvent("delete", { data: existing });
      }
      return { data: (0, _extends3.default)({ id: id }, existing), deleted: !!existing, permissions: {} };
    }

    /**
     * Adds a record to the local database, asserting that none
     * already exist with this ID.
     *
     * @param  {Object} record, which must contain an ID
     * @return {Object}
     */

  }, {
    key: "create",
    value: function create(record) {
      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        throw new Error("Record is not an object.");
      }
      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot create a record missing id");
      }
      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: " + record.id);
      }

      this.adapterTransaction.create(record);
      this._queueEvent("create", { data: record });
      return { data: record, permissions: {} };
    }

    /**
     * Updates a record from the local database.
     *
     * Options:
     * - {Boolean} synced: Sets record status to "synced" (default: false)
     * - {Boolean} patch:  Extends the existing record instead of overwriting it
     *   (default: false)
     *
     * @param  {Object} record
     * @param  {Object} options
     * @return {Object}
     */

  }, {
    key: "update",
    value: function update(record) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { synced: false, patch: false };

      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        throw new Error("Record is not an object.");
      }
      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot update a record missing id.");
      }
      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: " + record.id);
      }

      var oldRecord = this.adapterTransaction.get(record.id);
      if (!oldRecord) {
        throw new Error("Record with id=" + record.id + " not found.");
      }
      var newRecord = options.patch ? (0, _extends3.default)({}, oldRecord, record) : record;
      var updated = this._updateRaw(oldRecord, newRecord, options);
      this.adapterTransaction.update(updated);
      this._queueEvent("update", { data: updated, oldRecord: oldRecord });
      return { data: updated, oldRecord: oldRecord, permissions: {} };
    }

    /**
     * Lower-level primitive for updating a record while respecting
     * _status and last_modified.
     *
     * @param  {Object} oldRecord: the record retrieved from the DB
     * @param  {Object} newRecord: the record to replace it with
     * @return {Object}
     */

  }, {
    key: "_updateRaw",
    value: function _updateRaw(oldRecord, newRecord) {
      var _ref20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var _ref20$synced = _ref20.synced;
      var synced = _ref20$synced === undefined ? false : _ref20$synced;

      var updated = (0, _extends3.default)({}, newRecord);
      // Make sure to never loose the existing timestamp.
      if (oldRecord && oldRecord.last_modified && !updated.last_modified) {
        updated.last_modified = oldRecord.last_modified;
      }
      // If only local fields have changed, then keep record as synced.
      // If status is created, keep record as created.
      // If status is deleted, mark as updated.
      var isIdentical = oldRecord && recordsEqual(oldRecord, updated, this.localFields);
      var keepSynced = isIdentical && oldRecord._status == "synced";
      var neverSynced = !oldRecord || oldRecord && oldRecord._status == "created";
      var newStatus = keepSynced || synced ? "synced" : neverSynced ? "created" : "updated";
      return markStatus(updated, newStatus);
    }

    /**
     * Upsert a record into the local database.
     *
     * This record must have an ID.
     *
     * If a record with this ID already exists, it will be replaced.
     * Otherwise, this record will be inserted.
     *
     * @param  {Object} record
     * @return {Object}
     */

  }, {
    key: "upsert",
    value: function upsert(record) {
      if ((typeof record === "undefined" ? "undefined" : (0, _typeof3.default)(record)) !== "object") {
        throw new Error("Record is not an object.");
      }
      if (!record.hasOwnProperty("id")) {
        throw new Error("Cannot update a record missing id.");
      }
      if (!this.collection.idSchema.validate(record.id)) {
        throw new Error("Invalid Id: " + record.id);
      }
      var oldRecord = this.adapterTransaction.get(record.id);
      var updated = this._updateRaw(oldRecord, record);
      this.adapterTransaction.update(updated);
      // Don't return deleted records -- pretend they are gone
      if (oldRecord && oldRecord._status == "deleted") {
        oldRecord = undefined;
      }
      if (oldRecord) {
        this._queueEvent("update", { data: updated, oldRecord: oldRecord });
      } else {
        this._queueEvent("create", { data: updated });
      }
      return { data: updated, oldRecord: oldRecord, permissions: {} };
    }
  }]);
  return CollectionTransaction;
}();

},{"./adapters/IDB":441,"./adapters/base":442,"./utils":445,"babel-runtime/core-js/get-iterator":3,"babel-runtime/core-js/json/stringify":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/asyncToGenerator":15,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/extends":18,"babel-runtime/helpers/typeof":23,"babel-runtime/regenerator":24,"uuid":438}],444:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = require("events");

var _kintoHttp = require("kinto-http");

var _kintoHttp2 = _interopRequireDefault(_kintoHttp);

var _base = require("./adapters/base");

var _base2 = _interopRequireDefault(_base);

var _IDB = require("./adapters/IDB");

var _IDB2 = _interopRequireDefault(_IDB);

var _KintoBase2 = require("./KintoBase");

var _KintoBase3 = _interopRequireDefault(_KintoBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// babel-polyfill can only be imported once
if (!global._babelPolyfill) {
  require("babel-polyfill");
}

var Kinto = function (_KintoBase) {
  (0, _inherits3.default)(Kinto, _KintoBase);
  (0, _createClass3.default)(Kinto, null, [{
    key: "adapters",

    /**
     * Provides a public access to the base adapter classes. Users can create
     * a custom DB adapter by extending BaseAdapter.
     *
     * @type {Object}
     */
    get: function get() {
      return {
        BaseAdapter: _base2.default,
        IDB: _IDB2.default
      };
    }
  }]);

  function Kinto() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Kinto);

    var defaults = {
      adapter: Kinto.adapters.IDB,
      events: new _events.EventEmitter(),
      ApiClass: _kintoHttp2.default
    };

    return (0, _possibleConstructorReturn3.default)(this, (Kinto.__proto__ || (0, _getPrototypeOf2.default)(Kinto)).call(this, (0, _extends3.default)({}, defaults, options)));
  }

  return Kinto;
}(_KintoBase3.default);

// This fixes compatibility with CommonJS required by browserify.
// See http://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default/33683495#33683495


exports.default = Kinto;
if ((typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object") {
  module.exports = Kinto;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./KintoBase":440,"./adapters/IDB":441,"./adapters/base":442,"babel-polyfill":1,"babel-runtime/core-js/object/get-prototype-of":9,"babel-runtime/helpers/classCallCheck":16,"babel-runtime/helpers/createClass":17,"babel-runtime/helpers/extends":18,"babel-runtime/helpers/inherits":20,"babel-runtime/helpers/possibleConstructorReturn":21,"babel-runtime/helpers/typeof":23,"events":423,"kinto-http":432}],445:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RE_UUID = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.sortObjects = sortObjects;
exports.filterObject = filterObject;
exports.filterObjects = filterObjects;
exports.isUUID = isUUID;
exports.waterfall = waterfall;
exports.deepEqual = deepEqual;
exports.omitKeys = omitKeys;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RE_UUID = exports.RE_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Checks if a value is undefined.
 * @param  {Any}  value
 * @return {Boolean}
 */
function _isUndefined(value) {
  return typeof value === "undefined";
}

/**
 * Sorts records in a list according to a given ordering.
 *
 * @param  {String} order The ordering, eg. `-last_modified`.
 * @param  {Array}  list  The collection to order.
 * @return {Array}
 */
function sortObjects(order, list) {
  var hasDash = order[0] === "-";
  var field = hasDash ? order.slice(1) : order;
  var direction = hasDash ? -1 : 1;
  return list.slice().sort(function (a, b) {
    if (a[field] && _isUndefined(b[field])) {
      return direction;
    }
    if (b[field] && _isUndefined(a[field])) {
      return -direction;
    }
    if (_isUndefined(a[field]) && _isUndefined(b[field])) {
      return 0;
    }
    return a[field] > b[field] ? direction : -direction;
  });
}

/**
 * Test if a single object matches all given filters.
 *
 * @param  {Object} filters  The filters object.
 * @param  {Object} entry    The object to filter.
 * @return {Function}
 */
function filterObject(filters, entry) {
  return (0, _keys2.default)(filters).every(function (filter) {
    var value = filters[filter];
    if (Array.isArray(value)) {
      return value.some(function (candidate) {
        return candidate === entry[filter];
      });
    }
    return entry[filter] === value;
  });
}

/**
 * Filters records in a list matching all given filters.
 *
 * @param  {Object} filters  The filters object.
 * @param  {Array}  list     The collection to filter.
 * @return {Array}
 */
function filterObjects(filters, list) {
  return list.filter(function (entry) {
    return filterObject(filters, entry);
  });
}

/**
 * Checks if a string is an UUID.
 *
 * @param  {String} uuid The uuid to validate.
 * @return {Boolean}
 */
function isUUID(uuid) {
  return RE_UUID.test(uuid);
}

/**
 * Resolves a list of functions sequentially, which can be sync or async; in
 * case of async, functions must return a promise.
 *
 * @param  {Array} fns  The list of functions.
 * @param  {Any}   init The initial value.
 * @return {Promise}
 */
function waterfall(fns, init) {
  if (!fns.length) {
    return _promise2.default.resolve(init);
  }
  return fns.reduce(function (promise, nextFn) {
    return promise.then(nextFn);
  }, _promise2.default.resolve(init));
}

/**
 * Simple deep object comparison function. This only supports comparison of
 * serializable JavaScript objects.
 *
 * @param  {Object} a The source object.
 * @param  {Object} b The compared object.
 * @return {Boolean}
 */
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) !== (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b))) {
    return false;
  }
  if (!(a && (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) == "object") || !(b && (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) == "object")) {
    return false;
  }
  if ((0, _keys2.default)(a).length !== (0, _keys2.default)(b).length) {
    return false;
  }
  for (var k in a) {
    if (!deepEqual(a[k], b[k])) {
      return false;
    }
  }
  return true;
}

/**
 * Return an object without the specified keys.
 *
 * @param  {Object} obj        The original object.
 * @param  {Array}  keys       The list of keys to exclude.
 * @return {Object}            A copy without the specified keys.
 */
function omitKeys(obj) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  return (0, _keys2.default)(obj).reduce(function (acc, key) {
    if (keys.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

},{"babel-runtime/core-js/object/keys":10,"babel-runtime/core-js/promise":12,"babel-runtime/helpers/typeof":23}]},{},[444])(444)
});