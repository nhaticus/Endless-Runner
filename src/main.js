/**
 * Nhat Thai
 * Game: Soccer Drill
 * Hours spend: 8 so far
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
    scene: [ Load, Menu, Credit, Play ]
}

let highScore = 0;
let gameSpeed = 1;
let over = false;

let game = new Phaser.Game(config);