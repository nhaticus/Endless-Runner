class Load extends Phaser.Scene{
    constructor() {
        super('loadScene')
    }

    preload() {
        //images
        this.load.path = './assets/'
        this.load.image('grass', 'grass.jpg');
        this.load.image('cone', 'cone.png');
        this.load.image('creditBG', 'credit_art.png');
        this.load.image('enemy', 'enemy.png')

        //sounds
        this.load.audio('button-pressed', 'button_pressed.mp3');    // Sound Effect by <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=124476">UNIVERSFIELD</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=124476">Pixabay</a>
        this.load.audio('game-over', 'game_over.mp3');  // Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6435">Pixabay</a>
        this.load.audio('selection', 'selection.mp3');  // Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=68338">Pixabay</a>
        this.load.audio('music', 'music.mp3');  // Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=68698">Pixabay</a>
        this.load.audio('restart', 'restart.mp3') // Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=84727">Pixabay</a>

        this.load.spritesheet('player', 'spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        //music
        this.sound.play('music',{
            loop: true,
            volume: 0.6,
        });
        
        this.anims.create({
            key: 'run-up',
            frameRate: 4,
            repeate: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            })
        });
        this.scene.start('menuScene')
    }
}