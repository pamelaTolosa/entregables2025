import { IAnimal } from "./IAnimal";
export class Pajaro implements IAnimal{
    private clasePico: string;
    private colorPlumas: string;
    private velocidadVuelo: number;

    constructor(pClasePico: string, pColorPlumas: string, pVelocidadVuelo: number){
        this.clasePico= pClasePico;
        this.colorPlumas= pColorPlumas;
        this.velocidadVuelo= pVelocidadVuelo;
    }

    hacerSonido(): void {
        console.log("El pajaro hace pio!");
        
    }

    mover(): void {
        console.log("EL pajaro vuela 20 km");
        
    }
}