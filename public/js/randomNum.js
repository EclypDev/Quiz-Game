let usedNumbers = [];
const randomNumber = (VecesRepetirMathRandom) => {
  const numerosAleatorios = new Set();

  for (let i = 0; i < VecesRepetirMathRandom; i++) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * 10 ); // Genera un número aleatorio entre 0 y 99
    } while (numerosAleatorios.has(numeroAleatorio) || usedNumbers.includes(numeroAleatorio)); // Se asegura de que el número no se repita

    numerosAleatorios.add(numeroAleatorio); // Agrega el número al conjunto
    usedNumbers.push(numeroAleatorio); // Agrega el número al arreglo de números utilizados
  }

  return Array.from(numerosAleatorios); // Convierte el conjunto a un array y lo devuelve
}

export { randomNumber };
