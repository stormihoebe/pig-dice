var dice
var humanTurnScore = 0;
var humanTotalScore = 0;
var humanRollsArray = [];
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
  $("#reset").click(function(event){
    reset();
  });

  $("#roll").click(function(event){
    diceRoll();
  //Displays list of rolls for your turn
    $("ul#humanRolls").text("");
    humanRollsArray.forEach(function(roll){
      $("ul#humanRolls").append("<li>" + roll + "</li>");
    });
  // $("#humanRolls").text(humanRollsArray);
    addToTurnScore();
  });

  var addToTurnScore = function() {
    if (dice === 1){
      humanTurnScore = 0
    } else {
    humanTurnScore = humanTurnScore + dice
    $("#humanTurnScore").text(humanTurnScore);
  };
  };












}); //jQuery END
