/*funciones globales*/
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const montoTotal = (a, b) =>
  resta(
    suma(suma(a.precio, b.precio), suma(a.iva(), b.iva())),
    suma(a.descuento(), b.descuento())
  );

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
const producto1 = new producto(
  200,
  parseInt(prompt("ingrese cantidad de producto1"))
);
const producto2 = new producto(
  100,
  parseInt(prompt("ingrese cantidad de producto2"))
);

let resultado = montoTotal(producto1, producto2);
alert("su total es " + resultado);
