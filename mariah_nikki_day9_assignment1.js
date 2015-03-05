/*  PSEUDOCODE
switch/case  for all of the options
functions for each case/option
sget for userinput
quit function
loops through the switch/case until user quits  */

var sget = require('sget');
startCalculator();


function addition(){
	var firstNumber = Number(sget("Please enter your first number."));
	var secondNumber = Number(sget("Please enter your second number."));
	if(!isNaN(firstNumber) && !isNaN(secondNumber)){
	var answer = firstNumber + secondNumber;
	console.log("The sum of " + firstNumber + " and " + secondNumber + " is " + answer + ".");
	} else {
		console.log("Not a valid choice.\nPlease try again.");
		addition();
	}
}

function subtraction(){
	var firstNumber = Number(sget("Please enter your first number."));
	var secondNumber = Number(sget("Please enter your second number."));
	if(!isNaN(firstNumber) && !isNaN(secondNumber)){
	var answer = firstNumber - secondNumber;
	console.log("The difference of " + firstNumber + " and " + secondNumber + " is " + answer + ".");
	} else {
		console.log("Not a valid choice.\nPlease try again.");
		subtraction();
	}
}

function multiplication(){
	var firstNumber = Number(sget("Please enter your first number."));
	var secondNumber = Number(sget("Please enter your second number."));
	if(!isNaN(firstNumber) && !isNaN(secondNumber)){
	var answer = firstNumber * secondNumber;
	console.log("The product of " + firstNumber + " and " + secondNumber + " is " + answer + ".");
	} else {
		console.log("Not a valid choice.\nPlease try again.");
		multiplication();
	}
}

function division(){
	var firstNumber = Number(sget("Please enter your first number."));
	var secondNumber = Number(sget("Please enter your second number."));
	if(!isNaN(firstNumber) && !isNaN(secondNumber)){
		var answer = firstNumber/secondNumber;
		console.log("The quotient of " + firstNumber + " and " + secondNumber + " is " + answer + ".");
	} else {
		console.log("Not a valid choice.\nPlease try again.");
		division();
	}

}

function squareRoot(){
	var firstNumber = Number(sget("Please enter your number."));
	var answer = Math.sqrt(firstNumber);
	if(!isNaN(firstNumber)){
	console.log("The square root of " + firstNumber +  " is " + answer + ".");
	} else {
		console.log("Not a valid choice.\nPlease try again.");
		squareRoot();
	}
}

function quitCalculator(){
	console.log("Thank you for using our calculator.\n Have a great day!")
	process.exit[0];
}

function startCalculator(){
	console.log("Hello!  Welcome to Nikki and Mariah's calculator!")
	calculator();
}


function calculator(){
	var calcChoice = sget("Please select the number of which calculation you would like to perform.\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Square Root\n6. Quit");
	calcChoice = parseInt(calcChoice);
		switch(calcChoice){
			case 1:
				console.log("ADDITION")
				addition();
				calculator();
				break;

			case 2:
				console.log("SUBTRACTION");
				subtraction();
				calculator();
				break;

			case 3:
				console.log("MULTIPLICATION");
				multiplication();
				calculator();
				break;

			case 4:
				console.log("DIVISION");
				division();
				calculator();
				break;

			case 5:
				console.log("SQUARE ROOT");
				squareRoot();
				calculator();
				break;

			case 6:
				console.log("QUIT")
				quitCalculator();
				break;

			default: 
				console.log("Not a valid choice.\nPlease try again.");
				calculator();
		}
}