import { f as useLocaleStore, c as __nuxt_component_0 } from './server.mjs';
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
  __name: "nautilus",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useResponsive();
    const store = useLocaleStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/show-nautilus.jpg",
        preset: "hero",
        fit: unref(isMobile) ? "contain" : "cover",
        alt: "Portada de nautilus",
        class: "hero"
      }, null, _parent));
      _push(`<article class="show-info-container"><h2 class="title-card">${ssrInterpolate(_ctx.$t("app.shows.nautilus.title").toUpperCase())}</h2><div class="show-timeline-container"><span>2021</span><span>|</span><span>40&#39;</span></div><p class="show-sinopsis">${ssrInterpolate(_ctx.$t("app.shows.nautilus.synopsis"))}</p>`);
      _push(ssrRenderComponent(unref(Icon), {
        class: "icon-item",
        icon: "fa6-solid:download",
        inline: true,
        width: "35"
      }, null, _parent));
      _push(`<span class="dossier">${ssrInterpolate(_ctx.$t("app.shared.dossier"))}</span></article>`);
      if (unref(store).locale !== "val") {
        _push(`<iframe src="https://player.vimeo.com/video/675427754?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="NAUTILUS  20.000 Leguas de viaje submarino (Teaser)" class="show-teaser"></iframe>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).locale === "val") {
        _push(`<iframe src="https://player.vimeo.com/video/713424742?h=7274e342c8" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen class="show-teaser"></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shows/nautilus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nautilus-uQ94R9IN.mjs.map
