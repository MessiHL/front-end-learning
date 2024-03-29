<!--
 * @Description: 
 * @Autor: hl
 * @Date: 2022-10-11 09:11:32
 * @LastEditors: hl
 * @LastEditTime: 2022-10-11 11:05:34
-->
# 重点介绍 AMD CMD CommonJS ES6 加载规范：

## 参考：

[https://github.com/mqyqingfeng/Blog/issues/108?spm=a21iq3.home.0.0.1fdc2764EYHufz](https://github.com/mqyqingfeng/Blog/issues/108?spm=a21iq3.home.0.0.1fdc2764EYHufz)


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
跟 sea.js 的执行结果一致，也是在 require 的时候才去加载模块文件，加载完再接着执行。

## ES6 模块


## 总结

### AMD 与 CommonJS

CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。

AMD规范则是非同步加载模块，允许指定回调函数。

由于 Node.js 主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以 CommonJS 规范比较适用。

但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用 AMD 规范。

### ES6 与 CommonJS

它们有两个重大差异。

1 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

2 CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。