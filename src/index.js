const contador = require("./contadorFuncional");

console.log("----Contador----\n");

console.log(`Valor de contador: ${contador.valorDelContador()}`);

contador.incrementar();
console.log(`Valor de contador: ${contador.valorDelContador()}`);

contador.decrementar();
console.log(`Valor de contador: ${contador.valorDelContador()}`);

/* Fin del juego */
console.log("\n----Fin del juego----\n");
