// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amigos
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const david = {
    nombre: "David",
    apellido: "Chaparro",
    edad: 29,
    altura: 1.8,
    eresDesarrollador: true
}
console.log(david)

const edad = david.edad
console.log(edad)

const juan = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 31,
    altura: 1.9,
    eresDesarrollador: true
}
const aGorila = {
    nombre: "Arnaldo",
    apellido: "Gorilon",
    edad: 30,
    altura: 1.7,
    eresDesarrollador: true
}
const amigos = [david, juan, aGorila]
console.log(amigos)

amigos.sort((a, b) => {return b.edad - a.edad})
console.log(amigos)





