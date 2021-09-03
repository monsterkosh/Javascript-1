let nombre = prompt("Ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
if (nombre && apellido != "") {
  alert("Holis " + nombre + " " + apellido + " (ɔ◔‿◔)ɔ ♥");
} else if (nombre == "" && apellido == "") {
  alert("No escribiste nada ( ˘︹˘ )");
} else if (nombre == "" || apellido == "") {
  alert("Te faltó algo(ㆆ_ㆆ)");
}
