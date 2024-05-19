const fs = require('fs');


const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    const id = citas.length + 1; //me gusta mas secuencial
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log('Se deben llenar todos los parámetros');
        return;
    }
    citas.push({ id, nombre, edad, animal, color, enfermedad }); 
    fs.writeFileSync('citas.json', JSON.stringify(citas)); 
    console.log(citas);
};

const revisar = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    console.log(citas)
}

module.exports = {registrar, revisar}