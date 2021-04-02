class TicTacToe {
    constructor() {
        this.board = [
            ['','',''],
            ['','',''],
            ['','','']
        ];
    }

    // print out board so it isn't flat
    printBoard() {
        const board = this.board;
        for (let i=0; i< board.length; i++) {
            console.log(board[i]);
        }
    }
}

const newGame = new TicTacToe();
newGame.printBoard();