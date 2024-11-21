<template>
  <el-table
    :data="data"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-background="elementLoadingBackground"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :width="item.width"
      >
        <!-- 插槽方式自定义列 -->
        <template #default="scope">
          <template v-if="scope.$index + scope.column.id === currentEdit">
            <div style="display: flex">
              <!-- 显示输入框 -->
              <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
              <div @click="clickEditCell">
                <!-- $slots 可以获取插槽的内容 -->
                <slot
                  name="editCell"
                  :scope="scope"
                  v-if="$slots.editCell"
                ></slot>
                <!-- 否则就显示预设的勾和叉 -->
                <div class="icons" v-else>
                  <el-icon-check
                    class="check"
                    @click="check(scope)"
                  ></el-icon-check>
                  <el-icon-close
                    class="close"
                    @click="close(scope)"
                  ></el-icon-close>
                </div>
              </div>
            </div>
          </template>
          <!-- 显示原有状态 -->
          <template v-else>
            <!-- 插槽方式展示数据 -->
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <!-- 默认非插槽方式展示数据 -->
            <span v-else>{{ scope.row[item.prop!] }}</span>
            <!-- 可编辑 -->
            <!-- <el-icon-edit
              @click="clickEdit(scope)"
              class="edit"
              v-if="item.editable"
            ></el-icon-edit> -->
            <!-- 可编辑，且动态生成当前可编辑单元格显示的图标 -->
            <component
              :is="`el-icon-${toLine(editIcon)}`"
              @click="clickEdit(scope)"
              class="edit"
              v-if="item.editable"
            ></component>
          </template>
        </template>
      </el-table-column>
    </template>

    <!-- 操作项是单独配置 -->
    <el-table-column
      :label="actionOptions!.label"
      :align="actionOptions!.align"
      :width="actionOptions!.width"
    >
      <!-- ele 自带 -->
      <template #default="scope">
        <!-- 作用域插槽 分发scope出去 -->
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
import { TableOptions } from './types'
import { toLine } from '../../../utils'

let props = defineProps({
  // 表格的配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载背景颜色
  elementLoadingBackground: {
    type: String,
  },
  // 加载图标名
  elementLoadingSpinner: {
    type: String,
  },
  // 加载svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 可编辑单元格显示的图标
  editIcon: {
    type: String,
    default: 'edit',
  },
})

// 分发事件
let emits = defineEmits(['check', 'close'])

// 当前点击的单元格
let currentEdit = ref<string>('')

// 点击编辑图标
let clickEdit = (scope: any) => {
  // 唯一标识，每次保证可编辑的只有一个输入框。
  currentEdit.value = scope.$index + scope.column.id
}

// 点击 div 时，都让其还原
let clickEditCell = () => {
  currentEdit.value = ''
}

// 点击勾
let check = (scope: any) => {
  emits('check', scope)
}

// 点击叉
let close = (scope: any) => {
  emits('close', scope)
}

// 过滤操作选项之后的配置
let tableOptions = computed(() => props.options.filter((item) => !item.action))

// 找出操作项的配置
let actionOptions = computed(() => props.options.find((item) => item.action))

// 表格是否在加载中
let isLoading = computed(() => !props.data || !props.data.length) // 没传data || 传了data但是是空数组
</script>
<style scoped lang="scss">
.edit {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
}
.icons {
  display: flex;
  position: relative;
  top: 6px;
  svg {
    cursor: pointer;
    width: 1em;
    height: 1em;
    margin-left: 8px;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
  }
}
</style>
