/*
 * @Description: 乘法
 * @Autor: hl
 * @Date: 2022-10-11 09:14:58
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:24:03
 */
define(function(){
    console.log('加载了 multiply.js');

    var multiply = function(x,y){
        return x*y;
    };

    return {
        multiply:multiply
    }
});