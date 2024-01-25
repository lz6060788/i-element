import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
function defaultButtonProps() {
  return {
    type: "",
    plain: false,
    disabled: false
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: mergeDefaults({
    type: {},
    plain: { type: Boolean },
    disabled: { type: Boolean }
  }, defaultButtonProps()),
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
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
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["i-button", classes.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const button = "";
const __uno = "";
export {
  _sfc_main as Button
};
