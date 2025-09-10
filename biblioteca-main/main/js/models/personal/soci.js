 import { Persona } from "./persona.js";
 export class Soci extends Persona{
    constructor(dni, nom, prestat) {
       super(dni, nom)
       if (this.prestat > 3) {
            throw new Error("No pots tindre més de tres prestats");
        }
        this.prestat = prestat;

    }
}
