(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./config/site"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./config/site"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.site);
    global.index = mod.exports;
  }
})(this, function (_site) {
  "use strict";

  _site = _interopRequireDefault(_site);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  console.log(_site.default);
});
//# sourceMappingURL=index.js.map