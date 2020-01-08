/*--Global--*/
var X = 10;
function Add_numbers_1() {
		document.write(20 + X + "<br>");
}
function Add_numbers_2() {
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

/*--Local--*/
function Add_numbers_1() {
	var X = 9;
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

if (1<2) {
	document.write("The left number is smaller than the number on the right.")
}
function get_Date(){
	if (new Date().gethours() < 10) {
		document.getElementById("Greeting").innerHTML = "How are you today?";
	}
}

function Age_Function() {
	Age = document.getElementById("Age").value;
	if (Age >= 18) {
	Vote = "You are old enough to vote!";
	}
	else {
		Vote = "You are not old enough to vote!";
	document.getElementById("How_old_are_you?").innerHTML = Vote;
}