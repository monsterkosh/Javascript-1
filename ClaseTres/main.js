let nombre = prompt("Decime tu nombre");

while (nombre != "BASTA") {
  switch (nombre) {
    case "Camila":
      alert("Hola tutora!");
      break;
    case "Emiliano":
      alert("Hola Profe!");
      break;
    case "Paulita":
      alert("Hola creadora!");
      break;
    default:
      alert("Hola intrusx!");
      break;
  }
  nombre = prompt("Decime tu nombre");
}
