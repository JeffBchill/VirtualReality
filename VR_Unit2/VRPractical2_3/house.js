class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let wall = document.createElement("a-box");
        wall.setAttribute("src","#wood");
        wall.setAttribute("position","0 0.5 0");
        wall.setAttribute("width","1");
        wall.setAttribute("height","1");
        wall.setAttribute("depth","0.1");
        this.obj.append ( wall );

        scene.append( this.obj )
    }
}