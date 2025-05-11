import { IAnimal } from "./IAnimal";
export class Gato implements IAnimal{
    private raza: string;
    private colorOjos: string;
    private esDomestico: boolean;

    constructor(pRaza: string, pColorOjos: string, pEsDomestico: boolean){
        this.raza= pRaza;
        this.colorOjos= pColorOjos;
        this.esDomestico= pEsDomestico;
    }

    hacerSonido(): void {
        console.log("El gato hace miau!");
        
    }

    mover(): void {
        console.log("El gato trepa 10 mts");
        
    }
}