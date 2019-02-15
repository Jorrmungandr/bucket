let ball = document.getElementById('ball');
let coords;
let flag = false;

const moveDiv = () => {
        coords = 'X:' + event.clientX + ', Y:' + event.clientY;
        document.getElementById('coordsContainer').innerHTML = coords;
        ball.style.left = (event.clientX - 150 + 'px');
        ball.style.top = (event.clientY - 150 + 'px');
}

//on mouse down
const followMouse = () => {
    document.addEventListener("mousemove", moveDiv)
};
//on mouse up
const stopFollowingMouse = () => {
    document.removeEventListener("mousemove", moveDiv)
}