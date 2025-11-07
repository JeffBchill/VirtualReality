let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mech;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
 
  loop();
}

function loop(){


  window.requestAnimationFrame( loop );
}
