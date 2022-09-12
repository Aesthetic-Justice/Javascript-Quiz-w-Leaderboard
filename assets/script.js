let leaderboard = []; //Global array for storing scores outside game loop

//Core game loop
function playGame() {
    let timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            //Do Thing
            timeLeft--;
        }

        else {
            clearInterval(timeInterval);//kill the timer loop
            //End the game
            //Record score
        }
    }, 1000);
}

let questions = []

//Updates questions
function nextQuestion(){

}