class Play extends Phaser.Scene {
    constructor() {
      super({
        key: `play`
      });
      
    }
  
    create() {

      this.raindrops = this.physics.add.group({
        // All walls should use the wall image key
        key: `raindrop`,
        quantity: 200,
      });

      this.person = this.physics.add.sprite(Phaser.Math.Between(0, this.sys.canvas.width), Phaser.Math.Between(0, 50), `person`);
      this.umbrella = this.physics.add.sprite(200, 200, `umbrella`);

      this.cursors = this.input.keyboard.createCursorKeys();

      
      this.colliders();
      this.rainPosition();
    
      this.physics.add.overlap(this.umbrella, this.person, this.destroyRain, null, this)

      let idleAnimationConfig = {
        // NOTE: We need to use a different animation key of course
        key: `idle`,
        frames: this.anims.generateFrameNumbers(`person`, {
          // NOTE: We're only going to use frame 0, so it's starts and ends there
          start: 0,
          end: 6
        }),
        // NOTE: No need to specify a frame rate for something that doesn't technically animate!
        // NOTE: We'll repeat 0 times!
        repeat: -1
      };
      this.anims.create(idleAnimationConfig);
      // NOTE: It makes sense for the avatar to start out "idle"
      this.person.play(`idle`);
    }



    destroyRain(){
        this.raindrop.destroy();
    }

    update() {
    this.handleInput();
  }
 
  collectItem(umbrella, item) {
    item.destroy();
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
    this.physics.add.collider(this.umbrella, this.raindrops);
    this.physics.add.collider(this.person, this.raindrops);
    this.physics.add.collider(this.person, this.umbrella);
}
}