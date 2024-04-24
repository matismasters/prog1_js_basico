// Imprime una carita sonriente en la consola
// Los ojos deben tener una resolucion de al menos 4 caracteres

console.log("  _____             _____   ")
console.log(" /     \\           /     \\ ")
console.log("|  O O  |         |  O O  | ")
console.log(" \\  O  /           \\  O  / ")
console.log("  -----             -----   ")
console.log("                            ")
console.log("             /              ")
console.log("            /               ")
console.log("           /                ")
console.log("            ---             ")
console.log("                            ")
console.log("    (\\             /)      ")
console.log("      -------------         ")

data = [[1, 5], [2, 3], [3, 1], [4, 5], [5, 8]];
ejercicios.push(
  "Traducir el siguiente texto al Jeringoso: " +
  "   Dulce recuerdo que jamás olvido, " +
  "   oh, nombre querido que a mi corazón " +
  "   marca el latido con el que palpita" +
  "   cuando el pueblo grita"
)

ejercicios.push(
  "Traducir el siguiente texto al Jeringoso: " +
  "   Mi abuela con la radio en el sillón, " +
  "   el último penal y la explosión, " +
  "   el brillo de los ojos, " +
  "   mi vieja en 18, " +
  "   mi hermano y las banderas del camión."
)


Mi abuela con la radio en el sillón, el último penal y la explosión, el brillo de los ojos, mi vieja en 18, mi hermano y las banderas del camión.

console.log(" . . . . . . . . . . ");
console.log(" . . . . . . . . . . ");
console.log(" . . . . x . . . . . ");
console.log(" . . . . . . . . . . ");
console.log(" . . . . . . . . . . ");
console.log(" x . . x . . . . . . ");
console.log(" . . . . . . . . . . ");
console.log(" . x . . . . . . . . ");
console.log(" . . . . . . . . . . ");
console.log(" . . x . . . . . . . ");

// Ahora lo hacemos con bucles for y while

let maxX = 10;
let maxY = 10;

let graph = "";

for (let y = maxY; y >= 0; y--) {
  for (let x = 0; x <= maxX; x++) {
    // En vez de esto vamos a usar un bucle while para encontar el punto: let point = data.find((point) => point[0] === x && point[1] === y);
    let point = false;
    let i = 0;

    while (i < data.length && !point) {
      if (data[i][0] === x && data[i][1] === y) {
        point = true;
      }
      i++;
    }

    if (point) {
      graph += "x ";
    } else if (x === 0 && y === 0) {
      graph += "o ";
    } else if (x === 0) {
      graph += "| ";
    } else if (y === 0) {
      graph += "- ";
    } else {
      graph += ". ";
    }
  }
  graph += "\n";
}

console.log(graph);

data = [[1, 5], [2, 3], [3, 1], [4, 5], [5, 8]];
ejercicios.push(
  "El array anterior contiene las coordenadas de 5 puntos " +
  "en una gráfica. El primer valor es la coordenada en X y " +
  "el segundo la coordenada en Y. " +
  "Imprime la gráfica en la consola, con cada punto en su " +
  "coordenada correspondiente. La grafica no lleva linea." +
  "El máximo valor de X e Y es 10."
)

data = ["uno", "dos", "tres", "cinco", "seis", "siete"];
ejercicios.push(
  "Imprimir en la consola si la palabra 'tres', esta en el Array. " +
  "Imprimir en la consola si la palabra 'cuatro', esta en el Array. " +
  "Imprimir en la consola cuantas palabras empiezan con 's'. "
)

data = ["lluvia", "granizo", "tormenta electrica", "tornado"];
ejercicios.push(
  "Imprimir en la consola si algun elemento del array tiene " +
  "mas de una palabra"
)