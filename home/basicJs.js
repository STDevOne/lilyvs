var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

var encuentraArticulos = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo)){
   return articulo.costo <= 700
});

// .pop() .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4.
// .unshift()
// .shift() .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
// .push() El método .push() nos permite agregar uno o más elementos al final de un array.
for(articulo of articulos){
    console.log(articulo);
}
