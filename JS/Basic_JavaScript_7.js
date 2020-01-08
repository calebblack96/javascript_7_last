
function typical_function() {
	variable = document.getElementById("Age").value;
	
	if (variable >= 100) {
		Ride= "You can not Ride!";
	}
	else {
		Ride = "You can Ride!";
	}
	
document.getElementById("Words").innerHTML = Ride;
}


function get_Date(){
	if (new Date().getHours() < 18) {
		document.getElementById("Greeting").innerHTML = "How are you today?";
	}
}

function Time_function(){
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "It is the morning.";
	}
	
	else if (Time > 12 == Time < 10) {
		Reply= "It is te afternoon.";
	}
	else {
		Reply = "It is the evening.";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;

}

