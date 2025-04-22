import { MetodosDePago } from "./metodosDePago";
import { IPago } from "./interfaces";
export class TransferenciaBancaria extends MetodosDePago implements IPago {
    constructor(pEntidadEmisora: string, pMonto: number, pNombreTitular: string, pCbu_cvu:number) {
        super(pEntidadEmisora, pMonto, pNombreTitular, pCbu_cvu);
    }
procesarPago(): void {
        console.log(`el pago de la transferencia bancaria desde el ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue procesado`);
    }
    cancelarPago(): void {
        console.log(`el pago de la transferencia bancaria desde el ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue cancelado`);
    }
    generarRecibo(): void {
        console.log(`el recibo de la transferencia bancaria a ${this.getCbu_cvu()} del titular ${this.getNombreTitular()} por el monto de ${this.getMonto()} fue generado`);
    }
}






