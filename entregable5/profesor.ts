import { Persona } from "./persona";
export class Profesor extends Persona{
    private duracionCurso: number;

    constructor(pDuracionCurso: number, pNombre: string, pApellido: string, pDni: number){
        super(pNombre, pApellido, pDni);
        this.duracionCurso= pDuracionCurso;
    }

    public presentacion():void{
        console.log(`Soy el profesor : ${this.getNombre()} ${this.getApellido()}, mi dni es ${this.getDni()} y la materia que enseño tiene ${this.duracionCurso} horas catedra`);
    }

}