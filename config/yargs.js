const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea a actualizar'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca la tarea como completada'
};

const argv = require('yargs')
    .command('crear', 'Crea un nuevo registro', {
        descripcion
    })
    .command('actualizar', 'Actualiza un registro seleccionado', {
        descripcion,
        completado
    })
    .command('borrar','Borra una tarea.',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};