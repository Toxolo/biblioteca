 
 export class Persona {
    constructor(dni, nom) {
        if (this.constructor === Persona) {
            throw new Error("Esta es una clase abstracta");
        }
        this.dni = dni;
        this.nom = nom;
    }
    toString() {
        return `Nom: ${this.nom} - DNI: ${this.dni} `;
    }
}
