function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

	function encriptar(){
	let texto = document.getElementById('input-text').value.toLowerCase();
	let tituloMensaje = document.getElementById("text-der");
	let parrafo = document.getElementById("text-der2");
	let img = document.getElementById("img-der");

	let textoCifrado = texto
	.replace(/e/gi,"enter")
	.replace(/i/gi,"imes")
	.replace(/a/gi,"ai")
	.replace(/o/gi,"ober")
	.replace(/u/gi,"ufat");

	if(texto.length != 0){
		texto = textoCifrado;
		tituloMensaje.style.display = "none";
		parrafo.innerHTML = textoCifrado;
		img.style.display = "none";
		document.getElementById("copiar").style.display = "show";
		document.getElementById("copiar").style.display = "inherit";
		limpiar();
	} else{
		tituloMensaje.style.display = "inline-block";
		img.style.display = "inline-block";
		alert("Debes ingresar algún texto");
	}

	}
	
function limpiar() {
    document.getElementById("input-text").value = "";
}

function desencriptar(){
	let texto = document.getElementById('input-text').value.toLowerCase();
	let tituloMensaje = document.getElementById("text-der");
	let parrafo = document.getElementById("text-der2");
	let img = document.getElementById("img-der");

	let textoCifrado = texto
	.replace(/enter/gi,"e")
	.replace(/imes/gi,"i")
	.replace(/ai/gi,"a")
	.replace(/ober/gi,"o")
	.replace(/ufat/gi,"u");

	if(texto.length != 0){
		texto = textoCifrado;
		tituloMensaje.style.display = "none";
		parrafo.innerHTML = textoCifrado;
		img.style.display = "none";
		document.getElementById("copiar").style.display = "show";
		document.getElementById("copiar").style.display = "inherit";
		limpiar();
	} else{
		tituloMensaje.style.display = "inline-block";
		img.style.display = "inline-block";
		alert("Debes ingresar algún texto");
	}

}

function copy(){
	var contenido = document.querySelector("#text-der2");
	contenido.select();
	document.execCommand("copy");
	alert("¡Texto copiado!");
}