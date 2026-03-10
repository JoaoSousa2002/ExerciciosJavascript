function Calcular() {
    var ValorCompra = Number(document.getElementById("ValorCompra").value);

    if (VerificarMetodoPagamento() == 1) {
        document.getElementById("Resultado").innerText = ValorCompra - (ValorCompra * 0.10)
    } else {
        var QTDparcelas = Number(document.getElementById("qtdParcelas").value); 
        document.getElementById("Resultado").innerText = ValorCompra / QTDparcelas
    }

}

//Essa função serve apenas para mostrar ou não as parcelas
function VerificarMetodoPagamento(){

        //Recebe o valor do input do grupo/nome "Pagamento" que estiver marcado --> "checked"
    const OpcaoSelecionada = document.querySelector("input[name=Pagamento]:checked").value;
    const divParcelas = document.getElementById('parcelas');

    if (OpcaoSelecionada === 'aPrazo') {
        divParcelas.style.display = 'block'; // mostra
        return 0;
    } else {
        divParcelas.style.display = 'none';  // esconde
        return 1;
    }

}
