let mensaje = "Imprimir un mensaje en la consola que diga 'Guerra de las Galaxias'";
mensaje = mensaje.toLowerCase();

let mensajeEnJeringoso = "";

for (let i = 0; i < mensaje.length; i++) {
  let letra = mensaje[i];
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    // excepcion para la palabra para el uso de qu
    if (letra === "u" && mensaje[i - 1] === "q") {
      mensajeEnJeringoso += letra;
    } else if (letra === "u" && mensaje[i - 1] === "g") {
      mensajeEnJeringoso += letra;
    } else if (letra === "o" && mensaje[i + 1] === " ") {
      mensajeEnJeringoso += letra;
    } else {
      mensajeEnJeringoso += letra + "p" + letra;
    }
  } else {
    mensajeEnJeringoso += letra;
  }
}

console.log(mensajeEnJeringoso); // "Hopolapa Mupundopo"

// Now we reverse the process:
let mensajeOriginal = "";

for (let i = 0; i < mensajeEnJeringoso.length; i++) {
  let letra = mensajeEnJeringoso[i];
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    if (mensajeEnJeringoso[i + 1] === "p") {
      mensajeOriginal += letra;
      i += 2;
    } else {
      mensajeOriginal += letra;
    }
  } else {
    mensajeOriginal += letra;
  }
}

console.log(mensajeOriginal);