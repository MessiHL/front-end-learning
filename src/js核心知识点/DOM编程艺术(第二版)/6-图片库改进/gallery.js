// 将函数绑定到window.onload
function addLoadEvent(func){
    var oldOnload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    } else {
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

function prepareGallery(){
    if(!document.getElementById || !document.getElementsByName) return false;
    var gallery = document.getElementById("imagegallery");
    if(!gallery) return false;
    var links = gallery.getElementsByTagName('a');
    for(var i = 0;i<links.length;i++){
        links[i].onclick = function(){
            // showPic 执行成功，返回true， 说明图片已更新，此时要阻止浏览器的默认行为，点击后最终返回false
            // showPic 执行失败，返回false，说明图片未更新(如不存在ID imagegallery)，此时要允许浏览器的默认行为，点击后最终返回true
            return !showPic(this);
        }
    }
}

function showPic(whichPic) {
    var placeholder = document.getElementById("placeholder");
    if(!placeholder) return false;
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
    var desc = document.getElementById("description");
    if(desc){
        var txt = whichPic.getAttribute("title");
        desc.firstChild.nodeValue = txt;
    }

    return true;
  }


  addLoadEvent(prepareGallery);