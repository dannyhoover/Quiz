var startBtn = document.querySelector("#start-button");

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
    }
];

function startQuiz() {
    questionDisplay.textContent = questions[0].title;
    console.log("HM 4 Starting Point")
}

startBtn.addEventListener("click", startQuiz);