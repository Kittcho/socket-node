const { io } = require('../server');

io.on('connection', (cliente) => {
    console.log('usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la página'
    });

    //revisar si el cliente se desconecta
    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);

        // if (msj.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio Mal !!!!!!!!!!!'
        //     });
        // }

    });

});