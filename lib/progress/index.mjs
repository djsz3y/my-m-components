import { defineComponent as i, ref as c, onMounted as m, resolveComponent as u, openBlock as g, createBlock as f, mergeProps as d, unref as v } from "vue";
const _ = /* @__PURE__ */ i({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      default: 0
    },
    // 进度条是否有动画效果
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时长（毫秒）
    time: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["progressDone"],
  setup(n, { emit: l }) {
    let e = n, s = l, o = () => {
      s("progressDone", t.value);
    }, t = c(0);
    return m(() => {
      if (e.isAnimation) {
        let r = Math.ceil(e.time / e.percentage), a = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(a), o());
        }, r);
      } else
        t.value = e.percentage, o();
    }), (r, a) => {
      const p = u("el-progress");
      return g(), f(p, d(r.$attrs, { percentage: v(t) }), null, 16, ["percentage"]);
    };
  }
}), y = {
  install(n) {
    n.component("m-progress", _);
  }
};
export {
  y as default
};
