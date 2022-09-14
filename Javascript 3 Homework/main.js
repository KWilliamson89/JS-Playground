const game = ["Rock", "Paper", "Scissors"];
let player = Math.floor(Math.random() * game.length);
let computer = Math.floor(Math.random() * game.length);
let message = "The Player " + game[player] + " vs Computer " + game[computer];

document.getElementById("result").innerHTML = " ";

 function bigGame() {
    if (player === computer) {
        message += "Issa Tie";
    } else if (player > computer) {
        if (computer === 0 && player === 2) {
            message += "You hate to see it!";
        } else {
            message += "Playa, Playa!";
        }
    } else {
        if (computer === 2 && player === 0){
            message += "Playa, Playa!";
        } else {
            message += "You REALLY hate to see it";
        }
    }
 }