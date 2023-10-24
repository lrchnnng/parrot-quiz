// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the 'score' parameter from the URL
const finalScore = urlParams.get('score');

// Use the score as needed
console.log(`Final Score: ${finalScore}`);

/* $(document).ready(function() {
    finalScoreMessage();
    console.log("ready!");
 });

const scoreMessage = document.getElementById('score-message');
const finalScore = document.getElementById('f-score');

function finalScoreMessage(){
   if (score < 5){
      console.log('under 5')
   } else if (score < 10){
      console.log('under 10')
   } else if (score < 20){
      console.log('under 20')
   } else if (score === 20){
      console.log('full marks')
   }
} */