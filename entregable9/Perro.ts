import { IAnimal } from "./IAnimal";
export class Perro implements IAnimal{
    private colorPelaje: string;
    private tamanio: string;
    private tieneColaCorta: boolean;

    constructor(pColorPelaje: string, pTamanio: string, pTieneColaCorta: boolean){
        this.colorPelaje= pColorPelaje;
        this.tamanio= pTamanio;
        this.tieneColaCorta= pTieneColaCorta;
    }

    hacerSonido(): void {
        console.log("El perro hace guau!");
        
    }

    mover(): void {
        console.log("EL perro corre 50 mts");
        
    }

}