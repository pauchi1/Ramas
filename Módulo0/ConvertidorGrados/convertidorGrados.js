//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit
function convertirCelsiusAFarenheit(grados) {
    let farenheit;
    farenheit = (grados * 9/5) + 32;
    return farenheit;
}

function mostrarConversion() {
    let cmpCelsius;
    let txtValor;
    let valorFloat;
    let resultado;
    let resultadoFix;
    let cmpfarenheit;
    let imgOk;

    cmpCelsius = document.getElementById("txtCelsius");
    txtValor = cmpCelsius.value;
    valorFloat = parseFloat(txtValor);
    resultado = convertirCelsiusAFarenheit(valorFloat);

    resultadoFix = resultado.toFixed(2);

    cmpfarenheit = document.getElementById("lblFarenheit");
    cmpfarenheit.innerHTML = resultadoFix;

    imgOk = document.getElementById("imgBandera");
    imgOk.src = "ok.jpg";
}

function reiniciar() {
    let reinicioResultado;
    let imgPensando;

    reinicioResultado = document.getElementById("lblFarenheit");
    reinicioResultado.innerHTML = "";
    
    imgPensando = document.getElementById("imgBandera");
    imgPensando.src = "pensando.jpg";
}
