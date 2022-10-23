// Crea un nuevo proyecto de Node
// - Instala la dependencia Winston
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// - Registra el error en un archivo a través de un try...catch

const numero = "oiahjsd"

const calcular = valor => {
    if (typeof valor === "number"){
        return 10/valor
    }
    throw new Error ("")
}


// const calcular = valor => {
const errores = valor => {
    try {
        // codigo que puede fallar
        const dividir = calcular(numero)
        console.log("Se está ejecutando la instruccion correctamente")
    } catch (e) {
        console.log("Error!!!")
        console.log(e)
    } finally {
        console.log ("Esto se va a ejecutar con error o sin errores")
    }
}


// Errores mas comunes
// InternalError, SyntaxError, TypeError, RageError, ReferenceError
