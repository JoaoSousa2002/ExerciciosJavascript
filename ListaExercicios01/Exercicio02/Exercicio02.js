const TaxaDeServico = 0.10  //10%

function CalcularTaxa(){

    // Ele está recebendo os valores como string, então é necessario usar o Numer() para transformar em number
    var QuantidadeClientes = Number(document.getElementById("InputQTDclientes").value)
    var ValorTotal = Number(document.getElementById("InputValorTotal").value)

    var ValorPosTaxa = Number(ValorTotal + (ValorTotal * TaxaDeServico))
    var TotalDivido = Number(ValorPosTaxa/QuantidadeClientes)
    
    document.getElementById("Resultado").innerText = "Dividido por " + QuantidadeClientes + ": R$" + TotalDivido.toFixed(2)
    document.getElementById("Resultado_Valor").innerText = "Resultado Valor final + Taxa de 10%: R$" + ValorPosTaxa
}