# 安装
有两种主要的方式来获取TypeScript工具：
- 通过npm（先安装Node.js，用它的包管理器：`npm install -g typescript`）
- 安装Visual Studio自带TypeScript插件

# 编译

在命令行上，运行TypeScript编译器，会输出script.js文件
```ts
tsc script.ts
```

# 配置

新建 tsconfig.json
```ts
{
    //编译器选项
    "compilerOptions": {
        "noImplicitAny": true,  //这可以确保你不会错写任何新的类型
        "noEmitOnError": true,
        "target": "es6",    //编译目标为es6
        "module": "amd",    //处理独立文件时的模块加载方式
        "sourceMap": true   //是否创建map文件以帮助调试
    },
    
    //编译器会编译TypeScript文件（*.ts或*.tsx）
    //通过排除设置里的TypeScript文件不会被编译
    "exclude": [
        //排除设置
        //"node_modules",
        //"typings/main",
        //"typings/main.d.ts"
    ]
}
```

# 基础类型

