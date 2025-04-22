import { IPago } from "./interfaces";
import { MetodosDePago } from "./metodosDePago";
export class TarjetaCredito extends MetodosDePago implements IPago{
    
    constructor(pNombreTitular: string, pMonto: number, pEntidadEmisora: string, pCbu_cvu: number){
        super(pNombreTitular, pMonto, pEntidadEmisora, pCbu_cvu)
    
       
    }

    procesarPago(): void {
        console.log(`El pago de la tarjeta ${this.getEntidadEmisora()} correspondiente al cbu ${this.getCbu_cvu()} por el monto de $ ${this.getMonto()} del titular ${this.getNombreTitular()} ha sido procesado`);
        
    }

    cancelarPago(): void {
        console.log(`El pago de ${this.getEntidadEmisora()} correspondiente al cbu ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de $ ${this.getMonto()} ha sido cancelado exitosamente`);
        
    }

    generarRecibo(): void {
        console.log(`El recibo de la tarjeta de ${this.getEntidadEmisora()} correspondiente al cbu ${this.getCbu_cvu()} , del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);
        
    }
   
}