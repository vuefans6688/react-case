## 函数式组件(简单组件)

    执行了ReactDOM.render(<App />)...之后，发生了什么?
    1.React解析组件标签，找到了App组件
    2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真是DOM，随后呈现在页面中

## 类式组件(复杂组件)

    执行了ReactDOM.render(<App />)...之后，发生了什么?
    1.React解析组件标签，找到了App组件
    2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
    3.将render返回的虚拟DOM转为真是DOM，随后呈现在页面中

## todoList 案例相关知识点

    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态初始化列表，如何确定将数据放在哪个组件的state中？
      ————某个组件使用：放在自身的state中
      ————某些组件使用：放在它们共同的父组件state中（官方乘此操作为：状态提升）
    3.关于父子之间通信：
      （1）【父组件】给【子组件】传递数据：通过props传递
      （2）【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4.注意defaultChecked和checked的区别，类似的还有：defaultValue和value
    5.状态在哪里，操作状态的方法就在哪里

## 编写 setupProxy.js 配置具体代理规则：

    const proxy = require('http-proxy-middleware')
    module.exports = app => {
      app.use(
        proxy('/api1', {  // api1是需要转发的请求(所有带/api1前缀的请求都会转发给5000)
          terget: 'http://localhost:5000',  // 配置转发目标地址(能返回数据的服务器地址)
          changeOrigin: true,  // 控制服务器收到的请求头中host字段的值
          <!--
          changeOrigin设置为true时，服务器收到的请求头中的hostwei：localhost:5000
          changeOrigin设置为false时，服务器收到的请求头中的host为：loclahost:3000
          changeOrigin默认值为false，danwomen一般将changeOrigin的值设为true
           -->
          pathRewrite: {  // 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
            '^/api1': ''
          }
        }),
        proxy('/api2', {
          target: 'http://localhost:5001',
          changeOrigin: true,
          pathRewrite: {
            '^/api2': ''
          }
        })
      )
    }

## 说明：

    1.优点：可以配置多个代理，可以灵活的控制请求是否走代理
    2.缺点：配置繁琐，前端请求资源时必须加前缀

## 消息订阅与发布机制

    1.先订阅，再发布(理解：有一种隔空对话的感觉)
    2.适用于任意组件间通信
    3.要在组建的componentWillUnmount中取消订阅

## fetch 发送请求(关注分离的设计思想)

## 路由的基本使用

    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
      <Link to="/xxx">demo</Link>
    3.展示区写Route标签进行路径的匹配
      <Route path="/xxx" component={Demo} />
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 路由组件与一般组件

    1.写法不同：
      一般组件：<Demo />
      路由组件：<Route path="/demo" component={Demo} />
    2.存放位置不同：
      一般组件：components
      路由组件：pages或views
    3.接收的props不同：
      一般组件：写组件标签时传递了什么，就能收到什么
      路由组件：接收到三个固定的属性
        history:
          go: f go(n)
          goBack: f goBack()
          goForward: f goForward()
          push: f push(path, state)
          replace: f replace(path, state)
        location:
          pathname: "/about"
          search: ""
          state: undefined
        match:
          params: {}
          path: "/about"
          url: "/about"

## NavLink 与封装 NavLink

    1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容

## Switch 的使用

    1.通常情况下，path和component是一一对应的关系
    2.Switch可以提高路由匹配效率(单一匹配)

## 解决多级路径刷新页面样式丢失的问题

    1.public/index.html中引入样式时不写./写/(常用)
    2.public/index.html中引入样式时不写./写%PUBLIC_URL%(常用)
    3.使用HashRouter

## 路由的严格匹配与模糊匹配

    1.默认使用的是模糊匹配(简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致)
    2.开启严格匹配：<Route exact path="/about" component={About}>
    3.严格匹配不要随便开启，需要再开，有时候开启会导致无法继续匹配二级路由

## Redirect 的使用

    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    2.具体编码：
      <Switch>
        <Route path="/about" component={About}>
        <Route path="/home" component={Home}>
        <Redirect to="/about">
      </Switch>

## 嵌套路由

    1.注册子路由时要写上副路由的path值
    2.路由的匹配是按照注册路由的顺序进行的

## 向路由组件传递参数

    1.params参数
      路由链接(携带参数)：<Link to={`/demo/test/tom/18`}>详情</Link>
      注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test} />
      接收参数：const { name, age } = this.props.math.params
    2.search参数
      路由链接(携带参数)：<Link to={`/demo/test?name=tom&age=19`}>详情</Link>
      注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test} />
      接收参数：const { search } = this.props.location
      备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
    3.state参数
      路由链接(携带参数)：<Link to={{pathname: '/demo/test', state: {name: 'tom', age: 18}}}>详情</Link>
      注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test} />
      接收参数：this.props.location.state
      备注：刷新也可以保留住参数

## 编程式路由导航

    借助this.props.history对象上的API操作路由跳转、前进、后退
      ———this.props.history.push()
      ———this.props.history.replace()
      ———this.props.history.goBack()
      ———this.props.history.goForward()
      ———this.props.history.go()

## BrowserRouter 与 HashRouter 的区别

    1.底层原理不一样
      (1)BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
      (2)HashRouter使用的是URL的哈希值
    2.path表现形式不一样
      (1)BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
      (2)HashRouter的路径包含#，例如：localhost:3000/demo/test
    3.刷新后对路由state参数的影响
      (1)BrowserRouter没有任何影响，因为state保存在history对象中
      (2)HashRouter刷新后会导致路由state参数的丢失
    4.备注：HashRouter可以用于解决一些路径错误相关的问题

## antd 的按需引入和自定义主题

    1.安装依赖：npm i react-app-rewired customize-cra babel-plugin-import less less-loader
    2.修改package.json
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      }
    3.根目录下创建config-overrides.js
      // 配置具体的修改规则
      const { override, fixBabelImports, addLessLoader } = require('customize-cra')
      module.exports = override(
        fixBabelImports('import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }),
        addLessLoader({
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'green' }
          }
        })
      )
    4.备注：不用再组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉

## react-redux 的基本使用

    1.明确两个概念
      (1)UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
      (2)容器组件：负责和redux通信，将结果交给UI组件
    2.如何创建一个容器组件————靠react-redux的connect函数
      connect(mapStateToProps, mapDispatchToProps)(UI组件)
      ——mapStateToProps：映射状态，返回值是一个对象
      ——mapDispatchToProps：映射操作状态的方法，返回值是一个对象
    3.备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
      备注2：mapDispatchToProps也可以是一个对象

## react-redux 的优化

    1.容器组件和UI组件混成一个文件
    2.无需自己给容器组件传递store，给<App />包裹一个<Provider store={store}>即可
    3.使用了react-redux后不用自己监测redux中状态的改变了，容器组件可以自动完成这个工作
    4.mapDispatchToProps也可以简单的写成一个对象
    5.一个组件要和redux“打交道”要经过哪几步？
      (1)定义好UI组件---不暴露
      (2)引入connect生成一个容器组件，并暴露，写法如下：
        connect(
          state => ({ key: value }),  // 映射状态
          { key: xxxxAction }  // 映射操作状态的方法
        )(UI组件)
      (3)在UI组件中通过this.props.xxxx读取和操作状态
