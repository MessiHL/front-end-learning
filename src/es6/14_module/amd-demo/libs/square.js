/*
 * @Description: 平方。依赖于./multiply.js
 * @Autor: hl
 * @Date: 2022-10-11 09:14:41
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:39:06
 */


define(['./multiply'], function(multiplyModule) {
    console.log('加载了 square 模块');
    return{
        square:function(num){
            return multiplyModule.multiply(num,num);
        }
    };
});