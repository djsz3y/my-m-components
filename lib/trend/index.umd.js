(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=o=>o.replace(/(A-Z)g/,"-$1").toLocaleLowerCase(),d={class:"trend"},i={key:1},a={class:"icon"},s=((o,n)=>{const r=o.__vccOpts||o;for(const[l,c]of n)r[l]=c;return r})(e.defineComponent({__name:"index",props:{type:{type:String,default:"up"},upIcon:{type:String,default:"ArrowUp"},downIcon:{type:String,default:"ArrowDown"},text:{type:String,default:"文字"},reverseColor:{type:Boolean,default:!1},upIconColor:{type:String,default:"#f5222d"},downIconColor:{type:String,default:"#52c41a"},upTextColor:{type:String,default:"rgb(0, 0, 0)"},downTextColor:{type:String,default:"rgb(0, 0, 0)"},fontSize:{type:String,default:"12px"}},setup(o){let n=o,r=e.useSlots(),l=e.computed(()=>n.type==="up"?n.upTextColor:n.downTextColor);return(c,y)=>(e.openBlock(),e.createElementBlock("div",d,[e.createElementVNode("div",{class:"text",style:e.normalizeStyle({color:e.unref(l),fontSize:o.fontSize})},[e.createCommentVNode(" 2）插槽显示文字——利用 vue3 的 useSlot 的特性（小技巧） "),e.createCommentVNode(" 【2】运用 useSlots() 的特性——命名插槽的名字，默认 default，所以这里是 slots.default "),e.unref(r).default?e.renderSlot(c.$slots,"default",{key:0},void 0,!0):(e.openBlock(),e.createElementBlock("div",i,e.toDisplayString(o.text),1))],4),e.createElementVNode("div",a,[e.createCommentVNode(" 1）实现颜色反转 "),e.createCommentVNode(` <el-icon-arrowup\r
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"\r
        v-if="type === 'up'"\r
      ></el-icon-arrowup>\r
      <el-icon-arrowdown\r
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"\r
        v-else\r
      ></el-icon-arrowdown> `),e.createCommentVNode(" -------------- "),e.createCommentVNode(" 【2】自定义图标——利用 Vue 提供的 component 属性，动态生成组件。 "),o.type==="up"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(t)(o.upIcon)}`),{key:0,style:e.normalizeStyle({color:o.reverseColor?"#52c41a":o.upIconColor})},null,8,["style"])):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(t)(o.downIcon)}`),{key:1,style:e.normalizeStyle({color:o.reverseColor?"#f5222d":o.downIconColor})},null,8,["style"])),e.createCommentVNode(` 1.图标选择器已经是全局组件，直接利用自己编写的组件，生成动态组件。\r
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
      - 学习讲解的如何设计组件，包括哪些地方该用什么特性，这些才是要学习的。 `)])]))}}),[["__scopeId","data-v-86dfa4f8"]]);return{install(o){o.component("m-trend",s)}}});
