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
		$("#details1").hide().removeClass("hidden").fadeIn(2000);
		$("#details2").hide().removeClass("hidden").fadeIn(2000);
		$("#topNav").hide().removeClass("hidden").slideDown(1000);
		$("#git").hide().removeClass("hidden").slideDown(1000);
		j++;
	}
	
	
});