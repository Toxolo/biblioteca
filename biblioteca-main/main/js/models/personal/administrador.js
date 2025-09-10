 
 import { Persona } from "./persona.js";
 export class Administrador extends Persona{
    constructor(dni, nom, carrec) {
       super(dni, nom)

        this.carrec = carrec;

    }
}
