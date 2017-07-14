/* Holiii acá va tu código también */
$(document).ready(function () {
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