import { Celular } from "./celular";
let primerCelular = new Celular("Samsung", "A5", "Android 10", undefined,undefined,undefined);
let segundoCelular = new Celular("Motorola", "E6", "Android 6","2GB", undefined, undefined);
let tercerCelular = new Celular("Xiaomi", "Readme 13", "Android 12", undefined, undefined,true);
let cuartoCelular = new Celular("Samsung", "A12", "Android 13", "8GB", "256GB", undefined);
let quintoCelular = new Celular("LG", "K6", "Android 8",undefined,"126GB",undefined );

console.log(primerCelular.getMostrarInfo());
console.log(segundoCelular.getMostrarInfo());
console.log(tercerCelular.getMostrarInfo());
console.log(cuartoCelular.getMostrarInfo());
console.log(quintoCelular.getMostrarInfo());
quintoCelular.setEncenderApagar();






