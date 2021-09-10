let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let retenciones = (x) => x * 0.21;
let noRemunerativo = (x) => x * 0.3;
let sueldoNeto = parseFloat(prompt("Ingrese su sueldo neto"));
let sueldoBruto;
sueldoBruto = resta(
  suma(sueldoNeto, noRemunerativo(sueldoNeto)),

  retenciones(sueldoNeto)
);
alert("Su sueldo bruto es =" + sueldoBruto);
