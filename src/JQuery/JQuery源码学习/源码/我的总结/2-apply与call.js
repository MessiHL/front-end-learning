/**
 *  内容参考 https://www.cnblogs.com/qiaojie/p/5746688.html
 */

// 用法1： 调用函数，传递参数
function add(x,y){
    return x+y;
}

function myAddCall(x,y){
    //调用 add 方法 的 call 方法
    return add.call(this,x,y);
}

function myAddApply(x,y){
    //调用 add 方法 的 apply 方法
    return add.apply(this,[x,y]);
}

var a = myAddCall(1,2);
var b = myAddApply(2,3);
console.log(a); // 3
console.log(b); // 5


// 用法2： 改变函数的作用域
var name = 'tom';
var obj = {name:'messi'};
function sayName(){
    return this.name;
}
console.log(' 用法2： 改变函数的作用域:');
console.log(sayName.call(this)); // undefined .如果此段代码包裹在html中， 这里输出的是 Window 对象 
console.log(sayName.call(obj));


