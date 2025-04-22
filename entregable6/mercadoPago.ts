import { IPago } from "./interfaces";
import { MetodosDePago } from "./metodosDePago";
export class MercadoPago extends MetodosDePago implements IPago {
   
    constructor(pNombreTitular: string, pMonto: number, pEntidadEmisora: string, pCbu_cvu: number){
        super(pNombreTitular, pMonto, pEntidadEmisora, pCbu_cvu);
       
    }

    procesarPago(): void {
        console.log(`El pago desde Mercado Pago correspondiente al cvu ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} se proceso correctamente`);
        
    }
    cancelarPago(): void {
        console.log(`El pago desde Mercado Pago correspondiente al cvu ${this.getCbu_cvu()} ha sido cancelado`);
        
    }
    generarRecibo(): void {
        console.log(`el recibo de Mercado Pago del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);
        
    
    }

}