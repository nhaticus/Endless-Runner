class Ball extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        this.score = 0;
        
    }
    

    update() {
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

        this.setVelocity(350 * playerVector.x, 350 * playerVector.y)
    }
}