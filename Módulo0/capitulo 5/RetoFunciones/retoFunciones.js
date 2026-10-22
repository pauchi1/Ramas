function sumar(num1, num2, num3) {
    let resultado;
    resultado = num1 + num2 + num3;
    return resultado;
}

function obtenerInfo(nombre, apellido, profesion) {
    return nombre + " " + apellido + " - " + profesion;
}

function mostrarResultado(sumando1, sumando2, resultado) {
    console.log("El resultado de sumar 10 + 5 es 15");
}

function hackearNasaEnPelicula() {
    console.log("Hackeando nasa 0%");
    console.log("Hackeando nasa 20%");
    console.log("Hackeando nasa 40%");
    console.log("Hackeando nasa 60%");
    console.log("Hackeando nasa 80%");
    console.log("Hackeando nasa 90%");
    console.log("Hackeando nasa 99%");
    console.log("La nasa ha sido hackeada");
}

function calcularEdad(anio) {
    let anioActual;
    let edad;
    anioActual = new Date().getFullYear();
    edad = anioActual - anio;
    return edad;
}

function calcularIVA(precioSinIva) {
    let iva;
    let totalConIVA;
    iva = (precioSinIva*12)/100;
    totalConIVA = iva + precioSinIva;
    return totalConIVA
}

function repasar() {
    console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada");
}

function repasarMas() {
    return "En este punto debemos estar super claros en crear funciones";
}

function llamarAtencion(nombre, mensaje) {
    let mensajeCompleto;
    mensajeCompleto = nombre + " " + mensaje + " !!";
    alert(mensajeCompleto);
    return mensajeCompleto;
}