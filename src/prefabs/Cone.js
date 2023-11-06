class Cone extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this).setScale(1.5);
        scene.physics.world.enable(this);

        this.setImmovable(true);

        this.setVelocityY(300 * gameSpeed);

    }
    update() {
    }
}