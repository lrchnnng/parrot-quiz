function checkAnswer(event) {
   // Get the selected answer from the event target's textContent
   const selectedAnswer = event.target.textContent;

   // Get the current question
   const currentQ = quizQuestions[currentQuestionIndex - 1];

   // Compare the selected answer with the correct answer
   if (selectedAnswer === currentQ.correct) {
       console.log('Correct');
   } else {
       console.log('Wrong');
   }
}

const answerButtons = document.querySelectorAll('.answer-btn');


function correctAnswer(currentQ) {
   // answerReveal.innerText = `Correct! Did you know: ${currentQ.fact}`;
   score++; // Increase the score by 1
   updateScore(); // Update the displayed score
}

 {
    questionUrl: 'assets/images/main-img/pionus.jpg',
    a: 'Pionus',
    b: 'Caique',
    c: 'African Grey',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/gcc.jpg',
    a: 'Green Cheek Conure',
    b: 'Goffin Cockatoo',
    c: 'Galah Cockatoo',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/caique.jpg',
    a: 'Caique',
    b: 'Lorikeet',
    c: 'Cockatiel',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/irn.jpg',
    a: 'Indian Ringneck',
    b: 'Lovebird',
    c: 'African Grey',
    correct: this.a,
    fact: '',
 },
{
    questionUrl: 'assets/images/main-img/quaker.jpg',
    a: 'Quaker',
    b: 'Cockatiel',
    c: 'Eclectus',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/lovebird.jpg',
    a: 'Lovebird',
    b: 'Scarlet Macaw',
    c: 'Goffin Cockatoo',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/lori.jpg',
    a: 'Lorikeet',
    b: 'Indian Ringneck',
    c: 'Green Cheek Conure',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/hyacinth.jpg',
    a: 'Hyacinth Macaw',
    b: 'Kakariki',
    c: 'Yellow-Naped Amazon',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/galah.jpg',
    a: 'Galah Cockatoo',
    b: "Meyer's",
    c: 'Quaker',
    correct: this.a,
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
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/meyers.jpg',
    a: "Meyer's",
    b: 'Burrowing',
    c: 'Goffin Cockatoo',
    correct: this.a,
    fact: '',
 },
 {
    questionUrl: 'assets/images/main-img/kakariki.j