/**
 * call/apply函数作用其实就是改变this的取值，有一句话是：谁调用的这个方法那方法里的this就是指谁，而有时我们会需要改变this值
 * 注意参数：apply 传入的是一个参数数组，也就是将多个参数组合成一个参数数组， call 从第二个参数开始依次传入
 * apply 可以直接将当前函数的arguments对象作为apply的第二个参数传入
 */

function each(arr,callback){
    for(var i = 0;i<arr.length;i++){
        callback(arr[i],i,arr[i]);
    }
}

each(['a','b','c'],function(i,val){
    // 返回 false，因为each 中的 this 指的是windows
    console.log(this == val);
});


// 对each 改造
function each2(arr,callback){
    for(var i = 0;i<arr.length;i++){
        // call 改变this值
        callback.call(arr[i], i, arr[i]);
        // apply 改变this值
        // callback.apply(arr[i],[i,arr[i]]);
    }
}

// call和apply方法作用是完全一样的，只是apply中参数是用数组传递，
// 在不清楚参数个数时可以使用apply，反之使用call
each2(['a','b','c'],function(i,val){
    // 返回 true
    console.log(this == val);
});



