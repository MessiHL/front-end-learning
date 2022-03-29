/*
顶层对像：
  - 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
  - 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
  - Node 里面，顶层对象是global，但其他环境都不支持。

this：
  - 全局环境中，this会返回顶层对象。
  - Node.js 模块中this返回的是当前模块，
  - ES6 模块中this返回的是undefined。
  - 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。
  --严格模式下，这时this会返回undefined。
  - 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。
  - 如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。
 */