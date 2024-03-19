"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [Play]
};

// Here we actually create the game using this configuration!
let game = new Phaser.Game(config);