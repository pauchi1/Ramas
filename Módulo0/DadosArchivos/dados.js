function jugar() {
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if (aleatorio>3) {
        console.log("ES MAYOR QUE 3");
        console.log("GANASTE");
    }else {
        console.log("ES MENOR A 3");
        console.log("ESTAS DE MALAS");
    }
}

function lanzarDado() {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDar;
    aleatorio = Math.random(); // entre 0 y 1
    numeroMultiplicado=aleatorio*6
    numeroEntero = parseInt(numeroMultiplicado); // entre 0 y 5
    valorDar = numeroEntero + 1; // entre 1 y 6
    return valorDar;
}