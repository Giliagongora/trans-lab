$(document).ready(function() {


    function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
    $("#login").click(function () {
        if (!ValidateEmail($("#mail").val())) {
            alert("Invalid email address.");
        }
        else{
            console.log("Valid email address.");
        }
    });

    
  
$("#login").click(function(){

	  if($("#pwd").val().length == ""){  
	  	alert("Ingresa tú contraseña")
	 }else if($("#pwd").val().length < 8){
	 	alert("Debes ingresar un minimo de 8 números")
	 } else if($("#pwd").val().length > 8){
	 	alert("Ingresaste demasiadas números")
	 } else if($("#pwd").val().length === 8){
	 	$("#login").attr("href","indexsaldo.html")
	 }

	});


});