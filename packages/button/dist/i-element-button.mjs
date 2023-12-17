import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
import { hello } from "@i-element/shared";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: {
    text: { default: "World" }
  },
  setup(__props) {
    const props = __props;
    function clickHandler() {
      hello(props.text);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "openx-button",
        onClick: clickHandler
      }, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const button_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as Button
};
