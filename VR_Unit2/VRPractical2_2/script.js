let car;
let dude;
let rocket;
let pokemonball;
let sun;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  car = document.querySelector("#car");
  dude = document.querySelector("#dude");
  rocket = document.querySelector("#rocket");
  pokemonball = document.querySelector("#pokemonball");
  sun = document.querySelector("#sun");
  car.l = 0;
  car.la = -0.05;
  dude.g = 0;
  dude.gr = 0.0005;
  pokemonball.o = 0;
  pokemonball.ot = -0.5;
  rocket.f = 0;
  rocket.fy = .09;
  sun.p = 0.5;
  sun.pi = 1;
  
  loop();
})
    
function loop(){
  car.l += car.la;
  car.setAttribute("position",{x:car.l, y:0, z:0});
  pokemonball.o += pokemonball.ot;
  pokemonball.setAttribute("rotation",{x:0, y:pokemonball.o, z:0});
  rocket.f += rocket.fy;
  rocket.setAttribute("position",{x:0, y:rocket.f, z:0});
  dude.g += dude.gr;
  dude.setAttribute("scale",{x:dude.g, y:dude.g, z:dude.g});
  sun.p += sun.pi;
  sun.setAttribute("opacity", sun.p);
  window.requestAnimationFrame(loop);

}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
