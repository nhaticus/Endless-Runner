/**
 * Nhat Thai
 * 
*/ 
let width = 1024;
let height = 800;
let borderSize = width / 8;
let padding = borderSize / 2;

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            x: width / 8,
            y: 0,
            width: width - borderSize * 2,
            height: height,
            debug: true
        }
    },
    width: width,
    height: height,
    scene: [ Menu, Play ]
}

let highScore = 0;
let keySPACE, cursors, playerDirection;

let game = new Phaser.Game(config);