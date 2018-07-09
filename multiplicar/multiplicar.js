const fs = require('fs');
const colors = require('colors');

//LISTAR FICHERO
let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        reject('El valor introducido No es un numero');
        return;
    }
    if (!Number(limite)) {
        reject('El valor limite introducido No es un numero');
        return;
    }

    let contenido = '';
    for (let i = 1; i * base <= limite; i++) {

        contenido += (` ${base} * ${i} =  ${base * i }\n`);
    }
    console.log(colors.red(contenido));
}

//CREAR FICHERO
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido No es un numero');
            return;
        }


        let contenido = '';


        for (let i = 1; i * base <= limite; i++) {

            contenido += (` ${base} * ${i} =  ${base * i }\n`);
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });




    })

}


module.exports = {

    crearArchivo,
    listarTabla

}