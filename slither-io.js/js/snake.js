class snake {
    constructor(game) {
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;

        this.angle = 0;

        this.listenMouseEvent();
    }

    listenMouseEvent() {
        this.game.canvas.addEventListener('mousemove', (event) => {
            let rect = this.game.canvas.getBoundingClientRect();
            this.processMouseMove ({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        })
    }

    processMouseMove(mousePos) {
        this.angle = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
        console.log(this.angle);
    }
    
    update() {
        
    }

    draw() {
        this.game.screen.drawCircle({
            x: this.x,
            y: this.y
        })
    }
}