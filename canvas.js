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

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
  "#320D6D",
  "#FFBFB7",
  "#FFD447",
  "#700353",
  "#4C1C00",
];

window.addEventListener('mousemove', // action de la fonction des mouvement de souris
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
  //  console.log(mouse); donne les infos (objets) de la souris
})

window.addEventListener('resize', function (){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init(); // appel de la fonction creee qui relance
})

function Circle(x, y, dx, dy, radius){ //creation de l'objet cercle
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  // this.minRadius = minRadius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){ // creation de la fonction dessiner cercke
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.strokeStyle = "teal";
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = function(){ // donne de nouvelles valeurs au cercle
    if(this.x + this.radius >innerWidth || this.x - this.radius < 0){ //empeche le cercle de sortir de l'écran (entre 0 debut et innerwidth fin)
      this.dx = -this.dx;
    }

    if(this.y + this.radius >innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // effet lors de survol de souris
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 // la coord x de la souris // la coord de la bulle/cercle survolé (de part et d'autres d'ou -)
        && mouse.y - this.y < 50 && mouse.y - this.y > -50
    ){
      if(this.radius < maxRadius){ //grossir jusqu'à une certaine taille
        this.radius +=1; // +gros
      }
    }
    else if(this.radius > minRadius){ // les reduires jusqu'à un certain radius, taille l'initial
      this.radius -=1;
    }

    this.draw(); // appelle creation de cercle
  }
}

var circleArray = [];

function init(){ // lance la creation

  circleArray = []; //nettoie l'ecran
  var nbreCircle = 2000;

  for (var i=0; i<nbreCircle; i++){ // donne valeur ramdom au coord des cercles
    // creation du cercle random
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius; //bord des cercles ricochent sur bord droit + gauch de l'écran
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5; //speed
    var dy = (Math.random() - 0.5) * 5;

    circleArray.push(new Circle(x, y, dx, dy, radius)) // ajout du nouveau cercle dans le tableau des cercles
  }
  // console.log(circleArray);
}



function animate(){ //nom de la fonction: de notre choix
  requestAnimationFrame(animate); //cree une loop qui appelle l'animation
  // console.log("lolilol");
  c.clearRect (0, 0, innerWidth, innerHeight);

  for (var i=0; i<circleArray.length; i++){ // creation de nouveaux cercles
    circleArray[i].update();
  }

}

init();
animate();
