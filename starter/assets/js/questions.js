// Create questions with multiple choice answer
    // Change question div class to not hidden
    // Change h2 text content to question
    // Create li elements to hold choices

export var setQuestion = function (){

    var questionsDiv = document.querySelector("#questions");
    questionsDiv.setAttribute("class","");

    var oList = function (){
        var newList = document.createElement("ol");


        questions = ["Which type of function can be called anywhere in the document?",
        "ABC NFT",
        "Korma",
        "Staking",
        "Representation",
        "Z word",
        "Ridiculous"];


        // Create 1 question with 3 replies in a list
        var qHeader = document.createElement("h2");
        for (var i = 0; i <questions.length; i++){
            qHeader.textContent = questions[i];
        }
    }
    console.log("Export working");
    oList();
}       

 
