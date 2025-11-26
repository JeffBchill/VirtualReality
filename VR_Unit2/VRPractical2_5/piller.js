class Piller{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = createElement("a-cone");
        this.obj.setAttribute("color","silver");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("radius-bottom","2");
        this.obj.setAttribute("radius-top","1");
        scene.append(this.obj);
    }
}