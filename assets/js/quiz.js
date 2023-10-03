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
