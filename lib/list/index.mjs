import { defineComponent as $, resolveComponent as a, openBlock as t, createElementBlock as n, createVNode as k, withCtx as d, Fragment as y, renderList as f, createBlock as h, unref as g, createCommentVNode as o, createElementVNode as u, toDisplayString as i, createTextVNode as z, normalizeClass as B, resolveDynamicComponent as w } from "vue";
const D = (c) => c.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), E = { class: "list-tabs__item" }, T = ["onClick"], q = {
  key: 0,
  class: "avatar"
}, F = { class: "content" }, O = {
  key: 0,
  class: "title"
}, S = {
  key: 1,
  class: "time"
}, Z = {
  key: 2,
  class: "time"
}, j = { class: "actions" }, G = ["onClick"], H = {
  key: 0,
  class: "a-icon"
}, J = { class: "a-text" }, K = /* @__PURE__ */ $({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(c, { emit: v }) {
    let l = v, m = (r, _) => {
      l("clickItem", { item: r, index: _ });
    }, p = (r, _) => {
      l("clickAction", { item: r, index: _ });
    };
    return (r, _) => {
      const b = a("el-avatar"), x = a("el-tag"), A = a("el-scrollbar"), I = a("el-tab-pane"), L = a("el-tabs");
      return t(), n("div", E, [
        k(L, null, {
          default: d(() => [
            (t(!0), n(
              y,
              null,
              f(c.list, (C, N) => (t(), h(I, {
                label: C.title,
                key: N
              }, {
                default: d(() => [
                  k(
                    A,
                    { "max-height": "300px" },
                    {
                      default: d(() => [
                        (t(!0), n(
                          y,
                          null,
                          f(C.content, (e, s) => (t(), n("div", {
                            class: "container",
                            key: s,
                            onClick: (V) => g(m)(e, s)
                          }, [
                            e.avatar ? (t(), n("div", q, [
                              o(" 组合式使用 element-plus 头像的 avatar 组件 "),
                              k(b, {
                                size: "small",
                                src: e.avatar
                              }, null, 8, ["src"])
                            ])) : o("v-if", !0),
                            u("div", F, [
                              e.title ? (t(), n("div", O, [
                                u(
                                  "div",
                                  null,
                                  i(e.title),
                                  1
                                  /* TEXT */
                                ),
                                e.tag ? (t(), h(x, {
                                  key: 0,
                                  size: "small",
                                  type: e.tagType
                                }, {
                                  default: d(() => [
                                    z(
                                      i(e.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : o("v-if", !0)
                              ])) : o("v-if", !0),
                              e.desc ? (t(), n(
                                "div",
                                S,
                                i(e.desc),
                                1
                                /* TEXT */
                              )) : o("v-if", !0),
                              e.time ? (t(), n(
                                "div",
                                Z,
                                i(e.time),
                                1
                                /* TEXT */
                              )) : o("v-if", !0)
                            ])
                          ], 8, T))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        u("div", j, [
                          (t(!0), n(
                            y,
                            null,
                            f(c.actions, (e, s) => (t(), n("div", {
                              class: B(["a-item", { border: s !== c.actions.length }]),
                              key: s,
                              onClick: (V) => g(p)(e, s)
                            }, [
                              e.icon ? (t(), n("div", H, [
                                (t(), h(w(`el-icon-${g(D)(e.icon)}`)))
                              ])) : o("v-if", !0),
                              u(
                                "div",
                                J,
                                i(e.text),
                                1
                                /* TEXT */
                              )
                            ], 10, G))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
}), M = (c, v) => {
  const l = c.__vccOpts || c;
  for (const [m, p] of v)
    l[m] = p;
  return l;
}, P = /* @__PURE__ */ M(K, [["__scopeId", "data-v-c309645d"]]), R = {
  install(c) {
    c.component("m-list", P);
  }
};
export {
  R as default
};
