define(function () {
    return {
        preload: function () {
            this.load.image('paused', '../../assets/black.png');
        },
        create: function () {
            const centerX = this.sys.game.config.width / 2;
            const centerY = this.sys.game.config.height / 2;
            var img = this.add.image(400, 300, 'paused');
            this.add.image(0, 0, 'paused').setOrigin(0, 0)
            img.alpha = 0.2;
            var textConfig = {fontSize:'20px',fill:'white',fontFamily: 'Arial'};

            pause = this.add.text(centerX, centerY, 'Paused', textConfig);
            pause.setOrigin(0.5,0.5);
            pause.setInteractive();
            
            this.input.on('gameobjectdown', onObjectClicked.bind(this));
        },

        update: function () {
        
        },

        load: function () {
            return {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        }
    }

    function onObjectClicked()
    {
        this.scene.resume("main");
        this.scene.stop();
        //this.scene.pause("main");
    }
});