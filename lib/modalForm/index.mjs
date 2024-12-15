import { defineComponent as O, ref as u, watch as m, resolveComponent as c, openBlock as R, createElementBlock as b, normalizeClass as h, createVNode as d, mergeProps as F, unref as f, isRef as E, withCtx as t, renderSlot as l } from "vue";
const P = /* @__PURE__ */ O({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    // 表单的配置项
    options: {
      type: Array,
      required: !0
    },
    // 只在屏幕区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    // 下面全是处理上传的事件
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onError: {
      type: Function
    },
    onProgress: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    httpRequest: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: p }) {
    let r = e, v = p, i = u(), n = u(r.visible);
    return m(
      () => r.visible,
      (o) => {
        n.value = o;
      }
    ), m(
      () => n.value,
      (o) => {
        console.log(o), v("update:visible", o);
      }
    ), (o, s) => {
      const y = c("m-form"), g = c("el-dialog");
      return R(), b(
        "div",
        {
          class: h({ "m-choose-icon-dialog-body-height": e.isScroll })
        },
        [
          d(g, F({
            modelValue: f(n),
            "onUpdate:modelValue": s[0] || (s[0] = (a) => E(n) ? n.value = a : n = a)
          }, o.$attrs), {
            default: t(() => [
              d(y, {
                "label-width": "100px",
                ref_key: "form",
                ref: i,
                options: e.options,
                onOnPreview: e.onPreview,
                onOnRemove: e.onRemove,
                onOnSuccess: e.onSuccess,
                onOnError: e.onError,
                onOnProgress: e.onProgress,
                onOnChange: e.onChange,
                onOnExceed: e.onExceed,
                onBeforeUpload: e.beforeUpload,
                onBeforeRemove: e.beforeRemove,
                onHttpRequest: e.httpRequest
              }, {
                uploadArea: t(() => [
                  l(o.$slots, "uploadArea")
                ]),
                uploadTip: t(() => [
                  l(o.$slots, "uploadTip")
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["options", "onOnPreview", "onOnRemove", "onOnSuccess", "onOnError", "onOnProgress", "onOnChange", "onOnExceed", "onBeforeUpload", "onBeforeRemove", "onHttpRequest"])
            ]),
            footer: t(() => [
              l(o.$slots, "footer", { form: f(i) })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["modelValue"])
        ],
        2
        /* CLASS */
      );
    };
  }
}), C = {
  install(e) {
    e.component("m-modal-form", P);
  }
};
export {
  C as default
};
