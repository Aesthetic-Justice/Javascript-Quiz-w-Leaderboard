let leaderboard = []; //Global array for storing scores outside game loop
let startBtn = document.getElementById('startBtn'); //Start Button
let questionBox = document.getElementById('questionBox'); //Question boxes
let questionText = document.getElementById('question'); //Question Text
let timerEl = document.getElementById('timer');
let timeLeft = 00;//Timer
let timeInterval;//Timer function
let curQuestion = 00;//Tracks current question
let unAdQs = [];//Questions remaining

//Core game loop
function startGame() {
    if (timeLeft === 00) {
        timeLeft = 75;
        score=0;
        timerEl.textContent = 'Time: ' + timeLeft;
        timeInterval = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft--;
                console.log(timeLeft);
                timerEl.textContent = 'Time: ' + timeLeft;
            }

            else {
                timeLeft = 00;
                timerEl.textContent = 'Time: ' + timeLeft;
                endGame();
                clearInterval(timeInterval);//kill the timer loop
            }
        }, 1000);

        document.getElementById("title").textContent='';
        unAdQs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//Used keep track of questions
        startBtn.style.display = 'none';//Hides the start button
        questionBox.children[4].style.opacity=1;//Reveals the subtext
        nextQuestion();//Prepares the first question
    }
}

function endGame() {
    clearInterval(timeInterval);//Stop the timer
    const finalTime = timeLeft;//Record the final timer


    for (let i = 0; i < questionBox.children.length; i++) {
        questionBox.children[i].style.display='none';
    }

    document.getElementById("title").textContent='Quiz Complete!'
    questionText.textContent='Your final score is '+timeLeft;
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

//Clears the question box
function clearQuestion() {
    for (let i = 0; i < questionBox.children.length-1; i++) {
        questionBox.children[i].style.display='none';
    }
}

//Updates questions
function nextQuestion() {
    clearQuestion();
    let x = Math.floor(Math.random() * unAdQs.length);//Picks a rand Q from available options
    curQuestion = unAdQs[x];//Sets current question globally
    unAdQs = unAdQs.filter(item => item != curQuestion);//Removes picked Q from available options
   
   
    questionText.textContent = questions[curQuestion].question;//Updates question text
    for (let i = 0; i < questions[curQuestion].answers.length; i++) {//Updates answer boxes
        questionBox.children[i].textContent = questions[curQuestion].answers[i].text;
        questionBox.children[i].style.display='inline-block';
    }
}

function answerQuestion(event){
    let answerNum = event.target.getAttribute('data-num');
    if(questions[curQuestion].answers[answerNum].bool==true){
        questionBox.children[4].textContent = 'Correct!';
    }
    else{
        questionBox.children[4].textContent = 'Incorrect! -10 seconds';
        timeLeft=timeLeft-10;
        timerEl.textContent = 'Time: ' + timeLeft;
    }
    if(unAdQs.length!=0){
        nextQuestion();
    }
    else{
        endGame();
    }
}

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn')) return;

    else if (event.target == startBtn) {
        startGame();
    }

    else{
        answerQuestion(event);
    }

}, false);

function startUp(){
    clearQuestion();
}

startUp();