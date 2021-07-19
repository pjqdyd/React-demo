### create-react-app 搭建react基础项目结构

#### 项目实现:

> 1. 多环境配置 (env)
> 2. 路由react-router 配置 (自定义renderRouter实现类似vue路由拦截)
> 3. 组件 loadable 实现路由懒加载/按需加载
> 4. 使用@rematch/core 简化redux状态管理 (支持异步Async)
> 5. 封装全局Axios网络请求，本地代理Proxy配置
> 6. 使用Sass css预处理 增强/扩展css
> 7. Eslint 使用 prettier 代码格式化风格

#### 项目目录:

```
 ├─config               项目模块等配置
 ├─public               public目录
 ├─scripts              编译/启动脚本
 ├─src                  源码目录
   ├─assets             静态资源目录,如样式字体图片
   ├─common             公共配置文件目录
   ├─compontnts         公共组件目录
   ├─layout             全局布局文件
   ├─pages              页面文件
   ├─router             路由配置目录
   ├─store              状态管理文件目录
   ├─utils              工具类文件
   ├─App.js             App.js文件
   ├─index.css          index.css文件
   ├─index.js           index.js文件
   └─setupProxy.js      本地代理配置文件
 ├─README.md            README.md文件
 └─.gitignore           .gitignore文件             
```
#### 如何运行：

`yarn install`

`yarn start`

 打包: `yarn build:[env]` env = test | pre | prod

#### 总结：

1. 项目是采用create-react-app创建的基础项目eject改造的，后续考虑搭建一个TS版本;


2. 项目采用了@rematch/core 简化redux状态管理，省去了redux繁杂的actions, reducer配置,异步Async加载数据状态管理也很方便，如果使用redux还要引入其他中间件. (因为rematch使用方式和vuex比较接近，所以采用了);
   

3. 路由缓存还没有引入，react-router-cache-route可以实现类似vue的keep-alive效果;


4. 如果项目有改进的地方，欢迎提issue改进;
