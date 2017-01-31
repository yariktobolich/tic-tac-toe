class TicTacToe {
    constructor() {
        this.current = 'x';
        this.win = null;
        this.arr = [[null,null,null],[null,null,null],[null,null,null]];
        this.cell = 9;
        this.icon_1 = "x";
        this.icon_2 = "o";
        this.count = 3;
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[rowIndex][columnIndex] == null) {
            this.arr[rowIndex][columnIndex] = this.current;
            if (this.current == this.icon_1) {
                this.current = this.icon_2;
            } else {
                this.current = this.icon_1;
            }
        this.cell--;
        }
    }

    isFinished() {
        if(this.isDraw()||this.getWinner()) return true;
        return false;
    }

    getWinner() {
        if (this.arr[0][0] == this.icon_1 && this.arr[0][1] == this.icon_1 && this.arr[0][2] == this.icon_1 ||
            this.arr[1][0] == this.icon_1 && this.arr[1][1] == this.icon_1 && this.arr[1][2] == this.icon_1 ||
            this.arr[2][0] == this.icon_1 && this.arr[2][1] == this.icon_1 && this.arr[2][2] == this.icon_1 ||
            this.arr[0][0] == this.icon_1 && this.arr[1][0] == this.icon_1 && this.arr[2][0] == this.icon_1 ||
            this.arr[0][1] == this.icon_1 && this.arr[1][1] == this.icon_1 && this.arr[2][1] == this.icon_1 ||
            this.arr[0][2] == this.icon_1 && this.arr[1][2] == this.icon_1 && this.arr[2][2] == this.icon_1 ||
            this.arr[0][0] == this.icon_1 && this.arr[1][1] == this.icon_1 && this.arr[2][2] == this.icon_1 ||
            this.arr[0][2] == this.icon_1 && this.arr[1][1] == this.icon_1 && this.arr[2][0] == this.icon_1 )
            {this.win = this.icon_1} ;
        if (this.arr[0][0] == this.icon_2 && this.arr[0][1] == this.icon_2 && this.arr[0][2] == this.icon_2 ||
            this.arr[1][0] == this.icon_2 && this.arr[1][1] == this.icon_2 && this.arr[1][2] == this.icon_2 ||
            this.arr[2][0] == this.icon_2 && this.arr[2][1] == this.icon_2 && this.arr[2][2] == this.icon_2 ||
            this.arr[0][0] == this.icon_2 && this.arr[1][0] == this.icon_2 && this.arr[2][0] == this.icon_2 ||
            this.arr[0][1] == this.icon_2 && this.arr[1][1] == this.icon_2 && this.arr[2][1] == this.icon_2 ||
            this.arr[0][2] == this.icon_2 && this.arr[1][2] == this.icon_2 && this.arr[2][2] == this.icon_2 ||
            this.arr[0][0] == this.icon_2 && this.arr[1][1] == this.icon_2 && this.arr[2][2] == this.icon_2 ||
            this.arr[0][2] == this.icon_2 && this.arr[1][1] == this.icon_2 && this.arr[2][0] == this.icon_2 )
            {this.win = this.icon_2} ;
        return this.win;
        }
    noMoreTurns() {
       if (this.cell === 0) return true;
       return false;
    }

    isDraw() {   
        if(this.getWinner() === null && this.cell === 0) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
