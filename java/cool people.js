var games = ["Fortnite", "PUBG", "Minecraft"]
var user = prompt("What games do you like?")
console.log(games.length);
console.log(games[1]);
console.log(games[2]);
console.log(games[0]);
if (games.indexOf(user) >=0) {
    alert("me to")            
}
else {
    alert("not me")}