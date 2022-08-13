// Calcular el factorial de 10 utiliza un solo bucle for
factorial = 1;
for (let i = 10; i >= 2; i--) {
    console.log(i, (i-1));
    factorial = factorial * (i);
}
console.log(factorial);
