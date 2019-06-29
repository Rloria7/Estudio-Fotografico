

var  nav = document.getElementById('nav');

window.onscroll = function(){
    if (window.pageYOffset > 100) {
        nav.style.background = "#424242";
    }
    else{
    nav.style.background = "transparent";
    }
})