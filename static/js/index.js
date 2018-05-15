
let left = document.getElementById("left");
let right = document.getElementById("right");
let open = document.getElementById("open");
function openBox() {
    removeClass(left,"closeLeft");
    removeClass(right,"closeRight");
    addClass(left,"openLeft");
    addClass(right,"openRight");
    addClass(open,"hide")
}
function closeBox() {
    removeClass(left,"openLeft");
    removeClass(right,"openRight");
    setTimeout(function () {
        removeClass(open,"hide");
    },2000);
    addClass(left,"closeLeft");
    addClass(right,"closeRight");
}
function addClass(element,value) {
    element.classList.add(value)
}
function removeClass(element,value) {
    element.classList.remove(value)
}