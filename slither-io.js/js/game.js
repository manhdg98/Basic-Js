class game {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = SCREEN_WIDTH;
        this.canvas.height = SCREEN_HEIGHT;
        document.body.appendChild(this.canvas);

        this.snack = new snack(this);
        this.screen = new screen(this);

        this.loop();
    }

    loop() {
        this.update();
        this.draw();
        setTimeout( () => this.loop(), 20);
    }

    update() {
        this.snack.update();
    }

    clearScreen() {
        this.ctx.fillStyle = '#f2f2f2';
        this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    }

    draw() {
        this.clearScreen();
        this.snack.draw();
        this.screen.drawCircle({x: 100, y: 100});
    }
}

var g = new game();