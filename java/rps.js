var computerChoices = ["rock", "paper", "scissors"]
var userChoice = prompt("choose rock, paper or scissors")
var userWins = 0
var computerWins = 0

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

console.log(computerGuess)
console.log(userChoice + "your choice")

if(userChoice == computerGuess) {
   alert("it is a draw")
   }

else if(userChoice == "rock" && computerGuess == "sciccors") {
       userWins++
   }
   
else if(userChoice == "sciccors" && computerGuess == "paper") {
    userWins++
}

else if(userChoice == "paper" && computerGuess == "rock") {
    userWins++
}

else if(userChoice == "sciccors" && computerGuess == "rock") {
    coputerWins++
}

else if(userChoice == "rock" && computerGuess == "paper") {
    computerWins++
}

else if(userChoice == "paper" && computerGuess == "sciccors") {
    computerWins++
}
var html =
    "<p>Player wins: " + userWins + "</p>" +
    "<p>computer wins: " + computerWins + "</p>" +
    "<p>you chose: " + userChoice + "</p>" +
    "<p>Computer chose: " + computerGuess + "<p>"

    document.getElementById("game").innerHTML = html     