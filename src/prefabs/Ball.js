class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this).setScale(2);
        scene.physics.world.enable(this);

        scene.anims.create({
            key: 'run-up',
            frameRate: 2,
            repeate: -1,
            frames: this.anims.generateFrameNumbers(texture, {
                start: 0,
                end: 3
            })
        });

        this.setCollideWorldBounds(true);
        this.setBounce(0.2)

        this.score = 0;
        
    }
    

    update(cursors) {
        
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

        this.play('run-up', true)

        this.setVelocity(game.settings.playerSpeed * playerVector.x, game.settings.playerSpeed * playerVector.y)
    }
}