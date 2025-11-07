let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
  }

})
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let cloud = new Cloud(x, 6.5 , z);
  }
})
window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-15,20);
    let house = new House(1, 0 , 1);
  }
})