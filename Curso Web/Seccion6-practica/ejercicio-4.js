function holaMundo(value){
    // tamaño del mensaje
    var sizeMsj = value.length; 
    //separo el mensaje en caracteres
    var mensaje = value.split('');
    // declarando variable para guardar volteado
    let mensajeVolteado = "";
    console.log(mensaje);
    for (var i = sizeMsj - 1; i >=  0; i--) {
        mensajeVolteado += mensaje[i];
    }

    alert("mensaje: "+mensajeVolteado);
}