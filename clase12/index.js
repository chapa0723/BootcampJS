/*
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
(Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
*/

function Fibo(n) {
    const lista = [0, 1];
    const lista2 = [];
    for (i = 2; i<= n; i++) {
        // console.log(lista[i-1]);
        lista[i] = lista[i -1] + lista[i - 2];
        lista2.push(lista[i])
    }
    return lista2;  
}
const resu = Fibo(6);
console.log(resu)















