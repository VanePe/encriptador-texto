let textarea = document.getElementById('textoAEncriptar');
let enseñarTexto = document.querySelector(".mostrar_texto_encriptado");

// Función para llamar al botón encriptar
function btnEncriptar() {

    console.log(textarea.value);
    if (textarea && textarea.value) {  // Asegúrate de que textarea exista y tenga un valor
        let texto = textarea.value.toLowerCase(); // Convertir el texto a minúsculas
        let textoEncriptado = encriptar(texto);
        enseñarTexto.value = textoEncriptado;
        textarea.value = ""; // Limpiar el textarea
    } else {
        console.error("El textarea no se encontró o no tiene valor.");
    }
}

// Función para encriptar
function encriptar(textoEntrada) {
    let vocales = ["a", "e", "i", "o", "u"];
    let encriptado = textoEntrada;

    for (let i = 0; i < vocales.length; i++) {
        switch (vocales[i]) {
            case "a":
                encriptado = encriptado.replaceAll(vocales[i], "ai");
                break;
            case "e":
                encriptado = encriptado.replaceAll(vocales[i], "enter");
                break;
            case "i":
                encriptado = encriptado.replaceAll(vocales[i], "imes");
                break;
            case "o":
                encriptado = encriptado.replaceAll(vocales[i], "ober");
                break;
            case "u":
                encriptado = encriptado.replaceAll(vocales[i], "ufat");
                break;
        }
    }

    return encriptado;
}
