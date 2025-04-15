export class ModuloWifi{
    private velocidadMbps: number;
    private frecuenciaGhz: number;
    
    constructor(pVelocidadMbps: number, pFrecuenciaGhz: number){
        this.velocidadMbps= pVelocidadMbps;
        this.frecuenciaGhz= pFrecuenciaGhz;
    }
    
    public getVelocidadMbps(): number {
        return this.velocidadMbps;
    }
    public setVelocidadMbps(pVelocidadMbps: number) {
        this.velocidadMbps = pVelocidadMbps;
    }
    public getFrecuenciaGhz(): number {
        return this.frecuenciaGhz;
    }
    public setFrecuenciaGhz(pFrecuenciaGhz: number) {
        this.frecuenciaGhz = pFrecuenciaGhz;
    }
}