class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }


  preload() {
 
    this.load.image(`raindrop`, `assets/images/raindrop.png`,);

    this.load.image(`umbrella`, `assets/images/umbrella-1.png.png`)


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