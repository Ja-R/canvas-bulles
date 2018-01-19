// var c = document.getElementById("mon_canvas");
// var ctx = c.getContext("2d");
// // ici, le reste du script
//
// context.fillStyle = "gold";
// context.fillRect(0, 0, 50, 80);
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(200,200);
// ctx.moveTo(200,50);
// ctx.lineTo(50,200);
// ctx.closePath();
//
// ctx.fillStyle = "red";
// ctx.strokeStyle = "#ecf0f1";
//
// ctx.lineJoin = "bevel";
// ctx.lineCap = "round";

var canvas = document.getElementById("mon_canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//des carres
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'hotPink';
// c.fillRect(500, 50, 100, 100);
// c.fillStyle = 'purple';
// c.fillRect(100, 300, 100, 100);
// c.fillStyle = 'orange';
// c.fillRect(100, 600, 100, 100);
//
// //croix
// c.beginPath();
// c.moveTo(50,50);
// c.lineTo(200,200);
// c.moveTo(200,50);
// c.lineTo(50,200);
// c.strokeStyle= "yellow";
// c.stroke();

//arc et cercles

//pleins de cercles
// for (var i=0; i<500; i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

var x = 200;
var dx = 5; //speed
var radius = 30;
function animate(){ //nom de la fonction: de notre choix
  requestAnimationFrame(animate); //cree une loop qui appelle l'animation
  console.log("lolilol");
  c.clearRect (0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, 200, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "teal";
    c.stroke();

  if(x + radius >innerWidth || x - radius < 0){
    dx = -dx;
  }
  x += dx;
}


// animate();
