import { Persona } from "./persona";
export class Alumno extends Persona{
    private legajo: number;

    constructor(pLegajo: number, pNombre: string, pApellido: string, pDni: number){
        super(pNombre, pApellido, pDni);
        this.legajo= pLegajo;
    }

    public presentacion():void{
        console.log(`Soy el alumno : ${this.getNombre()} ${this.getApellido()}, mi dni es ${this.getDni()} y mi legajo es ${this.legajo}`);
    }

}