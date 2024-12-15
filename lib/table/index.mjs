import { defineComponent as q, ref as T, computed as y, resolveComponent as s, resolveDirective as U, withDirectives as z, openBlock as a, createBlock as f, withCtx as b, createElementBlock as g, Fragment as u, renderList as F, unref as l, createCommentVNode as o, createVNode as p, createElementVNode as _, renderSlot as w, toDisplayString as R, resolveDynamicComponent as Z } from "vue";
const j = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), G = {
  key: 0,
  style: { display: "flex" }
}, H = { class: "icons" }, J = /* @__PURE__ */ q({
  __name: "index",
  props: {
    // 表格的配置
    options: {
      type: Array,
      required: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 加载背景颜色
    elementLoadingBackground: {
      type: String
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String
    },
    // 加载svg
    elementLoadingSvg: {
      type: String
    },
    // 加载svg的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 可编辑单元格显示的图标
    editIcon: {
      type: String,
      default: "edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: v }) {
    let d = e, m = v, r = T(""), h = (n) => {
      r.value = n.$index + n.column.id;
    }, C = () => {
      r.value = "";
    }, x = (n) => {
      m("confirm", n);
    }, $ = (n) => {
      m("cancel", n);
    }, V = y(() => d.options.filter((n) => !n.action)), k = y(() => d.options.find((n) => n.action)), B = y(() => !d.data || !d.data.length);
    return (n, L) => {
      const E = s("el-input"), D = s("el-icon-check"), A = s("el-icon-close"), S = s("el-table-column"), I = s("el-table"), N = U("loading");
      return z((a(), f(I, {
        data: e.data,
        "element-loading-text": e.elementLoadingText,
        "element-loading-background": e.elementLoadingBackground,
        "element-loading-spinner": e.elementLoadingSpinner,
        "element-loading-svg": e.elementLoadingSvg,
        "element-loading-svg-view-box": e.elementLoadingSvgViewBox
      }, {
        default: b(() => [
          (a(!0), g(
            u,
            null,
            F(l(V), (t, O) => (a(), f(S, {
              key: O,
              label: t.label,
              prop: t.prop,
              align: t.align,
              width: t.width
            }, {
              default: b((i) => [
                i.$index + i.column.id === l(r) ? (a(), g("div", G, [
                  o(" 显示输入框 "),
                  p(E, {
                    size: "small",
                    modelValue: i.row[t.prop],
                    "onUpdate:modelValue": (c) => i.row[t.prop] = c
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  _("div", {
                    onClick: L[0] || (L[0] = //@ts-ignore
                    (...c) => l(C) && l(C)(...c))
                  }, [
                    o(" $slots 可以获取插槽的内容 "),
                    n.$slots.editCell ? w(n.$slots, "editCell", {
                      key: 0,
                      scope: i
                    }, void 0, !0) : (a(), g(
                      u,
                      { key: 1 },
                      [
                        o(" 否则就显示预设的勾和叉 "),
                        _("div", H, [
                          p(D, {
                            class: "check",
                            onClick: (c) => l(x)(i)
                          }, null, 8, ["onClick"]),
                          p(A, {
                            class: "close",
                            onClick: (c) => l($)(i)
                          }, null, 8, ["onClick"])
                        ])
                      ],
                      2112
                      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                    ))
                  ])
                ])) : (a(), g(
                  u,
                  { key: 1 },
                  [
                    o(" 显示原有状态 "),
                    o(" 插槽方式展示数据 "),
                    t.slot ? w(n.$slots, t.slot, {
                      key: 0,
                      scope: i
                    }, void 0, !0) : (a(), g(
                      u,
                      { key: 1 },
                      [
                        o(" 默认非插槽方式展示数据 "),
                        _(
                          "span",
                          null,
                          R(i.row[t.prop]),
                          1
                          /* TEXT */
                        )
                      ],
                      2112
                      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                    )),
                    o(" 可编辑 "),
                    o(` <el-icon-edit\r
              @click="clickEdit(scope)"\r
              class="edit"\r
              v-if="item.editable"\r
            ></el-icon-edit> `),
                    o(" 可编辑，且动态生成当前可编辑单元格显示的图标 "),
                    t.editable ? (a(), f(Z(`el-icon-${l(j)(e.editIcon)}`), {
                      key: 2,
                      onClick: (c) => l(h)(i),
                      class: "edit"
                    }, null, 8, ["onClick"])) : o("v-if", !0)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["label", "prop", "align", "width"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          o(" 操作项是单独配置 "),
          p(S, {
            label: l(k).label,
            align: l(k).align,
            width: l(k).width
          }, {
            default: b((t) => [
              o(" 作用域插槽 分发scope出去 "),
              w(n.$slots, "action", { scope: t }, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["label", "align", "width"])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["data", "element-loading-text", "element-loading-background", "element-loading-spinner", "element-loading-svg", "element-loading-svg-view-box"])), [
        [N, l(B)]
      ]);
    };
  }
}), K = (e, v) => {
  const d = e.__vccOpts || e;
  for (const [m, r] of v)
    d[m] = r;
  return d;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-5ed5bd31"]]), Q = {
  install(e) {
    e.component("m-table", M);
  }
};
export {
  Q as default
};
