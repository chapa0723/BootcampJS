// Clase 6

// Unir 2 listas usando .concat()
// const lista1 = ["hola", 2, false, null]
// const lista2 = ["adios", 8, true, undefined]

// console.log(lista1.concat(lista2))

// const lista3 = lista1.concat(lista2)
// console.log(lista3)


// Como unir dos listas con el factor de propagacion (se puede usar a part de ES6)
// console.log(...lista3)

// const lista4 = [...lista1, ...lista2]
// console.log(lista4)

// // ERROR!!! mal entendido el concepto del factor de propagacion
// const lista5 = [lista1, lista2] // Acá te genera una lista compuesta por 2 listas
// console.log(lista5)


// // Como obtener una lista a partir de otra lista .slice()
// // Este metodo no modifica el valor del array original
// //const array = ["hola", 1, 2, 3, true, null, "adios"]

// // console.log(array.slice())


// // #### Iterar los valores de una lista ####

// const array =["hola", 2, 5, 90, false, undefined]
// // forma antigua y poco eficiante 
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// // Forma ES6 nueva forma mas eficiente, mas moderna y mas se utiliza hoy en dia .forEach()
// array.forEach(valor => {
//     console.log(valor)
// })

// let suma=0
// const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
// arrayNums.forEach(valor => {
//     suma+=valor
//     console.log(valor)
// })
// console.log(suma)

// // Busqueda de un valor dentro de una lista .find()
// // Encontrar el elemento 90 
// const variable = array.find(valor => {
//     if (valor===90){
//         return true
//     }
// })
// console.log(variable)

// const listaObjetos = [
//     {nombre: "Leire", edad: 43},
//     {nombre: "David", edad: 23},
//     {nombre: "Michael", edad: 19},
//     {nombre: "Dario", edad: 21}
// ]
// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "David"){
//         return true
//     }
// })
// console.log(objeto.edad)

// const objeto1 = listaObjetos.find(o=>{
//     return o.nombre === "David"
// })
// console.log(objeto1.edad)

// const objeto2 = listaObjetos.find(o => o.nombre === "David")
// console.log(objeto2.edad)

// // Deconstruccion de objetos

// const { edad } = listaObjetos.find(o => o.nombre === "David")
// console.log(edad)

//####################################################################################
//####################################################################################
//####################################################################################
//####################################################################################
//####################################################################################

// trabajar con metodos mas avanzados
//.map() .filter() .reduce()

const array = ["Corrientes", "Codroba", "Catamarca", "Chaco", "Misiones"]
const val = array.forEach(v=> {
    console.log(v)
    return 4
})
console.log(val)
const newArray = array.map((valor, indice) =>`${indice + 1}- ${valor}`)
console.log(newArray)

// const listaObjetos = [
//     {nombre: "Leire", edad: 43},
//     {nombre: "David", edad: 23},
//     {nombre: "Michael", edad: 19},
//     {nombre: "Dario", edad: 21}
// ]

// const mayores = listaObjetos.filter(obj=> {
//     if (obj.edad > 30 ){
//         return true
//     } else {
//         return false
//     }
// })
//const mayores = listaObjetos.filter(obj => obj.edad >30)
//console.log(mayores)

// const noDario = listaObjetos.filter(obj=> obj.nombre !== "Dario")
// console.log(noDario)

//utilizando reduce.() - se utiliza para casos muy concretos
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const suma = num.reduce((acumulado, cur, i, arrayOriginal )=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})  
console.log(suma)

// .sort() Se usa para ordenar las listas -> modifica la lista original
const numeros = [1,3 ,2 , 4, 5, 6, 7, 8, 10, 9]
// a) representa el elemento anterio - b) representa el siguiente elemento
// Es obligatorio que retorne un numero
numeros.sort((a, b)=>{
    if (a<b){
        return +1
    } else if (a>b){
        return -1
    } else { 
        return 0
    }})
console.log(numeros)

// Ordenar unicamente arrays numericos
const arrayNumerico = [2, 4, 5, 6, 1, 12, 23, 45, 1, 34]
arrayNumerico.sort((a, b)=> b - a)
console.log(arrayNumerico)

const listaObjetos = [
    {nombre: "Leire", edad: 43},
    {nombre: "David", edad: 23},
    {nombre: "Michael", edad: 19},
    {nombre: "Dario", edad: 21}
]

// listaObjetos.sort((a, b)=>{
//     if (a.edad < b.edad){
//         return -1
//     } else if (a.edad > b.edad){
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b)=> b.edad < a.edad)
console.log(listaObjetos) 

// Comparar listas
// .every()
const vector = [4, 6, 6, 7, 3, 6, 2, 1, -1, -6, 12, 4, -40]
const resultado = vector.every(valor =>{
    if (valor > 0){
        return true
    } else {
        return false
    }
})
console.log(resultado)

const resul = vector.every(varl => val > 0)
console.log(resul) 

const numeritos1 = [1,2,3,4]
const numeritos2 = [1,2, 3, 4]
console.log (numeritos1 === numeritos2)

const comparar = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res
}
numeritos3 = [1,2, 3, 5]
console.log(comparar(numeritos1, numeritos2))
console.log(comparar(numeritos1, numeritos3))






