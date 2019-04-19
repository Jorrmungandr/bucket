let ball = document.getElementById('ball').style;
let water = document.getElementById('water');
let fallSpeed = 0;
let coords;
// the middle of the screen
let mainY = '167px';
let mainX = '512.5px';
let flag = true;
let gravityOn = false;

const gravity = 0.5;
// Move Drop of water
const moveDiv = () => {
    if (gravityOn === false) {
        coords = 'X:' + event.clientX + ', Y:' + event.clientY;
        document.getElementById('coordsContainer').innerHTML = coords;
        ball.left = (event.clientX - 5 + 'px');
        ball.top = (event.clientY - 5 + 'px');
    }
}
// putting the drop back in its place
const reset = () => {
    fallSpeed = 0;
    flag = false;
    ball.top = mainY;
    ball.left = mainX;
}
//The drop starts to fall
const gravityApply = () => {
    fallSpeed += gravity;
    let topDis = parseFloat(ball.top, 10);
    let leftDis = parseFloat(ball.left, 10);
    ball.top = topDis + fallSpeed + 'px'
    if (topDis >= 500 - water.clientHeight & leftDis > 668 & leftDis < 758) {
        if (water.clientHeight <= 185) {
            water.style.height = water.clientHeight + 5 + 'px';
            reset();
        }
    }
    if (topDis >= 585.93) {
        reset();
    }
}
//on mouse down
const followMouse = () => {
    document.addEventListener("mousemove", moveDiv);

    flag = true;
};
//on mouse up
const stopFollowingMouse = () => {
    document.removeEventListener("mousemove", moveDiv);
    // gravity
    setInterval(() => {
        if (flag) {
            gravityApply();
            gravityOn = true;
        }
        else gravityOn = false;
    }, 10);
}