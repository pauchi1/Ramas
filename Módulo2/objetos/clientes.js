let clientes = [
    {cedula: "9394378541", nombre: "Carito", edad: 20},
    {cedula: "5463614332", nombre: "Ado", edad: 50},
    {cedula: "5435436541", nombre: "Kevin", edad: 22}
];

function agregarCliente(cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("cliente agregado");
        mostrarClientes();
    } else {
        alert("ya existe el cliente con la cedula: "+ cliente.cedula);
    }
}

function guardarCambios() {
    let valorCedula = recuperaraTexto("txtCedula");
    let valorNombre = recuperaraTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let datoCliente = {};
    datoCliente.cedula = valorCedula;
    datoCliente.nombre = valorNombre;
    datoCliente.edad = valorEdad;
    agregarCliente(datoCliente);
    modificarCliente(datoCliente);

    mostrarClientes();
}

function modificarCliente(cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

function crearCliente() {
    let valorCedula = recuperaraTexto("txtCedula");
    let valorNombre = recuperaraTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);
}

function ejecutarBusqueda() {
    let valorCedula = recuperaraTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);

    if (cliente == null) {
        alert("cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}

function buscarCliente(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (i=0;i<clientes.length;i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

function mostrarClientes() {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>"+
    "<th>Cedula</th>"+
    "<th>Nombre</th>"+
    "<th>Edad</th>"+
    "</tr>";
    let elementoCliente;
    for (i=0; i<clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla += "<tr><td>"+ elementoCliente.cedula +"</td>"+ 
        "<td>"+ elementoCliente.nombre +"</td>"+
        "<td>"+ elementoCliente.edad +"</td>"+
        "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}