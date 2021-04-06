class screen {
    constructor(game) {
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }

    update() {
        this.top = this.game.snack.y - (SCREEN_HEIGHT / 2);
        this.bottom = this.game.snack.y + (SCREEN_HEIGHT / 2);
        this.left = this.game.snack.x - (SCREEN_HEIGHT / 2);
        this.right = this.game.snack.x + (SCREEN_HEIGHT / 2);
    }

    drawCircle(pos) {
        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x - this.left,
            pos.y - this.top,
            10,
            0,
            Math.PI * 2
        );
        this.game.ctx.fillStyle = 'green';
        this.game.ctx.fill();
    } 

}