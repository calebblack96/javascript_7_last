var slideIndex = 0;


function countdown() {
	var seconds = document.getElementById("seconds").value;
	
	function tick() {
		seconds = seconds - 1;
		timer.innerHTML = seconds;
		setTimeout(tick, 1000);
		if(seconds == -1){
			alert("Death!");
		}
	}
	tick();
}



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function currentSlide(index){
	var slides = document.getElementsByClassName("mySlides");
  
	for (i = 0; i < slides.length; i++) {
		if(i == index - 1)
			slides[i].style.display = "block";
		else
			slides[i].style.display = "none";
	}
	
	slideIndex = index;
}

function plusSlides(direction){
	 var slides = document.getElementsByClassName("mySlides");
	 
	 // make current slide invisible
	 slides[(slideIndex-1)].style.display = "none";
	 
	 // is direction greater or less than number of slides
	 if (direction == 1) {
		slideIndex = (slides.length == slideIndex+1)? 0 : slideIndex+1;
	 }else if(direction == -1){
		  slideIndex = (slideIndex - 1 == 0)? slides.length - 1 : slideIndex - 1;
	 }
	
	 // make next slide visible
	 slides[slideIndex].style.display = "block";
}