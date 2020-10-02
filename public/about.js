var i = 0;
var txt1 = 'Avi Singh Raghuwanshi';
var speed = 75;



$(document).ready(function typeWriter() {
	
	
	if (i < txt1.length) {
    document.getElementById("name").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
	
	
	$("#aboutspara").hide().removeClass("hidden").fadeIn(2000);
	$("#inpagelinks").hide().removeClass("hidden").fadeIn(2000);
	$("#internship").hide().removeClass("hidden").fadeIn(2000);
	$("#campusinvolvement").hide().removeClass("hidden").fadeIn(2000);
	$("#skills").hide().removeClass("hidden").fadeIn(2000);	

});