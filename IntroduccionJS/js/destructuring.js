const producto = {
    nombreProducto:"Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    categoria: "Monitores",
};

//forma anterior
/*const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
const disponibleProducto = producto.disponible;
const categoriaProducto = producto.categoria;
console.log(precioProducto);*/

//forma nueva -> destructuring
const {nombreProducto, precio, disponibilidad, categoria} = producto;
//debe tener el mismo nombre que la propiedad del objeto
console.log(disponibilidad);