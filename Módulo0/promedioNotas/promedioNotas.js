function calcularPromedioNotas() {
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    let promedioFix;
    nota1 = recuperarFlotante("nota1");
    nota2 = recuperarFlotante("nota2");
    nota3 = recuperarFlotante("nota3");
    promedio = calcularPromedio(nota1,nota2,nota3);
    promedioFix = promedio.toFixed(2);
    cambiarTexto("lblpromedio",promedioFix);
    if (promedioFix < 5 && promedioFix > 0) {
        cambiarTexto("lbltexto","REPROBADO");
        cambiarImagen("imgResultado","triste2.gif");
    } else if (promedioFix > 5 && promedioFix <= 10) {
        cambiarTexto("lbltexto","EXCELENTE");
        cambiarImagen("imgResultado","Felizz.gif");
    } else {
        cambiarTexto("lbltexto","DATOS INCORRECTOS");
        cambiarImagen("imgResultado","confundido.gif");
    }
}