// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the 'score' parameter from the URL
const finalScoreStr = urlParams.get('score');
const finalScore = parseInt(finalScoreStr);

// When document has loaded the final score message and a random fun fact is generated
$(document).ready(function(finalScore) {
    finalScoreMessage();
    funFactGenerator();
 });

// Accesses elements in the DOM 
const scoreMessage = document.getElementById('score-message');
const finalScoreValue = document.getElementById('f-score');
const funFact = document.getElementById('fun-fact');

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

// An array of fun facts
const funFactArray = ["According to the Guiness World Record, the oldest African Grey lived to 72 years old!",
   "The Scarlet Macaw is the national bird of Honduras!",
   "Male Eclectus parrots are green, females are Red!",
   "Cocktiels are better at whistling than they are at talking!",
   "Yellow-Naped Amazon parrots can live for over 50 years when cared for by humans!", 
   "All Pionus parrots have red feathers at the vent (underneath their tails)!",
   "A Hyacinth Macaw's beak is strong enough to crack open coconuts!",
   "Green Cheek Conures love hanging upside down, theyre the clowns of the conure family!",
   "Caiques have a 'dominant foot', they can be right-footed or left-footed.",
   "Indian Ringnecks can learn up to 200 words, they love learning new things!",
   "Quakers are the only parrots that build communal nests, which can house up to 50 birds!",
   "Lovebirds mate for life (living up to their name)!",
   "Lorikeets have special brush-like tongues used to eat the nectar from flowers!",
   "The word 'Galah' is a slang term in the native Australian language. It means fool or a loud-mouthed fool!",
   "Senegal parrots can mimic sounds of their surrounding; some of them may include the creak of a door or ring of the telephone!",
   "When in the wild, Burrowing parrots live in colonies on the cliffs, many colonies are seen in Rio Negro, Patagonia!",
   "Meyer's parrots are quite gentle, quiet, funny, playful, highly intelligent, and social birds!",
   "Goffin's cockatoos are loving and affectionate, they bond strongly with their owners and require daily interaction to maintain their mental and emotional health!",
   "Sun Conures start out as olive green that slowly changes to yellowish-orange at around 6months of age. By the time they turn 1 they reach their full colour plumage!",
   "Kākāriki, is a Māori word, meaning 'little parrot', they weigh around 113 grams but are robust and hardy birds with strong beaks!"
]

// Display a random fun fact
function funFactGenerator() {
   const randomIndex = Math.floor(Math.random() * funFactArray.length);
   funFact.innerText = funFactArray[randomIndex];
}

// Confetti code snippet from https://confetti.js.org
const defaults = {
   spread: 20,
   ticks: 50,
   gravity: 0,
   decay: 0.94,
   startVelocity: 40,
   shapes: ["star"],
   colors: ["DC3545", "dda703", "0D6EFD"],
 };
 
 function shoot() {
   confetti({
     ...defaults,
     particleCount: 40,
     scalar: 1.2,
     shapes: ["star"],
   });
 
   confetti({
     ...defaults,
     particleCount: 10,
     scalar: 0.75,
     shapes: ["circle"],
   });
 }
 
 setTimeout(shoot, 0);
 setTimeout(shoot, 100);
 setTimeout(shoot, 200);
 
