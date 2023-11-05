class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    };

    preload() {
        this.load.image('grass', './assets/grass.jpg');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x4AFF33);
        this.grass = this.add.sprite(borderSize, 0, 'grass').setOrigin(0, 0);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(width / 2, borderSize, 'HIGH SCORE:' + highScore, menuConfig).setOrigin(0.5);
        this.add.text(width / 2, height / 2 - borderSize - padding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(width / 2, height / 2, 'Use ←→ arrows to move and (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(width / 2, height / 2 + borderSize + padding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        this.add.text(width / 2, height / 2 + borderSize * 2 + padding * 2, 'Press (D) for two player', menuConfig).setOrigin(0.5);
    
    }

    update() {
        game.settings = {
            gameSpeed: 5,
            playerSpeed: 500
        }
        this.scene.start('playScene')
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            game.settings = {
                gameSpeed: 5,
                playerSpeed: 500
            }
            this.scene.start('playScene')
        }

    }
}
