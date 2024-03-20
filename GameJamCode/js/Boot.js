class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }


  preload() {
 
    this.load.image(`raindrop`, `assets/images/raindrop.png`,);

    this.load.image(`umbrella`, `assets/images/umbrella-1.png.png`)
    
    this.load.spritesheet(`person`, `assets/images/idleAnimation.png`, {
      // Our animation uses 32x32 pixel frames
      frameWidth: 32,
      frameHeight: 32,
      // Our animation has 4 frames, so the final frame number is 3, counting from 0
      endFrame: 5
    });

    this.load.on(`complete`, () => {
      // Switch to the Play scene
      console.log('game is playing')

      this.scene.start(`play`);
    });

  }

  create() {

  }

  update() {

  }
}