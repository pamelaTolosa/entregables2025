export class Electrodomestico{
    private marca: string;
    private modelo: string;
    protected estaEncendido: boolean;

    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean){
        this.marca= pMarca;
        this.modelo= pModelo;
        this.estaEncendido= pEstaEncendido;
    }

    public encender(): void{
        if(this.estaEncendido==true){
            console.log("El equipo esta encendido");
            

        }
    }
    public apagado(): void{
        if(this.estaEncendido==false){
            console.log("El equipo esta apagado");
            

        }
    }
    public mostrarInfo(): void{
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}`);
        

    }
}