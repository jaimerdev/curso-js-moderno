const producto = 'Monitor 20 pulgadas';

//Reemplazar cadenas de texto
console.log(producto.replace('pulgadas', '"'));

//Cortar cadenas de texto
console.log(producto.slice(0, 10));

//Alternativa a .slice
console.log(producto.substring(0, 10));
console.log(producto.charAt(0));