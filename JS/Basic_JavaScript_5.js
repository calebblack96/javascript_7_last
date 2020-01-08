function java5() 
{
	document.write("<h1>Hey</h1>");
}

function isNAN() {
	var elem = document.getElementById("Nontest");
	elem.innerHTML = 0/0;
}

function isNANNot() {
	var elem = document.getElementById("Nontest");
	var num = "007";
	elem.innerHTML = isNaN(num);
}

function isNotNan() {
	var elem = document.getElementById("Nontest");
	var num = "lkjasdf007";
	elem.innerHTML = isNaN(num);
}

function infinity() {
	checkNumber(1.7976931348623157E+10308);
}

function neginfinity() {
	checkNumber(-1.7976931348623157E+10308);
}

function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    document.write( "Positive Infinity");
  }
  else if(bigNumber === Number.NEGATIVE_INFINITY)
	document.write("Negative infinity");
}

function greater(){
	document.write(7>4); 
}

function less() {
	document.write(8>12);
}

function consoleout(){
	console.log(3 + 5);
}

function consoleoutfalse(){
	console.log(7>9);
}

function coerce(){
	var val = ("10" + 5);
	document.write(val);
	document.write(isNaN(val));
}

function noodletrue(){
	var elem = (5 == 2+3);
	document.write(elem);
}

function noodlefalse(){
	var elem = (6 == 2+3);
	document.write(elem);
}

function truthytrue(){
	X = 40;
	Y = 40;
	document.write(X === Y);
}

function truthyfalse(){
	X = 40;
	Y = "60";
	document.write(X === Y);
}

function truthyother(){
	X = 40;
	Y = "40";
	document.write(X === Y); 
}

function truthyotherone(){
	X = 40;
	Y = 60;
	document.write(X === Y); 
}

function and(){
	var elem = (5 == 2+3 && 4 == 2 + 2);
	document.write(elem);
}


function or(){
	var elem = (5 == 2+3 || 4 == 1 + 2);
	document.write(elem);
}


function not(){
	var elem = !(4 == 2 + 2);
	document.write(elem);
}

