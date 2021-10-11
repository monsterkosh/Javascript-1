/*clases*/
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
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

/*objetos y arrays*/
const productos = [];

let botonp1 = document.getElementById("botonp1");
let agregarProducto1 = () => {
  let cantidad1 = parseInt(document.getElementById("qty1").value);
  productos.push(new Producto("agenda", 200, cantidad1));
  guardarLocal("lista productos", JSON.stringify(productos));
  $(`#botonp1`).append("/Agenda agregado");
};

botonp1.addEventListener("click", agregarProducto1);

let botonp2 = document.getElementById("botonp2");

let agregarProducto2 = () => {
  let cantidad2 = parseInt(document.getElementById("qty2").value);
  productos.push(new Producto("anotador", 100, cantidad2));
  guardarLocal("lista productos", JSON.stringify(productos));
  $(`#botonp2`).append("/Anotador agregado");
};

botonp2.addEventListener("click", agregarProducto2);

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

/*storage y JSON*/
let guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

const almacenados = JSON.parse(localStorage.getItem("lista productos"));
console.log(almacenados);

/*funcionamiento simulador*/
$("#boton").on("click", () => {
  let resultado = montoTotal(productos[0], productos[1]);
  $(`body`).append(`<div class="text-center">
  <h3>Carrito: </h3>
<h4>${productos[0].nombre}: ${productos[0].cantidad} </h4>
<h4>${productos[1].nombre}: ${productos[1].cantidad} </h4>
  <h4>su total es ${resultado} </h4>
  </div>`);
});
