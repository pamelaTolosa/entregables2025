import { Alumno } from "./alumnos";
import { Profesor } from "./profesores";

export class Escuela{
    private alumno: Alumno []= [];
    private profesor: Profesor [];

    constructor(pAlumno: Alumno[], pProfesor: Profesor[]){
        this.alumno= pAlumno;
        this.profesor= pProfesor;
    }
    public setMatricularAlumno(pAlumno: Alumno[]): void{
        pAlumno.forEach(alumno=>{
            console.log("Verificando alumno: ", alumno.getApellido(), alumno.getNombre());
            let existe= this.alumno.some(a=>//.some() devuelve true si al menos un elemento cumple la condición. 
                    a.getNombre()===alumno.getNombre()&& a.getApellido()===alumno.getApellido()
            );
            console.log("¿Existe?", existe);
            if(!existe){
                console.log("Se ha matriculado a: ", alumno.getApellido(), alumno.getNombre());
                this.alumno.push(alumno);
                

            }else{
                console.log(`El alumno ${alumno.getApellido()} ${alumno.getNombre()} ya está matriculado.`);
                
            }
            
            
        })
    }
    public getExpulsarAlumno(pAlumno:Alumno[]): string{
        let expulsado= pAlumno.filter(e=>
            e.getAmonestaciones()>=5 //.filter() Devuelve un nuevo array con los elementos que cumplen la condición.
        )
        if (expulsado.length===0) {
            return "No hay alumnos para expulsar"
            
        }
        return expulsado.map(e=>`El alumno ${e.getApellido()}, ${e.getNombre()} ha sido expulsado`).join("\n");
        
        
    }
    public setContratarProfesor(pProfesor: Profesor[]):void{
        pProfesor.forEach(profesor=>{
            console.log("Verificando profesor: ", profesor.getApellido(), profesor.getNombre());
            let existe= this.profesor.some(p=>
                p.getNombre()===profesor.getNombre()&&
                p.getApellido()===profesor.getApellido()
            );
            console.log("¿Existe?", existe);
            if (!existe) {
                console.log("Se contrata al profesor: ", profesor.getApellido(), profesor.getNombre());
                this.profesor.push(profesor);
                
            }else{
                console.log(`El profesor ${profesor.getApellido()}, ${ profesor.getNombre()}  ya está contratado.`);
                
            }
            
            
        })
    }
    public getDespedirProfesor(pProfesor: Profesor[]): string{
        let despedido= pProfesor.filter(e=>
            e.getIncumplimientos()>=5
        )
        if(despedido.length===0) {
            return "No hay profesores para despedir"
        }
        return despedido.map(e=>`El profesor ${e.getApellido()}, ${e.getNombre()} ha sido expulsado`).join("\n");

        

    }
}