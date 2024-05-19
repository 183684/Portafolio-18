
function palindromo(cadena) {
  var resultado = "La frase ingresada \"" + cadena + "\". \n";
  var cadenaOriginal = cadena.toLowerCase();
  var letrasEspacios = cadenaOriginal.split("");
  var cadenaSinEspacios = "";

  for (var i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
  var iguales = true;

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

function evaluarPalindromo() {
  var cad = document.getElementById("frase").value;
  var resultado = palindromo(cad);
  document.getElementById("resultado").innerText = resultado;
}
