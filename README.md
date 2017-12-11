
## vue admin

使用vue2.0 + element 的后台模版

模版参考: element: http://element.eleme.io/2.0/#/zh-CN


#### 使用步骤

~~~
1. git clone  到项目frontend目录下, 如 frontend/admin, 清理.git目录

2. 配置app/config/prod.php  builtInTool.frontend 增加该目录

3. 配置 webpack.config.js rootPath、publicPath和proxy

4. npm run build dev 或者 npm run dev-service <port> 看效果吧
~~~


#### 使用说明

1. 使用单页面模式 / vue路由配置router.js

2. 模版入口默认为 tpl/index.html

3. 资源生成路径根据项目情况修改 webpack.config.js 中 rootPath和publicPath 变量

4. 模版样式 直接上element网站复制就行了

5. 使用示例参考views, 正式使用 请清理views里不需要的文件


#### 目录说明

* 代码开发在src目录下进行

* assets存放静态资源,相对目录引用即可.

* components 放置公共组件,一般是公共头 侧边栏等

* views 放开发的各个页面 / 分子目录, 配置router.js跳转地址
