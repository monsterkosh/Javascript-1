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

/*objetos y arrays*/
let productos = [];

function mapeo(productos) {
  $("#cards")[0].innerHTML = "";
  for (let prod of productos) {
    if (prod.nombre === "Cuaderno") {
      $("#cards").append(`<div class="col-4 py-3">
      <img src="./media/producto3.jpg" alt="" width="200vr"/>
      <p class="prodName">${prod.nombre}</p>
      <p>$${prod.precio}</p>
      <br>
      <button  class="btn btn-secondary disabled">Próximamente</button>
        </div>`);
    }
    if (prod.nombre === "Anotador") {
      $("#cards").append(`<div class="col-4 py-3">
      <img src="./media/producto2.jpg" alt="" width="200vr" />
      <p class="prodName">${prod.nombre}</p>
      <p>$${prod.precio}</p>
      <br>
      <button id="buttonCompra2" class="btn btn-outline-warning" value="" >Comprar</button>
      <div id="product2"></div>
    </div>
    `);
    }
    if (prod.nombre === "Agenda") {
      $("#cards").append(
        `<div class="col-4 py-3">
      <img src="./media/index.jpg" alt="" width="200vr"/>
      <p class="prodName">${prod.nombre}</p>
      <p>$${prod.precio}</p>
      <br>
      <button id="buttonCompra1" class="btn btn-outline-warning" value="" >Comprar</button>
      <div id="product1"></div>
    </div>
    `
      );
    }
  }
}

/*producto 1*/

productos.push(new Producto("Agenda", 200, 0));
productos.push(new Producto("Anotador", 100, 0));
productos.push(new Producto("Cuaderno", 300, 0));
guardarLocal("lista productos", JSON.stringify(productos));

/*producto 3*/

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
let almacenados = JSON.parse(localStorage.getItem("lista productos"));
/*funcionamiento simulador*/
$("#boton").on("click", () => {
  let almacenados = JSON.parse(localStorage.getItem("lista productos"));
  almacenados = [
    new Producto(
      almacenados[0].nombre,
      almacenados[0].precio,
      almacenados[0].cantidad
    ),
    new Producto(
      almacenados[1].nombre,
      almacenados[1].precio,
      almacenados[1].cantidad
    ),
  ];
  let resultado = montoTotal(almacenados[0], almacenados[1]);
  /*resultado*/
  console.log($(`#total`));

  $(`#total`)[0].innerHTML = "total: " + resultado;

  $("#buttonCompra1").prop("disabled", true);
  $("#buttonCompra2").prop("disabled", true);
  $("#menosProd1").prop("disabled", true);
  $("#masProd1").prop("disabled", true);
  $("#menosProd2").prop("disabled", true);
  $("#masProd2").prop("disabled", true);
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

mapeo(almacenados);

/*busqueda*/
$(`#buscar`).click(() => {
  let infoBusqueda = document
    .getElementById(`stringBusqueda`)
    .value.toLowerCase();

  almacenadosFiltro = almacenados.filter(
    (prod) => prod.nombre.toLowerCase() == infoBusqueda
  );
  console.log(almacenadosFiltro);
  mapeo(almacenadosFiltro);

  $(`#resetBusqueda`).prepend(
    `<button id="volverInicio" class=" btn btn-warning m-4">Volver a Inicio</button>`
  );

  $(`#volverInicio`).click(() => {
    mapeo(almacenados);
    $(`#volverInicio`).remove();
  });
});
/*funcionamiento botones*/

function sweetAlert(e) {
  e.preventDefault();
  let almacenados = JSON.parse(localStorage.getItem("lista productos"));
  let name = this.parentNode.childNodes[3].innerText;
  let agregarCarrito = almacenados.find((prod) => prod.nombre == name);
  agregarCarrito.cantidad += 1;
  console.log(agregarCarrito);
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Producto agregado al carrito", "success");

  if (agregarCarrito.nombre === `Agenda`) {
    $(`#product1`)
      .append(`<div class="row"><button  id="menosProd1" class="col btn btn-warning m-5">-</button>
      <p id="cantidad1" class="col my-5">${almacenados[0].cantidad} </p>
      <button id="masProd1" class="col btn btn-warning m-5">+</button>
      </div>
  
    `);
    logicButtons();
  }
  if (agregarCarrito.nombre === `Anotador`) {
    $(`#product2`)
      .append(`<div class="row"><button  id="menosProd2" class="col btn btn-warning m-5">-</button>
      <p id="cantidad2" class="col my-5">${almacenados[1].cantidad} </p>
      <button id="masProd2" class="col btn btn-warning m-5">+</button>
      </div>
  
    `);
    logicButtons();
  }
}
/*botones + y - */
function logicButtons() {
  let almacenados = JSON.parse(localStorage.getItem("lista productos"));

  $("#menosProd1").click(() => {
    almacenados[0].cantidad -= 1;
    $("#cantidad1")[0].innerHTML = almacenados[0].cantidad;
    guardarLocal("lista productos", JSON.stringify(almacenados));
  });

  $(`#masProd1`).click(() => {
    almacenados[0].cantidad += 1;
    $("#cantidad1")[0].innerHTML = almacenados[0].cantidad;
    guardarLocal("lista productos", JSON.stringify(almacenados));
  });

  $(`#menosProd2`).click(() => {
    almacenados[1].cantidad -= 1;
    $("#cantidad2")[0].innerHTML = almacenados[1].cantidad;
    guardarLocal("lista productos", JSON.stringify(almacenados));
  });

  $(`#masProd2`).click(() => {
    almacenados[1].cantidad += 1;
    $("#cantidad2")[0].innerHTML = almacenados[1].cantidad;
    guardarLocal("lista productos", JSON.stringify(almacenados));
  });
}

let buttons = document.getElementsByClassName("btn btn-outline-warning");
for (let button of buttons) {
  button.addEventListener("click", sweetAlert);
}
