sumar=function(){
    let cmpCaja1;
    let valor1;
    let cmpCaja2;
    let valor2;
    let resultado;
    let valor1entero;
    let valor2entero;
    let cmpresultado;
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //tranformar valor 1 y valor 2 a entero
    valor1entero=parseInt(valor1);
    valor2entero=parseInt(valor2);
    //3.Sumar los dos valores
    resultado = valor1entero + valor2entero;
    //4.Mostrar el valor en pantalla
    cmpresultado=document.getElementById("lblResultado");
    cmpresultado.innerText="Resultado "+resultado;
}

restar=function(){
    let cmpCaja1;
    let valor1;
    let cmpCaja2;
    let valor2;
    let resultado;
    let valor1entero;
    let valor2entero;
    let cmpresultado;
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //tranformar valor 1 y valor 2 a entero
    valor1entero=parseInt(valor1);
    valor2entero=parseInt(valor2);
    //3.Restar los dos valores
    resultado = valor1entero - valor2entero;
    //4.Mostrar el valor en pantalla
    cmpresultado=document.getElementById("lblResultado");
    cmpresultado.innerText="Resultado "+resultado;
}

//dividir: / y multiplicar: *

dividir=function(){
    let cmpCaja1;
    let valor1;
    let cmpCaja2;
    let valor2;
    let resultado;
    let valor1entero;
    let valor2entero;
    let cmpresultado;
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //tranformar valor 1 y valor 2 a entero
    valor1entero=parseInt(valor1);
    valor2entero=parseInt(valor2);
    //3.dividir los dos valores
    resultado = valor1entero / valor2entero;
    //4.Mostrar el valor en pantalla
    cmpresultado=document.getElementById("lblResultado");
    cmpresultado.innerText="Resultado "+resultado;
}

multiplicar=function(){
    let cmpCaja1;
    let valor1;
    let cmpCaja2;
    let valor2;
    let resultado;
    let valor1entero;
    let valor2entero;
    let cmpresultado;
    //1.Recuperar el valor de la primera caja de texto
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;
    //2.Recuperar el valor de la segunda caja de texto
    cmpCaja2=document.getElementById("txtValor2");
    valor2=cmpCaja2.value;
    //tranformar valor 1 y valor 2 a entero
    valor1entero=parseInt(valor1);
    valor2entero=parseInt(valor2);
    //3.multiplicar los dos valores
    resultado = valor1entero * valor2entero;
    //4.Mostrar el valor en pantalla
    cmpresultado=document.getElementById("lblResultado");
    cmpresultado.innerText="Resultado "+resultado;
}

function limpiar() {
    let cmpCaja1;
    let cmpCaja2;
    let cmpresultado;

    cmpCaja1 = document.getElementById("txtValor1");
    cmpCaja2 = document.getElementById("txtValor2");
    cmpresultado = document.getElementById("lblResultado");

    cmpCaja1.value = 0;
    cmpCaja2.value = 0;

    cmpresultado.innerText = "Resultado: ";
}