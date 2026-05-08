"use strict";

const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    categoria: "Monitores",
};

//los objetos por defecto si se pueden modificar a pesar de que sea const
/*Object.freeze(producto); //con esta función se congela el objeto y no se puede modificar
//con freeze no se pueden añadir, eliminar o modificar propiedades del objeto
*/

console.log(Object.isFrozen(producto)); //verificar si el objeto está congelado
Object.seal(producto); //con esta función se sella el objeto y no se pueden añadir ni eliminar propiedades, pero sí se pueden modificar las existentes
producto.precio = 400; //modificar una propiedad del objeto
console.log(producto.precio);