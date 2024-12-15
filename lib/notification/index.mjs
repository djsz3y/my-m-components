import { defineComponent as r, resolveComponent as l, openBlock as o, createBlock as n, withCtx as t, renderSlot as s, createVNode as m, normalizeStyle as a, resolveDynamicComponent as u, unref as f } from "vue";
const b = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), y = /* @__PURE__ */ r({
  __name: "index",
  props: {
    // 显示的图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 通知数量
    value: {
      type: [String, Number],
      default: ""
    },
    // 最大值
    max: {
      type: Number
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (d, p) => {
      const i = l("el-badge"), c = l("el-popover");
      return o(), n(c, {
        placement: "bottom",
        width: 300,
        trigger: "click",
        disabled: e.disabled
      }, {
        default: t(() => [
          s(d.$slots, "default")
        ]),
        reference: t(() => [
          m(i, {
            style: a([
              { cursor: e.disabled ? "not-allowed" : "pointer" },
              { filter: e.disabled ? "grayscale(100%)" : "none" }
            ]),
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: t(() => [
              (o(), n(u(`el-icon-${f(b)(e.icon)}`), {
                style: a({ "not-allowed": e.disabled })
              }, null, 8, ["style"]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["style", "value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["disabled"]);
    };
  }
}), v = {
  install(e) {
    e.component("m-notification", y);
  }
};
export {
  v as default
};
