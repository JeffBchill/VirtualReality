let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions
  cloud = new Cloud(-5,10,-1);
  let c=[];
  function Cloud(){
    for(let i=0; i<20; i++){
      x=rmd(-10,10);
      z=rmd(-10,10)
      let cl = newCloud(x,20,z);
      c.push(cl);
    }
  }


  //Challenge 3: Create an array to store 100 snowflakes in random positions

  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  for(let c of Cloud){
    c.fly
  }
  cloud.fly();
  //Challenge 2: Traverse your array of clouds and make each cloud fly

  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  
  window.requestAnimationFrame( loop );
}
