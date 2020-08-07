// timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

let timerInterval;
function setTime() {
    timerInterval = setInterval(function () {
        setTimeLeft(secondsLeft - 1);
    }, 1000);
}

function setTimeLeft(seconds) {
    secondsLeft = Math.max(seconds, 0);
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endScreen();
    }
}

// quiz question and answer section
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);

var questionDisplay = document.querySelector("#question-target");
var answerDisplays = [
    document.querySelector("#answer-target1"),
    document.querySelector("#answer-target2"),
    document.querySelector("#answer-target3")
];

var questions = [
    {
        title: "question 1: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: 1
    },
    {
        title: "question 2: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: 2
    },
    {
        title: "question 3: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: 0
    },
    {
        title: "question 4: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: 1
    }
];
var currentQuestion = 0;

// quiz function

function displayQuestion() {
    questionDisplay.textContent = questions[currentQuestion].title;
    for(let i=0; i < answerDisplays.length; i++) {
        answerDisplays[i].textContent = questions[currentQuestion].choices[i];
    }
}

// final screen

function endScreen() {
    let highscores = localStorage.getItem("highscores");
    if (highscores === null) {
        highscores = [];
    } else {
        highscores = JSON.parse(highscores);
    }
    highscores.push({
        name: "Dude",
        score: secondsLeft
    });
    highscores = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscores);
}

function startQuiz() {
    setTime();

    currentQuestion = 0;
    displayQuestion();
};

for(let i = 0; i < answerDisplays.length; i++) {
    answerDisplays[i].addEventListener("click", function() {
        if (questions[currentQuestion].answer !== i) {
            setTimeLeft(secondsLeft - 25);
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        }
        else {
            endScreen();
        }
    });
}