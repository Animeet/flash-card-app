

/**  Flash Card App  **/


//When page loads, show user a start button (✓✓✓)
var cardDisplay = document.querySelector('.card-display');
var questionDisplay = document.querySelector('#question-display');
var timeDisplay = document.querySelector('#time-display');
var answerDisplay = document.querySelector('#answer-display');
var nextBtn = document.querySelector('#next');
var startBtn = document.querySelector('#start');


// Create a variable to track current card ind
var currentCardIndex = 0;
//Create a variable that will hold the current card object
var card;

//Create a variable to store the current timer count
var count = 5;

//Function that is called when the end of the cards array is reached
//to prompt user to restart
function promptUserToRestart() {
    var userChoice = confirm('Would you like to restart?');

    if (userChoice) {
        displayCard();
    } else {
        questionDisplay.innerText = 'Have a great day!';
        answerDisplay.classList.add('hide')
        nextBtn.classList.add('hide');
    }
}


//Function to hide the timer and show the answer and next button
function showAnswer () {
    answerDisplay.innerText = card.answer;
    timeDisplay.classList.add('hide');
    nextBtn.classList.remove('hide');
    answerDisplay.classList.remove('hide');

    currentCardIndex++;



    //If the currentCardIndex is equal to the cards array length, then
    //we stop flashCards and confirmif the user would like to restart
    if (currentCardIndex === cards.length) {
        currentCardIndex = 0;
        nextBtn.classList.add('hide')
        promptUserToRestart();
    }

}


// Create a function that starts a timer at 5 seconds
// and counts down to zero, then calls showAnswer
function startTimer() {
    timeDisplay.classList.remove('hide');
    timeDisplay.innerText = 5;

    //Create a setInterval and store it to a variable that triggers every second
    var timer = setInterval(function() {
        count--;
        timeDisplay.innerText = count;

        if (count === 0) {
            clearInterval(timer)
            count = 5;
            showAnswer();
        }
    }, 1000)
}

// Create a function that grabs the current card object and displays
// the question to the window
function displayCard() {
    card = cards[currentCardIndex];

    cardDisplay.classList.remove('hide')

    questionDisplay.innerText = card.question;

    answerDisplay.classList.add('hide');
    nextBtn.classList.add('hide');
    startTimer();
}


// Hide the start button and call displayCard
function startFlashCards() {
    startBtn.classList.add('hide')
    displayCard();
}

//When user clicks start button, show the first flash card
startBtn.addEventListener('click', startFlashCards);
nextBtn.addEventListener('click', displayCard);


    // Show card question and start a 5 second timer

    // When timer has completed, show the answer
    // Show a Next Button to allow the user to transition to the next card
    
// When the end of the card array has been reached, show the user a confirmation asking
// if they would like to restart from the beginning
    //If they confirm yes, reset card index to zero and show first card
    // If they confirm no, show a goodbye message


