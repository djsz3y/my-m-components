<template>
  <div>
    <m-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @on-success="handleSuccess"
      @on-error="handleError"
      @on-progress="handleProgress"
      @on-change="handleChange"
      @on-exceed="handleExceed"
      @before-upload="beforeUpload"
      @before-remove="beforeRemove"
      @http-request="httpRequest"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px; margin-top: 7px">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </m-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from "../../components/form/src/types/types";
import { ElMessage, ElMessageBox } from "element-plus";
import type { FormInstance, UploadProps } from "element-plus";
import { ref } from "vue";

interface Scope {
  form: FormInstance; // "element-plus" 或者 /components/form/src/types/types
  model: any;
}

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "usename",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    label: "职位",
    placeholder: "请选择职位",
    prop: "role",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        // value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        // value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        // value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "not",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      // action: "#",
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: true,
      limit: 3,
      autoUpload: false,
    },
    rules: [
      {
        required: true,
        message: "图片不能为空",
        trigger: "change",
      },
    ],
  },
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log("handlePreview");
  console.log(uploadFile);
};

const handleRemove: UploadProps["onRemove"] = (val: any) => {
  console.log("handleRemove");
  console.log(val.uploadFile, val.uploadFiles);
};

const handleSuccess: UploadProps["onSuccess"] = (val: any) => {
  console.log("handleSuccess");
  console.log(val.response, val.uploadFile, val.uploadFiles);
};

const handleError: UploadProps["onError"] = (val: any) => {
  console.log("handleError");
  console.log(val.error, val.uploadFile, val.uploadFiles);
};

const handleProgress: UploadProps["onProgress"] = (val: any) => {
  console.log("handleProgress");
  console.log(val.evt, val.uploadFile, val.uploadFiles);
};

const handleChange: UploadProps["onChange"] = (val: any) => {
  console.log("handleChange");
  console.log(val.uploadFile, val.uploadFiles);
  // let uploadItem = options.find((item) => item.type === "upload")!;
  // uploadItem?.uploadAttrs?.fileList?.push(val.uploadFile);
  // uploadItem.uploadAttrs!.fileList = val.uploadFiles;
};

const handleExceed: UploadProps["onExceed"] = (val: any) => {
  console.log("handleExceed");
  console.log(val.files, val.uploadFiles);
  ElMessage.warning(
    `The limit is 3, you selected ${
      val.files.length
    } files this time, add up to ${
      val.files.length + val.uploadFiles.length
    } totally`
  );
};

const beforeUpload: UploadProps["beforeUpload"] = (rawFile: any) => {
  console.log("beforeUpload");
  console.log(rawFile);
};

const beforeRemove: UploadProps["beforeRemove"] = (val: any) => {
  console.log("beforeRemove");
  console.log(val.uploadFile, val.uploadFiles);
  return ElMessageBox.confirm(
    `Cancel the transfert of ${val.uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

const httpRequest = (options: any) => {
  console.log("httpRequest");
  console.log(options);
};

let form = ref();

// 提交
const submitForm = // async
  (scope: Scope) => {
    // if (!scope.form) return;
    // await
    scope.form.validate((valid, fields) => {
      if (valid) {
        console.log("submit!", scope.model);
        ElMessage.success("提交成功");
      } else {
        ElMessage.error("表单填写有误，请检查");
      }
    });
  };

// 1.父组件-重置表单：
// 1.1. 不能调用 scope.form 了，
// 1.2. 应该调用 m-form 取的 ref ——取表单实例上的方法，
// 1.3. 不调用 scope，所以就不用传了，
// 1.4. 直接调用表单实例上的方法；
const resetForm = () => {
  if (!form.value) return;
  form.value.resetFields();
};

// 2.所以这个方法 resetFields：
// 2.1. 是子组件当中通过 defineExpose 分发出去的，
// 2.2. 所以这是 vue3 新增的，因为 vue3 移除了 $children 的属性，
// 2.3. 所以我们获取到它的实例和方法，必须通过 defineExpose 分发出去，
// 2.4. 然后在父组件通过 ref 获取到组件的实例，上面才有 resetFields 这个方法。
</script>

<style scoped lang="scss"></style>
