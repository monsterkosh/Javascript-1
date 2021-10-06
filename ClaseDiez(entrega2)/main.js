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
  console.log("Agenda agregado");
};

botonp1.addEventListener("click", agregarProducto1);

let botonp2 = document.getElementById("botonp2");

let agregarProducto2 = () => {
  let cantidad2 = parseInt(document.getElementById("qty2").value);
  productos.push(new Producto("anotador", 100, cantidad2));
  guardarLocal("lista productos", JSON.stringify(productos));
  console.log("Anotador agregado");
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
// function verification(param1, param2) {
//   if (isNaN(param1) || isNaN(param2)) {
//     alert("solo numeros");
//     cantidad1 = parseInt(prompt("ingrese cantidad de producto 1"));
//     cantidad2 = parseInt(prompt("ingrese cantidad de producto 2"));
//     verification(cantidad1, cantidad2);
//   }
// }
// verification(cantidad1, cantidad2);

/*storage y JSON*/
let guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

// guardarLocal("lista productos", JSON.stringify(productos));
const almacenados = JSON.parse(localStorage.getItem("lista productos"));
console.log(almacenados);

/*funcionamiento simulador*/
let boton = document.getElementById("boton");
let respuesta = () => {
  let resultado = montoTotal(productos[0], productos[1]);
  let total = document.createElement("h2");
  total.innerHTML = "su total es " + resultado;
  document.body.appendChild(total);
};
boton.addEventListener("click", respuesta);
let total = document.createElement("h2");
total.innerHTML = "su total es " + resultado;
document.body.appendChild(total);
