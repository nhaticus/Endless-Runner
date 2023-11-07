class Load extends Phaser.Scene{
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('grass', 'grass.jpg');
        this.load.image('cone', 'cone.png');
        this.load.image('creditBG', 'credit_art.png');

        this.load.spritesheet('player', 'spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet('enemy', 'spritesheets/enemy.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        this.anims.create({
            key: 'run-up',
            frameRate: 2 * gameSpeed,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            })
        });

        this.anims.create({
            key: 'run-down',
            frameRate: 2 * gameSpeed,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('enemy', {
                start: 0,
                end: 3
            })
        });

        this.scene.start('menuScene')
    }
}