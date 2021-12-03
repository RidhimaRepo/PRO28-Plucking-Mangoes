class Tree{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2 
        }
        this.x=x;
        this.y=y;
        this.img=loadImage("Images/tree.png")
        this.body=Bodies.rectangle(this.x,this.y,250,450,options);
        World.add(world,this.body);
    }
    display(){
        var treepos=this.body.position; 
        push() 
        translate(treepos.x, treepos.y); 
        // rectMode(CENTER) 
        // rotate(this.body.angle) 
        fill(255,0,255) 
        imageMode(CENTER);
         image(this.img, 0,0,250,450)
          pop()  
    }
}