# 安装
有两种方式：

1. 通过npm（先安装Node.js，用它的包管理器：`npm install -g typescript`）
2. 安装Visual Studio自带TypeScript插件

# 编译

在命令行上，运行TypeScript编译器，会输出script.js文件
```
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

```ts
let uname:string = "Runoob";
let num:number = 123;
let b:boolean = true;

let vu:void = undefined;
let vn:void = null;
let uu:undefined = undefined;
let nn:null = null;
//void类型的变量不可以给其他变量赋值
let x = vu;     //这就是非法的

function fnVoid ():void{
    return 123;     //这样就会报错
}
```

# 任意类型

只有两种：any和unknown

```ts
let anys:any = '字符串';
let anys:unknown = {a:123};

//unknown类型不能调用其属性和方法
anys.a      //调用它就会报错

//不能把unknown类型赋值给其他变量
//除非被赋值的变量也是unknown类型或any类型
```

# 接口和对象类型

用接口限制对象的属性
```ts
//这个是接口
interface A{
    name:string,
    cb():number,
    age?：number,           //代表这个属性可有可无
}

let obj:A = {
    name:'bill',        //这里就必须定义name
    cb:() =>{           //这里就必须定义函数
        console.log(123)
    }
    age:18
}
```

继承
```ts
interface B extends A{

}
```

# 数组
```ts
let arr:number[] = [1,2,3]
let arr:string[] = ['1','3']
let arr:boolean[] = [true,false]
let arr:any[] = []
let arr:number[][] = [[],[]]
```

# 函数

```ts
//age默认值是18
const fn = function(name:string,age:number = 18):string{
    return name + age
}
fn('bill',20)

//也可以通过接口来定义
interface User{
    name:string,
    age:number
}

//传入一个User接口的对象，返回一个User接口的对象
const fn = function(user:User):User{
    return user
}

let a = fn{
    name:'bill',
    age:18
}
```

# 类型

## 联合类型
```ts
let phone:number | string = '021-1244123'
```
## 交叉类型
```ts
//假设已经定义了People和Man接口
//这样就需要同时满足这两个接口
const bill = (man:People & Man):void => {
}
```
## 别名
```ts
type UserID = number | string;

//这里的UserID就相当于number | string了
function getUserInfo(userId:UserID){}
```

# 头有点晕