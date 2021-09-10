const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const iva = (x) => x * 0.21;

const descuento = (x) => x * 0.3;

const montoTotal = (a, b) =>
  resta(suma(a, b) + iva(suma(a, b)), descuento(suma(a, b)));

let precio1 = 200 * parseInt(prompt("ingrese cantidad de producto1"));
let precio2 = 100 * parseInt(prompt("ingrese cantidad de producto2"));

let resultado = montoTotal(precio1, precio2);
alert("el total es " + resultado);
