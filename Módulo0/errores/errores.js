sumar=function(valor1,valor2){
    let resultado=valor1+valor2;
    return resultado;
}
promediar=function(valor1,valor2){
    let total=valor1+valor2;
    let promedio=total/2;
    return promedio;
}
probar=function(){

    let cmpValor1=document.getElementById("txtValor1");
    valor1=cmpValor1.value;
    let resultado1=parseInt(valor1);
    let cmpValor2=document.getElementById("txtValor2");
    valor2=cmpValor2.value;
    let resultado2=parseInt(valor2);
    let suma=sumar(resultado1, resultado2);
    let cmpSuma=document.getElementById("lblSuma");
    cmpSuma.innerText=suma;
}

promediar = function(valor1, valor2) {
    let total = valor1 + valor2;
    let promedio = total / 2;
    return promedio;
}

function mostrarPromedio() {
    let cmpValor1;
    let cmpValor2;
    let valor1;     
    let valor2;      
    let resultado1;
    let resultado2;
    let promedio;
    let promediofinal;

    cmpValor1 = document.getElementById("txtValor1");
    valor1 = cmpValor1.value;
    resultado1 = parseInt(valor1);

    cmpValor2 = document.getElementById("txtValor2");
    valor2 = cmpValor2.value;
    resultado2 = parseInt(valor2);

    promedio = promediar(resultado1, resultado2);

    promediofinal = document.getElementById("lblPromedio");
    promediofinal.innerText = promedio;
}
