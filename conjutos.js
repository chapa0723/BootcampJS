// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const familia = new Set(["David", "Lucila", "Laka"])
familia.forEach(f => {console.log(f)}) 

familia.add("David")
familia.forEach(f => {console.log(f)}) 

familia.add("Javascript")
familia.forEach(f => {console.log(f)}) 


