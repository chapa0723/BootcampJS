// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const hoy = new Date()
console.log(hoy)

const nacimiento = new Date(1991,2,7)
console.log(nacimiento)

const masTarde = hoy > nacimiento
console.log(masTarde)

const mes = nacimiento.getMonth()
console.log(mes)
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mes1 = meses[nacimiento.getMonth()]
console.log(mes1)

const anio = nacimiento.getFullYear()
console.log(anio)











