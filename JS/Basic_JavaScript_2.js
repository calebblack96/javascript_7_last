function not() {
	var element = document.getElementById("here");

		document.body.style.backgroundColor = "red";
		document.body.style.fontcolor = "blue";
}

function extra() {
	var sentence = "I am a bear";
	sentence += " I can do bear stuff.";
	document.getElementById("concatenate").innerHTML = sentence;
}