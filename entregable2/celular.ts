/*Se debe crear una clase Celular que represente un teléfono móvil.
Requisitos:
Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
Constructor con parámetros opcionales y obligatorios:
Obligatorios: Marca, modelo y sistema operativo.
Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
Métodos adicionales:
encenderApagar(): Cambia el estado de encendido/apagado del celular.
mostrarInfo(): Retorna una cadena con los datos del celular.*/

//set para encenderApagar 
//get que retorne un string con los datos del celular

export class Celular {
    private marca: string;
    private modelo: string;
    private sistemaOperativo: string;
    private memoriaRam: string;
    private almacenamientoInterno: string;
    private estaEncendido: boolean;

    constructor(pMarca: string, pModelo: string, pSistemaOperativo: string, pMemoriaRam?: string, pAlmacenamientoInterno?: string, pEstaEncendido?: boolean) {

        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRam = pMemoriaRam ?? "4GB";
        this.almacenamientoInterno = pAlmacenamientoInterno ?? "64GB";
        this.estaEncendido = pEstaEncendido ?? false;

    }
    public setEncenderApagar(): void {
        this.estaEncendido = !this.estaEncendido;
        if(this.estaEncendido==true){
            console.log(`Este teléfono se ${this.estaEncendido ? "encendió" : "apagó"}`);

    }
}

    public getMostrarInfo(): string {
        return `Marca: ${this.marca}
        Modelo: ${this.modelo}
        Sistema Operativo: ${this.sistemaOperativo}
        Memoria RAM: ${this.memoriaRam}
        Almacenamiento: ${this.almacenamientoInterno}
        Encendido: ${this.estaEncendido ? "Sí" : "No"}
        ---------------------------------------------------------`;
    }
}

    

