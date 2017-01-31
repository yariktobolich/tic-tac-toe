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
            if (this.current == 'x') {
                this.current = 'o';
            } else {
                this.current = 'x';
            }
        this.cell--;
        }
    }

    isFinished() {
        if(this.isDraw()||this.getWinner()) return true;
        return false;
    }

    getWinner() {
    var temp;   
for(var k = 0;k < this.count; k++ ){
    // console.log("k");
    outer:for (var i = 0; i < this.count; i++) {
            // console.log(i);
            for(var j = 0; j < this.count; j++){
                // console.log(j);
                for(var h = 0; h < this.count; h++){
                    // console.log(h);
                    for(var n = 0; n < this.count; n++ ){
                        // console.log(n);
                        if ((this.arr[i][j] == this.icon_1) && (this.arr[i][h] == this.icon_1) && (this.arr[i][n] == this.icon_1)) {
                            // console.log("this.icon2");
                            temp = this.icon_1;
                        } else  if ((this.arr[i][j] == this.icon_2) && (this.arr[i][h] == this.icon_2) && (this.arr[i][n] == this.icon2)) {
                            // console.log("this.icon2");
                            temp = this.icon_2;
                        }
                    }
                }
            }
            
        }
        
    }
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
