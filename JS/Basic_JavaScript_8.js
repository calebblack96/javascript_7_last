function sentence() {
	var part_1 = "I am ";
	var part_2 = "going to the mall";
	var part_3 = "on sunday afternoon";
	var whole_sentence = part_1.concat(part_2, part_3);
	document.getElementById("myValue").innerHTML = whole_sentence;

}
function slice_Method() {
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section	= Sentence.slice(27,33);
	document.getElementById("myValue").innerHTML = Section;
	var str = "Section";
	var res = str.toUpperCase();
}
function string_Method() {
	var X =182;
	document.getElementById("myValue").innerHTML= X.toString();
}
function precision_Method() {
	var X = 12938.3012987376112;
	document.getElementById("myValue").innerHTML = X.toPrecision(10);
}

function to_fixed() {
	var num = 5.56789;
	num = num.toFixed(2);
	document.getElementById("myValue").innerHTML = num;
	
}