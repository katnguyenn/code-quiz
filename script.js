// Variables
var container = document.getElementById("container");
var startQuiz = document.getElementById("start-quiz");
var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz");
var timer = document.getElementById("timer");
var quizQuestions = document.getElementById("questions");
var result = document.getElementById("result");
var endQuiz = document.getElementById("endQuiz");
var finalScore = document.getElementById("finalScore");
var submitScore = document.getElementById("submitScore");
var highScore = document.getElementById("highScore");
var endQuizBtns = document.getElementById("endQuizBtns");
var playAgain = document.getElementById("playAgain");
var clearHighScore = document.getElementById("clearHighScore");

var questionNumber = -1;
var score = 0; 
var correct;
var timeLeft = 60;

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
            c: "'This is a comment"
        },
        correctAnswer: "b"
    },
    {
        Question: "Javascript is the same as Java.",
        Choices: {
            a: "True",
            b: "False"
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
            c: "call function myFunction()"
        },
        correctAnswer: "b"
    }
];


