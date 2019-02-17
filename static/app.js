let ball = document.getElementById('ball');
let water = document.getElementById('water');
let coords;
let flag = 1;
let fallSpeed = 0;
let topDis = 0;
let mainY = '167px';
let mainX = '512.5px';
let gravityOn = false;

const gravity = 0.5;

const moveDiv = () => {
    if (gravityOn === false) {
        coords = 'X:' + event.clientX + ', Y:' + event.clientY;
        document.getElementById('coordsContainer').innerHTML = coords;
        ball.style.left = (event.clientX - 5 + 'px');
        ball.style.top = (event.clientY - 5 + 'px');
    }   
}

const gravityApply = () => {
    fallSpeed += gravity;
    topDis = parseFloat(ball.style.top, 10);
    leftDis = parseFloat(ball.style.left, 10);
    ball.style.top = topDis + fallSpeed + 'px';
    if (topDis >= 500 - water.clientHeight & leftDis > 669 & leftDis < 758) {
        if (water.clientHeight <= 185) {
            water.style.height = water.clientHeight + 5 + 'px';
            fallSpeed = 0;
            flag = 0;
            ball.style.top = mainY;
            ball.style.left = mainX;
        }
    }
    if (topDis >= 585.93) {
        fallSpeed = 0;
        flag = 0;
        ball.style.top = mainY;
        ball.style.left = mainX;
    }
}
//on mouse down
const followMouse = () => {
    document.addEventListener("mousemove", moveDiv);

    flag = 1;
};
//on mouse up
const stopFollowingMouse = () => {
    document.removeEventListener("mousemove", moveDiv);
    // gravity
    setInterval(() => {
        if (flag === 1) {
            gravityApply();
            gravityOn = true;
        }
        else gravityOn = false;
    }, 10);
}