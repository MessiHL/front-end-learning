
/**
 * ES5 只有全局作用域和函数作用域，没有块级作用域
 */
var s  = "var";
for(var i = 0;i< 3 ;i++){
  console.log(s[i]);
}

console.log(i); // 3。 变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。


var tmp = new Date()
function f(){
  console.log(tmp); // undefined.变量提升, 内层（if(false{})）的tmp 提升，覆盖了 函数f 中的 tmp
  if(false){
    var tmp = "Hello" 
  }
}
f()


// 顶层对象的属性
// global: Node 里面，顶层对象是global，但其他环境都不支持
a = 3
console.log('global.a:',global.a);