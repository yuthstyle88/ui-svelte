var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = __commonJS({
  "node_modules/tailwindcss/lib/util/createPlugin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function createPlugin(plugin, config2) {
      return {
        handler: plugin,
        config: config2
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
    exports.default = _default;
  }
});

// node_modules/tailwindcss/plugin.js
var require_plugin = __commonJS({
  "node_modules/tailwindcss/plugin.js"(exports, module2) {
    var createPlugin = require_createPlugin();
    module2.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// node_modules/@tailwindcss/aspect-ratio/src/index.js
var require_src = __commonJS({
  "node_modules/@tailwindcss/aspect-ratio/src/index.js"(exports, module2) {
    var plugin = require_plugin();
    var aspectRatio2 = plugin(function({ addComponents, theme, variants, e }) {
      const values = theme("aspectRatio");
      const baseSelectors = Object.entries(values).map(([key, value]) => {
        return `.${e(`aspect-w-${key}`)}`;
      }).join(",\n");
      const childSelectors = Object.entries(values).map(([key, value]) => {
        return `.${e(`aspect-w-${key}`)} > *`;
      }).join(",\n");
      addComponents([
        {
          [baseSelectors]: {
            position: "relative",
            paddingBottom: `calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)`
          },
          [childSelectors]: {
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
          },
          ".aspect-none": {
            position: "static",
            paddingBottom: "0"
          },
          ".aspect-none > *": {
            position: "static",
            height: "auto",
            width: "auto",
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
          }
        },
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`aspect-w-${key}`)}`]: {
              "--tw-aspect-w": value
            }
          };
        }),
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`aspect-h-${key}`)}`]: {
              "--tw-aspect-h": value
            }
          };
        })
      ], variants("aspectRatio"));
    }, {
      theme: {
        aspectRatio: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13",
          14: "14",
          15: "15",
          16: "16"
        }
      },
      variants: {
        aspectRatio: ["responsive"]
      }
    });
    module2.exports = aspectRatio2;
  }
});

// node_modules/mini-svg-data-uri/shorter-css-color-names.js
var require_shorter_css_color_names = __commonJS({
  "node_modules/mini-svg-data-uri/shorter-css-color-names.js"(exports, module2) {
    module2.exports = {
      aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
      azure: /#f0ffff(ff)?(?!\w)/gi,
      beige: /#f5f5dc(ff)?(?!\w)/gi,
      bisque: /#ffe4c4(ff)?(?!\w)/gi,
      black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
      blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
      brown: /#a52a2a(ff)?(?!\w)/gi,
      coral: /#ff7f50(ff)?(?!\w)/gi,
      cornsilk: /#fff8dc(ff)?(?!\w)/gi,
      crimson: /#dc143c(ff)?(?!\w)/gi,
      cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
      darkblue: /#00008b(ff)?(?!\w)/gi,
      darkcyan: /#008b8b(ff)?(?!\w)/gi,
      darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
      darkred: /#8b0000(ff)?(?!\w)/gi,
      deeppink: /#ff1493(ff)?(?!\w)/gi,
      dimgrey: /#696969(ff)?(?!\w)/gi,
      gold: /#ffd700(ff)?(?!\w)/gi,
      green: /#008000(ff)?(?!\w)/gi,
      grey: /#808080(ff)?(?!\w)/gi,
      honeydew: /#f0fff0(ff)?(?!\w)/gi,
      hotpink: /#ff69b4(ff)?(?!\w)/gi,
      indigo: /#4b0082(ff)?(?!\w)/gi,
      ivory: /#fffff0(ff)?(?!\w)/gi,
      khaki: /#f0e68c(ff)?(?!\w)/gi,
      lavender: /#e6e6fa(ff)?(?!\w)/gi,
      lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
      linen: /#faf0e6(ff)?(?!\w)/gi,
      maroon: /#800000(ff)?(?!\w)/gi,
      moccasin: /#ffe4b5(ff)?(?!\w)/gi,
      navy: /#000080(ff)?(?!\w)/gi,
      oldlace: /#fdf5e6(ff)?(?!\w)/gi,
      olive: /#808000(ff)?(?!\w)/gi,
      orange: /#ffa500(ff)?(?!\w)/gi,
      orchid: /#da70d6(ff)?(?!\w)/gi,
      peru: /#cd853f(ff)?(?!\w)/gi,
      pink: /#ffc0cb(ff)?(?!\w)/gi,
      plum: /#dda0dd(ff)?(?!\w)/gi,
      purple: /#800080(ff)?(?!\w)/gi,
      red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
      salmon: /#fa8072(ff)?(?!\w)/gi,
      seagreen: /#2e8b57(ff)?(?!\w)/gi,
      seashell: /#fff5ee(ff)?(?!\w)/gi,
      sienna: /#a0522d(ff)?(?!\w)/gi,
      silver: /#c0c0c0(ff)?(?!\w)/gi,
      skyblue: /#87ceeb(ff)?(?!\w)/gi,
      snow: /#fffafa(ff)?(?!\w)/gi,
      tan: /#d2b48c(ff)?(?!\w)/gi,
      teal: /#008080(ff)?(?!\w)/gi,
      thistle: /#d8bfd8(ff)?(?!\w)/gi,
      tomato: /#ff6347(ff)?(?!\w)/gi,
      violet: /#ee82ee(ff)?(?!\w)/gi,
      wheat: /#f5deb3(ff)?(?!\w)/gi,
      white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
    };
  }
});

// node_modules/mini-svg-data-uri/index.js
var require_mini_svg_data_uri = __commonJS({
  "node_modules/mini-svg-data-uri/index.js"(exports, module2) {
    var shorterNames = require_shorter_css_color_names();
    var REGEX = {
      whitespace: /\s+/g,
      urlHexPairs: /%[\dA-F]{2}/g,
      quotes: /"/g
    };
    function collapseWhitespace(str) {
      return str.trim().replace(REGEX.whitespace, " ");
    }
    function dataURIPayload(string) {
      return encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);
    }
    function colorCodeToShorterNames(string) {
      Object.keys(shorterNames).forEach(function(key) {
        if (shorterNames[key].test(string)) {
          string = string.replace(shorterNames[key], key);
        }
      });
      return string;
    }
    function specialHexEncode(match) {
      switch (match) {
        case "%20":
          return " ";
        case "%3D":
          return "=";
        case "%3A":
          return ":";
        case "%2F":
          return "/";
        default:
          return match.toLowerCase();
      }
    }
    function svgToTinyDataUri(svgString) {
      if (typeof svgString !== "string") {
        throw new TypeError("Expected a string, but received " + typeof svgString);
      }
      if (svgString.charCodeAt(0) === 65279) {
        svgString = svgString.slice(1);
      }
      var body = colorCodeToShorterNames(collapseWhitespace(svgString)).replace(REGEX.quotes, "'");
      return "data:image/svg+xml," + dataURIPayload(body);
    }
    svgToTinyDataUri.toSrcset = function toSrcset(svgString) {
      return svgToTinyDataUri(svgString).replace(/ /g, "%20");
    };
    module2.exports = svgToTinyDataUri;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module2) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module2) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol = root.Symbol;
    module2.exports = Symbol;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module2.exports = Map;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module2) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module2) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module2) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module2.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module2) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module2.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module2) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module2.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module2.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module2) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module2.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module2) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module2) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module2) {
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module2) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module2) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module2) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module2) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module2) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module2) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module2) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module2.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module2) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module2) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module2.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module2.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module2) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module2) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module2.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module2) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module2) {
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module2) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module2.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module2) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module2) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module2.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module2.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module2.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module2.exports = Set;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module2.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module2) {
    var DataView = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module2.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module2) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module2.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module2) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module2.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module2.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module2) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module2.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module2) {
    var Symbol = require_Symbol();
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module2.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module2.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module2.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module2) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module2.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module2) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module2.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module2.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module2) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module2.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module2.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module2) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module2.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module2) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module2.exports = baseClone;
  }
});

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module2) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module2.exports = cloneDeep;
  }
});

// node_modules/tailwindcss/colors.js
var require_colors = __commonJS({
  "node_modules/tailwindcss/colors.js"(exports, module2) {
    module2.exports = {
      black: "#000",
      white: "#fff",
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
      },
      fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75"
      },
      purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
      },
      lightBlue: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
      },
      cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
      },
      teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
      },
      green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
      },
      lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314"
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      warmGray: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
      },
      trueGray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
      },
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
      },
      coolGray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      blueGray: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
      }
    };
  }
});

// node_modules/tailwindcss/stubs/defaultConfig.stub.js
var require_defaultConfig_stub = __commonJS({
  "node_modules/tailwindcss/stubs/defaultConfig.stub.js"(exports, module2) {
    var colors2 = require_colors();
    module2.exports = {
      purge: [],
      presets: [],
      darkMode: false,
      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px"
        },
        colors: {
          transparent: "transparent",
          current: "currentColor",
          black: colors2.black,
          white: colors2.white,
          gray: colors2.coolGray,
          red: colors2.red,
          yellow: colors2.amber,
          green: colors2.emerald,
          blue: colors2.blue,
          indigo: colors2.indigo,
          purple: colors2.violet,
          pink: colors2.pink
        },
        spacing: {
          px: "1px",
          0: "0px",
          0.5: "0.125rem",
          1: "0.25rem",
          1.5: "0.375rem",
          2: "0.5rem",
          2.5: "0.625rem",
          3: "0.75rem",
          3.5: "0.875rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          11: "2.75rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          28: "7rem",
          32: "8rem",
          36: "9rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          72: "18rem",
          80: "20rem",
          96: "24rem"
        },
        animation: {
          none: "none",
          spin: "spin 1s linear infinite",
          ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
          pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          bounce: "bounce 1s infinite"
        },
        backdropBlur: (theme) => theme("blur"),
        backdropBrightness: (theme) => theme("brightness"),
        backdropContrast: (theme) => theme("contrast"),
        backdropGrayscale: (theme) => theme("grayscale"),
        backdropHueRotate: (theme) => theme("hueRotate"),
        backdropInvert: (theme) => theme("invert"),
        backdropOpacity: (theme) => theme("opacity"),
        backdropSaturate: (theme) => theme("saturate"),
        backdropSepia: (theme) => theme("sepia"),
        backgroundColor: (theme) => theme("colors"),
        backgroundImage: {
          none: "none",
          "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
          "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
          "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
          "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
          "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
        },
        backgroundOpacity: (theme) => theme("opacity"),
        backgroundPosition: {
          bottom: "bottom",
          center: "center",
          left: "left",
          "left-bottom": "left bottom",
          "left-top": "left top",
          right: "right",
          "right-bottom": "right bottom",
          "right-top": "right top",
          top: "top"
        },
        backgroundSize: {
          auto: "auto",
          cover: "cover",
          contain: "contain"
        },
        blur: {
          0: "0",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "24px",
          "2xl": "40px",
          "3xl": "64px"
        },
        brightness: {
          0: "0",
          50: ".5",
          75: ".75",
          90: ".9",
          95: ".95",
          100: "1",
          105: "1.05",
          110: "1.1",
          125: "1.25",
          150: "1.5",
          200: "2"
        },
        borderColor: (theme) => __spreadProps(__spreadValues({}, theme("colors")), {
          DEFAULT: theme("colors.gray.200", "currentColor")
        }),
        borderOpacity: (theme) => theme("opacity"),
        borderRadius: {
          none: "0px",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          xl: "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          full: "9999px"
        },
        borderWidth: {
          DEFAULT: "1px",
          0: "0px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        boxShadow: {
          sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          none: "none"
        },
        contrast: {
          0: "0",
          50: ".5",
          75: ".75",
          100: "1",
          125: "1.25",
          150: "1.5",
          200: "2"
        },
        container: {},
        cursor: {
          auto: "auto",
          default: "default",
          pointer: "pointer",
          wait: "wait",
          text: "text",
          move: "move",
          help: "help",
          "not-allowed": "not-allowed"
        },
        divideColor: (theme) => theme("borderColor"),
        divideOpacity: (theme) => theme("borderOpacity"),
        divideWidth: (theme) => theme("borderWidth"),
        dropShadow: {
          sm: "0 1px 1px rgba(0,0,0,0.05)",
          DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
          md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
          lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
          xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
          "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
          none: "0 0 #0000"
        },
        fill: { current: "currentColor" },
        grayscale: {
          0: "0",
          DEFAULT: "100%"
        },
        hueRotate: {
          "-180": "-180deg",
          "-90": "-90deg",
          "-60": "-60deg",
          "-30": "-30deg",
          "-15": "-15deg",
          0: "0deg",
          15: "15deg",
          30: "30deg",
          60: "60deg",
          90: "90deg",
          180: "180deg"
        },
        invert: {
          0: "0",
          DEFAULT: "100%"
        },
        flex: {
          1: "1 1 0%",
          auto: "1 1 auto",
          initial: "0 1 auto",
          none: "none"
        },
        flexGrow: {
          0: "0",
          DEFAULT: "1"
        },
        flexShrink: {
          0: "0",
          DEFAULT: "1"
        },
        fontFamily: {
          sans: [
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            '"Noto Sans"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
          ],
          serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
          mono: [
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            '"Liberation Mono"',
            '"Courier New"',
            "monospace"
          ]
        },
        fontSize: {
          xs: ["0.75rem", { lineHeight: "1rem" }],
          sm: ["0.875rem", { lineHeight: "1.25rem" }],
          base: ["1rem", { lineHeight: "1.5rem" }],
          lg: ["1.125rem", { lineHeight: "1.75rem" }],
          xl: ["1.25rem", { lineHeight: "1.75rem" }],
          "2xl": ["1.5rem", { lineHeight: "2rem" }],
          "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
          "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
          "5xl": ["3rem", { lineHeight: "1" }],
          "6xl": ["3.75rem", { lineHeight: "1" }],
          "7xl": ["4.5rem", { lineHeight: "1" }],
          "8xl": ["6rem", { lineHeight: "1" }],
          "9xl": ["8rem", { lineHeight: "1" }]
        },
        fontWeight: {
          thin: "100",
          extralight: "200",
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          extrabold: "800",
          black: "900"
        },
        gap: (theme) => theme("spacing"),
        gradientColorStops: (theme) => theme("colors"),
        gridAutoColumns: {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)"
        },
        gridAutoRows: {
          auto: "auto",
          min: "min-content",
          max: "max-content",
          fr: "minmax(0, 1fr)"
        },
        gridColumn: {
          auto: "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6",
          "span-7": "span 7 / span 7",
          "span-8": "span 8 / span 8",
          "span-9": "span 9 / span 9",
          "span-10": "span 10 / span 10",
          "span-11": "span 11 / span 11",
          "span-12": "span 12 / span 12",
          "span-full": "1 / -1"
        },
        gridColumnEnd: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13"
        },
        gridColumnStart: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13"
        },
        gridRow: {
          auto: "auto",
          "span-1": "span 1 / span 1",
          "span-2": "span 2 / span 2",
          "span-3": "span 3 / span 3",
          "span-4": "span 4 / span 4",
          "span-5": "span 5 / span 5",
          "span-6": "span 6 / span 6",
          "span-full": "1 / -1"
        },
        gridRowStart: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7"
        },
        gridRowEnd: {
          auto: "auto",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7"
        },
        gridTemplateColumns: {
          none: "none",
          1: "repeat(1, minmax(0, 1fr))",
          2: "repeat(2, minmax(0, 1fr))",
          3: "repeat(3, minmax(0, 1fr))",
          4: "repeat(4, minmax(0, 1fr))",
          5: "repeat(5, minmax(0, 1fr))",
          6: "repeat(6, minmax(0, 1fr))",
          7: "repeat(7, minmax(0, 1fr))",
          8: "repeat(8, minmax(0, 1fr))",
          9: "repeat(9, minmax(0, 1fr))",
          10: "repeat(10, minmax(0, 1fr))",
          11: "repeat(11, minmax(0, 1fr))",
          12: "repeat(12, minmax(0, 1fr))"
        },
        gridTemplateRows: {
          none: "none",
          1: "repeat(1, minmax(0, 1fr))",
          2: "repeat(2, minmax(0, 1fr))",
          3: "repeat(3, minmax(0, 1fr))",
          4: "repeat(4, minmax(0, 1fr))",
          5: "repeat(5, minmax(0, 1fr))",
          6: "repeat(6, minmax(0, 1fr))"
        },
        height: (theme) => __spreadProps(__spreadValues({
          auto: "auto"
        }, theme("spacing")), {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          full: "100%",
          screen: "100vh"
        }),
        inset: (theme, { negative }) => __spreadProps(__spreadValues(__spreadValues({
          auto: "auto"
        }, theme("spacing")), negative(theme("spacing"))), {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          full: "100%",
          "-1/2": "-50%",
          "-1/3": "-33.333333%",
          "-2/3": "-66.666667%",
          "-1/4": "-25%",
          "-2/4": "-50%",
          "-3/4": "-75%",
          "-full": "-100%"
        }),
        keyframes: {
          spin: {
            to: {
              transform: "rotate(360deg)"
            }
          },
          ping: {
            "75%, 100%": {
              transform: "scale(2)",
              opacity: "0"
            }
          },
          pulse: {
            "50%": {
              opacity: ".5"
            }
          },
          bounce: {
            "0%, 100%": {
              transform: "translateY(-25%)",
              animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
              transform: "none",
              animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
          }
        },
        letterSpacing: {
          tighter: "-0.05em",
          tight: "-0.025em",
          normal: "0em",
          wide: "0.025em",
          wider: "0.05em",
          widest: "0.1em"
        },
        lineHeight: {
          none: "1",
          tight: "1.25",
          snug: "1.375",
          normal: "1.5",
          relaxed: "1.625",
          loose: "2",
          3: ".75rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem"
        },
        listStyleType: {
          none: "none",
          disc: "disc",
          decimal: "decimal"
        },
        margin: (theme, { negative }) => __spreadValues(__spreadValues({
          auto: "auto"
        }, theme("spacing")), negative(theme("spacing"))),
        maxHeight: (theme) => __spreadProps(__spreadValues({}, theme("spacing")), {
          full: "100%",
          screen: "100vh"
        }),
        maxWidth: (theme, { breakpoints }) => __spreadValues({
          none: "none",
          0: "0rem",
          xs: "20rem",
          sm: "24rem",
          md: "28rem",
          lg: "32rem",
          xl: "36rem",
          "2xl": "42rem",
          "3xl": "48rem",
          "4xl": "56rem",
          "5xl": "64rem",
          "6xl": "72rem",
          "7xl": "80rem",
          full: "100%",
          min: "min-content",
          max: "max-content",
          prose: "65ch"
        }, breakpoints(theme("screens"))),
        minHeight: {
          0: "0px",
          full: "100%",
          screen: "100vh"
        },
        minWidth: {
          0: "0px",
          full: "100%",
          min: "min-content",
          max: "max-content"
        },
        objectPosition: {
          bottom: "bottom",
          center: "center",
          left: "left",
          "left-bottom": "left bottom",
          "left-top": "left top",
          right: "right",
          "right-bottom": "right bottom",
          "right-top": "right top",
          top: "top"
        },
        opacity: {
          0: "0",
          5: "0.05",
          10: "0.1",
          20: "0.2",
          25: "0.25",
          30: "0.3",
          40: "0.4",
          50: "0.5",
          60: "0.6",
          70: "0.7",
          75: "0.75",
          80: "0.8",
          90: "0.9",
          95: "0.95",
          100: "1"
        },
        order: {
          first: "-9999",
          last: "9999",
          none: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12"
        },
        outline: {
          none: ["2px solid transparent", "2px"],
          white: ["2px dotted white", "2px"],
          black: ["2px dotted black", "2px"]
        },
        padding: (theme) => theme("spacing"),
        placeholderColor: (theme) => theme("colors"),
        placeholderOpacity: (theme) => theme("opacity"),
        ringColor: (theme) => __spreadValues({
          DEFAULT: theme("colors.blue.500", "#3b82f6")
        }, theme("colors")),
        ringOffsetColor: (theme) => theme("colors"),
        ringOffsetWidth: {
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        ringOpacity: (theme) => __spreadValues({
          DEFAULT: "0.5"
        }, theme("opacity")),
        ringWidth: {
          DEFAULT: "3px",
          0: "0px",
          1: "1px",
          2: "2px",
          4: "4px",
          8: "8px"
        },
        rotate: {
          "-180": "-180deg",
          "-90": "-90deg",
          "-45": "-45deg",
          "-12": "-12deg",
          "-6": "-6deg",
          "-3": "-3deg",
          "-2": "-2deg",
          "-1": "-1deg",
          0: "0deg",
          1: "1deg",
          2: "2deg",
          3: "3deg",
          6: "6deg",
          12: "12deg",
          45: "45deg",
          90: "90deg",
          180: "180deg"
        },
        saturate: {
          0: "0",
          50: ".5",
          100: "1",
          150: "1.5",
          200: "2"
        },
        scale: {
          0: "0",
          50: ".5",
          75: ".75",
          90: ".9",
          95: ".95",
          100: "1",
          105: "1.05",
          110: "1.1",
          125: "1.25",
          150: "1.5"
        },
        sepia: {
          0: "0",
          DEFAULT: "100%"
        },
        skew: {
          "-12": "-12deg",
          "-6": "-6deg",
          "-3": "-3deg",
          "-2": "-2deg",
          "-1": "-1deg",
          0: "0deg",
          1: "1deg",
          2: "2deg",
          3: "3deg",
          6: "6deg",
          12: "12deg"
        },
        space: (theme, { negative }) => __spreadValues(__spreadValues({}, theme("spacing")), negative(theme("spacing"))),
        stroke: {
          current: "currentColor"
        },
        strokeWidth: {
          0: "0",
          1: "1",
          2: "2"
        },
        textColor: (theme) => theme("colors"),
        textOpacity: (theme) => theme("opacity"),
        transformOrigin: {
          center: "center",
          top: "top",
          "top-right": "top right",
          right: "right",
          "bottom-right": "bottom right",
          bottom: "bottom",
          "bottom-left": "bottom left",
          left: "left",
          "top-left": "top left"
        },
        transitionDelay: {
          75: "75ms",
          100: "100ms",
          150: "150ms",
          200: "200ms",
          300: "300ms",
          500: "500ms",
          700: "700ms",
          1e3: "1000ms"
        },
        transitionDuration: {
          DEFAULT: "150ms",
          75: "75ms",
          100: "100ms",
          150: "150ms",
          200: "200ms",
          300: "300ms",
          500: "500ms",
          700: "700ms",
          1e3: "1000ms"
        },
        transitionProperty: {
          none: "none",
          all: "all",
          DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
          colors: "background-color, border-color, color, fill, stroke",
          opacity: "opacity",
          shadow: "box-shadow",
          transform: "transform"
        },
        transitionTimingFunction: {
          DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
          linear: "linear",
          in: "cubic-bezier(0.4, 0, 1, 1)",
          out: "cubic-bezier(0, 0, 0.2, 1)",
          "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        translate: (theme, { negative }) => __spreadProps(__spreadValues(__spreadValues({}, theme("spacing")), negative(theme("spacing"))), {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          full: "100%",
          "-1/2": "-50%",
          "-1/3": "-33.333333%",
          "-2/3": "-66.666667%",
          "-1/4": "-25%",
          "-2/4": "-50%",
          "-3/4": "-75%",
          "-full": "-100%"
        }),
        width: (theme) => __spreadProps(__spreadValues({
          auto: "auto"
        }, theme("spacing")), {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          "1/4": "25%",
          "2/4": "50%",
          "3/4": "75%",
          "1/5": "20%",
          "2/5": "40%",
          "3/5": "60%",
          "4/5": "80%",
          "1/6": "16.666667%",
          "2/6": "33.333333%",
          "3/6": "50%",
          "4/6": "66.666667%",
          "5/6": "83.333333%",
          "1/12": "8.333333%",
          "2/12": "16.666667%",
          "3/12": "25%",
          "4/12": "33.333333%",
          "5/12": "41.666667%",
          "6/12": "50%",
          "7/12": "58.333333%",
          "8/12": "66.666667%",
          "9/12": "75%",
          "10/12": "83.333333%",
          "11/12": "91.666667%",
          full: "100%",
          screen: "100vw",
          min: "min-content",
          max: "max-content"
        }),
        zIndex: {
          auto: "auto",
          0: "0",
          10: "10",
          20: "20",
          30: "30",
          40: "40",
          50: "50"
        }
      },
      variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled"
      ],
      variants: {
        accessibility: ["responsive", "focus-within", "focus"],
        alignContent: ["responsive"],
        alignItems: ["responsive"],
        alignSelf: ["responsive"],
        animation: ["responsive"],
        appearance: ["responsive"],
        backdropBlur: ["responsive"],
        backdropBrightness: ["responsive"],
        backdropContrast: ["responsive"],
        backdropDropShadow: ["responsive"],
        backdropFilter: ["responsive"],
        backdropGrayscale: ["responsive"],
        backdropHueRotate: ["responsive"],
        backdropInvert: ["responsive"],
        backdropSaturate: ["responsive"],
        backdropSepia: ["responsive"],
        backgroundAttachment: ["responsive"],
        backgroundBlendMode: ["responsive"],
        backgroundClip: ["responsive"],
        backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        backgroundImage: ["responsive"],
        backgroundOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        backgroundPosition: ["responsive"],
        backgroundRepeat: ["responsive"],
        backgroundSize: ["responsive"],
        blur: ["responsive"],
        borderCollapse: ["responsive"],
        borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        borderOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        borderRadius: ["responsive"],
        borderStyle: ["responsive"],
        borderWidth: ["responsive"],
        boxDecorationBreak: ["responsive"],
        boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
        boxSizing: ["responsive"],
        brightness: ["responsive"],
        clear: ["responsive"],
        container: ["responsive"],
        contrast: ["responsive"],
        cursor: ["responsive"],
        display: ["responsive"],
        divideColor: ["responsive", "dark"],
        divideOpacity: ["responsive", "dark"],
        divideStyle: ["responsive"],
        divideWidth: ["responsive"],
        dropShadow: ["responsive"],
        fill: ["responsive"],
        filter: ["responsive"],
        flex: ["responsive"],
        flexDirection: ["responsive"],
        flexGrow: ["responsive"],
        flexShrink: ["responsive"],
        flexWrap: ["responsive"],
        float: ["responsive"],
        fontFamily: ["responsive"],
        fontSize: ["responsive"],
        fontSmoothing: ["responsive"],
        fontStyle: ["responsive"],
        fontVariantNumeric: ["responsive"],
        fontWeight: ["responsive"],
        gap: ["responsive"],
        gradientColorStops: ["responsive", "dark", "hover", "focus"],
        grayscale: ["responsive"],
        gridAutoColumns: ["responsive"],
        gridAutoFlow: ["responsive"],
        gridAutoRows: ["responsive"],
        gridColumn: ["responsive"],
        gridColumnEnd: ["responsive"],
        gridColumnStart: ["responsive"],
        gridRow: ["responsive"],
        gridRowEnd: ["responsive"],
        gridRowStart: ["responsive"],
        gridTemplateColumns: ["responsive"],
        gridTemplateRows: ["responsive"],
        height: ["responsive"],
        hueRotate: ["responsive"],
        inset: ["responsive"],
        invert: ["responsive"],
        isolation: ["responsive"],
        justifyContent: ["responsive"],
        justifyItems: ["responsive"],
        justifySelf: ["responsive"],
        letterSpacing: ["responsive"],
        lineHeight: ["responsive"],
        listStylePosition: ["responsive"],
        listStyleType: ["responsive"],
        margin: ["responsive"],
        maxHeight: ["responsive"],
        maxWidth: ["responsive"],
        minHeight: ["responsive"],
        minWidth: ["responsive"],
        mixBlendMode: ["responsive"],
        objectFit: ["responsive"],
        objectPosition: ["responsive"],
        opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
        order: ["responsive"],
        outline: ["responsive", "focus-within", "focus"],
        overflow: ["responsive"],
        overscrollBehavior: ["responsive"],
        padding: ["responsive"],
        placeContent: ["responsive"],
        placeItems: ["responsive"],
        placeSelf: ["responsive"],
        placeholderColor: ["responsive", "dark", "focus"],
        placeholderOpacity: ["responsive", "dark", "focus"],
        pointerEvents: ["responsive"],
        position: ["responsive"],
        resize: ["responsive"],
        ringColor: ["responsive", "dark", "focus-within", "focus"],
        ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
        ringOffsetWidth: ["responsive", "focus-within", "focus"],
        ringOpacity: ["responsive", "dark", "focus-within", "focus"],
        ringWidth: ["responsive", "focus-within", "focus"],
        rotate: ["responsive", "hover", "focus"],
        saturate: ["responsive"],
        scale: ["responsive", "hover", "focus"],
        sepia: ["responsive"],
        skew: ["responsive", "hover", "focus"],
        space: ["responsive"],
        stroke: ["responsive"],
        strokeWidth: ["responsive"],
        tableLayout: ["responsive"],
        textAlign: ["responsive"],
        textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        textDecoration: ["responsive", "group-hover", "focus-within", "hover", "focus"],
        textOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        textOverflow: ["responsive"],
        textTransform: ["responsive"],
        transform: ["responsive"],
        transformOrigin: ["responsive"],
        transitionDelay: ["responsive"],
        transitionDuration: ["responsive"],
        transitionProperty: ["responsive"],
        transitionTimingFunction: ["responsive"],
        translate: ["responsive", "hover", "focus"],
        userSelect: ["responsive"],
        verticalAlign: ["responsive"],
        visibility: ["responsive"],
        whitespace: ["responsive"],
        width: ["responsive"],
        wordBreak: ["responsive"],
        zIndex: ["responsive", "focus-within", "focus"]
      },
      plugins: []
    };
  }
});

// node_modules/tailwindcss/defaultTheme.js
var require_defaultTheme = __commonJS({
  "node_modules/tailwindcss/defaultTheme.js"(exports, module2) {
    var cloneDeep = require_cloneDeep();
    var defaultConfig = require_defaultConfig_stub();
    module2.exports = cloneDeep(defaultConfig.theme);
  }
});

// node_modules/@tailwindcss/forms/src/index.js
var require_src2 = __commonJS({
  "node_modules/@tailwindcss/forms/src/index.js"(exports, module2) {
    var svgToDataUri = require_mini_svg_data_uri();
    var plugin = require_plugin();
    var defaultTheme2 = require_defaultTheme();
    var [baseFontSize, { lineHeight: baseLineHeight }] = defaultTheme2.fontSize.base;
    var { colors: colors2, spacing, borderWidth, borderRadius, outline } = defaultTheme2;
    var forms2 = plugin.withOptions(function(options = { strategy: "base" }) {
      return function({ addBase, theme }) {
        const strategy = options.strategy;
        const rules = [
          {
            base: [
              "[type='text']",
              "[type='email']",
              "[type='url']",
              "[type='password']",
              "[type='number']",
              "[type='date']",
              "[type='datetime-local']",
              "[type='month']",
              "[type='search']",
              "[type='tel']",
              "[type='time']",
              "[type='week']",
              "[multiple]",
              "textarea",
              "select"
            ],
            class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
            styles: {
              appearance: "none",
              "background-color": "#fff",
              "border-color": theme("colors.gray.500", colors2.gray[500]),
              "border-width": borderWidth["DEFAULT"],
              "border-radius": borderRadius.none,
              "padding-top": spacing[2],
              "padding-right": spacing[3],
              "padding-bottom": spacing[2],
              "padding-left": spacing[3],
              "font-size": baseFontSize,
              "line-height": baseLineHeight,
              "&:focus": {
                outline: outline.none[0],
                "outline-offset": outline.none[1],
                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                "--tw-ring-offset-width": "0px",
                "--tw-ring-offset-color": "#fff",
                "--tw-ring-color": theme("colors.blue.600", colors2.blue[600]),
                "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
                "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`,
                "border-color": theme("colors.blue.600", colors2.blue[600])
              }
            }
          },
          {
            base: ["input::placeholder", "textarea::placeholder"],
            class: [".form-input::placeholder", ".form-textarea::placeholder"],
            styles: {
              color: theme("colors.gray.500", colors2.gray[500]),
              opacity: "1"
            }
          },
          {
            base: ["::-webkit-datetime-edit-fields-wrapper"],
            class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
            styles: {
              padding: "0"
            }
          },
          {
            base: ["::-webkit-date-and-time-value"],
            class: [".form-input::-webkit-date-and-time-value"],
            styles: {
              "min-height": "1.5em"
            }
          },
          {
            base: ["select"],
            class: [".form-select"],
            styles: {
              "background-image": `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${theme("colors.gray.500", colors2.gray[500])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,
              "background-position": `right ${spacing[2]} center`,
              "background-repeat": `no-repeat`,
              "background-size": `1.5em 1.5em`,
              "padding-right": spacing[10],
              "color-adjust": `exact`
            }
          },
          {
            base: ["[multiple]"],
            class: null,
            styles: {
              "background-image": "initial",
              "background-position": "initial",
              "background-repeat": "unset",
              "background-size": "initial",
              "padding-right": spacing[3],
              "color-adjust": "unset"
            }
          },
          {
            base: [`[type='checkbox']`, `[type='radio']`],
            class: [".form-checkbox", ".form-radio"],
            styles: {
              appearance: "none",
              padding: "0",
              "color-adjust": "exact",
              display: "inline-block",
              "vertical-align": "middle",
              "background-origin": "border-box",
              "user-select": "none",
              "flex-shrink": "0",
              height: spacing[4],
              width: spacing[4],
              color: theme("colors.blue.600", colors2.blue[600]),
              "background-color": "#fff",
              "border-color": theme("colors.gray.500", colors2.gray[500]),
              "border-width": borderWidth["DEFAULT"]
            }
          },
          {
            base: [`[type='checkbox']`],
            class: [".form-checkbox"],
            styles: {
              "border-radius": borderRadius["none"]
            }
          },
          {
            base: [`[type='radio']`],
            class: [".form-radio"],
            styles: {
              "border-radius": "100%"
            }
          },
          {
            base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
            class: [".form-checkbox:focus", ".form-radio:focus"],
            styles: {
              outline: outline.none[0],
              "outline-offset": outline.none[1],
              "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
              "--tw-ring-offset-width": "2px",
              "--tw-ring-offset-color": "#fff",
              "--tw-ring-color": theme("colors.blue.600", colors2.blue[600]),
              "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
              "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
              "box-shadow": `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)`
            }
          },
          {
            base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
            class: [".form-checkbox:checked", ".form-radio:checked"],
            styles: {
              "border-color": `transparent`,
              "background-color": `currentColor`,
              "background-size": `100% 100%`,
              "background-position": `center`,
              "background-repeat": `no-repeat`
            }
          },
          {
            base: [`[type='checkbox']:checked`],
            class: [".form-checkbox:checked"],
            styles: {
              "background-image": `url("${svgToDataUri(`<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`)}")`
            }
          },
          {
            base: [`[type='radio']:checked`],
            class: [".form-radio:checked"],
            styles: {
              "background-image": `url("${svgToDataUri(`<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`)}")`
            }
          },
          {
            base: [
              `[type='checkbox']:checked:hover`,
              `[type='checkbox']:checked:focus`,
              `[type='radio']:checked:hover`,
              `[type='radio']:checked:focus`
            ],
            class: [
              ".form-checkbox:checked:hover",
              ".form-checkbox:checked:focus",
              ".form-radio:checked:hover",
              ".form-radio:check:focus"
            ],
            styles: {
              "border-color": "transparent",
              "background-color": "currentColor"
            }
          },
          {
            base: [`[type='checkbox']:indeterminate`],
            class: [".form-checkbox:indeterminate"],
            styles: {
              "background-image": `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`)}")`,
              "border-color": `transparent`,
              "background-color": `currentColor`,
              "background-size": `100% 100%`,
              "background-position": `center`,
              "background-repeat": `no-repeat`
            }
          },
          {
            base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
            class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
            styles: {
              "border-color": "transparent",
              "background-color": "currentColor"
            }
          },
          {
            base: [`[type='file']`],
            class: null,
            styles: {
              background: "unset",
              "border-color": "inherit",
              "border-width": "0",
              "border-radius": "0",
              padding: "0",
              "font-size": "unset",
              "line-height": "inherit"
            }
          },
          {
            base: [`[type='file']:focus`],
            class: null,
            styles: {
              outline: `1px solid ButtonText`,
              outline: `1px auto -webkit-focus-ring-color`
            }
          }
        ];
        addBase(rules.map((rule) => {
          if (rule[strategy] === null) {
            return null;
          }
          return { [rule[strategy]]: rule.styles };
        }).filter(Boolean));
      };
    });
    module2.exports = forms2;
  }
});

// node_modules/@tailwindcss/line-clamp/src/index.js
var require_src3 = __commonJS({
  "node_modules/@tailwindcss/line-clamp/src/index.js"(exports, module2) {
    var plugin = require_plugin();
    var lineClamp2 = plugin(function({ addUtilities, theme, variants, e }) {
      const values = theme("lineClamp");
      addUtilities([
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`line-clamp-${key}`)}`]: {
              overflow: "hidden",
              display: "-webkit-box",
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": `${value}`
            }
          };
        }),
        {
          ".line-clamp-none": {
            "-webkit-line-clamp": "unset"
          }
        }
      ], variants("lineClamp"));
    }, {
      theme: {
        lineClamp: {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6"
        }
      },
      variants: {
        lineClamp: ["responsive"]
      }
    });
    module2.exports = lineClamp2;
  }
});

// node_modules/lodash.merge/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.merge/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module2.exports = merge;
  }
});

// node_modules/lodash.castarray/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.castarray/index.js"(exports, module2) {
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }
    var isArray = Array.isArray;
    module2.exports = castArray;
  }
});

// node_modules/lodash.uniq/index.js
var require_lodash3 = __commonJS({
  "node_modules/lodash.uniq/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var INFINITY = 1 / 0;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayIncludes(array, value) {
      var length = array ? array.length : 0;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var splice = arrayProto.splice;
    var Map = getNative(root, "Map");
    var Set = getNative(root, "Set");
    var nativeCreate = getNative(Object, "create");
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function noop() {
    }
    module2.exports = uniq;
  }
});

// node_modules/lodash.isplainobject/index.js
var require_lodash4 = __commonJS({
  "node_modules/lodash.isplainobject/index.js"(exports, module2) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/@tailwindcss/typography/src/utils.js
var require_utils = __commonJS({
  "node_modules/@tailwindcss/typography/src/utils.js"(exports, module2) {
    var isPlainObject = require_lodash4();
    module2.exports = {
      isUsableColor(color, values) {
        return isPlainObject(values) && color !== "gray" && values[600];
      }
    };
  }
});

// node_modules/@tailwindcss/typography/src/styles.js
var require_styles = __commonJS({
  "node_modules/@tailwindcss/typography/src/styles.js"(exports, module2) {
    var defaultTheme2 = require_defaultTheme();
    var { isUsableColor } = require_utils();
    var round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, "$1").replace(/\.0$/, "");
    var rem = (px) => `${round(px / 16)}rem`;
    var em = (px, base) => `${round(px / base)}em`;
    module2.exports = (theme) => __spreadValues({
      DEFAULT: {
        css: [
          {
            color: theme("colors.gray.700", defaultTheme2.colors.gray[700]),
            maxWidth: "65ch",
            '[class~="lead"]': {
              color: theme("colors.gray.600", defaultTheme2.colors.gray[600])
            },
            a: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              textDecoration: "underline",
              fontWeight: "500"
            },
            strong: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "600"
            },
            'ol[type="A"]': {
              "--list-counter-style": "upper-alpha"
            },
            'ol[type="a"]': {
              "--list-counter-style": "lower-alpha"
            },
            'ol[type="A s"]': {
              "--list-counter-style": "upper-alpha"
            },
            'ol[type="a s"]': {
              "--list-counter-style": "lower-alpha"
            },
            'ol[type="I"]': {
              "--list-counter-style": "upper-roman"
            },
            'ol[type="i"]': {
              "--list-counter-style": "lower-roman"
            },
            'ol[type="I s"]': {
              "--list-counter-style": "upper-roman"
            },
            'ol[type="i s"]': {
              "--list-counter-style": "lower-roman"
            },
            'ol[type="1"]': {
              "--list-counter-style": "decimal"
            },
            "ol > li": {
              position: "relative"
            },
            "ol > li::before": {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: "absolute",
              fontWeight: "400",
              color: theme("colors.gray.500", defaultTheme2.colors.gray[500])
            },
            "ul > li": {
              position: "relative"
            },
            "ul > li::before": {
              content: '""',
              position: "absolute",
              backgroundColor: theme("colors.gray.300", defaultTheme2.colors.gray[300]),
              borderRadius: "50%"
            },
            hr: {
              borderColor: theme("colors.gray.200", defaultTheme2.colors.gray[200]),
              borderTopWidth: 1
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              borderLeftWidth: "0.25rem",
              borderLeftColor: theme("colors.gray.200", defaultTheme2.colors.gray[200]),
              quotes: '"\\201C""\\201D""\\2018""\\2019"'
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote"
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote"
            },
            h1: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "800"
            },
            h2: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "700"
            },
            h3: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "600"
            },
            h4: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "600"
            },
            "figure figcaption": {
              color: theme("colors.gray.500", defaultTheme2.colors.gray[500])
            },
            code: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "600"
            },
            "code::before": {
              content: '"`"'
            },
            "code::after": {
              content: '"`"'
            },
            "a code": {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900])
            },
            pre: {
              color: theme("colors.gray.200", defaultTheme2.colors.gray[200]),
              backgroundColor: theme("colors.gray.800", defaultTheme2.colors.gray[800]),
              overflowX: "auto"
            },
            "pre code": {
              backgroundColor: "transparent",
              borderWidth: "0",
              borderRadius: "0",
              padding: "0",
              fontWeight: "400",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit"
            },
            "pre code::before": {
              content: "none"
            },
            "pre code::after": {
              content: "none"
            },
            table: {
              width: "100%",
              tableLayout: "auto",
              textAlign: "left",
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            thead: {
              color: theme("colors.gray.900", defaultTheme2.colors.gray[900]),
              fontWeight: "600",
              borderBottomWidth: "1px",
              borderBottomColor: theme("colors.gray.300", defaultTheme2.colors.gray[300])
            },
            "thead th": {
              verticalAlign: "bottom"
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: theme("colors.gray.200", defaultTheme2.colors.gray[200])
            },
            "tbody tr:last-child": {
              borderBottomWidth: "0"
            },
            "tbody td": {
              verticalAlign: "top"
            }
          },
          {
            fontSize: rem(16),
            lineHeight: round(28 / 16),
            p: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16)
            },
            '[class~="lead"]': {
              fontSize: em(20, 16),
              lineHeight: round(32 / 20),
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            blockquote: {
              marginTop: em(32, 20),
              marginBottom: em(32, 20),
              paddingLeft: em(20, 20)
            },
            h1: {
              fontSize: em(36, 16),
              marginTop: "0",
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36)
            },
            h2: {
              fontSize: em(24, 16),
              marginTop: em(48, 24),
              marginBottom: em(24, 24),
              lineHeight: round(32 / 24)
            },
            h3: {
              fontSize: em(20, 16),
              marginTop: em(32, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20)
            },
            h4: {
              marginTop: em(24, 16),
              marginBottom: em(8, 16),
              lineHeight: round(24 / 16)
            },
            img: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            video: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            figure: {
              marginTop: em(32, 16),
              marginBottom: em(32, 16)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            "figure figcaption": {
              fontSize: em(14, 16),
              lineHeight: round(20 / 14),
              marginTop: em(12, 14)
            },
            code: {
              fontSize: em(14, 16)
            },
            "h2 code": {
              fontSize: em(21, 24)
            },
            "h3 code": {
              fontSize: em(18, 20)
            },
            pre: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14),
              marginTop: em(24, 14),
              marginBottom: em(24, 14),
              borderRadius: rem(6),
              paddingTop: em(12, 14),
              paddingRight: em(16, 14),
              paddingBottom: em(12, 14),
              paddingLeft: em(16, 14)
            },
            ol: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16)
            },
            ul: {
              marginTop: em(20, 16),
              marginBottom: em(20, 16)
            },
            li: {
              marginTop: em(8, 16),
              marginBottom: em(8, 16)
            },
            "ol > li": {
              paddingLeft: em(28, 16)
            },
            "ol > li::before": {
              left: "0"
            },
            "ul > li": {
              paddingLeft: em(28, 16)
            },
            "ul > li::before": {
              width: em(6, 16),
              height: em(6, 16),
              top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
              left: em(4, 16)
            },
            "> ul > li p": {
              marginTop: em(12, 16),
              marginBottom: em(12, 16)
            },
            "> ul > li > *:first-child": {
              marginTop: em(20, 16)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(20, 16)
            },
            "> ol > li > *:first-child": {
              marginTop: em(20, 16)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(20, 16)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(12, 16),
              marginBottom: em(12, 16)
            },
            hr: {
              marginTop: em(48, 16),
              marginBottom: em(48, 16)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(14, 16),
              lineHeight: round(24 / 14)
            },
            "thead th": {
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td": {
              paddingTop: em(8, 14),
              paddingRight: em(8, 14),
              paddingBottom: em(8, 14),
              paddingLeft: em(8, 14)
            },
            "tbody td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      sm: {
        css: [
          {
            fontSize: rem(14),
            lineHeight: round(24 / 14),
            p: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14)
            },
            '[class~="lead"]': {
              fontSize: em(18, 14),
              lineHeight: round(28 / 18),
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            blockquote: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18),
              paddingLeft: em(20, 18)
            },
            h1: {
              fontSize: em(30, 14),
              marginTop: "0",
              marginBottom: em(24, 30),
              lineHeight: round(36 / 30)
            },
            h2: {
              fontSize: em(20, 14),
              marginTop: em(32, 20),
              marginBottom: em(16, 20),
              lineHeight: round(28 / 20)
            },
            h3: {
              fontSize: em(18, 14),
              marginTop: em(28, 18),
              marginBottom: em(8, 18),
              lineHeight: round(28 / 18)
            },
            h4: {
              marginTop: em(20, 14),
              marginBottom: em(8, 14),
              lineHeight: round(20 / 14)
            },
            img: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            video: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            figure: {
              marginTop: em(24, 14),
              marginBottom: em(24, 14)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            "figure figcaption": {
              fontSize: em(12, 14),
              lineHeight: round(16 / 12),
              marginTop: em(8, 12)
            },
            code: {
              fontSize: em(12, 14)
            },
            "h2 code": {
              fontSize: em(18, 20)
            },
            "h3 code": {
              fontSize: em(16, 18)
            },
            pre: {
              fontSize: em(12, 14),
              lineHeight: round(20 / 12),
              marginTop: em(20, 12),
              marginBottom: em(20, 12),
              borderRadius: rem(4),
              paddingTop: em(8, 12),
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            ol: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14)
            },
            ul: {
              marginTop: em(16, 14),
              marginBottom: em(16, 14)
            },
            li: {
              marginTop: em(4, 14),
              marginBottom: em(4, 14)
            },
            "ol > li": {
              paddingLeft: em(22, 14)
            },
            "ol > li::before": {
              left: "0"
            },
            "ul > li": {
              paddingLeft: em(22, 14)
            },
            "ul > li::before": {
              height: em(5, 14),
              width: em(5, 14),
              top: `calc(${em(24 / 2, 14)} - ${em(2.5, 14)})`,
              left: em(3, 14)
            },
            "> ul > li p": {
              marginTop: em(8, 14),
              marginBottom: em(8, 14)
            },
            "> ul > li > *:first-child": {
              marginTop: em(16, 14)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(16, 14)
            },
            "> ol > li > *:first-child": {
              marginTop: em(16, 14)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(16, 14)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(8, 14),
              marginBottom: em(8, 14)
            },
            hr: {
              marginTop: em(40, 14),
              marginBottom: em(40, 14)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(12, 14),
              lineHeight: round(18 / 12)
            },
            "thead th": {
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td": {
              paddingTop: em(8, 12),
              paddingRight: em(12, 12),
              paddingBottom: em(8, 12),
              paddingLeft: em(12, 12)
            },
            "tbody td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      lg: {
        css: [
          {
            fontSize: rem(18),
            lineHeight: round(32 / 18),
            p: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18)
            },
            '[class~="lead"]': {
              fontSize: em(22, 18),
              lineHeight: round(32 / 22),
              marginTop: em(24, 22),
              marginBottom: em(24, 22)
            },
            blockquote: {
              marginTop: em(40, 24),
              marginBottom: em(40, 24),
              paddingLeft: em(24, 24)
            },
            h1: {
              fontSize: em(48, 18),
              marginTop: "0",
              marginBottom: em(40, 48),
              lineHeight: round(48 / 48)
            },
            h2: {
              fontSize: em(30, 18),
              marginTop: em(56, 30),
              marginBottom: em(32, 30),
              lineHeight: round(40 / 30)
            },
            h3: {
              fontSize: em(24, 18),
              marginTop: em(40, 24),
              marginBottom: em(16, 24),
              lineHeight: round(36 / 24)
            },
            h4: {
              marginTop: em(32, 18),
              marginBottom: em(8, 18),
              lineHeight: round(28 / 18)
            },
            img: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            video: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            figure: {
              marginTop: em(32, 18),
              marginBottom: em(32, 18)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            "figure figcaption": {
              fontSize: em(16, 18),
              lineHeight: round(24 / 16),
              marginTop: em(16, 16)
            },
            code: {
              fontSize: em(16, 18)
            },
            "h2 code": {
              fontSize: em(26, 30)
            },
            "h3 code": {
              fontSize: em(21, 24)
            },
            pre: {
              fontSize: em(16, 18),
              lineHeight: round(28 / 16),
              marginTop: em(32, 16),
              marginBottom: em(32, 16),
              borderRadius: rem(6),
              paddingTop: em(16, 16),
              paddingRight: em(24, 16),
              paddingBottom: em(16, 16),
              paddingLeft: em(24, 16)
            },
            ol: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18)
            },
            ul: {
              marginTop: em(24, 18),
              marginBottom: em(24, 18)
            },
            li: {
              marginTop: em(12, 18),
              marginBottom: em(12, 18)
            },
            "ol > li": {
              paddingLeft: em(30, 18)
            },
            "ol > li::before": {
              left: "0"
            },
            "ul > li": {
              paddingLeft: em(30, 18)
            },
            "ul > li::before": {
              width: em(6, 18),
              height: em(6, 18),
              top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
              left: em(4, 18)
            },
            "> ul > li p": {
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            "> ul > li > *:first-child": {
              marginTop: em(24, 18)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(24, 18)
            },
            "> ol > li > *:first-child": {
              marginTop: em(24, 18)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(24, 18)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 18),
              marginBottom: em(16, 18)
            },
            hr: {
              marginTop: em(56, 18),
              marginBottom: em(56, 18)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(16, 18),
              lineHeight: round(24 / 16)
            },
            "thead th": {
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td": {
              paddingTop: em(12, 16),
              paddingRight: em(12, 16),
              paddingBottom: em(12, 16),
              paddingLeft: em(12, 16)
            },
            "tbody td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      xl: {
        css: [
          {
            fontSize: rem(20),
            lineHeight: round(36 / 20),
            p: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            '[class~="lead"]': {
              fontSize: em(24, 20),
              lineHeight: round(36 / 24),
              marginTop: em(24, 24),
              marginBottom: em(24, 24)
            },
            blockquote: {
              marginTop: em(48, 30),
              marginBottom: em(48, 30),
              paddingLeft: em(32, 30)
            },
            h1: {
              fontSize: em(56, 20),
              marginTop: "0",
              marginBottom: em(48, 56),
              lineHeight: round(56 / 56)
            },
            h2: {
              fontSize: em(36, 20),
              marginTop: em(56, 36),
              marginBottom: em(32, 36),
              lineHeight: round(40 / 36)
            },
            h3: {
              fontSize: em(30, 20),
              marginTop: em(48, 30),
              marginBottom: em(20, 30),
              lineHeight: round(40 / 30)
            },
            h4: {
              marginTop: em(36, 20),
              marginBottom: em(12, 20),
              lineHeight: round(32 / 20)
            },
            img: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            video: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            figure: {
              marginTop: em(40, 20),
              marginBottom: em(40, 20)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            "figure figcaption": {
              fontSize: em(18, 20),
              lineHeight: round(28 / 18),
              marginTop: em(18, 18)
            },
            code: {
              fontSize: em(18, 20)
            },
            "h2 code": {
              fontSize: em(31, 36)
            },
            "h3 code": {
              fontSize: em(27, 30)
            },
            pre: {
              fontSize: em(18, 20),
              lineHeight: round(32 / 18),
              marginTop: em(36, 18),
              marginBottom: em(36, 18),
              borderRadius: rem(8),
              paddingTop: em(20, 18),
              paddingRight: em(24, 18),
              paddingBottom: em(20, 18),
              paddingLeft: em(24, 18)
            },
            ol: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            ul: {
              marginTop: em(24, 20),
              marginBottom: em(24, 20)
            },
            li: {
              marginTop: em(12, 20),
              marginBottom: em(12, 20)
            },
            "ol > li": {
              paddingLeft: em(36, 20)
            },
            "ol > li::before": {
              left: "0"
            },
            "ul > li": {
              paddingLeft: em(36, 20)
            },
            "ul > li::before": {
              width: em(7, 20),
              height: em(7, 20),
              top: `calc(${em(36 / 2, 20)} - ${em(3.5, 20)})`,
              left: em(5, 20)
            },
            "> ul > li p": {
              marginTop: em(16, 20),
              marginBottom: em(16, 20)
            },
            "> ul > li > *:first-child": {
              marginTop: em(24, 20)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(24, 20)
            },
            "> ol > li > *:first-child": {
              marginTop: em(24, 20)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(24, 20)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 20),
              marginBottom: em(16, 20)
            },
            hr: {
              marginTop: em(56, 20),
              marginBottom: em(56, 20)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(18, 20),
              lineHeight: round(28 / 18)
            },
            "thead th": {
              paddingRight: em(12, 18),
              paddingBottom: em(16, 18),
              paddingLeft: em(12, 18)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td": {
              paddingTop: em(16, 18),
              paddingRight: em(12, 18),
              paddingBottom: em(16, 18),
              paddingLeft: em(12, 18)
            },
            "tbody td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      },
      "2xl": {
        css: [
          {
            fontSize: rem(24),
            lineHeight: round(40 / 24),
            p: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24)
            },
            '[class~="lead"]': {
              fontSize: em(30, 24),
              lineHeight: round(44 / 30),
              marginTop: em(32, 30),
              marginBottom: em(32, 30)
            },
            blockquote: {
              marginTop: em(64, 36),
              marginBottom: em(64, 36),
              paddingLeft: em(40, 36)
            },
            h1: {
              fontSize: em(64, 24),
              marginTop: "0",
              marginBottom: em(56, 64),
              lineHeight: round(64 / 64)
            },
            h2: {
              fontSize: em(48, 24),
              marginTop: em(72, 48),
              marginBottom: em(40, 48),
              lineHeight: round(52 / 48)
            },
            h3: {
              fontSize: em(36, 24),
              marginTop: em(56, 36),
              marginBottom: em(24, 36),
              lineHeight: round(44 / 36)
            },
            h4: {
              marginTop: em(40, 24),
              marginBottom: em(16, 24),
              lineHeight: round(36 / 24)
            },
            img: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            video: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            figure: {
              marginTop: em(48, 24),
              marginBottom: em(48, 24)
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0"
            },
            "figure figcaption": {
              fontSize: em(20, 24),
              lineHeight: round(32 / 20),
              marginTop: em(20, 20)
            },
            code: {
              fontSize: em(20, 24)
            },
            "h2 code": {
              fontSize: em(42, 48)
            },
            "h3 code": {
              fontSize: em(32, 36)
            },
            pre: {
              fontSize: em(20, 24),
              lineHeight: round(36 / 20),
              marginTop: em(40, 20),
              marginBottom: em(40, 20),
              borderRadius: rem(8),
              paddingTop: em(24, 20),
              paddingRight: em(32, 20),
              paddingBottom: em(24, 20),
              paddingLeft: em(32, 20)
            },
            ol: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24)
            },
            ul: {
              marginTop: em(32, 24),
              marginBottom: em(32, 24)
            },
            li: {
              marginTop: em(12, 24),
              marginBottom: em(12, 24)
            },
            "ol > li": {
              paddingLeft: em(40, 24)
            },
            "ol > li::before": {
              left: "0"
            },
            "ul > li": {
              paddingLeft: em(40, 24)
            },
            "ul > li::before": {
              width: em(8, 24),
              height: em(8, 24),
              top: `calc(${em(40 / 2, 24)} - ${em(4, 24)})`,
              left: em(6, 24)
            },
            "> ul > li p": {
              marginTop: em(20, 24),
              marginBottom: em(20, 24)
            },
            "> ul > li > *:first-child": {
              marginTop: em(32, 24)
            },
            "> ul > li > *:last-child": {
              marginBottom: em(32, 24)
            },
            "> ol > li > *:first-child": {
              marginTop: em(32, 24)
            },
            "> ol > li > *:last-child": {
              marginBottom: em(32, 24)
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: em(16, 24),
              marginBottom: em(16, 24)
            },
            hr: {
              marginTop: em(72, 24),
              marginBottom: em(72, 24)
            },
            "hr + *": {
              marginTop: "0"
            },
            "h2 + *": {
              marginTop: "0"
            },
            "h3 + *": {
              marginTop: "0"
            },
            "h4 + *": {
              marginTop: "0"
            },
            table: {
              fontSize: em(20, 24),
              lineHeight: round(28 / 20)
            },
            "thead th": {
              paddingRight: em(12, 20),
              paddingBottom: em(16, 20),
              paddingLeft: em(12, 20)
            },
            "thead th:first-child": {
              paddingLeft: "0"
            },
            "thead th:last-child": {
              paddingRight: "0"
            },
            "tbody td": {
              paddingTop: em(16, 20),
              paddingRight: em(12, 20),
              paddingBottom: em(16, 20),
              paddingLeft: em(12, 20)
            },
            "tbody td:first-child": {
              paddingLeft: "0"
            },
            "tbody td:last-child": {
              paddingRight: "0"
            }
          },
          {
            "> :first-child": {
              marginTop: "0"
            },
            "> :last-child": {
              marginBottom: "0"
            }
          }
        ]
      }
    }, Object.entries(theme("colors")).reduce((reduced, [color, values]) => {
      if (!isUsableColor(color, values)) {
        return reduced;
      }
      return __spreadProps(__spreadValues({}, reduced), {
        [color]: {
          css: [
            {
              a: { color: values[600] },
              "a code": { color: values[600] }
            }
          ]
        }
      });
    }, {}));
  }
});

// node_modules/@tailwindcss/typography/src/index.js
var require_src4 = __commonJS({
  "node_modules/@tailwindcss/typography/src/index.js"(exports, module2) {
    var plugin = require_plugin();
    var merge = require_lodash();
    var castArray = require_lodash2();
    var uniq = require_lodash3();
    var styles = require_styles();
    var { isUsableColor } = require_utils();
    var computed = {};
    function configToCss(config2 = {}) {
      return merge({}, ...Object.keys(config2).filter((key) => computed[key]).map((key) => computed[key](config2[key])), ...castArray(config2.css || {}));
    }
    module2.exports = plugin.withOptions(({ modifiers, className = "prose" } = {}) => {
      return function({ addComponents, theme, variants }) {
        const DEFAULT_MODIFIERS = [
          "DEFAULT",
          "sm",
          "lg",
          "xl",
          "2xl",
          ...Object.entries(theme("colors")).filter(([color, values]) => {
            return isUsableColor(color, values);
          }).map(([color]) => color)
        ];
        modifiers = modifiers === void 0 ? DEFAULT_MODIFIERS : modifiers;
        const config2 = theme("typography");
        const all = uniq([
          "DEFAULT",
          ...modifiers,
          ...Object.keys(config2).filter((modifier) => !DEFAULT_MODIFIERS.includes(modifier))
        ]);
        addComponents(all.map((modifier) => ({
          [modifier === "DEFAULT" ? `.${className}` : `.${className}-${modifier}`]: configToCss(config2[modifier])
        })), variants("typography"));
      };
    }, () => ({
      theme: { typography: styles },
      variants: { typography: ["responsive"] }
    }));
  }
});

// node_modules/ac-colors/index.min.js
var require_index_min = __commonJS({
  "node_modules/ac-colors/index.min.js"(exports, module2) {
    "use strict";
    function _defineProperties(o, r) {
      for (var t = 0; t < r.length; t++) {
        var e = r[t];
        e.enumerable = e.enumerable || false, e.configurable = true, "value" in e && (e.writable = true), Object.defineProperty(o, e.key, e);
      }
    }
    function _createClass(o, r, t) {
      return r && _defineProperties(o.prototype, r), t && _defineProperties(o, t), o;
    }
    var Color = function() {
      function Color2(o) {
        var r = o === void 0 ? { color: [0, 0, 0], type: "rgb", precision: 3, capitalize: true } : o, t = r.color, e = t === void 0 ? [0, 0, 0] : t, n = r.type, a = n === void 0 ? "rgb" : n, i = r.precision, l = i === void 0 ? 3 : i, u = r.capitalize, s = u === void 0 || u;
        this.updateColor(e, a), this.precision = l, this.capitalize = s;
      }
      return Color2.prototype.updateColor = function updateColor(o, r) {
        var t;
        if (r === void 0 && (r = "rgb"), typeof r != "string")
          throw new TypeError("Parameter 2 must be of type string.");
        if (r = r.toLowerCase(), !Color2.validTypes.includes(r))
          throw new TypeError("Parameter 2 '" + r + "' is not a valid type.");
        switch (r) {
          case "rgb":
            t = Color2.rgbToXyz(o);
            break;
          case "hsl":
            t = Color2.rgbToXyz(Color2.hslToRgb(o));
            break;
          case "hex":
            t = Color2.rgbToXyz(Color2.hexToRgb(o));
            break;
          case "lab":
            t = Color2.labToXyz(o);
            break;
          case "lchab":
            t = Color2.labToXyz(Color2.lchABToLab(o));
            break;
          case "luv":
            t = Color2.luvToXyz(o);
            break;
          case "lchuv":
            t = Color2.luvToXyz(Color2.lchUVToLuv(o));
            break;
          case "xyz":
          case "default":
            this._xyz = o, this._rgb = Color2.xyzToRgb(this._xyz), this._hsl = Color2.rgbToHsl(this._rgb), this._hex = Color2.rgbToHex(this._rgb), this._lab = Color2.xyzToLab(this._xyz), this._lchab = Color2.labToLCHab(this._lab), this._luv = Color2.xyzToLuv(this._xyz), this._lchuv = Color2.luvToLCHuv(this._luv);
        }
        r !== "xyz" && this.updateColor(t, "xyz");
      }, Color2.rgbToHsl = function rgbToHsl(o) {
        var r = o[0] / 255, t = o[1] / 255, e = o[2] / 255, n = Math.max(r, t, e), a = Math.min(r, t, e), i = (n + a) / 2, l = 0, u = 0;
        return n !== a && (l = i < 0.5 ? (n - a) / (n + a) : (n - a) / (2 - n - a), u = r === n ? (t - e) / (n - a) : t === n ? 2 + (e - r) / (n - a) : 4 + (r - t) / (n - a)), [(u = (u *= 60) < 0 ? u % 360 + 360 : u) + 0, (l *= 100) + 0, (i *= 100) + 0];
      }, Color2.hslToRgb = function hslToRgb(o) {
        var r = o[0], t = o[1], e = o[2];
        isFinite(r) || (r = 0), isFinite(t) || (t = 0), isFinite(e) || (e = 0), r = r < 0 ? r % 360 + 360 : r, e /= 100, t /= 100, r /= 60;
        var n = (1 - Math.abs(2 * e - 1)) * t, a = n * (1 - Math.abs(r % 2 - 1)), i = e - n / 2, l = r < 1 ? [n, a, 0] : r < 2 ? [a, n, 0] : r < 3 ? [0, n, a] : r < 4 ? [0, a, n] : r < 5 ? [a, 0, n] : [n, 0, a];
        return l.map(function(o2) {
          return Math.round(255 * (o2 + i)) + 0;
        });
      }, Color2.rgbToHex = function rgbToHex(o) {
        function S(o2) {
          var r2 = o2.toString(16);
          return r2.length === 1 ? "0" + r2 : r2;
        }
        var r = o[0], t = o[1], e = o[2];
        return "#" + S(r) + S(t) + S(e);
      }, Color2.hexToRgb = function hexToRgb(o) {
        o = o.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(o2, r2, t, e) {
          return r2 + r2 + t + t + e + e;
        });
        var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);
        return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : null;
      }, Color2.rgbToXyz = function rgbToXyz(o) {
        function ea(o2) {
          return o2 <= 0.04045 ? o2 / 12.92 : Math.pow((o2 + 0.055) / 1.055, 2.4);
        }
        var r = o[0] / 255, t = o[1] / 255, e = o[2] / 255, n = ea(r), a = ea(t), i = ea(e);
        return [100 * (0.4124 * n + 0.3576 * a + 0.1805 * i) + 0, 100 * (0.2126 * n + 0.7152 * a + 0.0722 * i) + 0, 100 * (0.0193 * n + 0.1192 * a + 0.9505 * i) + 0];
      }, Color2.xyzToRgb = function xyzToRgb2(o) {
        function ta(o2) {
          return o2 <= 31308e-7 ? 12.92 * o2 : 1.055 * Math.pow(o2, 1 / 2.4) - 0.055;
        }
        var r = o[0] / 100, t = o[1] / 100, e = o[2] / 100, n = -0.9689307147293197 * r + 1.8757560608852415 * t + 0.041517523842953964 * e, a = 0.055710120445510616 * r + -0.2040210505984867 * t + 1.0569959422543882 * e, i = ta(3.2406254773200533 * r - 1.5372079722103187 * t - 0.4986285986982479 * e), l = ta(n), u = ta(a);
        return [Math.round(255 * i) + 0, Math.round(255 * l) + 0, Math.round(255 * u) + 0];
      }, Color2.xyzToLab = function xyzToLab(o) {
        function Fa(o2) {
          return 216 / 24389 < o2 ? n(o2) : (24389 / 27 * o2 + 16) / 116;
        }
        var r = o[0] / Color2.d65[0], t = o[1] / Color2.d65[1], e = o[2] / Color2.d65[2], n = Math.cbrt != null ? Math.cbrt : function(o2) {
          return Math.pow(o2, 1 / 3);
        }, a = Fa(r), i = Fa(t);
        return [116 * i - 16, 0 + 500 * (a - i), 0 + 200 * (i - Fa(e))];
      }, Color2.labToXyz = function labToXyz2(o) {
        var r = o[0], t = o[1], e = 216 / 24389, n = 24389 / 27, a = (r + 16) / 116, i = a - o[2] / 200, l = t / 500 + a, u = Math.pow(l, 3) > e ? Math.pow(l, 3) : (116 * l - 16) / n, s = 8 < r ? Math.pow((r + 16) / 116, 3) : r / n, c = Math.pow(i, 3) > e ? Math.pow(i, 3) : (116 * i - 16) / n;
        return [u * Color2.d65[0] + 0, s * Color2.d65[1] + 0, c * Color2.d65[2] + 0];
      }, Color2.labToLCHab = function labToLCHab(o) {
        var r = o[1], t = Math.abs(o[2]) < Color2.maxZeroTolerance ? 0 : o[2], e = Math.sqrt(r * r + t * t), n = 0 <= Math.atan2(t, r) ? Math.atan2(t, r) / Math.PI * 180 : Math.atan2(t, r) / Math.PI * 180 + 360;
        return [o[0] + 0, e + 0, 0 + n];
      }, Color2.lchABToLab = function lchABToLab(o) {
        var r = o[1], t = o[2], e = r * Math.cos(t / 180 * Math.PI), n = r * Math.sin(t / 180 * Math.PI);
        return [o[0] + 0, 0 + e, 0 + n];
      }, Color2.xyzToLuv = function xyzToLuv(o) {
        var r = o[0], t = o[1], e = o[2], n = Color2.d65[0], a = Color2.d65[1], i = Color2.d65[2], l = 9 * a / (n + 15 * a + 3 * i), u = 4 * n / (n + 15 * a + 3 * i);
        if (r === 0 && t === 0 && e === 0)
          return [0, 0, 0];
        var s = 9 * t / (r + 15 * t + 3 * e), c = 4 * r / (r + 15 * t + 3 * e), h = t / a, p = Math.cbrt != null ? Math.cbrt : function(o2) {
          return Math.pow(o2, 1 / 3);
        }, C = 216 / 24389 < h ? 116 * p(h, 1 / 3) - 16 : 24389 / 27 * h;
        return [0 + C, 0 + 13 * C * (c - u), 0 + 13 * C * (s - l)];
      }, Color2.luvToXyz = function luvToXyz(o) {
        var r = o[0], t = o[1], e = o[2], n = Color2.d65[0], a = Color2.d65[1], i = Color2.d65[2], l = 9 * a / (n + 15 * a + 3 * i), u = 4 * n / (n + 15 * a + 3 * i), s = 8 < r ? Math.pow((r + 16) / 116, 3) : r / (24389 / 27), c = -5 * s, h = (52 * r / (t + 13 * r * u) - 1) / 3 || 0, p = ((s * (39 * r / (e + 13 * r * l) - 5) || 0) - c) / (h - -1 / 3);
        return [100 * p + 0, 100 * s + 0, 100 * (p * h + c) + 0];
      }, Color2.luvToLCHuv = function luvToLCHuv(o) {
        var r = o[0], t = Math.abs(o[1]) < Color2.maxZeroTolerance ? 0 : o[1], e = Math.abs(o[2]) < Color2.maxZeroTolerance ? 0 : o[2], n = Math.sqrt(t * t + e * e), a = 180 * Math.atan2(e, t) / Math.PI;
        return [r + 0, n + 0, (a = 0 <= a ? a : a + 360) + 0];
      }, Color2.lchUVToLuv = function lchUVToLuv(o) {
        var r = o[0], t = o[1], e = o[2] / 180 * Math.PI;
        return [r + 0, 0 + t * Math.cos(e), 0 + t * Math.sin(e)];
      }, Color2.luminance = function luminance(o, r) {
        if (r === void 0 && (r = "rgb"), typeof r != "string")
          throw new TypeError("Parameter 2 must be of type string.");
        if (r = r.toLowerCase(), !Color2.validTypes.includes(r))
          throw new TypeError("Parameter 2 '" + r + "' is not a valid type.");
        r !== "rgb" && (o = new Color2({ color: o, type: r }).rgb), o = [].concat(o);
        for (var t = 0; t < o.length; t++)
          o[t] /= 255, o[t] < 0.03928 ? o[t] /= 12.92 : o[t] = Math.pow((o[t] + 0.055) / 1.055, 2.4);
        return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2];
      }, Color2.random = function random() {
        return new Color2({ color: [255, 255, 255].map(function(o) {
          return Math.round(o * Math.random());
        }) });
      }, Color2.randomFromString = function randomFromString(o) {
        o === void 0 && (o = "");
        function mc(o2) {
          for (var r2 = 4294967295, t2 = 0; t2 < o2.length; t2++) {
            var e = 4026531840 & (r2 = (r2 << 4) + o2.charCodeAt(t2));
            e != 0 && (r2 ^= e >>> 24, r2 ^= e);
          }
          return Math.abs(r2);
        }
        var r = mc(o), t = mc(o + r);
        return new Color2({ color: [r % 256, t % 256, mc(o + t) % 256] });
      }, Color2.randomOfType = function randomOfType(o) {
        if (o === void 0 && (o = "rgb"), typeof o != "string")
          throw new TypeError("Parameter 1 must be of type string.");
        if (o = o.toLowerCase(), !Color2.validTypes.includes(o))
          throw new TypeError("Parameter 1 '" + o + "' is not a valid type.");
        return Color2.random()[o];
      }, Color2.randomOfTypeFormatted = function randomOfTypeFormatted(o, r, t) {
        if (o === void 0 && (o = "rgb"), r === void 0 && (r = true), t === void 0 && (t = 3), typeof o != "string")
          throw new TypeError("Parameter 1 must be of type string.");
        if (o = o.toLowerCase(), !Color2.validTypes.includes(o))
          throw new TypeError("Parameter 1 '" + o + "' is not a valid type.");
        var e = Color2.random();
        return e.capitalize = r, e.precision = t, e[o + "String"];
      }, Color2.contrastTextColor = function contrastTextColor(o, r) {
        if (r === void 0 && (r = "rgb"), typeof r != "string")
          throw new TypeError("Parameter 2 must be of type string.");
        if (r = r.toLowerCase(), !Color2.validTypes.includes(r))
          throw new TypeError("Parameter 2 '" + r + "' is not a valid type.");
        var t = Color2.contrastRatio(new Color2({ color: [255, 255, 255] }), new Color2({ color: o, type: r }));
        return Color2.contrastRatio(new Color2({ color: [0, 0, 0] }), new Color2({ color: o, type: r })) < t ? "#FFFFFF" : "#000000";
      }, Color2.contrastRatio = function contrastRatio(o, r) {
        if (!(o instanceof Color2))
          throw new TypeError("Parameter 1 must be of type Color.");
        if (!(r instanceof Color2))
          throw new TypeError("Parameter 2 must be of type Color.");
        var t = Color2.luminance(o.rgb) + 0.05, e = Color2.luminance(r.rgb) + 0.05;
        return t < e ? e / t : t / e;
      }, Color2.blend = function blend(o, r, t, e) {
        if (t === void 0 && (t = "rgb"), e === void 0 && (e = 0.5), !(o instanceof Color2))
          throw new TypeError("Parameter 1 must be of type Color.");
        if (!(r instanceof Color2))
          throw new TypeError("Parameter 2 must be of type Color.");
        if (typeof t != "string")
          throw new TypeError("Parameter 3 must be of type string.");
        if (t = t.toLowerCase(), !Color2.validTypes.includes(t))
          throw new TypeError("Parameter 3 '" + t + "' is not a valid type.");
        var n = o[t = t === "hex" ? "rgb" : t], a = r[t], blend2 = new Array(3).fill().map(function(o2, r2) {
          return n[r2] * e + a[r2] * (1 - e);
        });
        return new Color2({ color: blend2, type: t });
      }, _createClass(Color2, [{ key: "rgb", get: function get() {
        return this._rgb;
      }, set: function set(o) {
        this.updateColor(o, "rgb");
      } }, { key: "rgbString", get: function get() {
        var o = "RGB(" + this.rgb.join(", ") + ")";
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "hsl", get: function get() {
        return this._hsl;
      }, set: function set(o) {
        this.updateColor(o, "hsl");
      } }, { key: "hslString", get: function get() {
        var r = this, o = "HSL(" + this.hsl.map(function(o2) {
          return o2.toFixed(r.precision);
        }).join(", ") + ")";
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "hex", get: function get() {
        return this._hex;
      }, set: function set(o) {
        this.updateColor(o, "hex");
      } }, { key: "hexString", get: function get() {
        var o = this._hex;
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "xyz", get: function get() {
        return this._xyz;
      }, set: function set(o) {
        this.updateColor(o, "xyz");
      } }, { key: "xyzString", get: function get() {
        var r = this, o = "XYZ(" + this.xyz.map(function(o2) {
          return o2.toFixed(r.precision);
        }).join(", ") + ")";
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "lab", get: function get() {
        return this._lab;
      }, set: function set(o) {
        this.updateColor(o, "lab");
      } }, { key: "labString", get: function get() {
        var r = this, o = "LAB(" + this.lab.map(function(o2) {
          return o2.toFixed(r.precision);
        }).join(", ") + ")";
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "lchab", get: function get() {
        return this._lchab;
      }, set: function set(o) {
        this.updateColor(o, "lchab");
      } }, { key: "lchabString", get: function get() {
        var r = this, o = this.lchab.map(function(o2) {
          return o2.toFixed(r.precision);
        });
        return this.capitalize ? "LCHab(" + o.join(", ") + ")" : "lchAB(" + o.join(", ") + ")";
      } }, { key: "luv", get: function get() {
        return this._luv;
      }, set: function set(o) {
        this.updateColor(o, "luv");
      } }, { key: "luvString", get: function get() {
        var r = this, o = "LUV(" + this.luv.map(function(o2) {
          return o2.toFixed(r.precision);
        }).join(", ") + ")";
        return this.capitalize ? o.toUpperCase() : o.toLowerCase();
      } }, { key: "lchuv", get: function get() {
        return this._lchuv;
      }, set: function set(o) {
        this.updateColor(o, "lchuv");
      } }, { key: "lchuvString", get: function get() {
        var r = this, o = this.lchuv.map(function(o2) {
          return o2.toFixed(r.precision);
        });
        return this.capitalize ? "LCHuv(" + o.join(", ") + ")" : "lchUV(" + o.join(", ") + ")";
      } }]), Color2;
    }();
    Color.validTypes = ["rgb", "hex", "hsl", "xyz", "lab", "lchab", "luv", "lchuv"], Color.d65 = [95.05, 100, 108.9], Color.maxZeroTolerance = Math.pow(10, -12), module2.exports = Color;
  }
});

// src/tailwind.ts
__markAsModule(exports);
__export(exports, {
  config: () => config
});
var import_aspect_ratio = __toModule(require_src());
var import_forms = __toModule(require_src2());
var import_line_clamp = __toModule(require_src3());
var import_typography = __toModule(require_src4());
var import_defaultTheme = __toModule(require_defaultTheme());

// src/raw-colors.ts
var import_ac_colors = __toModule(require_index_min());

// src/lch-to-rgb.ts
var multiplyMatrices = (inputA, inputB) => {
  const m = inputA.length;
  const A = Array.isArray(inputA[0]) ? inputA : [inputA];
  const B = Array.isArray(inputB[0]) ? inputB : inputB.map((x) => [x]);
  const p = B[0].length;
  const bColumns = B[0].map((_, index) => B.map((x) => x[index]));
  let product = A.map((row) => bColumns.map((col) => {
    if (!Array.isArray(row))
      return col.reduce((a, c) => a + c * row, 0);
    return row.reduce((a, c, index) => a + c * (col[index] || 0), 0);
  }));
  if (m === 1)
    product = product[0];
  if (p === 1)
    return product.map((x) => x[0]);
  return product;
};
var gamToRgb = (RGB) => {
  return RGB.map((value) => {
    const sign = value < 0 ? -1 : 1;
    const abs = Math.abs(value);
    if (abs > 31308e-7)
      return sign * (1.055 * abs ** (1 / 2.4) - 0.055);
    return 12.92 * value;
  });
};
var xyzToRgb = (XYZ) => {
  const M = [
    [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
    [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
    [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
  ];
  return multiplyMatrices(M, XYZ);
};
var d50ToD65 = (XYZ) => {
  const M = [
    [0.9555766, -0.0230393, 0.0631636],
    [-0.0282895, 1.0099416, 0.0210077],
    [0.0122982, -0.020483, 1.3299098]
  ];
  return multiplyMatrices(M, XYZ);
};
var labToXyz = (Lab) => {
  const \u00CE\u00BA = 24389 / 27;
  const \u00CE\u00B5 = 216 / 24389;
  const white = [0.96422, 1, 0.82521];
  const f = [];
  f[1] = (Lab[0] + 16) / 116;
  f[0] = Lab[1] / 500 + f[1];
  f[2] = f[1] - Lab[2] / 200;
  const xyz = [
    f[0] ** 3 > \u00CE\u00B5 ? f[0] ** 3 : (116 * f[0] - 16) / \u00CE\u00BA,
    Lab[0] > \u00CE\u00BA * \u00CE\u00B5 ? ((Lab[0] + 16) / 116) ** 3 : Lab[0] / \u00CE\u00BA,
    f[2] ** 3 > \u00CE\u00B5 ? f[2] ** 3 : (116 * f[2] - 16) / \u00CE\u00BA
  ];
  return xyz.map((value, index) => value * white[index]);
};
var lchToLab = (LCH) => {
  return [
    LCH[0],
    LCH[1] * Math.cos(LCH[2] * Math.PI / 180),
    LCH[1] * Math.sin(LCH[2] * Math.PI / 180)
  ];
};
var lchToRgbConversion = (LCH) => {
  return gamToRgb(xyzToRgb(d50ToD65(labToXyz(lchToLab(LCH)))));
};
var isLchWithinRgb = (l, c, h) => {
  const rgb = lchToRgbConversion([Number(l), Number(c), Number(h)]);
  const \u03B5 = 5e-6;
  return rgb.reduce((a, b) => a && b >= 0 - \u03B5 && b <= 1 + \u03B5, true);
};
var forceIntoGamut = (l, c, h) => {
  if (isLchWithinRgb(l, c, h))
    return [l, c, h];
  let hiC = c;
  let loC = 0;
  const \u03B5 = 1e-4;
  c /= 2;
  while (hiC - loC > \u03B5) {
    if (isLchWithinRgb(l, c, h))
      loC = c;
    else
      hiC = c;
    c = (hiC + loC) / 2;
  }
  return [l, c, h];
};
var lchToRgb = (lightness, chroma, hue) => {
  const [l, c, h] = forceIntoGamut(lightness, chroma, hue);
  const rgb = lchToRgbConversion([Number(l), Number(c), Number(h)]).map((index) => Math.abs(Math.round(index * 255)));
  return rgb;
};

// src/raw-colors.ts
var LIGHTNESS_MAP = {
  100: {
    lightness: 98.272,
    min: 1.03,
    max: 1.05
  },
  200: {
    lightness: 92.698,
    min: 1.19,
    max: 1.21
  },
  300: {
    lightness: 66.374,
    min: 2.57,
    max: 2.6
  },
  400: {
    lightness: 57.258,
    min: 3.46,
    max: 3.5
  },
  500: {
    lightness: 48.323,
    min: 4.5,
    max: 4.545
  },
  DEFAULT: {
    lightness: 48.323,
    min: 4.55,
    max: 4.61
  },
  600: {
    lightness: 39.297,
    min: 6.57,
    max: 6.68
  },
  700: {
    lightness: 30.272,
    min: 9.15,
    max: 9.3
  },
  800: {
    lightness: 21.247,
    min: 12.46,
    max: 12.66
  },
  900: {
    lightness: 5.063,
    min: 18.78,
    max: 18.95
  }
};
var getColorContrast = (rgb) => {
  const white = new import_ac_colors.default({ color: [255, 255, 255] });
  const color = new import_ac_colors.default({ color: rgb });
  return import_ac_colors.default.contrastRatio(white, color);
};
var getLchFromColorStops = (colorStops, lightness) => {
  if (colorStops.length === 1)
    return colorStops[0];
  if (lightness < colorStops[0].lchab[0])
    return colorStops[0];
  if (lightness > colorStops[colorStops.length - 1].lchab[0])
    return colorStops[colorStops.length - 1];
  for (let index = 0; index < colorStops.length; index++) {
    if (lightness > colorStops[index + 1].lchab[0])
      continue;
    const weight = (lightness - colorStops[index].lchab[0]) / (colorStops[index + 1].lchab[0] - colorStops[index].lchab[0]);
    return import_ac_colors.default.blend(colorStops[index], colorStops[index + 1], "lchab", 1 - weight);
  }
  return colorStops[colorStops.length - 1];
};
var createPaletteItem = (colorStops, lightnesses2) => {
  const output = {};
  const sortedColorStops = colorStops.sort((a, b) => {
    return a.lchab[0] < b.lchab[0] ? -1 : 1;
  });
  lightnesses2.forEach((lightness) => {
    let adjustedLightness = LIGHTNESS_MAP[lightness].lightness;
    const { min, max } = LIGHTNESS_MAP[lightness];
    if (!min || !max)
      return;
    let currentColor = [0, 0, 0];
    let currentContrast = 0;
    do {
      const initialColor = getLchFromColorStops(sortedColorStops, adjustedLightness).lchab;
      currentColor = lchToRgb(adjustedLightness, initialColor[1], initialColor[2]);
      currentContrast = getColorContrast(currentColor);
      if (currentContrast <= min)
        adjustedLightness -= 0.1;
      else
        adjustedLightness += 0.1;
    } while (currentContrast <= min || currentContrast >= max);
    output[lightness] = currentColor;
  });
  Object.keys(output).forEach((name) => {
    const darkName = name === "DEFAULT" ? "i" : `i${1e3 - parseInt(name)}`;
    output[darkName] = output[name];
  });
  return output;
};
var lightnesses = [100, 200, 300, 400, 500, 600, 700, 800, 900, "DEFAULT"];
var colors = {
  foreground: {
    DEFAULT: [0, 0, 0],
    i: [255, 255, 255]
  },
  background: {
    DEFAULT: [255, 255, 255],
    i: [0, 0, 0]
  },
  link: createPaletteItem([new import_ac_colors.default({ color: [48.323, 73.61, 282.521], type: "lchab" })], ["DEFAULT"]),
  primary: createPaletteItem([
    new import_ac_colors.default({ color: [9.254, 39.054, 288], type: "lchab" }),
    new import_ac_colors.default({ color: [39, 66, 282.521], type: "lchab" }),
    new import_ac_colors.default({ color: [48.323, 73.61, 282.521], type: "lchab" }),
    new import_ac_colors.default({ color: [60, 54, 267], type: "lchab" }),
    new import_ac_colors.default({ color: [73, 39, 261], type: "lchab" }),
    new import_ac_colors.default({ color: [83.663, 30, 254.699], type: "lchab" })
  ], lightnesses),
  highlight: createPaletteItem([new import_ac_colors.default({ color: [48.323, 90, 312.636], type: "lchab" })], lightnesses),
  success: createPaletteItem([
    new import_ac_colors.default({ color: [48.323, 66.576, 134.383], type: "lchab" }),
    new import_ac_colors.default({ color: [60, 66.576, 134.383], type: "lchab" }),
    new import_ac_colors.default({ color: [74, 48, 134.383], type: "lchab" }),
    new import_ac_colors.default({ color: [92, 31, 134.383], type: "lchab" })
  ], lightnesses),
  warning: createPaletteItem([new import_ac_colors.default({ color: [48.323, 80.022, 3.794], type: "lchab" })], lightnesses),
  error: createPaletteItem([new import_ac_colors.default({ color: [48.323, 101.398, 40.853], type: "lchab" })], lightnesses),
  gray: createPaletteItem([new import_ac_colors.default({ color: [48.323, 0, 282.521], type: "lchab" })], lightnesses),
  accent: {
    cyan: [17, 213, 239],
    magenta: [191, 64, 162],
    yellow: [255, 245, 0],
    green: [0, 217, 36],
    indigo: [98, 42, 255],
    blue: [14, 144, 219],
    pink: [250, 36, 60]
  }
};

// src/build-scripts/create-tailwind-colors.ts
var getTailwindColor = (color) => {
  const colorString = `var(--c-${color.toLowerCase().replace("-default", "")})`;
  return ({ opacityVariable, opacityValue }) => {
    if (typeof opacityValue !== "undefined")
      return `rgba(${colorString}, ${opacityValue})`;
    if (typeof opacityVariable !== "undefined")
      return `rgba(${colorString}, var(${opacityVariable}, 1))`;
    return `rgb(${colorString})`;
  };
};
var createTailwindColorGroup = (variants, groupName) => {
  const finalGroup = {};
  for (const variant in variants) {
    if (Object.prototype.hasOwnProperty.call(variants, variant))
      finalGroup[variant] = getTailwindColor(`${groupName}-${variant}`);
  }
  return finalGroup;
};
var createTailwindColors = () => {
  const tailwindColors = {};
  for (const colorGroup in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, colorGroup)) {
      const groupValues = colors[colorGroup];
      if (Array.isArray(groupValues))
        tailwindColors[colorGroup] = getTailwindColor(colorGroup);
      else
        tailwindColors[colorGroup] = createTailwindColorGroup(groupValues, colorGroup);
    }
  }
  return tailwindColors;
};

// src/tailwind.ts
var config = {
  theme: {
    colors: __spreadProps(__spreadValues({}, createTailwindColors()), {
      transparent: "transparent",
      current: "currentColor",
      background: "rgb(var(--c-background))"
    }),
    inset: (theme, { negative }) => __spreadValues(__spreadValues({
      auto: "auto",
      "1/2": "50%"
    }, theme("spacing")), negative(theme("spacing"))),
    fontSize: {
      xs: ["0.625rem", { lineHeight: "0.875rem" }],
      sm: ["0.75rem", { lineHeight: "1rem" }],
      base: ["0.875rem", { lineHeight: "1.25rem" }],
      lg: ["1rem", { lineHeight: "1.5rem" }],
      xl: ["1.125rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.25rem", { lineHeight: "1.75rem" }],
      "3xl": ["1.5rem", { lineHeight: "2rem" }],
      "4xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "5xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "6xl": ["3rem", { lineHeight: "1" }],
      "7xl": ["3.75rem", { lineHeight: "1" }],
      "8xl": ["4.5rem", { lineHeight: "1" }],
      "9xl": ["6rem", { lineHeight: "1" }],
      "10xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "calc(100 * var(--font-weight-multiplier, 1))",
      extralight: "calc(200 * var(--font-weight-multiplier, 1))",
      light: "calc(300 * var(--font-weight-multiplier, 1))",
      normal: "calc(400 * var(--font-weight-multiplier, 1))",
      semibold: "calc(500 * var(--font-weight-multiplier, 1))",
      bold: "calc(600 * var(--font-weight-multiplier, 1))",
      extrabold: "calc(700 * var(--font-weight-multiplier, 1))",
      black: "calc(800 * var(--font-weight-multiplier, 1))"
    },
    boxShadow: {
      xs: "0 0 0 1px rgba(var(--c-shadow), var(--shadow-opacity, 0.05))",
      sm: "0 1px 2px 0 rgba(var(--c-shadow), var(--shadow-opacity, 0.05))",
      DEFAULT: "0 1px 3px 0 rgba(var(--c-shadow), 0.1), 0 1px 2px 0 rgba(var(--c-shadow), var(--shadow-opacity, 0.06))",
      md: "0 4px 6px -1px rgba(var(--c-shadow), 0.1), 0 2px 4px -1px rgba(var(--c-shadow), var(--shadow-opacity, 0.06))",
      lg: "0 10px 15px -3px rgba(var(--c-shadow), 0.1), 0 4px 6px -2px rgba(var(--c-shadow), var(--shadow-opacity, 0.05))",
      xl: "0 20px 25px -5px rgba(var(--c-shadow), 0.1), 0 10px 10px -5px rgba(var(--c-shadow), var(--shadow-opacity, 0.04))",
      "2xl": "0 25px 50px -12px rgba(var(--c-shadow), var(--shadow-opacity, 0.25))",
      inner: "inset 0 2px 4px 0 rgba(var(--c-shadow), var(--shadow-opacity, 0.06))",
      none: "none"
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...import_defaultTheme.default.fontFamily.sans],
        display: ["Gilroy", "Inter", ...import_defaultTheme.default.fontFamily.sans],
        mono: ["SFMono-Regular", ...import_defaultTheme.default.fontFamily.mono]
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33%",
        "2/3": "66%"
      },
      minWidth: (theme) => __spreadValues({}, theme("spacing")),
      minHeight: (theme) => __spreadValues({}, theme("spacing")),
      spacing: {
        content: "max-content"
      },
      letterSpacing: {
        h1: "-1.5px",
        h2: "-0.5px",
        h4: "0.25px",
        h6: "0.15px"
      },
      skew: { 1.5: "1.5deg", "-1.5": "-1.5deg" },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))"
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13"
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12"
      },
      inset: {
        "1/2": "50%",
        full: "100%"
      },
      animation: {
        "pulse-small": "pulse-small 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        "pulse-small": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 }
        }
      },
      flexShrink: {
        "1/2": 0.5
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              fontWeight: theme("fontWeight.semibold"),
              "&:hover": {
                textDecoration: "underline"
              }
            },
            strong: {
              fontWeight: theme("fontWeight.bold")
            },
            ol: {
              paddingLeft: theme("padding.10")
            },
            ul: {
              paddingLeft: theme("padding.10")
            },
            "ol > li": {
              paddingLeft: "0px"
            },
            "ul > li": {
              paddingLeft: "0px"
            },
            "ol > li::before": {
              fontWeight: theme("fontWeight.normal"),
              marginLeft: "-25px"
            },
            "ul > li::before": {
              content: '"-"',
              position: "absolute",
              borderRadius: "50%",
              marginLeft: "-25px",
              width: "0px",
              top: "0px",
              left: "0px",
              background: "none"
            },
            "li > p": {
              margin: "0px !important"
            },
            blockquote: {
              fontStyle: "",
              paddingLeft: theme("padding.9"),
              borderLeftWidth: theme("spacing.1")
            },
            img: {
              borderRadius: theme("borderRadius.lg")
            },
            h2: {
              marginTop: "2em",
              marginBottom: "1em"
            },
            h3: {
              marginTop: "2em",
              marginBottom: "1em"
            },
            h4: {
              marginTop: "2em",
              marginBottom: "1em"
            }
          }
        }
      })
    }
  },
  plugins: [(0, import_typography.default)({ modifiers: [] }), import_forms.default, import_aspect_ratio.default, import_line_clamp.default],
  mode: "jit",
  darkMode: "class"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config
});
