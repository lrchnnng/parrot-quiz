// question generated on document load
function getQuestion() {
    
    const currentQ = quizQuestions[currentQuestionIndex];

    question.src = currentQ.questionUrl;
    
    // Create an array of answer options
    var answerOptions = [currentQ.a, currentQ.b, currentQ.c];

    // Shuffle the answer options
    shuffleArray(answerOptions);

    // Assign shuffled answer options to the buttons
    document.getElementById('option1').textContent = answerOptions[0];
    document.getElementById('option2').textContent = answerOptions[1];
    document.getElementById('option3').textContent = answerOptions[2];
}