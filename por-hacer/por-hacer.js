// requires
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    // Se convierte a formato valido de json
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (err) {

        listadoPorHacer = [];

    }



}

const getListado = () => {

    cargarDB();

    return listadoPorHacer

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => (tarea.descripcion === descripcion));

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => (tarea.descripcion === descripcion));

    if (index >= 0) {

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return 'Tarea eliminada';

    } else {
        return 'Ocurrio un error';
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}