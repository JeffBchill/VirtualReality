let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  for(let i = 0; i < 10; i++){
    let rocket = new Rocket(rnd(-20,20),rnd(-20,20));
    rockets.push(rocket);
  }

  loop();
})
function loop(){
  for(let rocket of rockets){
      rocket.fly();
  }
  window.requestAnimationFrame( loop );
}