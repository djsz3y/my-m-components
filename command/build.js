const path = require('path')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const fsExtra = require('fs-extra')
const fs = require('fs')

// 打包入口文件夹
const entryDir = path.resolve(__dirname, '../packages')
// 出口文件夹
const outDir = path.resolve(__dirname, '../lib_djsz3y-ui-ele-plus')

// vite 基础配置
// https://vitejs.dev/config/
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
})

// rollup 配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
}

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'djsz3y-ui-ele-plus',
        fileName: 'djsz3y-ui-ele-plus',
        formats: ['es', 'umd'],
      },
      outDir,
    },
  })
}

// 单组件打包构建
// name 组件名称
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir: path.resolve(outDir, name),
    },
  })
}

// 每个组件生成 package.json
const createPackageJson = (name) => {
  const fileStr = `
    {
      "name": "${name}",
      "main": "index.umd.js",
      "module": "index.mjs",
      "style": "style.css"
    }
  `
  // const fileStr2 = `
  //   {
  //     "name": "${name}",
  //     "main": "index.umd.js",
  //     "module": "index.es.js",
  //     "style": "styles.css"
  //   }
  // `
  // 输出
  // 安装： node fs 文件模块的拓展 fs-extra
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`), // 输出当前文件在 lib（outDir） 文件夹下，名字
    fileStr, // 内容
    'utf-8', // 编码级
  )
}

// 打包成库
const buildLib = async () => {
  await buildAll()

  // 获取组件名称组成的数组
  // 读入口文件夹 过滤 寻找含有 index.ts 的所有目录
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name)
    // 判断 componentDir 是不是目录 isDirectory()
    const isDir = fs.lstatSync(componentDir).isDirectory()
    // 是目录 且 包含 index.ts
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })

  // 循环构建
  for (const name of components) {
    await buildSingle(name)
    createPackageJson(name)
  }
}

buildLib()
