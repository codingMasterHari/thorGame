class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("thanos.png");
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        // rect(0,0,this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0,0,this.width*1.1, this.height*0.8);
        pop();
      }
}
