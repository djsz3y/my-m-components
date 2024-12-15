import { defineComponent as S, ref as s, watch as u, resolveComponent as T, openBlock as y, createElementBlock as V, createElementVNode as p, createVNode as c, mergeProps as f, unref as i, isRef as h } from "vue";
const v = { style: { display: "flex" } }, x = { style: { "margin-right": "20px", width: "200px" } }, C = { style: { width: "200px" } }, E = /* @__PURE__ */ S({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 开始时间的开始选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 结束时间的开始选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间的结束选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: g }) {
    let o = g, l = s(""), a = s(""), r = s(!0);
    return u(
      () => l.value,
      (t) => {
        console.log(t), t ? (r.value = !1, o("startChange", t)) : (a.value = "", r.value = !0);
      }
    ), u(
      () => a.value,
      (t) => {
        t && o("endChange", {
          startTime: l.value,
          endTime: t
        });
      }
    ), (t, d) => {
      const m = T("el-time-select");
      return y(), V("div", v, [
        p("div", x, [
          c(m, f({
            modelValue: i(l),
            "onUpdate:modelValue": d[0] || (d[0] = (n) => h(l) ? l.value = n : l = n),
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, t.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end"])
        ]),
        p("div", C, [
          c(m, f({
            modelValue: i(a),
            "onUpdate:modelValue": d[1] || (d[1] = (n) => h(a) ? a.value = n : a = n),
            "min-time": i(l),
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: i(r)
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), b = {
  install(e) {
    e.component("m-choose-time", E);
  }
};
export {
  b as default
};
