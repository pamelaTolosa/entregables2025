import { Alumno } from "./alumnos";
export class Profesor{
    private nombre: string;
    private apellido: string;
    private materia: string;
    private listadoAlumnos: Alumno[];
    private inasistenciasNoJusticadas: number;

    constructor(pNombre: string, pApellido: string, pMateria: string, pListadoAlumnos: Alumno[], pInasistenciasNoJustificadas: number){
    this.nombre= pNombre;
    this.apellido= pApellido;
    this.materia= pMateria;
    this.listadoAlumnos= pListadoAlumnos;
    this.inasistenciasNoJusticadas= pInasistenciasNoJustificadas;

}public getNombre(): string{
    return this.nombre;
}
public getApellido(): string{
    return this.apellido;
}
public getIncumplimientos(): number{
    return this.inasistenciasNoJusticadas
}
}
