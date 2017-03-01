// //play constructor
// function Player(name, turnScore, totalScore, turnRollArray) {
//   this.name = name;
//   this.turnScore = turnScore;
//   this.totalScore = totalScore;
//   this.turnRollArray = turnRollArray;
// };
//
// var player1 = new Player();
// var player2 = new Player();

var dice;
var playerTurn;
var playerTurnScore;
var player1TotalScore = 0;
var player2TotalScore = 0;
var rollsArray = [];
var nameP1;
var nameP2;
//a function to toggle between players
var switchPlayer = function() {
  // $("#player2").toggle();
  // $("#player1").toggle();
  if (playerTurn === "player1") {
    playerTurn = "player2";
  } else if (playerTurn === "player2") {
    playerTurn = "player1"

  };
};
//Generates random number 1-6
var reset = function() {
  playerTurnScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  rollsArray = [];
};
var diceRoll = function(){
dice = Math.floor(Math.random() * 6) + 1;
rollsArray.push(dice);
};


$(function(){
//reset game to start playing
  $("#namesForm").submit(function(event){
    event.preventDefault();
    reset();
    nameP1 = $("#player1Name").val();
    nameP2 = $("#player2Name").val();
    $("#player1").show();
    playerTurn = "player1"
    console.log(playerTurn);
    playerNameFunction();
    if (playerTurn === "player1") {
      gamePlay(player1);

    }  else {
      gamePlay(player2);
    };
  });

var gamePlay = function(player){
//Roll Dice button
    $("#roll").click(function(){
//generate random number 1-6 for dice roll
      diceRoll();
      console.log(dice);
//Displays list of rolls for your turn
      $("ul#playerRolls").text("");
      rollsArray.forEach(function(roll){
        $("ul#playerRolls").append("<li>" + roll + "</li>");
      });
// adds dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to turnScore
      turnScoreFunction();
    });

// function to add dice roll to turn score, sets turn score to zero when you roll a 1, then prints turn score to turnScore
      var turnScoreFunction = function() {
        if (dice === 1){
          playerTurnScore = 0
          $("#turnScore").html(playerTurnScore);
          endTurn();
        } else {
        playerTurnScore += dice;
        $("#turnScore").html(playerTurnScore);

      };
      };
      // function for ending the turn, totaling up turn score with total score and printing to screen
      // var endTurn = function() {
      //   playerTotalScore += playerTurnScore;
      //   $("#playerTotalScore").text(playerTotalScore);
      //   alert("Your Turn is Over!");
      //   playerTurnScore = 0;
      //   $("#player1TurnScore").text(playerTurnScore);
      //   playerRollsArray = [];
      //   $("#playerRolls").text(playerRollsArray);
      //   switchPlayer();
      // };
      // $("#hold").click(function(event){
      //   endTurn();
      // });
};//end gamePlayFunction

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
