import { Animal } from "./Animal";

export class Perro extends Animal{
    emitirSonido(): void {
        console.log(`El ${this.getNombreAnimal()} hace "Guau"`);
        
    }
    tipoDeDieta(): string {
        return `El ${this.nombreAnimal} come carne y vegetales`
    }
}