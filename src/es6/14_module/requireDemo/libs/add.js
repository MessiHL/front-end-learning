/*
 * @Description: 加法
 * @Autor: hl
 * @Date: 2022-10-11 09:14:30
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:21:43
 */
define(function(){
    console.log('已加载：add.js ');
    var add = function(x,y){
        return x + y
    };

    return {
        add:add
    }
});