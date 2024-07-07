<template>
  <el-form
    ref="form"
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
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
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
import type { FormInstance } from "element-plus";

let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "before-upload",
  "before-remove",
  "on-exceed",
]);

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function,
  },
});

let model = ref<any>(null);
let rules = ref<any>(null);
let form = ref<FormInstance | null>();

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
  // console.log("onPreview");
  emits("on-preview", uploadFile);
};
let onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // console.log("onRemove");
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
  // console.log("onSuccess");
  // console.log(169, uploadFile, uploadFiles);

  // 上传图片成功 给表单上传项赋值
  // model: { prop, value } // 怎么赋值？找到 prop value，给 model 赋值即可。
  let uploadItem = props.options.find((item) => item.type === "upload")!;
  // 因为在前面（父组件）用的时候，不知道需要哪些数据，
  // 所以 response, uploadFile, uploadFiles 这三个数据，统统都给他赋值，
  // 到时候再使用到表单的时候，用户需要用哪个数据，它自己去挑选。
  model.value[uploadItem.prop!] = { response, uploadFile, uploadFiles };
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
  // console.log("onError");
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
  // console.log("onProgress");
  emits("on-progress", {
    evt,
    uploadFile,
    uploadFiles,
  });
};
let onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // console.log("onChange");
  let uploadItem = props.options.find((item) => item.type === "upload")!;
  // 取消 自动上传文件。
  if (!uploadItem?.uploadAttrs!.autoUpload) {
    model.value[uploadItem.prop!] = {
      handlerType: "onChange",
      uploadFile,
      uploadFiles,
    };
  }
  emits("on-change", {
    uploadFile,
    uploadFiles,
  });
};
let onExceed = (files: File[], uploadFiles: UploadFiles) => {
  // console.log("onExceed");
  emits("on-exceed", {
    files,
    uploadFiles,
  });
};
let beforeUpload = (rawFile: UploadRawFile) => {
  // console.log("beforeUpload");
  emits("before-upload", rawFile);
};
let beforeRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // console.log("beforeRemove");
  emits("before-remove", {
    uploadFile,
    uploadFiles,
  });
};
</script>

<style lang="scss">
.m-component-upload {
  .el-upload {
    display: block;
  }
}
</style>
