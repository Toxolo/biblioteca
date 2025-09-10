import { Stock } from "./stock.js";
 export class revista extends Stock{
    constructor(titol, publicacio, existencies) {
       super(titol, existencies)
        this.publicacio = publicacio;

    }
}
