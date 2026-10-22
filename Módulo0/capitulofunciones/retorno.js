function freir(alimento) {
    console.log("me llega "+alimento);
    console.log("le pongo en la sarten");
    console.log("listo!!");
    alimentofrito=alimento+" frito";
    return alimentofrito;
}

function probarfreir() {
    let comidalista;
    comidalista=freir("POLLITO");
    console.log(comidalista);
}

function probarfreircomida() {
    let cmpcomida;
    let comida;
    let resultadocomida;
    cmpcomida=document.getElementById("txtcomida");
    comida=cmpcomida.value;
    resultadocomida=freir(comida);
    console.log("he recibido "+resultadocomida);
}