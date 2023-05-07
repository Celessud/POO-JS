const prompt = require("prompt-sync")();
const { saludar, despedir } = require("./funciones");

console.log("Welcome to the jungle");

const name = prompt("Ingrese su nombre: ");

//console.log(`Bienvenido ${name}`);

saludar(name);

despedir();
