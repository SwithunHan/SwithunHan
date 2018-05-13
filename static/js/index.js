let len = document.documentElement.clientHeight;
let now = 0;
let pages = document.getElementsByClassName("page");
let wrap = document.getElementById("wrap");
let main = document.getElementById("main");
wrap.style.height = len + "px";
for (let i = 0; i < pages.length; i++) {
    pages[i].style.height = len + "px";
}
if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) {
    document.addEventListener("DOMMouseScroll", scrollFun);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}

function scrollFun(e) {

    let event = e || window.event;
    let dir = event.detail || -event.wheelDelta;

    if (dir > 0 && now > -3 * len) {
        now -= len;
        main.style.top = now + "px";
    } else if (dir < 0 && now < 0) {
        now += len;
        main.style.top = now + "px";
    }
}
let btn = document.getElementById("btn");
let left = document.getElementById("left");
let right = document.getElementById("right");

function clickHandle() {
    addClass(left,"lfAction");
    addClass(right,"rgAction");
};
function addClass(element,value) {
    let newClassName = element.className;
    if (!newClassName) {
        newClassName = value;
    } else {
        newClassName+= " ";
        newClassName+= value;
    }
    element.className = newClassName;
}