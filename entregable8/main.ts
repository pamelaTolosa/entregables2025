import { Computadora } from "./Computadora";
import { ComputadoraBuilder } from "./ComputadorasBuilder";

let miComputadora= new Computadora("Intel Core I9", 16, 512, "Nvidia 1020", "Windows 10");

console.log(miComputadora.toString());

let computadoraGamer= new ComputadoraBuilder().setProcesador("Rayzen").setRam(16).setSistemaOperativo("Linux").build();
console.log(computadoraGamer.toString());

