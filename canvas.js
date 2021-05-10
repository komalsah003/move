var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 10;
function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x, 275, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    x += 1;
}
animate();
