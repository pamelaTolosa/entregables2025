/*Crear una clase Auto con atributos (marca, modelo, anio).
Agregar métodos (constructor(), acelerar(), frenar()).
Instanciar objetos y probar métodos*/

export class Auto{
    marca: string;
    modelo: string;
    anio: number;
    velocidad: number=0

    constructor(pMarca:string, pModelo: string, pAnio:number){
        this.marca= pMarca;
        this.modelo= pModelo;
        this.anio= pAnio;
    }

    acelerar(paumentoVel: number): string {
        this.velocidad += paumentoVel;
        return `Ha acelerado y ahora va a ${this.velocidad} km/h`;
    }

    frenar(): string {
        this.velocidad = 0;
        return `Ha frenado y está detenido.`;


    }
}