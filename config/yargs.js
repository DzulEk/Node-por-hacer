/**
 * 
 *  Configuración de Yargs
 * 
 */

const descripcion = {
    alias: 'd',
    demand: true
};

const completado = {
    alias: 'c',
    default: true
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista de pendientes.', {
        descripcion
    })
    .command('listar', 'Imprime en consola las tareas pendientes.')
    .help()
    .argv;

module.exports = {
    argv
}