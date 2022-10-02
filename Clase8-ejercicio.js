// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// - Una función generadora de índices pares automáticos

function verdadero() {
    return true
}

console.log(verdadero())

const miPromesa = new Promise((finTiempo, reject)=>{
    // si está todo correcto, true
    if (true){
        return finTiempo()
    } else {
        return false
    }
})

function mostrar(){ 
    console.log("Hola soy una promesa") 
}

const finTiempo = setTimeout(mostrar, 2000)

miPromesa 
    .then (()=> console.log ("Se ha ejecutado de forma correcta"))
    .catch(()=> console.log("ERROR"))


function* generarID2(){
let id=0;
    while (true){
        id+=2
        if (id>20){
            return id
        }
        yield id // esperando hasta que vuelva a llamar
    }
}
const gen2= generarID2();
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())
console.log(gen2.next())




















