const red = document.getElementsByClassName("red")[0];
const yellow = document.getElementsByClassName("yellow")[0];
const green = document.getElementsByClassName("green")[0];

function changeLights () {
    setTimeout (() => {
        red.style.opacity = '1';
    }, 1000)
    setTimeout (() => {
        red.style.opacity = '0.05';
    }, 4000)
    setTimeout (() => {
        yellow.style.opacity = '1';
    }, 5000)
    setTimeout (() => {
        yellow.style.opacity = '0.05';
    }, 9000)
    setTimeout (() => {
        green.style.opacity = '1';
    }, 10000)
    setTimeout (() => {
        green.style.opacity = '0.05';
    }, 14000)
}

changeLights();

setInterval(() => {
    changeLights();
}, 14000);