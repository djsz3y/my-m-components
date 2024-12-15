import { defineComponent as y, useSlots as C, computed as v, openBlock as n, createElementBlock as s, createElementVNode as u, normalizeStyle as a, unref as l, createCommentVNode as o, renderSlot as S, toDisplayString as w, createBlock as i, resolveDynamicComponent as f } from "vue";
const p = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), m = { class: "trend" }, g = { key: 1 }, x = { class: "icon" }, I = /* @__PURE__ */ y({
  __name: "index",
  props: {
    // 标记当前趋势是上升(up)还是下降(down)
    type: {
      type: String,
      default: "up"
    },
    // 【2】自定义图标——传入上升、下降趋势图标
    // 上升趋势显示的图标：
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    // 下降趋势显示的图标：
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 趋势显示的文字
    // 1. 父组件传递过来的数据
    // 2. 插槽
    text: {
      type: String,
      default: "文字"
    },
    // 1）实现颜色反转
    // 颜色反转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 实现计算属性的文字颜色：
    // 上升趋势文字颜色
    upTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    },
    // 下降趋势文字颜色
    downTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    },
    // 自定义文字大小
    fontSize: {
      type: String,
      default: "12px"
    }
  },
  setup(e) {
    let t = e, r = C(), c = v(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (d, z) => (n(), s("div", m, [
      u(
        "div",
        {
          class: "text",
          style: a({ color: l(c), fontSize: e.fontSize })
        },
        [
          o(" 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧） "),
          o(" 【2】运用 useSlots() 的特性——命名插槽的名字，默认 default，所以这里是 slots.default "),
          l(r).default ? S(d.$slots, "default", { key: 0 }, void 0, !0) : (n(), s(
            "div",
            g,
            w(e.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      u("div", x, [
        o(" 1）实现颜色反转 "),
        o(` <el-icon-arrowup\r
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"\r
        v-if="type === 'up'"\r
      ></el-icon-arrowup>\r
      <el-icon-arrowdown\r
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"\r
        v-else\r
      ></el-icon-arrowdown> `),
        o(" -------------- "),
        o(" 【2】自定义图标——利用 Vue 提供的 component 属性，动态生成组件。 "),
        e.type === "up" ? (n(), i(f(`el-icon-${l(p)(e.upIcon)}`), {
          key: 0,
          style: a({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
        }, null, 8, ["style"])) : (n(), i(f(`el-icon-${l(p)(e.downIcon)}`), {
          key: 1,
          style: a({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
        }, null, 8, ["style"])),
        o(` 1.图标选择器已经是全局组件，直接利用自己编写的组件，生成动态组件。\r
\r
      2.vue3 的特性是组合式 API：\r
\r
      - 很多组件，都是组合式使用；\r
      - 封装组件，其实是组合式地使用各种各样的组件；\r
      - 组合式的使用各种后续的、更复杂的组件；\r
      - 很多章节都有联系；\r
\r
      3.趋势标记组件：\r
      ① 看似简单（展示出来就是一个文字加上一个图标）；\r
      ② 实际上增加很多自定义内容；\r
      ③ 编写组件过程中发现，思考的地方非常多：\r
\r
      - 手敲\r
      - 学习讲解的如何设计组件，包括哪些地方该用什么特性，这些才是要学习的。 `)
      ])
    ]));
  }
}), k = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [c, d] of t)
    r[c] = d;
  return r;
}, h = /* @__PURE__ */ k(I, [["__scopeId", "data-v-86dfa4f8"]]), B = {
  install(e) {
    e.component("m-trend", h);
  }
};
export {
  B as default
};
