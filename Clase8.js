// Clase8

//Funciones tipo felecha . funciones anonimas

const array=[1,5,4,3,4,5,6,1]

const array2 = array.map(function(valor){
    return valor * 2
})
console.log(array2)

const array1 = array.map((valor)=>{
    return valor * 2
}) 
console.log(array1)

const dobleValor = valor => valor * 2
console.log(dobleValor(10))

const array3 = array.map(dobleValor)
console.log(array3)

// Funciones asincronas - suelen ser buenas para usar con una base de datos externas, que no siempre tienen una respuesta automáticas

function miAsinc(){
    //hace una llamada a una base de datos externas
    //pueden darnos algun error, hay que saber como manejar ese error
}

// const miPromesa = new Promise((resolve, reject)=>{
//     // si está todo correcto, true
//     if (true){
//         resolve()
//     } else {
//         reject()
//     }
// })



const miPromesa = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random() * 2)
    if (i !== 0){
        resolve()
    } else {
        reject()
    }
})

miPromesa 
    .then (()=> console.log ("Se ha ejecutado de forma correcta"))
    .catch(()=> console.log("ERROR"))
    .finally(()=> console.log("Yo me ejecuto siempre"))


function myAsync(){
    // hace una llamada a una base de datos externas

}


// Funciones generadoras - function*
function* generarID(){
    let id=0;
    while (true){
        id++
        if (id>9){
            return id
        }
        yield id // esperando hasta que vuelva a llamar
    }
}
const gen= generarID();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())














