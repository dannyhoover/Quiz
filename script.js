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

// quiz start button
var startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", startQuiz);

// quiz question and answer section
var questionDisplay = document.querySelector("#question-target");
var answerDisplays = [
    document.querySelector("#answer-target1"),
    document.querySelector("#answer-target2"),
    document.querySelector("#answer-target3")
];

var questions = [
    {
        title: "Instead of var, what is a better option? ",
        choices: ["hip", "let", "dunk"],
        answer: 1
    },
    {
        title: "How would you iterate through something? ",
        choices: ["change the variable name", "ask it nicely", "for loop"],
        answer: 2
    },
    {
        title: "Where should you reference your javascript file in your html? ",
        choices: ["end of body", "header", "stylsheet"],
        answer: 0
    },
    {
        title: "When you commit something to your repository, what is a good idea every time? ",
        choices: ["clear the repository first", "a message of what's changed", "a hidden image to surprise your peers"],
        answer: 1
    }
];

// quiz functionality once start button is pressed
function startQuiz() {
    setTime();
    currentQuestion = 0;
    displayQuestion();
};

// loop that progresses through quiz and once fiinished or if time runs out goes to final screen
for (let i = 0; i < answerDisplays.length; i++) {
    answerDisplays[i].addEventListener("click", function () {
        if (questions[currentQuestion].answer !== i) {
            setTimeLeft(secondsLeft - 20);
            alert("Wrong")
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

// displaying quesitons
function displayQuestion() {
    questionDisplay.textContent = questions[currentQuestion].title;
    for(let i=0; i < answerDisplays.length; i++) {
        answerDisplays[i].textContent = questions[currentQuestion].choices[i];
    }
}

// high score button
var scoreBtn = document.querySelector("#score-list");
var displayScores = document.querySelector("#high-scores");
function displayScoresList () {
    displayScores.textContent = localStorage.getItem("highscores");
}
// scoreBtn.addEventListener("click", displayScoresList);

// clear high scores button
var clearScoreBtn = document.querySelector("#clear-scores")
clearScoreBtn.addEventListener("click", clearScoreList)
function clearScoreList () {
    localStorage.removeItem("highscores");
    displayScores.textContent = localStorage.getItem("highscores");
}

// final screen and high scores
function endScreen() {
    clearInterval(timerInterval);
    let highscores = localStorage.getItem("highscores");
    let userName = prompt("Enter your initials: ");
    if (highscores === null) {
        highscores = [];
    } else {
        highscores = JSON.parse(highscores);
    }
    highscores.push({
        name: userName,
        score: secondsLeft
    });
    highscores = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscores);
    displayScores.textContent = localStorage.getItem("highscores");
}

