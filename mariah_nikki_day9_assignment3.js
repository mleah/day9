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


function userChoices(){
	var userInput = sget("\nPlease choose a number.\n1.Guess a letter\n2.Guess the word\n3.Get a hint\n4.See what letter's you've guessed\n5.Quit").trim();
	switch(userInput){

		case "1": 
			chooseALetter();
		break;

		case "2":
			//function for guessing a word
		break;

		case "3":
			//function for getting a hint
		break;

		case "4":
			console.log("These are the letters that you've guessed " + lettersGuessedArray);
			//add in word with filled in letters
			userChoices();
		break;

		case "5":
			console.log("Thanks for playing!");
		break;

		default:
			console.log("Invalid input, please try again!");
			userChoices();
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
	checkCharacters(letterChoice);


}

function checkCharacters(letterChoice){
	if(letterChoice.length === 1){  //this works 
 		if(letterChoice.value.match(/^[a-z]+$/)){  //this doesn't work
   			 letterGuessedYet(letterChoice);
  		}  else  {   
   			console.log("Invalid input, please try again.");   
   			chooseALetter();  
  		}} 
  	else{
  		console.log("Invalid input, please try again.");
  		chooseALetter();
  	} 

}

function letterGuessedYet(letterChoice){
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

function winGame (){}




