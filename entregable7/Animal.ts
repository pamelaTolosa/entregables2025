import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal{
    nombreAnimal: string;
    constructor(pNombreAnimal: string){
        this.nombreAnimal= pNombreAnimal;
    }

    moverse(): void {
        console.log(`El ${this.nombreAnimal} se ha movido 20 pasos`);
        
    }
    emitirSonido(): void {
        console.log(`El animal ${this.nombreAnimal} ha emitido sonido`);
        
        
    }

    abstract tipoDeDieta(): string;

    getNombreAnimal(): string{
        return this.nombreAnimal
    }
}