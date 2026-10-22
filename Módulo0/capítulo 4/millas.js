function km() {
    let cmpCaja1;
    let valor1;
    let resultado;
    let valor1entero;
    let cmpresultado;
    cmpCaja1=document.getElementById("txtValor1");
    valor1=cmpCaja1.value;
    valor1entero=parseInt(valor1);
    resultado = valor1entero * 1.60934;
    cmpresultado=document.getElementById("lblResultado");
    cmpresultado.innerText=resultado+" Kilometros";
}
