// Clase 6

// Unir 2 listas usando .concat()
const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)
console.log(lista3)


// Como unir dos listas con el factor de propagacion (se puede usar a part de ES6)
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!!! mal entendido el concepto del factor de propagacion
const lista5 = [lista1, lista2] // Acá te genera una lista compuesta por 2 listas
console.log(lista5)


// Como obtener una lista a partir de otra lista .slice()
// Este metodo no modifica el valor del array original
//const array = ["hola", 1, 2, 3, true, null, "adios"]

// console.log(array.slice())


// #### Iterar los valores de una lista ####

const array =["hola", 2, 5, 90, false, undefined]
// forma antigua y poco eficiante 
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 nueva forma mas eficiente, mas moderna y mas se utiliza hoy en dia .forEach()
array.forEach(valor => {
    console.log(valor)
})

let suma=0
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma+=valor
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor dentro de una lista .find()
// Encontrar el elemento 90 
const variable = array.find(valor => {
    if (valor===90){
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: "Leire", edad: 43},
    {nombre: "David", edad: 23},
    {nombre: "Michael", edad: 19},
    {nombre: "Dario", edad: 21}
]
const objeto = listaObjetos.find(o => {
    if (o.nombre === "David"){
        return true
    }
})
console.log(objeto.edad)

const objeto1 = listaObjetos.find(o=>{
    return o.nombre === "David"
})
console.log(objeto1.edad)

const objeto2 = listaObjetos.find(o => o.nombre === "David")
console.log(objeto2.edad)

// Deconstruccion de objetos

const { edad } = listaObjetos.find(o => o.nombre === "David")
console.log(edad)





