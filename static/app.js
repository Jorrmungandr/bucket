let ball = document.getElementById('ball');
let coords;
let flag = false;

const showCoords = () => {
    coords = 'X:' + event.clientX + ', Y:' + event.clientY
    document.getElementById('coordsContainer').innerHTML = coords;
}
//on mouse down
const followMouse = () => {
    document.addEventListener("mousemove", () => {
        coords = 'X:' + event.clientX + ', Y:' + event.clientY
        document.getElementById('coordsContainer').innerHTML = coords;
    })
};
//on mouse up
const mouseUp = () => {
    document.removeEventListener("mousemove", showCoords())
}
