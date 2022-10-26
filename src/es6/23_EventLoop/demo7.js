
// async关键字是将一个同步函数变成一个异步函数，并将返回值变为promise。
// 而await可以放在任何异步的、基于promise的函数之前。在执行过程中，它会暂停代码在该行上，直到promise完成，然后返回结果值。
// 而在暂停的同时，其他正在等待执行的代码就有机会执行了

async function async1() {
    console.log("a");
    const res = await async2();
    console.log("b");
}
async function async2() {
    console.log("c");
    return 2;
}
console.log("d");
setTimeout(() => {
    console.log("e");
}, 0);
async1().then(res => {
    console.log("f")
})
new Promise((resolve) => {
    console.log("g");
    resolve();
}).then(() => {
    console.log("h");
});
console.log("i");

/**
* 输出结果：d a c g i b h f e
 宏： setTimeout
 微：
*/