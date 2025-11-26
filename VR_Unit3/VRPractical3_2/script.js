let scene, carTemplate;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  carTemplate = this.document.getElementById("car");
  caro = new Car(-10,13,0);
      
  loop();
})

function loop(){

  caro.drive();
  window.requestAnimationFrame(loop);
}