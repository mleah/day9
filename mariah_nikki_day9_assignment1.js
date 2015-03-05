/*  switch/case  for all of the options
functions for each case/option
sget for userinput
quit function
loops through the switch/case until user quits  */

var sget = require('sget');
startCalculator();


function choosingNumbers(){
	var firstNumber = sget("Please enter your first number.");
	var secondNumber = sget("Please enter your second number.");
	firstNumber = parseInt(firstNumber);
	firstNumber = parseInt(firstNumber);
}

function addition(){
	choosingNumbers();

}

function subtraction(){
	var calcChoice = sget("");
}

function multiplication(){

}

function division(){

}

function squareRoot(){

}

function quitCalculator(){

}

function startCalculator(){
	console.log("Hello!  Welcome to Nikki and Mariah's calculator!\nPlease select the number of which calculation you would like to perform.  Type 'quit' to exit.")
	calculator();
}


function calculator(){
	var calcChoice = sget("Testing");
	calcChoice = parseInt(calcChoice);
		switch(calcChoice){
			case 1:
				console.log("")
				addition();

				break;

			case 2:
				console.log("");
				
				break;

			case 3:
				console.log("");
				
				break;

			case 4:
				
					console.log("");
			
				break;

			case 5:
				console.log("");
				
				break;

			case 6:
				console.log("")
			
				break;

			default: 
				console.log("");
		}
}