"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  // NOTE: We've added our Play scene to the game, it will be automatically loaded
  // when the game starts because it's the first scene in the list of scenes
  scene: [Play]
};

let game = new Phaser.Game(config);