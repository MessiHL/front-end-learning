/*
 * @Description: 乘法
 * @Autor: hl
 * @Date: 2022-10-11 09:14:58
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:58:30
 */
define(function(require,exports,module){
    console.log('加载了 multiply 模块');
    var multiply = function (x,y){
        return x*y;
    }

    module.exports = {
        multiply :multiply
    }
});