const Player = (nickname) => {
    let totalScore = 0;
    return {
        nickname,
        totalScore
    };
};




const gameboard = () => {
    let gameBoardArr = [
        ['X','O','X'],
        ['O','X','O'],
        ['O','O','X']
        ]
    return gameBoardArr
}

console.log(gameboard.gameBoardArr)