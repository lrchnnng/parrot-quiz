$(document).ready(function() {
   showQuestion();
   console.log("ready!");
});

// An array of objects containing quiz images and answers
const questions = [
   {
      question: 'assets/images/main-img/african.jpg',
      answers: [
         {text: "African Grey", correct: true},
         {text: "Cockatiel", correct: false},
         {text: "Burrowing", correct: false},
         {text: "Sun Conure", correct: false},
      ],
      fact: "According to the Guiness World Record, the oldest African Grey lived to 72 years old!",
   },
   {
      question: 'assets/images/main-img/scarlet.jpg',
      answers: [
         {text: "Meyer's", correct: false},
         {text: "Scarlet Macaw", correct: true},
         {text: "Hyacinth Macaw", correct: false},
         {text: "Yellow-Naped Amazon", correct: false},
      ],
      fact: "The Scarlet Macaw is the national bird of Honduras!",
   },
   {
      question: 'assets/images/main-img/eclectus.jpg',
      answers: [
         {text: "Senegal", correct: false},
         {text: "Indian Ringneck", correct: false},
         {text: "Eclectus", correct: true},
         {text: "Kakariki", correct: false},

      ],
      fact: "Male Eclectus parrots are green, females are Red!",
   },
   {
      question: 'assets/images/main-img/cockatiel.jpg',
      answers: [
         {text: "Senegal", correct: false},
         {text: "Cockatiel", correct: true},
         {text: "Hyacinth Macaw", correct: false},
         {text: "Sun Conure", correct: false},
      ],
      fact: "Cocktiels are better at whistling than they are at talking!",
   },
   {
      question: 'assets/images/main-img/amazon.jpg',
      answers: [
         {text: "Sun Conure", correct: false},
         {text: "Kakariki", correct: false},
         {text: "Green Cheek Conure", correct: false},
         {text: "Yellow-Naped Amazon", correct: true},
      ],
      fact: "Yellow-Naped Amazon parrots can live for over 50 years when cared for by humans!",
   },
   {
      question: 'assets/images/main-img/pionus.jpg',
      answers: [
         {text: "Caique", correct: false},
         {text: "African Grey", correct: false},
         {text: "Pionus", correct: true},
         {text: "Cockatiel", correct: false},
      ],
      fact: "All Pionus parrots have red feathers at the vent (underneath their tailes)!",
   },
   {
      question: 'assets/images/main-img/hyacinth.jpg',
      answers: [
         {text: "Yellow-Naped Amazon", correct: false},
         {text: "Quaker", correct: false},
         {text: "Kakariki", correct: false},
         {text: "Hyacinth Macaw", correct: true},
      ],
      fact: "A Hyacinth Macaw's beak is strong enough to crack open coconuts!",
   },
   {
      question: 'assets/images/main-img/gcc.jpg',
      answers: [
         {text: "Galah Cockatoo", correct: false},
         {text: "Green Cheek Conure", correct: true},
         {text: "Lovebird", correct: false},
         {text: "Goffin's Cockatoo", correct: false},
      ],
      fact: "Green Cheek Conures love hanging upside down, theyre the clowns of the conure family!",
   },
   {
      question: 'assets/images/main-img/caique.jpg',
      answers: [
         {text: "Caique", correct: true},
         {text: "Cockatiel", correct: false},
         {text: "Eclectus", correct: false},
         {text: "Lorikeet", correct: false},
      ],
      fact: "Caiques have a 'dominant foot', they can be right-footed or left-footed.",
   },
   {
      question: 'assets/images/main-img/irn.jpg',
      answers: [
         {text: "African Grey", correct: false},
         {text: "Lovebird", correct: false},
         {text: "Lorikeet", correct: false},
         {text: "Indian Ringneck", correct: true},
      ],
      fact: "Indian Ringnecks can learn up to 200 words, they love learning new things!",
   },
   {
      question: 'assets/images/main-img/quaker.jpg',
      answers: [
         {text: "Eclectus", correct: false},
         {text: "Green Cheek Conure", correct: false},
         {text: "Quaker", correct: true},
         {text: "Cockatiel", correct: false},
      ],
      fact: "Quakers are the only parrots that build communal nests, which can house up to 50 birds.",
   },
   {
      question: 'assets/images/main-img/lovebird.jpg',
      answers: [
         {text: "Lovebird", correct: true},
         {text: "Goffin's Cockatoo", correct: false},
         {text: "Scarlet Macaw", correct: false},
         {text: "Meyer's", correct: false},
      ],
      fact: "Lovebirds mate for life (living up to their name)!",
   },
   {
      question: 'assets/images/main-img/lori.jpg',
      answers: [
         {text: "Indian Ringneck", correct: false},
         {text: "Senegal", correct: false},
         {text: "Lorikeet", correct: true},
         {text: "Quaker", correct: false},
      ],
      fact: "Lorikeets have special brush-like tongues used to eat the nectar from flowers!",
   },
   {
      question: 'assets/images/main-img/galah.jpg',
      answers: [
         {text: "Quaker", correct: false},
         {text: "Eclectus", correct: false},
         {text: "Senegal", correct: false},
         {text: "Galah Cockatoo", correct: true},
      ],
      fact: "The word 'Galah' is a slang term in the native Australian language. It means fool or a loud-mouthed fool!",
   },
   {
      question: 'assets/images/main-img/senegal.jpg',
      answers: [
         {text: "Burrowing", correct: false},
         {text: "Senegal", correct: true},
         {text: "Green Cheek Conure", correct: false},
         {text: "Eclectus", correct: false},
      ],
      fact: "Senegal parrots can mimic sounds of their surrounding; some of them may include the creak of a door or ring of the telephone!",
   },
   {
      question: 'assets/images/main-img/burrowing.jpg',
      answers: [
         {text: "Burrowing", correct: true},
         {text: "Yellow-Naped Amazon", correct: false},
         {text: "Lorikeet", correct: false},
         {text: "Senegal", correct: false},
      ],
      fact: "When in the wild, Burrowing parrots live in colonies on the cliffs, many colonies are seen in Rio Negro, Patagonia!",
   },
   {
      question: 'assets/images/main-img/meyers.jpg',
      answers: [
         {text: "Quaker", correct: false},
         {text: "Burrowing", correct: false},
         {text: "Senegal", correct: false},
         {text: "Meyer's", correct: true},
      ],
      fact: "Meyer's parrots are quite gentle, quiet, funny, playful, highly intelligent, and social birds!",
   },
   {
      question: 'assets/images/main-img/goffin.jpg',
      answers: [
         {text: "Eclectus", correct: false},
         {text: "Goffin's Cockatoo", correct: true},
         {text: "Caique", correct: false},
         {text: "Gala Cockatoo", correct: false},
      ],
      fact: "Goffin's cockatoos are loving and affectionate, they bond strongly with their owners and require daily interaction to maintain their mental and emotional health",
   },
   {
      question: 'assets/images/main-img/sun.jpg',
      answers: [
         {text: "Kakariki", correct: false},
         {text: "Lovebird", correct: false},
         {text: "Pionus", correct: false},
         {text: "Sun Conure", correct: true},
      ],
      fact: "Sun Conures start out as olive green that slowly changes to yellowish-orange at around 6months of age. By the time they turn 1 they reach their full colour plumage!",
   },
   {
      question: 'assets/images/main-img/kakariki.jpg',
      answers: [
         {text: "Kakariki", correct: true},
         {text: "Scarlet Macaw", correct: false},
         {text: "Indian Ringneck", correct: false},
         {text: "Lorikeet", correct: false},
      ],
      fact: 'Kākāriki, is a Māori word, meaning “little parrot", they weigh around 113 grams but are robust and hardy birds with strong beaks!',
   },
]

// targets buttons and question element
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');

// Targets the image element in the DOM
const question = document.getElementById('question');
var currentQuestionIndex = 0; // Starts the current question index at 0
var currentQuestion = questions[currentQuestionIndex];

function showQuestion() {
   currentQuestionIndex + 1;
   
   // Adds image question
   questionElement.src = currentQuestion.question;
   
   document.getElementById('option1').innerHTML = currentQuestion.answers[0].text;
   document.getElementById('option2').innerHTML = currentQuestion.answers[1].text;
   document.getElementById('option3').innerHTML = currentQuestion.answers[2].text;
   document.getElementById('option4').innerHTML = currentQuestion.answers[3].text;

   document.getElementById('fun-fact').innerText = "";
   document.getElementById('answer-message').innerText = ""
}

var nextButton = document.createElement('button');
const nextButtonDiv = document.getElementById('next-btn');

//Logs user's answer choice and creates next button
answerButton.addEventListener('click', (event) => {
   console.log('Button clicked');
   checkAnswer();
  
   nextButton.innerText = 'Next';
   nextButton.classList.add('btn', 'btn-outline-light');
   
   nextButtonDiv.appendChild(nextButton);
});

// Checks answer and triggers correctAnswer() or wrongAnswer()
function checkAnswer(){
   const selectedAnswer = currentQuestion.answers.find(answer => answer.text === event.target.textContent);
   
   if (selectedAnswer && selectedAnswer.correct) {
      console.log('Correct');
      correctAnswer();
   } else {
      console.log('Wrong');
      wrongAnswer();
   }
}

var score = 0;
console.log(score)

// if correct = score + 1, Correct message, fun fact
function correctAnswer(){
   score++;
   console.log(score);
   document.getElementById('score').innerText = score;
   document.getElementById('fun-fact').innerText = currentQuestion.fact;
   document.getElementById('answer-message').innerText = "Correct!"
   // updates button class id to 'btn-outline-light' 
   // adds fun fact section above next button
}

//if incorrect = score - 1, wrong message, removes fact
function wrongAnswer(){
   score--;
   console.log(score);
   document.getElementById('score').innerText = score;
   document.getElementById('answer-message').innerText = "Sorry, that's wrong!"
   document.getElementById('fun-fact').innerText = "";
   // updates button class id to 'btn-outline-dark' 
}

nextButton.addEventListener('click', () => {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
      currentQuestion = questions[currentQuestionIndex];
      showQuestion();
   } else {
      // Handle end of the quiz (e.g., display final score)
      console.log('End of the quiz');
      nextButton.innerText = 'End of quiz';
   }
});
