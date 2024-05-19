/**
 * Función que evalúa si una cadena es un palíndromo
 * @param {string} cadena - La frase a evaluar
 * @returns {string} - El resultado de la evaluación
 */
function palindromo(cadena) {
  var resultado = "La frase ingresada \"" + cadena + "\". \n";
  var cadenaOriginal = cadena.toLowerCase();
  var letrasEspacios = cadenaOriginal.split("");
  var cadenaSinEspacios = "";

  // Eliminar espacios de la cadena
  for (var i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
  var iguales = true;

  // Comparar la cadena original con la invertida
  for (var i in letras) {
    if (letras[i] != letrasReves[i]) {
      iguales = false;
      break;
    }
  }

  if (iguales) {
    resultado += " Es un palíndromo.";
  } else {
    resultado += " No es un palíndromo.";
  }

  return resultado;
}

/**
 * Función que se ejecuta al pulsar el botón
 * Evalúa la frase del formulario y muestra el resultado en un párrafo
 */
function evaluarPalindromo() {
  var cad = document.getElementById("frase").value;
  var resultado = palindromo(cad);
  document.getElementById("resultado").innerText = resultado;
}
