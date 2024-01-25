(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@i-element/button"), require("@i-element/input"), require("@i-element/shared"), require("@i-element/styles"), require("@i-element/config-provider")) : typeof define === "function" && define.amd ? define(["exports", "@i-element/button", "@i-element/input", "@i-element/shared", "@i-element/styles", "@i-element/config-provider"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.iElementUi = {}, global.button, global.input, global.shared, global.styles, global.configProvider));
})(this, function(exports2, button, input, shared, styles, configProvider) {
  "use strict";
  Object.keys(button).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => button[k]
      });
  });
  Object.keys(input).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => input[k]
      });
  });
  Object.keys(shared).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => shared[k]
      });
  });
  Object.keys(styles).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => styles[k]
      });
  });
  Object.keys(configProvider).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => configProvider[k]
      });
  });
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
