class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let bubble1 = document.createElement("a-sphere");
        bubble1.setAttribute("color","white");
        bubble1.setAttribute("position","0 2 0 ");
        bubble1.setAttribute("radius","1.25");
        this.obj.append ( bubble1 );

        let bubble2 = document.createElement("a-sphere");
        bubble1.setAttribute("color","white");
        bubble1.setAttribute("position","1.5 2 0 ");
        bubble1.setAttribute("radius","1.25");
        this.obj.append ( bubble2 );

        let bubble3 = document.createElement("a-sphere");
        bubble1.setAttribute("color","white");
        bubble1.setAttribute("position","1 2 1.5 ");
        bubble1.setAttribute("radius","1.25");
        this.obj.append ( bubble3 );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
    }
}