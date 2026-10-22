//Crear una funcion llamada convertirEnPesosMx
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Mexicanos
function convertirEnPesosMx(dolares) {
    let pesosMexicanos;
    pesosMexicanos = dolares * 17.99;
    return pesosMexicanos;
}

function convertirEnEuros(dolares) {
    let Euros;
    Euros = dolares * 1.16;
    return Euros; 
}

function convertirEnPesosColombianos(dolares) {
    let pesosColombianos;
    pesosColombianos = dolares * 0.00032;
    return pesosColombianos;
}

function mostrarPesosMx() {
    let cmpValor;
    let valor;
    let valorFloat;
    let valorPesosMexicanos;
    let cmpResultado;
    let resultadoFix;
    let cmpMoneda;
    let cmpImagenBandera;
    
    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorPesosMexicanos = convertirEnPesosMx(valorFloat);
 
    resultadoFix = valorPesosMexicanos.toFixed(2);

    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFix;

    cmpMoneda = document.getElementById("lblMoneda");
    lblMoneda.innerHTML="PESOS MEXICANOS";
    
    cmpImagenBandera = document.getElementById("imgBandera");
    cmpImagenBandera.src ="banderaMx.png";
}

function mostrarPesosCol() {
    let cmpValor;
    let valor;
    let valorFloat;
    let valorPesosColombianos;
    let resultadoFix;
    let cmpResultado;
    let cmpMoneda;
    let imgBandera;

    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorPesosColombianos = convertirEnPesosColombianos(valorFloat);

    resultadoFix = valorPesosColombianos.toFixed(4);
    
    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFix;

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "PESOS COLOMBIANOS";

    imgBandera = document.getElementById("imgBandera");
    imgBandera.src = "banderaColombia.png";
}

function MonstrarEuros() {
    let cmpValor;
    let valor;
    let valorFloat;
    let valorEuros;
    let resultadoFix;
    let cmpResultado;
    let cmpMoneda;
    let imgBandera;

    cmpValor = document.getElementById("txtValor");
    valor = cmpValor.value;
    valorFloat = parseFloat(valor);
    valorEuros = convertirEnEuros(valorFloat);

    resultadoFix = valorEuros.toFixed(2);

    cmpResultado = document.getElementById("lblValor");
    cmpResultado.innerHTML = resultadoFix;

    cmpMoneda = document.getElementById("lblMoneda");
    cmpMoneda.innerHTML = "EUROS";

    imgBandera = document.getElementById("imgBandera");
    imgBandera.src = "unionEuropea.jpg";
}