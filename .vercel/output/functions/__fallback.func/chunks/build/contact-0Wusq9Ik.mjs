import { _ as _export_sfc, c as __nuxt_component_0, e as useToastStore, d as useLocalePath, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false
    });
    useToastStore();
    const localePath = useLocalePath();
    ref(false);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "form-container",
        method: "post"
      }, _attrs))} data-v-e1d94593><h2 class="title-card" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.title").toUpperCase())}</h2><label class="form-label" for="name" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.name"))}</label><input id="name"${ssrRenderAttr("value", form.value.name)} class="form-input form-input-text" type="text" name="name"${ssrRenderAttr("placeholder", _ctx.$t("app.contact.typeName"))} autocomplete="off" required data-v-e1d94593><label class="form-label" for="email" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.email"))}</label><input id="email"${ssrRenderAttr("value", form.value.email)} class="form-input form-input-email" type="email" name="email" autocomplete="off" required${ssrRenderAttr("placeholder", _ctx.$t("app.contact.typeEmail"))} data-v-e1d94593><label class="form-label" for="subject" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.subject"))}</label><input id="subject"${ssrRenderAttr("value", form.value.subject)} class="form-input form-input-text" type="text" name="subject"${ssrRenderAttr("placeholder", _ctx.$t("app.contact.typeSubject"))} autocomplete="off" required data-v-e1d94593><label class="form-label" for="message" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.message"))}</label><textarea id="message" class="form-textarea" type="message" name="message" autocomplete="off" required${ssrRenderAttr("placeholder", _ctx.$t("app.contact.typeMessage"))} data-v-e1d94593>${ssrInterpolate(form.value.message)}</textarea><div class="form-privacy-container" data-v-e1d94593><input id="privacy"${ssrIncludeBooleanAttr(Array.isArray(form.value.privacy) ? ssrLooseContain(form.value.privacy, null) : form.value.privacy) ? " checked" : ""} type="checkbox" name="privacy" autocomplete="off" required data-v-e1d94593><label for="privacy" data-v-e1d94593>${ssrInterpolate(_ctx.$t("app.contact.confirm"))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("privacy-policy"),
        class: "form-privacy-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("app.contact.privacy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("app.contact.privacy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div><div class="form-input-submit-wrapped" data-v-e1d94593>`);
      _push(ssrRenderComponent(BaseButton, {
        type: "submit",
        "is-loading": false,
        severity: "primary",
        text: _ctx.$t("app.contact.send")
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1d94593"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7a6e460b>`);
      _push(ssrRenderComponent(ContactForm, null, null, _parent));
      _push(`<div class="distribution-container" data-v-7a6e460b><div class="container" data-v-7a6e460b><h3 class="title" data-v-7a6e460b>${ssrInterpolate(_ctx.$t("app.contact.distribution").toUpperCase())}</h3><a class="link-item" href="https://a-mas.net/" target="a_blank" data-v-7a6e460b>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "logo max-logo",
        src: "/logo-amas-black.png",
        preset: "logo"
      }, null, _parent));
      _push(`</a></div><a class="link-item" href="https://a-mas.net/contacto/" target="a_blank" data-v-7a6e460b>${ssrInterpolate(_ctx.$t("app.contact.title").toUpperCase())}</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7a6e460b"]]);

export { contact as default };
//# sourceMappingURL=contact-0Wusq9Ik.mjs.map
