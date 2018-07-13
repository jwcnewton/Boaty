require(['scripts/scenes/main', 'scripts/scenes/home', 'scripts/shared/pause'], function (main, home, pause) {
    var config = {
        type: Phaser.AUTO,
        width: 400,
        height: 300,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0.15, x: 0.15 },
                debug: false
            }
        }
    };

    game = new Phaser.Game(config);

    game.scene.add("home", home.load(), true);
    game.scene.add("main", main.load(), false);
    game.scene.add("pause", pause.load(), false);
});