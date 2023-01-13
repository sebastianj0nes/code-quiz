// When click on start button
    // Timer starts
// When answer question
    // Presented with another question
// When answer is incorerct 
    // Time is subtracted from clock
// When all q's answered or time reaches 0
    // Game is over
// When game is over
    // I can save initials and score


var startButton = document.querySelector("#start");

// Initialise timer variable
var timer = document.querySelector("#time");
var timeRemaining = 76;

// Add event listener to pick up on button click
startButton.addEventListener("click",function startTime(){
    
    // Set timer interval
    var timeInterval = setInterval(function(){
        // Each second -1 from time remaining
        timeRemaining--;

        // Set timer text content to time remaining variable
        timer.textContent = timeRemaining;


        if (timeRemaining === 0){
            clearInterval(timeInterval);
            // Add another function to display end 
        }
    }, 1000);

});




