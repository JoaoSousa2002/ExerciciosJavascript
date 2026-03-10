
// const Teste = document.querySelector("h1")
// const OutroTeste = document.querySelector("p")

// Teste.textContent = "Hello world"
// OutroTeste.textContent = "Esse é um teste de Javascript"

// var Numero = document.querySelector("input")

// Teste.textContent = Numero

function Next() {
    // Cria variavel LOCAL, a variavel irá receber o valor que vier da tag <input> no HTML com id "Numero" e transforma a variavel em number com o Number()
    let Valor = Number(document.getElementById("Numero").value);

    // Coloca o texto na tag <p> com id "Resultado". Concatena a string com numero com o operador +
    document.getElementById("Resultado").innerText = "Resultado: " + (Valor - 1) + " e " + (Valor + 1)
}