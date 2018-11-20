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
    --api: 所有接口的
    --assets: 
    --base:
    --components:
    --router:
## 功能
  - 先写服务端, 确保数据能正常返回
  - 增加api方法, 实现调取数据的功能
  - 在哪个组件调用这个api, 如果是一个基础组件需要这些数据,在基础组件的父级组件中调用该api,然后将数据传递给基础组件
