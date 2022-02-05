var Mapping = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/lorem-ipsum/dist/constants/formats.js
  var require_formats = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/formats.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FORMATS = exports.FORMAT_PLAIN = exports.FORMAT_HTML = void 0;
      var FORMAT_HTML = "html";
      exports.FORMAT_HTML = FORMAT_HTML;
      var FORMAT_PLAIN = "plain";
      exports.FORMAT_PLAIN = FORMAT_PLAIN;
      var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
      exports.FORMATS = FORMATS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/units.js
  var require_units = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/units.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UNITS = exports.UNIT_PARAGRAPH = exports.UNIT_PARAGRAPHS = exports.UNIT_SENTENCE = exports.UNIT_SENTENCES = exports.UNIT_WORD = exports.UNIT_WORDS = void 0;
      var UNIT_WORDS = "words";
      exports.UNIT_WORDS = UNIT_WORDS;
      var UNIT_WORD = "word";
      exports.UNIT_WORD = UNIT_WORD;
      var UNIT_SENTENCES = "sentences";
      exports.UNIT_SENTENCES = UNIT_SENTENCES;
      var UNIT_SENTENCE = "sentence";
      exports.UNIT_SENTENCE = UNIT_SENTENCE;
      var UNIT_PARAGRAPHS = "paragraphs";
      exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
      var UNIT_PARAGRAPH = "paragraph";
      exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
      var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
      exports.UNITS = UNITS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/words.js
  var require_words = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/words.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WORDS = void 0;
      var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
      exports.WORDS = WORDS;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/lineEndings.js
  var require_lineEndings = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/lineEndings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LINE_ENDINGS = void 0;
      var LINE_ENDINGS = {
        POSIX: "\n",
        WIN32: "\r\n"
      };
      exports.LINE_ENDINGS = LINE_ENDINGS;
    }
  });

  // node_modules/lorem-ipsum/dist/util/capitalize.js
  var require_capitalize = __commonJS({
    "node_modules/lorem-ipsum/dist/util/capitalize.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var capitalize = /* @__PURE__ */ __name(function capitalize2(str) {
        var trimmed = str.trim();
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }, "capitalize");
      var _default = capitalize;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isNode.js
  var require_isNode = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isNode.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var isNode = /* @__PURE__ */ __name(function isNode2() {
        return typeof module !== "undefined" && !!module.exports;
      }, "isNode");
      var _default = isNode;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isReactNative.js
  var require_isReactNative = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isReactNative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var isReactNative = /* @__PURE__ */ __name(function isReactNative2() {
        var isReactNativeResult = false;
        try {
          isReactNativeResult = navigator.product === "ReactNative";
        } catch (e) {
          isReactNativeResult = false;
        }
        return isReactNativeResult;
      }, "isReactNative");
      var _default = isReactNative;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/constants/platforms.js
  var require_platforms = __commonJS({
    "node_modules/lorem-ipsum/dist/constants/platforms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SUPPORTED_PLATFORMS = void 0;
      var SUPPORTED_PLATFORMS = {
        DARWIN: "darwin",
        LINUX: "linux",
        WIN32: "win32"
      };
      exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
    }
  });

  // node_modules/lorem-ipsum/dist/util/isWindows.js
  var require_isWindows = __commonJS({
    "node_modules/lorem-ipsum/dist/util/isWindows.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _platforms = require_platforms();
      var isWindows = /* @__PURE__ */ __name(function isWindows2() {
        var isWindowsResult = false;
        try {
          isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
        } catch (e) {
          isWindowsResult = false;
        }
        return isWindowsResult;
      }, "isWindows");
      var _default = isWindows;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js
  var require_makeArrayOfLength = __commonJS({
    "node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var makeArrayOfLength = /* @__PURE__ */ __name(function makeArrayOfLength2() {
        var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return Array.apply(null, Array(length)).map(function(item, index) {
          return index;
        });
      }, "makeArrayOfLength");
      var _default = makeArrayOfLength;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js
  var require_makeArrayOfStrings = __commonJS({
    "node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _ = require_util();
      var makeArrayOfStrings = /* @__PURE__ */ __name(function makeArrayOfStrings2(length, makeString) {
        var arr = (0, _.makeArrayOfLength)(length);
        return arr.map(function() {
          return makeString();
        });
      }, "makeArrayOfStrings");
      var _default = makeArrayOfStrings;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/lorem-ipsum/dist/util/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "capitalize", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _capitalize["default"];
        }, "get")
      });
      Object.defineProperty(exports, "isNode", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _isNode["default"];
        }, "get")
      });
      Object.defineProperty(exports, "isReactNative", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _isReactNative["default"];
        }, "get")
      });
      Object.defineProperty(exports, "isWindows", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _isWindows["default"];
        }, "get")
      });
      Object.defineProperty(exports, "makeArrayOfLength", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _makeArrayOfLength["default"];
        }, "get")
      });
      Object.defineProperty(exports, "makeArrayOfStrings", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _makeArrayOfStrings["default"];
        }, "get")
      });
      var _capitalize = _interopRequireDefault(require_capitalize());
      var _isNode = _interopRequireDefault(require_isNode());
      var _isReactNative = _interopRequireDefault(require_isReactNative());
      var _isWindows = _interopRequireDefault(require_isWindows());
      var _makeArrayOfLength = _interopRequireDefault(require_makeArrayOfLength());
      var _makeArrayOfStrings = _interopRequireDefault(require_makeArrayOfStrings());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      __name(_interopRequireDefault, "_interopRequireDefault");
    }
  });

  // node_modules/lorem-ipsum/dist/lib/generator.js
  var require_generator = __commonJS({
    "node_modules/lorem-ipsum/dist/lib/generator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _words = require_words();
      var _util = require_util();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      __name(_classCallCheck, "_classCallCheck");
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      __name(_defineProperties, "_defineProperties");
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      __name(_createClass, "_createClass");
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      __name(_defineProperty, "_defineProperty");
      var Generator = /* @__PURE__ */ function() {
        function Generator2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$sentencesPerPara = _ref.sentencesPerParagraph, sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
            max: 7,
            min: 3
          } : _ref$sentencesPerPara, _ref$wordsPerSentence = _ref.wordsPerSentence, wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
            max: 15,
            min: 5
          } : _ref$wordsPerSentence, random = _ref.random, seed = _ref.seed, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words;
          _classCallCheck(this, Generator2);
          _defineProperty(this, "sentencesPerParagraph", void 0);
          _defineProperty(this, "wordsPerSentence", void 0);
          _defineProperty(this, "random", void 0);
          _defineProperty(this, "words", void 0);
          if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
            throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
          }
          if (wordsPerSentence.min > wordsPerSentence.max) {
            throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
          }
          this.sentencesPerParagraph = sentencesPerParagraph;
          this.words = words;
          this.wordsPerSentence = wordsPerSentence;
          this.random = random || Math.random;
        }
        __name(Generator2, "Generator");
        _createClass(Generator2, [{
          key: "generateRandomInteger",
          value: /* @__PURE__ */ __name(function generateRandomInteger(min, max) {
            return Math.floor(this.random() * (max - min + 1) + min);
          }, "generateRandomInteger")
        }, {
          key: "generateRandomWords",
          value: /* @__PURE__ */ __name(function generateRandomWords(num) {
            var _this = this;
            var _this$wordsPerSentenc = this.wordsPerSentence, min = _this$wordsPerSentenc.min, max = _this$wordsPerSentenc.max;
            var length = num || this.generateRandomInteger(min, max);
            return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
              return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
            }, "").trim();
          }, "generateRandomWords")
        }, {
          key: "generateRandomSentence",
          value: /* @__PURE__ */ __name(function generateRandomSentence(num) {
            return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
          }, "generateRandomSentence")
        }, {
          key: "generateRandomParagraph",
          value: /* @__PURE__ */ __name(function generateRandomParagraph(num) {
            var _this2 = this;
            var _this$sentencesPerPar = this.sentencesPerParagraph, min = _this$sentencesPerPar.min, max = _this$sentencesPerPar.max;
            var length = num || this.generateRandomInteger(min, max);
            return (0, _util.makeArrayOfLength)(length).reduce(function(accumulator, index) {
              return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
            }, "").trim();
          }, "generateRandomParagraph")
        }, {
          key: "pluckRandomWord",
          value: /* @__PURE__ */ __name(function pluckRandomWord() {
            var min = 0;
            var max = this.words.length - 1;
            var index = this.generateRandomInteger(min, max);
            return this.words[index];
          }, "pluckRandomWord")
        }]);
        return Generator2;
      }();
      var _default = Generator;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/lib/LoremIpsum.js
  var require_LoremIpsum = __commonJS({
    "node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _formats = require_formats();
      var _lineEndings = require_lineEndings();
      var _generator = _interopRequireDefault(require_generator());
      var _util = require_util();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      __name(_interopRequireDefault, "_interopRequireDefault");
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      __name(_classCallCheck, "_classCallCheck");
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      __name(_defineProperties, "_defineProperties");
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      __name(_createClass, "_createClass");
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      __name(_defineProperty, "_defineProperty");
      var LoremIpsum2 = /* @__PURE__ */ function() {
        function LoremIpsum3() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _formats.FORMAT_PLAIN;
          var suffix = arguments.length > 2 ? arguments[2] : void 0;
          _classCallCheck(this, LoremIpsum3);
          this.format = format;
          this.suffix = suffix;
          _defineProperty(this, "generator", void 0);
          if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
            throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
          }
          this.generator = new _generator["default"](options);
        }
        __name(LoremIpsum3, "LoremIpsum");
        _createClass(LoremIpsum3, [{
          key: "getLineEnding",
          value: /* @__PURE__ */ __name(function getLineEnding() {
            if (this.suffix) {
              return this.suffix;
            }
            if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
              return _lineEndings.LINE_ENDINGS.WIN32;
            }
            return _lineEndings.LINE_ENDINGS.POSIX;
          }, "getLineEnding")
        }, {
          key: "formatString",
          value: /* @__PURE__ */ __name(function formatString(str) {
            if (this.format === _formats.FORMAT_HTML) {
              return "<p>".concat(str, "</p>");
            }
            return str;
          }, "formatString")
        }, {
          key: "formatStrings",
          value: /* @__PURE__ */ __name(function formatStrings(strings) {
            var _this = this;
            return strings.map(function(str) {
              return _this.formatString(str);
            });
          }, "formatStrings")
        }, {
          key: "generateWords",
          value: /* @__PURE__ */ __name(function generateWords(num) {
            return this.formatString(this.generator.generateRandomWords(num));
          }, "generateWords")
        }, {
          key: "generateSentences",
          value: /* @__PURE__ */ __name(function generateSentences(num) {
            return this.formatString(this.generator.generateRandomParagraph(num));
          }, "generateSentences")
        }, {
          key: "generateParagraphs",
          value: /* @__PURE__ */ __name(function generateParagraphs(num) {
            var makeString = this.generator.generateRandomParagraph.bind(this.generator);
            return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
          }, "generateParagraphs")
        }]);
        return LoremIpsum3;
      }();
      var _default = LoremIpsum2;
      exports["default"] = _default;
    }
  });

  // node_modules/lorem-ipsum/dist/index.js
  var require_dist = __commonJS({
    "node_modules/lorem-ipsum/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "LoremIpsum", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function get() {
          return _LoremIpsum["default"];
        }, "get")
      });
      exports.loremIpsum = void 0;
      var _formats = require_formats();
      var _units = require_units();
      var _words = require_words();
      var _LoremIpsum = _interopRequireDefault(require_LoremIpsum());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      __name(_interopRequireDefault, "_interopRequireDefault");
      var loremIpsum2 = /* @__PURE__ */ __name(function loremIpsum3() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$count = _ref.count, count = _ref$count === void 0 ? 1 : _ref$count, _ref$format = _ref.format, format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format, _ref$paragraphLowerBo = _ref.paragraphLowerBound, paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo, _ref$paragraphUpperBo = _ref.paragraphUpperBound, paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo, random = _ref.random, _ref$sentenceLowerBou = _ref.sentenceLowerBound, sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou, _ref$sentenceUpperBou = _ref.sentenceUpperBound, sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou, _ref$units = _ref.units, units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units, _ref$words = _ref.words, words = _ref$words === void 0 ? _words.WORDS : _ref$words, _ref$suffix = _ref.suffix, suffix = _ref$suffix === void 0 ? "" : _ref$suffix;
        var options = {
          random,
          sentencesPerParagraph: {
            max: paragraphUpperBound,
            min: paragraphLowerBound
          },
          words,
          wordsPerSentence: {
            max: sentenceUpperBound,
            min: sentenceLowerBound
          }
        };
        var lorem = new _LoremIpsum["default"](options, format, suffix);
        switch (units) {
          case _units.UNIT_PARAGRAPHS:
          case _units.UNIT_PARAGRAPH:
            return lorem.generateParagraphs(count);
          case _units.UNIT_SENTENCES:
          case _units.UNIT_SENTENCE:
            return lorem.generateSentences(count);
          case _units.UNIT_WORDS:
          case _units.UNIT_WORD:
            return lorem.generateWords(count);
          default:
            return "";
        }
      }, "loremIpsum");
      exports.loremIpsum = loremIpsum2;
    }
  });

  // index.ts
  var js_exports = {};
  __export(js_exports, {
    map: () => map
  });

  // common/java-types/j2ts/java-types.ts
  var Collections = Java.type("java.util.Collections");
  var Collectors = Java.type("java.util.stream.Collectors");
  var Iterable = Java.type("java.lang.Iterable");
  var MappingResult = Java.type("pintomau.graal_article.typescript_bundling.MappingResult");
  var Optional = Java.type("java.util.Optional");
  var Stream = Java.type("java.util.stream.Stream");
  var String = Java.type("java.lang.String");

  // index.ts
  var import_lorem_ipsum = __toESM(require_dist());
  var loremIpsum = new import_lorem_ipsum.LoremIpsum({ sentencesPerParagraph: { max: 1, min: 1 } });
  function map(ctx) {
    return new MappingResult({
      myName: ctx.getName(),
      myValue: ctx.getValue(),
      quoteOfTheDay: loremIpsum.generateSentences()
    });
  }
  __name(map, "map");
  return __toCommonJS(js_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vanMvbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL3NyYy9jb25zdGFudHMvZm9ybWF0cy50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL2NvbnN0YW50cy91bml0cy50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL2NvbnN0YW50cy93b3Jkcy50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL2NvbnN0YW50cy9saW5lRW5kaW5ncy50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL3V0aWwvY2FwaXRhbGl6ZS50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL3V0aWwvaXNOb2RlLnRzIiwgIi4uLy4uL2pzL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9zcmMvdXRpbC9pc1JlYWN0TmF0aXZlLnRzIiwgIi4uLy4uL2pzL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9zcmMvY29uc3RhbnRzL3BsYXRmb3Jtcy50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL3V0aWwvaXNXaW5kb3dzLnRzIiwgIi4uLy4uL2pzL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9zcmMvdXRpbC9tYWtlQXJyYXlPZkxlbmd0aC50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL3V0aWwvbWFrZUFycmF5T2ZTdHJpbmdzLnRzIiwgIi4uLy4uL2pzL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9zcmMvdXRpbC9pbmRleC50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL2xpYi9nZW5lcmF0b3IudHMiLCAiLi4vLi4vanMvbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL3NyYy9saWIvTG9yZW1JcHN1bS50cyIsICIuLi8uLi9qcy9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vc3JjL2luZGV4LnRzIiwgIi4uLy4uL2pzL2luZGV4LnRzIiwgIi4uLy4uL2pzL2NvbW1vbi9qYXZhLXR5cGVzL2oydHMvamF2YS10eXBlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IGNvbnN0IEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRfUExBSU4gPSBcInBsYWluXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRTID0gW0ZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU5dO1xyXG5leHBvcnQgdHlwZSBMb3JlbUZvcm1hdCA9IFwicGxhaW5cIiB8IFwiaHRtbFwiO1xyXG4iLCAiZXhwb3J0IGNvbnN0IFVOSVRfV09SRFMgPSBcIndvcmRzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnQgY29uc3QgVU5JVF9TRU5URU5DRVMgPSBcInNlbnRlbmNlc1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfU0VOVEVOQ0UgPSBcInNlbnRlbmNlXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEggPSBcInBhcmFncmFwaFwiO1xuZXhwb3J0IGNvbnN0IFVOSVRTID0gW1xuICBVTklUX1dPUkRTLFxuICBVTklUX1dPUkQsXG4gIFVOSVRfU0VOVEVOQ0VTLFxuICBVTklUX1NFTlRFTkNFLFxuICBVTklUX1BBUkFHUkFQSFMsXG4gIFVOSVRfUEFSQUdSQVBILFxuXTtcbmV4cG9ydCB0eXBlIExvcmVtVW5pdCA9IFwid29yZHNcIiB8IFwid29yZFwiIHwgXCJzZW50ZW5jZXNcIiB8IFwic2VudGVuY2VcIiB8IFwicGFyYWdyYXBoc1wiIHwgXCJwYXJhZ3JhcGhcIjtcbiIsICJleHBvcnQgY29uc3QgV09SRFMgPSBbXHJcbiAgXCJhZFwiLFxyXG4gIFwiYWRpcGlzaWNpbmdcIixcclxuICBcImFsaXF1YVwiLFxyXG4gIFwiYWxpcXVpcFwiLFxyXG4gIFwiYW1ldFwiLFxyXG4gIFwiYW5pbVwiLFxyXG4gIFwiYXV0ZVwiLFxyXG4gIFwiY2lsbHVtXCIsXHJcbiAgXCJjb21tb2RvXCIsXHJcbiAgXCJjb25zZWN0ZXR1clwiLFxyXG4gIFwiY29uc2VxdWF0XCIsXHJcbiAgXCJjdWxwYVwiLFxyXG4gIFwiY3VwaWRhdGF0XCIsXHJcbiAgXCJkZXNlcnVudFwiLFxyXG4gIFwiZG9cIixcclxuICBcImRvbG9yXCIsXHJcbiAgXCJkb2xvcmVcIixcclxuICBcImR1aXNcIixcclxuICBcImVhXCIsXHJcbiAgXCJlaXVzbW9kXCIsXHJcbiAgXCJlbGl0XCIsXHJcbiAgXCJlbmltXCIsXHJcbiAgXCJlc3NlXCIsXHJcbiAgXCJlc3RcIixcclxuICBcImV0XCIsXHJcbiAgXCJldVwiLFxyXG4gIFwiZXhcIixcclxuICBcImV4Y2VwdGV1clwiLFxyXG4gIFwiZXhlcmNpdGF0aW9uXCIsXHJcbiAgXCJmdWdpYXRcIixcclxuICBcImlkXCIsXHJcbiAgXCJpblwiLFxyXG4gIFwiaW5jaWRpZHVudFwiLFxyXG4gIFwiaXBzdW1cIixcclxuICBcImlydXJlXCIsXHJcbiAgXCJsYWJvcmVcIixcclxuICBcImxhYm9yaXNcIixcclxuICBcImxhYm9ydW1cIixcclxuICBcIkxvcmVtXCIsXHJcbiAgXCJtYWduYVwiLFxyXG4gIFwibWluaW1cIixcclxuICBcIm1vbGxpdFwiLFxyXG4gIFwibmlzaVwiLFxyXG4gIFwibm9uXCIsXHJcbiAgXCJub3N0cnVkXCIsXHJcbiAgXCJudWxsYVwiLFxyXG4gIFwib2NjYWVjYXRcIixcclxuICBcIm9mZmljaWFcIixcclxuICBcInBhcmlhdHVyXCIsXHJcbiAgXCJwcm9pZGVudFwiLFxyXG4gIFwicXVpXCIsXHJcbiAgXCJxdWlzXCIsXHJcbiAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgXCJzaW50XCIsXHJcbiAgXCJzaXRcIixcclxuICBcInN1bnRcIixcclxuICBcInRlbXBvclwiLFxyXG4gIFwidWxsYW1jb1wiLFxyXG4gIFwidXRcIixcclxuICBcInZlbGl0XCIsXHJcbiAgXCJ2ZW5pYW1cIixcclxuICBcInZvbHVwdGF0ZVwiLFxyXG5dO1xyXG4iLCAiZXhwb3J0IGNvbnN0IExJTkVfRU5ESU5HUyA9IHtcclxuICBQT1NJWDogXCJcXG5cIixcclxuICBXSU4zMjogXCJcXHJcXG5cIixcclxufTtcclxuIiwgIi8qKlxyXG4gKiBAcGFyYW0gc3RyICBBIHN0cmluZyB0aGF0IG1heSBvciBtYXkgbm90IGJlIGNhcGl0YWxpemVkLlxyXG4gKiBAcmV0dXJucyAgICBBIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXHJcbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IHRyaW1tZWQgPSBzdHIudHJpbSgpO1xyXG4gIHJldHVybiB0cmltbWVkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHJpbW1lZC5zbGljZSgxKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcGl0YWxpemU7XHJcbiIsICIvKipcclxuICogQHJldHVybnMgIFRydWUgaWYgdGhlIHJ1bnRpbWUgaXMgTm9kZUpTLlxyXG4gKi9cclxuY29uc3QgaXNOb2RlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmICEhbW9kdWxlLmV4cG9ydHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XHJcbiIsICIvKipcclxuICogQ2hlY2sgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICogU29sdXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2tuaWNrbGFicy9sb3JlbS1pcHN1bS5qcy9wdWxsLzUyL2ZpbGVzXHJcbiAqXHJcbiAqIEByZXR1cm5zICBUcnVlIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqL1xyXG5jb25zdCBpc1JlYWN0TmF0aXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1JlYWN0TmF0aXZlUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNSZWFjdE5hdGl2ZVJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUmVhY3ROYXRpdmU7XHJcbiIsICJleHBvcnQgY29uc3QgU1VQUE9SVEVEX1BMQVRGT1JNUyA9IHtcclxuICBEQVJXSU46IFwiZGFyd2luXCIsXHJcbiAgTElOVVg6IFwibGludXhcIixcclxuICBXSU4zMjogXCJ3aW4zMlwiLFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgU1VQUE9SVEVEX1BMQVRGT1JNUyB9IGZyb20gXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCI7XHJcblxyXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xyXG5jb25zdCBpc1dpbmRvd3MgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgbGV0IGlzV2luZG93c1Jlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRyeSB7XHJcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBwcm9jZXNzLnBsYXRmb3JtID09PSBTVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNXaW5kb3dzO1xyXG4iLCAiLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggTGVuZ3RoIFwieFwiLlxyXG4gKiBAcmV0dXJucyAgICAgIEFuIGFycmF5IG9mIGluZGV4ZXMgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cclxuY29uc3QgbWFrZUFycmF5T2ZMZW5ndGggPSAobGVuZ3RoOiBudW1iZXIgPSAwKTogbnVtYmVyW10gPT4ge1xyXG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoXHJcbiAgICAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKTogbnVtYmVyID0+IGluZGV4LFxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQXJyYXlPZkxlbmd0aDtcclxuIiwgImltcG9ydCB7IG1ha2VBcnJheU9mTGVuZ3RoIH0gZnJvbSBcIi5cIjtcclxuLyoqXHJcbiAqIEBwYXJhbSBsZW5ndGggIExlbmd0aCBcInhcIi5cclxuICogQHJldHVybnMgICAgICAgQW4gYXJyYXkgb2Ygc3RyaW5ncyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xyXG5jb25zdCBtYWtlQXJyYXlPZlN0cmluZ3MgPSAoXHJcbiAgbGVuZ3RoOiBudW1iZXIsXHJcbiAgbWFrZVN0cmluZzogKCkgPT4gc3RyaW5nLFxyXG4pOiBzdHJpbmdbXSA9PiB7XHJcbiAgY29uc3QgYXJyID0gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKTtcclxuICByZXR1cm4gYXJyLm1hcCgoKSA9PiBtYWtlU3RyaW5nKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZUFycmF5T2ZTdHJpbmdzO1xyXG4iLCAiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4vY2FwaXRhbGl6ZVwiO1xyXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xyXG5pbXBvcnQgaXNSZWFjdE5hdGl2ZSBmcm9tIFwiLi9pc1JlYWN0TmF0aXZlXCI7XHJcbmltcG9ydCBpc1dpbmRvd3MgZnJvbSBcIi4vaXNXaW5kb3dzXCI7XHJcbmltcG9ydCBtYWtlQXJyYXlPZkxlbmd0aCBmcm9tIFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiO1xyXG5pbXBvcnQgbWFrZUFycmF5T2ZTdHJpbmdzIGZyb20gXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGlzTm9kZSxcclxuICBpc1JlYWN0TmF0aXZlLFxyXG4gIGlzV2luZG93cyxcclxuICBtYWtlQXJyYXlPZkxlbmd0aCxcclxuICBtYWtlQXJyYXlPZlN0cmluZ3MsXHJcbn07XHJcbiIsICJpbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZUFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzIHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBybmcgPSAoKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgdHlwZSBJU2VlZFJhbmRvbSA9IG5ldyAoc2VlZD86IHN0cmluZykgPT4gSVBybmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRoIHtcclxuICBzZWVkcmFuZG9tOiBJU2VlZFJhbmRvbTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhdG9yT3B0aW9ucyB7XHJcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoPzogSUJvdW5kcztcclxuICB3b3Jkc1BlclNlbnRlbmNlPzogSUJvdW5kcztcclxuICByYW5kb20/OiBJUHJuZztcclxuICBzZWVkPzogc3RyaW5nO1xyXG4gIHdvcmRzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcbiAgcHVibGljIHNlbnRlbmNlc1BlclBhcmFncmFwaDogSUJvdW5kcztcclxuICBwdWJsaWMgd29yZHNQZXJTZW50ZW5jZTogSUJvdW5kcztcclxuICBwdWJsaWMgcmFuZG9tOiBJUHJuZztcclxuICBwdWJsaWMgd29yZHM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSB7IG1heDogNywgbWluOiAzIH0sXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlID0geyBtYXg6IDE1LCBtaW46IDUgfSxcclxuICAgIHJhbmRvbSxcclxuICAgIHNlZWQsXHJcbiAgICB3b3JkcyA9IFdPUkRTLFxyXG4gIH06IElHZW5lcmF0b3JPcHRpb25zID0ge30pIHtcclxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoICgke1xyXG4gICAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHtzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoJHtcclxuICAgICAgICAgIHdvcmRzUGVyU2VudGVuY2UubWluXHJcbiAgICAgICAgfSkgY2Fubm90IGV4Y2VlZCBtYXhpbXVtICgke3dvcmRzUGVyU2VudGVuY2UubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcclxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcclxuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XHJcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMud29yZHNQZXJTZW50ZW5jZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKVxyXG4gICAgICAucmVkdWNlKChhY2N1bXVsYXRvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wbHVja1JhbmRvbVdvcmQoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtjYXBpdGFsaXplKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKX0uYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpfSAke2FjY3VtdWxhdG9yfWA7XHJcbiAgICAgIH0sIFwiXCIpXHJcbiAgICAgIC50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1Y2tSYW5kb21Xb3JkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XHJcbiIsICJpbXBvcnQgeyBGT1JNQVRfSFRNTCwgRk9STUFUX1BMQUlOLCBGT1JNQVRTLCBMb3JlbUZvcm1hdCB9IGZyb20gXCIuLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQgeyBMSU5FX0VORElOR1MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xpbmVFbmRpbmdzXCI7XHJcbmltcG9ydCBHZW5lcmF0b3IsIHsgSUdlbmVyYXRvck9wdGlvbnMgfSBmcm9tIFwiLi4vbGliL2dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBpc05vZGUsIGlzUmVhY3ROYXRpdmUsIGlzV2luZG93cywgbWFrZUFycmF5T2ZTdHJpbmdzIH0gZnJvbSBcIi4uL3V0aWxcIjtcclxuXHJcbmNsYXNzIExvcmVtSXBzdW0ge1xyXG4gIHB1YmxpYyBnZW5lcmF0b3I6IEdlbmVyYXRvcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBvcHRpb25zOiBJR2VuZXJhdG9yT3B0aW9ucyA9IHt9LFxyXG4gICAgcHVibGljIGZvcm1hdDogTG9yZW1Gb3JtYXQgPSBGT1JNQVRfUExBSU4sXHJcbiAgICBwdWJsaWMgc3VmZml4Pzogc3RyaW5nLFxyXG4gICkge1xyXG4gICAgaWYgKEZPUk1BVFMuaW5kZXhPZihmb3JtYXQudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgJHtmb3JtYXR9IGlzIGFuIGludmFsaWQgZm9ybWF0LiBQbGVhc2UgdXNlICR7Rk9STUFUUy5qb2luKFwiIG9yIFwiKX0uYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2VuZXJhdG9yID0gbmV3IEdlbmVyYXRvcihvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaW5lRW5kaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuc3VmZml4KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1ZmZpeDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzUmVhY3ROYXRpdmUoKSAmJiBpc05vZGUoKSAmJiBpc1dpbmRvd3MoKSkge1xyXG4gICAgICByZXR1cm4gTElORV9FTkRJTkdTLldJTjMyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBMSU5FX0VORElOR1MuUE9TSVg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9ybWF0U3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gRk9STUFUX0hUTUwpIHtcclxuICAgICAgcmV0dXJuIGA8cD4ke3N0cn08L3A+YDtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9ybWF0U3RyaW5ncyhzdHJpbmdzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBzdHJpbmdzLm1hcCgoc3RyKSA9PiB0aGlzLmZvcm1hdFN0cmluZyhzdHIpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVdvcmRzKG51bT86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRTdHJpbmcodGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVNlbnRlbmNlcyhudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUGFyYWdyYXBocyhudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtYWtlU3RyaW5nID0gdGhpcy5nZW5lcmF0b3IuZ2VuZXJhdGVSYW5kb21QYXJhZ3JhcGguYmluZChcclxuICAgICAgdGhpcy5nZW5lcmF0b3IsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5ncyhtYWtlQXJyYXlPZlN0cmluZ3MobnVtLCBtYWtlU3RyaW5nKSkuam9pbihcclxuICAgICAgdGhpcy5nZXRMaW5lRW5kaW5nKCksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9yZW1JcHN1bTtcclxuIiwgImltcG9ydCB7IExvcmVtRm9ybWF0LCBGT1JNQVRfUExBSU4gfSBmcm9tIFwiLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExvcmVtVW5pdCxcclxuICBVTklUX1BBUkFHUkFQSCxcclxuICBVTklUX1BBUkFHUkFQSFMsXHJcbiAgVU5JVF9TRU5URU5DRVMsXHJcbiAgVU5JVF9TRU5URU5DRSxcclxuICBVTklUX1dPUkRTLFxyXG4gIFVOSVRfV09SRCxcclxufSBmcm9tIFwiLi9jb25zdGFudHMvdW5pdHNcIjtcclxuaW1wb3J0IHsgV09SRFMgfSBmcm9tIFwiLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgSVBybmcgfSBmcm9tIFwiLi9saWIvZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBMb3JlbUlwc3VtIGZyb20gXCIuL2xpYi9Mb3JlbUlwc3VtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb3JlbUlwc3VtUGFyYW1zIHtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBmb3JtYXQ/OiBMb3JlbUZvcm1hdDtcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHBhcmFncmFwaFVwcGVyQm91bmQ/OiBudW1iZXI7XHJcbiAgcmFuZG9tPzogSVBybmc7XHJcbiAgc2VudGVuY2VMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHNlbnRlbmNlVXBwZXJCb3VuZD86IG51bWJlcjtcclxuICB1bml0cz86IExvcmVtVW5pdDtcclxuICB3b3Jkcz86IHN0cmluZ1tdO1xyXG4gIHN1ZmZpeD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgbG9yZW1JcHN1bSA9ICh7XHJcbiAgY291bnQgPSAxLFxyXG4gIGZvcm1hdCA9IEZPUk1BVF9QTEFJTixcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kID0gMyxcclxuICBwYXJhZ3JhcGhVcHBlckJvdW5kID0gNyxcclxuICByYW5kb20sXHJcbiAgc2VudGVuY2VMb3dlckJvdW5kID0gNSxcclxuICBzZW50ZW5jZVVwcGVyQm91bmQgPSAxNSxcclxuICB1bml0cyA9IFVOSVRfU0VOVEVOQ0VTLFxyXG4gIHdvcmRzID0gV09SRFMsXHJcbiAgc3VmZml4ID0gXCJcIixcclxufTogSUxvcmVtSXBzdW1QYXJhbXMgPSB7fSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJhbmRvbSxcclxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xyXG4gICAgICBtYXg6IHBhcmFncmFwaFVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogcGFyYWdyYXBoTG93ZXJCb3VuZCxcclxuICAgIH0sXHJcbiAgICB3b3JkcyxcclxuICAgIHdvcmRzUGVyU2VudGVuY2U6IHtcclxuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogc2VudGVuY2VMb3dlckJvdW5kLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3JlbTogTG9yZW1JcHN1bSA9IG5ldyBMb3JlbUlwc3VtKG9wdGlvbnMsIGZvcm1hdCwgc3VmZml4KTtcclxuXHJcbiAgc3dpdGNoICh1bml0cykge1xyXG4gICAgY2FzZSBVTklUX1BBUkFHUkFQSFM6XHJcbiAgICBjYXNlIFVOSVRfUEFSQUdSQVBIOlxyXG4gICAgICByZXR1cm4gbG9yZW0uZ2VuZXJhdGVQYXJhZ3JhcGhzKGNvdW50KTtcclxuICAgIGNhc2UgVU5JVF9TRU5URU5DRVM6XHJcbiAgICBjYXNlIFVOSVRfU0VOVEVOQ0U6XHJcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XHJcbiAgICBjYXNlIFVOSVRfV09SRFM6XHJcbiAgICBjYXNlIFVOSVRfV09SRDpcclxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlV29yZHMoY291bnQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbG9yZW1JcHN1bSwgTG9yZW1JcHN1bSB9O1xyXG4iLCAiaW1wb3J0IHsgTWFwcGluZ1Jlc3VsdCBhcyBNYXBwaW5nUmVzdWx0Q29uc3RydWN0IH0gZnJvbSAnLi9jb21tb24vamF2YS10eXBlcy9qMnRzL2phdmEtdHlwZXMnXG5pbXBvcnQgTWFwcGluZ0NvbnRleHQgPSBwaW50b21hdS5ncmFhbF9hcnRpY2xlLnR5cGVzY3JpcHRfYnVuZGxpbmcuTWFwcGluZ0NvbnRleHRcbmltcG9ydCBNYXBwaW5nUmVzdWx0ID0gcGludG9tYXUuZ3JhYWxfYXJ0aWNsZS50eXBlc2NyaXB0X2J1bmRsaW5nLk1hcHBpbmdSZXN1bHRcbmltcG9ydCB7IExvcmVtSXBzdW0gfSBmcm9tICdsb3JlbS1pcHN1bSdcblxuY29uc3QgbG9yZW1JcHN1bSA9IG5ldyBMb3JlbUlwc3VtKHsgc2VudGVuY2VzUGVyUGFyYWdyYXBoOiB7IG1heDogMSwgbWluOiAxIH0gfSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCAoY3R4OiBNYXBwaW5nQ29udGV4dCk6IE1hcHBpbmdSZXN1bHQge1xuICByZXR1cm4gbmV3IE1hcHBpbmdSZXN1bHRDb25zdHJ1Y3Qoe1xuICAgIG15TmFtZTogY3R4LmdldE5hbWUoKSxcbiAgICBteVZhbHVlOiBjdHguZ2V0VmFsdWUoKSxcbiAgICBxdW90ZU9mVGhlRGF5OiBsb3JlbUlwc3VtLmdlbmVyYXRlU2VudGVuY2VzKClcbiAgfSlcbn1cbiIsICIvKlxuICogUHJvamVjdDogamF2YTJ0eXBlc2NyaXB0IC0gaHR0cHM6Ly9naXRodWIuY29tL2Jzb3JyZW50aW5vL2phdmEydHlwZXNjcmlwdFxuICpcbiAqIEF1dGhvcjogYnNvcnJlbnRpbm8gXG4gKlxuICogVFlQRVNDUklQVCBFWFBPUlRFRCBERUNMQVJBVElPTlNcbiAqXG4gKi9cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJqYXZhLmQudHNcIi8+XG5cbmludGVyZmFjZSBDb2xsZWN0aW9uc1N0YXRpYyB7XG5cblx0cmVhZG9ubHkgY2xhc3M6YW55O1xuXHRjaGVja2VkQ29sbGVjdGlvbjxFPiggYXJnMDpqYXZhLnV0aWwuQ29sbGVjdGlvbjxFPiwgYXJnMTpqYXZhLmxhbmcuQ2xhc3M8RT4gKTpqYXZhLnV0aWwuQ29sbGVjdGlvbjxFPjtcblx0Y2hlY2tlZExpc3Q8RT4oIGFyZzA6amF2YS51dGlsLkxpc3Q8RT4sIGFyZzE6amF2YS5sYW5nLkNsYXNzPEU+ICk6amF2YS51dGlsLkxpc3Q8RT47XG5cdGNoZWNrZWROYXZpZ2FibGVTZXQ8RT4oIGFyZzA6YW55IC8qamF2YS51dGlsLk5hdmlnYWJsZVNldCovLCBhcmcxOmphdmEubGFuZy5DbGFzczxFPiApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLztcblx0ZW1wdHlOYXZpZ2FibGVTZXQoICApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLztcblx0Y2hlY2tlZFF1ZXVlPEU+KCBhcmcwOmFueSAvKmphdmEudXRpbC5RdWV1ZSovLCBhcmcxOmphdmEubGFuZy5DbGFzczxFPiApOmFueSAvKmphdmEudXRpbC5RdWV1ZSovO1xuXHRjaGVja2VkU2V0PEU+KCBhcmcwOmphdmEudXRpbC5TZXQ8RT4sIGFyZzE6amF2YS5sYW5nLkNsYXNzPEU+ICk6amF2YS51dGlsLlNldDxFPjtcblx0bmV3U2V0RnJvbU1hcDxFPiggYXJnMDpqYXZhLnV0aWwuTWFwPEUsIGJvb2xlYW58bnVsbD4gKTpqYXZhLnV0aWwuU2V0PEU+O1xuXHRjaGVja2VkU29ydGVkU2V0PEU+KCBhcmcwOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRTZXQqLywgYXJnMTpqYXZhLmxhbmcuQ2xhc3M8RT4gKTphbnkgLypqYXZhLnV0aWwuU29ydGVkU2V0Ki87XG5cdGVtcHR5U29ydGVkU2V0KCAgKTphbnkgLypqYXZhLnV0aWwuU29ydGVkU2V0Ki87XG5cdGNoZWNrZWRNYXA8SyxWPiggYXJnMDpqYXZhLnV0aWwuTWFwPEssIFY+LCBhcmcxOmphdmEubGFuZy5DbGFzczxLPiwgYXJnMjpqYXZhLmxhbmcuQ2xhc3M8Vj4gKTpqYXZhLnV0aWwuTWFwPEssIFY+O1xuXHRzaW5nbGV0b25NYXA8SyxWPiggYXJnMDpLLCBhcmcxOlYgKTpqYXZhLnV0aWwuTWFwPEssIFY+O1xuXHRzeW5jaHJvbml6ZWRNYXA8SyxWPiggYXJnMDpqYXZhLnV0aWwuTWFwPEssIFY+ICk6amF2YS51dGlsLk1hcDxLLCBWPjtcblx0dW5tb2RpZmlhYmxlTWFwPEssVj4oIGFyZzA6amF2YS51dGlsLk1hcDxLLCBWPiApOmphdmEudXRpbC5NYXA8SywgVj47XG5cdGNoZWNrZWROYXZpZ2FibGVNYXA8SyxWPiggYXJnMDphbnkgLypqYXZhLnV0aWwuTmF2aWdhYmxlTWFwKi8sIGFyZzE6amF2YS5sYW5nLkNsYXNzPEs+LCBhcmcyOmphdmEubGFuZy5DbGFzczxWPiApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVNYXAqLztcblx0c3luY2hyb25pemVkTmF2aWdhYmxlTWFwKCBhcmcwOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVNYXAqLyApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVNYXAqLztcblx0dW5tb2RpZmlhYmxlTmF2aWdhYmxlTWFwKCBhcmcwOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVNYXAqLyApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVNYXAqLztcblx0Y2hlY2tlZFNvcnRlZE1hcDxLLFY+KCBhcmcwOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRNYXAqLywgYXJnMTpqYXZhLmxhbmcuQ2xhc3M8Sz4sIGFyZzI6amF2YS5sYW5nLkNsYXNzPFY+ICk6YW55IC8qamF2YS51dGlsLlNvcnRlZE1hcCovO1xuXHRzeW5jaHJvbml6ZWRTb3J0ZWRNYXAoIGFyZzA6YW55IC8qamF2YS51dGlsLlNvcnRlZE1hcCovICk6YW55IC8qamF2YS51dGlsLlNvcnRlZE1hcCovO1xuXHR1bm1vZGlmaWFibGVTb3J0ZWRNYXAoIGFyZzA6YW55IC8qamF2YS51dGlsLlNvcnRlZE1hcCovICk6YW55IC8qamF2YS51dGlsLlNvcnRlZE1hcCovO1xuXHRzb3J0PFQ+KCBhcmcwOmphdmEudXRpbC5MaXN0PFQ+ICk6dm9pZDtcblx0bWF4PFQ+KCBhcmcwOmphdmEudXRpbC5Db2xsZWN0aW9uPFQ+ICk6VDtcblx0bWluPFQ+KCBhcmcwOmphdmEudXRpbC5Db2xsZWN0aW9uPFQ+ICk6VDtcblx0bWF4PFQ+KCBhcmcwOmphdmEudXRpbC5Db2xsZWN0aW9uPFQ+LCBhcmcxOmFueSAvKmphdmEudXRpbC5Db21wYXJhdG9yKi8gKTpUO1xuXHRtaW48VD4oIGFyZzA6amF2YS51dGlsLkNvbGxlY3Rpb248VD4sIGFyZzE6YW55IC8qamF2YS51dGlsLkNvbXBhcmF0b3IqLyApOlQ7XG5cdGFkZEFsbDxUPiggYXJnMDpqYXZhLnV0aWwuQ29sbGVjdGlvbjxUPiwgLi4uYXJnMTpUW10gKTpib29sZWFuO1xuXHRyZXBsYWNlQWxsPFQ+KCBhcmcwOmphdmEudXRpbC5MaXN0PFQ+LCBhcmcxOlQsIGFyZzI6VCApOmJvb2xlYW47XG5cdGJpbmFyeVNlYXJjaDxUPiggYXJnMDpqYXZhLnV0aWwuTGlzdDxUPiwgYXJnMTpULCBhcmcyOmFueSAvKmphdmEudXRpbC5Db21wYXJhdG9yKi8gKTppbnQ7XG5cdGJpbmFyeVNlYXJjaDxUPiggYXJnMDpqYXZhLnV0aWwuTGlzdDxqYXZhLmxhbmcuQ29tcGFyYWJsZTxUPj4sIGFyZzE6VCApOmludDtcblx0bGlzdCggYXJnMDphbnkgLypqYXZhLnV0aWwuRW51bWVyYXRpb24qLyApOmFueSAvKmphdmEudXRpbC5BcnJheUxpc3QqLztcblx0c3luY2hyb25pemVkQ29sbGVjdGlvbjxUPiggYXJnMDpqYXZhLnV0aWwuQ29sbGVjdGlvbjxUPiApOmphdmEudXRpbC5Db2xsZWN0aW9uPFQ+O1xuXHR1bm1vZGlmaWFibGVDb2xsZWN0aW9uPFQ+KCBhcmcwOmphdmEudXRpbC5Db2xsZWN0aW9uPFQ+ICk6amF2YS51dGlsLkNvbGxlY3Rpb248VD47XG5cdHJldmVyc2VPcmRlciggICk6YW55IC8qamF2YS51dGlsLkNvbXBhcmF0b3IqLztcblx0cmV2ZXJzZU9yZGVyKCBhcmcwOmFueSAvKmphdmEudXRpbC5Db21wYXJhdG9yKi8gKTphbnkgLypqYXZhLnV0aWwuQ29tcGFyYXRvciovO1xuXHRlbXB0eUVudW1lcmF0aW9uKCAgKTphbnkgLypqYXZhLnV0aWwuRW51bWVyYXRpb24qLztcblx0ZW51bWVyYXRpb248VD4oIGFyZzA6amF2YS51dGlsLkNvbGxlY3Rpb248VD4gKTphbnkgLypqYXZhLnV0aWwuRW51bWVyYXRpb24qLztcblx0ZW1wdHlJdGVyYXRvcjxUPiggICk6amF2YS51dGlsLkl0ZXJhdG9yPFQ+O1xuXHRuQ29waWVzPFQ+KCBhcmcwOmludCwgYXJnMTpUICk6amF2YS51dGlsLkxpc3Q8VD47XG5cdHNpbmdsZXRvbkxpc3Q8VD4oIGFyZzA6VCApOmphdmEudXRpbC5MaXN0PFQ+O1xuXHRzeW5jaHJvbml6ZWRMaXN0PFQ+KCBhcmcwOmphdmEudXRpbC5MaXN0PFQ+ICk6amF2YS51dGlsLkxpc3Q8VD47XG5cdHVubW9kaWZpYWJsZUxpc3Q8VD4oIGFyZzA6amF2YS51dGlsLkxpc3Q8VD4gKTpqYXZhLnV0aWwuTGlzdDxUPjtcblx0ZW1wdHlMaXN0SXRlcmF0b3IoICApOmFueSAvKmphdmEudXRpbC5MaXN0SXRlcmF0b3IqLztcblx0c3luY2hyb25pemVkTmF2aWdhYmxlU2V0KCBhcmcwOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLyApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLztcblx0dW5tb2RpZmlhYmxlTmF2aWdhYmxlU2V0KCBhcmcwOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLyApOmFueSAvKmphdmEudXRpbC5OYXZpZ2FibGVTZXQqLztcblx0YXNMaWZvUXVldWUoIGFyZzA6YW55IC8qamF2YS51dGlsLkRlcXVlKi8gKTphbnkgLypqYXZhLnV0aWwuUXVldWUqLztcblx0c2luZ2xldG9uPFQ+KCBhcmcwOlQgKTpqYXZhLnV0aWwuU2V0PFQ+O1xuXHRzeW5jaHJvbml6ZWRTZXQ8VD4oIGFyZzA6amF2YS51dGlsLlNldDxUPiApOmphdmEudXRpbC5TZXQ8VD47XG5cdHVubW9kaWZpYWJsZVNldDxUPiggYXJnMDpqYXZhLnV0aWwuU2V0PFQ+ICk6amF2YS51dGlsLlNldDxUPjtcblx0c3luY2hyb25pemVkU29ydGVkU2V0KCBhcmcwOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRTZXQqLyApOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRTZXQqLztcblx0dW5tb2RpZmlhYmxlU29ydGVkU2V0KCBhcmcwOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRTZXQqLyApOmFueSAvKmphdmEudXRpbC5Tb3J0ZWRTZXQqLztcblx0Y29weTxUPiggYXJnMDpqYXZhLnV0aWwuTGlzdDxUPiwgYXJnMTpqYXZhLnV0aWwuTGlzdDxUPiApOnZvaWQ7XG5cdGZpbGw8VD4oIGFyZzA6amF2YS51dGlsLkxpc3Q8VD4sIGFyZzE6VCApOnZvaWQ7XG5cdHNvcnQ8VD4oIGFyZzA6amF2YS51dGlsLkxpc3Q8VD4sIGFyZzE6YW55IC8qamF2YS51dGlsLkNvbXBhcmF0b3IqLyApOnZvaWQ7XG5cdGRpc2pvaW50KCBhcmcwOmphdmEudXRpbC5Db2xsZWN0aW9uPGFueSAvKmphdmEubGFuZy5PYmplY3QqLz4sIGFyZzE6amF2YS51dGlsLkNvbGxlY3Rpb248YW55IC8qamF2YS5sYW5nLk9iamVjdCovPiApOmJvb2xlYW47XG5cdGVtcHR5TWFwPEssVj4oICApOmphdmEudXRpbC5NYXA8SywgVj47XG5cdGVtcHR5TmF2aWdhYmxlTWFwKCAgKTphbnkgLypqYXZhLnV0aWwuTmF2aWdhYmxlTWFwKi87XG5cdGVtcHR5U29ydGVkTWFwKCAgKTphbnkgLypqYXZhLnV0aWwuU29ydGVkTWFwKi87XG5cdGVtcHR5TGlzdDxUPiggICk6amF2YS51dGlsLkxpc3Q8VD47XG5cdGVtcHR5U2V0PFQ+KCAgKTpqYXZhLnV0aWwuU2V0PFQ+O1xuXHRmcmVxdWVuY3koIGFyZzA6amF2YS51dGlsLkNvbGxlY3Rpb248YW55IC8qamF2YS5sYW5nLk9iamVjdCovPiwgYXJnMTphbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki8gKTppbnQ7XG5cdGluZGV4T2ZTdWJMaXN0KCBhcmcwOmphdmEudXRpbC5MaXN0PGFueSAvKmphdmEubGFuZy5PYmplY3QqLz4sIGFyZzE6amF2YS51dGlsLkxpc3Q8YW55IC8qamF2YS5sYW5nLk9iamVjdCovPiApOmludDtcblx0bGFzdEluZGV4T2ZTdWJMaXN0KCBhcmcwOmphdmEudXRpbC5MaXN0PGFueSAvKmphdmEubGFuZy5PYmplY3QqLz4sIGFyZzE6amF2YS51dGlsLkxpc3Q8YW55IC8qamF2YS5sYW5nLk9iamVjdCovPiApOmludDtcblx0cmV2ZXJzZSggYXJnMDpqYXZhLnV0aWwuTGlzdDxhbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki8+ICk6dm9pZDtcblx0cm90YXRlKCBhcmcwOmphdmEudXRpbC5MaXN0PGFueSAvKmphdmEubGFuZy5PYmplY3QqLz4sIGFyZzE6aW50ICk6dm9pZDtcblx0c2h1ZmZsZSggYXJnMDpqYXZhLnV0aWwuTGlzdDxhbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki8+ICk6dm9pZDtcblx0c2h1ZmZsZSggYXJnMDpqYXZhLnV0aWwuTGlzdDxhbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki8+LCBhcmcxOmFueSAvKmphdmEudXRpbC5SYW5kb20qLyApOnZvaWQ7XG5cdHN3YXAoIGFyZzA6amF2YS51dGlsLkxpc3Q8YW55IC8qamF2YS5sYW5nLk9iamVjdCovPiwgYXJnMTppbnQsIGFyZzI6aW50ICk6dm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25zOiBDb2xsZWN0aW9uc1N0YXRpYyA9IEphdmEudHlwZShcImphdmEudXRpbC5Db2xsZWN0aW9uc1wiKTtcblxuXG5pbnRlcmZhY2UgQ29sbGVjdG9yc1N0YXRpYyB7XG5cblx0cmVhZG9ubHkgY2xhc3M6YW55O1xuXHRjb2xsZWN0aW5nQW5kVGhlbjxSUixSPiggYXJnMDphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovLCBhcmcxOkZ1bmM8UiwgUlI+ICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0ZmlsdGVyaW5nPFQ+KCBhcmcwOlByZWRpY2F0ZTxUPiwgYXJnMTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9Db2xsZWN0aW9uPEM+KCBhcmcwOlN1cHBsaWVyPEM+ICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0cGFydGl0aW9uaW5nQnk8VD4oIGFyZzA6UHJlZGljYXRlPFQ+LCBhcmcxOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi8gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRncm91cGluZ0J5Q29uY3VycmVudDxLLFQsTT4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTpTdXBwbGllcjxNPiwgYXJnMjphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0Z3JvdXBpbmdCeTxLLFQ+KCBhcmcwOkZ1bmM8VCwgSz4sIGFyZzE6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGdyb3VwaW5nQnlDb25jdXJyZW50PEssVD4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0Z3JvdXBpbmdCeTxLLFQsTT4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTpTdXBwbGllcjxNPiwgYXJnMjphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9NYXA8SyxULFUsTT4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTpGdW5jPFQsIFU+LCBhcmcyOkJpbmFyeU9wZXJhdG9yPFU+LCBhcmczOlN1cHBsaWVyPE0+ICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9Db25jdXJyZW50TWFwPEssVCxVLE0+KCBhcmcwOkZ1bmM8VCwgSz4sIGFyZzE6RnVuYzxULCBVPiwgYXJnMjpCaW5hcnlPcGVyYXRvcjxVPiwgYXJnMzpTdXBwbGllcjxNPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHRvTWFwPEssVCxVPiggYXJnMDpGdW5jPFQsIEs+LCBhcmcxOkZ1bmM8VCwgVT4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHR0b01hcDxLLFQsVT4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTpGdW5jPFQsIFU+LCBhcmcyOkJpbmFyeU9wZXJhdG9yPFU+ICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9Vbm1vZGlmaWFibGVNYXA8SyxULFU+KCBhcmcwOkZ1bmM8VCwgSz4sIGFyZzE6RnVuYzxULCBVPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHRvVW5tb2RpZmlhYmxlTWFwPEssVCxVPiggYXJnMDpGdW5jPFQsIEs+LCBhcmcxOkZ1bmM8VCwgVT4sIGFyZzI6QmluYXJ5T3BlcmF0b3I8VT4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHR0b0NvbmN1cnJlbnRNYXA8SyxULFU+KCBhcmcwOkZ1bmM8VCwgSz4sIGFyZzE6RnVuYzxULCBVPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHRvQ29uY3VycmVudE1hcDxLLFQsVT4oIGFyZzA6RnVuYzxULCBLPiwgYXJnMTpGdW5jPFQsIFU+LCBhcmcyOkJpbmFyeU9wZXJhdG9yPFU+ICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0Z3JvdXBpbmdCeTxLLFQ+KCBhcmcwOkZ1bmM8VCwgSz4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRncm91cGluZ0J5Q29uY3VycmVudDxLLFQ+KCBhcmcwOkZ1bmM8VCwgSz4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHR0ZWVpbmc8UjIsUixSMT4oIGFyZzA6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLywgYXJnMTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovLCBhcmcyOkJpRnVuY3Rpb248UjEsIFIyLCBSPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGZsYXRNYXBwaW5nPFQsVT4oIGFyZzA6RnVuYzxULCBqYXZhLnV0aWwuc3RyZWFtLlN0cmVhbTxVPj4sIGFyZzE6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdG1hcHBpbmc8VCxVPiggYXJnMDpGdW5jPFQsIFU+LCBhcmcxOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi8gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRyZWR1Y2luZzxULFU+KCBhcmcwOlUsIGFyZzE6RnVuYzxULCBVPiwgYXJnMjpCaW5hcnlPcGVyYXRvcjxVPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHJlZHVjaW5nPFQ+KCBhcmcwOlQsIGFyZzE6QmluYXJ5T3BlcmF0b3I8VD4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRhdmVyYWdpbmdEb3VibGUoIGFyZzA6YW55IC8qamF2YS51dGlsLmZ1bmN0aW9uLlRvRG91YmxlRnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGF2ZXJhZ2luZ0ludCggYXJnMDphbnkgLypqYXZhLnV0aWwuZnVuY3Rpb24uVG9JbnRGdW5jdGlvbiovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0YXZlcmFnaW5nTG9uZyggYXJnMDphbnkgLypqYXZhLnV0aWwuZnVuY3Rpb24uVG9Mb25nRnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHN1bW1pbmdEb3VibGUoIGFyZzA6YW55IC8qamF2YS51dGlsLmZ1bmN0aW9uLlRvRG91YmxlRnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHN1bW1pbmdJbnQoIGFyZzA6YW55IC8qamF2YS51dGlsLmZ1bmN0aW9uLlRvSW50RnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGNvdW50aW5nKCAgKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRzdW1taW5nTG9uZyggYXJnMDphbnkgLypqYXZhLnV0aWwuZnVuY3Rpb24uVG9Mb25nRnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHN1bW1hcml6aW5nRG91YmxlKCBhcmcwOmFueSAvKmphdmEudXRpbC5mdW5jdGlvbi5Ub0RvdWJsZUZ1bmN0aW9uKi8gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRzdW1tYXJpemluZ0ludCggYXJnMDphbnkgLypqYXZhLnV0aWwuZnVuY3Rpb24uVG9JbnRGdW5jdGlvbiovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9MaXN0KCAgKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHR0b1VubW9kaWZpYWJsZUxpc3QoICApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHN1bW1hcml6aW5nTG9uZyggYXJnMDphbnkgLypqYXZhLnV0aWwuZnVuY3Rpb24uVG9Mb25nRnVuY3Rpb24qLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdHBhcnRpdGlvbmluZ0J5PFQ+KCBhcmcwOlByZWRpY2F0ZTxUPiApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdG1heEJ5KCBhcmcwOmFueSAvKmphdmEudXRpbC5Db21wYXJhdG9yKi8gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHRtaW5CeSggYXJnMDphbnkgLypqYXZhLnV0aWwuQ29tcGFyYXRvciovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0cmVkdWNpbmc8VD4oIGFyZzA6QmluYXJ5T3BlcmF0b3I8VD4gKTphbnkgLypqYXZhLnV0aWwuc3RyZWFtLkNvbGxlY3RvciovO1xuXHR0b1NldCggICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0dG9Vbm1vZGlmaWFibGVTZXQoICApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGpvaW5pbmcoICApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG5cdGpvaW5pbmcoIGFyZzA6YW55IC8qamF2YS5sYW5nLkNoYXJTZXF1ZW5jZSovICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3IqLztcblx0am9pbmluZyggYXJnMDphbnkgLypqYXZhLmxhbmcuQ2hhclNlcXVlbmNlKi8sIGFyZzE6YW55IC8qamF2YS5sYW5nLkNoYXJTZXF1ZW5jZSovLCBhcmcyOmFueSAvKmphdmEubGFuZy5DaGFyU2VxdWVuY2UqLyApOmFueSAvKmphdmEudXRpbC5zdHJlYW0uQ29sbGVjdG9yKi87XG59XG5cbmV4cG9ydCBjb25zdCBDb2xsZWN0b3JzOiBDb2xsZWN0b3JzU3RhdGljID0gSmF2YS50eXBlKFwiamF2YS51dGlsLnN0cmVhbS5Db2xsZWN0b3JzXCIpO1xuXG5cbmludGVyZmFjZSBJdGVyYWJsZVN0YXRpYyB7XG5cblx0cmVhZG9ubHkgY2xhc3M6YW55O1xuXHRuZXc8VD4oIGFyZzA6amF2YS5sYW5nLkl0ZXJhYmxlPFQ+ICk6amF2YS5sYW5nLkl0ZXJhYmxlPFQ+O1xufVxuXG5leHBvcnQgY29uc3QgSXRlcmFibGU6IEl0ZXJhYmxlU3RhdGljID0gSmF2YS50eXBlKFwiamF2YS5sYW5nLkl0ZXJhYmxlXCIpO1xuXG5cbmludGVyZmFjZSBNYXBwaW5nUmVzdWx0U3RhdGljIHtcblxuXHRyZWFkb25seSBjbGFzczphbnk7XG5cdG5ldyggYXJnMDphbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki8gKTpwaW50b21hdS5ncmFhbF9hcnRpY2xlLnR5cGVzY3JpcHRfYnVuZGxpbmcuTWFwcGluZ1Jlc3VsdDtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcHBpbmdSZXN1bHQ6IE1hcHBpbmdSZXN1bHRTdGF0aWMgPSBKYXZhLnR5cGUoXCJwaW50b21hdS5ncmFhbF9hcnRpY2xlLnR5cGVzY3JpcHRfYnVuZGxpbmcuTWFwcGluZ1Jlc3VsdFwiKTtcblxuXG5pbnRlcmZhY2UgT3B0aW9uYWxTdGF0aWMge1xuXG5cdHJlYWRvbmx5IGNsYXNzOmFueTtcblx0ZW1wdHk8VD4oICApOmphdmEudXRpbC5PcHRpb25hbDxUPjtcblx0b2Y8VD4oIGFyZzA6VCApOmphdmEudXRpbC5PcHRpb25hbDxUPjtcblx0b2ZOdWxsYWJsZTxUPiggYXJnMDpUICk6amF2YS51dGlsLk9wdGlvbmFsPFQ+O1xufVxuXG5leHBvcnQgY29uc3QgT3B0aW9uYWw6IE9wdGlvbmFsU3RhdGljID0gSmF2YS50eXBlKFwiamF2YS51dGlsLk9wdGlvbmFsXCIpO1xuXG5cbmludGVyZmFjZSBTdHJlYW1TdGF0aWMge1xuXG5cdHJlYWRvbmx5IGNsYXNzOmFueTtcblx0YnVpbGRlciggICk6YW55IC8qamF2YS51dGlsLnN0cmVhbS5TdHJlYW0kQnVpbGRlciovO1xuXHRjb25jYXQ8VD4oIGFyZzA6amF2YS51dGlsLnN0cmVhbS5TdHJlYW08VD4sIGFyZzE6amF2YS51dGlsLnN0cmVhbS5TdHJlYW08VD4gKTpqYXZhLnV0aWwuc3RyZWFtLlN0cmVhbTxUPjtcblx0ZW1wdHk8VD4oICApOmphdmEudXRpbC5zdHJlYW0uU3RyZWFtPFQ+O1xuXHRnZW5lcmF0ZTxUPiggYXJnMDpTdXBwbGllcjxUPiApOmphdmEudXRpbC5zdHJlYW0uU3RyZWFtPFQ+O1xuXHRpdGVyYXRlPFQ+KCBhcmcwOlQsIGFyZzE6UHJlZGljYXRlPFQ+LCBhcmcyOlVuYXJ5T3BlcmF0b3I8VD4gKTpqYXZhLnV0aWwuc3RyZWFtLlN0cmVhbTxUPjtcblx0aXRlcmF0ZTxUPiggYXJnMDpULCBhcmcxOlVuYXJ5T3BlcmF0b3I8VD4gKTpqYXZhLnV0aWwuc3RyZWFtLlN0cmVhbTxUPjtcblx0b2Y8VD4oIGFyZzA6VCApOmphdmEudXRpbC5zdHJlYW0uU3RyZWFtPFQ+O1xuXHRvZjxUPiggLi4uYXJnMDpUW10gKTpqYXZhLnV0aWwuc3RyZWFtLlN0cmVhbTxUPjtcblx0b2ZOdWxsYWJsZTxUPiggYXJnMDpUICk6amF2YS51dGlsLnN0cmVhbS5TdHJlYW08VD47XG59XG5cbmV4cG9ydCBjb25zdCBTdHJlYW06IFN0cmVhbVN0YXRpYyA9IEphdmEudHlwZShcImphdmEudXRpbC5zdHJlYW0uU3RyZWFtXCIpO1xuXG5cbmludGVyZmFjZSBTdHJpbmdTdGF0aWMge1xuXG5cdHJlYWRvbmx5IGNsYXNzOmFueTtcblx0bmV3KCBhcmcwOmFueSAvKmphdmEubGFuZy5TdHJpbmdCdWZmZXIqLyApOnN0cmluZztcblx0bmV3KCBhcmcwOmFueSAvKmphdmEubGFuZy5TdHJpbmdCdWlsZGVyKi8gKTpzdHJpbmc7XG5cdG5ldyggYXJnMDpieXRlYXJyYXksIGFyZzE6aW50LCBhcmcyOmludCwgYXJnMzphbnkgLypqYXZhLm5pby5jaGFyc2V0LkNoYXJzZXQqLyApOnN0cmluZztcblx0bmV3KCBhcmcwOmJ5dGVhcnJheSwgYXJnMTpzdHJpbmcgKTpzdHJpbmc7XG5cdG5ldyggYXJnMDpieXRlYXJyYXksIGFyZzE6YW55IC8qamF2YS5uaW8uY2hhcnNldC5DaGFyc2V0Ki8gKTpzdHJpbmc7XG5cdG5ldyggYXJnMDpieXRlYXJyYXksIGFyZzE6aW50LCBhcmcyOmludCApOnN0cmluZztcblx0bmV3KCBhcmcwOmJ5dGVhcnJheSApOnN0cmluZztcblx0bmV3KCBhcmcwOmNoYXJhcnJheSwgYXJnMTppbnQsIGFyZzI6aW50ICk6c3RyaW5nO1xuXHRuZXcoIGFyZzA6Y2hhcmFycmF5ICk6c3RyaW5nO1xuXHRuZXcoIGFyZzA6c3RyaW5nICk6c3RyaW5nO1xuXHRuZXcoICApOnN0cmluZztcblx0bmV3KCBhcmcwOmJ5dGVhcnJheSwgYXJnMTppbnQsIGFyZzI6aW50LCBhcmczOnN0cmluZyApOnN0cmluZztcblx0bmV3KCBhcmcwOmJ5dGVhcnJheSwgYXJnMTppbnQgKTpzdHJpbmc7XG5cdG5ldyggYXJnMDpieXRlYXJyYXksIGFyZzE6aW50LCBhcmcyOmludCwgYXJnMzppbnQgKTpzdHJpbmc7XG5cdG5ldyggYXJnMDpbaW50XSwgYXJnMTppbnQsIGFyZzI6aW50ICk6c3RyaW5nO1xuXHRjb3B5VmFsdWVPZiggYXJnMDpjaGFyYXJyYXkgKTpzdHJpbmc7XG5cdGNvcHlWYWx1ZU9mKCBhcmcwOmNoYXJhcnJheSwgYXJnMTppbnQsIGFyZzI6aW50ICk6c3RyaW5nO1xuXHRmb3JtYXQoIGFyZzA6c3RyaW5nLCAuLi5hcmcxOmFueSAvKmphdmEubGFuZy5PYmplY3QqL1tdICk6c3RyaW5nO1xuXHRmb3JtYXQoIGFyZzA6YW55IC8qamF2YS51dGlsLkxvY2FsZSovLCBhcmcxOnN0cmluZywgLi4uYXJnMjphbnkgLypqYXZhLmxhbmcuT2JqZWN0Ki9bXSApOnN0cmluZztcblx0am9pbiggYXJnMDphbnkgLypqYXZhLmxhbmcuQ2hhclNlcXVlbmNlKi8sIC4uLmFyZzE6YW55IC8qamF2YS5sYW5nLkNoYXJTZXF1ZW5jZSovW10gKTpzdHJpbmc7XG5cdGpvaW4oIGFyZzA6YW55IC8qamF2YS5sYW5nLkNoYXJTZXF1ZW5jZSovLCBhcmcxOmphdmEubGFuZy5JdGVyYWJsZTxhbnkgLypqYXZhLmxhbmcuQ2hhclNlcXVlbmNlKi8+ICk6c3RyaW5nO1xuXHR2YWx1ZU9mKCBhcmcwOmJvb2xlYW4gKTpzdHJpbmc7XG5cdHZhbHVlT2YoIGFyZzA6YW55IC8qY2hhciovICk6c3RyaW5nO1xuXHR2YWx1ZU9mKCBhcmcwOmNoYXJhcnJheSApOnN0cmluZztcblx0dmFsdWVPZiggYXJnMDpjaGFyYXJyYXksIGFyZzE6aW50LCBhcmcyOmludCApOnN0cmluZztcblx0dmFsdWVPZiggYXJnMDpkb3VibGUgKTpzdHJpbmc7XG5cdHZhbHVlT2YoIGFyZzA6ZmxvYXQgKTpzdHJpbmc7XG5cdHZhbHVlT2YoIGFyZzA6aW50ICk6c3RyaW5nO1xuXHR2YWx1ZU9mKCBhcmcwOmFueSAvKmphdmEubGFuZy5PYmplY3QqLyApOnN0cmluZztcblx0dmFsdWVPZiggYXJnMDpsb25nICk6c3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3RyaW5nOiBTdHJpbmdTdGF0aWMgPSBKYXZhLnR5cGUoXCJqYXZhLmxhbmcuU3RyaW5nXCIpO1xuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sVUFBTSxjQUFjOztBQUNwQixVQUFNLGVBQWU7O0FBQ3JCLFVBQU0sVUFBVSxDQUFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7QUNGOUIsVUFBTSxhQUFhOztBQUNuQixVQUFNLFlBQVk7O0FBQ2xCLFVBQU0saUJBQWlCOztBQUN2QixVQUFNLGdCQUFnQjs7QUFDdEIsVUFBTSxrQkFBa0I7O0FBQ3hCLFVBQU0saUJBQWlCOztBQUN2QixVQUFNLFFBQVEsQ0FDbkIsWUFDQSxXQUNBLGdCQUNBLGVBQ0EsaUJBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaSyxVQUFNLFFBQVEsQ0FDbkIsTUFDQSxlQUNBLFVBQ0EsV0FDQSxRQUNBLFFBQ0EsUUFDQSxVQUNBLFdBQ0EsZUFDQSxhQUNBLFNBQ0EsYUFDQSxZQUNBLE1BQ0EsU0FDQSxVQUNBLFFBQ0EsTUFDQSxXQUNBLFFBQ0EsUUFDQSxRQUNBLE9BQ0EsTUFDQSxNQUNBLE1BQ0EsYUFDQSxnQkFDQSxVQUNBLE1BQ0EsTUFDQSxjQUNBLFNBQ0EsU0FDQSxVQUNBLFdBQ0EsV0FDQSxTQUNBLFNBQ0EsU0FDQSxVQUNBLFFBQ0EsT0FDQSxXQUNBLFNBQ0EsWUFDQSxXQUNBLFlBQ0EsWUFDQSxPQUNBLFFBQ0EsaUJBQ0EsUUFDQSxPQUNBLFFBQ0EsVUFDQSxXQUNBLE1BQ0EsU0FDQSxVQUNBOzs7Ozs7Ozs7Ozs7O0FDOURLLFVBQU0sZUFBZTtRQUMxQixPQUFPO1FBQ1AsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNFVCxVQUFNLGFBQWEsNENBQUMsS0FBd0I7QUFDMUMsWUFBTSxVQUFVLElBQUk7QUFDcEIsZUFBTyxRQUFRLE9BQU8sR0FBRyxnQkFB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
