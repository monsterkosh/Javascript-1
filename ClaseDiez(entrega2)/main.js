let boton = document.getElementById("boton");
boton.addEventListener("click", respuesta);
function respuesta() {
  /*variables globales*/
  let saludo = alert(
    "Bienvenidx a la tienda: nuestros productos son: 1-Agenda 2-Anotador"
  );
  let cantidad1 = parseInt(
    prompt("ingrese cantidad de producto 1 (Agenda, precio:$200)")
  );
  let cantidad2 = parseInt(
    prompt("ingrese cantidad de producto 2(Anotador, precio:$100)")
  );

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
  productos.push(new producto("agenda", 200, cantidad1));
  productos.push(new producto("anotador", 100, cantidad2));

  /*storage y JSON*/
  let guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  guardarLocal("lista productos", JSON.stringify(productos));
  const almacenados = JSON.parse(localStorage.getItem("lista productos"));
  let listaAlmacenados = [];
  for (const objeto of almacenados) {
    listaAlmacenados.push(new producto(objeto));
  }
  console.log(listaAlmacenados);

  /*funcionamiento simulador*/
  let resultado = montoTotal(productos[0], productos[1]);
  alert("su total es " + resultado);
  alert("Gracias por tu compra!");
}
