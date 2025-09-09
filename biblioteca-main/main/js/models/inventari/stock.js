 export class Stock {
    constructor(titol, existencies) {
        if (this.constructor === Stock) {
            throw new Error("Esta es una clase abstracta");
        }
        this.titol = titol;
        this.existencies = existencies;
    }
    toString() {
        return `${this.titol} - ${this.existencies} €`;
    }
}
