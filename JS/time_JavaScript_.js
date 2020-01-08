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