
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

		case "":
			console.log("\nPlease make sure to input a number! Please try again!\n");
			userChoices();
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
	for(i = 0 ; i < word.length ; i++){
		if (word.indexOf(letterChoice) === i) {

			wordDashes = wordDashes.substr(0, i) + letterChoice + wordDashes.substr(i + 1);

			console.log("This is your updated word: " + wordDashes);
		} 
	}
}



function guessWord(){
	var fullGuessWord = sget("\nPlease enter your guess.\n").trim().toLowerCase();
	
	if (fullGuessWord === word){
		
		console.log("\nCongratulations!  You have correctly guessed the word!\nHere is the final word: " + word + "\n");
	} else { 
		wrongGuesses --;
		console.log("\nIncorrect!\nYou have " + wrongGuesses +" wrong guesses left!\n\n-------------------------------------------\n");
			if(wrongGuesses <= 0){
				lose();
			} else{
				userChoices();
			}
	}
}


function giveHint(){
	if (hints > 0){
		hints--;
		console.log("\nHere is your hint!\n");
		console.log(pickHintLetter());
	}
	
	else{
		console.log("\nYou have no hints left!");
	}

	userChoices();

}

function pickHintLetter(){
	for(i=0; i<word.length; i++){
		if (wordDashes[i] === "_")
			return word[i];  //this doesn't control for letters already correctly guessed
	}
}


function seeStatus(){
	console.log("\nThese are the letters that you've guessed: " + lettersGuessedArray + "\n\nYour word is " + word.length + " letters long.  Here is what you've filled in so far: " + wordDashes +"\nYou have " + hints +" hint(s) left.\nYou have " + wrongGuesses+" wrong guesses left!\n");
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



