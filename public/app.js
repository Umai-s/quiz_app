var quizQuestions = [
    {
        question: "HTML full form is ______.",
        choice1: "Hyper Text Mark-up Langauge",
        choice2: "Hybrid Text Mark-up Langauge",
        choice3: "Hyper Time Mark-up Langauge",
        choice4: "Hybrid Text Mark-down Langauge",
        ans: "Hyper Text Mark-up Langauge",
    },
    {
        question: "Brain of Computer is: ",
        choice1: "Mouse",
        choice2: "Keyboard",
        choice3: "CPU",
        choice4: "Power Supply",
        ans: "CPU",
    },
    {
        question: "What is recycle bin ?",
        choice1: "Things are saved in recycle bin.",
        choice2: "Deleted things goes to the recycle bin",
        choice3: "Edited things goes there.",
        choice4: "Sharable things are saved in recycle bin",
        ans: "Deleted things goes to the recycle bin",
    },
    {
        question: "Software is something:",
        choice1: "that we can touch",
        choice2: "that does not exist",
        choice3: "that we can't touch but exists",
        choice4: "none of these",
        ans: "that we can't touch but exists",
    },
    {
        question: "CD-ROM stands for:",
        choice1: "Compact Disk- Read Only Memory",
        choice2: "Compact Door- Read Only Memory",
        choice3: "Compact Disk- Random Only Memory",
        choice4: "Compact Disk- Risk Only Memory",
        ans: "Compact Disk- Read Only Memory",
    }
];


var currentQuestion = 0, totalScore = 0;
var cQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var splashSecreen = document.getElementById('start');
var quizScreen = document.getElementById('quiz-screen');
var x = 0;
var resultScreen = document.getElementById('resultScreen');
var timeLeft = document.getElementById('timeLeft');
var score = document.getElementById('score');
var question = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var btn = document.getElementsByClassName('btn');
var next = document.getElementById('next');

function nextQuestion(no) {
    Inter(300);
    cQuestion.textContent = " " + (no + 1);
    totalQuestions.textContent = " " + quizQuestions.length;
    console.log("number " + no);
    question.textContent = quizQuestions[no].question;
    opt1.textContent = quizQuestions[no].choice1;
    opt2.textContent = quizQuestions[no].choice2;
    opt3.textContent = quizQuestions[no].choice3;
    opt4.textContent = quizQuestions[no].choice4;
}
var z = setInterval(function () {
    if (x == 1) {
        clearInterval(z);
        splashSecreen.style.display = "none";
        quizScreen.style.display = "block";
        nextQuestion(currentQuestion);
    }
    x++;
}, 2000);
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        if (this.textContent == quizQuestions[currentQuestion].ans) {
            totalScore++;
            if (currentQuestion < 4) {
                clearInterval(bar);
                currentQuestion++;
                nextQuestion(currentQuestion);
                console.log(totalScore);
            } else {
                endScreen();
            }
        }
        else {
            if (currentQuestion < 4) {
                currentQuestion++;
                clearInterval(bar);
                nextQuestion(currentQuestion);
                console.log(totalScore);
            } else {
                endScreen();
            }
        }
    }
}
var bar;
function endScreen() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    score.textContent = totalScore;
}
function Inter(set) {
    var statusTime = set;
    timeLeft.style.width = statusTime + "px";
    bar = setInterval(function () {
        if (statusTime == 0) {
            clearInterval(bar);
            if (currentQuestion < 4) {
                currentQuestion++;
                nextQuestion(currentQuestion);
            }
            else {
                endScreen();
            }

        }
        timeLeft.style.width = statusTime + "px";
        statusTime = statusTime - 30;
    }, 1000);
}
next.onclick = function () {
    if (currentQuestion < 4) {
        currentQuestion++;
        nextQuestion(currentQuestion);
    }
    else {
        endScreen();
    }

}