# heymycat_map

> A Vue.js project

测试注意事项：
1.	用户名密码后端未校验，按提示输入点击登录即可进入地图页面。
2.	用户信息展示在地图的右上角。

项目名称：heymycat_map
项目描述：模拟用户登录展示地图页面。
主要技术：
1.	vue-router实现页面带参数跳转。
2.	前端进行登录注册的初步校验。
3.	请求地址参数的展示。
4.	vue-baidu-map地图的使用
遇到的问题及解决方式：
1.	写地图页面时由于对地图不是很熟悉，先在vue生态系统查找地图资源，读文档进行进一步操作。
多边形的实现，首先想到点击的时候获得该点的经纬度，文档中地图基础有一个point属性，显示当前点的经纬度。
再根据这些点的坐标依次连接绘制多边形。
2.	vue-router 中页面跳转传参有一个query属性，可实现页面带参数跳转。
数据展示，直接利用this.$.router.query 获取到请求地址中带的参数，并进行展示。
3.	模拟登陆时。vue-resource 不是太懂，尝试了几次，$.http.get请求可以获取到数据，但post请求一直没实现。目前读文档暂时没读懂。尝试采用filder代理，并未写入到页面上。

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
