var i = 0;
var txt1 = 'Avi Singh Raghuwanshi';
var speed = 100;
var flag=0;
var flag1 = 0;




function typeWriter(){
		if (i < txt1.length) {
			
			document.getElementById("name").innerHTML += txt1.charAt(i);
			document.getElementById("namesmall").innerHTML += txt1.charAt(i);
			if(i === txt1.length - 1){
				removehidden();
			} 
			i++;
			setTimeout(typeWriter, speed);
  		}
};



function removehidden(){
	$("#inpagelinks").hide().removeClass("hidden").fadeIn(2000);
	$("#internship").hide().removeClass("hidden").fadeIn(2000);
	$("#campusinvolvement").hide().removeClass("hidden").fadeIn(2000);
	$("#skills").hide().removeClass("hidden").fadeIn(2000);	
}

$(document).ready(function startup() {

	if(flag  === 0){
		$("#topNav").hide().removeClass("hidden").slideDown(1000);
		$("#jm").hide().removeClass("hidden").fadeIn(1000);
		$("#jumbobutton").hide().removeClass("hidden").fadeIn(1000);
		flag = 1;
		setTimeout(typeWriter, 1000);
	}

});