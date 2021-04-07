class snake {
    constructor(game) {
        this.game = game;
        this.x = GAME_WIDTH / 2;
        this.y = GAME_HEIGHT / 2;

        this.angle = 0;
        this.tailPositions = [];

        this.createTail();
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
        console.log(mousePos)
        this.angle = Math.atan2(
            mousePos.y - (SCREEN_HEIGHT / 2),
            mousePos.x - (SCREEN_WIDTH / 2)
        );
        console.log(this.angle);
    }

    createTail () {
        for( let i = 0; i<200; i++) {
            this.tailPositions.push({
                x: this.x - (i* SNAKE_SPEED),
                y: this.y
            });
        }

    }
    
    update() {
        let newTailPosition = {
            x: this.x += Math.cos(this.angle) * SNAKE_SPEED,
            y: this.y += Math.sin(this.angle) * SNAKE_SPEED
        }
        
        this.tailPositions.unshift(newTailPosition);
        this.tailPositions.pop();

        this.x = newTailPosition.x;
        this.y = newTailPosition.y;
    }

    draw() {
        for (let i = this.tailPositions.length - 1; i > 1; i--) {
            if (i % 5 == 0) {
                this.game.screen.drawCircle({
                    x: this.tailPositions[i].x,
                    y: this.tailPositions[i].y
                }, 'snack')
            }
        }
    }
}