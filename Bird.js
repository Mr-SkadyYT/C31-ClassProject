class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.cloudImage = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    if (this.body.position.x>200 && this.body.velocity.x>10) {
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
    //Smoke after the bird is released
    for(var i=0;i<this.trajectory.length;i++) {
      image(this.cloudImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    super.display();
  }
}
