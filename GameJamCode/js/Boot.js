class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  // NOTE: we add the preload() method to tell Phaser 3 we want to preload
  // asset files here
  preload() {
    // NOTE: we use special loading methods to load files into our program
    // Here we're using the special "load" property of the scene to load
    // a simple image. The parameters are
    // - The "key" we will use to refer to this asset later
    // - The path to the image asset
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
    this.load.image(`raindrop`, `assets/images/raindrop.png`);

    this.load.image(`umbrella`, `assets/images/umbrella-1.png.png`, {
        // Our animation uses 32x32 pixel frames
        frameWidth: 32,
        frameHeight: 32,
        // Our animation has 4 frames, so the final frame number is 3, counting from 0
        endFrame: 0
      });


    this.load.on(`complete`, () => {
      // Switch to the Play scene
      this.scene.start(`play`);
      console.log('game is playing')
    });

  }

  create() {
    let loadingTextStyle = {
      fontFamily: `sans-serif`,
      fontSize: `40px`,
      fill: `#ffffff`,
      align: `center`
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);

    // NOTE: We removed the scene switching instruction here and moved it up
    // into our loading completion handler because that's when we really want
    // to switch to the next scene.
  }

  update() {

  }
}