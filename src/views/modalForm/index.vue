<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <m-modal-form
      title="编辑用户"
      width="50%"
      v-model:visible="visible"
      :options="options"
    >
      <template #footer="{ form }">
        <el-button @click="cancel(form)">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
    </m-modal-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FormOptions } from "../../components/form/src/types/types";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
// 变量控制弹出框的显示与隐藏。
let visible = ref<boolean>(false);
let open = () => {
  visible.value = true;
};

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
  // {
  //   type: "upload",
  //   label: "上传",
  //   prop: "pic",
  //   uploadAttrs: {
  //     // action: "#",
  //     action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
  //     multiple: true,
  //     limit: 3,
  //     autoUpload: false,
  //   },
  //   rules: [
  //     {
  //       required: true,
  //       message: "图片不能为空",
  //       trigger: "change",
  //     },
  //   ],
  // },
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
