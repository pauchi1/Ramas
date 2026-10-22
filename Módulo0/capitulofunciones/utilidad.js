function calcularUtilidad(ingresos, gastos) {
    let resultadoUtilidad;
    resultadoUtilidad=ingresos-gastos;
    return resultadoUtilidad;
}

function ejecutarUtilidad() {
    let cmpingreso;
    let ingresos;
    let ingresosEntero;
    let utilidad;
    let cmpegreso;
    let egresos;
    let egresosEntero;
    let cmpUtilidad;
    //1. recupera ingresos como entero
    cmpingreso=document.getElementById("txtingresos");
    ingresos=cmpingreso.value;
    ingresosEntero=parseInt(ingresos);
    //2. recuperar egresos como entero
    cmpegreso=document.getElementById("txtegresos");
    egresos=cmpegreso.value;
    egresosEntero=parseInt(egresos);
    //3. calular a calcularUtilidad
    utilidad=calcularUtilidad(ingresosEntero,egresosEntero);
    //4. mostrar en pantalla
    console.log("la utilidad es "+utilidad);
    cmpUtilidad=document.getElementById("lblutilidad");
    cmpUtilidad.innerText=utilidad;
}