# 安装
有两种主要的方式来获取TypeScript工具：
- 通过npm（先安装Node.js，用它的包管理器）
- 安装Visual Studio自带TypeScript插件

npm安装 `npm install -g typescript`

# 编译

在命令行上，运行TypeScript编译器：
```
tsc script.ts
```
会输出script.js文件

# 配置

1. 右击scripts文件夹并选择New Item
2. 接着选择TypeScript Configuration File
3. 保持文件的默认名字为tsconfig.json

将默认的tsconfig.json内容改为
```
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

