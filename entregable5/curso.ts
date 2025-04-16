import { Alumno } from "./alumno";
import { Profesor } from "./profesor";
export class Curso {
    private nombreCurso: string;
    private descripcionCurso: string;
    private responsableCurso: Profesor;
    private listaParticipantes: Alumno[];

    constructor(pNombreCurso: string, pDescripcionCurso: string, pResponsableCurso: Profesor, plistaParticipantes: Alumno[]) {
        this.nombreCurso = pNombreCurso;
        this.descripcionCurso= pDescripcionCurso
        this.responsableCurso = pResponsableCurso;
        this.listaParticipantes = plistaParticipantes;


    }
    public mostrarLista(): void {
        this.listaParticipantes.sort((c, d) =>
            c.getApellido().localeCompare(d.getApellido(), 'es', { sensitivity: 'base' })
        );
        console.log(`Curso: ${this.nombreCurso}\nDescripcion: ${this.descripcionCurso}
Responsable: ${this.responsableCurso.getNombre()} ${this.responsableCurso.getApellido()}
Listado de alumnos: ${this.listaParticipantes.map(e => `\n ${e.getNombre()} ${e.getApellido()}`).join('')}`);
    }
    public getNombreCurso(): string {
        return this.nombreCurso;
    }
    public getResponsable(): Profesor {
        return this.responsableCurso;
    }
    public getListaParticipantes(): Alumno[] {
        return this.listaParticipantes;
    }
    getAlumnos(): Alumno[] {
        return this.listaParticipantes;
    }
}
