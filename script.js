// Variables
var container = document.getElementsByClassName("container");
var startQuiz = document.getElementById("start-quiz");
var startButton = document.getElementById("start-button");
var quizContainer = document.getElementById("quiz");
var timer = document.getElementById("timer");
var quizQuestions = document.getElementById("questions");
var result = document.getElementById("result");
var endQuiz = document.getElementById("endQuiz");
var finalScore = document.getElementById("finalScore");
var submitScore = dcoument.getElementById("submitScore");
var highScore = document.getElementsById("highScore");
var endQuizBtns = document.getElementById("endQuizBtns");
var playAgain = document.getElementById("playAgain");
var clearHighScore = documnt.getElementById("clearHighScore");

var questionNumber = -1;
var score = 0; 
var correct = "";
var timeLeft = 60;

