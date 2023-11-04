(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@i-element/button"), require("@i-element/input"), require("@i-element/shared")) : typeof define === "function" && define.amd ? define(["exports", "@i-element/button", "@i-element/input", "@i-element/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.iElementUi = {}, global.button, global.input, global.shared));
})(this, function(exports2, button, input, shared) {
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
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
