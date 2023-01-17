var submitScore = document.querySelector("#submit");
var highScores = document.querySelector("#highscores");
var userInitialsEl = document.querySelector("#initials");

if (submitScore){
submitScore.addEventListener("click", function(){
    
    // window.location.href = "highscores.html";
    
    localStorage.setItem("userInit",userInitialsEl.value);

    changePage();
})};     

var changePage = function () { 
    window.location.href = "highscores.html";
}


var getUserData = function (){

    var value = localStorage.getItem("userInit");
    var userScore = localStorage.getItem("lastScore");

    
    console.log(value);
    console.log(userScore);
    if (userScore){
        var userList = document.createElement("li");
        userList.textContent = (value + "-" + userScore);
        highScores.appendChild(userList);
        console.log("it worked");
    }

}
getUserData();