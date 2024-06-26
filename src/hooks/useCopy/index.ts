import { ElMessage } from "element-plus";
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement("input");
  // 给输入框value赋值
  input.value = text;
  // 追加到body里面去
  document.body.appendChild(input);
  // 选择输入框的操作
  input.select();
  // 执行浏览器复制命令
  document.execCommand("Copy");
  // 移除输入框
  document.body.removeChild(input);
  // 提示用户
  ElMessage.success("复制成功");
};
