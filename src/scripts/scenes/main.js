define(function () {
    return {
        preload: function () {
            this.load.image('sky', '../../assets/sky.png');
            this.load.spritesheet('boat',
                '../../assets/boat.png',
                { frameWidth: 96, frameHeight: 41 }
            );
        },

        create: function () {
            this.add.image(400, 300, 'sky');
            this.add.image(0, 0, 'sky').setOrigin(0, 0)

            boat = this.physics.add.sprite(100, 450, 'boat');

            this.anims.create({
                key: 'space',
                frames: this.anims.generateFrameNumbers('boat', { start: 0, end: 3 }),
                frameRate: 10
            });

            boat.setCollideWorldBounds(true);
        },

        update: function () {
            this.input.keyboard.addKey();
            pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
            keys = this.input.keyboard.createCursorKeys();

            if (keys.left.isDown) {
                boat.setPosition(boat.x - 5, boat.y);
            }
            else if (keys.right.isDown) {
                boat.setPosition(boat.x + 5, boat.y);
            }
            else if (keys.up.isDown) {
                boat.setPosition(boat.x, boat.y - 5);
            }
            else if (keys.down.isDown) {
                boat.setPosition(boat.x, boat.y + 5);
            }

            if (keys.up.isDown && boat.body.touching.down) {
                boat.setVelocityY(-330);
            }

            if (pKey.isDown) {
                pKey.isDown = false;
                this.scene.pause();
                this.scene.launch('pause')
            }
        },

        load: function () {
            return {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        }
    }

});