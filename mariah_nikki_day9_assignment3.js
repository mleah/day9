/*
Hangman
give user word's length
allow user to guess a number of times
should keep track of letters the user has guessed and keep them on display
should offer up to 2 1-letter hints on request
*/

var sget = require("sget");
var wordsArray = ['detroit', 'kenshair', 'llamas', 'slackbot', 'commandline'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var lettersGuessedArray = [];
var wrongGuesses = 3;
startGame();

function startGame(){
	console.log("Welcome to Mariah & Nikki's Hangman Game!");
	console.log("Your word is " + word.length + " letters long.");
	userGuessing();
}

function endGame (){}

function userGuessing(){
	var letterChoice = sget("Please guess a letter").trim().toLowerCase();
	var letterChecker = lettersGuessedArray.indexOf(letterChoice);
	if (letterChecker > -1){
		console.log("You already guessed that letter, please guess again.");
		userGuessing();
	}
	else{
	lettersGuessedArray.push(letterChoice);
	validateLetters(letterChoice);
	}
}

function validateLetters(letterChoice){
	var wordAsLetters = word.split('');
	var isYourLetterThere = wordAsLetters.indexOf(letterChoice);
	if (isYourLetterThere > -1){
		console.log("Great guess! " + letterChoice + " is in the word!");
		userGuessing();
	}
	else{
		console.log("Incorrect!");
		wrongGuesses = wrongGuesses - 1;
		console.log(wrongGuesses);
			if(wrongGuesses <= 0){
				lose();
			}
			else{
				userGuessing();
			}

	}
}

function lose(){
	console.log("WOMP WOMP.\n  YOU LOSE, SORRY!")
	process.exit[0];
}



function lettersGuessed(){
	for(i = 0; i < lettersGuessedArray.length; i++){
		console.log("You've guessed the following letters..." + lettersGuessedArray[i]);
	}
}


