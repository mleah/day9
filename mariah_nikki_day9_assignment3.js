/*
Hangman
give user word's length
allow user to guess a number of times
should keep track of letters the user has guessed and keep them on display
should offer up to 2 1-letter hints on request
*/

var sget = require("sget");
var wordsArray = ['Detroit', 'Tacos', 'Llamas', 'Slackbot', 'Commandline'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var lettersGuessedArray = [];
startGame();

function startGame(){
	console.log("Welcome to Mariah & Nikki's Hangman Game!");
	console.log("Your word is " + word.length + " letters long.");
}

function endGame (){}

function lettersGuessed(){
	for(i = 0; i < lettersGuessedArray.length; i++){
		
		console.log("You've guessed the following letters..." + lettersGuessedArray[i]);
	}
}
console.log("Please choose a letter.");

