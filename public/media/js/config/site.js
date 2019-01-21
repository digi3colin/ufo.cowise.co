(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.site = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    paths: {
      "jxon": "//unpkg.com/jxon@2.0.0-beta.5/jxon.min",
      "react": "//unpkg.com/react@16.7.0/umd/react.development",
      "react-dom": "//unpkg.com/react-dom@16.7.0/umd/react-dom.development",
      'ufo-kit': "../../vendors/ufo-kit/ufo-kit"
    },
    shim: {}
  };
  _exports.default = _default;
});
//# sourceMappingURL=site.js.map