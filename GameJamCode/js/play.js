class Play extends Phaser.Scene {
    constructor() {
      super({
        key: `play`
      });
    }
  
    create() {
  
      this.raindrop = this.physics.add.sprite(100, 100, `raindrop`);
  

      this.umbrella = this.physics.add.sprite(200, 200, `umbrella`);
  
     // this.createAnimations();

      this.raindrop.setVelocityY(200);
      //this.umbrella.play(`moving`);

      this.cursors = this.input.keyboard.createCursorKeys();
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