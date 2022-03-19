var start
document.getElementById("start");
start.addeventlistener("click", ) {
  // On click start the game change initial display to none bring 1st question up
  //  start timer
//
document.getElementById("landingpage");
#landingpage.setAttribute("style", "display: none");
}
var ques1
var ques2
var ques3
var ques4
var ques5

//questions   
var questions = [
  

  

  {
    name: "ques1",
    division: "AFC North"
    options: ["Bengals", "Browns", "Ravens", "Broncos"]
  }
  
  {
    name: "NFC South",
    options: ["Buccaneers","Panthers","Jaguars","Falcons"]
  }
  
  
  
  {
    name: "NFC East",
    options: ["Eagles", "Giants", "Cowboys",]
    

  }

] 



var timerEl = document.getElementById("timer");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      sendMessage();
    }

  }, 6000);
}



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
