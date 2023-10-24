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
      fact: "All Pionus parrots have red feathers at the vent (underneath their tails)!",
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
]

 // Targets buttons and question element
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const answerBtn = document.querySelectorAll('.answer-btn');

// Targets the image element in the DOM
const question = document.getElementById('question');

// Starts the current question index at 0
var currentQuestionIndex = 0; 
var currentQuestion = questions[currentQuestionIndex];

function showQuestion() {
   if (currentQuestionIndex < questions.length) {
       currentQuestion = questions[currentQuestionIndex];
       $('#question').attr('src', currentQuestion.question);
       $('#option1').text(currentQuestion.answers[0].text);
       $('#option2').text(currentQuestion.answers[1].text);
       $('#option3').text(currentQuestion.answers[2].text);
       $('#option4').text(currentQuestion.answers[3].text);
   } else {
       console.log('end of quiz');
       // Navigate to the score page
       window.location.href = `score.html?score=${score}`;
   }
}

function userAnswer(event) {
   checkAnswer(event);
   currentQuestionIndex++;
   showQuestion(); 
}

// Checks answer and triggers correctAnswer() or wrongAnswer()
function checkAnswer(event) {
   const selectedAnswer = currentQuestion.answers.find(answer => answer.text === event.target.textContent);
   
   if (selectedAnswer && selectedAnswer.correct) {
      console.log('Correct');
      correctAnswer();
   } else {
      console.log('Wrong');
      wrongAnswer();
   }
}

let score = 0;
console.log(score)

// if correct = score + 1, Correct message, fun fact
function correctAnswer() {
   score = score + 1;
   console.log(score);
   $('#q-score').text(score);
}

//if incorrect = score - 1, wrong message, removes fact
function wrongAnswer() {
   score = score - 1;
   console.log(score);
   $('#q-score').text(score);
}