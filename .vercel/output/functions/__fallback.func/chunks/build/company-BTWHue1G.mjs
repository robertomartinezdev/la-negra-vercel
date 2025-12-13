import { c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useResponsive } from './useResponsive-BbUKxzDN.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'pinia';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useResponsive();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "company-container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/company.jpg",
        preset: "hero",
        fit: unref(isMobile) ? "contain" : "cover",
        alt: "Portada de la compañía",
        class: "hero"
      }, null, _parent));
      _push(`<h2 class="title-theme">${ssrInterpolate(_ctx.$t("app.company.title").toUpperCase())}</h2><p class="company-text">${ssrInterpolate(_ctx.$t("app.company.text"))}</p></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=company-BTWHue1G.mjs.map
