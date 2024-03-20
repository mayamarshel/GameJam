class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.physics.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    // NOTE: We're adding another physics sprite with the same image as the wall!
    this.collectable = this.physics.add.sprite(300, 300, `wall`);
    // NOTE: We'll tint it a different color so we can tell the difference
    this.collectable.setTint(`0x3333dd`);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.physics.add.collider(this.avatar, this.wall);

    // NOTE: To check for overlaps we do the same kind of thing as above
    // BUT we'll add extra arguments so we can call our own method to respond
    // to the overlap! The arguments here are:
    // - The first thing that can overlap (the avatar)
    // - The second thing that can overlap (the collectable)
    // - The function or method to call when it happens (collectItem())
    // - A function or method to replace how Arcade Physics handles the event (null!)
    // - The "context" to use when calling our handler(s) ("this", so that we can
    //   still use the properties and methods of this class)
    // DOCS: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#overlap__anchor
    this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);

    this.createAnimations();

    this.avatar.play(`idle`);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }

  // NOTE: This method is called when the avatar overlaps the collectable
  // It receives two parameters by default, which are the first and second object
  // that overlapped (the avatar and the collectable item in that order in this case!)
  collectItem(avatar, item) {
    // NOTE: We'll keep it simple by just removing the collectable from the scene
    // using its .destroy() method!
    item.destroy();
  }
}