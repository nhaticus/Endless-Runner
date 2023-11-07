class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
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
            delay: 1000,
            callback: () => {
                if (gameSpeed < 3){
                    gameSpeed += 0.1   
                }
            },
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
            gameSpeed = 1;
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
        this.cone = new Cone(this, coneX, 0, 'cone');
        this.coneTimer.delay = Phaser.Math.Between(100, 1500 - gameSpeed * 10);
    }

    generateEnemy() {
        let enemyX = Phaser.Math.Between(borderSize + padding, width - borderSize - padding / 2);
        this.enemy = new Enemy(this, enemyX, 0, 'enemy');
        this.enemy.setBodySize(this.enemy.width / 2);
        this.enemy.play('run-down', true);
        this.enemyTimer.delay = Phaser.Math.Between(100, 2000 - gameSpeed * 10);
        
    }

    update() {
        this.grass.tilePositionY -= 5 * gameSpeed;

        this.scoreText.text = 'SCORE:' + this.score;
        this.highScoreText.text = 'HIGH SCORE:' + highScore;

        if (this.score > highScore) {
            highScore = this.score;
        }
        
        this.player.update(this.cursors);
        
        // console.log(gameSpeed);

    }

}