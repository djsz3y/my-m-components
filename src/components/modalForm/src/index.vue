<template>
  <div :class="{ 'm-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <m-form
          label-width="100px"
          ref="form"
          :options="options"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @on-success="onSuccess"
          @on-error="onError"
          @on-progress="onProgress"
          @on-change="onChange"
          @on-exceed="onExceed"
          @before-upload="beforeUpload"
          @before-remove="beforeRemove"
          @http-request="httpRequest"
        >
          <template #uploadArea>
            <slot name="uploadArea"></slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"></slot>
          </template>
          <template #addOptions>
            <slot name="addOptions"></slot>
          </template>
        </m-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from "vue";
import { FormOptions } from "../../form/src/types/types";
import type { FormInstance } from "element-plus";
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
  // 下面全是处理上传的事件
  onPreview: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  onError: {
    type: Function,
  },
  onProgress: {
    type: Function,
  },
  onChange: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
  beforeUpload: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  httpRequest: {
    type: Function,
  },
});

let emits = defineEmits(["update:visible"]);

// 表单实例
let form = ref<FormInstance | null>();

// 弹出框的显示与隐藏
let dialogVisible = ref<boolean>(props.visible);

// 通过两次监听，反复修改父组件的值；

// 第一、监听 props.visible
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);

// 第二、监听 dialogVisible.value
watch(
  () => dialogVisible.value,
  (val) => {
    // 打印出来 val ，此时，打开是 true，关闭时 false；
    // - 点开，第一次是 true，
    // - 关闭，是 false 打不开；
    console.log(val);
    // - 但是，父组件的 visible 并没有改（views 里没有把值传过来）。

    // - 所以，需要通过分发事件 emits 的方式，改变父组件的值，控制弹出框的显示与隐藏。
    emits("update:visible", val);
  }
);
</script>

<style scoped lang="scss"></style>
