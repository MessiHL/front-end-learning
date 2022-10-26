/**
 1- 全局代码压入执行栈执行，输出 start

 2- setTimeout压入 macrotask队列，promise.then 回调放入 microtask队列，最后执行 console.log('end')，输出 end

 3- 调用栈中的代码执行完成（全局代码属于宏任务），接下来开始执行微任务队列中的代码，执行promise回调，输出 promise1, 
    promise回调函数默认返回 undefined, promise状态变成 fulfilled ，触发接下来的 then回调，继续压入 microtask
    队列，此时产生了新的微任务，会接着把当前的微任务队列执行完，此时执行第二个 promise.then回调，输出 promise2

 4- 此时，microtask队列 已清空，接下来会执行 UI渲染工作（如果有的话），然后开始下一轮 event loop, 
    执行 setTimeout的回调，输出 setTimeout 
 */

console.log('start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

console.log('end')