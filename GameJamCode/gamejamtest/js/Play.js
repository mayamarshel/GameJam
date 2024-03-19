class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Creating and adding a text object to our scene
    // EXAMPLE: https://phaser.io/examples/v3/view/game-objects/text/basic-text
    // Create a style object to define what the text will look like
    let style = {
      // Use font-family in the same way you use it in CSS
      fontFamily: `sans-serif`,
      // And font size too!
      fontSize: `40px`,
      // Set a fill color for the text (white)
      fill: `#ffffff`,
    };
    // Create a string that describes an amazing game experience!
    let gameDescription = `Think of a number... no that's not it.`;
    // Create the text object that will actually add the text into our
    // scene and display it. The parameters here are:
    // - x position
    // - y position
    // - string to display
    // - style configuration
    this.gameText = this.add.text(100, 100, gameDescription, style);
    // Note that it's often a good idea to assign the resulting text object
    // into a property of the scene if you might want to manipulate it
    // at some later point in your program!

    this.wall = this.add.sprite(100, 100, `wall`);
  }

  update() {

  }
}