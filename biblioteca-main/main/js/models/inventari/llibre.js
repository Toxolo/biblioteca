 import { Stock } from "./stock.js";
 export class Llibre extends Stock{
        constructor(titol, autor, existencies) {
            super({titol, existencies})
            this.autor = autor;
    }
}

