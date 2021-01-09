class target{
    constructor(x,y,width,height){
        var options = {
        isStatic:true, 
        restitution:0   
        }
this.x=x;
this.y=y;
this.width=150;
this.height=150;

this.image = loadImage("target.png");
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world, this.body);
}

display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
fill(255,0,255);
imageMode(CENTER);
rectMode(CENTER);
image(this.image,this.x,this.y,this.width,this.height);
pop();    
}
}