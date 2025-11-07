class Rocket{
    constructor(x,y,z){
        this.a = 0;
        this.da = 0.05;
        this.obj = document.createElement("a-entity");
        
        let cone = document.createElement("a-cone");
        cone.setAttribute("color","cyan");
        cone.setAttribute("position","1.5 3.5 0");
        cone.setAttribute("radius-bottom","1.2");
        cone.setAttribute("radius-top","0.1");
        this.obj.append (cone);

        let body = document.createElement("a-cylinder");
        body.setAttribute("color","red");
        body.setAttribute("position","1.5 1.5 0");
        body.setAttribute("height","3");
        body.setAttribute("radius","1");
        this.obj.append (body);
        
        let flame = document.createElement("a-cone");
        flame.setAttribute("color","orange");
        flame.setAttribute("rotation","0 0 180");
        flame.setAttribute("position","1.5 -0.5 0");
        flame.setAttribute("radius-top","0.1");
        flame.setAttribute("radius-bottom","1");
        this.obj.append (flame);

        let window_outline = document.createElement("a-cylinder");
        window_outline.setAttribute("color","black");
        window_outline.setAttribute("rotation","0 0 90");
        window_outline.setAttribute("position","1.5 2 0");
        window_outline.setAttribute("height","2");
        window_outline.setAttribute("radius","0.3");
        this.obj.append (window_outline);
        
        let window = document.createElement("a-cylinder");
        window.setAttribute("color","#D3EDEE");
        window.setAttribute("rotation","0 0 90");
        window.setAttribute("position","1.5 2 0");
        window.setAttribute("radius","0.2");
        window.setAttribute("height","2.05");
        this.obj.append (window);
        
        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
    }
    fly(){
    this.a += this.da;
    this.obj.setAttribute("position",{x:0, y:this.a, z:0});
  }
}