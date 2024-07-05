## 功能

1. 可配置型表单，通过 json 对象的方式自动生成表单

非常多的代码、大量冗余代码，如果表单项非常多，这个代码可想而知，维护起来非常不方便；

每个表单其实就是维护了一个对象，及其属性，维护对象的属性，肯定很容易；

2. 具备更完善的功能，包括表单验证，动态删减表单，集成第三方的插件（比如富文本编辑器）。。。

3. 用法简单，扩展性强，可维护性强，

4. 能够用在更多的场景，比如弹框嵌套表单

## 准备工作

1. 分析 `element-plus` 表单能够在哪些方面做优化

2. 完善我们封装表单的类型，支持 ts

3. 封装的表单要具备 `element-plus` 原表单的所有功能

4. 集成第三方的插件：markdown 编辑器，富文本编辑器。。。