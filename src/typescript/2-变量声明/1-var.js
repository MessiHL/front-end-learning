
// setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。 
// for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

