function probarnombre() {
    saludar();
    saludarPersona("Juan");
    saludarJugador("Cristiano","CR7");
}

function probarsaludarpersona() {
    let cmpNombre;
    let nombre;
    cmpNombre=document.getElementById("txtnombre");
    nombre=cmpNombre.value;
    saludarPersona(nombre);
}

function probarsaludarjugador() {
    let cmpNombre;
    let nombre;
    let cmpApodo;
    let apodo;
    cmpNombre = document.getElementById("txtnombre");
    nombre = cmpNombre.value;
    cmpApodo = document.getElementById("txtapodo");
    apodo = cmpApodo.value;
    saludarJugador(nombre + ", " + apodo);
}

function saludarPersona(name) {
    console.log("hola "+name);
}

function saludar() {
    console.log("hola");  
}

function saludarJugador(nombre, alias) {
    console.log("hola "+nombre +", "+alias)
}

function testsaludaramigo() {
    let cmpNombre;
    let nombre;
    let cmpApellido;
    let apellido;
    let cmpApodo;
    let apodo;
    cmpNombre = document.getElementById("txtnombre");
    nombre = cmpNombre.value;
    cmpApellido = document.getElementById("txtApellido");
    apellido = cmpApellido.value;
    cmpApodo = document.getElementById("txtapodo");
    apodo = cmpApodo.value;
    saludarAmigo(nombre, apellido, apodo);
}

function saludarAmigo(nombre, apellido, apodo) {
    console.log("hola " + nombre + " " + apellido + " " + apodo);
}

