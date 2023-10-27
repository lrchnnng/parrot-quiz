// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the 'score' parameter from the URL
const finalScoreStr = urlParams.get('score');
const finalScore = parseInt(finalScoreStr);

// When document has loaded the final score message is generated
$(document).ready(function(finalScore) {
    finalScoreMessage();
 });

// Accesses elements in the DOM 
const scoreMessage = document.getElementById('score-message');
const finalScoreValue = document.getElementById('f-score');

// Generates a message depending on user score
function finalScoreMessage(){
   finalScoreValue.innerText = finalScore;
   if (finalScore === 0) {
      scoreMessage.innerHTML = '<i class="fas fa-thumbs-down score-icon"></i><p>You got 0 points!</p>';
   } else if (finalScore <= 4 ){
      scoreMessage.innerHTML = '<i class="fas fa-grin-beam-sweat score-icon"></i><p>You can do better!</p>';
   } else if (finalScore == 5) {
      scoreMessage.innerHTML = '<i class="fas fa-smile score-icon"></i><p>Half way there!</p>';
   } else if (finalScore <= 9) {
      scoreMessage.innerHTML = '<i class="fas fa-grin-stars score-icon"></i><p>You did great!</p>';
   } else if (finalScore === 10){
      scoreMessage.innerHTML = '<i class="fas fa-trophy score-icon"></i><p>TOP MARKS!</p>';
   }
}

function funFactGenerator() {
   
}