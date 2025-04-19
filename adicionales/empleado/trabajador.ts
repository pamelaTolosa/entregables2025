import { Empleado } from "./empleado";
export class Trabajador extends Empleado{
    private sectorDeTrabajo: string;
    protected nroLegajo: number;
    protected cumplePresentismo: boolean;
    protected horasDeTrabajo: number;

    constructor(pSectorDeTrabajo: string, pNroLegajo: number, pCumplePresentismo: boolean, pHorasDeTrabajo: number, pNombre: string, pApellido: string, pSalario: number){
        super(pNombre, pApellido, pSalario);
        this.sectorDeTrabajo= pSectorDeTrabajo;
        this.nroLegajo= pNroLegajo;
        this.cumplePresentismo= pCumplePresentismo;
        this.horasDeTrabajo= pHorasDeTrabajo;
    }
    
    public getNroLegajo(): number {
        return this.nroLegajo
    }

    public getCumplePresentismo(): boolean{
        return this.cumplePresentismo
    }

    public solicitar_dia_libre(): void{
        console.log(`El trabajador ${this.getNombre()} ${this.getApellido()} ha solicitado el dia libre`);
        
    }
    public horas_trabajadas(): void {
        if (this.horasDeTrabajo == 8) {
            console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha trabajado 8 horas`);
        } else if (this.horasDeTrabajo < 8) {
            this.cumplePresentismo = false;
            console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha trabajador cumple con presentismo: ${this.cumplePresentismo}`);
        } else if (this.horasDeTrabajo > 8) {
            console.log(`el trabajador ${this.getNombre()} ${this.getApellido()} ha trabajado mas de 8 hs ,le corresponden el pago de horas extras)`);
        }
    }

    
    

}