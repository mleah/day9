/*
Hangman
give user word's length
allow user to guess a number of times
should keep track of letters the user has guessed and keep them on display
should offer up to 2 1-letter hints on request
create 2 arrays and one function with a loop to display the where a letter goes if guessed correctly
need to set user guess equal to true if they guess the whole word correctly on one of the guesses
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
	userChoices();
}

function endGame (){}

function userChoices(){
	var userInput = sget("Please guess a letter").trim().toLowerCase();
	switch(userInput){
		case 1:
		break;

		case 2:
		break;

		case 3:
		break;

		case 4:
		break;

		case 5:
		break;

		case 6:
		break;

		default:
		break;
	}
}

function validateLetters(letterChoice){
	var wordAsLetters = word.split('');
	var isYourLetterThere = wordAsLetters.indexOf(letterChoice);
	if (isYourLetterThere > -1){
		console.log("Great guess! " + letterChoice + " is in the word!");
		userChoices();
	}
	else{
		console.log("Incorrect!");
		wrongGuesses = wrongGuesses - 1;
		console.log(wrongGuesses);
			if(wrongGuesses <= 0){
				lose();
			}
			else{
				userChoices();
			}

	}

}
function chooseALetter (){
	var letterChoice = sget("Please guess a letter").trim().toLowerCase();
	var letterChecker = lettersGuessedArray.indexOf(letterChoice);
	if (letterChecker > -1){
		console.log("You already guessed that letter, please guess again.");
		userChoices();
	}
	else{
	lettersGuessedArray.push(letterChoice);
	validateLetters(letterChoice);
	}
}
//array make it same length as array that holds word they are trying to guess
//use a for looop to check each letter
//if it does then it 


//hints  select word, array of hints


function lose(){
	console.log("WOMP WOMP.\n  YOU LOSE, SORRY!")
	process.exit[0];
}



function lettersGuessed(){
	for(i = 0; i < lettersGuessedArray.length; i++){
		console.log("You've guessed the following letters..." + lettersGuessedArray[i]);
	}
}


