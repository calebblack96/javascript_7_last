function subtraction_Function() {
	var element = document.getElementById("subtraction");
	element.innerText= 9-10;
	
}

function negation_Function() {
	var x = 10;
	document.getElementById("negation").innerHTML = -x;

}

function modulus_Operator() {
	var simple_Math = 25 % 6;
	document.getElementById("modulus").innerHTMl
	= "When you divide 25 by 6 you have	a remainder of: " + simple_Math;
}

function more_Math() {
	var simple_Math = (1 + 2) * 10 / 2 -5;
	document.getElementById("more").innerHTML = "1 plus 2,"+
	"multiplied by 10, divided in half and then subtracted by 5 equals " 
	+ simple_Math;
}

function multiplictation() {
	var simple_Math = 6 * 8;
	document.getElementById("multiplication").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
	var simple_Math = 48 / 6;
	document.getElementById("division").innerHTML = "48 / 6 = " + simple_Math;
}

function subtraction_Function() {
	var subtraction = 5 - 2;
	document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}
	
function addition_Function() {
	var addition = 5 + 4;
	document.getElementById("addition").innerHTML = "5 + 4 = " + addition;
}

function initialize() {
	subtraction_Function();
	negation_Function();
	modulus_Operator();
	more_Math();
	multiplictation();
	division();
	addition_Function();
	
}
	