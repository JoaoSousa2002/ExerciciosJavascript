function Calcular(){

    let Velocidade = Number(document.getElementById("ValorVelocidade").value);
    const VelocidadeMaxima = 80;

    // Se a velocidade informada for maior que a velocidade máxima e menor ou igual a 20% acima da velocidade máxima, o motorista recebe uma multa leve.
    if(Velocidade > VelocidadeMaxima && Velocidade <= (VelocidadeMaxima + VelocidadeMaxima *0.20)){
        document.getElementById("Resultado").innerText = "Multa leve";

    // Se a velocidade informada for maior que a velocidade máxima e maior ou igual a 20% acima da velocidade máxima, o motorista recebe uma multa grave.
    }else if(Velocidade > VelocidadeMaxima && Velocidade >= (VelocidadeMaxima + VelocidadeMaxima *0.20)){
        document.getElementById("Resultado").innerText = "Multa grave";

    }else{
        document.getElementById("Resultado").innerText = "Sem multa";
    }
}