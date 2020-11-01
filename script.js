// Variables
var container = document.getElementById("container");
var startQuiz = document.getElementById("start-quiz");
var startButton = document.querySelector("#start-button");
var quizContainer = document.getElementById("quiz");
var timer = document.getElementById("timer");
var quizQuestions = document.getElementById("questions");
var answers = document.getElementById("answers");
var answerChoice1 = document.getElementById("answerChoice1");
var answerChoice2 = document.getElementById("answerChoice2");
var answerChoice3 = document.getElementById("answerChoice3");
var answerChoice4 = document.getElementById("answerChoice4");
var result = document.getElementById("result");
var finalScore = document.getElementById("finalScore");
var displayNameInput = document.getElementById("displayNameInput");
var displayHighScoreInput = document.getElementById("displayHighScoreInput");
var submitScoreBtn = document.querySelector("#submitScore");
var endQuizBtns = document.querySelector("#endQuizBtns");
var playAgainBtn = document.getElementById("playAgain");
var clearHighScoreBtn = document.getElementById("clearHighScore");

var questionIndex = 0;
var score;
var correct;
var timeLeft = 60;
var timerInterval;



// Quiz Questions
var myQuestions = [
    {
        Question: "How does a for loop start?",
        Choices: {
            a: "for (var i = 0; i < 5; i++)",
            b: "for (var i = 0; i < 5)",
            c: "for (i <5 ; i++)",
            d: "for (var i = 0; i <5; i+)"

        },
        correctAnswer: "a"
    },
    {
        Question: "How can you add a comment in Javascript?",
        Choices: {
            a: "//This is a comment",
            b: "<!--This is a comment-->",
            c: "'This is a comment",
            d: "None"
        },
        correctAnswer: "b"
    },
    {
        Question: "Javascript is the same as Java.",
        Choices: {
            a: "True",
            b: "False",
            c: "None",
            d: "Both"
        },
        correctAnswer: "b"
    },
    {
        Question: "Which operator is used to assign a value?",
        Choices: {
            a: "-",
            b: "X",
            c: "=",
            d: "*"
        },
        correctAnswer: "c"
    },
    {
        Question: "How do you call a function named myFunction()?",
        Choices: {
            a: "call myFunction()",
            b: "myFunction()",
            c: "call function myFunction()",
            d: "I don't know"
        },
        correctAnswer: "b"
    }


];

// Display Questions
function renderQuestion() {
    
    if (questionIndex >= myQuestions.length) {
        return showScore();
    } else {
        console.log(myQuestions[questionIndex]);
        quizQuestions.textContent = myQuestions[questionIndex].Question
        answerChoice1.textContent = myQuestions[questionIndex].Choices.a
        answerChoice2.textContent = myQuestions[questionIndex].Choices.b
        answerChoice3.textContent = myQuestions[questionIndex].Choices.c
        answerChoice4.textContent = myQuestions[questionIndex].Choices.d
    }

    answerChoice1.addEventListener("click", function () {
        questionIndex++
        if (questionIndex <= myQuestions.length){
            renderQuestion();
        }   
         
    })

    answerChoice2.addEventListener("click", function () {
        questionIndex++
        if (questionIndex <= myQuestions.length){ 
            renderQuestion();
       
        }   
            
    })
    answerChoice3.addEventListener("click", function () {
        questionIndex++
        if (questionIndex <= myQuestions.length){
            renderQuestion();
        } 
            
    })
    answerChoice4.addEventListener("click", function () {
        questionIndex++
        if (questionIndex <= myQuestions.length){
            renderQuestion();
        }  
         
    })
}


// Timer Starts
function beginQuiz() {
    startQuiz.style.display = "none";
    quizContainer.style.display = "block";
    renderQuestion();
     timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if (timeLeft === 0 || questionIndex >= myQuestions.length) {
            
            
           showScore()
        }
    }, 1000);

}

// Display Final Score
function showScore() {
   
    if (questionIndex > myQuestions.length +2) {
        clearInterval(timerInterval);
        quizContainer.style.display = "none";
        result.style.display = "block";
        finalScore.innerHTML = ("Your score is " + score);
    }
}


function highScore () {
    result.style.display = "none";
    endQuizBtns.style.display = "block";
    event.stopPropagation();
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
   
}

// Clear data when clearScore button is pressed
function clearScore() {
    window.localStorage.clear();
}


// Restart quiz and timer when playAgain button is pressed
function tryQuizagain() {
    location.reload();

}


// Event Listeners

startButton.addEventListener("click", beginQuiz);
clearHighScoreBtn.addEventListener("click", clearScore);
playAgainBtn.addEventListener("click", tryQuizagain);
submitScoreBtn.addEventListener("click", highScore);
playAgainBtn.addEventListener("click", tryQuizagain);
clearHighScoreBtn.addEventListener("click", clearScore);

