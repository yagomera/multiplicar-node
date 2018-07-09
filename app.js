//const  multiplicar = require('./multiplicar/multiplicar.js');

const argv = require('./config/yargs.js').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let base = 'a6';



let comando = argv._[0];
base = argv.base;
limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(base, limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(base, limite)
            .then(archivo => console.log(colors.green(archivo)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');

}
console.log(argv.base);
console.log(argv.limite);

//base = parametro.split('=')[1];




//console.log(multiplicar);

//multiplicar.crearArchivo




console.log('Salida');

//console.log(module);