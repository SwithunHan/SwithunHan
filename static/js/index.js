
let left = document.getElementById("left");
let right = document.getElementById("right");
let content = document.getElementById("content");

function clickHandle() {
    addClass(left,"lfAction");
    addClass(content,"conAction");
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