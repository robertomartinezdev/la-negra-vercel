import { _ as _export_sfc, c as __nuxt_component_0 } from './server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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

const TWITCH_PRO = "https://player.twitch.tv/?channel=lanegrateatro&parent=laapp-cd3f1.web.app";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "streaming",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useResponsive();
    const tracks = [
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      },
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      },
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      },
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      },
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      },
      {
        name: "Tamino - Indigo Night",
        src: "https://open.spotify.com/embed/track/62DFvt3IhKq2i8wyigqeFO?si=59b8d02345e649e8"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-9af2e9ad><div data-v-9af2e9ad>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/streaming.jpg",
        preset: "hero",
        fit: unref(isMobile) ? "contain" : "cover",
        alt: "Portada streaming",
        class: "hero"
      }, null, _parent));
      _push(`<p class="streaming-text" data-v-9af2e9ad>${ssrInterpolate(_ctx.$t("app.streaming.text"))}</p></div><div class="digital-content-grid" data-v-9af2e9ad><!--[-->`);
      ssrRenderList(tracks, (track, index) => {
        _push(`<iframe${ssrRenderAttr("src", track.src)} width="300" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media" data-v-9af2e9ad></iframe>`);
      });
      _push(`<!--]--></div><div class="twitch-video-mobile" data-v-9af2e9ad><iframe${ssrRenderAttr("src", TWITCH_PRO)} frameborder="0" allowfullscreen="true" scrolling="no" width="300" height="200" data-v-9af2e9ad></iframe></div><div class="twitch-video-desktop" data-v-9af2e9ad><iframe${ssrRenderAttr("src", TWITCH_PRO)} frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620" data-v-9af2e9ad></iframe></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/streaming.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const streaming = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9af2e9ad"]]);

export { streaming as default };
//# sourceMappingURL=streaming-CLnRkuq-.mjs.map
