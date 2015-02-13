var sumando1;

function uno_binario(){
	document.getElementById("caja_resultado").innerHTML = "1";
}

function cero_binario(){
	document.getElementById("caja_resultado").innerHTML = "0";
}

function sumar(){
	if(document.getElementById("caja_resultado").innerHTML == "")
		return;
	sumando1 = document.getElementById("caja_resultado").innerHTML;
	document.getElementById("caja_resultado").innerHTML = "";
}

function result(){
	sumando2 = document.getElementById("caja_resultado").innerHTML;
	if (sumando2 == "")
		return;
	document.getElementById("caja_resultado").innerHTML = "Suma binaria: " + (parseInt(sumando1) + parseInt(sumando2)) % 2;
}