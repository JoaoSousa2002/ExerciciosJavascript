function Pensar(){

    let numero = Number(document.getElementById("ValorUser").value);
    
    if (numero % 2 == 0) {
        document.getElementById("Resultado").innerText = "O número é par";
    } else {
        document.getElementById("Resultado").innerText = "O número é ímpar";
    }
}