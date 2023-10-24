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
   if (finalScore === 0) {
      scoreMessage.innerHTML = '<i class="fas fa-thumbs-down score-icon"></i><p>You got 0 points!</p>';
      console.log('no points')
   } else if (finalScore <= 4 ){
      scoreMessage.innerHTML = '<i class="fas fa-grin-beam-sweat score-icon"></i><p>You can do better!</p>';
      console.log('less than 5')
   } else if (finalScore == 5) {
      scoreMessage.innerHTML = '<i class="fas fa-smile score-icon"></i><p>Half way there!</p>';
      console.log('score is 5')
   } else if (finalScore <= 9) {
      scoreMessage.innerHTML = '<i class="fas fa-grin-stars score-icon"></i><p>You did great!</p>';
      console.log('score is 9 or under')
   }
   else if (finalScore === 10){
      scoreMessage.innerHTML = '<i class="fas fa-trophy score-icon"></i><p>TOP MARKS!</p>';
      console.log('under 10')
   }
}