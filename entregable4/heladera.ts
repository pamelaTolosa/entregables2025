import { Electrodomestico } from "./electrodomestico";
export class Heladera extends Electrodomestico{
    private temperatura: number;

    constructor(pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean){
        super(pMarca, pModelo, pEstaEncendido);
        this.temperatura= pTemperatura;

    }

    public cambiarTemperatura(pTemperatura:number): void{
        if(this.temperatura>8 && this.estaEncendido==true){
            this.temperatura=8
            console.log(`Se ha bajado la temperatura a ${pTemperatura-this.temperatura} grados`);
            

        }else if(this.temperatura<6 && this.estaEncendido==true){
            this.temperatura=6
            console.log(`Se ha subido la temperatura en ${this.temperatura-pTemperatura} grados`);
            

        }
        
    }

}