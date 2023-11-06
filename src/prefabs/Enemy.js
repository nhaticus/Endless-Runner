class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this).setScale(3);
        scene.physics.world.enable(this);

        scene.anims.create({
            key: 'run-down',
            frameRate: 2 * gameSpeed,
            repeate: -1,
            frames: this.anims.generateFrameNumbers(texture, {
                start: 0,
                end: 3
            })
        });

        this.setImmovable(true);

        this.setVelocityY(300 * gameSpeed)
    }

    update() {
    }
}