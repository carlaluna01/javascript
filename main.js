let nombreCompleto = prompt('Ingrese su nombre y apellido');
let saborPreparacion = prompt('Ingrese su sabor preferido: Salado o Dulce');
let metodoPago =  prompt('Ingrese el método de pago que va a utilizar');
let procesoCompra
let finalizarCompra



if (nombreCompleto !== '') {
    alert('Hola, ' + nombreCompleto + '. ' + 'Aquí encontrarás una lista de preparaciones dulces y saladas que mejor se adapte a tu gusto.')
}

if (saborPreparacion !== '') {
    alert('Seleccionó el sabor ' + '' + saborPreparacion);
}

if (metodoPago !== '') {
    alert('Seleccionó el método de pago ' + '' + metodoPago);
}


alert('Comprador:' + ' ' + nombreCompleto + '. ' + 'El sabor elegido:' + ' ' + saborPreparacion + ' y el método de pago es:' + ' ' + metodoPago);

