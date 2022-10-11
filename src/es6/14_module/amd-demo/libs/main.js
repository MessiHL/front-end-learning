/*
 * @Description: 
 * @Autor: hl
 * @Date: 2022-10-11 09:14:25
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:40:24
 */

/*
    1- require 的第一个参数表示依赖的模块的路径，第二个参数表示此模块的内容。
    2- requirejs 为全局添加了 define 函数，你只要按照这种约定的方式书写这个模块即可。
    3- require.js 会自动分析依赖关系，将需要加载的模块正确加载。
    
    此处，主模块（main.js）依赖 add 模块和 square 模块
*/
require(['./add','./square'],function(addModule,squareModule){
    console.log(addModule.add(1,2));
    console.log(squareModule.square(8));
})