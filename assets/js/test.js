



 


function correctAnswer(currentQ) {
    // answerReveal.innerText = `Correct! Did you know: ${currentQ.fact}`;
    score++; // Increase the score by 1
    updateScore(); // Update the displayed score
}

// incorrectAnswer (-1 point)
function incorrectAnswer() {
    // answerReveal.innerText = 'Incorrect! Better luck next time';
    score--; // Decrease the score by 1
    updateScore(); // Update the displayed score
}

// Function to update the displayed score
function updateScore() {
    scoreElement.textContent = `Score: ${score}/${totalQuestions}`;
}