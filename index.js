const {registrar, revisar} = require ('./operaciones.js')

const [movimiento, id, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if(movimiento === "registrar"){
    registrar(id, nombre, edad, animal, color, enfermedad)
}
if(movimiento === "revisar"){
    revisar()
}

//comandos ejecutados en node "node index.js registrar mario "9 años" perro negro alzeimer" "node index.js registrar Benito "2 años" perro blanco vomitos" "node index.js revisar"

