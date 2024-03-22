class Play extends Phaser.Scene {
    constructor() {
      super({
        key: `play`
      });
      
    }
  
    create() {

      this.timer = this.time.delayedCall(3000, this.endGame, null, this);


      this.raindrops = this.physics.add.group({
        // All walls should use the wall image key
        key: `raindrop`,
        quantity: 200,
      });

      this.person = this.physics.add.sprite(Phaser.Math.Between(0, this.sys.canvas.width), Phaser.Math.Between(0, 50), `person`);
      this.umbrella = this.physics.add.sprite(200, 200, `umbrella`);
      this.sun = this.add.sprite(150, 200, `sun`);


      this.cursors = this.input.keyboard.createCursorKeys();

      
      this.colliders();
      this.rainPosition();
    
      this.physics.add.overlap(this.umbrella, this.raindrops, null, this.destroyRain, this)

      this.personAnimation();
      this.sunAnimation();
    }

    

    endGame(){
      console.log('game has ended')
      this.sundrop()
      console.log(this.sunPosition)
    }

    update(){
      this.handleInput()
    }

    destroyRain(umbrella, raindrop){
      raindrop.destroy()
    }





    handleInput() {
        if (this.cursors.left.isDown) {
            this.umbrella.setVelocityX(-100);
          }
          else if (this.cursors.right.isDown) {
            this.umbrella.setVelocityX(100);
          }
          else {
            // If neither left or right are pressed, stop moving on x
            this.umbrella.setVelocityX(0);
          }
      
          if (this.cursors.up.isDown) {
            this.umbrella.setVelocityY(-100);
          }
          else if (this.cursors.down.isDown) {
            this.umbrella.setVelocityY(100);
          }
          else {
            // If neither up or down are pressed, stop moving on y
            this.umbrella.setVelocityY(0);
          }

}

rainPosition() {
  this.raindrops.children.each(function(raindrop) {
    let x = Phaser.Math.Between(0, this.sys.canvas.width);
    let y = Phaser.Math.Between(0, -600);
    raindrop.setPosition(x, y);
    raindrop.setVelocityY(200)
    raindrop.setVelocityX(0)
  }, this);
}

colliders(){
    this.physics.add.collider(this.person, this.raindrops);
    this.physics.add.collider(this.person, this.umbrella);
}

personAnimation() {
  let idleAnimationConfig = {
    key: `idle`,
    frames: this.anims.generateFrameNumbers(`person`, {
      start: 0,
      end: 5
    }),
    repeat: -1
  };
  this.anims.create(idleAnimationConfig);
  this.person.play(`idle`);
}

sunAnimation() {
  let idleAnimationConfig2 = {
    key: `radiate`,
    frames: this.anims.generateFrameNumbers(`sun`, {
      start: 0,
      end: 5
    }),
    repeat: -1
  };
  this.anims.create(idleAnimationConfig2);
  this.sun.play(`radiate`);
}

sundrop() {
  for (let i = 0; i < 5; i++) {
    this.sunPosition = this.sunPosition + 1
  }
}
}

