import {
  require_react_dom
} from "./chunk-TUX7A2JK.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse2;
    exports.serialize = serialize2;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse2(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = (options == null ? void 0 : options.decode) || decode2;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    function serialize2(name, val, options) {
      const enc = (options == null ? void 0 : options.encode) || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode2(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else if (key === "partitioned") {
          cookie.partitioned = true;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs
var React3 = __toESM(require_react(), 1);
var React = __toESM(require_react(), 1);
var React2 = __toESM(require_react(), 1);
var React10 = __toESM(require_react(), 1);
var React9 = __toESM(require_react(), 1);
var React4 = __toESM(require_react(), 1);

// node_modules/turbo-stream/dist/turbo-stream.mjs
var HOLE = -1;
var NAN = -2;
var NEGATIVE_INFINITY = -3;
var NEGATIVE_ZERO = -4;
var NULL = -5;
var POSITIVE_INFINITY = -6;
var UNDEFINED = -7;
var TYPE_BIGINT = "B";
var TYPE_DATE = "D";
var TYPE_ERROR = "E";
var TYPE_MAP = "M";
var TYPE_NULL_OBJECT = "N";
var TYPE_PROMISE = "P";
var TYPE_REGEXP = "R";
var TYPE_SET = "S";
var TYPE_SYMBOL = "Y";
var TYPE_URL = "U";
var TYPE_PREVIOUS_RESOLVED = "Z";
var Deferred = class {
  constructor() {
    __publicField(this, "promise");
    __publicField(this, "resolve");
    __publicField(this, "reject");
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};
function createLineSplittingTransform() {
  const decoder = new TextDecoder();
  let leftover = "";
  return new TransformStream({
    transform(chunk, controller) {
      const str = decoder.decode(chunk, { stream: true });
      const parts = (leftover + str).split("\n");
      leftover = parts.pop() || "";
      for (const part of parts) {
        controller.enqueue(part);
      }
    },
    flush(controller) {
      if (leftover) {
        controller.enqueue(leftover);
      }
    }
  });
}
function flatten(input) {
  const { indices } = this;
  const existing = indices.get(input);
  if (existing)
    return [existing];
  if (input === void 0)
    return UNDEFINED;
  if (input === null)
    return NULL;
  if (Number.isNaN(input))
    return NAN;
  if (input === Number.POSITIVE_INFINITY)
    return POSITIVE_INFINITY;
  if (input === Number.NEGATIVE_INFINITY)
    return NEGATIVE_INFINITY;
  if (input === 0 && 1 / input < 0)
    return NEGATIVE_ZERO;
  const index = this.index++;
  indices.set(input, index);
  stringify.call(this, input, index);
  return index;
}
function stringify(input, index) {
  const { deferred, plugins, postPlugins } = this;
  const str = this.stringified;
  const stack = [[input, index]];
  while (stack.length > 0) {
    const [input2, index2] = stack.pop();
    const partsForObj = (obj) => Object.keys(obj).map((k) => `"_${flatten.call(this, k)}":${flatten.call(this, obj[k])}`).join(",");
    let error = null;
    switch (typeof input2) {
      case "boolean":
      case "number":
      case "string":
        str[index2] = JSON.stringify(input2);
        break;
      case "bigint":
        str[index2] = `["${TYPE_BIGINT}","${input2}"]`;
        break;
      case "symbol": {
        const keyFor = Symbol.keyFor(input2);
        if (!keyFor) {
          error = new Error(
            "Cannot encode symbol unless created with Symbol.for()"
          );
        } else {
          str[index2] = `["${TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
        }
        break;
      }
      case "object": {
        if (!input2) {
          str[index2] = `${NULL}`;
          break;
        }
        const isArray = Array.isArray(input2);
        let pluginHandled = false;
        if (!isArray && plugins) {
          for (const plugin of plugins) {
            const pluginResult = plugin(input2);
            if (Array.isArray(pluginResult)) {
              pluginHandled = true;
              const [pluginIdentifier, ...rest] = pluginResult;
              str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
              if (rest.length > 0) {
                str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
              }
              str[index2] += "]";
              break;
            }
          }
        }
        if (!pluginHandled) {
          let result = isArray ? "[" : "{";
          if (isArray) {
            for (let i = 0; i < input2.length; i++)
              result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : HOLE);
            str[index2] = `${result}]`;
          } else if (input2 instanceof Date) {
            str[index2] = `["${TYPE_DATE}",${input2.getTime()}]`;
          } else if (input2 instanceof URL) {
            str[index2] = `["${TYPE_URL}",${JSON.stringify(input2.href)}]`;
          } else if (input2 instanceof RegExp) {
            str[index2] = `["${TYPE_REGEXP}",${JSON.stringify(
              input2.source
            )},${JSON.stringify(input2.flags)}]`;
          } else if (input2 instanceof Set) {
            if (input2.size > 0) {
              str[index2] = `["${TYPE_SET}",${[...input2].map((val) => flatten.call(this, val)).join(",")}]`;
            } else {
              str[index2] = `["${TYPE_SET}"]`;
            }
          } else if (input2 instanceof Map) {
            if (input2.size > 0) {
              str[index2] = `["${TYPE_MAP}",${[...input2].flatMap(([k, v]) => [
                flatten.call(this, k),
                flatten.call(this, v)
              ]).join(",")}]`;
            } else {
              str[index2] = `["${TYPE_MAP}"]`;
            }
          } else if (input2 instanceof Promise) {
            str[index2] = `["${TYPE_PROMISE}",${index2}]`;
            deferred[index2] = input2;
          } else if (input2 instanceof Error) {
            str[index2] = `["${TYPE_ERROR}",${JSON.stringify(input2.message)}`;
            if (input2.name !== "Error") {
              str[index2] += `,${JSON.stringify(input2.name)}`;
            }
            str[index2] += "]";
          } else if (Object.getPrototypeOf(input2) === null) {
            str[index2] = `["${TYPE_NULL_OBJECT}",{${partsForObj(input2)}}]`;
          } else if (isPlainObject(input2)) {
            str[index2] = `{${partsForObj(input2)}}`;
          } else {
            error = new Error("Cannot encode object with prototype");
          }
        }
        break;
      }
      default: {
        const isArray = Array.isArray(input2);
        let pluginHandled = false;
        if (!isArray && plugins) {
          for (const plugin of plugins) {
            const pluginResult = plugin(input2);
            if (Array.isArray(pluginResult)) {
              pluginHandled = true;
              const [pluginIdentifier, ...rest] = pluginResult;
              str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
              if (rest.length > 0) {
                str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
              }
              str[index2] += "]";
              break;
            }
          }
        }
        if (!pluginHandled) {
          error = new Error("Cannot encode function or unexpected type");
        }
      }
    }
    if (error) {
      let pluginHandled = false;
      if (postPlugins) {
        for (const plugin of postPlugins) {
          const pluginResult = plugin(input2);
          if (Array.isArray(pluginResult)) {
            pluginHandled = true;
            const [pluginIdentifier, ...rest] = pluginResult;
            str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
            if (rest.length > 0) {
              str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
            }
            str[index2] += "]";
            break;
          }
        }
      }
      if (!pluginHandled) {
        throw error;
      }
    }
  }
}
var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function isPlainObject(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
}
var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
function unflatten(parsed) {
  const { hydrated, values } = this;
  if (typeof parsed === "number")
    return hydrate.call(this, parsed);
  if (!Array.isArray(parsed) || !parsed.length)
    throw new SyntaxError();
  const startIndex = values.length;
  for (const value of parsed) {
    values.push(value);
  }
  hydrated.length = values.length;
  return hydrate.call(this, startIndex);
}
function hydrate(index) {
  const { hydrated, values, deferred, plugins } = this;
  let result;
  const stack = [
    [
      index,
      (v) => {
        result = v;
      }
    ]
  ];
  let postRun = [];
  while (stack.length > 0) {
    const [index2, set] = stack.pop();
    switch (index2) {
      case UNDEFINED:
        set(void 0);
        continue;
      case NULL:
        set(null);
        continue;
      case NAN:
        set(NaN);
        continue;
      case POSITIVE_INFINITY:
        set(Infinity);
        continue;
      case NEGATIVE_INFINITY:
        set(-Infinity);
        continue;
      case NEGATIVE_ZERO:
        set(-0);
        continue;
    }
    if (hydrated[index2]) {
      set(hydrated[index2]);
      continue;
    }
    const value = values[index2];
    if (!value || typeof value !== "object") {
      hydrated[index2] = value;
      set(value);
      continue;
    }
    if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const [type, b, c] = value;
        switch (type) {
          case TYPE_DATE:
            set(hydrated[index2] = new Date(b));
            continue;
          case TYPE_URL:
            set(hydrated[index2] = new URL(b));
            continue;
          case TYPE_BIGINT:
            set(hydrated[index2] = BigInt(b));
            continue;
          case TYPE_REGEXP:
            set(hydrated[index2] = new RegExp(b, c));
            continue;
          case TYPE_SYMBOL:
            set(hydrated[index2] = Symbol.for(b));
            continue;
          case TYPE_SET:
            const newSet = /* @__PURE__ */ new Set();
            hydrated[index2] = newSet;
            for (let i = 1; i < value.length; i++)
              stack.push([
                value[i],
                (v) => {
                  newSet.add(v);
                }
              ]);
            set(newSet);
            continue;
          case TYPE_MAP:
            const map = /* @__PURE__ */ new Map();
            hydrated[index2] = map;
            for (let i = 1; i < value.length; i += 2) {
              const r = [];
              stack.push([
                value[i + 1],
                (v) => {
                  r[1] = v;
                }
              ]);
              stack.push([
                value[i],
                (k) => {
                  r[0] = k;
                }
              ]);
              postRun.push(() => {
                map.set(r[0], r[1]);
              });
            }
            set(map);
            continue;
          case TYPE_NULL_OBJECT:
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index2] = obj;
            for (const key of Object.keys(b).reverse()) {
              const r = [];
              stack.push([
                b[key],
                (v) => {
                  r[1] = v;
                }
              ]);
              stack.push([
                Number(key.slice(1)),
                (k) => {
                  r[0] = k;
                }
              ]);
              postRun.push(() => {
                obj[r[0]] = r[1];
              });
            }
            set(obj);
            continue;
          case TYPE_PROMISE:
            if (hydrated[b]) {
              set(hydrated[index2] = hydrated[b]);
            } else {
              const d = new Deferred();
              deferred[b] = d;
              set(hydrated[index2] = d.promise);
            }
            continue;
          case TYPE_ERROR:
            const [, message, errorType] = value;
            let error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
            hydrated[index2] = error;
            set(error);
            continue;
          case TYPE_PREVIOUS_RESOLVED:
            set(hydrated[index2] = hydrated[b]);
            continue;
          default:
            if (Array.isArray(plugins)) {
              const r = [];
              const vals = value.slice(1);
              for (let i = 0; i < vals.length; i++) {
                const v = vals[i];
                stack.push([
                  v,
                  (v2) => {
                    r[i] = v2;
                  }
                ]);
              }
              postRun.push(() => {
                for (const plugin of plugins) {
                  const result2 = plugin(value[0], ...r);
                  if (result2) {
                    set(hydrated[index2] = result2.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const array = [];
        hydrated[index2] = array;
        for (let i = 0; i < value.length; i++) {
          const n = value[i];
          if (n !== HOLE) {
            stack.push([
              n,
              (v) => {
                array[i] = v;
              }
            ]);
          }
        }
        set(array);
        continue;
      }
    } else {
      const object = {};
      hydrated[index2] = object;
      for (const key of Object.keys(value).reverse()) {
        const r = [];
        stack.push([
          value[key],
          (v) => {
            r[1] = v;
          }
        ]);
        stack.push([
          Number(key.slice(1)),
          (k) => {
            r[0] = k;
          }
        ]);
        postRun.push(() => {
          object[r[0]] = r[1];
        });
      }
      set(object);
      continue;
    }
  }
  while (postRun.length > 0) {
    postRun.pop()();
  }
  return result;
}
async function decode(readable, options) {
  const { plugins } = options ?? {};
  const done = new Deferred();
  const reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
  const decoder = {
    values: [],
    hydrated: [],
    deferred: {},
    plugins
  };
  const decoded = await decodeInitial.call(decoder, reader);
  let donePromise = done.promise;
  if (decoded.done) {
    done.resolve();
  } else {
    donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason) => {
      for (const deferred of Object.values(decoder.deferred)) {
        deferred.reject(reason);
      }
      done.reject(reason);
    });
  }
  return {
    done: donePromise.then(() => reader.closed),
    value: decoded.value
  };
}
async function decodeInitial(reader) {
  const read = await reader.read();
  if (!read.value) {
    throw new SyntaxError();
  }
  let line;
  try {
    line = JSON.parse(read.value);
  } catch (reason) {
    throw new SyntaxError();
  }
  return {
    done: read.done,
    value: unflatten.call(this, line)
  };
}
async function decodeDeferred(reader) {
  let read = await reader.read();
  while (!read.done) {
    if (!read.value)
      continue;
    const line = read.value;
    switch (line[0]) {
      case TYPE_PROMISE: {
        const colonIndex = line.indexOf(":");
        const deferredId = Number(line.slice(1, colonIndex));
        const deferred = this.deferred[deferredId];
        if (!deferred) {
          throw new Error(`Deferred ID ${deferredId} not found in stream`);
        }
        const lineData = line.slice(colonIndex + 1);
        let jsonLine;
        try {
          jsonLine = JSON.parse(lineData);
        } catch (reason) {
          throw new SyntaxError();
        }
        const value = unflatten.call(this, jsonLine);
        deferred.resolve(value);
        break;
      }
      case TYPE_ERROR: {
        const colonIndex = line.indexOf(":");
        const deferredId = Number(line.slice(1, colonIndex));
        const deferred = this.deferred[deferredId];
        if (!deferred) {
          throw new Error(`Deferred ID ${deferredId} not found in stream`);
        }
        const lineData = line.slice(colonIndex + 1);
        let jsonLine;
        try {
          jsonLine = JSON.parse(lineData);
        } catch (reason) {
          throw new SyntaxError();
        }
        const value = unflatten.call(this, jsonLine);
        deferred.reject(value);
        break;
      }
      default:
        throw new SyntaxError();
    }
    read = await reader.read();
  }
}
function encode(input, options) {
  const { plugins, postPlugins, signal } = options ?? {};
  const encoder2 = {
    deferred: {},
    index: 0,
    indices: /* @__PURE__ */ new Map(),
    stringified: [],
    plugins,
    postPlugins,
    signal
  };
  const textEncoder = new TextEncoder();
  let lastSentIndex = 0;
  const readable = new ReadableStream({
    async start(controller) {
      const id = flatten.call(encoder2, input);
      if (Array.isArray(id)) {
        throw new Error("This should never happen");
      }
      if (id < 0) {
        controller.enqueue(textEncoder.encode(`${id}
`));
      } else {
        controller.enqueue(
          textEncoder.encode(`[${encoder2.stringified.join(",")}]
`)
        );
        lastSentIndex = encoder2.stringified.length - 1;
      }
      const seenPromises = /* @__PURE__ */ new WeakSet();
      while (Object.keys(encoder2.deferred).length > 0) {
        for (const [deferredId, deferred] of Object.entries(encoder2.deferred)) {
          if (seenPromises.has(deferred))
            continue;
          seenPromises.add(
            encoder2.deferred[Number(deferredId)] = raceSignal(
              deferred,
              encoder2.signal
            ).then(
              (resolved) => {
                const id2 = flatten.call(encoder2, resolved);
                if (Array.isArray(id2)) {
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_PROMISE}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`
                    )
                  );
                  encoder2.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(
                    textEncoder.encode(`${TYPE_PROMISE}${deferredId}:${id2}
`)
                  );
                } else {
                  const values = encoder2.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_PROMISE}${deferredId}:[${values}]
`
                    )
                  );
                  lastSentIndex = encoder2.stringified.length - 1;
                }
              },
              (reason) => {
                if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
                  reason = new Error("An unknown error occurred");
                }
                const id2 = flatten.call(encoder2, reason);
                if (Array.isArray(id2)) {
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_ERROR}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`
                    )
                  );
                  encoder2.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(
                    textEncoder.encode(`${TYPE_ERROR}${deferredId}:${id2}
`)
                  );
                } else {
                  const values = encoder2.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_ERROR}${deferredId}:[${values}]
`
                    )
                  );
                  lastSentIndex = encoder2.stringified.length - 1;
                }
              }
            ).finally(() => {
              delete encoder2.deferred[Number(deferredId)];
            })
          );
        }
        await Promise.race(Object.values(encoder2.deferred));
      }
      await Promise.all(Object.values(encoder2.deferred));
      controller.close();
    }
  });
  return readable;
}
function raceSignal(promise, signal) {
  if (!signal)
    return promise;
  if (signal.aborted)
    return Promise.reject(signal.reason || new Error("Signal was aborted."));
  const abort = new Promise((resolve, reject) => {
    signal.addEventListener("abort", (event) => {
      reject(signal.reason || new Error("Signal was aborted."));
    });
    promise.then(resolve).catch(reject);
  });
  abort.catch(() => {
  });
  return Promise.race([abort, promise]);
}

// node_modules/react-router/dist/development/chunk-WFMEQ3WA.mjs
var React8 = __toESM(require_react(), 1);
var React7 = __toESM(require_react(), 1);
var React5 = __toESM(require_react(), 1);
var React6 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
var React12 = __toESM(require_react(), 1);
var React13 = __toESM(require_react(), 1);
var import_cookie = __toESM(require_dist(), 1);
var import_set_cookie_parser = __toESM(require_set_cookie(), 1);
var Action = ((Action2) => {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
  return Action2;
})(Action || {});
var PopStateEventType = "popstate";
function createMemoryHistory(options = {}) {
  let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
  let entries;
  entries = initialEntries.map(
    (entry, index2) => createMemoryLocation(
      entry,
      typeof entry === "string" ? null : entry.state,
      index2 === 0 ? "default" : void 0
    )
  );
  let index = clampIndex(
    initialIndex == null ? entries.length - 1 : initialIndex
  );
  let action = "POP";
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state = null, key) {
    let location = createLocation(
      entries ? getCurrentLocation().pathname : "/",
      to,
      state,
      key
    );
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in memory history: ${JSON.stringify(
        to
      )}`
    );
    return location;
  }
  function createHref2(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref: createHref2,
    createURL(to) {
      return new URL(createHref2(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = "PUSH";
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 1 });
      }
    },
    replace(to, state) {
      action = "REPLACE";
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 0 });
      }
    },
    go(delta) {
      action = "POP";
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({ action, location: nextLocation, delta });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function createHashHistory(options = {}) {
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substring(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        to
      )})`
    );
  }
  return getUrlBasedHistory(
    createHashLocation,
    createHashHref,
    validateHashLocation,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state = null, key) {
  let location = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH";
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE";
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href}`
    );
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var immutableRouteKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}) {
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(
      route.index !== true || !route.children,
      `Cannot specify children on an index route`
    );
    invariant(
      !manifest[id],
      `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`
    );
    if (isIndexRoute(route)) {
      let indexRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id
      };
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id,
        children: void 0
      };
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(
          route.children,
          mapRouteProperties2,
          treePath,
          manifest
        );
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _a;
    if (route.path === "" || !((_a = route.path) == null ? void 0 : _a.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(originalPath, params = {}) {
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(
      false,
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    path = path.replace(/\*$/, "/*");
  }
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify2 = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    if (isLastSegment && segment === "*") {
      const star = "*";
      return stringify2(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, `Missing ":${key}" param`);
      return stringify2(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  );
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var DataWithResponseInit = class {
  constructor(data2, init) {
    this.type = "DataWithResponseInit";
    this.data = data2;
    this.init = init || null;
  }
};
function data(data2, init) {
  return new DataWithResponseInit(
    data2,
    typeof init === "number" ? { status: init } : init
  );
}
var redirect = (url, init = 302) => {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, {
    ...responseInit,
    headers
  });
};
var redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
var replace = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Replace", "true");
  return response;
};
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  invariant(
    init.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    init.routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
  let patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
  let future = {
    ...init.future
  };
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions2 = null;
  let getScrollRestorationKey2 = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null && !patchRoutesOnNavigationImpl) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let { matches, route } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = { [route.id]: error };
  }
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(
      initialMatches,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    let fogOfWar = checkFogOfWar(
      null,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active && fogOfWar.matches) {
      initialMatches = fogOfWar.matches;
    }
  } else if (initialMatches.some((m) => m.route.lazy)) {
    initialized = false;
  } else if (!initialMatches.some((m) => m.route.loader)) {
    initialized = true;
  } else {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    if (errors) {
      let idx = initialMatches.findIndex(
        (m) => errors[m.route.id] !== void 0
      );
      initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(
        (m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors)
      );
    }
  }
  let router2;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = "POP";
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledFetcherLoads = /* @__PURE__ */ new Set();
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let unblockBlockerHistoryUpdate = void 0;
  let pendingRevalidationDfd = null;
  function initialize() {
    unlistenHistory = init.history.listen(
      ({ action: historyAction, location, delta }) => {
        if (unblockBlockerHistoryUpdate) {
          unblockBlockerHistoryUpdate();
          unblockBlockerHistoryUpdate = void 0;
          return;
        }
        warning(
          blockerFunctions.size === 0 || delta != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location,
          historyAction
        });
        if (blockerKey && delta != null) {
          let nextHistoryUpdatePromise = new Promise((resolve) => {
            unblockBlockerHistoryUpdate = resolve;
          });
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location
              });
              nextHistoryUpdatePromise.then(() => init.history.go(delta));
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        return startNavigation(historyAction, location);
      }
    );
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation("POP", state.location, {
        initialHydration: true
      });
    }
    return router2;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts = {}) {
    state = {
      ...state,
      ...newState
    };
    let unmountedFetchers = [];
    let mountedFetchers = [];
    state.fetchers.forEach((fetcher, key) => {
      if (fetcher.state === "idle") {
        if (fetchersQueuedForDeletion.has(key)) {
          unmountedFetchers.push(key);
        } else {
          mountedFetchers.push(key);
        }
      }
    });
    [...subscribers].forEach(
      (subscriber) => subscriber(state, {
        deletedFetchers: unmountedFetchers,
        viewTransitionOpts: opts.viewTransitionOpts,
        flushSync: opts.flushSync === true
      })
    );
    unmountedFetchers.forEach((key) => deleteFetcher(key));
    mountedFetchers.forEach((key) => state.fetchers.delete(key));
  }
  function completeNavigation(location, newState, { flushSync: flushSync2 } = {}) {
    var _a, _b;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_a = location.state) == null ? void 0 : _a._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(
      state.loaderData,
      newState.loaderData,
      newState.matches || [],
      newState.errors
    ) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_b = location.state) == null ? void 0 : _b._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation) {
    } else if (pendingAction === "POP") {
    } else if (pendingAction === "PUSH") {
      init.history.push(location, location.state);
    } else if (pendingAction === "REPLACE") {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === "POP") {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(
      {
        ...newState,
        // matches, errors, fetchers go through as-is
        actionData,
        loaderData,
        historyAction: pendingAction,
        location,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition: getSavedScrollPosition(
          location,
          newState.matches || state.matches
        ),
        preventScrollReset,
        blockers
      },
      {
        viewTransitionOpts,
        flushSync: flushSync2 === true
      }
    );
    pendingAction = "POP";
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    pendingRevalidationDfd == null ? void 0 : pendingRevalidationDfd.resolve();
    pendingRevalidationDfd = null;
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      to,
      opts == null ? void 0 : opts.fromRouteId,
      opts == null ? void 0 : opts.relative
    );
    let { path, submission, error } = normalizeNavigateOptions(
      false,
      normalizedPath,
      opts
    );
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = {
      ...nextLocation,
      ...init.history.encodeLocation(nextLocation)
    };
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = "PUSH";
    if (userReplace === true) {
      historyAction = "REPLACE";
    } else if (userReplace === false) {
    } else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = "REPLACE";
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync2 = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({ blockers });
        }
      });
      return;
    }
    await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync: flushSync2
    });
  }
  function revalidate() {
    if (!pendingRevalidationDfd) {
      pendingRevalidationDfd = createDeferred();
    }
    interruptActiveLoads();
    updateState({ revalidation: "loading" });
    let promise = pendingRevalidationDfd.promise;
    if (state.navigation.state === "submitting") {
      return promise;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return promise;
    }
    startNavigation(
      pendingAction || state.historyAction,
      state.navigation.location,
      {
        overrideNavigation: state.navigation,
        // Proxy through any rending view transition
        enableViewTransition: pendingViewTransitionEnabled === true
      }
    );
    return promise;
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    let flushSync2 = (opts && opts.flushSync) === true;
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let { error, notFoundMatches, route } = handleNavigational404(
        location.pathname
      );
      completeNavigation(
        location,
        {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        },
        { flushSync: flushSync2 }
      );
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, { matches }, { flushSync: flushSync2 });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(
      init.history,
      location,
      pendingNavigationController.signal,
      opts && opts.submission
    );
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [
        findNearestBoundary(matches).route.id,
        { type: "error", error: opts.pendingError }
      ];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(
        request,
        location,
        opts.submission,
        matches,
        fogOfWar.active,
        { replace: opts.replace, flushSync: flushSync2 }
      );
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync2 = false;
      fogOfWar.active = false;
      request = createClientSideRequest(
        init.history,
        request.url,
        request.signal
      );
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(
      request,
      location,
      matches,
      fogOfWar.active,
      loadingNavigation,
      opts && opts.submission,
      opts && opts.fetcherSubmission,
      opts && opts.replace,
      opts && opts.initialHydration === true,
      flushSync2,
      pendingActionResult
    );
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, {
      matches: updatedMatches || matches,
      ...getActionDataForCommit(pendingActionResult),
      loaderData,
      errors
    });
  }
  async function handleAction(request, location, submission, matches, isFogOfWar, opts = {}) {
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({ navigation }, { flushSync: opts.flushSync === true });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [
            boundaryId,
            {
              type: "error",
              error: discoverResult.error
            }
          ]
        };
      } else if (!discoverResult.matches) {
        let { notFoundMatches, error, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          pendingActionResult: [
            route.id,
            {
              type: "error",
              error
            }
          ]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: "error",
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy(
        "action",
        state,
        request,
        [actionMatch],
        matches,
        null
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
    }
    if (isRedirectResult(result)) {
      let replace2;
      if (opts && opts.replace != null) {
        replace2 = opts.replace;
      } else {
        let location2 = normalizeRedirectLocation(
          result.response.headers.get("Location"),
          new URL(request.url),
          basename
        );
        replace2 = location2 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace: replace2
      });
      return { shortCircuited: true };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = "PUSH";
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync2, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(
          {
            navigation: loadingNavigation,
            ...actionData !== void 0 ? { actionData } : {}
          },
          {
            flushSync: flushSync2
          }
        );
      }
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let { error, notFoundMatches, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      activeSubmission,
      location,
      initialHydration === true,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      pendingActionResult
    );
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(
        location,
        {
          matches,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
          ...getActionDataForCommit(pendingActionResult),
          ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
        },
        { flushSync: flushSync2 }
      );
      return { shortCircuited: true };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== void 0) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, { flushSync: flushSync2 });
    }
    revalidatingFetchers.forEach((rf) => {
      abortFetcher(rf.key);
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      request
    );
    if (request.signal.aborted) {
      return { shortCircuited: true };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      pendingActionResult,
      revalidatingFetchers,
      fetcherResults
    );
    if (initialHydration && state.errors) {
      errors = { ...state.errors, ...errors };
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return {
      matches,
      loaderData,
      errors,
      ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
    };
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf) => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        fetcher ? fetcher.data : void 0
      );
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  async function fetch2(key, routeId, href, opts) {
    abortFetcher(key);
    let flushSync2 = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      href,
      routeId,
      opts == null ? void 0 : opts.relative
    );
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(
        key,
        routeId,
        getInternalRouterError(404, { pathname: normalizedPath }),
        { flushSync: flushSync2 }
      );
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(
      true,
      normalizedPath,
      opts
    );
    if (error) {
      setFetcherError(key, routeId, error, { flushSync: flushSync2 });
      return;
    }
    let match = getTargetMatch(matches, path);
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      await handleFetcherAction(
        key,
        routeId,
        path,
        match,
        matches,
        fogOfWar.active,
        flushSync2,
        preventScrollReset,
        submission
      );
      return;
    }
    fetchLoadMatches.set(key, { routeId, path });
    await handleFetcherLoader(
      key,
      routeId,
      path,
      match,
      matches,
      fogOfWar.active,
      flushSync2,
      preventScrollReset,
      submission
    );
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync2, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, { flushSync: flushSync2 });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync: flushSync2
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal,
      submission
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        requestMatches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync: flushSync2 });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync: flushSync2 }
        );
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy(
      "action",
      state,
      fetchRequest,
      [match],
      requestMatches,
      key
    );
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(
      init.history,
      nextLocation,
      abortController.signal
    );
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      false,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      [match.route.id, actionResult]
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        existingFetcher2 ? existingFetcher2.data : void 0
      );
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({ fetchers: new Map(state.fetchers) });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      state,
      matches,
      matchesToLoad,
      revalidatingFetchers,
      revalidationRequest
    );
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      void 0,
      revalidatingFetchers,
      fetcherResults
    );
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(
          state.loaderData,
          loaderData,
          matches,
          errors
        ),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync2, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(
      key,
      getLoadingFetcher(
        submission,
        existingFetcher ? existingFetcher.data : void 0
      ),
      { flushSync: flushSync2 }
    );
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        path,
        fetchRequest.signal
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync: flushSync2 });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync: flushSync2 }
        );
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy(
      "loader",
      state,
      fetchRequest,
      [match],
      matches,
      key
    );
    let result = results[match.route.id];
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect2, isNavigation, {
    submission,
    fetcherSubmission,
    preventScrollReset,
    replace: replace2
  } = {}) {
    if (redirect2.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect2.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(
      location,
      new URL(request.url),
      basename
    );
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace2) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH";
    let { formMethod, formAction, formEncType } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectNavigationType, redirectLocation, {
        submission: {
          ...activeSubmission,
          formAction: location
        },
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    } else {
      let overrideNavigation = getLoadingNavigation(
        redirectLocation,
        submission
      );
      await startNavigation(redirectNavigationType, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    }
  }
  async function callDataStrategy(type, state2, request, matchesToLoad, matches, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(
        dataStrategyImpl,
        type,
        state2,
        request,
        matchesToLoad,
        matches,
        fetcherKey,
        manifest,
        mapRouteProperties2
      );
    } catch (e) {
      matchesToLoad.forEach((m) => {
        dataResults[m.route.id] = {
          type: "error",
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: "redirect",
          response: normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            routeId,
            matches,
            basename
          )
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(
          result
        );
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(state2, matches, matchesToLoad, fetchersToLoad, request) {
    let loaderResultsPromise = callDataStrategy(
      "loader",
      state2,
      request,
      matchesToLoad,
      matches,
      null
    );
    let fetcherResultsPromise = Promise.all(
      fetchersToLoad.map(async (f) => {
        if (f.matches && f.match && f.controller) {
          let results = await callDataStrategy(
            "loader",
            state2,
            createClientSideRequest(init.history, f.path, f.controller.signal),
            [f.match],
            f.matches,
            f.key
          );
          let result = results[f.match.route.id];
          return { [f.key]: result };
        } else {
          return Promise.resolve({
            [f.key]: {
              type: "error",
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            }
          });
        }
      })
    );
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce(
      (acc, r) => Object.assign(acc, r),
      {}
    );
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts = {}) {
    state.fetchers.set(key, fetcher);
    updateState(
      { fetchers: new Map(state.fetchers) },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function setFetcherError(key, routeId, error, opts = {}) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState(
      {
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    if (fetchersQueuedForDeletion.has(key)) {
      fetchersQueuedForDeletion.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    fetchersQueuedForDeletion.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function queueFetcherForDeletion(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      fetchersQueuedForDeletion.add(key);
    } else {
      activeFetchers.set(key, count);
    }
    updateState({ fetchers: new Map(state.fetchers) });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(
      blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked",
      `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`
    );
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({ blockers });
  }
  function shouldBlockNavigation({
    currentLocation,
    nextLocation,
    historyAction
  }) {
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, { pathname });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { matches, route } = getShortCircuitMatches(routesToUse);
    return { notFoundMatches: matches, route, error };
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions2 = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey2 = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({ restoreScrollPosition: y });
      }
    }
    return () => {
      savedScrollPositions2 = null;
      getScrollPosition = null;
      getScrollRestorationKey2 = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey2) {
      let key = getScrollRestorationKey2(
        location,
        matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))
      );
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions2[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (patchRoutesOnNavigationImpl) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(
          routesToUse,
          pathname,
          basename,
          true
        );
        return { active: true, matches: fogMatches || [] };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(
            routesToUse,
            pathname,
            basename,
            true
          );
          return { active: true, matches: partialMatches };
        }
      }
    }
    return { active: false, matches: null };
  }
  async function discoverRoutes(matches, pathname, signal) {
    if (!patchRoutesOnNavigationImpl) {
      return { type: "success", matches };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await patchRoutesOnNavigationImpl({
          path: pathname,
          matches: partialMatches,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(
              routeId,
              children,
              routesToUse,
              localManifest,
              mapRouteProperties2
            );
          }
        });
      } catch (e) {
        return { type: "error", error: e, partialMatches };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return { type: "aborted" };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return { type: "success", matches: newMatches };
      }
      let newPartialMatches = matchRoutesImpl(
        routesToUse,
        pathname,
        basename,
        true
      );
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(
        (m, i) => m.route.id === newPartialMatches[i].route.id
      )) {
        return { type: "success", matches: null };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(
      newRoutes,
      mapRouteProperties2,
      void 0,
      manifest
    );
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(
      routeId,
      children,
      routesToUse,
      manifest,
      mapRouteProperties2
    );
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router2 = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: queueFetcherForDeletion,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router2;
}
function createStaticHandler(routes, opts) {
  invariant(
    routes.length > 0,
    "You must provide a non-empty routes array to createStaticHandler"
  );
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties2 = (opts == null ? void 0 : opts.mapRouteProperties) || defaultMapRouteProperties;
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  async function query(request, {
    requestContext,
    skipLoaderErrorBubbling,
    dataStrategy
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, { method });
      let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, { pathname: location.pathname });
      let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      skipLoaderErrorBubbling === true,
      null
    );
    if (isResponse(result)) {
      return result;
    }
    return { location, basename, ...result };
  }
  async function queryRoute(request, {
    routeId,
    requestContext,
    dataStrategy
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, { method });
    } else if (!matches) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      false,
      match
    );
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      return Object.values(result.loaderData)[0];
    }
    return void 0;
  }
  async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(
      request.signal,
      "query()/queryRoute() requests must contain an AbortController signal"
    );
    try {
      if (isMutationMethod(request.method)) {
        let result2 = await submit(
          request,
          matches,
          routeMatch || getTargetMatch(matches, location),
          requestContext,
          dataStrategy,
          skipLoaderErrorBubbling,
          routeMatch != null
        );
        return result2;
      }
      let result = await loadRouteData(
        request,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        routeMatch
      );
      return isResponse(result) ? result : {
        ...result,
        actionData: null,
        actionHeaders: {}
      };
    } catch (e) {
      if (isDataStrategyResult(e) && isResponse(e.result)) {
        if (e.type === "error") {
          throw e.result;
        }
        return e.result;
      }
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: "error",
        error
      };
    } else {
      let results = await callDataStrategy(
        "action",
        request,
        [actionMatch],
        matches,
        isRouteRequest,
        requestContext,
        dataStrategy
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest);
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: { [actionMatch.route.id]: result.data },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context2 = await loadRouteData(
        loaderRequest,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        null,
        [boundaryMatch.route.id, result]
      );
      return {
        ...context2,
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: {
          ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
        }
      };
    }
    let context = await loadRouteData(
      loaderRequest,
      matches,
      requestContext,
      dataStrategy,
      skipLoaderErrorBubbling,
      null
    );
    return {
      ...context,
      actionData: {
        [actionMatch.route.id]: result.data
      },
      // action status codes take precedence over loader status codes
      ...result.statusCode ? { statusCode: result.statusCode } : {},
      actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
    };
  }
  async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !(routeMatch == null ? void 0 : routeMatch.route.loader) && !(routeMatch == null ? void 0 : routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(
      (m) => m.route.loader || m.route.lazy
    );
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce(
          (acc, m) => Object.assign(acc, { [m.route.id]: null }),
          {}
        ),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }
    let results = await callDataStrategy(
      "loader",
      request,
      matchesToLoad,
      matches,
      isRouteRequest,
      requestContext,
      dataStrategy
    );
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest);
    }
    let context = processRouteLoaderData(
      matches,
      results,
      pendingActionResult,
      true,
      skipLoaderErrorBubbling
    );
    let executedLoaders = new Set(
      matchesToLoad.map((match) => match.route.id)
    );
    matches.forEach((match) => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return {
      ...context,
      matches
    };
  }
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
    let results = await callDataStrategyImpl(
      dataStrategy || defaultDataStrategy,
      type,
      null,
      request,
      matchesToLoad,
      matches,
      null,
      manifest,
      mapRouteProperties2,
      requestContext
    );
    let dataResults = {};
    await Promise.all(
      matches.map(async (match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let result = results[match.route.id];
        if (isRedirectDataStrategyResult(result)) {
          let response = result.result;
          throw normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            match.route.id,
            matches,
            basename
          );
        }
        if (isResponse(result.result) && isRouteRequest) {
          throw result;
        }
        dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
      })
    );
    return dataResults;
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes, context, error) {
  let newContext = {
    ...context,
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  };
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
  if (request.signal.reason !== void 0) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(
    `${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`
  );
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(
    to ? to : ".",
    getResolveToMatches(contextualMatches),
    stripBasename(location.pathname, basename) || location.pathname,
    relative === "path"
  );
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return { path };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, { method: opts.formMethod })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, { type: "invalid-body" })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = rawFormMethod.toUpperCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce(
          (acc, [name, value]) => `${acc}${name}=${value}
`,
          ""
        )
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(
    typeof FormData === "function",
    "FormData is not available in this environment"
  );
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return { path, submission };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = `?${searchParams}`;
  return { path: createPath(parsedPath), submission };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary = false) {
  let index = matches.findIndex((m) => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      Object.keys(state.errors)[0],
      true
    );
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      pendingActionResult[0]
    );
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let { route } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, {
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params,
      ...submission,
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    });
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, {
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params,
        ...submission,
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      });
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== void 0;
  let hasError = errors != null && errors[route.id] !== void 0;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(
      route,
      `No route found to patch children into: routeId = ${routeId}`
    );
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = children.filter(
    (newRoute) => !childrenToPatch.some(
      (existingRoute) => isSameRoute(newRoute, existingRoute)
    )
  );
  let newRoutes = convertRoutesToDataRoutes(
    uniqueChildren,
    mapRouteProperties2,
    [routeId || "_", "patch", String((childrenToPatch == null ? void 0 : childrenToPatch.length) || "0")],
    manifest
  );
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every(
    (aChild, i) => {
      var _a;
      return (_a = existingRoute.children) == null ? void 0 : _a.some((bChild) => isSameRoute(aChild, bChild));
    }
  );
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(
      !isPropertyStaticallyDefined,
      `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`
    );
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided `mapRouteProperties`
    // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
    // since the logic will differ between frameworks.
    ...mapRouteProperties2(routeToUpdate),
    lazy: void 0
  });
}
async function defaultDataStrategy({
  matches
}) {
  let matchesToLoad = matches.filter((m) => m.shouldLoad);
  let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
  return results.reduce(
    (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
    {}
  );
}
async function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, requestContext) {
  let loadRouteDefinitionsPromises = matches.map(
    (m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties2, manifest) : void 0
  );
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
    let resolve = async (handlerOverride) => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(
        type,
        request,
        match,
        loadRoutePromise,
        handlerOverride,
        requestContext
      ) : Promise.resolve({ type: "data", result: void 0 });
    };
    return {
      ...match,
      shouldLoad,
      resolve
    };
  });
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: requestContext
  });
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
  }
  return results;
}
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(
          new Error(
            `You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`
          )
        );
      }
      return handler(
        {
          request,
          params: match.params,
          context: staticContext
        },
        ...ctx !== void 0 ? [ctx] : []
      );
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
        return { type: "data", result: val };
      } catch (e) {
        return { type: "error", result: e };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (loadRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadRoutePromise
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return { type: "data", result: void 0 };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
  } catch (e) {
    return { type: "error", result: e };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  var _a, _b, _c, _d;
  let { result, type } = dataStrategyResult;
  if (isResponse(result)) {
    let data2;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data2 = null;
        } else {
          data2 = await result.json();
        }
      } else {
        data2 = await result.text();
      }
    } catch (e) {
      return { type: "error", error: e };
    }
    if (type === "error") {
      return {
        type: "error",
        error: new ErrorResponseImpl(result.status, result.statusText, data2),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: "data",
      data: data2,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === "error") {
    if (isDataWithResponseInit(result)) {
      if (result.data instanceof Error) {
        return {
          type: "error",
          error: result.data,
          statusCode: (_a = result.init) == null ? void 0 : _a.status
        };
      }
      result = new ErrorResponseImpl(
        ((_b = result.init) == null ? void 0 : _b.status) || 500,
        void 0,
        result.data
      );
    }
    return {
      type: "error",
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : void 0
    };
  }
  if (isDataWithResponseInit(result)) {
    return {
      type: "data",
      data: result.data,
      statusCode: (_c = result.init) == null ? void 0 : _c.status,
      headers: ((_d = result.init) == null ? void 0 : _d.headers) ? new Headers(result.init.headers) : void 0
    };
  }
  return { type: "data", data: result };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
  let location = response.headers.get("Location");
  invariant(
    location,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  );
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(
      0,
      matches.findIndex((m) => m.route.id === routeId) + 1
    );
    location = normalizeTo(
      new URL(request.url),
      trimmedMatches,
      basename,
      location
    );
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = { signal };
  if (submission && isMutationMethod(submission.formMethod)) {
    let { formMethod, formEncType } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({ "Content-Type": formEncType });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(
      !isRedirectResult(result),
      "Cannot handle redirect results in processLoaderData"
    );
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      if (!isStaticHandler) {
        loaderData[id] = ResetLoaderDataSymbol;
      }
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      loaderData[id] = result.data;
      if (result.statusCode && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors = { [pendingActionResult[0]]: pendingError };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
  let { loaderData, errors } = processRouteLoaderData(
    matches,
    results,
    pendingActionResult
  );
  revalidatingFetchers.forEach((rf) => {
    let { key, match, controller } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (controller && controller.signal.aborted) {
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = {
          ...errors,
          [boundaryMatch.route.id]: result.error
        };
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return { loaderData, errors };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
    merged[k] = v;
    return merged;
  }, {});
  for (let match of matches) {
    let id = match.route.id;
    if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: `__shim-error-route__`
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }
    ],
    route
  };
}
function getInternalRouterError(status, {
  pathname,
  routeId,
  method,
  type,
  message
} = {}) {
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = `No route matches URL "${pathname}"`;
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (method) {
      errorMessage = `Invalid request method "${method.toUpperCase()}"`;
    }
  }
  return new ErrorResponseImpl(
    status || 500,
    statusText,
    new Error(errorMessage),
    true
  );
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return { key, result };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath({ ...parsedPath, hash: "" });
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" || result.type === "error");
}
function isRedirectDataStrategyResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
  return result.type === "error";
}
function isRedirectResult(result) {
  return (result && result.type) === "redirect";
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
  return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let { formMethod, formAction, formEncType, text, formData, json } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data2) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: data2
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: data2
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data2) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: data2
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(
      TRANSITIONS_STORAGE_KEY
    );
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(
        TRANSITIONS_STORAGE_KEY,
        JSON.stringify(json)
      );
    } catch (error) {
      warning(
        false,
        `Failed to save applied view transitions in sessionStorage (${error}).`
      );
    }
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}
var DataRouterContext = React.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = React.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var ViewTransitionContext = React.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = React.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = React.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = React.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = React.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = React.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = React.createContext(null);
RouteErrorContext.displayName = "RouteError";
var ENABLE_DEV_WARNINGS = true;
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return React2.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return React2.useContext(LocationContext).location;
}
function useNavigationType() {
  return React2.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useMatch() may be used only in the context of a <Router> component.`
  );
  let { pathname } = useLocation();
  return React2.useMemo(
    () => matchPath(pattern, decodePath(pathname)),
    [pathname, pattern]
  );
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React2.useContext(NavigationContext).static;
  if (!isStatic) {
    React2.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = React2.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = React2.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = React2.useContext(NavigationContext);
  let { matches } = React2.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = React2.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React2.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
var OutletContext = React2.createContext(null);
function useOutletContext() {
  return React2.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = React2.useContext(RouteContext).outlet;
  if (outlet) {
    return React2.createElement(OutletContext.Provider, { value: context }, outlet);
  }
  return outlet;
}
function useParams() {
  let { matches } = React2.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = React2.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return React2.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  var _a;
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2 } = React2.useContext(NavigationContext);
  let { matches: parentMatches } = React2.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (ENABLE_DEV_WARNINGS) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || ((_a = parsedLocationArg.pathname) == null ? void 0 : _a.startsWith(parentPathnameBase)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, { pathname: remainingPathname });
  if (ENABLE_DEV_WARNINGS) {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    future
  );
  if (locationArg && renderedMatches) {
    return React2.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP"
          /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  if (ENABLE_DEV_WARNINGS) {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = React2.createElement(React2.Fragment, null, React2.createElement("p", null, "💿 Hey developer 👋"), React2.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", React2.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", React2.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return React2.createElement(React2.Fragment, null, React2.createElement("h2", null, "Unexpected Application Error!"), React2.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? React2.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = React2.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends React2.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "React Router caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0 ? React2.createElement(RouteContext.Provider, { value: this.props.routeContext }, React2.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = React2.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return React2.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            "route-fallback",
            false,
            "No `HydrateFallback` element provided to render during initial hydration"
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = React2.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return React2.createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        }
      );
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? React2.createElement(
      RenderErrorBoundary,
      {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }
    ) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = React2.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React2.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = React2.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useNavigation() {
  let state = useDataRouterState(
    "useNavigation"
    /* UseNavigation */
  );
  return state.navigation;
}
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(
    "useRevalidator"
    /* UseRevalidator */
  );
  let state = useDataRouterState(
    "useRevalidator"
    /* UseRevalidator */
  );
  return React2.useMemo(
    () => ({
      async revalidate() {
        await dataRouterContext.router.revalidate();
      },
      state: state.revalidation
    }),
    [dataRouterContext.router, state.revalidation]
  );
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState(
    "useMatches"
    /* UseMatches */
  );
  return React2.useMemo(
    () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
    [matches, loaderData]
  );
}
function useLoaderData() {
  let state = useDataRouterState(
    "useLoaderData"
    /* UseLoaderData */
  );
  let routeId = useCurrentRouteId(
    "useLoaderData"
    /* UseLoaderData */
  );
  return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(
    "useRouteLoaderData"
    /* UseRouteLoaderData */
  );
  return state.loaderData[routeId];
}
function useActionData() {
  let state = useDataRouterState(
    "useActionData"
    /* UseActionData */
  );
  let routeId = useCurrentRouteId(
    "useLoaderData"
    /* UseLoaderData */
  );
  return state.actionData ? state.actionData[routeId] : void 0;
}
function useRouteError() {
  var _a;
  let error = React2.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return (_a = state.errors) == null ? void 0 : _a[routeId];
}
function useAsyncValue() {
  let value = React2.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
function useAsyncError() {
  let value = React2.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
var blockerId = 0;
function useBlocker(shouldBlock) {
  let { router: router2, basename } = useDataRouterContext(
    "useBlocker"
    /* UseBlocker */
  );
  let state = useDataRouterState(
    "useBlocker"
    /* UseBlocker */
  );
  let [blockerKey, setBlockerKey] = React2.useState("");
  let blockerFunction = React2.useCallback(
    (arg) => {
      if (typeof shouldBlock !== "function") {
        return !!shouldBlock;
      }
      if (basename === "/") {
        return shouldBlock(arg);
      }
      let { currentLocation, nextLocation, historyAction } = arg;
      return shouldBlock({
        currentLocation: {
          ...currentLocation,
          pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
        },
        nextLocation: {
          ...nextLocation,
          pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
        },
        historyAction
      });
    },
    [basename, shouldBlock]
  );
  React2.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router2.deleteBlocker(key);
  }, [router2]);
  React2.useEffect(() => {
    if (blockerKey !== "") {
      router2.getBlocker(blockerKey, blockerFunction);
    }
  }, [router2, blockerKey, blockerFunction]);
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
  let { router: router2 } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = React2.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React2.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router2.navigate(to);
      } else {
        await router2.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router2, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
var alreadyWarned2 = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}
var ENABLE_DEV_WARNINGS2 = true;
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.element) {
        warning(
          false,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        );
      }
    }
    Object.assign(updates, {
      element: React3.createElement(route.Component),
      Component: void 0
    });
  }
  if (route.HydrateFallback) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.hydrateFallbackElement) {
        warning(
          false,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        );
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: React3.createElement(route.HydrateFallback),
      HydrateFallback: void 0
    });
  }
  if (route.ErrorBoundary) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.errorElement) {
        warning(
          false,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        );
      }
    }
    Object.assign(updates, {
      errorElement: React3.createElement(route.ErrorBoundary),
      ErrorBoundary: void 0
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: createMemoryHistory({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation
  }).initialize();
}
var Deferred2 = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider({
  router: router2,
  flushSync: reactDomFlushSyncImpl
}) {
  let [state, setStateImpl] = React3.useState(router2.state);
  let [pendingState, setPendingState] = React3.useState();
  let [vtContext, setVtContext] = React3.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = React3.useState();
  let [transition, setTransition] = React3.useState();
  let [interruption, setInterruption] = React3.useState();
  let fetcherData = React3.useRef(/* @__PURE__ */ new Map());
  let setState = React3.useCallback(
    (newState, { deletedFetchers, flushSync: flushSync2, viewTransitionOpts }) => {
      deletedFetchers.forEach((key) => fetcherData.current.delete(key));
      newState.fetchers.forEach((fetcher, key) => {
        if (fetcher.data !== void 0) {
          fetcherData.current.set(key, fetcher.data);
        }
      });
      warnOnce(
        flushSync2 === false || reactDomFlushSyncImpl != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let isViewTransitionAvailable = router2.window != null && router2.window.document != null && typeof router2.window.document.startViewTransition === "function";
      warnOnce(
        viewTransitionOpts == null || isViewTransitionAvailable,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      );
      if (!viewTransitionOpts || !isViewTransitionAvailable) {
        if (reactDomFlushSyncImpl && flushSync2) {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        } else {
          React3.startTransition(() => setStateImpl(newState));
        }
        return;
      }
      if (reactDomFlushSyncImpl && flushSync2) {
        reactDomFlushSyncImpl(() => {
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
          }
          setVtContext({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation
          });
        });
        let t = router2.window.document.startViewTransition(() => {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        });
        t.finished.finally(() => {
          reactDomFlushSyncImpl(() => {
            setRenderDfd(void 0);
            setTransition(void 0);
            setPendingState(void 0);
            setVtContext({ isTransitioning: false });
          });
        });
        reactDomFlushSyncImpl(() => setTransition(t));
        return;
      }
      if (transition) {
        renderDfd && renderDfd.resolve();
        transition.skipTransition();
        setInterruption({
          state: newState,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      } else {
        setPendingState(newState);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      }
    },
    [router2.window, reactDomFlushSyncImpl, transition, renderDfd]
  );
  React3.useLayoutEffect(() => router2.subscribe(setState), [router2, setState]);
  React3.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred2());
    }
  }, [vtContext]);
  React3.useEffect(() => {
    if (renderDfd && pendingState && router2.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router2.window.document.startViewTransition(async () => {
        React3.startTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(void 0);
        setTransition(void 0);
        setPendingState(void 0);
        setVtContext({ isTransitioning: false });
      });
      setTransition(transition2);
    }
  }, [pendingState, renderDfd, router2.window]);
  React3.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  React3.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(void 0);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator2 = React3.useMemo(() => {
    return {
      createHref: router2.createHref,
      encodeLocation: router2.encodeLocation,
      go: (n) => router2.navigate(n),
      push: (to, state2, opts) => router2.navigate(to, {
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state2, opts) => router2.navigate(to, {
        replace: true,
        state: state2,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router2]);
  let basename = router2.basename || "/";
  let dataRouterContext = React3.useMemo(
    () => ({
      router: router2,
      navigator: navigator2,
      static: false,
      basename
    }),
    [router2, navigator2, basename]
  );
  return React3.createElement(React3.Fragment, null, React3.createElement(DataRouterContext.Provider, { value: dataRouterContext }, React3.createElement(DataRouterStateContext.Provider, { value: state }, React3.createElement(FetchersContext.Provider, { value: fetcherData.current }, React3.createElement(ViewTransitionContext.Provider, { value: vtContext }, React3.createElement(
    Router,
    {
      basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: navigator2
    },
    React3.createElement(
      MemoizedDataRoutes,
      {
        routes: router2.routes,
        future: router2.future,
        state
      }
    )
  ))))), null);
}
var MemoizedDataRoutes = React3.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function MemoryRouter({
  basename,
  children,
  initialEntries,
  initialIndex
}) {
  let historyRef = React3.useRef();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React3.useState({
    action: history.action,
    location: history.location
  });
  let setState = React3.useCallback(
    (newState) => {
      React3.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  React3.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return React3.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function Navigate({
  to,
  replace: replace2,
  state,
  relative
}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    `<Navigate> may be used only in the context of a <Router> component.`
  );
  let { static: isStatic } = React3.useContext(NavigationContext);
  warning(
    !isStatic,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
  );
  let { matches } = React3.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let navigate = useNavigate();
  let path = resolveTo(
    to,
    getResolveToMatches(matches),
    locationPathname,
    relative === "path"
  );
  let jsonPath = JSON.stringify(path);
  React3.useEffect(() => {
    navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
  }, [navigate, jsonPath, relative, replace2, state]);
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React3.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React3.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return React3.createElement(NavigationContext.Provider, { value: navigationContext }, React3.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function Await({
  children,
  errorElement,
  resolve
}) {
  return React3.createElement(AwaitErrorBoundary, { resolve, errorElement }, React3.createElement(ResolveAwait, null, children));
}
var AwaitErrorBoundary = class extends React3.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "<Await> caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    let { children, errorElement, resolve } = this.props;
    let promise = null;
    let status = 0;
    if (!(resolve instanceof Promise)) {
      status = 1;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_data", { get: () => resolve });
    } else if (this.state.error) {
      status = 2;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {
      });
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_error", { get: () => renderError });
    } else if (resolve._tracked) {
      promise = resolve;
      status = "_error" in promise ? 2 : "_data" in promise ? 1 : 0;
    } else {
      status = 0;
      Object.defineProperty(resolve, "_tracked", { get: () => true });
      promise = resolve.then(
        (data2) => Object.defineProperty(resolve, "_data", { get: () => data2 }),
        (error) => Object.defineProperty(resolve, "_error", { get: () => error })
      );
    }
    if (status === 2 && !errorElement) {
      throw promise._error;
    }
    if (status === 2) {
      return React3.createElement(AwaitContext.Provider, { value: promise, children: errorElement });
    }
    if (status === 1) {
      return React3.createElement(AwaitContext.Provider, { value: promise, children });
    }
    throw promise;
  }
};
function ResolveAwait({
  children
}) {
  let data2 = useAsyncValue();
  let toRender = typeof children === "function" ? children(data2) : children;
  return React3.createElement(React3.Fragment, null, toRender);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  React3.Children.forEach(children, (element, index) => {
    if (!React3.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === React3.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
function renderMatches(matches) {
  return _renderMatches(matches);
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
function createSearchParams(init = "") {
  return new URLSearchParams(
    typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
      let value = init[key];
      return memo2.concat(
        Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
      );
    }, [])
  );
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    import.meta.hot) {
      throw error;
    }
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function getKeyedLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _a;
    let module = routeModules[match.route.id];
    let route = manifest.routes[match.route.id];
    return [
      route && route.css ? route.css.map((href) => ({ rel: "stylesheet", href })) : [],
      ((_a = module == null ? void 0 : module.links) == null ? void 0 : _a.call(module)) || []
    ];
  }).flat(2);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupeLinkDescriptors(descriptors, preloads);
}
async function prefetchStyleLinks(route, routeModule) {
  if (!route.css && !routeModule.links || !isPreloadSupported()) return;
  let descriptors = [];
  if (route.css) {
    descriptors.push(...route.css.map((href) => ({ rel: "stylesheet", href })));
  }
  if (routeModule.links) {
    descriptors.push(...routeModule.links());
  }
  if (descriptors.length === 0) return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter(
    (link) => (!link.media || window.matchMedia(link.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${link.href}"]`)
  );
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _a;
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_a = currentMatches[index].route.path) == null ? void 0 : _a.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      var _a;
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: ((_a = currentMatches[0]) == null ? void 0 : _a.params) || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifestPatch.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
var _isPreloadSupported;
function isPreloadSupported() {
  if (_isPreloadSupported !== void 0) {
    return _isPreloadSupported;
  }
  let el = document.createElement("link");
  _isPreloadSupported = el.relList.supports("preload");
  el = null;
  return _isPreloadSupported;
}
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return { __html: html };
}
async function createRequestInit(request) {
  let init = { signal: request.signal };
  if (request.method !== "GET") {
    init.method = request.method;
    let contentType = request.headers.get("Content-Type");
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = JSON.stringify(await request.json());
    } else if (contentType && /\btext\/plain\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = await request.text();
    } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
      init.body = new URLSearchParams(await request.text());
    } else {
      init.body = await request.formData();
    }
  }
  return init;
}
var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
function StreamTransfer({
  context,
  identifier,
  reader,
  textDecoder,
  nonce
}) {
  if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
    return null;
  }
  if (!context.renderMeta.streamCache) {
    context.renderMeta.streamCache = {};
  }
  let { streamCache } = context.renderMeta;
  let promise = streamCache[identifier];
  if (!promise) {
    promise = streamCache[identifier] = reader.read().then((result) => {
      streamCache[identifier].result = {
        done: result.done,
        value: textDecoder.decode(result.value, { stream: true })
      };
    }).catch((e) => {
      streamCache[identifier].error = e;
    });
  }
  if (promise.error) {
    throw promise.error;
  }
  if (promise.result === void 0) {
    throw promise;
  }
  let { done, value } = promise.result;
  let scriptTag = value ? React4.createElement(
    "script",
    {
      nonce,
      dangerouslySetInnerHTML: {
        __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(
          JSON.stringify(value)
        )});`
      }
    }
  ) : null;
  if (done) {
    return React4.createElement(React4.Fragment, null, scriptTag, React4.createElement(
      "script",
      {
        nonce,
        dangerouslySetInnerHTML: {
          __html: `window.__reactRouterContext.streamController.close();`
        }
      }
    ));
  } else {
    return React4.createElement(React4.Fragment, null, scriptTag, React4.createElement(React4.Suspense, null, React4.createElement(
      StreamTransfer,
      {
        context,
        identifier: identifier + 1,
        reader,
        textDecoder,
        nonce
      }
    )));
  }
}
function getSingleFetchDataStrategy(manifest, routeModules, getRouter) {
  return async ({ request, matches, fetcherKey }) => {
    if (request.method !== "GET") {
      return singleFetchActionStrategy(request, matches);
    }
    if (fetcherKey) {
      return singleFetchLoaderFetcherStrategy(request, matches);
    }
    return singleFetchLoaderNavigationStrategy(
      manifest,
      routeModules,
      getRouter(),
      request,
      matches
    );
  };
}
async function singleFetchActionStrategy(request, matches) {
  let actionMatch = matches.find((m) => m.shouldLoad);
  invariant2(actionMatch, "No action match found");
  let actionStatus = void 0;
  let result = await actionMatch.resolve(async (handler) => {
    let result2 = await handler(async () => {
      let url = singleFetchUrl(request.url);
      let init = await createRequestInit(request);
      let { data: data2, status } = await fetchAndDecode(url, init);
      actionStatus = status;
      return unwrapSingleFetchResult(
        data2,
        actionMatch.route.id
      );
    });
    return result2;
  });
  if (isResponse(result.result) || isRouteErrorResponse(result.result)) {
    return { [actionMatch.route.id]: result };
  }
  return {
    [actionMatch.route.id]: {
      type: result.type,
      result: data(result.result, actionStatus)
    }
  };
}
async function singleFetchLoaderNavigationStrategy(manifest, routeModules, router2, request, matches) {
  let routesParams = /* @__PURE__ */ new Set();
  let foundOptOutRoute = false;
  let routeDfds = matches.map(() => createDeferred2());
  let routesLoadedPromise = Promise.all(routeDfds.map((d) => d.promise));
  let singleFetchDfd = createDeferred2();
  let url = stripIndexParam(singleFetchUrl(request.url));
  let init = await createRequestInit(request);
  let results = {};
  let resolvePromise = Promise.all(
    matches.map(
      async (m, i) => m.resolve(async (handler) => {
        var _a;
        routeDfds[i].resolve();
        let manifestRoute = manifest.routes[m.route.id];
        if (!m.shouldLoad) {
          if (!router2.state.initialized) {
            return;
          }
          if (m.route.id in router2.state.loaderData && manifestRoute && manifestRoute.hasLoader && ((_a = routeModules[m.route.id]) == null ? void 0 : _a.shouldRevalidate)) {
            foundOptOutRoute = true;
            return;
          }
        }
        if (manifestRoute && manifestRoute.hasClientLoader) {
          if (manifestRoute.hasLoader) {
            foundOptOutRoute = true;
          }
          try {
            let result = await fetchSingleLoader(
              handler,
              url,
              init,
              m.route.id
            );
            results[m.route.id] = { type: "data", result };
          } catch (e) {
            results[m.route.id] = { type: "error", result: e };
          }
          return;
        }
        if (manifestRoute && manifestRoute.hasLoader) {
          routesParams.add(m.route.id);
        }
        try {
          let result = await handler(async () => {
            let data2 = await singleFetchDfd.promise;
            return unwrapSingleFetchResults(data2, m.route.id);
          });
          results[m.route.id] = {
            type: "data",
            result
          };
        } catch (e) {
          results[m.route.id] = {
            type: "error",
            result: e
          };
        }
      })
    )
  );
  await routesLoadedPromise;
  if ((!router2.state.initialized || routesParams.size === 0) && !window.__reactRouterHdrActive) {
    singleFetchDfd.resolve({});
  } else {
    try {
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          matches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      let data2 = await fetchAndDecode(url, init);
      singleFetchDfd.resolve(data2.data);
    } catch (e) {
      singleFetchDfd.reject(e);
    }
  }
  await resolvePromise;
  return results;
}
async function singleFetchLoaderFetcherStrategy(request, matches) {
  let fetcherMatch = matches.find((m) => m.shouldLoad);
  invariant2(fetcherMatch, "No fetcher match found");
  let result = await fetcherMatch.resolve(async (handler) => {
    let url = stripIndexParam(singleFetchUrl(request.url));
    let init = await createRequestInit(request);
    return fetchSingleLoader(handler, url, init, fetcherMatch.route.id);
  });
  return { [fetcherMatch.route.id]: result };
}
function fetchSingleLoader(handler, url, init, routeId) {
  return handler(async () => {
    let singleLoaderUrl = new URL(url);
    singleLoaderUrl.searchParams.set("_routes", routeId);
    let { data: data2 } = await fetchAndDecode(singleLoaderUrl, init);
    return unwrapSingleFetchResults(data2, routeId);
  });
}
function stripIndexParam(url) {
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return url;
}
function singleFetchUrl(reqUrl) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.data";
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
  }
  return url;
}
async function fetchAndDecode(url, init) {
  let res = await fetch(url, init);
  if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
    throw new ErrorResponseImpl(404, "Not Found", true);
  }
  invariant2(res.body, "No response body to decode");
  try {
    let decoded = await decodeViaTurboStream(res.body, window);
    return { status: res.status, data: decoded.value };
  } catch (e) {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function decodeViaTurboStream(body, global2) {
  return decode(body, {
    plugins: [
      (type, ...rest) => {
        if (type === "SanitizedError") {
          let [name, message, stack] = rest;
          let Constructor = Error;
          if (name && name in global2 && typeof global2[name] === "function") {
            Constructor = global2[name];
          }
          let error = new Constructor(message);
          error.stack = stack;
          return { value: error };
        }
        if (type === "ErrorResponse") {
          let [data2, status, statusText] = rest;
          return {
            value: new ErrorResponseImpl(status, statusText, data2)
          };
        }
        if (type === "SingleFetchRedirect") {
          return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
        }
        if (type === "SingleFetchClassInstance") {
          return { value: rest[0] };
        }
        if (type === "SingleFetchFallback") {
          return { value: void 0 };
        }
      }
    ]
  });
}
function unwrapSingleFetchResults(results, routeId) {
  let redirect2 = results[SingleFetchRedirectSymbol];
  if (redirect2) {
    return unwrapSingleFetchResult(redirect2, routeId);
  }
  return results[routeId] !== void 0 ? unwrapSingleFetchResult(results[routeId], routeId) : null;
}
function unwrapSingleFetchResult(result, routeId) {
  if ("error" in result) {
    throw result.error;
  } else if ("redirect" in result) {
    let headers = {};
    if (result.revalidate) {
      headers["X-Remix-Revalidate"] = "yes";
    }
    if (result.reload) {
      headers["X-Remix-Reload-Document"] = "yes";
    }
    if (result.replace) {
      headers["X-Remix-Replace"] = "yes";
    }
    return redirect(result.redirect, { status: result.status, headers });
  } else if ("data" in result) {
    return result.data;
  } else {
    throw new Error(`No response found for routeId "${routeId}"`);
  }
}
function createDeferred2() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}
var RemixErrorBoundary = class extends React5.Component {
  constructor(props) {
    super(props);
    this.state = { error: props.error || null, location: props.location };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return { error: props.error || null, location: props.location };
    }
    return { error: props.error || state.error, location: state.location };
  }
  render() {
    if (this.state.error) {
      return React5.createElement(
        RemixRootDefaultErrorBoundary,
        {
          error: this.state.error,
          isOutsideRemixApp: true
        }
      );
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error,
  isOutsideRemixApp
}) {
  console.error(error);
  let heyDeveloper = React5.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
      }
    }
  );
  if (isRouteErrorResponse(error)) {
    return React5.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, React5.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
  }
  let errorInstance;
  if (error instanceof Error) {
    errorInstance = error;
  } else {
    let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    errorInstance = new Error(errorString);
  }
  return React5.createElement(
    BoundaryShell,
    {
      title: "Application Error!",
      isOutsideRemixApp
    },
    React5.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    React5.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      },
      errorInstance.stack
    ),
    heyDeveloper
  );
}
function BoundaryShell({
  title,
  renderScripts,
  isOutsideRemixApp,
  children
}) {
  var _a;
  let { routeModules } = useFrameworkContext();
  if (((_a = routeModules.root) == null ? void 0 : _a.Layout) && !isOutsideRemixApp) {
    return children;
  }
  return React5.createElement("html", { lang: "en" }, React5.createElement("head", null, React5.createElement("meta", { charSet: "utf-8" }), React5.createElement(
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }
  ), React5.createElement("title", null, title)), React5.createElement("body", null, React5.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children, renderScripts ? React5.createElement(Scripts, null) : null)));
}
function RemixRootDefaultHydrateFallback() {
  return React6.createElement(BoundaryShell, { title: "Loading...", renderScripts: true }, React6.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
      }
    }
  ));
}
function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function getRouteComponents(route, routeModule, isSpaMode) {
  let Component4 = getRouteModuleComponent(routeModule);
  let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
  let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => React7.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError() }) : void 0;
  if (route.id === "root" && routeModule.Layout) {
    return {
      ...Component4 ? {
        element: React7.createElement(routeModule.Layout, null, React7.createElement(Component4, null))
      } : { Component: Component4 },
      ...ErrorBoundary ? {
        errorElement: React7.createElement(routeModule.Layout, null, React7.createElement(ErrorBoundary, null))
      } : { ErrorBoundary },
      ...HydrateFallback ? {
        hydrateFallbackElement: React7.createElement(routeModule.Layout, null, React7.createElement(HydrateFallback, null))
      } : { HydrateFallback }
    };
  }
  return { Component: Component4, ErrorBoundary, HydrateFallback };
}
function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
  return (routesByParentId[parentId] || []).map((route) => {
    let routeModule = routeModules[route.id];
    invariant2(
      routeModule,
      "No `routeModule` available to create server routes"
    );
    let dataRoute = {
      ...getRouteComponents(route, routeModule, isSpaMode),
      caseSensitive: route.caseSensitive,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: routeModule.handle,
      // For SPA Mode, all routes are lazy except root.  However we tell the
      // router root is also lazy here too since we don't need a full
      // implementation - we just need a `lazy` prop to tell the RR rendering
      // where to stop which is always at the root route in SPA mode
      lazy: isSpaMode ? () => spaModeLazyPromise : void 0,
      // For partial hydration rendering, we need to indicate when the route
      // has a loader/clientLoader, but it won't ever be called during the static
      // render, so just give it a no-op function so we can render down to the
      // proper fallback
      loader: route.hasLoader || route.hasClientLoader ? () => null : void 0
      // We don't need action/shouldRevalidate on these routes since they're
      // for a static render
    };
    let children = createServerRoutes(
      manifest,
      routeModules,
      future,
      isSpaMode,
      route.id,
      routesByParentId,
      spaModeLazyPromise
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, future, isSpaMode) {
  return createClientRoutes(
    manifest,
    routeModulesCache,
    initialState,
    isSpaMode,
    "",
    groupRoutesByParentId(manifest),
    needsRevalidation
  );
}
function preventInvalidServerHandlerCall(type, route, isSpaMode) {
  if (isSpaMode) {
    let fn2 = type === "action" ? "serverAction()" : "serverLoader()";
    let msg2 = `You cannot call ${fn2} in SPA Mode (routeId: "${route.id}")`;
    console.error(msg2);
    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg2), true);
  }
  let fn = type === "action" ? "serverAction()" : "serverLoader()";
  let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
  if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
    console.error(msg);
    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
  }
}
function noActionDefinedError(type, routeId) {
  let article = type === "clientAction" ? "a" : "an";
  let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
  console.error(msg);
  throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
}
function createClientRoutes(manifest, routeModulesCache, initialState, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
  return (routesByParentId[parentId] || []).map((route) => {
    var _a, _b, _c;
    let routeModule = routeModulesCache[route.id];
    function fetchServerHandler(singleFetch) {
      invariant2(
        typeof singleFetch === "function",
        "No single fetch function available for route handler"
      );
      return singleFetch();
    }
    function fetchServerLoader(singleFetch) {
      if (!route.hasLoader) return Promise.resolve(null);
      return fetchServerHandler(singleFetch);
    }
    function fetchServerAction(singleFetch) {
      if (!route.hasAction) {
        throw noActionDefinedError("action", route.id);
      }
      return fetchServerHandler(singleFetch);
    }
    async function prefetchStylesAndCallHandler(handler) {
      let cachedModule = routeModulesCache[route.id];
      let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
      try {
        return handler();
      } finally {
        await linkPrefetchPromise;
      }
    }
    let dataRoute = {
      id: route.id,
      index: route.index,
      path: route.path
    };
    if (routeModule) {
      Object.assign(dataRoute, {
        ...dataRoute,
        ...getRouteComponents(route, routeModule, isSpaMode),
        handle: routeModule.handle,
        shouldRevalidate: getShouldRevalidateFunction(
          routeModule,
          route.id,
          needsRevalidation
        )
      });
      let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
      let initialData = hasInitialData ? (_a = initialState == null ? void 0 : initialState.loaderData) == null ? void 0 : _a[route.id] : void 0;
      let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
      let initialError = hasInitialError ? (_b = initialState == null ? void 0 : initialState.errors) == null ? void 0 : _b[route.id] : void 0;
      let isHydrationRequest = needsRevalidation == null && (((_c = routeModule.clientLoader) == null ? void 0 : _c.hydrate) === true || !route.hasLoader);
      dataRoute.loader = async ({ request, params }, singleFetch) => {
        try {
          let result = await prefetchStylesAndCallHandler(async () => {
            invariant2(
              routeModule,
              "No `routeModule` available for critical-route loader"
            );
            if (!routeModule.clientLoader) {
              if (isSpaMode) return null;
              return fetchServerLoader(singleFetch);
            }
            return routeModule.clientLoader({
              request,
              params,
              async serverLoader() {
                preventInvalidServerHandlerCall("loader", route, isSpaMode);
                if (isHydrationRequest) {
                  if (hasInitialData) {
                    return initialData;
                  }
                  if (hasInitialError) {
                    throw initialError;
                  }
                }
                return fetchServerLoader(singleFetch);
              }
            });
          });
          return result;
        } finally {
          isHydrationRequest = false;
        }
      };
      dataRoute.loader.hydrate = shouldHydrateRouteLoader(
        route,
        routeModule,
        isSpaMode
      );
      dataRoute.action = ({ request, params }, singleFetch) => {
        return prefetchStylesAndCallHandler(async () => {
          invariant2(
            routeModule,
            "No `routeModule` available for critical-route action"
          );
          if (!routeModule.clientAction) {
            if (isSpaMode) {
              throw noActionDefinedError("clientAction", route.id);
            }
            return fetchServerAction(singleFetch);
          }
          return routeModule.clientAction({
            request,
            params,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route, isSpaMode);
              return fetchServerAction(singleFetch);
            }
          });
        });
      };
    } else {
      if (!route.hasClientLoader) {
        dataRoute.loader = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
          if (isSpaMode) return Promise.resolve(null);
          return fetchServerLoader(singleFetch);
        });
      }
      if (!route.hasClientAction) {
        dataRoute.action = ({ request }, singleFetch) => prefetchStylesAndCallHandler(() => {
          if (isSpaMode) {
            throw noActionDefinedError("clientAction", route.id);
          }
          return fetchServerAction(singleFetch);
        });
      }
      dataRoute.lazy = async () => {
        let mod = await loadRouteModuleWithBlockingLinks(
          route,
          routeModulesCache
        );
        let lazyRoute = { ...mod };
        if (mod.clientLoader) {
          let clientLoader = mod.clientLoader;
          lazyRoute.loader = (args, singleFetch) => clientLoader({
            ...args,
            async serverLoader() {
              preventInvalidServerHandlerCall("loader", route, isSpaMode);
              return fetchServerLoader(singleFetch);
            }
          });
        }
        if (mod.clientAction) {
          let clientAction = mod.clientAction;
          lazyRoute.action = (args, singleFetch) => clientAction({
            ...args,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route, isSpaMode);
              return fetchServerAction(singleFetch);
            }
          });
        }
        return {
          ...lazyRoute.loader ? { loader: lazyRoute.loader } : {},
          ...lazyRoute.action ? { action: lazyRoute.action } : {},
          hasErrorBoundary: lazyRoute.hasErrorBoundary,
          shouldRevalidate: getShouldRevalidateFunction(
            lazyRoute,
            route.id,
            needsRevalidation
          ),
          handle: lazyRoute.handle,
          // No need to wrap these in layout since the root route is never
          // loaded via route.lazy()
          Component: lazyRoute.Component,
          ErrorBoundary: lazyRoute.ErrorBoundary
        };
      };
    }
    let children = createClientRoutes(
      manifest,
      routeModulesCache,
      initialState,
      isSpaMode,
      route.id,
      routesByParentId,
      needsRevalidation
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function getShouldRevalidateFunction(route, routeId, needsRevalidation) {
  if (needsRevalidation) {
    return wrapShouldRevalidateForHdr(
      routeId,
      route.shouldRevalidate,
      needsRevalidation
    );
  }
  if (route.shouldRevalidate) {
    let fn = route.shouldRevalidate;
    return (opts) => fn({ ...opts, defaultShouldRevalidate: true });
  }
  return route.shouldRevalidate;
}
function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
  let handledRevalidation = false;
  return (arg) => {
    if (!handledRevalidation) {
      handledRevalidation = true;
      return needsRevalidation.has(routeId);
    }
    return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(route, routeModule);
  return {
    Component: getRouteModuleComponent(routeModule),
    ErrorBoundary: routeModule.ErrorBoundary,
    clientAction: routeModule.clientAction,
    clientLoader: routeModule.clientLoader,
    handle: routeModule.handle,
    links: routeModule.links,
    meta: routeModule.meta,
    shouldRevalidate: routeModule.shouldRevalidate
  };
}
function getRouteModuleComponent(routeModule) {
  if (routeModule.default == null) return void 0;
  let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
  if (!isEmptyObject) {
    return routeModule.default;
  }
}
function shouldHydrateRouteLoader(route, routeModule, isSpaMode) {
  return isSpaMode && route.id !== "root" || routeModule.clientLoader != null && (routeModule.clientLoader.hydrate === true || route.hasLoader !== true);
}
var nextPaths = /* @__PURE__ */ new Set();
var discoveredPathsMaxSize = 1e3;
var discoveredPaths = /* @__PURE__ */ new Set();
var URL_LIMIT = 7680;
function isFogOfWarEnabled(isSpaMode) {
  return !isSpaMode;
}
function getPartialManifest(manifest, router2) {
  let routeIds = new Set(router2.state.matches.map((m) => m.route.id));
  let segments = router2.state.location.pathname.split("/").filter(Boolean);
  let paths = ["/"];
  segments.pop();
  while (segments.length > 0) {
    paths.push(`/${segments.join("/")}`);
    segments.pop();
  }
  paths.forEach((path) => {
    let matches = matchRoutes(router2.routes, path, router2.basename);
    if (matches) {
      matches.forEach((m) => routeIds.add(m.route.id));
    }
  });
  let initialRoutes = [...routeIds].reduce(
    (acc, id) => Object.assign(acc, { [id]: manifest.routes[id] }),
    {}
  );
  return {
    ...manifest,
    routes: initialRoutes
  };
}
function getPatchRoutesOnNavigationFunction(manifest, routeModules, isSpaMode, basename) {
  if (!isFogOfWarEnabled(isSpaMode)) {
    return void 0;
  }
  return async ({ path, patch }) => {
    if (discoveredPaths.has(path)) {
      return;
    }
    await fetchAndApplyManifestPatches(
      [path],
      manifest,
      routeModules,
      isSpaMode,
      basename,
      patch
    );
  };
}
function useFogOFWarDiscovery(router2, manifest, routeModules, isSpaMode) {
  React8.useEffect(() => {
    var _a;
    if (!isFogOfWarEnabled(isSpaMode) || ((_a = navigator.connection) == null ? void 0 : _a.saveData) === true) {
      return;
    }
    function registerElement(el) {
      let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
      if (!path) {
        return;
      }
      let url = new URL(path, window.location.origin);
      if (!discoveredPaths.has(url.pathname)) {
        nextPaths.add(url.pathname);
      }
    }
    async function fetchPatches() {
      let lazyPaths = Array.from(nextPaths.keys()).filter((path) => {
        if (discoveredPaths.has(path)) {
          nextPaths.delete(path);
          return false;
        }
        return true;
      });
      if (lazyPaths.length === 0) {
        return;
      }
      try {
        await fetchAndApplyManifestPatches(
          lazyPaths,
          manifest,
          routeModules,
          isSpaMode,
          router2.basename,
          router2.patchRoutes
        );
      } catch (e) {
        console.error("Failed to fetch manifest patches", e);
      }
    }
    document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => registerElement(el));
    fetchPatches();
    let debouncedFetchPatches = debounce(fetchPatches, 100);
    function isElement(node) {
      return node.nodeType === Node.ELEMENT_NODE;
    }
    let observer = new MutationObserver((records) => {
      let elements = /* @__PURE__ */ new Set();
      records.forEach((r) => {
        [r.target, ...r.addedNodes].forEach((node) => {
          if (!isElement(node)) return;
          if (node.tagName === "A" && node.getAttribute("data-discover")) {
            elements.add(node);
          } else if (node.tagName === "FORM" && node.getAttribute("data-discover")) {
            elements.add(node);
          }
          if (node.tagName !== "A") {
            node.querySelectorAll("a[data-discover], form[data-discover]").forEach((el) => elements.add(el));
          }
        });
      });
      elements.forEach((el) => registerElement(el));
      debouncedFetchPatches();
    });
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-discover", "href", "action"]
    });
    return () => observer.disconnect();
  }, [isSpaMode, manifest, routeModules, router2]);
}
async function fetchAndApplyManifestPatches(paths, manifest, routeModules, isSpaMode, basename, patchRoutes) {
  let manifestPath = `${basename != null ? basename : "/"}/__manifest`.replace(
    /\/+/g,
    "/"
  );
  let url = new URL(manifestPath, window.location.origin);
  paths.sort().forEach((path) => url.searchParams.append("p", path));
  url.searchParams.set("version", manifest.version);
  if (url.toString().length > URL_LIMIT) {
    nextPaths.clear();
    return;
  }
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  } else if (res.status >= 400) {
    throw new Error(await res.text());
  }
  let serverPatches = await res.json();
  let knownRoutes = new Set(Object.keys(manifest.routes));
  let patches = Object.values(serverPatches).reduce((acc, route) => {
    if (route && !knownRoutes.has(route.id)) {
      acc[route.id] = route;
    }
    return acc;
  }, {});
  Object.assign(manifest.routes, patches);
  paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
  let parentIds = /* @__PURE__ */ new Set();
  Object.values(patches).forEach((patch) => {
    if (patch && (!patch.parentId || !patches[patch.parentId])) {
      parentIds.add(patch.parentId);
    }
  });
  parentIds.forEach(
    (parentId) => patchRoutes(
      parentId || null,
      createClientRoutes(patches, routeModules, null, isSpaMode, parentId)
    )
  );
}
function addToFifoQueue(path, queue) {
  if (queue.size >= discoveredPathsMaxSize) {
    let first = queue.values().next().value;
    queue.delete(first);
  }
  queue.add(path);
}
function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}
function useDataRouterContext2() {
  let context = React9.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = React9.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = React9.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = React9.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = React9.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = React9.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React9.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = React9.useRef(null);
  React9.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  React9.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function getActiveMatches(matches, errors, isSpaMode) {
  if (isSpaMode && !isHydrated) {
    return [matches[0]];
  }
  if (errors) {
    let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
    return matches.slice(0, errorIdx + 1);
  }
  return matches;
}
function Links() {
  let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
  let { errors, matches: routerMatches } = useDataRouterStateContext();
  let matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let keyedLinks = React9.useMemo(
    () => getKeyedLinksForMatches(matches, routeModules, manifest),
    [matches, routeModules, manifest]
  );
  return React9.createElement(React9.Fragment, null, criticalCss ? React9.createElement("style", { dangerouslySetInnerHTML: { __html: criticalCss } }) : null, keyedLinks.map(
    ({ key, link }) => isPageLinkDescriptor(link) ? React9.createElement(PrefetchPageLinks, { key, ...link }) : React9.createElement("link", { key, ...link })
  ));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let { router: router2 } = useDataRouterContext2();
  let matches = React9.useMemo(
    () => matchRoutes(router2.routes, page, router2.basename),
    [router2.routes, page, router2.basename]
  );
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return React9.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = React9.useState([]);
  React9.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = React9.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = React9.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = React9.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      var _a;
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && ((_a = routeModules[m.route.id]) == null ? void 0 : _a.shouldRevalidate)) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page);
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = React9.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return React9.createElement(React9.Fragment, null, dataHrefs.map((href) => React9.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => React9.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    React9.createElement("link", { key, ...link })
  )));
}
function Meta() {
  let { isSpaMode, routeModules } = useFrameworkContext();
  let {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext();
  let location = useLocation();
  let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let error = null;
  if (errors) {
    error = errors[_matches[_matches.length - 1].route.id];
  }
  let meta = [];
  let leafMeta = null;
  let matches = [];
  for (let i = 0; i < _matches.length; i++) {
    let _match = _matches[i];
    let routeId = _match.route.id;
    let data2 = loaderData[routeId];
    let params = _match.params;
    let routeModule = routeModules[routeId];
    let routeMeta = [];
    let match = {
      id: routeId,
      data: data2,
      meta: [],
      params: _match.params,
      pathname: _match.pathname,
      handle: _match.route.handle,
      error
    };
    matches[i] = match;
    if (routeModule == null ? void 0 : routeModule.meta) {
      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data: data2,
        params,
        location,
        matches,
        error
      }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
    } else if (leafMeta) {
      routeMeta = [...leafMeta];
    }
    routeMeta = routeMeta || [];
    if (!Array.isArray(routeMeta)) {
      throw new Error(
        "The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta"
      );
    }
    match.meta = routeMeta;
    matches[i] = match;
    meta = [...routeMeta];
    leafMeta = meta;
  }
  return React9.createElement(React9.Fragment, null, meta.flat().map((metaProps) => {
    if (!metaProps) {
      return null;
    }
    if ("tagName" in metaProps) {
      let { tagName, ...rest } = metaProps;
      if (!isValidMetaTag(tagName)) {
        console.warn(
          `A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`
        );
        return null;
      }
      let Comp = tagName;
      return React9.createElement(Comp, { key: JSON.stringify(rest), ...rest });
    }
    if ("title" in metaProps) {
      return React9.createElement("title", { key: "title" }, String(metaProps.title));
    }
    if ("charset" in metaProps) {
      metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
      delete metaProps.charset;
    }
    if ("charSet" in metaProps && metaProps.charSet != null) {
      return typeof metaProps.charSet === "string" ? React9.createElement("meta", { key: "charSet", charSet: metaProps.charSet }) : null;
    }
    if ("script:ld+json" in metaProps) {
      try {
        let json = JSON.stringify(metaProps["script:ld+json"]);
        return React9.createElement(
          "script",
          {
            key: `script:ld+json:${json}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: json }
          }
        );
      } catch (err) {
        return null;
      }
    }
    return React9.createElement("meta", { key: JSON.stringify(metaProps), ...metaProps });
  }));
}
function isValidMetaTag(tagName) {
  return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
var isHydrated = false;
function Scripts(props) {
  let { manifest, serverHandoffString, isSpaMode, renderMeta } = useFrameworkContext();
  let { router: router2, static: isStatic, staticContext } = useDataRouterContext2();
  let { matches: routerMatches } = useDataRouterStateContext();
  let enableFogOfWar = isFogOfWarEnabled(isSpaMode);
  if (renderMeta) {
    renderMeta.didRenderScripts = true;
  }
  let matches = getActiveMatches(routerMatches, null, isSpaMode);
  React9.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = React9.useMemo(() => {
    var _a;
    let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
    let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
    let routeModulesScript = !isStatic ? " " : `${((_a = manifest.hmr) == null ? void 0 : _a.runtime) ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map(
      (match, index) => `import * as route${index} from ${JSON.stringify(
        manifest.routes[match.route.id].module
      )};`
    ).join("\n")}
  ${enableFogOfWar ? (
      // Inline a minimal manifest with the SSR matches
      `window.__reactRouterManifest = ${JSON.stringify(
        getPartialManifest(manifest, router2),
        null,
        2
      )};`
    ) : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return React9.createElement(React9.Fragment, null, React9.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(contextScript),
        type: void 0
      }
    ), React9.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(routeModulesScript),
        type: "module",
        async: true
      }
    ));
  }, []);
  let routePreloads = matches.map((match) => {
    let route = manifest.routes[match.route.id];
    return route ? (route.imports || []).concat([route.module]) : [];
  }).flat(1);
  let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return isHydrated ? null : React9.createElement(React9.Fragment, null, !enableFogOfWar ? React9.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.url,
      crossOrigin: props.crossOrigin
    }
  ) : null, React9.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.entry.module,
      crossOrigin: props.crossOrigin
    }
  ), dedupe(preloads).map((path) => React9.createElement(
    "link",
    {
      key: path,
      rel: "modulepreload",
      href: path,
      crossOrigin: props.crossOrigin
    }
  )), initialScripts);
}
function dedupe(array) {
  return [...new Set(array)];
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.0.1";
  }
} catch (e) {
}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: createBrowserHistory({ window: opts == null ? void 0 : opts.window }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: createHashHistory({ window: opts == null ? void 0 : opts.window }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts == null ? void 0 : opts.dataStrategy,
    patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  let state = window == null ? void 0 : window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = {
      ...state,
      errors: deserializeErrors(state.errors)
    };
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  let historyRef = React10.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React10.useState({
    action: history.action,
    location: history.location
  });
  let setState = React10.useCallback(
    (newState) => {
      React10.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return React10.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HashRouter({ basename, children, window: window2 }) {
  let historyRef = React10.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = React10.useState({
    action: history.action,
    location: history.location
  });
  let setState = React10.useCallback(
    (newState) => {
      React10.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return React10.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HistoryRouter({
  basename,
  children,
  history
}) {
  let [state, setStateImpl] = React10.useState({
    action: history.action,
    location: history.location
  });
  let setState = React10.useCallback(
    (newState) => {
      React10.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  React10.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return React10.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = React10.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = React10.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      React10.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? React10.createElement(React10.Fragment, null, link, React10.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = React10.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location = useLocation();
    let routerState = React10.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = React10.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return React10.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = React10.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return React10.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function ScrollRestoration({
  getKey,
  storageKey,
  ...props
}) {
  let remixContext = React10.useContext(FrameworkContext);
  let { basename } = React10.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  useScrollRestoration({ getKey, storageKey });
  let ssrKey = React10.useMemo(
    () => {
      if (!remixContext || !getKey) return null;
      let userKey = getScrollRestorationKey(
        location,
        matches,
        basename,
        getKey
      );
      return userKey !== location.key ? userKey : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!remixContext || remixContext.isSpaMode) {
    return null;
  }
  let restoreScroll = ((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  }).toString();
  return React10.createElement(
    "script",
    {
      ...props,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `(${restoreScroll})(${JSON.stringify(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        )}, ${JSON.stringify(ssrKey)})`
      }
    }
  );
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = React10.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useDataRouterState2(hookName) {
  let state = React10.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError2(hookName));
  return state;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return React10.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
function useSearchParams(defaultInit) {
  warning(
    typeof URLSearchParams !== "undefined",
    `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`
  );
  let defaultSearchParamsRef = React10.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = React10.useRef(false);
  let location = useLocation();
  let searchParams = React10.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      getSearchParamsForLocation(
        location.search,
        hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current
      )
    ),
    [location.search]
  );
  let navigate = useNavigate();
  let setSearchParams = React10.useCallback(
    (nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(
        typeof nextInit === "function" ? nextInit(searchParams) : nextInit
      );
      hasSetSearchParamsRef.current = true;
      navigate("?" + newSearchParams, navigateOptions);
    },
    [navigate, searchParams]
  );
  return [searchParams, setSearchParams];
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router: router2 } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = React10.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return React10.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router2.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router2.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router2, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = React10.useContext(NavigationContext);
  let routeContext = React10.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useFetcher({
  key
} = {}) {
  var _a;
  let { router: router2 } = useDataRouterContext3(
    "useFetcher"
    /* UseFetcher */
  );
  let state = useDataRouterState2(
    "useFetcher"
    /* UseFetcher */
  );
  let fetcherData = React10.useContext(FetchersContext);
  let route = React10.useContext(RouteContext);
  let routeId = (_a = route.matches[route.matches.length - 1]) == null ? void 0 : _a.route.id;
  invariant(fetcherData, `useFetcher must be used inside a FetchersContext`);
  invariant(route, `useFetcher must be used inside a RouteContext`);
  invariant(
    routeId != null,
    `useFetcher can only be used on routes that contain a unique "id"`
  );
  let defaultKey = React10.useId();
  let [fetcherKey, setFetcherKey] = React10.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  }
  React10.useEffect(() => {
    router2.getFetcher(fetcherKey);
    return () => router2.deleteFetcher(fetcherKey);
  }, [router2, fetcherKey]);
  let load = React10.useCallback(
    async (href, opts) => {
      invariant(routeId, "No routeId available for fetcher.load()");
      await router2.fetch(fetcherKey, routeId, href, opts);
    },
    [fetcherKey, routeId, router2]
  );
  let submitImpl = useSubmit();
  let submit = React10.useCallback(
    async (target, opts) => {
      await submitImpl(target, {
        ...opts,
        navigate: false,
        fetcherKey
      });
    },
    [fetcherKey, submitImpl]
  );
  let FetcherForm = React10.useMemo(() => {
    let FetcherForm2 = React10.forwardRef(
      (props, ref) => {
        return React10.createElement(Form, { ...props, navigate: false, fetcherKey, ref });
      }
    );
    FetcherForm2.displayName = "fetcher.Form";
    return FetcherForm2;
  }, [fetcherKey]);
  let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
  let data2 = fetcherData.get(fetcherKey);
  let fetcherWithComponents = React10.useMemo(
    () => ({
      Form: FetcherForm,
      submit,
      load,
      ...fetcher,
      data: data2
    }),
    [FetcherForm, submit, load, fetcher, data2]
  );
  return fetcherWithComponents;
}
function useFetchers() {
  let state = useDataRouterState2(
    "useFetchers"
    /* UseFetchers */
  );
  return Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
    ...fetcher,
    key
  }));
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location, matches, basename, getKey) {
  let key = null;
  if (getKey) {
    if (basename !== "/") {
      key = getKey(
        {
          ...location,
          pathname: stripBasename(location.pathname, basename) || location.pathname
        },
        matches
      );
    } else {
      key = getKey(location, matches);
    }
  }
  if (key == null) {
    key = location.key;
  }
  return key;
}
function useScrollRestoration({
  getKey,
  storageKey
} = {}) {
  let { router: router2 } = useDataRouterContext3(
    "useScrollRestoration"
    /* UseScrollRestoration */
  );
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
    "useScrollRestoration"
    /* UseScrollRestoration */
  );
  let { basename } = React10.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  React10.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(
    React10.useCallback(() => {
      if (navigation.state === "idle") {
        let key = getScrollRestorationKey(location, matches, basename, getKey);
        savedScrollPositions[key] = window.scrollY;
      }
      try {
        sessionStorage.setItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY,
          JSON.stringify(savedScrollPositions)
        );
      } catch (error) {
        warning(
          false,
          `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
        );
      }
      window.history.scrollRestoration = "auto";
    }, [navigation.state, getKey, basename, location, matches, storageKey])
  );
  if (typeof document !== "undefined") {
    React10.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        );
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
      }
    }, [storageKey]);
    React10.useLayoutEffect(() => {
      let disableScrollRestoration = router2 == null ? void 0 : router2.enableScrollRestoration(
        savedScrollPositions,
        () => window.scrollY,
        getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
      );
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router2, basename, getKey]);
    React10.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      if (location.hash) {
        let el = document.getElementById(
          decodeURIComponent(location.hash.slice(1))
        );
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
function useBeforeUnload(callback, options) {
  let { capture } = options || {};
  React10.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
function usePageHide(callback, options) {
  let { capture } = options || {};
  React10.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function usePrompt({
  when,
  message
}) {
  let blocker = useBlocker(when);
  React10.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  React10.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = React10.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = "POP";
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return React11.createElement(
    Router,
    {
      basename,
      children,
      location,
      navigationType: action,
      navigator: staticNavigator,
      static: true
    }
  );
}
function StaticRouterProvider({
  context,
  router: router2,
  hydrate: hydrate2 = true,
  nonce
}) {
  invariant(
    router2 && context,
    "You must provide `router` and `context` to <StaticRouterProvider>"
  );
  let dataRouterContext = {
    router: router2,
    navigator: getStatelessNavigator(),
    static: true,
    staticContext: context,
    basename: context.basename || "/"
  };
  let fetchersContext = /* @__PURE__ */ new Map();
  let hydrateScript = "";
  if (hydrate2 !== false) {
    let data2 = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors(context.errors)
    };
    let json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
    hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
  }
  let { state } = dataRouterContext.router;
  return React11.createElement(React11.Fragment, null, React11.createElement(DataRouterContext.Provider, { value: dataRouterContext }, React11.createElement(DataRouterStateContext.Provider, { value: state }, React11.createElement(FetchersContext.Provider, { value: fetchersContext }, React11.createElement(ViewTransitionContext.Provider, { value: { isTransitioning: false } }, React11.createElement(
    Router,
    {
      basename: dataRouterContext.basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: dataRouterContext.navigator,
      static: dataRouterContext.static
    },
    React11.createElement(
      DataRoutes2,
      {
        routes: router2.routes,
        future: router2.future,
        state
      }
    )
  ))))), hydrateScript ? React11.createElement(
    "script",
    {
      suppressHydrationWarning: true,
      nonce,
      dangerouslySetInnerHTML: { __html: hydrateScript }
    }
  ) : null);
}
function DataRoutes2({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function serializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      serialized[key] = {
        message: val.message,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.
        ...val.name !== "Error" ? {
          __subType: val.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(
        `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`
      );
    },
    replace(to) {
      throw new Error(
        `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`
      );
    },
    go(delta) {
      throw new Error(
        `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`
      );
    },
    back() {
      throw new Error(
        `You cannot use navigator.back() on the server because it is a stateless environment.`
      );
    },
    forward() {
      throw new Error(
        `You cannot use navigator.forward() on the server because it is a stateless environment.`
      );
    }
  };
}
function createStaticHandler2(routes, opts) {
  return createStaticHandler(routes, {
    ...opts,
    mapRouteProperties
  });
}
function createStaticRouter(routes, context, opts = {}) {
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties,
    void 0,
    manifest
  );
  let matches = context.matches.map((match) => {
    let route = manifest[match.route.id] || match.route;
    return {
      ...match,
      route
    };
  });
  let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
  return {
    get basename() {
      return context.basename;
    },
    get future() {
      return {
        ...opts == null ? void 0 : opts.future
      };
    },
    get state() {
      return {
        historyAction: "POP",
        location: context.location,
        matches,
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: context.errors,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        restoreScrollPosition: null,
        preventScrollReset: false,
        revalidation: "idle",
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return void 0;
    },
    initialize() {
      throw msg("initialize");
    },
    subscribe() {
      throw msg("subscribe");
    },
    enableScrollRestoration() {
      throw msg("enableScrollRestoration");
    },
    navigate() {
      throw msg("navigate");
    },
    fetch() {
      throw msg("fetch");
    },
    revalidate() {
      throw msg("revalidate");
    },
    createHref,
    encodeLocation,
    getFetcher() {
      return IDLE_FETCHER;
    },
    deleteFetcher() {
      throw msg("deleteFetcher");
    },
    dispose() {
      throw msg("dispose");
    },
    getBlocker() {
      return IDLE_BLOCKER;
    },
    deleteBlocker() {
      throw msg("deleteBlocker");
    },
    patchRoutes() {
      throw msg("patchRoutes");
    },
    _internalFetchControllers: /* @__PURE__ */ new Map(),
    _internalSetRoutes() {
      throw msg("_internalSetRoutes");
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX3.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var ESCAPE_LOOKUP2 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
function htmlEscape(str) {
  return str.replace(ESCAPE_REGEX2, (match) => ESCAPE_LOOKUP2[match]);
}
function ServerRouter({
  context,
  url,
  abortDelay,
  nonce
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let { manifest, routeModules, criticalCss, serverHandoffString } = context;
  let routes = createServerRoutes(
    manifest.routes,
    routeModules,
    context.future,
    context.isSpaMode
  );
  context.staticHandlerContext.loaderData = {
    ...context.staticHandlerContext.loaderData
  };
  for (let match of context.staticHandlerContext.matches) {
    let routeId = match.route.id;
    let route = routeModules[routeId];
    let manifestRoute = context.manifest.routes[routeId];
    if (route && manifestRoute && shouldHydrateRouteLoader(manifestRoute, route, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
      delete context.staticHandlerContext.loaderData[routeId];
    }
  }
  let router2 = createStaticRouter(routes, context.staticHandlerContext);
  return React12.createElement(React12.Fragment, null, React12.createElement(
    FrameworkContext.Provider,
    {
      value: {
        manifest,
        routeModules,
        criticalCss,
        serverHandoffString,
        future: context.future,
        isSpaMode: context.isSpaMode,
        serializeError: context.serializeError,
        abortDelay,
        renderMeta: context.renderMeta
      }
    },
    React12.createElement(RemixErrorBoundary, { location: router2.state.location }, React12.createElement(
      StaticRouterProvider,
      {
        router: router2,
        context: context.staticHandlerContext,
        hydrate: false
      }
    ))
  ), context.serverHandoffStream ? React12.createElement(React12.Suspense, null, React12.createElement(
    StreamTransfer,
    {
      context,
      identifier: 0,
      reader: context.serverHandoffStream.getReader(),
      textDecoder: new TextDecoder(),
      nonce
    }
  )) : null);
}
function createRoutesStub(routes, context = {}) {
  return function RoutesTestStub({
    initialEntries,
    initialIndex,
    hydrationData,
    future
  }) {
    let routerRef = React13.useRef();
    let remixContextRef = React13.useRef();
    if (routerRef.current == null) {
      remixContextRef.current = {
        future: {},
        manifest: {
          routes: {},
          entry: { imports: [], module: "" },
          url: "",
          version: ""
        },
        routeModules: {},
        isSpaMode: false
      };
      let patched = processRoutes(
        // @ts-expect-error loader/action context types don't match :/
        convertRoutesToDataRoutes(routes, (r) => r),
        context,
        remixContextRef.current.manifest,
        remixContextRef.current.routeModules
      );
      routerRef.current = createMemoryRouter(patched, {
        initialEntries,
        initialIndex,
        hydrationData
      });
    }
    return React13.createElement(FrameworkContext.Provider, { value: remixContextRef.current }, React13.createElement(RouterProvider, { router: routerRef.current }));
  };
}
function processRoutes(routes, context, manifest, routeModules, parentId) {
  return routes.map((route) => {
    if (!route.id) {
      throw new Error(
        "Expected a route.id in @remix-run/testing processRoutes() function"
      );
    }
    let { loader, action } = route;
    let newRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      Component: route.Component,
      HydrateFallback: route.HydrateFallback,
      ErrorBoundary: route.ErrorBoundary,
      action: action ? (args) => action({ ...args, context }) : void 0,
      loader: loader ? (args) => loader({ ...args, context }) : void 0,
      handle: route.handle,
      shouldRevalidate: route.shouldRevalidate
    };
    let entryRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      parentId,
      hasAction: route.action != null,
      hasLoader: route.loader != null,
      // When testing routes, you should just be stubbing loader/action, not
      // trying to re-implement the full loader/clientLoader/SSR/hydration flow.
      // That is better tested via E2E tests.
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: route.ErrorBoundary != null,
      module: "build/stub-path-to-module.js"
      // any need for this?
    };
    manifest.routes[newRoute.id] = entryRoute;
    routeModules[route.id] = {
      default: route.Component || Outlet,
      ErrorBoundary: route.ErrorBoundary || void 0,
      handle: route.handle,
      links: route.links,
      meta: route.meta,
      shouldRevalidate: route.shouldRevalidate
    };
    if (route.children) {
      newRoute.children = processRoutes(
        route.children,
        context,
        manifest,
        routeModules,
        newRoute.id
      );
    }
    return newRoute;
  });
}
var encoder = new TextEncoder();
var sign = async (value, secret) => {
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["sign"]);
  let signature = await crypto.subtle.sign("HMAC", key, data2);
  let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(
    /=+$/,
    ""
  );
  return value + "." + hash;
};
var unsign = async (cookie, secret) => {
  let index = cookie.lastIndexOf(".");
  let value = cookie.slice(0, index);
  let hash = cookie.slice(index + 1);
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["verify"]);
  let signature = byteStringToUint8Array(atob(hash));
  let valid = await crypto.subtle.verify("HMAC", key, signature, data2);
  return valid ? value : false;
};
var createKey2 = async (secret, usages) => crypto.subtle.importKey(
  "raw",
  encoder.encode(secret),
  { name: "HMAC", hash: "SHA-256" },
  false,
  usages
);
function byteStringToUint8Array(byteString) {
  let array = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    array[i] = byteString.charCodeAt(i);
  }
  return array;
}
var createCookie = (name, cookieOptions = {}) => {
  let { secrets = [], ...options } = {
    path: "/",
    sameSite: "lax",
    ...cookieOptions
  };
  warnOnceAboutExpiresCookie(name, options.expires);
  return {
    get name() {
      return name;
    },
    get isSigned() {
      return secrets.length > 0;
    },
    get expires() {
      return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
    },
    async parse(cookieHeader, parseOptions) {
      if (!cookieHeader) return null;
      let cookies = (0, import_cookie.parse)(cookieHeader, { ...options, ...parseOptions });
      if (name in cookies) {
        let value = cookies[name];
        if (typeof value === "string" && value !== "") {
          let decoded = await decodeCookieValue(value, secrets);
          return decoded;
        } else {
          return "";
        }
      } else {
        return null;
      }
    },
    async serialize(value, serializeOptions) {
      return (0, import_cookie.serialize)(
        name,
        value === "" ? "" : await encodeCookieValue(value, secrets),
        {
          ...options,
          ...serializeOptions
        }
      );
    }
  };
};
var isCookie = (object) => {
  return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
};
async function encodeCookieValue(value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length) result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(
    !expires,
    `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
  );
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo2, routeId) => {
    let route = manifest[routeId];
    if (route) {
      memo2[routeId] = route.module;
    }
    return memo2;
  }, {});
}
var ServerMode = ((ServerMode2) => {
  ServerMode2["Development"] = "development";
  ServerMode2["Production"] = "production";
  ServerMode2["Test"] = "test";
  return ServerMode2;
})(ServerMode || {});
function isServerMode(value) {
  return value === "development" || value === "production" || value === "test";
}
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== "development") {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors2(errors, serverMode) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function matchServerRoutes(routes, pathname, basename) {
  let matches = matchRoutes(
    routes,
    pathname,
    basename
  );
  if (!matches) return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
async function callRouteHandler(handler, args) {
  let result = await handler({
    request: stripRoutesParam(stripIndexParam2(args.request)),
    params: args.params,
    context: args.context
  });
  if (isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status)) {
    throw new Response(null, result.init);
  }
  return result;
}
function stripIndexParam2(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function stripRoutesParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_routes");
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function invariant3(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    console.error(
      "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
    );
    throw new Error(message);
  }
}
function groupRoutesByParentId2(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      // Need to use RR's version in the param typed here to permit the optional
      // context even though we know it'll always be provided in remix
      loader: route.module.loader ? async (args) => {
        if (args.request.headers.has("X-React-Router-Prerender-Data")) {
          const preRenderedData = args.request.headers.get(
            "X-React-Router-Prerender-Data"
          );
          let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
          invariant3(encoded, "Missing prerendered data for route");
          let uint8array = new TextEncoder().encode(encoded);
          let stream = new ReadableStream({
            start(controller) {
              controller.enqueue(uint8array);
              controller.close();
            }
          });
          let decoded = await decodeViaTurboStream(stream, global);
          let data2 = decoded.value;
          invariant3(
            data2 && route.id in data2,
            "Unable to decode prerendered data"
          );
          let result = data2[route.id];
          invariant3("data" in result, "Unable to process prerendered data");
          return result.data;
        }
        let val = await callRouteHandler(route.module.loader, args);
        return val;
      } : void 0,
      action: route.module.action ? (args) => callRouteHandler(route.module.action, args) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: true,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(
        manifest,
        future,
        route.id,
        routesByParentId
      ),
      ...commonRoute
    };
  });
}
var ESCAPE_LOOKUP3 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX3 = /[&><\u2028\u2029]/g;
function escapeHtml2(html) {
  return html.replace(ESCAPE_REGEX3, (match) => ESCAPE_LOOKUP3[match]);
}
function createServerHandoffString(serverHandoff) {
  return escapeHtml2(JSON.stringify(serverHandoff));
}
var globalDevServerHooksKey = "__reactRouterDevServerHooks";
function setDevServerHooks(devServerHooks) {
  globalThis[globalDevServerHooksKey] = devServerHooks;
}
function getDevServerHooks() {
  return globalThis[globalDevServerHooksKey];
}
function getDocumentHeaders(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
  let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
  let errorHeaders;
  if (boundaryIdx >= 0) {
    let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) {
        errorHeaders = actionHeaders[id];
      } else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) {
        errorHeaders = loaderHeaders[id];
      }
      return errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let { id } = match.route;
    let route = build.routes[id];
    invariant3(route, `Route with id "${id}" not found in build`);
    let routeModule = route.module;
    let loaderHeaders = context.loaderHeaders[id] || new Headers();
    let actionHeaders = context.actionHeaders[id] || new Headers();
    let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
    let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null) {
      let headers2 = new Headers(parentHeaders);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers2);
      }
      prependCookies(actionHeaders, headers2);
      prependCookies(loaderHeaders, headers2);
      return headers2;
    }
    let headers = new Headers(
      routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
        loaderHeaders,
        parentHeaders,
        actionHeaders,
        errorHeaders: includeErrorHeaders ? errorHeaders : void 0
      }) : routeModule.headers : void 0
    );
    if (includeErrorCookies) {
      prependCookies(errorHeaders, headers);
    }
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var SINGLE_FETCH_REDIRECT_STATUS = 202;
function getSingleFetchDataStrategy2({
  isActionDataRequest,
  loadRouteIds
} = {}) {
  return async ({ request, matches }) => {
    if (isActionDataRequest && request.method === "GET") {
      return {};
    }
    let matchesToLoad = loadRouteIds ? matches.filter((m) => loadRouteIds.includes(m.route.id)) : matches;
    let results = await Promise.all(
      matchesToLoad.map((match) => match.resolve())
    );
    return results.reduce(
      (acc, result, i) => Object.assign(acc, { [matchesToLoad[i].route.id]: result }),
      {}
    );
  };
}
async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let handlerRequest = new Request(handlerUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal,
      ...request.body ? { duplex: "half" } : void 0
    });
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      dataStrategy: getSingleFetchDataStrategy2({
        isActionDataRequest: true
      })
    });
    if (isResponse(result)) {
      return {
        result: getSingleFetchRedirect(
          result.status,
          result.headers,
          build.basename
        ),
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: getSingleFetchRedirect(
          context.statusCode,
          headers,
          build.basename
        ),
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    if (context.errors) {
      Object.values(context.errors).forEach((err) => {
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let singleFetchResult;
    if (context.errors) {
      singleFetchResult = { error: Object.values(context.errors)[0] };
    } else {
      singleFetchResult = { data: Object.values(context.actionData || {})[0] };
    }
    return {
      result: singleFetchResult,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    return {
      result: { error },
      headers: new Headers(),
      status: 500
    };
  }
}
async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  var _a;
  try {
    let handlerRequest = new Request(handlerUrl, {
      headers: request.headers,
      signal: request.signal
    });
    let loadRouteIds = ((_a = new URL(request.url).searchParams.get("_routes")) == null ? void 0 : _a.split(",")) || void 0;
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      dataStrategy: getSingleFetchDataStrategy2({
        loadRouteIds
      })
    });
    if (isResponse(result)) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
            result.status,
            result.headers,
            build.basename
          )
        },
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
            context.statusCode,
            headers,
            build.basename
          )
        },
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    if (context.errors) {
      Object.values(context.errors).forEach((err) => {
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let results = {};
    let loadedMatches = loadRouteIds ? context.matches.filter(
      (m) => m.route.loader && loadRouteIds.includes(m.route.id)
    ) : context.matches;
    loadedMatches.forEach((m) => {
      let { id } = m.route;
      if (context.errors && context.errors.hasOwnProperty(id)) {
        results[id] = { error: context.errors[id] };
      } else if (context.loaderData.hasOwnProperty(id)) {
        results[id] = { data: context.loaderData[id] };
      }
    });
    return {
      result: results,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    return {
      result: { root: { error } },
      headers: new Headers(),
      status: 500
    };
  }
}
function getSingleFetchRedirect(status, headers, basename) {
  let redirect2 = headers.get("Location");
  if (basename) {
    redirect2 = stripBasename(redirect2, basename) || redirect2;
  }
  return {
    redirect: redirect2,
    status,
    revalidate: (
      // Technically X-Remix-Revalidate isn't needed here - that was an implementation
      // detail of ?_data requests as our way to tell the front end to revalidate when
      // we didn't have a response body to include that information in.
      // With single fetch, we tell the front end via this revalidate boolean field.
      // However, we're respecting it for now because it may be something folks have
      // used in their own responses
      // TODO(v3): Consider removing or making this official public API
      headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie")
    ),
    reload: headers.has("X-Remix-Reload-Document"),
    replace: headers.has("X-Remix-Replace")
  };
}
function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
  let controller = new AbortController();
  let timeoutId = setTimeout(
    () => controller.abort(new Error("Server Timeout")),
    typeof streamTimeout === "number" ? streamTimeout : 4950
  );
  requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
  return encode(data2, {
    signal: controller.signal,
    plugins: [
      (value) => {
        if (value instanceof Error) {
          let { name, message, stack } = serverMode === "production" ? sanitizeError(value, serverMode) : value;
          return ["SanitizedError", name, message, stack];
        }
        if (value instanceof ErrorResponseImpl) {
          let { data: data3, status, statusText } = value;
          return ["ErrorResponse", data3, status, statusText];
        }
        if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
          return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
        }
      }
    ],
    postPlugins: [
      (value) => {
        if (!value) return;
        if (typeof value !== "object") return;
        return [
          "SingleFetchClassInstance",
          Object.fromEntries(Object.entries(value))
        ];
      },
      () => ["SingleFetchFallback"]
    ]
  });
}
function derive(build, mode) {
  let routes = createRoutes(build.routes);
  let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
  let serverMode = isServerMode(mode) ? mode : "production";
  let staticHandler = createStaticHandler(dataRoutes, {
    basename: build.basename
  });
  let errorHandler = build.entry.module.handleError || ((error, { request }) => {
    if (serverMode !== "test" && !request.signal.aborted) {
      console.error(
        // @ts-expect-error This is "private" from users but intended for internal use
        isRouteErrorResponse(error) && error.error ? error.error : error
      );
    }
  });
  return {
    routes,
    dataRoutes,
    serverMode,
    staticHandler,
    errorHandler
  };
}
var createRequestHandler = (build, mode) => {
  let _build;
  let routes;
  let serverMode;
  let staticHandler;
  let errorHandler;
  return async function requestHandler(request, loadContext = {}) {
    var _a, _b;
    _build = typeof build === "function" ? await build() : build;
    if (typeof build === "function") {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    }
    let url = new URL(request.url);
    let params = {};
    let handleError = (error) => {
      var _a2, _b2;
      if (mode === "development") {
        (_b2 = (_a2 = getDevServerHooks()) == null ? void 0 : _a2.processRequestError) == null ? void 0 : _b2.call(_a2, error);
      }
      errorHandler(error, {
        context: loadContext,
        params,
        request
      });
    };
    let manifestUrl = `${_build.basename ?? "/"}/__manifest`.replace(
      /\/+/g,
      "/"
    );
    if (url.pathname === manifestUrl) {
      try {
        let res = await handleManifestRequest(_build, routes, url);
        return res;
      } catch (e) {
        handleError(e);
        return new Response("Unknown Server Error", { status: 500 });
      }
    }
    let matches = matchServerRoutes(routes, url.pathname, _build.basename);
    if (matches && matches.length > 0) {
      Object.assign(params, matches[0].params);
    }
    let response;
    if (url.pathname.endsWith(".data")) {
      let handlerUrl = new URL(request.url);
      handlerUrl.pathname = handlerUrl.pathname.replace(/\.data$/, "").replace(/^\/_root$/, "/");
      let singleFetchMatches = matchServerRoutes(
        routes,
        handlerUrl.pathname,
        _build.basename
      );
      response = await handleSingleFetchRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        handlerUrl,
        loadContext,
        handleError
      );
      if (_build.entry.module.handleDataRequest) {
        response = await _build.entry.module.handleDataRequest(response, {
          context: loadContext,
          params: singleFetchMatches ? singleFetchMatches[0].params : {},
          request
        });
        if (isRedirectResponse(response)) {
          let result = getSingleFetchRedirect(
            response.status,
            response.headers,
            _build.basename
          );
          if (request.method === "GET") {
            result = {
              [SingleFetchRedirectSymbol]: result
            };
          }
          let headers = new Headers(response.headers);
          headers.set("Content-Type", "text/x-script");
          return new Response(
            encodeViaTurboStream(
              result,
              request.signal,
              _build.entry.module.streamTimeout,
              serverMode
            ),
            {
              status: SINGLE_FETCH_REDIRECT_STATUS,
              headers
            }
          );
        }
      }
    } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
      response = await handleResourceRequest(
        serverMode,
        staticHandler,
        matches.slice(-1)[0].route.id,
        request,
        loadContext,
        handleError
      );
    } else {
      let criticalCss = mode === "development" ? await ((_b = (_a = getDevServerHooks()) == null ? void 0 : _a.getCriticalCss) == null ? void 0 : _b.call(_a, _build, url.pathname)) : void 0;
      response = await handleDocumentRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        loadContext,
        handleError,
        criticalCss
      );
    }
    if (request.method === "HEAD") {
      return new Response(null, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      });
    }
    return response;
  };
};
async function handleManifestRequest(build, routes, url) {
  let patches = {};
  if (url.searchParams.has("p")) {
    for (let path of url.searchParams.getAll("p")) {
      let matches = matchServerRoutes(routes, path, build.basename);
      if (matches) {
        for (let match of matches) {
          let routeId = match.route.id;
          let route = build.assets.routes[routeId];
          if (route) {
            patches[routeId] = route;
          }
        }
      }
    }
    return Response.json(patches, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }
  return new Response("Invalid Request", { status: 400 });
}
async function handleSingleFetchRequest(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
  let { result, headers, status } = request.method !== "GET" ? await singleFetchAction(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  ) : await singleFetchLoaders(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  );
  let resultHeaders = new Headers(headers);
  resultHeaders.set("X-Remix-Response", "yes");
  if (status === 304) {
    return new Response(null, { status: 304, headers: resultHeaders });
  }
  resultHeaders.set("Content-Type", "text/x-script");
  return new Response(
    encodeViaTurboStream(
      result,
      request.signal,
      build.entry.module.streamTimeout,
      serverMode
    ),
    {
      status: status || 200,
      headers: resultHeaders
    }
  );
}
async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
  let context;
  try {
    context = await staticHandler.query(request, {
      requestContext: loadContext
    });
  } catch (error) {
    handleError(error);
    return new Response(null, { status: 500 });
  }
  if (isResponse(context)) {
    return context;
  }
  let headers = getDocumentHeaders(build, context);
  if (context.statusCode === 304) {
    return new Response(null, { status: 304, headers });
  }
  if (context.errors) {
    Object.values(context.errors).forEach((err) => {
      if (!isRouteErrorResponse(err) || err.error) {
        handleError(err);
      }
    });
    context.errors = sanitizeErrors(context.errors, serverMode);
  }
  let state = {
    loaderData: context.loaderData,
    actionData: context.actionData,
    errors: serializeErrors2(context.errors, serverMode)
  };
  let entryContext = {
    manifest: build.assets,
    routeModules: createEntryRouteModules(build.routes),
    staticHandlerContext: context,
    criticalCss,
    serverHandoffString: createServerHandoffString({
      basename: build.basename,
      criticalCss,
      future: build.future,
      isSpaMode: build.isSpaMode
    }),
    serverHandoffStream: encodeViaTurboStream(
      state,
      request.signal,
      build.entry.module.streamTimeout,
      serverMode
    ),
    renderMeta: {},
    future: build.future,
    isSpaMode: build.isSpaMode,
    serializeError: (err) => serializeError(err, serverMode)
  };
  let handleDocumentRequestFunction = build.entry.module.default;
  try {
    return await handleDocumentRequestFunction(
      request,
      context.statusCode,
      headers,
      entryContext,
      loadContext
    );
  } catch (error) {
    handleError(error);
    let errorForSecondRender = error;
    if (isResponse(error)) {
      try {
        let data2 = await unwrapResponse(error);
        errorForSecondRender = new ErrorResponseImpl(
          error.status,
          error.statusText,
          data2
        );
      } catch (e) {
      }
    }
    context = getStaticContextFromError(
      staticHandler.dataRoutes,
      context,
      errorForSecondRender
    );
    if (context.errors) {
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let state2 = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors2(context.errors, serverMode)
    };
    entryContext = {
      ...entryContext,
      staticHandlerContext: context,
      serverHandoffString: createServerHandoffString({
        basename: build.basename,
        future: build.future,
        isSpaMode: build.isSpaMode
      }),
      serverHandoffStream: encodeViaTurboStream(
        state2,
        request.signal,
        build.entry.module.streamTimeout,
        serverMode
      ),
      renderMeta: {}
    };
    try {
      return await handleDocumentRequestFunction(
        request,
        context.statusCode,
        headers,
        entryContext,
        loadContext
      );
    } catch (error2) {
      handleError(error2);
      return returnLastResortErrorResponse(error2, serverMode);
    }
  }
}
async function handleResourceRequest(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    invariant3(
      isResponse(response),
      "Expected a Response to be returned from resource route handler"
    );
    return response;
  } catch (error) {
    if (isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    handleError(error);
    return returnLastResortErrorResponse(error, serverMode);
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return Response.json(
    serializeError(
      // @ts-expect-error This is "private" from users but intended for internal use
      errorResponse.error || new Error("Unexpected Server Error"),
      serverMode
    ),
    {
      status: errorResponse.status,
      statusText: errorResponse.statusText,
      headers: {
        "X-Remix-Error": "yes"
      }
    }
  );
}
function returnLastResortErrorResponse(error, serverMode) {
  let message = "Unexpected Server Error";
  if (serverMode !== "production") {
    message += `

${String(error)}`;
  }
  return new Response(message, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
function unwrapResponse(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
}
function flash(name) {
  return `__flash_${name}__`;
}
var createSession = (initialData = {}, id = "") => {
  let map = new Map(Object.entries(initialData));
  return {
    get id() {
      return id;
    },
    get data() {
      return Object.fromEntries(map);
    },
    has(name) {
      return map.has(name) || map.has(flash(name));
    },
    get(name) {
      if (map.has(name)) return map.get(name);
      let flashName = flash(name);
      if (map.has(flashName)) {
        let value = map.get(flashName);
        map.delete(flashName);
        return value;
      }
      return void 0;
    },
    set(name, value) {
      map.set(name, value);
    },
    flash(name, value) {
      map.set(flash(name), value);
    },
    unset(name) {
      map.delete(name);
    }
  };
};
var isSession = (object) => {
  return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
};
function createSessionStorage({
  cookie: cookieArg,
  createData,
  readData,
  updateData,
  deleteData
}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      let id = cookieHeader && await cookie.parse(cookieHeader, options);
      let data2 = id && await readData(id);
      return createSession(data2 || {}, id || "");
    },
    async commitSession(session, options) {
      let { id, data: data2 } = session;
      let expires = (options == null ? void 0 : options.maxAge) != null ? new Date(Date.now() + options.maxAge * 1e3) : (options == null ? void 0 : options.expires) != null ? options.expires : cookie.expires;
      if (id) {
        await updateData(id, data2, expires);
      } else {
        id = await createData(data2, expires);
      }
      return cookie.serialize(id, options);
    },
    async destroySession(session, options) {
      await deleteData(session.id);
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(
    cookie.isSigned,
    `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`
  );
}
function createCookieSessionStorage({ cookie: cookieArg } = {}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      return createSession(
        cookieHeader && await cookie.parse(cookieHeader, options) || {}
      );
    },
    async commitSession(session, options) {
      let serializedCookie = await cookie.serialize(session.data, options);
      if (serializedCookie.length > 4096) {
        throw new Error(
          "Cookie length will exceed browser maximum. Length: " + serializedCookie.length
        );
      }
      return serializedCookie;
    },
    async destroySession(_session, options) {
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function createMemorySessionStorage({ cookie } = {}) {
  let map = /* @__PURE__ */ new Map();
  return createSessionStorage({
    cookie,
    async createData(data2, expires) {
      let id = Math.random().toString(36).substring(2, 10);
      map.set(id, { data: data2, expires });
      return id;
    },
    async readData(id) {
      if (map.has(id)) {
        let { data: data2, expires } = map.get(id);
        if (!expires || expires > /* @__PURE__ */ new Date()) {
          return data2;
        }
        if (expires) map.delete(id);
      }
      return null;
    },
    async updateData(id, data2, expires) {
      map.set(id, { data: data2, expires });
    },
    async deleteData(id) {
      map.delete(id);
    }
  });
}
function deserializeErrors2(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = val.stack;
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = val.stack;
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}

// node_modules/react-router/dist/development/dom-export.mjs
var React14 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var React22 = __toESM(require_react(), 1);
function RouterProvider2(props) {
  return React14.createElement(RouterProvider, { flushSync: ReactDOM.flushSync, ...props });
}
var ssrInfo = null;
var router = null;
function initSsrInfo() {
  if (!ssrInfo && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    ssrInfo = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: false
    };
  }
}
function createHydratedRouter() {
  var _a;
  initSsrInfo();
  if (!ssrInfo) {
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  }
  let localSsrInfo = ssrInfo;
  if (!ssrInfo.stateDecodingPromise) {
    let stream = ssrInfo.context.stream;
    invariant(stream, "No stream found for single fetch decoding");
    ssrInfo.context.stream = void 0;
    ssrInfo.stateDecodingPromise = decodeViaTurboStream(stream, window).then((value) => {
      ssrInfo.context.state = value.value;
      localSsrInfo.stateDecodingPromise.value = true;
    }).catch((e) => {
      localSsrInfo.stateDecodingPromise.error = e;
    });
  }
  if (ssrInfo.stateDecodingPromise.error) {
    throw ssrInfo.stateDecodingPromise.error;
  }
  if (!ssrInfo.stateDecodingPromise.value) {
    throw ssrInfo.stateDecodingPromise;
  }
  let routes = createClientRoutes(
    ssrInfo.manifest.routes,
    ssrInfo.routeModules,
    ssrInfo.context.state,
    ssrInfo.context.isSpaMode
  );
  let hydrationData = void 0;
  if (!ssrInfo.context.isSpaMode) {
    hydrationData = {
      ...ssrInfo.context.state,
      loaderData: { ...ssrInfo.context.state.loaderData }
    };
    let initialMatches = matchRoutes(
      routes,
      window.location,
      (_a = window.__reactRouterContext) == null ? void 0 : _a.basename
    );
    if (initialMatches) {
      for (let match of initialMatches) {
        let routeId = match.route.id;
        let route = ssrInfo.routeModules[routeId];
        let manifestRoute = ssrInfo.manifest.routes[routeId];
        if (route && manifestRoute && shouldHydrateRouteLoader(
          manifestRoute,
          route,
          ssrInfo.context.isSpaMode
        ) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
          delete hydrationData.loaderData[routeId];
        } else if (manifestRoute && !manifestRoute.hasLoader) {
          hydrationData.loaderData[routeId] = null;
        }
      }
    }
    if (hydrationData && hydrationData.errors) {
      hydrationData.errors = deserializeErrors2(hydrationData.errors);
    }
  }
  let router2 = createRouter({
    routes,
    history: createBrowserHistory(),
    basename: ssrInfo.context.basename,
    hydrationData,
    mapRouteProperties,
    dataStrategy: getSingleFetchDataStrategy(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      () => router2
    ),
    patchRoutesOnNavigation: getPatchRoutesOnNavigationFunction(
      ssrInfo.manifest,
      ssrInfo.routeModules,
      ssrInfo.context.isSpaMode,
      ssrInfo.context.basename
    )
  });
  ssrInfo.router = router2;
  if (router2.state.initialized) {
    ssrInfo.routerInitialized = true;
    router2.initialize();
  }
  router2.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  createClientRoutesWithHMRRevalidationOptOut;
  window.__reactRouterDataRouter = router2;
  return router2;
}
function HydratedRouter() {
  if (!router) {
    router = createHydratedRouter();
  }
  let [criticalCss, setCriticalCss] = React22.useState(
    true ? ssrInfo == null ? void 0 : ssrInfo.context.criticalCss : void 0
  );
  if (true) {
    if (ssrInfo) {
      window.__reactRouterClearCriticalCss = () => setCriticalCss(void 0);
    }
  }
  let [location, setLocation] = React22.useState(router.state.location);
  React22.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router && !ssrInfo.routerInitialized) {
      ssrInfo.routerInitialized = true;
      ssrInfo.router.initialize();
    }
  }, []);
  React22.useLayoutEffect(() => {
    if (ssrInfo && ssrInfo.router) {
      return ssrInfo.router.subscribe((newState) => {
        if (newState.location !== location) {
          setLocation(newState.location);
        }
      });
    }
  }, [location]);
  invariant(ssrInfo, "ssrInfo unavailable for HydratedRouter");
  useFogOFWarDiscovery(
    router,
    ssrInfo.manifest,
    ssrInfo.routeModules,
    ssrInfo.context.isSpaMode
  );
  return (
    // This fragment is important to ensure we match the <ServerRouter> JSX
    // structure so that useId values hydrate correctly
    React22.createElement(React22.Fragment, null, React22.createElement(
      FrameworkContext.Provider,
      {
        value: {
          manifest: ssrInfo.manifest,
          routeModules: ssrInfo.routeModules,
          future: ssrInfo.context.future,
          criticalCss,
          isSpaMode: ssrInfo.context.isSpaMode
        }
      },
      React22.createElement(RemixErrorBoundary, { location }, React22.createElement(RouterProvider2, { router }))
    ), React22.createElement(React22.Fragment, null))
  );
}
export {
  Await,
  BrowserRouter,
  Form,
  HashRouter,
  HydratedRouter,
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  Link,
  Links,
  MemoryRouter,
  Meta,
  NavLink,
  Navigate,
  Action as NavigationType,
  Outlet,
  PrefetchPageLinks,
  Route,
  Router,
  RouterProvider2 as RouterProvider,
  Routes,
  Scripts,
  ScrollRestoration,
  ServerRouter,
  StaticRouter,
  StaticRouterProvider,
  DataRouterContext as UNSAFE_DataRouterContext,
  DataRouterStateContext as UNSAFE_DataRouterStateContext,
  ErrorResponseImpl as UNSAFE_ErrorResponseImpl,
  FetchersContext as UNSAFE_FetchersContext,
  FrameworkContext as UNSAFE_FrameworkContext,
  LocationContext as UNSAFE_LocationContext,
  NavigationContext as UNSAFE_NavigationContext,
  RemixErrorBoundary as UNSAFE_RemixErrorBoundary,
  RouteContext as UNSAFE_RouteContext,
  ServerMode as UNSAFE_ServerMode,
  SingleFetchRedirectSymbol as UNSAFE_SingleFetchRedirectSymbol,
  ViewTransitionContext as UNSAFE_ViewTransitionContext,
  createBrowserHistory as UNSAFE_createBrowserHistory,
  createClientRoutes as UNSAFE_createClientRoutes,
  createClientRoutesWithHMRRevalidationOptOut as UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  createRouter as UNSAFE_createRouter,
  decodeViaTurboStream as UNSAFE_decodeViaTurboStream,
  deserializeErrors2 as UNSAFE_deserializeErrors,
  getPatchRoutesOnNavigationFunction as UNSAFE_getPatchRoutesOnNavigationFunction,
  getSingleFetchDataStrategy as UNSAFE_getSingleFetchDataStrategy,
  invariant as UNSAFE_invariant,
  mapRouteProperties as UNSAFE_mapRouteProperties,
  shouldHydrateRouteLoader as UNSAFE_shouldHydrateRouteLoader,
  useFogOFWarDiscovery as UNSAFE_useFogOFWarDiscovery,
  useScrollRestoration as UNSAFE_useScrollRestoration,
  createBrowserRouter,
  createCookie,
  createCookieSessionStorage,
  createHashRouter,
  createMemoryRouter,
  createMemorySessionStorage,
  createPath,
  createRequestHandler,
  createRoutesFromChildren,
  createRoutesFromChildren as createRoutesFromElements,
  createRoutesStub,
  createSearchParams,
  createSession,
  createSessionStorage,
  createStaticHandler2 as createStaticHandler,
  createStaticRouter,
  data,
  generatePath,
  isCookie,
  isRouteErrorResponse,
  isSession,
  matchPath,
  matchRoutes,
  parsePath,
  redirect,
  redirectDocument,
  renderMatches,
  replace,
  resolvePath,
  HistoryRouter as unstable_HistoryRouter,
  setDevServerHooks as unstable_setDevServerHooks,
  usePrompt as unstable_usePrompt,
  useActionData,
  useAsyncError,
  useAsyncValue,
  useBeforeUnload,
  useBlocker,
  useFetcher,
  useFetchers,
  useFormAction,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useNavigation,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useParams,
  useResolvedPath,
  useRevalidator,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useSearchParams,
  useSubmit,
  useViewTransitionState
};
/*! Bundled license information:

react-router/dist/development/chunk-WFMEQ3WA.mjs:
  (**
   * react-router v7.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/development/dom-export.mjs:
  (**
   * react-router v7.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/development/index.mjs:
  (**
   * react-router v7.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.mjs:
  (**
   * react-router-dom v7.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=react-router-dom.js.map