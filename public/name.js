
function toggleTextbox(ObjChkId,ObjTxtId)
{

    if(document.getElementById("myForm").elements.namedItem("agentcheck").checked){
		document.getElementById("myForm").elements.namedItem("visitor").value ="";
		document.getElementById("myForm").elements.namedItem("visitor").disabled = true;
	}
        
    else{
		document.getElementById("myForm").elements.namedItem("visitor").disabled = false;
	}
         
}



$(document).ready(function(){ 
	
	
	$("form").hide().removeClass("hidden").fadeIn(2000);	
	
	$(".animation").hide();
	
	$( "h1" ).hide().slideDown( 1000, function() {
    // Animation complete.
		$(".animation").slideDown(1000);
  });
  
});
