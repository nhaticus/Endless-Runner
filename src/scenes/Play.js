class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    preload() {
        this.load.image('grass', './assets/grass.jpg');
        this.load.spritesheet('player', './assets/spritesheets/Character_002.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        this.cameras.main.setBackgroundColor(0x4AFF33);

        this.grass = this.add.tileSprite(borderSize, 0, width - borderSize * 2, height, 'grass').setOrigin(0, 0).setOrigin(0, 0);
        
        this.player = this.physics.add.sprite(width / 2, height / 2, 'player', 0).setScale(2);
        this.player.body.setCollideWorldBounds(true);
        this.player.body.setSize(32, 32).setOffset(8, 16)

        cursors = this.input.keyboard.createCursorKeys()

        this.PLAYER_VELOCITY = 400;
    }

    update() {
        this.grass.tilePositionY -= this.game.settings.gameSpeed;

        let playerVector = new Phaser.Math.Vector2(0 , 0);

        if (cursors.left.isDown) {
            playerVector.x = -1;
        } else if (cursors.right.isDown) {
            playerVector.x = 1;
        }

        if (cursors.up.isDown) {
            playerVector.y = -1;
        } else if (cursors.down.isDown) {
            playerVector.y = 1;
        }

        playerVector.normalize();

        this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y)
    }

}