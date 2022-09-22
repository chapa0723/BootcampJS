// Ejercicio6

// Crea un archivo JS que contenga las siguientes líneas
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const compra = ["Pan", "Leche", "Huevos", "Fideos", "Arroz", "Jugos", "Cerveza", "Vino"]
console.log(compra)
compra.push("Aceite de Girasol")
console.log(compra)
compra.pop()
console.log(compra)
//Peliculas
const starWars = {
    "titulo": "StarWars",
    "director": "Geroge Lucas",
    "fecha": new Date(2018, 11, 24)
}
const comando = {
    "titulo": "Comando",
    "director": "Kevin Feige",
    "fecha": new Date(1989, 10, 30)
}
const alien = {
    "titulo": "Alien, el ultimo pasajero",
    "director": "Steven Spielberg",
    "fecha": new Date(1998, 5, 3)
}
const peliculas = [starWars, comando, alien]
console.log(peliculas)
const fecha = new Date(2010, 1, 1) 
const posterior = peliculas.filter(p =>{
    if (p.fecha > fecha){return true} 
    })
console.log(posterior)

const directores = peliculas.map(d => {
    return d.director
})
console.log(directores)

const titulos = peliculas.map(t =>{
    return t.titulo
})
console.log(titulos)

const newpeli = titulos.concat(directores)
console.log(newpeli)

const newpelifp = [...titulos, ...directores]
console.log(newpelifp)





