function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Vioilin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() { 
	var elem= document.getElementById("List_of_Instruments");
	
	if (elem.hasChildNodes())
	{
		document.getElementById("List_of_Instruments").this();
	} 
	
	for (Y = 0; Y < Instruments.length; Y++) {
	Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

function dog_pics(){
	var Dog_Picture = [];
	Dog_Picture[0] = "sleeping";
	Dog_Picture[1] = "eating";
	Dog_Picture[2] = "playing";
	Dog_Picture[3] = "pooping";
	document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
		Dog_Picture[1]
}
	
	const X = 900;
	
function change_const(){

	document.write(X)
}
function constant_function(){
		const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}
		Musical_Instrument.color = "blue";
		Musical_Instrument.price= "$900";
		document.getElementById.type + "was" + Musical_Instrument.price;
			Musical_Instrument + "was" + Musical_Instrument.price;
		
}