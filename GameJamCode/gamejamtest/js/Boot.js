class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    // NOTE: we use special loading methods to load files into our program
    // Here we're using the special "load" property of the scene to load
    // a simple image. The parameters are
    // - The "key" we will use to refer to this asset later
    // - The path to the image asset
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
    this.load.image(`clown`, `assets/images/clown.png`);

    // NOTE: now that we're loading an actual file, we need to wait until everything
    // loads before switching to the next scene. We use the "complete" event listener
    // of the loader to do this.
    // Note the use of an ARROW FUNCTION so that we can still use "this" correctly
    // inside the event handler!
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/loader-events/load-progress
    this.load.on(`complete`, () => {
      // Switch to the Play scene
      this.scene.start(`play`);
    });
  }

  create() {
    let loadingTextStyle = {
      fontFamily: "sans-serif",
      fontSize: "40px",
      fill: "#ffffff",
      align: "center"
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);

    // NOTE: Switch to the scene with the key of "play"
    // EXAMPLE: https://phaser.io/examples/v3/view/scenes/change-scene-from-create
    this.scene.start(`play`);
  }

  update() {

  }
}