// function encriptar(){
//     var texto = document.querySelector("#input-texto").value;
//     var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
//     //Ocultar la imagen y cambiar los textos
//     document.getElementById("msgImage").style.display = "none";
//     document.getElementById("msgTitle").textContent = "Texto Encriptado";
//     document.getElementById("msgSubTitle").textContent = textoCifrado;
// }

// function desencriptar(){
//     var texto = document.querySelector("#input-texto").value;
//     var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

//      //Ocultar la imagen y cambiar los textos
//      document.getElementById("msgImage").style.display = "none";
//      document.getElementById("msgTitle").textContent = "Texto Encriptado";
//      document.getElementById("msgSubTitle").textContent = textoCifrado;
// }

// var boton1 = document.querySelector("#btn-encriptar");
// boton1.onclick = encriptar;

// var boton2 = document.querySelector("#btn-desencriptar");
// boton2.onclick = desencriptar;

function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    
    // Ocultar la imagen y cambiar los textos
    document.getElementById("msgImage").style.display = "none";
    document.getElementById("msgTitle").textContent = "Texto Encriptado";
    document.getElementById("msgSubtitle").textContent = textoCifrado;

    // Mostrar el botón de copiar
    document.getElementById("btn-copiar").style.display = "inline-block";
}

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");
    
    // Ocultar la imagen y cambiar los textos
    document.getElementById("msgImage").style.display = "none";
    document.getElementById("msgTitle").textContent = "Texto Desencriptado";
    document.getElementById("msgSubtitle").textContent = textoCifrado;

    // Mostrar el botón de copiar
    document.getElementById("btn-copiar").style.display = "inline-block";
}

// Función para copiar el texto encriptado
function copiarTexto() {
    var textoEncriptado = document.getElementById("msgSubtitle").textContent;
    
    // Copiar al portapapeles
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

var botonCopiar = document.querySelector("#btn-copiar");
botonCopiar.onclick = copiarTexto;
