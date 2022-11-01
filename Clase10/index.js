// import axios from "axios";
import { suma, multiplica } from "./moldulos/controller.js";
import chalk from 'chalk';

// // axios.get('http://gateway.marvel.com/v1/public/characters?ts=100&apikey=108eaebe3fda3fa249c18e9711d439a4&hash=58b7804e6fa776d57a49cb62e6cb739f')
// axios.get('https://www.breakingbadapi.com/api/characters')
//   .then(function (response) {
//     // handle success
//     // console.log(response);
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
const sumado = suma(1, 2)
const multiplicado = multiplica(4, 5)
console.log(sumado)
console.log(multiplicado)

const loger = console.log
loger(chalk.blue (sumado))
loger(chalk.red(multiplicado))
