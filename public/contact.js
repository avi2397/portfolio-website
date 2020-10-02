var i = 0;
var txt1 = 'Get in touch !';
var speed = 75;
var j=0;


$(document).ready(function typeWriter() {
	
	
	if (i < txt1.length) {
    document.getElementById("gittxt").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
	
	if(j==0){
		$("#details").hide().removeClass("hidden").fadeIn(2000);
		j++;
	}
	
	
});