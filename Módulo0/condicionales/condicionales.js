function calcularTasaInteres(ingresoAnual) {
    let ingreso;
    let tasa;
    ingreso = parseFloat(ingresoAnual);
    if (ingreso < 300000) {
        tasa = 16;
    } else if (ingreso >= 300000 && ingreso < 500000) {
        tasa = 15;
    } else if (ingreso >= 500000 && ingreso < 1000000) {
        tasa = 14;
    } else if (ingreso >= 1000000 && ingreso < 2000000) {
        tasa = 13;
    } else if (ingreso >= 2000000) {
        tasa = 12;
    }
    return tasa
}

function calcularCapacidadPago(edad, ingresos, egresos) {
    let ingresosFloat;
    let egresosFloat;
    let edadInt;
    let sobrante;
    let cuotaMensual;
    edadInt = parseFloat(edad);
    ingresosFloat = parseFloat(ingresos);
    egresosFloat = parseFloat(egresos);
    sobrante = ingresosFloat - egresosFloat;
    if (edadInt > 50) {
        cuotaMensual = sobrante * 0.30;
    } else {
        cuotaMensual = sobrante * 0.40;
    }
    return cuotaMensual;
}

function determinarColesterolLDL(nivelColesterol) {
    let Colesterol = parseFloat(nivelColesterol);
    let Resultado;
    if (Colesterol < 100) {
        Resultado = "Colesterol por debajo de los limites saludables";
    } else if (Colesterol >= 100 && Colesterol <= 129) {
        Resultado = "Colesterol normal de lo establecido";
    } else if (Colesterol >= 130 && Colesterol <= 159) {
        Resultado = "Sobrepasa los limites saludables";
    } else if (Colesterol >= 160 && Colesterol <= 189) {
        Resultado = "colesterol alto de los limites saludables";
    } else {
        Resultado = "Colesterol muy alto de los limites saludables";
    }
    return categoria;
}

function validarClave(clave) {
    let codigo;
    codigo = clave.length;
    if (codigo >= 8 && codigo <=16) {
        return true;
    } else {
        return false;
    }
    
}

function esMayuscula(caracter) {
    let mayuscula;
    mayuscula = caracter.catCodeAt(0);
    if (mayuscula >= 65 && mayuscula <= 90) {
        return true;
    } else {
        return false;
    }
}

function esMinuscula(caracter) {
    let minuscula;
    minuscula = caracter.catCodeAt(0);
    if (minuscula >= 97 && minuscula <= 122 || minuscula == 130) {
        return true;
    } else if (minuscula >= 160 && minuscula <= 163) {
        return true;
    }  else {
        return false;
    }
}

function esDigito(caracter) {
    let numero = caracter.charCodeAt(0);
    if (numero >= 48 && numero <= 57) {
        return true;
    } else {
        return false;
    }
}

function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    let notaMath;
    let notaFis;
    let notaGeo;
    let Resultado;
    notaMath = parseFloat(notaMatematica);
    notaFis = parseFloat(notaFisica);
    notaGeo = parseFloat(notaGeometria);
    if (notaMath > 90 || notaFis > 90 || notaGeo > 90) {
        return true;
    } else {
        retun false;
    }
}

function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
    let notaMath;
    let notaFis;
    let notaGeo;
    let Resultado;
    notaMath = parseFloat(notaMatematica);
    notaFis = parseFloat(notaFisica);
    notaGeo = parseFloat(notaGeometria);
    if (notaMath > 90 || notaFis > 90 && notaGeo > 80) {
        return true;
    } else {
        retun false;
    }
}

function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    let notaMath;
    let notaFis;
    let notaGeo;
    let Resultado;
    notaMath = parseFloat(notaMatematica);
    notaFis = parseFloat(notaFisica);
    notaGeo = parseFloat(notaGeometria);
    if (notaMath > 90 || notaFis > 90 || notaGeo > 90) {
        return true;
    } else if (notaFis > notaMath) {
        return true;
    } else {
        retun false;
    }
}

