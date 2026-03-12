function CalcularTriangulo(){
    let Valor01 = Number(document.getElementById("Valor01").value);
    let Valor02 = Number(document.getElementById("Valor02").value);
    let Valor03 = Number(document.getElementById("Valor03").value);

    if(Valor01 == Valor02 && Valor02 == Valor03){
        document.getElementById("Resultado").innerText = "É um triângulo equilátero";

    }else if(Valor01 == Valor02 || Valor02 == Valor03 || Valor01 == Valor03){
        document.getElementById("Resultado").innerText = "É um triângulo isósceles";
        
    }else{
        document.getElementById("Resultado").innerText = "É um triângulo escaleno";
    }
}