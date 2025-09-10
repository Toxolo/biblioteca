 
import './models/inventari/llibre.js';
import './models/inventari/pelicula.js';
import './models/inventari/revista.js';
import './models/personal/administrador.js';
import './models/personal/soci.js';

var llibre1 = new Llibre("Eagle", "Talon TSi", 19);
var llibre2 = new Llibre("Panxo", "Autor", 22);
var revista1 = new Revista("Tito", "KIds", 3);
var pelicula1 = new Pelicula("Tpeli", "Dpeli", "Acció", 1);
var soci1 = new Soci("23453J", "Alfonso", 1);
var admi1 = new Administrador("69234G", "Paco", "Superior");


console.log(llibre1.dades);
console.log(llibre2.dades);
