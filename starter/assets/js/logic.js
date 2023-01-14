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

// Initialise button variable
var startButton = document.querySelector("#start");

// Initialise timer variables
var timer = document.querySelector("#time");
var timeRemaining = 75;

// Initialise startscreen variable
var startScreen = document.querySelector("questions");

// Add event listener to pick up on button click
startButton.addEventListener("click",function startTime(){
    
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


        if (timeRemaining === 0){
            clearInterval(timeInterval);

            // Add another function to display end 

        }
    }, 1000);
    
    loadQuestion();
    loadChoices();
});

// Load question function 
var loadQuestion = function (){

    var qTitle = document.querySelector("#question-title");

    // Array to hold all questions
    questions = ["What is the tag for the element which will produce the largest header?",
    "What is the name of the function which can be called before it is declared?",
    "How do you center a div?",
    "What is the difference in syntax between an array and an object?",
    "What method is used to obtain an id/class from HTML to be used in javascript?"
    ]

    // Call for loop to iterate through questions array
    for (var i = 0; i < questions.length; i++){
        qTitle.textContent = questions[i];
    }    
    var quesDiv = document.querySelector("#questions");
    quesDiv.setAttribute("class", "show");

}   

// Given a question - load the appropriate answer responses
    // Using choices div 

var loadChoices = function (){

    var choices = document.querySelector("#choices");


    var answers = [["<h5>","<h2>","<h1>","<h6>"],
    [""],
    [""],
    [""]];


    for (var i = 0; i < 4; i++){
        var j = 0;
        var option = document.createElement("button");
        option.textContent = answers[j][i];
        document.querySelector("#choices").appendChild(option);
    }
       
    
    choices.addEventListener("click", function (event){

        

    })
    

}   
