<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form
      isScroll
      title="编辑用户"
      width="50%"
      v-model:visible="visible"
      v-model:options="options"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :http-request="httpRequest"
    >
      <template #footer="{ form }">
        <el-button @click="cancel(form)">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px; margin-top: 7px">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #addOptions>
        <el-button
          @click="addOptions"
          icon="el-icon-plus"
          circle
          size="small"
          style="font-size: 16px"
          title="添加表单项"
        ></el-button>
      </template>
    </m-modal-form>
    <!-- <m-modal-form
      title="添加表单项"
      width="30%"
      v-model:visible="visible_modal2"
      :options="options_modal2"
    >
    </m-modal-form> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormOptions } from "../../components/form/src/types/types";
import type { FormInstance, UploadProps } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";
// 变量控制弹出框的显示与隐藏。
let visible = ref<boolean>(false);
let open = () => {
  visible.value = true;
};

let i_add = 0;
/**
 * 添加表单项
 */
const addOptions = () => {
  const formItem: FormOptions = {
    type: "input",
    value: "",
    label: "label" + i_add,
    prop: "label" + i_add,
    attrs: {
      clearable: true,
    },
  };
  i_add += 1;

  // obj.label
  options.value.push(formItem);
};

/**
 * 删除表单项
 */
const deleteOptions = (prop: string) => {
  console.log(prop);
  const index = options.value.findIndex((formItem) => formItem.prop === prop);
  options.value.splice(index, 1);
};

// let visible_modal2 = ref<boolean>(false);
// let open_modal2 = () => {
//   visible_modal2.value = true;
// };
// let options_modal2 = ref<FormOptions[]>([
//   {
//     type: "select",
//     value: "",
//     label: "type",
//     placeholder: "type",
//     prop: "type",
//     attrs: {
//       style: {
//         width: "100%",
//       },
//     },
//     children: [
//       { type: "option", label: "autocomplete", value: "autocomplete" },
//       { type: "option", label: "cascader", value: "cascader" },
//       { type: "option", label: "checkbox", value: "checkbox" },
//       { type: "option", label: "checkbox-group", value: "checkbox-group" },
//       { type: "option", label: "checkbox-button", value: "checkbox-button" },
//       { type: "option", label: "color-picker", value: "color-picker" },
//       { type: "option", label: "date-picker", value: "date-picker" },
//       { type: "option", label: "input", value: "input" },
//     ],
//   },
//   {
//     type: "input",
//     value: "",
//     label: "label",
//     placeholder: "label",
//     prop: "label",
//   },
// ]);

// 变量控制表单项的增加与删除
let options = ref<FormOptions[]>([
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
        trigger: "change",
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
        trigger: "change",
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
        trigger: "change",
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
]);

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log("modalForm", "handlePreview");
  console.log(uploadFile);
};

const handleRemove: UploadProps["onRemove"] = (val: any) => {
  console.log("modalForm", "handleRemove");
  console.log(val.uploadFile, val.uploadFiles);
};

const handleSuccess: UploadProps["onSuccess"] = (val: any) => {
  console.log("modalForm", "handleSuccess");
  console.log(val.response, val.uploadFile, val.uploadFiles);
};

const handleError: UploadProps["onError"] = (val: any) => {
  console.log("modalForm", "handleError");
  console.log(val.error, val.uploadFile, val.uploadFiles);
};

const handleProgress: UploadProps["onProgress"] = (val: any) => {
  console.log("modalForm", "handleProgress");
  console.log(val.evt, val.uploadFile, val.uploadFiles);
};

const handleChange: UploadProps["onChange"] = (val: any) => {
  console.log("modalForm", "handleChange");
  console.log(val.uploadFile, val.uploadFiles);
  // let uploadItem = options.find((item) => item.type === "upload")!;
  // uploadItem?.uploadAttrs?.fileList?.push(val.uploadFile);
  // uploadItem.uploadAttrs!.fileList = val.uploadFiles;
};

const handleExceed: UploadProps["onExceed"] = (val: any) => {
  console.log("modalForm", "handleExceed");
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
  console.log("modalForm", "beforeUpload");
  console.log(rawFile);
};

const beforeRemove: UploadProps["beforeRemove"] = (val: any) => {
  console.log("modalForm", "beforeRemove");
  console.log(val.uploadFile, val.uploadFiles);
  return ElMessageBox.confirm(
    `Cancel the transfert of ${val.uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

const httpRequest = (options: any) => {
  console.log("modalForm", "httpRequest");
  console.log(options);
};

// 点击确认
let confirm = (form: any) => {
  // 因为 form 子组件中，分发出来的 getFormData 方法 `return` 了，
  // 执行后的 validate 才是真正的表单验证方法 `validate`。
  let validate = form.validate();
  let model = form.getFormData();
  // 表单验证
  validate((valid: boolean) => {
    if (valid) {
      ElMessage.success("验证成功");
      console.log(model);
    } else {
      ElMessage.error("验证失败");
    }
  });
};

// 点击取消
let cancel = (form: FormInstance) => {
  visible.value = false;
};
</script>

<style scoped lang="scss"></style>
