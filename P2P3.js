function verificarCadena() {
    var texto = document.getElementById("textoInput").value;
    var resultado = document.getElementById("resultado");

    if (texto.match(/[a-z]/) && texto.match(/[A-Z]/)) {
        resultado.textContent = "La cadena tiene ni mayúsculas ni minúsculas.";
    } else if (texto.match(/[a-z]/)) {
        resultado.textContent = "La cadena contiene solo minúsculas.";
    } else if (texto.match(/[A-Z]/)) {
        resultado.textContent = "La cadena contiene solo mayúsculas.";
    } 
}
