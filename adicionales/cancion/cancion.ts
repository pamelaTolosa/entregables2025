export class Cancion{
    private titulo: string;
    private autor: string;

    constructor(pTitulo: string, pAutor: string){
        this.titulo= pTitulo;
        this.autor= pAutor;
    }

    public dameTitulo(): string{
        return this.titulo;
    }

    public dameAutor(): string{
        return this.autor;
    }

    public ponTitulo(pTitulo: string): void{
        this.titulo=pTitulo;
        
    }

    public ponAutor(pAutor: string): void{
        this.autor=pAutor;
        
    }



}