export class Persona {
    private nombre: string;
    private apellido: string;
    private dni: number;
    
    constructor(pNombre: string, pApellido: string, pDni: number){
        this.nombre= pNombre;
        this.apellido= pApellido;
        this.dni= pDni;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(value: string) {
        this.nombre = value;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(value: string) {
        this.apellido = value;
    }
    public getDni(): number {
        return this.dni;
    }
    public setDni(value: number) {
        this.dni = value;
    }
    public presentacion():void{
        console.log(`Soy ${this.nombre} ${this.apellido}, y mi dni es ${this.dni}`);

    }
}