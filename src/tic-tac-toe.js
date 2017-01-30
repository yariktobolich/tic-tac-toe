class TicTacToe {
    constructor() {
        this.current = "x";
        this.arr = [[null,null,null],[null,null,null],[null,null,null]];
        this.cell = 9;
        this.win = null;
    }
    getCurrentPlayerSymbol() {
        return this.current;
    }
    nextTurn(rowIndex, columnIndex) {
        if(this.arr[rowIndex][columnIndex] === null) {
        this.arr[rowIndex][columnIndex] = this.current;
        if(this.current === "x"){
            return this.current = "o";
        } else {
            return this.current = "x"
        }
        this.cell--;
        }
    }
    isFinished() {
    }
    getWinner() {
    }
    noMoreTurns() {
    }
    isDraw() {
    }
    getFieldValue(rowIndex, colIndex) {
    }
}
module.exports = TicTacToe;
