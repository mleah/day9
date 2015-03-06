/*
PSEUDOCODE
we need to take a word with sget
change it so it is backwards
check to see if its the same forwards and backwards
console log if the word is or isn'ta palindrome

HOW DO WE MAKE IT SO THAT SPACED WORDS LIKE TACO CAT CANT BREAK IT?!?!
*/

var sget = require("sget");
chooseWord();

function chooseWord(){
	var chosenWord = sget("Please type a word.  This program will check to see if the word is a palindrome.").trim().replace(/\W/g, "").toLowerCase();
	console.log(chosenWord);
	reverseWord(chosenWord);
}

function reverseWord(chosenWord) {
  var reversedWord = chosenWord.split('').reverse().join('');
  isPalindrome(chosenWord, reversedWord);

}

function isPalindrome(chosenWord, reversedWord){

	if (chosenWord === reversedWord){
		console.log(chosenWord + " is a palindrome!");
	}
	else{
		console.log(chosenWord + " is not a palindrome!");
	}
}