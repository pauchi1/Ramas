function calcularDescuento(valorReal, porcentajeDescuento){
    let valorDescuento;
    let total;
    valorDescuento = valorReal * porcentajeDescuento / 100;
    total = valorReal - valorDescuento;
    return total;
}

function descontar() {
    let cmpMonto;
    let monto;
    let montoEntero;
    let cmpDescuento;
    let descuento;
    let descuentoEntero;
    let total;
    let cmptotal;
    cmpMonto=document.getElementById("txtMonto");
    monto=cmpMonto.value;
    montoEntero=parseInt(monto);
    cmpDescuento=document.getElementById("txtDescuento");
    descuento=cmpDescuento.value;
    descuentoEntero=parseInt(descuento);
    total=calcularDescuento(montoEntero, descuentoEntero);
    cmptotal=document.getElementById("lblTotal");
    cmptotal.innerText=total;
}