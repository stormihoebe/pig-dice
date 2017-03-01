var dice
var humanTurnScore
var humanTotalScore
var humanRollsArray = []
//Generates random number 1-6
var reset = function() {
  humanTurnScore = 0;
  humanTotalScore= 0;
  humanRollsArray = [];

};
var diceRoll = function(){
return dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
};

$(function(){
//reset game to start playing
  $("#reset").click(function(event){
    reset();
  });













}); //jQuery END
