// Initialise javascript variables
var startButton = document.querySelector("#start");
var timer = document.querySelector("#time");
var timeRemaining = 75;
var startScreen = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");

// Initialise some counter variables
var quesIndex = 0;
var choiceIndex = 0;
var questionsLeft = 6;


// Add event listener to pick up on button click
startButton.addEventListener("click",function startQuiz(){
    
    // When click on button - remove start of quiz - load questions
    var hideStart = function(){
        var wrapDiv = document.querySelector("#start-screen");
        wrapDiv.setAttribute("class","hide");
    }
    hideStart();

    // Set timer interval
    var timeInterval = setInterval(function(){
        // Each second -1 from time remaining
        timeRemaining--;

        // Set timer text content to time remaining variable
        timer.textContent = timeRemaining;

        // If no time left
        if (timeRemaining <= 0){
            clearInterval(timeInterval);
            // End quiz function
            endQuiz();
        }
    }, 1000);
    
    // Call functions to load the questions & choices
    loadQuestion();
    loadChoices();
});


// Load question function 
var loadQuestion = function (){

    qTitle.textContent = "";
    // Set variable for questions div
    var quesDiv = document.querySelector("#questions");
    quesDiv.setAttribute("class", "show");

    // Load the question title with question from question array (found in questions.js)
    qTitle.textContent = questionsWithAnswers[quesIndex].question;

    console.log(quesIndex);
    // Add to index (get next question)
    quesIndex++;

    if (quesIndex+1 === 7){
        endQuiz();
    }

}   

// Load choices function
var loadChoices = function (){

    // Remove any previous elements when call function again
    choices.innerHTML = "";

    // For loop to run through all choices (i = 4 as 4 answers for each question)
    for (var i = 0; i < 4; i++){
        // Set index to 0 (start)

        // Create button for each choice
        var option = document.createElement("button");
        // Set text content to each choice
        // console.log(questionsWithAnswers[0].potentialAnswers[i]);
        
        option.textContent = questionsWithAnswers[choiceIndex].potentialAnswers[i];
        // Append each button to choices id
        document.querySelector("#choices").appendChild(option);
        // Add the answer to HTML - allows logic to choose between right/wrong answer later
        option.setAttribute("answer", questionsWithAnswers[choiceIndex].potentialAnswers[i]);
        // Declare variable for answer
        var rightAnswer = questionsWithAnswers[choiceIndex].answer;

        // Event listener for click on button
        option.addEventListener("click",function (event){

            // Element = clicked on element
            var element = event.target;
            // Get answer attribute from button
            var chosenAnswer = element.getAttribute("answer");
    
            // If chosen answer is the same as 
            if (chosenAnswer === rightAnswer){
                theRightAnswer();
            } else {    
                wrongAnswer();
            };
            
        })
    }   
    // console.log(questionsLeft);
    choiceIndex = choiceIndex + 1;
    questionsLeft--;
    // Get next question ready
}   

// Func to run if wrong answer
var wrongAnswer = function (){
    // Subtract time for incorrect answer
    timeRemaining = timeRemaining - 20;
    // Set class to show feedback
    feedback.setAttribute("class","feedback");
    feedback.textContent = "Incorrect!";

    // Call next question and choices
    loadQuestion();
    loadChoices();

    if (timeRemaining <= 0){
        console.log("Game over");
    }
}

// Func to run if right answer
var theRightAnswer = function(){
    feedback.setAttribute("class","feedback");
    feedback.textContent = "Correct!";

    loadQuestion();
    loadChoices();
}

// Func to end quiz
var endQuiz = function (){
    // Hide start screen
    startScreen.setAttribute("class","hide");
    // Hide feedback
    feedback.setAttribute("class","hide");
    // Show end screen
    endScreen.setAttribute("class","show");
    // Set timer to 0 
    timer.textContent = 0;

    if (timeRemaining >= 0){
        finalScore.textContent = timeRemaining;
    } else {
        finalScore.textContent = 0;
    }


}







// Start quiz
startQuiz();


