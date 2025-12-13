import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, d as useLocalePath, a as __nuxt_component_0$2 } from './server.mjs';
import { B as BaseButton } from './BaseButton-DMcAKxrZ.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TourListItem",
  __ssrInlineRender: true,
  props: {
    id: {},
    day: {},
    monthLocaleKey: {},
    showTitleLocaleKey: {},
    location: {},
    ticketsUrl: {},
    showUrl: {},
    month: {},
    year: {}
  },
  setup(__props) {
    const props = __props;
    const localePath = useLocalePath();
    const goToTickets = () => {
      const url = props.ticketsUrl;
      (void 0).open(url, "_blank");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e493e3a9><section data-v-e493e3a9><div class="tour-card-container" data-v-e493e3a9><div class="tour-card-date-wrapped" data-v-e493e3a9><span class="tour-card-date-mounth" data-v-e493e3a9>${ssrInterpolate(props.monthLocaleKey)}</span><span class="tour-card-date-day" data-v-e493e3a9>${ssrInterpolate(props.day)}</span></div><div class="tour-card-show-location-tickets-wrapped" data-v-e493e3a9><div class="tour-card-show-location-wrapped" data-v-e493e3a9>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "tour-card-show",
        to: unref(localePath)(props.showUrl)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.showTitleLocaleKey)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.showTitleLocaleKey), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="tour-card-place" data-v-e493e3a9>${ssrInterpolate(props.location)}</span></div><a class="tour-card-tickets-link"${ssrRenderAttr("href", props.ticketsUrl)} target="a_blank" data-v-e493e3a9>${ssrInterpolate(_ctx.$t("app.tour.tickets"))}</a>`);
      _push(ssrRenderComponent(BaseButton, {
        class: "tour-card-tickets-button",
        severity: "primary-theme",
        text: _ctx.$t("app.tour.tickets"),
        "on@click": goToTickets
      }, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/TourListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TourListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e493e3a9"]]);
const data = [
  {
    id: 1,
    day: 1,
    monthLocaleKey: "app.tour.months.jan",
    showTitleLocaleKey: "app.shows.nautilus.title",
    location: "Location 1",
    ticketsUrl: "https://example.com/tickets/show1",
    showUrl: "/shows/nautilus",
    month: 4,
    year: 2023
  },
  {
    id: 2,
    day: 15,
    monthLocaleKey: "app.tour.months.feb",
    showTitleLocaleKey: "app.shows.grass.title",
    location: "Location 2",
    ticketsUrl: "https://example.com/tickets/show2",
    showUrl: "/shows/pisarelcesped",
    month: 9,
    year: 2023
  },
  {
    id: 3,
    day: 10,
    monthLocaleKey: "app.tour.months.mar",
    showTitleLocaleKey: "app.shows.tenere.title",
    location: "Location 3",
    ticketsUrl: "https://example.com/tickets/show3",
    showUrl: "/shows/elarboldetenere",
    month: 7,
    year: 2023
  },
  {
    id: 3,
    day: 10,
    monthLocaleKey: "app.tour.months.sep",
    showTitleLocaleKey: "app.shows.clouds.title",
    location: "Location 4",
    ticketsUrl: "https://example.com/tickets/show3",
    showUrl: "/shows/enlasnubes",
    month: 12,
    year: 2023
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TourList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(ssrRenderComponent(TourListItem, {
          id: item.id,
          key: item.id,
          day: item.day,
          "month-locale-key": _ctx.$t(item.monthLocaleKey),
          "show-title-locale-key": _ctx.$t(item.showTitleLocaleKey),
          location: item.location,
          "tickets-url": item.ticketsUrl,
          "show-url": item.showUrl,
          month: item.month,
          year: item.year
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/TourList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tour",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tour-DQ_p3y8W.mjs.map
