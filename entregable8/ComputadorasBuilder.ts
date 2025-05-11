import { Computadora } from "./Computadora";
export class ComputadoraBuilder{
    private procesador: string= "Intel Core";
    private ram: number= 512;
    private sistemaOperativo: string= "Windows 11"

    setProcesador(pProcesador: string): ComputadoraBuilder{
        this.procesador= pProcesador;
        return this;
    }

    setRam(pRam: number): ComputadoraBuilder{
        this.ram= pRam;
        return this;
    }

    setSistemaOperativo(pSistemaOperativo:string): ComputadoraBuilder{
        this.sistemaOperativo= pSistemaOperativo;
        return this;
    }

    build(): Computadora{
        return new Computadora(this.procesador, this.ram, 1024, "Nvidia", this.sistemaOperativo);
    }
}