import { _ as _export_sfc, c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "enlasnubes",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useResponsive();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5f4cba6f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/show-clouds.jpg",
        preset: "hero",
        fit: unref(isMobile) ? "contain" : "cover",
        alt: "Portada de la compañía",
        class: "hero"
      }, null, _parent));
      _push(`<article class="show-info-container" data-v-5f4cba6f><h2 class="title-card" data-v-5f4cba6f>${ssrInterpolate(_ctx.$t("app.shows.clouds.title").toUpperCase())}</h2><div class="show-timeline-container" data-v-5f4cba6f><span data-v-5f4cba6f>2000</span><span data-v-5f4cba6f>|</span><span data-v-5f4cba6f>40&#39;</span></div><p class="show-sinopsis" data-v-5f4cba6f>${ssrInterpolate(_ctx.$t("app.shows.clouds.synopsis"))}</p>`);
      _push(ssrRenderComponent(unref(Icon), {
        class: "icon-item",
        icon: "fa6-solid:download",
        inline: true,
        width: "35"
      }, null, _parent));
      _push(`<span class="dossier" data-v-5f4cba6f>${ssrInterpolate(_ctx.$t("app.shared.dossier"))}</span></article><iframe width="560" height="315" src="https://www.youtube.com/embed/Bo1IX1QxM8c?si=DEdwafBq7P_OCoxb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="teaser" data-v-5f4cba6f></iframe></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shows/enlasnubes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const enlasnubes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f4cba6f"]]);

export { enlasnubes as default };
//# sourceMappingURL=enlasnubes-BGxb6nKq.mjs.map
