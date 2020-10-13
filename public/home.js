var i = 0;
var j=0;

var txt2 = 'Glad to see you here';
var speed = 100;


$(document).ready(function typeWriter() {
	
	if(i==0) {
		$("#topNav").hide().removeClass("hidden").slideDown(1000);
		$("#hello").hide().removeClass("hidden").fadeIn(1000);
		i++;
	}	
	
	if(j < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
	
	$("#heart").hide().removeClass("hidden").fadeIn(1000);
	$("#instruction").hide().removeClass("hidden").fadeIn(1000);
	

});
