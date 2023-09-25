$(document).ready(function() {
    getQuestion();
    console.log("ready!");
});

const options = document.querySelector('.q-options');

// An array of objects containing quiz images and answers
const quizQuestions = [
    {
        questionUrl: 'assets/images/main-img/african.jpg',
        a: 'African Grey',
        b: 'Cockatiel',
        c: 'Burrowing',
        fact: '',
    },
    {
       questionUrl: 'assets/images/main-img/goffin.jpg',
       a: 'Goffin Cockatoo',
       b: 'Quaker',
       c: 'Pionus',
       fact: '',
    },
    {
        questionUrl: 'assets/images/main-img/scarlet.jpg',
        a: 'Scarlett Macaw',
        b: "Meyer's",
        c: 'Yellow-Naped Amazon',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/cockatiel.jpg',
        a: 'Cockatiel',
        b: 'Hyacinth Macaw',
        c: 'Sun Conure',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/eclectus.jpg',
        a: 'Eclectus',
        b: 'Senegal',
        c: 'Indian Ringneck',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/amazon.jpg',
        a: 'Yellow-Naped Amazon',
        b: 'Kakariki',
        c: 'Green Cheek Conure',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/pionus.jpg',
        a: 'Pionus',
        b: 'Caique',
        c: 'African Grey',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/gcc.jpg',
        a: 'Green Cheek Conure',
        b: 'Goffin Cockatoo',
        c: 'Galah Cockatoo',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/caique.jpg',
        a: 'Caique',
        b: 'Lorikeet',
        c: 'Cockatiel',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/irn.jpg',
        a: 'Indian Ringneck',
        b: 'Lovebird',
        c: 'African Grey',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/quaker.jpg',
        a: 'Quaker',
        b: 'Cockatiel',
        c: 'Eclectus',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/lovebird.jpg',
        a: 'Lovebird',
        b: 'Scarlet Macaw',
        c: 'Goffin Cockatoo',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/lori.jpg',
        a: 'Lorikeet',
        b: 'Indian Ringneck',
        c: 'Green Cheek Conure',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/hyacinth.jpg',
        a: 'Hyacinth Macaw',
        b: 'Kakariki',
        c: 'Yellow-Naped Amazon',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/galah.jpg',
        a: 'Galah Cockatoo',
        b: "Meyer's",
        c: 'Quaker',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/senegal.jpg',
        a: 'Senegal',
        b: 'Green Cheek Conure',
        c: 'Eclectus',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/burrowing.jpg',
        a: 'Burrowing',
        b: 'Senegal',
        c: 'Lorikeet',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/meyers.jpg',
        a: "Meyer's",
        b: 'Burrowing',
        c: 'Goffin Cockatoo',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/kakariki.jpg',
        a: 'Kakariki',
        b: 'Pionus',
        c: 'Lovebird',
        fact: '',
     },
     {
        questionUrl: 'assets/images/main-img/sun.jpg',
        a: 'Sun Conure',
        b: 'Caique',
        c: 'Cockatiel',
        fact: '',
     },
]

// Targets the image element in the DOM
const question = document.getElementById('question');

// Starts the current question index at 0
var currentQuestionIndex = 0;

// (question generated on document load and when 'next question' is pressed
function getQuestion() {
    
    // Retreives the object (question) from the current index
    var currentQ = quizQuestions[currentQuestionIndex];

    // Changes the url of question image element
    question.src = currentQ.questionUrl;

}

// Increment the index for the next question
currentQuestionIndex++;

// Checks if all questions have been displayed, if true, reset quiz
if (currentQuestionIndex >= quizQuestions.length) {
    currentQuestionIndex = 0;
}

// checkAnswer (checks if chosen answer === correct answer)

// incorrectAnswer (-1 point)

// correctAnswer (+1 point)

// Array of questions (img url and text answers)