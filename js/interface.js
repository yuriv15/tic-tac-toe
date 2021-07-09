document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    let scoreP1 = document.getElementById("score-p1");
    let scoreP2 = document.getElementById("score-p2");
    let scoreP1Number = parseInt(scoreP1.innerText);
    let scoreP2Number = parseInt(scoreP2.innerText);

    if(handleMove(position)){
        if(playerTime == 0){
            scoreP1Number += 1;
            scoreP1.innerText = scoreP1Number;
        }else if(playerTime == 1){
            scoreP2Number += 1;
            scoreP2.innerText = scoreP2Number;
        }
        setTimeout(() => {
            alert ("Player " + (playerTime+1) + " won!");
        }, 10);
        
    };
    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`;
}

function updateSquares() {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.innerHTML = '';
    })

}

let restart = document.getElementById("restart-button");

restart.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    updateSquares();
})

let restartScore = document.getElementById("restart-score-button");

restartScore.addEventListener('click', () => {
    let scoreP1 = document.getElementById("score-p1");
    let scoreP2 = document.getElementById("score-p2");
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;
})