import Phaser from 'phaser-ce'
import PIXI from 'pixi'
// import 'p2'

class Game extends Phaser.Game {
  constructor() {
    const width = 800;
    const height = 600;
    super(width, height, Phaser.AUTO, 'app');

    this.state.add('Boot', BootState)
    this.state.add('Splash', SplashState)
    this.state.add('Game', GameState)

    this.state.start('Boot')
  }
}

class Boot extends Phaser.State {
  preload() {
    console.log('Boot preload')
    this.load.image('kitten', '../../assets/objects/rpgItems.png');
    this.load.spritesheet('girl', '../../assets/characters/girl.png', 32, 48);
  }
  create() {
    console.log('Boot create')
    this.game.add.sprite(0,0,'kitten')
    // this.state.start('Splash')
  }
}

const BootState = new Boot()
window.game = new Game()



// class Splash extends Phaser.State {
//   preload() {
//     this.load.image('kitten', '../../assets/objects/rpgItems.png');
//     this.load.spritesheet('girl', '../../assets/characters/girl.png', 32, 48);
//   }
//   create() {
//     this.game.add.sprite(0,0,'kitten')
//     this.state.start('Splash')
//   }
// }

// const BootState = new Boot()
