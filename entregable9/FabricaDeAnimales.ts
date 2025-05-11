import { Gato } from "./Gato";
import { IAnimal } from "./IAnimal";
import { Pajaro } from "./Pajaro";
import { Perro } from "./Perro";
export class FabricaDeAnimales{
    public crearAnimal(tipo: string, atributos: any): IAnimal{
        if(tipo==="perro"){
            return new Perro(atributos.colorPelaje, atributos.tamanio, atributos.tieneColaCorta);
        
        }else if(tipo==="gato"){
            return new Gato(atributos.raza, atributos.colorOjos, atributos.esDomestico);
        
        }else if(tipo==="pajaro"){
            return new Pajaro(atributos.clasePico, atributos.colorPlumas, atributos.velocidadVuelo);

        }else{
            throw new Error("tipo de animal no valido");
        }
    }
}