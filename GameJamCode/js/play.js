//help with:
//    - fade from black to yellow and sun drops from the sky
//    - check if person is still on screen ??
//    - why isn't person being destroyed?

class Play extends Phaser.Scene {
    constructor() {
      super({
        key: `play`
      });
      this.startBack = new Phaser.Display.Color(0, 0, 0);
      this.endBack = new Phaser.Display.Color(250, 223, 172);
      this.index = 0
      this.gameEnded = false;
      this.timerLength = 1000 * 8
      this.youLost = false;
    }
  
    create() {
        //creates timer variable that stores a delayed call (EndGame)
        //needed to add null when endgame is called so that it can only be called once
      this.timer = this.time.delayedCall(this.timerLength, this.endGame, null, this);

      //this.cameras.main.setBackgroundColor(0xbababa)

      this.startText = this.add.text(300, 500, 'keep him dry!');
      this.endText = this.add.text(300, -600, 'congrats, he stayed dry');

      this.raindrops = this.physics.add.group({
          //creates a group of 200 raindrops 
        key: `raindrop`,
        quantity: 200,
      });

        //creates the variables for the onscreen pieces, sets position and gives key
      this.person = this.physics.add.sprite(Phaser.Math.Between(100, 700), Phaser.Math.Between(400, 600), `person`);
      this.umbrella = this.physics.add.sprite(400, 300, `umbrella`);
      this.sun = this.add.sprite(400, -150, `sun`);
      console.log(this.sun.y)

        //adds variable for the keyboard and calls the cursor keys function
      this.cursors = this.input.keyboard.createCursorKeys();

      this.rainPosition();
    
        //adds overlap between umbrella and raindrop and calls DestroyRain if true
     this.physics.add.overlap(this.umbrella, this.raindrops, null, this.destroyRain, this)
     this.physics.add.overlap(this.raindrops, this.person, null, this.deletePerson, this)

   
        //animates things
      this.personAnimation();
      this.sunAnimation();
      
    }

    endGame(){
        //conditions for when timer runs out
      console.log('game has ended')
        //null makes the variable hold nothing 
      this.timer = null
      this.gameEnded = true;
    }

    update(){
        //calls handleInput function every frame, moves umbrella
      this.handleInput()
      if (this.gameEnded === true && this.index < 100 && this.sun.y < 300 && this.youLost === false) {
         let hexColor = Phaser.Display.Color.Interpolate.ColorWithColor(this.startBack, this.endBack, 100, this.index);
         this.cameras.main.setBackgroundColor(hexColor)  
         this.index++;
         console.log(this.index)  
         this.sun.y = this.sun.y + 6
         this.endText.y = this.endText.y + 10
         this.startText.y = this.startText.y + 10
         }

    }

  destroyRain(umbrella, raindrop){
        //destroys the rain when it touched the umbrella
      raindrop.destroy()
    }

  deletePerson(raindrop, person){
         //changes person color if they are hit  
    this.person.setTint(0x4034eb);
    this.youLost = true;
    this.cameras.main.setBackgroundColor(0xff5c74)
  }

rainPosition() {
    //sets a random position and velocity for each rain drop in the group
  this.raindrops.children.each(function(raindrop) {
    let x = Phaser.Math.Between(0, this.sys.canvas.width);
    let y = Phaser.Math.Between(-300, -1100);
    raindrop.setPosition(x, y);
    raindrop.setVelocityY(200)
    raindrop.setVelocityX(0)
  }, this);
}

personAnimation() {
    //animates through the sprite sheet for the respective object. creates the animation loop and then calls inside
    //of the parameter for the object 
  let idleAnimationConfig = {
    key: `idle`,
    frames: this.anims.generateFrameNumbers(`person`, {
      start: 0,
      end: 5
    }),
    repeat: -1
  };
  this.anims.create(idleAnimationConfig);
  this.person.play(`idle`);
}


sunAnimation() {
  let idleAnimationConfig2 = {
    key: `radiate`,
    frames: this.anims.generateFrameNumbers(`sun`, {
      start: 0,
      end: 5
    }),
    repeat: -1
  };
  this.anims.create(idleAnimationConfig2);
  this.sun.play(`radiate`);
}

handleInput() {
  if (this.cursors.left.isDown) {
      this.umbrella.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown) {
      this.umbrella.setVelocityX(100);
    }
    else {
      this.umbrella.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.umbrella.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown) {
      this.umbrella.setVelocityY(100);
    }
    else {
      this.umbrella.setVelocityY(0);
    }

}
}

