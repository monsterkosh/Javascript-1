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

let cantidad1 = 0;
productos.push(new Producto("agenda", 200, cantidad1));
guardarLocal("lista productos", JSON.stringify(productos));
$(`#botonp1`).click(() => {
  productos[0].cantidad++;
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Agenda agregada al carrito", "success");
});

/*boton 2*/

let cantidad2 = 0;
productos.push(new Producto("anotador", 100, cantidad2));
guardarLocal("lista productos", JSON.stringify(productos));
$(`#botonp2`).click(() => {
  productos[1].cantidad++;
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Anotador agregado al carrito", "success");
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

/*newsletter*/
urlget = "https://jsonplaceholder.typicode.com/posts";
let mail = $(`#mail`).val();

$(`#news`).click(() => {
  $.ajax({
    method: "POST",
    url: urlget,
    data: mail,
    success: () => {
      $(`#mensaje`).append("<h3>Registrado!</h3>");
      $(`#news`).prop("disabled", true);
    },
  });
});

/*busqueda
$(`#buscar`).click(() => {

});
*/
