/*
 * @Description: 平方。依赖于./multiply.js
 * @Autor: hl
 * @Date: 2022-10-11 09:14:41
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 10:34:27
 */


console.log('加载了 square 模块');

import {multiply} from './multiply.js'
var square  = function (num){
    return multiply(num,num);
}

export{square}