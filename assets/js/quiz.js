// When the document loads a question is generated immediately
$(document).ready(function() {
   showQuestion();
   console.log("ready!");
});

// An array of objects containing quiz images and answers
const questions = [
   {
      question: "assets/images/main-img/african.jpg",
      answers: [
         {text: 'African Grey', correct: true},
         {text: 'Cockatiel', correct: false},
         {text: 'Burrowing', correct: false},
         {text: 'Sun Conure', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/scarlet.jpg",
      answers: [
         {text: 'Meyers', correct: false},
         {text: 'Scarlet Macaw', correct: true},
         {text: 'Hyacinth Macaw', correct: false},
         {text: 'Yellow-Naped Amazon', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/eclectus.jpg",
      answers: [
         {text: 'Senegal', correct: false},
         {text: 'Indian Ringneck', correct: false},
         {text: 'Eclectus', correct: true},
         {text: 'Kakariki', correct: false},

      ],
   },
   {
      question: "assets/images/main-img/cockatiel.jpg",
      answers: [
         {text: 'Senegal', correct: false},
         {text: 'Cockatiel', correct: true},
         {text: 'Hyacinth Macaw', correct: false},
         {text: 'Sun Conure', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/amazon.jpg",
      answers: [
         {text: 'Sun Conure', correct: false},
         {text: 'Kakariki', correct: false},
         {text: 'Green Cheek Conure', correct: false},
         {text: 'Yellow-Naped Amazon', correct: true},
      ],
   },
   {
      question: "assets/images/main-img/pionus.jpg",
      answers: [
         {text: 'Caique', correct: false},
         {text: 'African Grey', correct: false},
         {text: 'Pionus', correct: true},
         {text: 'Cockatiel', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/hyacinth.jpg",
      answers: [
         {text: 'Yellow-Naped Amazon', correct: false},
         {text: 'Quaker', correct: false},
         {text: 'Kakariki', correct: false},
         {text: 'Hyacinth Macaw', correct: true},
      ],
   },
   {
      question: "assets/images/main-img/gcc.jpg",
      answers: [
         {text: 'Galah Cockatoo', correct: false},
         {text: 'Green Cheek Conure', correct: true},
         {text: 'Lovebird', correct: false},
         {text: 'Goffins Cockatoo', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/caique.jpg",
      answers: [
         {text: 'Caique', correct: true},
         {text: 'Cockatiel', correct: false},
         {text: 'Eclectus', correct: false},
         {text: 'Lorikeet', correct: false},
      ],
   },
   {
      question: "assets/images/main-img/irn.jpg",
      answers: [
         {text: 'African Grey', correct: false},
         {text: 'Lovebird', correct: false},
         {text: 'Lorikeet', correct: false},
         {text: 'Indian Ringneck', correct: true},
      ],
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

// Generates a new question
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

       // Navigate to the score page and stores user score within the url
       window.location.href = `score.html?score=${score}`;
   }
}

// When user selects an answer a new question is generated
function userAnswer(event) {
   checkAnswer(event);
   currentQuestionIndex++;
   showQuestion(); 
}

// Checks answer and triggers correctAnswer()
function checkAnswer(event) {
   const selectedAnswer = currentQuestion.answers.find((answer) => answer.text === event.target.textContent);
   
   if (selectedAnswer && selectedAnswer.correct) {
      console.log('Correct');
      correctAnswer();
   } else {
      console.log('Wrong')
   }
}

// Logs user score
let score = 0;
console.log(score)

// Ff correct = score + 1
function correctAnswer() {
   score = score + 1;
   console.log(score);
   $('#q-score').text(score);
}