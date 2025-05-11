import { FabricaDeAnimales } from "./FabricaDeAnimales";

try{

let fabrica= new FabricaDeAnimales;

let miPerro= fabrica.crearAnimal("perro",{colorPelaje: "marron", tamanio: "mediano", tieneColaCorta: false});
console.log(miPerro);
miPerro.hacerSonido();
miPerro.mover();

let miGato= fabrica.crearAnimal("gato",{raza: "persa", colorOjos: "amarillo", esDomestico: true});
console.log(miGato);
miGato.hacerSonido();
miGato.mover();

let miPajaro= fabrica.crearAnimal("pajaro", {clasePico: "curvo", colorPlumas: "amarillo", velocidadVuelo: 10});
console.log(miPajaro);
miPajaro.hacerSonido();
miPajaro.mover();


}catch(error){console.error("Error al crear el animal", error)

}


