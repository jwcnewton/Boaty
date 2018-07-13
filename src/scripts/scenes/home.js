define(function () {
    return {
        preload: function () {

        },
        create: function () {
            const centerX = this.sys.game.config.width / 2;
            const centerY = this.sys.game.config.height / 2;
            var textConfig = {fontSize:'20px',fill:'white',fontFamily: 'Arial'};

            start = this.add.text(centerX, centerY, 'Start', textConfig);
            start.setOrigin(0.5,0.5);
            start.setInteractive();
            start.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);

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
        this.scene.stop("home");
        this.scene.start("main");
    }
});