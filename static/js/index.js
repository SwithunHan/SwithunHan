
let left = document.getElementById("left");
let right = document.getElementById("right");
let open = document.getElementById("open");
function openBox() {
    removeClass(left,"closeLeft");
    removeClass(right,"closeRight");
    removeClass(open,"show");
    addClass(left,"openLeft");
    addClass(right,"openRight");
    addClass(open,"hide")
}
function closeBox() {
    removeClass(left,"openLeft");
    removeClass(right,"openRight");
    removeClass(open,"hide");
    addClass(left,"closeLeft");
    addClass(right,"closeRight");
    addClass(open,"show");
}
function addClass(element,value) {
    element.classList.add(value)
}
function removeClass(element,value) {
    element.classList.remove(value)
}