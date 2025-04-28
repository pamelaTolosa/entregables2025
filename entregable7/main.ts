import { Animal } from "./Animal";
import { Gato } from "./Gato";
import { Perro } from "./Perro";

let gato: Animal= new Gato("Gato");
let perro: Animal= new Perro("Perro");

gato.emitirSonido();
gato.moverse();
console.log(gato.tipoDeDieta());
console.log("----------------------------------");
perro.emitirSonido();
perro.moverse();
console.log(perro.tipoDeDieta());

 

