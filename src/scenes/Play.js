class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    preload() {
        this.load.image('grass', './assets/grass.jpg');
        this.load.spritesheet('player', './assets/spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        this.cameras.main.setBackgroundColor(0x99ffcc);
        
        let score = 0;

        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '32px',
            backgroundColor: '#33cc33',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.grass = this.add.tileSprite(borderSize, 0, width - borderSize * 2, height, 'grass').setOrigin(0, 0);
        
        this.add.text(0, height ,'SCORE:' + score, menuConfig).setOrigin(0, 1);
        this.add.text(width, height,'HIGH SCORE:' + highScore, menuConfig).setOrigin(1, 1);

        this.player = new Ball(this, width/2, height / 2, 'player', 0);

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        this.grass.tilePositionY -= this.game.settings.gameSpeed;
        
        this.player.update(this.cursors);
        
    }

}