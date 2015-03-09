/*
NEEDS TO STILL BE DONE
Refactor-there are several lines reused in several functions
figure out how to fix the hint function so it doesn't show already guessed letters
figure out how to display correct guessed letters in correct spot
make it pretty
NEED TO FIX GUESS WORD function 
*/

var sget = require("sget");
var wordsArray = ['github', 'kenshair', 'tacos', 'slackbot', 'terminal'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var wordDashes = word.replace(/[a-z]/g, "_");
var guessedWord = [];
var lettersGuessedArray = [];
var wrongGuesses = 4;
var hints = 2;
startGame();

function startGame(){
	console.log("\n-----------------------------------------------\n  Welcome to Mariah & Nikki's Hangman Game!\n         Your word is " + word.length + " letters long.\n-----------------------------------------------\n\nYou have 4 guesses before your hangman is complete.\nYou also have 2 hints.\nGuess wisely....\n");
	userChoices();
}


function userChoices(){
	var userInput = sget("\nPlease choose a number.\n1.Guess a letter\n2.Guess the word\n3.Get a hint\n4.See your status\n5.Quit\n").trim();
	switch(userInput){

		case "1": 
			console.log("\n-------------------------------------------"); 
			chooseALetter();
		break;

		case "2":
			guessWord();
		break;

		case "3":
			giveHint();
		break;

		case "4":
			console.log("\n-------------------------------------------");
			seeStatus();
		break;

		case "5":
			console.log("\nThanks for playing!\n");
		break;

		default:
			console.log("\nInvalid input, please try again!\n");
			userChoices();
		break;
	}
}


function chooseALetter (){
	var letterChoice = sget("\nPlease guess a letter\n").trim().toLowerCase();
	checkCharacters(letterChoice);
}


function checkCharacters(letterChoice){
	if(letterChoice.length === 1){  //this works 
 		if(letterChoice === letterChoice.replace( /[^a-z]/g, " ")){  //this works now!!
   			 letterGuessedYet(letterChoice);
  		}  else  {   
   			console.log("\nInvalid input, please try again.\n");   
   			chooseALetter();  
  		}} 
  	else{
  		console.log("\nInvalid input, please try again.\n");
  		chooseALetter();
  	} 

}

function letterGuessedYet(letterChoice){
	var letterChecker = lettersGuessedArray.indexOf(letterChoice);
	if (letterChecker > -1){
		console.log("\nYou already guessed that letter, please guess again.\n");
		userChoices();
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
		console.log("\nGreat guess! " + letterChoice + " is in the word!\n");
		guessedWord.push(letterChoice);
		replaceDash(letterChoice);
		winGame();
	} else{
		console.log("\nIncorrect!\n");
		wrongGuesses --;
		console.log("You have " + wrongGuesses+" wrong guesses left!\n");
		console.log("\n-------------------------------------------\n");
			if(wrongGuesses <= 0){
				lose();
			}
			else{
				userChoices();
			}

	}

}


function replaceDash(letterChoice){

	console.log(letterChoice);
	console.log(word.indexOf(letterChoice));

	for(i = 0 ; i < word.length ; i++){
		if (word.indexOf(letterChoice) === i) {
			var letterIndex = word.charAt(i);

			console.log("This is letter index (which character at that index) " + letterIndex);


			wordDashes = wordDashes.substr(0, i) + letterChoice + wordDashes.substr(i + 1);

			console.log("This is wordDashes " + wordDashes);
	
	} else {
		console.log("jk not working");
		}
	}
}



function guessWord(){
	var fullGuessWord = sget("\nPlease enter your guess.\n").trim().toLowerCase();
	console.log("FUllguessword " + fullGuessWord);
	if (fullGuessWord === word){
		console.log("FUllguessword " + fullGuessWord + " word is " + word);//debugging
		console.log("\nCongratulations!  You have correctly guessed the word!\nHere is the final word: " + word + "\n");
	} else { // need to refactor this since it is now here and in validate letters function
		console.log("\nIncorrect!\n");
		console.log("FUllguessword " + fullGuessWord + " word is " + word);
		wrongGuesses --;
		console.log("You have " + wrongGuesses+" wrong guesses left!\n");
		console.log("\n-------------------------------------------\n");
			if(wrongGuesses <= 0){
				lose();
			}
			else{
				userChoices();
			}
	}
}


function giveHint(){
	if (hints>0){
		console.log("\nHere is your hint!\n");
		console.log(pickHintLetter());
	}
	
	else{
		console.log("\nYou have no hints left!");
	}

	hints--;
	userChoices();

}

function pickHintLetter(){
	for(i=0; i<word.length; i++){
		if (guessedWord[i] === undefined)
			return word[i];  //this doesn't control for letters already correctly guessed
	}
}


function seeStatus(){
	console.log("\nThese are the letters that you've guessed " + lettersGuessedArray + "\nThese are the correct letters that you've guessed " + guessedWord + "\nYour word is " + word.length + " letters long.\n");
	console.log("You have " + hints +" hint(s) left.\n");
	console.log("You have " + wrongGuesses+" wrong guesses left!\n");
	userChoices();
}


function lose(){
	console.log("\n--------------------------------\n           ----------           \n           |       ||           \n           O       ||           \n          \\|/      ||           \n           |       ||           \n          / \\      ||           \n                   ||           \n                   ||           \n         ---------------        \n\n--------------------------------\n  WOMP WOMP.\n  YOU LOSE, SORRY!");
	process.exit[0];
}

function winGame (){
	if (word.length === guessedWord.length){
		console.log("\nCongratulations!  You have correctly guessed all the letters!\nHere is the final word: " + word + "\n");
	}else{
		userChoices();
	}
}



