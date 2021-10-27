/*clases*/
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.cantidad = 0;
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

let almacenados = JSON.parse(localStorage.getItem("lista productos"));
console.log(almacenados);
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

let cantidad1 = 0;
productos.push(new Producto("Agenda", 200, cantidad1));
guardarLocal("lista productos", JSON.stringify(productos));

/*producto 2*/

let cantidad2 = 0;
productos.push(new Producto("Anotador", 100, cantidad2));
guardarLocal("lista productos", JSON.stringify(productos));

/*producto 3*/
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
  // $("#prod1").append(
  //   `<div class=""> <p>${productos[0].nombre}: ${productos[0].cantidad} </p> </div>`
  // );
  // let inputValor1 = document.getElementById(`inputValor1`);
  // inputValor1.setAttribute(`value`, `${productos[0].cantidad}`);
  //productos[0].cantidad = parseInt(inputValor1);
  /*cantidad 2*/
  // $("#prod2").append(
  //   `<div class=""> <p>${productos[1].nombre}: ${productos[1].cantidad} </p> </div>`
  // );
  // let inputValor2 = document.getElementById(`inputValor2`);
  // inputValor2.setAttribute(`value`, `${productos[1].cantidad}`);
  //productos[1].cantidad = parseInt(inputValor2);
  let resultado = montoTotal(productos[0], productos[1]);
  /*resultado*/
  console.log($(`#total`)[0]);

  $(`#total`).append(`${resultado}`);

  $(`.btn btn-outline-warning`).prop("disabled", true);

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

mapeo(productos);

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
    mapeo(productos);
    $(`#volverInicio`).remove();
  });
});
/*funcionamiento botones*/
let buttons = document.getElementsByClassName("btn btn-outline-warning");
console.log(buttons);

function sweetAlert() {
  console.log(this.parentNode.childNodes[3].innerText);
  let name = this.parentNode.childNodes[3].innerText;
  let agregarCarrito = productos.find((prod) => prod.nombre == name);
  agregarCarrito.cantidad += 1;
  guardarLocal("lista productos", JSON.stringify(productos));
  console.log(agregarCarrito);
  console.log("producto agregado");
  Swal.fire("Producto agregado", "Producto agregado al carrito", "success");

  if (agregarCarrito.nombre === `Agenda`) {
    $(`#product1`)
      .append(`<div class="row"><button  id="menosProd1" class="col btn btn-warning m-5">-</button>
      <p class="col my-5">${productos[0].cantidad} </p>
      <button id="masProd1" class="col btn btn-warning m-5">+</button>
      </div>
  
    `);
    $(`#buttonCompra1`).prop("disabled", true);
  }
  if (agregarCarrito.nombre === `Anotador`) {
    $(`#product2`)
      .append(`<div class="row"><button  id="menosProd2" class="col btn btn-warning m-5">-</button>
      <p class="col my-5">${productos[1].cantidad} </p>
      <button id="masProd2" class="col btn btn-warning m-5">+</button>
      </div>
  
    `);
    $(`#buttonCompra2`).prop("disabled", true);
  }
}
/*botones + y - */
if (productos[0].cantidad > 0) {
  $(`#menosProd1`).click(() => {
    productos[0].cantidad -= 1;
    guardarLocal("lista productos", JSON.stringify(productos));
  });
}
$(`#masProd1`).click(() => {
  productos[0].cantidad += 1;
  guardarLocal("lista productos", JSON.stringify(productos));
});

if (productos[1].cantidad > 0) {
  $(`#menosProd2`).click(() => {
    productos[1].cantidad -= 1;
    guardarLocal("lista productos", JSON.stringify(productos));
  });
}
$(`#masProd2`).click(() => {
  productos[1].cantidad += 1;
  guardarLocal("lista productos", JSON.stringify(productos));
});

for (let button of buttons) {
  button.addEventListener("click", sweetAlert);
}
