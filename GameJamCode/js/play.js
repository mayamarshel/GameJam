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
        quantity: 1,
      });
  

      this.umbrella = this.physics.add.sprite(200, 200, `umbrella`);

      this.cursors = this.input.keyboard.createCursorKeys();
      this.physics.add.collider(this.umbrella, this.raindrops);

      this.raindrops.children.each(function(raindrop) {
        let x = Phaser.Math.Between(0, this.sys.canvas.width);
        let y = Phaser.Math.Between(0, -600);
        raindrop.setPosition(x, y);
        raindrop.setVelocityY(200)
        raindrop.setVelocityX(0)


      }, this);

      raindrops.refresh();

      this.umbrella.body.onOverlap = true;
      this.physics.add.overlap(this.umbrella, this.raindrops);

      this.physics.world.on('overlap', (gameObject1, gameObject2, body1, body2) =>
      {
          gameObject1.destroy();
          console.log('collision')
      });
    }

    update() {
    this.handleInput();
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


}