class Brick{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","#stone");
    this.obj.setAttribute("position",{x:x,y:y,z:z});

    this
    scene.append(this.obj);
  }
}