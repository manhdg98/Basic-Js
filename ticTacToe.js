let readlineSync = require('readline-sync');

class TicTacToe {
    constructor(empty) {

        if (empty === '') {
            empty = ''
        }
        this.empty = empty;
        // option 1
        // this.board = [
        //     [empty,empty,empty],
        //     [empty,empty,empty],
        //     [empty,empty,empty]
        // ];

        //option 2
        const board = [];
        for (let i = 0; i < 3; i++) board.push(`${empty}`.repeat(3).split(''));
        this.board = board;
    }

    // getter fir empty spaces on board
    get emptySpaces() {
        let spaces = 0;
        const board = this.board;
        // iterate over each row
        for (let i = 0; i < board.length; i++) {
            const row = board[i];

            // iterate over each column in the row
            for (let j = 0; j < row.length; j++) {
                const columnVal = row[j];

                // if the value is an empty space, count it
                if (columnVal === this.empty) {
                    spaces++;
                }
            }
        }
        return spaces;
    }

    // print out board so it isn't flat
    printBoard() {
        const board = this.board;
        console.log(`\n Board below: `)
        for (let i=0; i< board.length; i++) {
            console.log(board[i]);
        }
    }

    // allows a user to work the board at a specifc position
    takeTurn(mark, row, column) {
        if (this.board[row][column] === this.empty) {
            this.board[row][column] = mark;
        }
    }
}

// Wait for user's response.
let emptySpaceCharacter = readlineSync.question('What character should we use an unused space:  ');

const newGame = new TicTacToe(emptySpaceCharacter);
newGame.printBoard();
console.log(`Spaces remaining: ${newGame.emptySpaces}`); 

newGame.takeTurn('X', 1, 1);
newGame.printBoard();

newGame.takeTurn('O', 0, 2);
newGame.printBoard();
 