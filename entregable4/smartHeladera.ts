import { Heladera } from "./heladera";
import { ModuloWifi } from "./moduloWifi";
export class SmartHeladera extends Heladera{
    private wifi: ModuloWifi;

    constructor(pWifi: ModuloWifi, pTemperatura: number, pMarca: string, pModelo: string, pEstaEncendido: boolean){
        super(pTemperatura, pMarca, pModelo, pEstaEncendido);
        this.wifi= pWifi;
    }

    public conectarInternet(){
        if(this.wifi&&this.estaEncendido==true){
            console.log(`Conectado a internet a una velocidad de ${this.wifi.getVelocidadMbps()} Mbps`);
            
        }
    
    }
}