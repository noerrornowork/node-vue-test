# vue-node-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目目录架构
  1. src源码目录:
    --api: 所有接口: ajax向后端请求数据
    --assets: 
    --base:
    --components:
    --router:
## 功能
  - 先写服务端, 确保数据能正常返回
  - 增加api方法, 实现调取数据的功能
  - 在哪个组件调用这个api, 如果是一个基础组件需要这些数据,在基础组件的父级组件中调用该api,然后将数据传递给基础组件
## 另起一个文件专门放置filter过滤器,并且全局注册
  1. 在assets文件夹下,创建一个js的文件夹,下面又创建一个文件filter.js
  2. 在里面设置过滤器的逻辑,并导出
  ```
    // 价格过滤器
    let priceFilter = value => {
      return parseFloat(value).toFixed(2) + ' $'
    }
    export { priceFilter }
  ```
  3. 然后在main.js文件中,如下:
  ```
    import * as custom from '@/assets/js/filter.js'
    Object.keys(custom).forEach(key => {
      Vue.filter(key, custom[key])
    })
  ```
## axios请求中,默认格式是'application/x-www-form-urlencoded',表单数据
  1. 如果后台是application/json格式接收或者发送数据,则前端需要qs将post提交的数据序列化一下
## 需求: 缺乏一个弹框组件,将前端温馨提示
