class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    };

    preload() {
        this.load.image('grass', './assets/grass.jpg');
    }

    create() {
        this.cameras.main.setBackgroundColor(0x99ffcc);
        this.grass = this.add.sprite(borderSize, 0, 'grass').setOrigin(0, 0);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '48px',
            backgroundColor: '#33cc33',
            color: '#ffffff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // title
        this.add.text(borderSize + padding, borderSize, 'Soccer Drill', menuConfig);

        this.add.text(width / 2, 0,'HIGH SCORE:' + highScore, {
            fontSize: '32px',
            backgroundColor: '#33cc33',
            fill: '#ffcc99'
        }).setOrigin(0.5,0);
      
        // menu options
        menuConfig.fontSize = 24;
        this.add.text(width / 2, height - borderSize * 2,'use UP and DOWN arrows to select options, ENTER to select', menuConfig).setOrigin(0.5);
        this.add.text(width / 2, height - borderSize ,'Game controls: ARROW KEYS to move', menuConfig).setOrigin(0.5);
        

        menuConfig.fontSize = 32;

        let playOption = this.add.text(borderSize + padding, borderSize + padding * 2, 'Play', menuConfig);
        let creditsOption = this.add.text(borderSize + padding, borderSize + padding * 3, 'Credits', menuConfig);

        let selectedOption = 0;
        let menuOptions = [playOption, creditsOption];
      
        // highlighting feature
        menuOptions[selectedOption].setStyle({ fill: '#ff0' });
      
        this.input.keyboard.on('keydown-UP', () => {
            menuOptions[selectedOption].setStyle({ fill: '#fff' });
            selectedOption = (selectedOption - 1 + menuOptions.length) % menuOptions.length;
            menuOptions[selectedOption].setStyle({ fill: '#ff0' });
        });
      
        this.input.keyboard.on('keydown-DOWN', () => {
            menuOptions[selectedOption].setStyle({ fill: '#fff' });
            selectedOption = (selectedOption + 1) % menuOptions.length;
            menuOptions[selectedOption].setStyle({ fill: '#ff0' });
        });
      
        this.input.keyboard.on('keydown-ENTER', () => {
            if (selectedOption == 0) {
                game.settings = {
                    gameSpeed: 5,
                    playerSpeed: 500,
                    points: 1
                }
                this.scene.start('playScene');
            } else if (selectedOption === 1) {
                this.scene.start('creditScene');
            }
          });


    }

    update() {
    }
}
