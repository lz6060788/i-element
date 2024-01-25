(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.iElementButton = {}, global.vue));
})(this, function(exports2, vue) {
  "use strict";
  function defaultButtonProps() {
    return {
      type: "",
      plain: false,
      disabled: false
    };
  }
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "button",
    props: vue.mergeDefaults({
      type: {},
      plain: { type: Boolean },
      disabled: { type: Boolean }
    }, defaultButtonProps()),
    setup(__props) {
      const props = __props;
      const classes = vue.computed(() => {
        const result = [];
        if (props.type) {
          result.push(`i-button--${props.type}`);
        }
        if (props.plain) {
          result.push("i-button--plain");
        }
        if (props.disabled) {
          result.push("i-button--disabled");
        }
        return result;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(["i-button", classes.value])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2);
      };
    }
  });
  const button = "";
  const __uno = "";
  exports2.Button = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
