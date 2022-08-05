// Listas, arreglos o arrays o vectores
// Una lista es un conjunto de elementos ordenados y separados por comas
const lista1 = [1,false, undefined, null];
const lista2 = new Array(2, "hola", false, undefined, null);
const lista3 = new Array (3);
lista3[0] = "soy el primer elemento de indice cero";
const lista4 = [lista1, lista2, lista3];

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    color: "Blanco",
    isWhithe: true,
    contactos: ["Maria", "Juan", "Pedro"],
    tarjetas: {
        sim: true,
        marca: "Sandisk",
        almacenamiento: "256GB"
    }
}

console.log(movil);
console.log(movil.contactos);
console.log(movil.contactos[1]);
console.log(movil.altura);
console.log(movil.tarjetas);
console.log(movil.tarjetas.almacenamiento);

movil.altura = 20;
console.log(movil.altura);
movil.contactos[0] = "Ruben";
console.log(movil.contactos);


// Fechas
//       Librerias para trabajar con fechas una puede ser Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_mils = new Date(10); // Se puyede definir utilizando milisegundos
console.log(fecha_mils);

const fecha_cadena = new Date("march 25 2020"); // Se puede definir utilizando una cadena de texto
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);  // Se puede definir utilizando los valores de año, mes y dia
console.log(fecha_valores);

const dia = ahora.getDate(); // Obtiene el dia de la fecha
console.log(dia);
const mes = ahora.getMonth() + 1; // Obtiene el mes de la fecha
console.log(mes);
const anio = ahora.getFullYear(); // Obtiene el año de la fecha
console.log(anio);
console.log(dia, mes, anio);

