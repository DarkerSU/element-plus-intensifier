# element-plus-intensifier

## ElementPlus 组件库增强器

element-plus-intensifier 是一款基于 element-plus 的组件增强器，旨在不降低页面效果的情况下以最少的代码量完成开发，借鉴了 jsx/tsx 的开发思想，将 element-plus 组件进行整合，让开发更轻松，让代码更简洁。

### 安装

> 安装前提：增强是基于element-plus开发，所以必须先安装element-plus

* **步骤 1：** 安装依赖

  ```shell
    # 选择一个你喜欢的包管理器

    # NPM
    $ npm install element-plus-intensifier--save

    # Yarn
    $ yarn add element-plus-intensifier

    # pnpm
    $ pnpm install element-plus-intensifier
  ```
* **步骤 2：** 引入依赖
  全局注册

  ```ts
  import App from './App.vue'

  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'

  import { FormGenerator, TableGenerator,IUpload } from 'element-plus-intensifier'

  const app = createApp(App)

  app.component('FormGenerator', FormGenerator);
  app.component('TableGenerator', TableGenerator);
  app.component('IUpload',IUpload)

  app.use(ElementPlus).mount('#app')
  ```

### 目前支持

#### 上传组件增强器 IUpload

按需引入

```ts
import { IUpload } from 'element-plus-intensifier'
```

使用案例

```ts
   <IUpload 
      action="http://****/uploadFile" list-type="picture-card" 
      :multiple="true"
      :max-size="90" 
      :file-list="fileList" 
      accept="image/*" 
      :on-success="Success">
      <el-button type="primary">点我上传</el-button>
   <IUpload>
```
