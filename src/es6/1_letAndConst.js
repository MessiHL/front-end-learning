
/**
 * TDZ:
 *  在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
 *  本质: 只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
 * 
 * 作用域
 *  1- 全局作用域(ES5 、ES6)
 *  2- 函数作用域(ES5 、ES6)
 *  3- 块级作用域(ES6，必须有大括号) 
 * 
 * 
 * const：
 *  const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
 *  本质：保证变量指向的那个内存地址所保存的数据不得改动
 * 
 * 
 * 注意：
 *  1- 应该避免在块级作用域内声明函数
 */

// var tmp = 123;
// if (true) {
//   //案例1 在let声明变量前，对tmp赋值会报错
//   tmp = 'abc'; // ReferenceError。 
//   let tmp;
// }

// if (true) {
//   // 案例2： typeopf
//   typeof a; // 不报错
//   typeof b; // 报错
//   let b = '';
// }

// 案例3： 在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“
// if(true){
//   let x = x
// }

// 案例4：es6 中新增的块级作用域
// function f(){
//   let n = 1;
//   if(true){
//     let n = 2
//   }
//   console.log(n); // 输出1。 外层n 不受代码块(if(true))中的代码影响
// }
// f();

// ES5中没有块级作用域，以下代码 var n=2 会覆盖外层的 n = 1 
function f2(){
  var n = 1;
  if(true){
    var n = 2
  }
  console.log('f2:',n); 
}
f2()