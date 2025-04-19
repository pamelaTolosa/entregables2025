import { Empleado } from "./empleado";
import { Trabajador } from "./trabajador";
export class Gerente extends Empleado{
    private area: string;
    private nroPersonalACargo: number;
    private trabajadores: Trabajador[];

    constructor(pArea: string, pPersonalACargo: number, pTrabajadores: Trabajador[],pNombre: string, pApellido: string, pSalario: number){
        super(pNombre, pApellido, pSalario);
        this.area= pArea;
        this.nroPersonalACargo= pPersonalACargo;
        this.trabajadores= pTrabajadores;
    }

    public asignar_tareas(): void{
        for (let trabajador of this.trabajadores) {
            if(trabajador.getNroLegajo()>=100 && trabajador.getNroLegajo()<=200){
                console.log(`El trabajador ${trabajador.getNroLegajo()} tiene la tarea asignada de realizar inventario`);
                

            }else if(trabajador.getNroLegajo()>201 && trabajador.getNroLegajo()<=300){
                console.log(`El trabajador ${trabajador.getNroLegajo()} tiene la tarea asignada de realizar auditoria`);
                

            }else if(trabajador.getNroLegajo()>301 && trabajador.getNroLegajo()<=400){
                console.log(`El trabajador ${trabajador.getNroLegajo()} tiene la tarea asignada de realizar mantenimiento de redes`);
                

            }
            
        }
    }
    public evaluar_desempenio(): void{
        for(let trabajador of this.trabajadores){
            if(trabajador.getCumplePresentismo()==true){
                console.log(`El trabajador ${trabajador.getNombre()} ${trabajador.getApellido()} cumple con el presentismo`);
                
            }else{
                console.log(`El trabajador ${trabajador.getNombre()} ${trabajador.getApellido()} no cumple con el presentismo`);
                
            }

        }
    }

}