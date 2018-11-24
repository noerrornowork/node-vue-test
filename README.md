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
## 生成ali图标
  1. http://at.alicdn.com/t/font_923480_4hn1gvc2mxy.css
  2. 到ali图库去找自己喜欢的字体图标,添加到自己的项目
  3. 点生成代码,----则生成css样式代码
  4. 将改样式引入index.html页面
  5. 注意: 要在有网络的情况下
## 自定义tab组件
  1. 定义
  2. 注册
  3. 使用
## 写重置样式,去掉一些HTML元素的默认样式
## 实现页面级缓存
## 实现路由动画
## 加载更多
  1. 默认每次给5条
  2. offset=5, 表示从第5条开始再给5条信息
## coding split: 代码分割