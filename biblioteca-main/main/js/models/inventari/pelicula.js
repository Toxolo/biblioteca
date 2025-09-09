 import { Stock } from "./stock.js";
 export class Pelicula extends Stock{
    constructor(titol, director, genere, existencies) {
       super({titol, existencies})
        this.director = director;
        this.genere = genere;

    }
}
