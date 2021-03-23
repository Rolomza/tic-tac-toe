const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign
    };

    return { getSign };
}

const gameboard = (() => {
    const board = ["","","","","","","","",""];

    const setCell = (index, sign) => {
        if(index > board.length) return;
        board[index] = sign;
    };

    const getCell = (index) => {
        if(index > board.length) return;
        return board[index];
    };

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return { setCell, getCell, reset}
})();

const displayController = (() => {
    const cellElements = document.querySelector('.cell');
    const messageElement = document.querySelector('.message')
})();

const gameController = (() => {

})();