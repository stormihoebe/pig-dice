//play constructor
function Player(name, turnScore, totalScore, turnRollArray) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.turnRollArray = turnRollArray;
};

var player1 = new Player(player1, player1TurnScore, player1TotalScore, player1RollsArray);
var player2 = new Player(player2, player2TurnScore, player2TotalScore, player2RollsArray);
var dice
//generic rolls & scores
var humanTurnScore = 0;
var humanTotalScore = 0;
var humanRollsArray = [];

//player1 rolls & scores
var player1Name;
var player1TurnScore = 0;
var player1TotalScore = 0;
var player1RollsArray = [];
//player2 rolls & scores
var player2Name;
var player2TurnScore = 0;
var player2TotalScore = 0;
var player2RollsArray = [];

//a function to toggle between players
var switchPlayer = function() {

};


//Generates random number 1-6
var reset = function() {
  humanTurnScore = 0;
  humanTotalScore= 0;
  humanRollsArray = [];
};
var diceRoll = function(){
dice = Math.floor(Math.random() * 6) + 1;
humanRollsArray.push(dice);
};

$(function(){
//reset game to start playing
  $("#namesForm").submit(function(event){
    event.preventDefault();
    reset();
    player1Name = $("#player1Name").val();
    player2Name = $("#player2Name").val();

  });
//Roll Dice button
  $("#roll").click(function(event){
  //generate random number 1-6 for dice roll
    diceRoll();
  //Displays list of rolls for your turn
    $("ul#player1Rolls").text("");
    humanRollsArray.forEach(function(roll){
      $("ul#player1Rolls").append("<li>" + roll + "</li>");
    });
  // adds dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to HumanTurnScore
    addToTurnScore();
  });
//Hold button
  $("#hold").click(function(event){
    endTurn();
  });

// function to add dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to HumanTurnScore
  var addToTurnScore = function() {
    if (dice === 1){
      humanTurnScore = 0
      endTurn();
    } else {
    humanTurnScore = humanTurnScore + dice
    $("#player1TurnScore").text(humanTurnScore);
  };
  };
// function for ending the turn, totaling up turn score with total score and printing to screen
var endTurn = function() {
  humanTotalScore += humanTurnScore;
  $("#player1TotalScore").text(humanTotalScore);
  alert("Your Turn is Over!");
  humanTurnScore = 0;
  $("#player1TurnScore").text(humanTurnScore);
  humanRollsArray = [];
  $("#player1Rolls").text(humanRollsArray);
  switchPlayer();
};











}); //jQuery END
