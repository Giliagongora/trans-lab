/* Holiii acá va tu código también */
$(document).ready(function () {
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

   
	//var email = localStorage.getItem('mail').value;
	
	//Guardar tarjeta 
	$('#addtarje').click(function() {
		var numbtarj = $('numbtar').value();
	});


	function guardar()
	{
		// Guardamos el nombre y apellido en la base de datos del navegador
		var mail = localStorage.setItem("nombre", document.getElementById("nombre").value);
		localStorage.setItem("apellido", document.getElementById("apellido").value);
 
		mostrarDatos();
	}

	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}',
		type: 'GET',
		dataType: 'json',
	//	data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});