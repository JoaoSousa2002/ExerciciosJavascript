
function CalcularMedia() {

var Nota1 = Number(document.getElementById("Nota01").value)
var Nota2 = Number(document.getElementById("Nota02").value)

var MediaFinal = (Nota1 + Nota2) / 2

document.getElementById("ResultadoMedia").innerText = MediaFinal.toFixed(2)

}