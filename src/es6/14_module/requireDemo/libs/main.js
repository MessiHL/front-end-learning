/*
 * @Description: 
 * @Autor: hl
 * @Date: 2022-10-11 09:14:25
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 09:34:16
 */
require(['./add','./square'],function(addModule,squareModule){
    console.log(addModule.add(1,2));
    console.log(squareModule.square(8));
})