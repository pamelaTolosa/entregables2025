import { Animal } from "./Animal";

export class Gato extends Animal{
    emitirSonido(): void {
        console.log(`El ${this.getNombreAnimal()} hace "Miau"`);
        
    }
    tipoDeDieta(): string {
        return `El ${this.nombreAnimal} come Carne y pescado`
    }
}