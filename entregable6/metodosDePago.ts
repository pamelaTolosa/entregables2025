export class MetodosDePago{
    protected nombreTitular: string;
    protected monto: number;
    protected entidadEmisora: string;
    protected cbu_cvu: number;

    constructor(pNombreTitular: string, pMonto: number, pEntidadEmisora: string, pCbu_cvu: number){
        this.nombreTitular= pNombreTitular;
        this.monto= pMonto;
        this.entidadEmisora= pEntidadEmisora;
        this.cbu_cvu= pCbu_cvu

    }

    getNombreTitular(): string{
        return this.nombreTitular;
    }
    getMonto(): number{
        return this.monto;
    }
    getEntidadEmisora(): string{
        return this.entidadEmisora;
    }
    getCbu_cvu(): number{
        return this.cbu_cvu;
    }
}