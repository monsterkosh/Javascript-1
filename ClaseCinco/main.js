/*variables globales*/
let cantidad1 = parseInt(prompt("ingrese cantidad de producto 1"));
let cantidad2 = parseInt(prompt("ingrese cantidad de producto 2"));

/*funciones globales*/
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const montoTotal = (a, b) =>
  resta(
    suma(
      suma(a.precio * a.cantidad, b.precio * b.cantidad),
      suma(a.iva(), b.iva())
    ),
    suma(a.descuento(), b.descuento())
  );
function verification(param1, param2) {
  if (isNaN(param1) || isNaN(param2)) {
    alert("solo numeros");
    cantidad1 = parseInt(prompt("ingrese cantidad de producto 1"));
    cantidad2 = parseInt(prompt("ingrese cantidad de producto 2"));
    verification(cantidad1, cantidad2);
  }
}
verification(cantidad1, cantidad2);
/*clases*/
class producto {
  constructor(precio, cantidad) {
    this.precio = parseFloat(precio);
    this.cantidad = cantidad;
  }
  iva() {
    return this.precio * this.cantidad * 0.21;
  }
  descuento() {
    return this.precio * this.cantidad * 0.3;
  }
}
/*objetos*/
const producto1 = new producto(200, cantidad1);
const producto2 = new producto(100, cantidad2);

let resultado = montoTotal(producto1, producto2);
alert("su total es " + resultado);
