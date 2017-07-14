/* Holiii acá va tu código también */
$(document).ready(function () {

$("#login").click(function(){
 
	  if($("#mail").val().length == ""){  
	  	alert("Ingresa tú código")
	 } else if($("#mail").val().length < 7){
	 	alert("mal perrin, te faltan numbers wacho!")
	 } else if($("#mail").val().length > 7){
	 	alert("te sobran numeros ṕerrin!")
	 } else if($("#mail").val().length === 7){
	 	alert("wena perrin, la hiciste")
	 }

	});





	
	var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	isClosed = false;

	trigger.click(function () {
		hamburger_cross();      
	});

	function hamburger_cross() {

		if (isClosed == true) {          
			overlay.hide();
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
		} else {   
			overlay.show();
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
		}
	}

	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
	});  
});