import { Escuela } from "./escuela";
import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
import { Curso } from "./curso";


let alumno1: Alumno= new Alumno(123,"Diana", "Ciganda", 30623336);
let alumno2: Alumno= new Alumno(321, "Lucas", "Gonzalez", 3984509);
let alumno3: Alumno= new Alumno(356, "Elena", "Lopez", 29903423);
let alumno4: Alumno= new Alumno(432, "Hector", "Carrera", 33980512);
let alumnos= [alumno1, alumno2, alumno3, alumno4];

let profesor1: Profesor= new Profesor(3,"Julio", "Velez", 30982456);
let profesor2: Profesor= new Profesor(5, "Sonia", "Garcia", 29907267);
let profesor3: Profesor= new Profesor(7, "Emiliano", "Sanchez", 33982001);
let profesores=[profesor1, profesor2, profesor3];

let curso1: Curso= new Curso("Artes escenicas", "Expresate con libertad", profesor1, [alumno1, alumno3]);
let curso2: Curso= new Curso("Ceramica", "Libera tu ser con el barro", profesor2, [alumno1, alumno2, alumno3, alumno4]);
let curso3: Curso= new Curso("Musica", "Clave de sol, el alma al descubierto", profesor3, [alumno1, alumno2, alumno4]);

let escuela:Escuela=new Escuela([curso1,curso2,curso3],50)

alumno1.presentacion();
console.log("-----------------------------------------------");
profesor1.presentacion();
console.log("-----------------------------------------------");
curso1.mostrarLista();
console.log("-----------------------------------------------");

escuela.listadoCursos();
