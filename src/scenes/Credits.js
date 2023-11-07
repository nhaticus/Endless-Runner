class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    create() {
        this.cameras.main.setBackgroundColor(0x99ffcc);
        this.add.image(0, 0, 'creditBG').setOrigin(0, 0);

        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '24px',
            backgroundColor: '#33cc33',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(width / 2, 0 ,'M to go back to menu', menuConfig).setOrigin(0.5, 0);
        //menu scene option
        this.input.keyboard.on('keydown-M', () => {
            this.sound.play('button-pressed');
            this.scene.start('menuScene');
        });
        this.add.text(width / 2, height / 2, 'Soccer Drill\n\
Game by Nhat Thai\n\
Arts: Nhat Thai\n\
Sounds: Pixabay royalty-free sound effects', menuConfig).setOrigin(0.5);

    }
}