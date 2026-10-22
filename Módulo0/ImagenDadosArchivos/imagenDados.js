let puntos = 0;
let lanzamientos = 5;

function modificarPuntos(numero) {
    puntos = puntos + numero;
    cambiarTexto("lblpuntos",puntos);
    if (puntos > 20) {
        cambiarTexto("lblganador","GANASTE!!!");
        limpiar();
    }
}

function modificarLanzamientos() {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblintentos",lanzamientos)
    if (lanzamientos == 0) {
        cambiarTexto("lblganador","PERDISTE!!!")
        limpiar()
    }
}

function limpiar() {
    puntos = 0;
    lanzamientos = 5;
}

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
}

//función de cara de dado, recibe el número que quiere mostrar y muestra la imágen correspondiente al númnero que sigue
function mostrarCara(numero) {
    if (numero == 1) { // == se compara, = se asigna
        cambiarImagen("imgDado","dados1.png");
    } else if(numero == 2){
        cambiarImagen("imgDado","dados2.png");
    }else if (numero == 3) {
        cambiarImagen("imgDado","dados3.png");
    }else if (numero == 4) {
        cambiarImagen("imgDado","dados4.png");
    }else if (numero == 5) {
        cambiarImagen("imgDado","dados5.png");
    }else if (numero == 6) {
        cambiarImagen("imgDado","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}