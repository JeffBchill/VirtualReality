class Bomb{
    constructor(x,y,z){
        this.a = 0;
        this.da = 0.05;
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-entity");
        
        let circle = document.createElement("a-sphere");
        circle.setAttribute("color","black");
        circle.setAttribute("radius","2");
        circle.setAttribute("position",{x:x,y:y,z:z});
        this.obj.append (circle);

        let metal = document.createElement("a-cylinder");
        metal.setAttribute("color","grey");
        metal.setAttribute("height","0.5");
        metal.setAttribute("radius","1.5");
        metal.setAttribute("position",{x:x,y:1.5,z:z});
        this.obj.append (metal);
        
    }
}