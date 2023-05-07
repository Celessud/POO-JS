let acumulador = 0;

function valorDelContador(params) {
  return acumulador;
}

function incrementar() {
  acumulador++;
}

function decrementar() {
  acumulador--;
}

module.exports = { valorDelContador, incrementar, decrementar };
