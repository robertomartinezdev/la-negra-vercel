import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    severity: {},
    text: {},
    isLoading: { type: Boolean }
  },
  emits: ["@click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0b20731><button class="${ssrRenderClass(`base-button ${props.severity}`)}"${ssrRenderAttr("is-loading", props.isLoading)} style="${ssrRenderStyle(!props.isLoading ? null : { display: "none" })}" data-v-c0b20731>${ssrInterpolate(props.text)}</button><div class="spinner-container"${ssrRenderAttr("is-loading", props.isLoading)} style="${ssrRenderStyle(props.isLoading ? null : { display: "none" })}" data-v-c0b20731>`);
      _push(ssrRenderComponent(unref(Icon), {
        class: "icon-spin",
        icon: "fa6-solid:spinner",
        spin: true,
        width: "30"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/UI/base-button/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0b20731"]]);

export { BaseButton as B };
//# sourceMappingURL=BaseButton-DMcAKxrZ.mjs.map
