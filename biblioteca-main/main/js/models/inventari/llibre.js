 import { Stock } from "./stock.js";
 export class Llibre extends Stock{
        constructor(titol, autor, existencies) {
            super(titol, existencies)
            this.autor = autor;
    }
    get dades() {
    return {
        titol: this.titol,
        autor: this.autor,
        existencies: this.existencies
    };
}

}

