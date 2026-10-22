function probarAtributos() {
    let persona = {
        nombre: "Paulo" ,
        apellido: "Chiluisa" ,
        edad: 18,
        estaVivo: false
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("no esta vivo");
    } else {
        console.log("esta vivo");
    }
}

function modificarAtributos() {
    let cuenta = {
        numeros: "5485374671" ,
        saldo: 0.0 
    }
    console.log(cuenta.saldo);

    cuenta.saldo = 100;
    cuenta.saldo += 10;

    console.log(cuenta.saldo);
}

function crearClientes() {
    let cliente = {
        cedula: "1709347263",
        nombre: "Paulo"
    }
    let cliente1 = {}
    cliente1.nombre = "Ramiro";
    cliente1.apellido = "Ortiz";
    cliente1.cedula = "1794356423";
}

function probarIncrementarSaldo() {
    let cuenta = {
        numero: "2384754031" ,
        saldo: 40.00
    }
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

function incrementarSaldo(cuenta, monto) {
    cuenta.saldo += monto;
}

function probarDeterminarMayor() {
    let per1 = {
        nombre: "Daniel" ,
        edad: 45
    }
    let per2 = {
        nombre: "Tyrza" ,
        edad: 48
    }
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("el mayor es: " + mayor.nombre);
    }
}

function determinarMayor(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2;
    } else {
        return null;
    }
}