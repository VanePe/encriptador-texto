let textarea = document.querySelector("encriptar_input");
let enseñarTexto = document.querySelector("mostrar_texto_encriptado");

//Función para llamar al botón encriptar
function btnEncriptar(){
    let textoEncriptado = encriptar(textarea.value);
    enseñarTexto.value = textoEncriptado;
    textarea = " ";
}

//Función para encriptar
function encriptar(textoEntrada){

    let vocales = ["a", "e", "i", "o", "u"];
    textoEntrada = textoEntrada.toLowerCase();

    for(let i = 0; i < vocales.length; i++){
        switch(textoEntrada.includes(vocales[i])){
            case a:
                textoEntrada = textoEntrada.replaceAll(vocales[i], "ai");

            case e:
                textoEntrada = textoEntrada.replaceAll(vocales[i], "enter");

            case i:
                textoEntrada = textoEntrada.replaceAll(vocales[i], "imes");

            case o:
                textoEntrada = textoEntrada.replaceAll(vocales[i], "ober");

            case u:
                textoEntrada = textoEntrada.replaceAll(vocales[i], "ufat");
        }
    }

    return textoEntrada;
}