//objetos
/*
const nombreProducto="Monitor";
const precio = 300;
const disponible = true;

//sintaxis de objeto
const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    categoria: "Monitores",
}

console.log(producto);
console.log(producto.nombreProducto);//acceder a una propiedad de un objeto
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto.categoria);

console.log(producto["precio"]); //otra forma de acceder
*/

const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    categoria: "Monitores",
}
producto.imagen = "imagen.jpg"; //añadir una propiedad a un objeto
delete producto.disponibilidad; //eliminar una propiedad de un objeto
console.log(producto);