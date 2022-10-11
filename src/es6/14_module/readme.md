<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-10-11 09:11:32
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 10:12:28
-->
# 重点介绍以下四种模块加载规范：

## 前置：require


## AMD
requirejs 为全局添加了 define 函数，你只要按照这种约定的方式书写这个模块即可。
那这个约定的书写方式是指什么呢？

指的便是 The Asynchronous Module Definition (AMD) 规范。

所以其实 AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。

 [AMD 规范](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)) 的内容，其主要内容就是定义了 define 函数该如何书写，只要你按照这个规范书写模块和依赖，require.js 就能正确的进行解析。


 特点：
    1- 浏览器端的模块规范；
    2- 依赖前置。依赖必须一开始就写好；
    3- 将需要使用的模块先加载完再执行代码；

## CMD
与 AMD 一样，CMD 其实就是 SeaJS 在推广过程中对模块定义的规范化产出。

[CMD 规范](https://github.com/seajs/seajs/issues/242)的内容，主要内容就是描述该如何定义模块，如何引入模块，如何导出模块，只要你按照这个规范书写代码，sea.js 就能正确的进行解析。

特点:
    1- 浏览器端的模块规范；
    2- 依赖就近。可以在用到前再引用所依赖的模块；
    3- 在 require 的时候才去加载模块文件，加载完再接着执行；

## CommonJS

在服务器端比如 node，采用 CommonJS 规范。

## ES6 模块