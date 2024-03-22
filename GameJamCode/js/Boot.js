class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }


  preload() {
      //loads the images from the file 
    this.load.image(`raindrop`, `assets/images/raindrop.png`,);
    this.load.image(`umbrella`, `assets/images/umbrella-1.png.png`);
    
    this.load.spritesheet(`person`, `assets/images/idleAnimation.png`, {
      frameWidth: 32,
      frameHeight: 32,
      // assigns number of frams (starting from 0)
      endFrame: 5
    });

    this.load.spritesheet(`sun`, `assets/images/sunSpriteSheet.png`, {
      frameWidth: 256,
      frameHeight: 256,
      endFrame: 9
    });

    this.load.on(`complete`, () => {
      // switches to play scene when it it loaded 
      console.log('game is playing')

      this.scene.start(`play`);
    });

  }
}