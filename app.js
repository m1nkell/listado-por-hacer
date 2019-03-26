const argv = require('./config/yargs').argv;

const colores = require('colors');

const llenado = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = llenado.crear(argv.d);
        console.log(tarea);
//        llenado.guardarDB();
        break;

    case 'listar':

        let listado = llenado.getListado();

        for(let tarea of listado){
            console.log(`========POR HACER==========`.green);
            console.log(`Tarea: `,tarea.descripcion);
            console.log(`Estado: `,tarea.completado);
            console.log(`============FIN============`.green);
        }

        llenado.getListado();

        break;

    case 'actualizar':

        let actualiza = llenado.actualizar(argv.descripcion,argv.completado);

        console.log(actualiza);

        break;

    case 'borrar':

        let borrado = llenado.borrar(argv.descripcion);

        console.log(borrado);

    break;

    default:
        console.log("Comando no reconocido.");
        break;

}