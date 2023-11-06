class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    preload() {
        this.load.image('grass', './assets/grass.jpg');
        this.load.image('cone', './assets/cone.png');
        this.load.spritesheet('player', './assets/spritesheets/player.png', {
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet('enemy', './assets/spritesheets/enemy.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }

    create() {
        this.grass = this.add.tileSprite(borderSize, 0, width - borderSize * 2, height, 'grass').setOrigin(0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.timerScore = this.time.addEvent ({
            delay: 1000,
            callback: () => this.score += this.game.settings.points,
            callbackScope: this,
            loop: true
        })

        this.timerSpeed = this.time.addEvent ({
            delay: 5000,
            callback: () => gameSpeed += 0.1,
            callbackScope: this,
            loop: true
        })

        this.coneTimer = this.time.addEvent ({
            delay: 1000,
            callback: this.generateCone,
            callbackScope: this,
            loop: true
        })

        this.enemyTimer = this.time.addEvent ({
            delay: 1000,
            callback: this.generateEnemy,
            callbackScope: this,
            loop: true
        })

        this.add.text(0, 0 ,'R to restart\nM for menu',{
            fontSize: 24,
            backgroundColor: '#33cc33'
        }).setOrigin(0, 0);
        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            this.scene.start('menuScene');
        });

        //restart game option
        this.input.keyboard.on('keydown-R', () => {
            this.scene.restart();
        });

        this.cameras.main.setBackgroundColor(0x99ffcc);
        
        this.score = 0;

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
        
        
        this.scoreText = this.add.text(0, height ,'SCORE:' + this.score, menuConfig).setOrigin(0, 1).setStyle({ fill: '#ffcc99' });
        this.highScoreText = this.add.text(width, height,'HIGH SCORE:' + highScore, menuConfig).setOrigin(1, 1).setStyle({ fill: '#ffcc99' });

        this.player = new Ball(this, width/2, height, 'player', 0).setOrigin(0.5, 1);
        this.player.setBodySize(this.player.width / 2);

    }

    generateCone() {
        let coneX = Phaser.Math.Between(borderSize + padding, width - borderSize - padding / 2);
        let cone = new Cone(this, coneX, 0, 'cone');
    }

    generateEnemy() {
        let enemyX = Phaser.Math.Between(borderSize + padding, width - borderSize - padding / 2);
        let enemy = new Enemy(this, enemyX, 0, 'enemy');
        enemy.setBodySize(enemy.width / 2);
        enemy.play('run-down', true);
    }

    update() {
        this.grass.tilePositionY -= 5 * gameSpeed;

        this.scoreText.text = 'SCORE:' + this.score;
        this.highScoreText.text = 'HIGH SCORE:' + highScore;

        if (this.score > highScore) {
            highScore = this.score;
        }
        
        this.player.update(this.cursors);
        
        
    }

}