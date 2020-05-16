class Raindrop {
   constructor(x,y,height) {

     var options = {
         restitution : -1.0,
         friction : 0.3,
         velocityX : -2.0
     }
     
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = 5;
     this.height = height;
     World.add(world, this.body);
   
   }

   display(){
   
     var pos =this.body.position;
     rectMode(CENTER);
     fill("blue");
     rect(pos.x, pos.y, this.width, this.height);
   
   }
   
 }