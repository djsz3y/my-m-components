<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-if="item.type !== 'upload'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
        <el-upload
          v-else
          class="m-component-upload"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        >
          <!-- 情况二：
          component 嵌套 component 的形式： 
          类似：下拉框、或者多选框组、单选框组的情况，
          它不仅一个组件构成，它有多个组件构成，那就需要配置 children 属性。 -->
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from "lodash/cloneDeep";
import {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadRequestOptions,
} from "element-plus";

let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "before-upload",
  "before-remove",
  "http-request",
  "on-exceed",
]);

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});

let model = ref<any>(null);
let rules = ref<any>(null);

// 初始化表单
let initForm = () => {
  // props 必须用户传进来，并且有长度才行；
  // 保证 options 有值才渲染。
  if (props.options && props.options.length) {
    // 深拷贝
    let m: any = {};
    let r: any = {};

    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    // 在外面拷贝，不在循环里拷贝
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
    console.log(model.value);
    console.log(rules.value);
  }
};

onMounted(() => {
  initForm();
});

watch(
  () => props.options,
  () => {
    initForm();
  },
  {
    deep: true,
  }
);

// 上传组件的所有方法
let onPreview = (uploadFile: UploadFile) => {
  emits("on-preview", uploadFile);
};
let onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits("on-remove", {
    uploadFile,
    uploadFiles,
  });
};
let onSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits("on-success", {
    response,
    uploadFile,
    uploadFiles,
  });
};
let onError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits("on-error", {
    error,
    uploadFile,
    uploadFiles,
  });
};
let onProgress = (
  evt: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits("on-progress", {
    evt,
    uploadFile,
    uploadFiles,
  });
};
let onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits("on-change", {
    uploadFile,
    uploadFiles,
  });
};
let onExceed = (files: File[], uploadFiles: UploadFiles) => {
  emits("on-exceed", {
    files,
    uploadFiles,
  });
};
let beforeUpload = (rawFile: UploadRawFile) => {
  emits("before-upload", rawFile);
};
let beforeRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits("before-remove", {
    uploadFile,
    uploadFiles,
  });
};
// todo
let httpRequest = (options: UploadRequestOptions) => {
  emits("http-request", options);
};
</script>

<style lang="scss">
.m-component-upload {
  .el-upload {
    display: block;
  }
}
</style>
