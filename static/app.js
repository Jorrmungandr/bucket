let ball = document.getElementById('ball');
let coords;

const gravity = () => {
    let x = event.clientX;
    let y = event.clientY;
    coords = 'Y:' + y + ', X:' + x
    document.getElementById('coordsContainer').innerHTML = coords;
};