# _Pig Dice_

#### A Game of Dice, 3/02/17

### By Oliver Fu & Stormi Hoebelheinrich

## Description

#### This simple application allows two users to play a game of pig dice against each other. Players enter their names, then roll dice and choose to hold or continue holding. If the player rolls a 1, they score nothing and it becomes the next player's turn.If the player rolls any other number, it is added to their turn total and the player's turn continues.If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn. The Game is played until one player gets a total score of 100. Then an alert pops up to announce the winner and the page refreshes.

### Specifications

| Behavior |   Input   |   Output   |
|----------|:---------:|:----------:|
| Accept User name input | "Stormi", "Oliver" | Player 1: Stormi, Player 2: Oliver |
| Pressing play starts game | *click Play* | scores set to 0 |
| dice roll: random number 1-6 assigned to dice roll| *click Roll* | 3 |
| Adding dice roll to turn score| turn score: 4, dice roll: 2 | new turn score: 6 |
| if 1 is rolled, turn score is set to 0 and turn ends| dice roll: 1 | turn score: 0, "Your turn is over" |
| hold button: clicking hold function totals up turn and adds it to total score, turn ends without roll | *click Hold* | total score = old total + turn score |
| switching turns| *roll: 1* OR * click hold *| toggles between player 1 and player 2 |
| Game ends when one player reaches a total score of 100| total score: 95, roll: 6 | "You are the winner" announcement. Page refreshes, scores are reset, all data removed. |

###This is the initial release (1.0):
https://github.com/ofu997/pigDice
https://github.com/stormihoebe/pig-dice

#Getting Started

* clone repository
* open index.html in web browser
* enter player names
* press play
* player 1 rolls dice or holds
* continue playing until one player reaches 100 points


###Feel free to use any of my code for your own purposes. There is nothing sacred here.

#Built with the following tools:

* Atom (https://atom.io/)
* GitHub (https://github.com/)
* Git (https://git-scm.com/)
* Bootstrap (http://getbootstrap.com/)
* jQuery (https://jquery.com/)

#License

###This project is licensed under the MIT License - (https://opensource.org/licenses/MIT)
