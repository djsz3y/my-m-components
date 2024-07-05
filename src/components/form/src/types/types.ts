// 可配置的表单

import { RuleItem } from "./rule";

// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素
  type:
    | "autocomplete" // 自动补全输入框
    | "cascader" // 级联选择器
    | "checkbox" // 多选框
    | "checkbox-group" // 多选框组
    | "checkbox-button" // 多选框按钮
    | "color-picker" // 取色器
    | "date-picker" // 日期选择器
    | "input" // 输入框
    | "input-number" // 数字输入框
    | "radio" // 单选框
    | "radio-group" // 单选框组
    | "radio-button" // 单选框按钮
    | "rate" // 评分
    | "select" // 下拉
    | "option"
    // | "select-v2" // 虚拟化选择器
    | "slider" // 滑块
    | "switch" // 开关
    | "time-picker" // 时间选择器
    | "time-select" // 时间选择
    | "transfer" // 穿梭框
    | "upload"; // 上传器
  // 表单项的值
  value: any;
  // 表单项label
  label?: string;
  // 表单项的标识
  prop?: string;
  // 表单项的验证规则
  rules?: RuleItem[];
  // 表单项的占位符
  placeholder?: string;
  // 表单元素特有的属性 暂时给个any类型
  attrs?: {
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
  };
}
