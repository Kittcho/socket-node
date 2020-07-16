var socket = io();

// los que son on son para escuchar peticiones
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit es para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

// escuchar información
socket.on('enviarMensaje', function(msj) {
    console.log(msj);

});