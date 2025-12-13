import { _ as _export_sfc, b as useNavigation, c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Home"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useNavigation();
    const posters = [
      { src: "/poster-clouds.jpg", route: "/shows/enlasnubes", format: "jpg" },
      { src: "/poster-nautilus.jpg", route: "/shows/nautilus", format: "jpg" },
      { src: "/poster-grass.jpg", route: "/shows/pisarelcesped", format: "jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home-container" }, _attrs))} data-v-7385156f>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/home.jpg",
        preset: "hero",
        fit: "cover",
        alt: "Portada de la compañía",
        class: "hero",
        loading: "eager",
        decoding: "async"
      }, null, _parent));
      _push(`<p class="home-text" data-v-7385156f>${ssrInterpolate(_ctx.$t("app.home.text"))}</p><div class="home-shows-container" data-v-7385156f><!--[-->`);
      ssrRenderList(posters, (poster) => {
        _push(`<div class="poster" data-v-7385156f>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: poster.src,
          preset: "poster",
          format: poster.format || "webp",
          quality: 80,
          alt: "Poster de obra",
          width: "300",
          height: "450",
          sizes: "(max-width: 768px) 90vw, (max-width: 1300px) 45vw, 300px",
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7385156f"]]);

export { index as default };
//# sourceMappingURL=index-C0oSGeeu.mjs.map
