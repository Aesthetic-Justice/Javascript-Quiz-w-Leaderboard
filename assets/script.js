let leaderboard = []; //Global array for storing scores outside game loop
let startBtn = document.getElementById('startBtn'); //Start Button
let timeLeft = 00;

//Core game loop
function startGame() {
    let questionBox = document.getElementById('questionBox');
    if(timeLeft===00){
        timeLeft=75;
        let timeInterval = setInterval(function () {
            if (timeLeft >= 1) {
                //Do Thing
                //Update timer
                console.log(timeLeft);
                timeLeft--;
            }

            else {
                clearInterval(timeInterval);//kill the timer loop
                timeLeft=00;
                //End the game
            }
        }, 1000);
    nextQuestion(questionBox);
    }
}

function endGame() {

}

let questions = [
    //Question 1
    {
        question: 'Which HTML element is used to store Javascript code?',
        answers: [
            { text: 'js', bool: false },
            { text: 'javascript', bool: false },
            { text: 'script', bool: true },
            { text: 'scripting', bool: false },
        ]
    },
    //Question 2
    {
        question: 'Which function is used to get an element by its ID',
        answers: [
            { text: '.GetElementByID', bool: true },
            { text: '.SelectElementByID', bool: false },
            { text: '.ChooseElementByID', bool: false },
            { text: '.ElementbyIDGet', bool: false },
        ]
    },
    //Question 3
    {
        question: 'Which character is used to denote an array?',
        answers: [
            { text: '{}', bool: false },
            { text: '[]', bool: true },
            { text: '()', bool: false },
            { text: '**', bool: false },
        ]
    },
    //Question 4
    {
        question: 'What is the correct-most way to create variable x?',
        answers: [
            { text: 'create var x', bool: false },
            { text: 'var x =', bool: false },
            { text: 'variable x =', bool: false },
            { text: 'let x =', bool: true },
        ]
    },
    //Question 5
    {
        question: 'What can an array store?',
        answers: [
            { text: 'variables', bool: false },
            { text: 'objects', bool: false },
            { text: 'functions', bool: false },
            { text: 'all of the above', bool: true },
        ]
    },
    //Question 6
    {
        question: 'Can Javascript be used to change an element\'s class?',
        answers: [
            { text: 'True', bool: true },
            { text: 'False', bool: false },
        ]
    },
    //Question 7
    {
        question: 'When does a let x = setInterval(y,1000) function end?',
        answers: [
            { text: 'when y < 0', bool: false },
            { text: 'when the timer < 0', bool: false },
            { text: 'when you call clearInterval(x)', bool: true },
            { text: 'when you call endTimer(x)', bool: false },
        ]
    },
    //Question 8
    {
        question: 'What is jQuery?',
        answers: [
            { text: 'an outline', bool: false },
            { text: 'a library', bool: true },
            { text: 'an app', bool: false },
            { text: 'a videogame', bool: false },
        ]
    },
    //Question 9
    {
        question: 'Where should you place your JS script?',
        answers: [
            { text: 'Beginning of the HTML file', bool: false },
            { text: 'End of the HTML file', bool: true },
            { text: 'Beginning of the CSS file', bool: false },
            { text: 'End of the CSS file', bool: false },
        ]
    },
    //Question 10
    {
        question: 'By default, what happens when you submit a form?',
        answers: [
            { text: 'The page refreshes', bool: true },
            { text: 'The page closes', bool: false },
            { text: 'The page explodes', bool: false },
            { text: 'The page goes blank', bool: false },
        ]
    }
]

//Updates questions
function nextQuestion(qBox) {
    console.log('Test');
    qBox.children[1].className = 'btn';
}


//Starts the game
startBtn.addEventListener('click', startGame);

