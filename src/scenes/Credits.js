class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene')
    }

    preload(){

    }

    create() {
        this.cameras.main.setBackgroundColor(0x99ffcc);

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

        this.add.text(width / 2, height / 2 - borderSize, 'Soccer Drill\n\
Game by Nhat Thai\n\
Arts: Nhat Thai\n\
Sounds: ', menuConfig).setOrigin(0.5);

    }
}