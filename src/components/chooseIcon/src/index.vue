<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <!-- 动态组件 -->
            <component :is="`el-icon-${toLine(item)}`" />
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue";
// 引入 vue的特性 watch 监听
import { watch, ref } from "vue";
import { toLine } from "../../../utils";
import { useCopy } from "../../../hooks/useCopy";

// 1.接收父组件传值：标题，和控制图标选择的布尔值；
let props = defineProps<{
  // 1.1.弹出框的标题
  title: string;
  // 1.2.控制弹出框的显示与隐藏
  visible: boolean;
}>();
let emits = defineEmits(["update:visible"]);
// 拷贝一份父组件传递过来的 visible，
// - 因为通过 v-model 传到 el-dialog 的内部的时候，
// - 它实际上也是把这个值 visible 做切换，
// - 但是我们切换的实际上是从父组件传递过来的数据，所以不太好。
// 所以用 `dialogVisible`，传递的初始值就是 `props.visible`。
// 所以用的时候，通通都是用的是 dialogVisible 的值。
let dialogVisible = ref<boolean>(props.visible);
// 点击按钮显示弹出框
let handleClick = () => {
  // 同样地，
  // 1.需要修改父组件的数据
  emits("update:visible", !props.visible);
};
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`;
  // 复制文本
  useCopy(text);
  // 关闭弹框
  dialogVisible.value = false
}
// 监听 visible 的变化（只能监听第一次的变化）
// - 因为第一次，从父组件传过来的 visible，把它赋值成了 dialogVisible，
// - 现在 dialogVisible 传递到了 el-dialog 的内部，
// - 现在所有变化的值都跟 dialogVisible 有关，跟父组件传过来的 visible 没有关系了。
// 所以：
// - 现在要监听组件内部的dialogVisible的变化，而不是父组件的 visible 的变化。
watch(
  () => props.visible,
  (newVal) => {
    // 在父组件的 dialogVisible 变化之后，重新给自己组件内部拷贝的这个值 dialogVisible 赋值，就可以了。
    dialogVisible.value = newVal;
  }
);

// 监听组件内部的 dialogVisible 的变化，而不是父组件的 visible 的变化。
watch(
  () => dialogVisible.value,
  (newVal) => {
    // 在父组件的 dialogVisible 变化之后，重新给自己组件内部拷贝的这个值 dialogVisible 赋值，就可以了。
    emits("update:visible", newVal); // 直接把改了之后的值传过去即可，因为关闭的时候，就成为了 false 了。
  }
);

// 再解释一下为什么？
// 因为我们不想让所有改变的值是 直接改变父组件传递过来的 props 里面的值，
// 所以我们再组件内部做了一个拷贝，把值重新复制一份；

// 那么第一次父组件传递过来的值变化之后，我们给它赋了值 dialogVisible，
// 那么第一次之后，我们自己子组件的内部，全部用的是我们自己的值，所以跟子组件没有关系了，
// 那么我们还需要监听我们自己拷贝之后的值 dialogVisible，然后让它的值再传递给父组件（分发出去）。

// 好，这样的话，我们的组件就没有任何问题了。

// 再解释一下，
// - 因为如果不拷贝一份数据，那么相当于 el-dialog 组件内部直接改了父组件传递过来的值，
// - 是不太好的，因为 vue 也是单项数据流，不能直接修改 props 里面传过来的值。

// 可以通过其他方式传值，比如通过 v-model 来传值，这样是可以的。

// 最后总结一下：
// - 那么拷贝之后，所有监听的变化只有第一次是跟父组件的 visible 有关系，
// - 后面就跟传过来的 visible 没有关系了，它就和组件内部拷贝之后的值 dialogVisible 有关系了。
// - 所以在这用了两次监听，这也是一个小技巧，后面跟弹框相关的都会用到它，很重要哈。
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
