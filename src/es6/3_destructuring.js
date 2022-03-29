/**
 * 解构赋值 https://es6.ruanyifeng.com/#docs/destructuring
 *  解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
 *  由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
 *  
 */

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错
// 报错
let [a] = 1;
let [b] = false;
let [c] = NaN;
let [d] = undefined;
let [e] = null;
let [f] = {};

let x = Math.PI