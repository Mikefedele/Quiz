// global variables

var landingpage = document.getElementById("landingPage");
var index = 0;
var questionsEl = document.querySelector(".questions");
var button = document.getElementById("startButton");
var questText = document.getElementById("questText");
var currentQuestion = 0;
var timerEl = document.getElementById("timer");
var resultsEl = document.getElementById("");
// On click start the game change initial display to none bring 1st question up
var highScoresEL = document.getElementById("highScores");

highScoresEL.setAttribute("style", "display:none");

var time = "";
// On click start the game change. Change the display of the landingpage & start timer.
button.addEventListener("click", function () {
  landingpage.setAttribute("style", "display: none");
  buildquestion();

//start timer, keep in this function so it happens on click
  var time = 50;
  var timerStart = setInterval(function() {
    if (time > 0) {
      time--;
      // show timer on screen
      timerEl.innerHTML = 'Hurry '+time+ ' seconds' ;
      console.log(time);
    console.log(index)
    if (time <= 0 ||(index === questions.length - 1) ) {
      clearInterval(timerStart);
      

      
    }}
  }, 1000);
  
}
);


// set in global
var optionsList = document.getElementById("optionsList");

// index pre set to 0 
function buildquestion () {
  questText.textContent = questions[index].conference;
  questions[index].options.forEach(option => {
    console.log(option)
    var button = document.createElement("button")
    button.textContent =option;
    button.setAttribute ("value", option)
    button.onclick = evaluateAnswer;
    optionsList.appendChild(button);
//set attirbute

  // if  {
  //   clearInterval(timer);
  // }


  });
  var right = "";
}
function evaluateAnswer(event) {
if (event.target.value !== questions[index].answer) {
  console.log("wrong")
  // & - 5 secs on timer
}
else {
  console.log("right");
  
}
optionsList.innerHTML = "";
index++;
 if (index === questions.length) {
   console.log("endgame");
   questions.innerHTML = "Game Over"

} else {
  buildquestion();
}

// if (timer === 0 || questions[index] === 5 ) {
//   document.forms.getElementById("highScores");
//   {
//   clearInterval(time);

//   }
  

}






var questions = [
  {
  
    conference: "AFC North",
    options: ["Bengals", "Browns", "Ravens", "Broncos"],
    answer: "Broncos",
  },

  {
    
    conference: "NFC South",
    options: ["Buccaneers", "Panthers", "Dolphins", "Falcons"],
    answer: "dolphins",
  },

  {
    conference: "NFC East",
    options: ["Eagles", "Giants", "Cowboys", "Redskins"],
    answer: "Redskins",
  },

  {
    
    conference: "AFC East",
    options: ["Patriots", "Jaguars", "Jets", "Bills"],
    answer: "Jaguars",
  },

  {
  
    conference: "NFC West",
    options: ["Chargers", "Rams", "49ers", "Cardinals"],
    answer: "Chargers",
  },
];


console.log(questions[0].options[2]);
console.log(questions)

//  how do I get the options array to li
// questText.innerHTML = "test";

// var timerEl = document.getElementById("timer");

// var secondsLeft = 60;

// function setTime() {
// //   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);

//     }

//   }, 6000);
// }
// setTime()

// need function to start timer on event listen
//bring up 1st question listen for click on answer[x]
//if correct go on to next question
//if wrong -5 secs from timer
//
//

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
