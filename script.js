// timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

// quiz question and answer section
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);

var questionDisplay = document.querySelector("#question-target");
var answer1Display = document.querySelector("#answer-target1");
var answer2Display = document.querySelector("#answer-target2");
var answer3Display = document.querySelector("#answer-target3");

var questions = [
    {
        title: "quesiton 1: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: "choice2"
    },
    {
        title: "question 2: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: "choice3"
    },
    {
        title: "question 3: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: "choice1"
    },
    {
        title: "question 4: ",
        choices: ["choice1", "choice2", "choice3"],
        answer: "choice2"
    }
];

// high score function
function score() {

}

function startQuiz() {
    setTime();
    for (var i=0; i < questions.length; i++) {
        questionDisplay.textContent = questions[i].title;
        answer1Display.textContent = questions[i].choices[0];
        answer2Display.textContent = questions[i].choices[1];
        answer3Display.textContent = questions[i].choices[2];
    }    

    answer1Display.addEventListener("click",)
    answer2Display.addEventListener("click",)
    answer3Display.addEventListener("click",)
    
};