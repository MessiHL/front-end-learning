function a(){
    b();
    console.log('a');
}

function b(){
    console.log('b');
    setTimeout(function(){console.log('c');},3000)
}

a();