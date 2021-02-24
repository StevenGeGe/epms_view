# epms_view

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 添加element-ui
```
npm i element-ui -S
npm fund
```

### 添加代码规范检查插件
```
npm i -g eslint
```

### 设置淘宝npm镜像
```
npm get registry 
npm config set registry http://registry.npm.taobao.org/
```

### 更换原来npm镜像
```
npm config set registry https://registry.npmjs.org/
```


### 目录详情
```
epms_view               # 主目录
├── /build/             # 项目构建(webpack)相关代码
├── /node_modules/      # npm install 后生成的目录
├── /dist/              # 项目输出目录
├── /public/            # 多页应用的html目录
├── /src/               # 项目源码目录
│ ├── /assets/          # 存放图片
│ ├── /components/      # 项目公共组件
│ ├─├──/container/      # 页面导航容器
│ ├── /mock/            # 数据mock的接口文件
│ ├── /pages/           # 多页面入口
│ ├── /routes/          # 多页应用主体
│ │ ├── /Student/       # 应用主体
│ │ │ ├── /components/  # Student应用组件
│ │ │ ├── /index.js     # Student应用主页
│ │ │ ├── /model.js     # Student应用数据模型
│ │ │ ├── /service.js   # Student应用数据接口
│ ├── /utils/           # 工具函数
├── App.vue             # App.vue项目入口
├── main.js             # 项目核心文件
├── package.json        # 项目信息,配置依赖，控制大版本
├── package-lock.json   # 项目信息,配置依赖，控制小版本
└── .roadhogrc          # 项目配置
```