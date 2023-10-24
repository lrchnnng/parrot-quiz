// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the 'score' parameter from the URL
const finalScoreStr = urlParams.get('score');
const finalScore = parseInt(finalScoreStr);

// Use the score as needed
console.log(`Final Score: ${finalScore}`);

$(document).ready(function(finalScore) {
    finalScoreMessage();
    console.log("ready!");
 });

const scoreMessage = document.getElementById('score-message');
const finalScoreValue = document.getElementById('f-score');

function finalScoreMessage(){
   finalScoreValue.innerText = finalScore;
   if (finalScore < 1) {
      scoreMessage.innerText = "How did you get less than 1?!"
      console.log('less than 1')
   } else if (finalScore <= 4 ){
      scoreMessage.innerText = "Sorry! Better luck next time!"
      console.log('less than 5')
   } else if (finalScore === 5) {
      scoreMessage.innerText = "Half way there!"
      console.log('score is 5')
   } else if (finalScore <= 9) {
      scoreMessage.innerHTML = "You did great!"
      console.log('score is 9 or under')
   }
   else if (finalScore === 10){
      scoreMessage.innerText = "TOP MARKS!"
      console.log('under 10')
   }
}