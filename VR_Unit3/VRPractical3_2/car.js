class Car{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = 0.01;

        this.obj = carTemplate.cloneNode(true);
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        this.obj.addEventListener("click",()=>{
            this.drive = true;
        })

        scene.append(this.obj);
    }
    start(){
        if(this.drive){
            this.z += this.dz;
            this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        }
    }
}

