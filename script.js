const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign
    };

    return { getSign };
}

const gameBoard = (() => {
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
    const cellElements = document.querySelectorAll('.cell');
    const messageElement = document.querySelector('.message');
    const restartButton = document.querySelector('.restart-btn');

    cellElements.forEach(cell => {
        cell.addEventListener('click', e => {
            if (gameController.isOver() || e.target.textContent !== "") return;
            gameController.playRound(parseInt(e.target.dataset.index));
            updateGameboard();
        })
    });

    restartButton.addEventListener('click', e => {
        gameBoard.reset();
        gameController.reset();
        updateGameboard();
        setMessageElement(`Player's X turn!`)
    });

    const updateGameboard = () => {
        for (let i = 0; i < cellElements.length; i++) {
            cellElements[i].textContent = gameBoard.getCell(i)
        }
    };

    const setResultMessage = (winner) => {
        if (winner === 'Draw') {
            setMessageElement(`It's a draw!`);
        } else {
            setMessageElement(`Player ${winner} has won!`)
        }
    };

    const setMessageElement = (message) => {
        messageElement.textContent = message
    }

    return { setResultMessage, setMessageElement };
})();

const gameController = (() => {

})();