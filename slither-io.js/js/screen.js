class screen {
    constructor(game) {
        this.game = game;
        this.top = 0;
        this.bottom = 0;
        this.left = 0;
        this.right = 0;
    }

    update() {
        this.top = this.game.snake.y - (SCREEN_HEIGHT / 2);
        this.bottom = this.game.snake.y + (SCREEN_HEIGHT / 2);
        this.left = this.game.snake.x - (SCREEN_WIDTH / 2);
        this.right = this.game.snake.x + (SCREEN_WIDTH / 2);
    }

    drawCircle(pos, styleName) {
        let styles = {};

        styles['snack'] = {
            color: 'red',
            borderColor: '#F65A5A',
            width: 20
        }

        styles['eye'] = {
        
        }

        let styleProperties = styles[styleName];

        this.game.ctx.beginPath();
        this.game.ctx.arc(
            pos.x - this.left,
            pos.y - this.top,
            styleProperties.width,
            0,
            Math.PI * 2
        );
        this.game.ctx.fillStyle = styleProperties.color;
        this.game.ctx.fill();
        this.game.ctx.strokeStyle = styleProperties.borderColor;
        this.game.ctx.stroke();
    } 

}