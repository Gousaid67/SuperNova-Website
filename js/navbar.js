var nav = document.getElementById("navb");
var stick = nav.offsetTop;

window.onscroll = function() {
    if(window.pageYOffset >= stick){
        nav.classList.add("stick");
    }
    else{
        nav.classList.remove("stick");
    }
};
// this file is redundant, im keeping it here for readability sake.