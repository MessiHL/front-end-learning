/*
 * @Description: 平方。依赖于./multiply.js
 * @Autor: hl
 * @Date: 2022-10-11 09:14:41
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 10:01:35
 */


define(function(require,exports,module){
    console.log('加载了 square 模块');
    var multiplyModule = require('./multiply');
    var square = function(num){
        return multiplyModule.multiply(num,num)
    };
    module.exports = {
        square:square
    }
});