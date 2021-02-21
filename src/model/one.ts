// 熟悉ts基础
console.log("hello   ts");

// 布尔类型
let f:boolean=true
f=false
console.log(f);

// 字符串类型
let str:string="学习ts基础"
// str=123
str="123"
console.log(str);

// 数值类型
let n:number=2021
// n="2021"
n=22
console.log(n);

//数组类型
let arr:number[]=[1,2,3,4,5]
// arr=["12",12]
arr=[12,13,14]
console.log(arr);

let arr1:Array<number>=[123,145,167]
// arr1=["123",2323]
arr1=[123,1234,12423432]
console.log(arr1);

// 枚举类型
enum flag{
    Work=0,
    Life=1,
   Study=2
}
console.log(flag.Study);

// 函数类型
// 函数声明
function fun():string{
return "这是函数声明"
}
console.log(fun());
// 函数表达式
let func=function():string{
 return "这是函数表达式"
}
console.log(func());

// 类
class Parent {
    public name:string
     protected age:number
    constructor(name:string,age:number) {
        this.name=name,
        this.age=age
    }
    introduce():string{
        return `我是${this.name},我今年${this.age}岁了`
    }
}
let p=new Parent("李四",22)
console.log(p.introduce());

// 类的继承
class Child extends Parent{
    constructor(name:string,age:number){
    super(name,age)
    }
    introduce():string{
        return `子类-----我是${this.name},我今年${this.age}岁了`
    }
}
let c=new Child("张三",28)
console.log(c.introduce());
