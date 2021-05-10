var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "orange";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "green";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "brown";
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "purple";
// c.stroke();

//arc/circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.strokeStyle="rgba(0,0,255,0.5)";
// c.stroke();

// for (var i = 0; i<7; i++) {
//     var x = Math.random() *window.innerWidth;
//     var y = Math.random() *window.innerHeight;
// var randomColor=Math.floor(Math.random()*16777215).toString(16);
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2, false);
//                                                      // c.strokeStyle=randomColor;
//      c.strokeStyle = "rgba(0,0,255,0.5)";
//     c.stroke();
//                                                         // console.log(c.strokeStyle);
// }

var x = 200;
function animate() {
    requestAnimationFrame(animate);
    //  c.clearRect();
    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    x += 1;

}

animate();