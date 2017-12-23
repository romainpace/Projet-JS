window.onload = init;

var x =0 ;
var y =0 ;
var xCamera =0 ;
var yCamera =0 ;

function init() {
  console.log("page chargée");
  
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  
  // On lance l'animation
  
  animation();
 
}

function animation() {
	
 requestAnimationFrame(animation);
}