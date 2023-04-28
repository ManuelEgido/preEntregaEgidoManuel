const capital = parseInt(prompt("Ingresa su capital invertir: "));

const interes = parseInt(prompt("Ingresa su tasa de interes: "));

const plazo = parseInt(prompt("Ingresa la cantidad de años: "));

if (capital <= 0 ) {
    alert ("El capital debe ser mayor a 0")
}
if (interes <= 0 ) {
    alert ("El interes debe ser mayor a 0")
}
if (plazo <= 0 ) {
    alert ("El plazo debe ser mayor a 0")
}
const calcularCap = (cap,tasa) => cap*(tasa/100);

let capAcumulado = capital+(calcularCap(capital,interes));
 
for (var i = 2; i <= plazo; i++) {
  capAcumulado += calcularCap(capAcumulado,interes);
}

alert(`Su capital acumulado es: ${capAcumulado}`);
