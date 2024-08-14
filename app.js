let textarea = document.getElementById('textoAEncriptar');
let enseñarTexto = document.getElementById('textoProcesado');

// Función para llamar al botón encriptar
function btnEncriptar() {

    if (textarea && textarea.value) {  // Asegúrate de que textarea exista y tenga un valor
        let texto = textarea.value.toLowerCase(); // Convertir el texto a minúsculas
        let textoEncriptado = encriptar(texto);
        enseñarTexto.value = textoEncriptado;
        textarea.value = ""; // Limpiar el textarea
        document.getElementById("muneco").style.display = "none";
        document.getElementById("mensajeNegativa").style.display = "none";
        document.getElementById("parrafo").style.display = "none";
        document.getElementById("textoProcesado").style.display = "block";
        document.getElementById("botonCopiar").style.display = "block";
    } else {
        alert("No ha ingresado un valor.");
    }
}

//Función para llamar al botón de desencriptar
function btnDesencriptar(){
    if(textarea && textarea.value){
        let texto = textarea.value.toLowerCase();
        let textoEncriptado = desencriptar(texto);
        enseñarTexto.value = textoEncriptado;
        textarea.value = "";
    }else{
        alert("No ha ingresado un valor.");
    }
}

// Función para encriptar
function encriptar(textoEntrada) {
    let vocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let encriptado = textoEntrada;

    for(let i = 0; i < vocales.length; i++){
        if(encriptado.includes(vocales[i][0])){
            encriptado = encriptado.replaceAll(vocales[i][0], vocales[i][1]);
        }
    }
    
    return encriptado;
}


//Función para desencriptar
function desencriptar(textoEntrada){
    let llaves = ["ai", "enter", "imes", "ober", "ufat"];
    let desencriptado = textoEntrada;

    for(let i = 0; i < llaves.length; i++){
        switch (llaves[i]) {
            case "ai":
                desencriptado = desencriptado.replaceAll(llaves[i], "a");
                break;
            case "enter":
                desencriptado = desencriptado.replaceAll(llaves[i], "e");
                break;
            case "imes":
                desencriptado = desencriptado.replaceAll(llaves[i], "i");
                break;
            case "ober":
                desencriptado = desencriptado.replaceAll(llaves[i], "o");
                break;
            case "ufat":
                desencriptado = desencriptado.replaceAll(llaves[i], "u");
                break;
        }
    }

    return desencriptado;
}

function btnCopiar(){
    let texto = enseñarTexto.value;

    navigator.clipboard.writeText(texto);
}
