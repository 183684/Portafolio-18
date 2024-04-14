function multi() {
  var num = prompt('Ingresa un numero(1-10)', '');  
  num = parseInt(num);  
  var tablaHTML = "<table>";  
  for (var x = 1; x <= 10; x++) {  
    var tabla = num * x;  
    tablaHTML += "<tr><td>" + num + " x " + x + " = </td><td class='resultado'>" + tabla + "</td></tr>";  
  }  
  tablaHTML += "</table>";  
  document.getElementById("tablaMultiplicar").innerHTML = tablaHTML;
}
