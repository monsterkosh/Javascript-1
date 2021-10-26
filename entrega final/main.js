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
productos.push(new Producto("Agenda", 200, cantidad1));
guardarLocal("lista productos", JSON.stringify(productos));
$(`#botonp1`).click(() => {
  productos[0].cantidad++;
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Agenda agregada al carrito", "success");
});

/*boton 2*/

let cantidad2 = 0;
productos.push(new Producto("Anotador", 100, cantidad2));
guardarLocal("lista productos", JSON.stringify(productos));
$(`#botonp2`).click(() => {
  productos[1].cantidad++;
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Anotador agregado al carrito", "success");
});
productos.push(new Producto("Cuaderno", 300, 0));
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
  /*cantidad 1*/
  $(`#prod1`).prepend(
    `<div class=""> <p>${productos[0].nombre}: ${productos[0].cantidad} </p> </div>`
  );
  let inputValor1 = document.getElementById(`inputValor1`);
  inputValor1.setAttribute(`value`, `${productos[0].cantidad}`);
  //productos[0].cantidad = parseInt(inputValor1);
  /*cantidad 2*/
  $(`#prod2`).prepend(
    `<div class=""> <p>${productos[1].nombre}: ${productos[1].cantidad} </p> </div>`
  );
  let inputValor2 = document.getElementById(`inputValor2`);
  inputValor2.setAttribute(`value`, `${productos[1].cantidad}`);
  //productos[1].cantidad = parseInt(inputValor2);
  let resultado = montoTotal(productos[0], productos[1]);
  /*resultado*/
  $(`#total`).append(`${resultado}`);

  $(`#botonp1`).prop("disabled", true);
  $(`#botonp2`).prop("disabled", true);
  $(`#boton`).prop("disabled", true);
  $(`#mostrar`).show();
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

/*busqueda*/
$(`#buscar`).click(() => {
  let infoBusqueda = document
    .getElementById(`stringBusqueda`)
    .value.toLowerCase();

  const resultadosFiltro = productos.filter((product) => {
    const nombreProducto = product.nombre.toLowerCase();
    return nombreProducto.includes(infoBusqueda);
  });
  console.log(resultadosFiltro);
});
