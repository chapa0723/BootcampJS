/*
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos
*/

class Estudiante {
    nombre
    asignaturas = ["Javascript", "HTML", "CSS"]
    constructor (nom){
        this.nombre=nom
    }
    obtenDatos (){
        return(`El estudiante ${this.nombre} está inscripto a las agnaturas ${this.asignaturas}`)
    }
}

const estudiante = new Estudiante("David")
console.log(estudiante.obtenDatos())
console.log(estudiante.nombre)
console.log(estudiante.asignaturas)