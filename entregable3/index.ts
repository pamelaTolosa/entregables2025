import { Alumno } from "./alumnos";
import { Profesor } from "./profesores";
import { Escuela } from "./escuela";

let alumno1: Alumno= new Alumno("Diana", "Ciganda", 41, 9, 2 );
let alumno2: Alumno= new Alumno("Pamela", "Tolosa", 38, 8, 4);
let alumno3: Alumno= new Alumno("Juan", "Rodriguez", 35, 6, 8);
let alumno4: Alumno= new Alumno("Jazmin", "Lopez", 30, 4, 10);

let alumnos: Alumno[]= [alumno1, alumno2, alumno3];

let profesor1: Profesor= new Profesor("Karen", "Simari", "Programacion", alumnos, 7);
let profesor2: Profesor= new Profesor("Braian", "Aued", "Programacion II", alumnos, 1);
let profesor3: Profesor= new Profesor("Viviana", "Blasco", "FIP", alumnos, 8);
let profesor4: Profesor= new Profesor("Nelson", "Garrido", "Tutoria", alumnos, 2);

let profesores: Profesor[]= [profesor1, profesor2, profesor3];

let escuela: Escuela= new Escuela(alumnos, profesores);
//Matricular un nuevo alumno
escuela.setMatricularAlumno([alumno4]);
console.log("----------------------------------");
escuela.setMatricularAlumno([alumno1]);
console.log("----------------------------------");
console.log(alumno3.getComprobarNota());
console.log(alumno4.getComprobarNota());
console.log("----------------------------------");
console.log(escuela.getExpulsarAlumno(alumnos));
console.log("----------------------------------");
escuela.setContratarProfesor([profesor4]);
console.log("----------------------------------");
escuela.setContratarProfesor([profesor2]);
console.log("----------------------------------");
console.log(escuela.getDespedirProfesor(profesores));


