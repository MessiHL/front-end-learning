/*
 * @Description: 加法
 * @Autor: hl
 * @Date: 2022-10-11 09:14:30
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:57:26
 */
define(function(require,exports,module){
    console.log('加载了 add 模块');
    var add = function(x,y){
        return x + y;
    };

    module.exports = {
        add:add
    }
});