// //play constructor
function Player(name, totalScore) {
  this.playerName = name;
  this.totalScore = totalScore;
};

// var savedScore = new Player();
//
var player1;
var player2;

var dice;
var playerTurn;
var playerTurnScore;
var playerTotalScore;
var player1TotalScore = 0;
var player2TotalScore = 0;
var rollsArray = [];
var nameP1;
var nameP2;

//resets all game values
var resetAll = function() {
  playerTurnScore = 0;
  rollsArray = [];
  player1TotalScore = 0;
  player2TotalScore = 0;
};
//resets turn values
var reset = function() {
  playerTurnScore = 0;
  rollsArray = [];
};


$(function(){
//reset game to start playing
  $("#namesForm").submit(function(event){
    event.preventDefault();
    resetAll();
    nameP1 = $("#player1Name").val();
    nameP2 = $("#player2Name").val();
    $("#playerColumn").show();
    playerTurn = "player1"
    console.log(playerTurn);
    player1 = new Player(nameP1, player1TotalScore);
    player2 = new Player(nameP2, player2TotalScore);
    playerNameFunction();
    player1TotalScore = 0;
    player2TotalScore = 0
    if (playerTurn === "player1") {
      gamePlay(player1);
    }  else {
      gamePlay(player2);
    };
  });
//a function to toggle between players
var switchPlayer = function() {
  if (playerTurn === "player1") {
    playerTurn = "player2";
  } else if (playerTurn === "player2") {
    playerTurn = "player1";
  };
};
var gamePlay = function(player){
  rollsArray = [];
  $("#playerRolls").text("");
  playerTurnScore = 0;
  $("#turnScore").text(playerTurnScore);
  if (playerTurn === "player1") {
    $("#playerTotalScore").text(player1.totalScore);
  } else if (playerTurn === "player2"){
    $("#playerTotalScore").text(player2.totalScore);
  };
  playerNameFunction();
};//end gamePlay

//gibes random number 1-6 as dice roll, collects rolls in array, appends array items to page in "Rolls" section ALSO adds dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to turnScore
var diceRoll = function(){
dice = Math.floor(Math.random() * 6) + 1;
rollsArray.push(dice);
//Displays list of rolls for your turn
  $("ul#playerRolls").text("");
  rollsArray.forEach(function(roll){
    $("ul#playerRolls").append("<li>" + roll + "</li>");
    turnScoreFunction();
  });
};
//Roll Dice button
  $("#roll").click(function(){
    diceRoll();
  });
// function to add dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to turnScore
  var turnScoreFunction = function() {
    if (dice === 1){
      playerTurnScore = 0;
      $("#turnScore").text(playerTurnScore);
      endTurn();
    } else {
    playerTurnScore += dice;
    $("#turnScore").text(playerTurnScore);
  };
  };
  $("#hold").click(function(event){
    endTurn();
  });

// function for ending the turn, totaling up turn score with total score and printing to screen
    var endTurn = function() {
      if (playerTurn === "player1"){
        player1.totalScore += playerTurnScore;
        $("#playerTotalScore").text(player1TotalScore);
      } else {
        player2.totalScore += playerTurnScore;
        $("#playerTotalScore").text(player2TotalScore);
      };

      playerTurnScore = 0;
      $("#turnScore").text(playerTurnScore);
      RollsArray = [];
      $("#playerRolls").text(rollsArray);
      alert("Your Turn is Over!");
      switchPlayer();
      gamePlay();
    };






//Hold button

//name assignment function
var playerNameFunction = function(){
  if (playerTurn === "player1"){
    $(".playername").text(nameP1);
  } else {
    $(".playername").text(nameP2);
  };
};

}); //jQuery END
