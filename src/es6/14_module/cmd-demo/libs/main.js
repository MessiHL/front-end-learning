/*
 * @Description: 
 * @Autor: hl
 * @Date: 2022-10-11 09:14:25
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 10:04:33
 */

// main 依赖 add 和 square，square 又依赖 multiply
define(function(require,exports,module){
    var addModule = require('./add');
    console.log('1+2='+ addModule.add(1,2));

    var squareModule = require('./square');
    console.log('8的平方:' + squareModule.square(8));
})