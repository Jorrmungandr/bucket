let ball = document.getElementById('ball');
let water = document.getElementById('water');
let coords;
let flag = 1;
let fallSpeed = 0;
let topDis = 0;
let ballTop = ball.style.top

const gravity = 0.7;

const moveDiv = () => {
    coords = 'X:' + event.clientX + ', Y:' + event.clientY;
    document.getElementById('coordsContainer').innerHTML = coords;
    ball.style.left = (event.clientX - 5 + 'px');
    ball.style.top = (event.clientY - 5 + 'px');
}

const gravityApply = () => {
    fallSpeed += gravity;
    topDis = parseFloat(ball.style.top, 10)
    leftDis = parseFloat(ball.style.left, 10)
    ball.style.top = topDis + fallSpeed + 'px'
    if(topDis >= 515 & leftDis > 669 & leftDis < 758){
        water.style.height = water.clientHeight + 5 + 'px';
        flag = 0;
        ball.style.top = 167 + 'px';
        ball.style.left = 512.5 + 'px';
        fallSpeed = 0;
    }
    if(topDis >= 585.93) {
        flag = 0;
        ball.style.top = 167 + 'px';
        ball.style.left = 512.5 + 'px';
        fallSpeed = 0;
    }  
}
//on mouse down
const followMouse = () => {
    document.addEventListener("mousemove", moveDiv)
    
    flag = 1;
};
//on mouse up
const stopFollowingMouse = () => {
    document.removeEventListener("mousemove", moveDiv)
    // gravity
    setInterval(() => {
        if (flag === 1) {
            gravityApply();
        }
    }, 10);
}