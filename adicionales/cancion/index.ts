import { Cancion } from "./cancion";
let titulo1: string= "Me dedique a perderte";
let titulo2: string= "El me mintio";
let titulo3: string= "Tu falta de querer";
let autor1: string= "Alejandro Fernandez";
let autor2: string= "Amanda Miguel";
let autor3: string= "Mon Laferte";

let cancion1: Cancion= new Cancion(titulo1, autor1);
let cancion2: Cancion= new Cancion(titulo2, autor2);
let cancion3: Cancion= new Cancion(titulo3, autor3);

console.log("Cancion 1: " + cancion1.dameTitulo() + " de " + cancion1.dameAutor());
console.log("Cancion 2: " + cancion2.dameTitulo() + " de " + cancion2.dameAutor());
console.log("Cancion 3: " + cancion3.dameTitulo() + " de " + cancion3.dameAutor());
cancion1.ponTitulo("Lose control");
cancion1.ponAutor("Teddy Swims");
console.log("Cancion 1: " + cancion1.dameTitulo() + " de " + cancion1.dameAutor());