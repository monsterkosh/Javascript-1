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
/*storage y JSON*/
let guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

const almacenados = JSON.parse(localStorage.getItem("lista productos"));
console.log(almacenados);
/*objetos y arrays*/
const productos = [];

/*boton 1*/

//let botonp1 = document.getElementById("botonp1");
let cantidad1 = 0;
$(`#botonp1`).click(() => {
  cantidad1 += 1;
  productos.push(new Producto("agenda", 200, cantidad1));
  guardarLocal("lista productos", JSON.stringify(productos));
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Producto agregado al carrito", "success");
});

/*boton 2*/

let cantidad2 = 0;
$(`#botonp2`).click(() => {
  cantidad2 += 1;

  productos.push(new Producto("anotador", 100, cantidad2));
  guardarLocal("lista productos", JSON.stringify(productos));
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Producto agregado al carrito", "success");
});

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

/*funcionamiento simulador*/
$("#boton").on("click", () => {
  let resultado = montoTotal(productos[0], productos[1]);
  if ($(`#contCarrito`).length == 0) {
    $(`#carrito`).append(`<div id="contCarrito" class="text-center">
    <h2 class="display-4">Carrito:</h2>
    <div class="container">
      <p>${productos[0].nombre}: ${productos[0].cantidad} </p>
    </div>
    <div class="container">
      <p>${productos[1].nombre}: ${productos[1].cantidad} </p>
    </div>
    <div>
      <h3>su total es ${resultado} </h3>
    </div>
      </div>`);
  }
});

/*animaciones*/
$(`#logo`).click(() => {
  $(`#logo`).slideUp(`fast`).delay(1000).slideDown(`fast`);
});
