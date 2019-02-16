let ball = document.getElementById('ball');
let water = document.getElementById('water');
let coords;
let flag = 1;
let fallSpeed = 0;
let topDis = 0;
let ballTop = ball.style.top
let mouseX;
let mouseY;
let gravityOn = false;
let mouseMove = true;

const gravity = 0.7;

const moveDiv = () => {
    if (gravityOn === false & mouseMove ===true) {
        coords = 'X:' + event.clientX + ', Y:' + event.clientY;
        document.getElementById('coordsContainer').innerHTML = coords;
        ball.style.left = (event.clientX - 5 + 'px');
        ball.style.top = (event.clientY - 5 + 'px');
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
}

const gravityApply = () => {
    fallSpeed += gravity;
    topDis = parseFloat(ball.style.top, 10);
    leftDis = parseFloat(ball.style.left, 10);
    ball.style.top = topDis + fallSpeed + 'px';
    if (topDis >= 500 & leftDis > 669 & leftDis < 758) {
        if (water.clientHeight <= 190) {
            water.style.height = water.clientHeight + 5 + 'px';
            flag = 0;
            ball.style.top = 167 + 'px';
            ball.style.left = 512.5 + 'px';
            fallSpeed = 0;
            moveMouse = false;
        }
    }
    if (topDis >= 585.93) {
        flag = 0;
        ball.style.top = 167 + 'px';
        ball.style.left = 512.5 + 'px';
        fallSpeed = 0;
        moveMouse = false;
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