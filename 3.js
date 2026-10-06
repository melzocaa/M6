function verificarNumero(valor) {
  if (typeof valor !== "number") {
    console.log("Erro: era esperado um número.");
    return;
  }

  console.log("Número válido:", valor);
}

verificarNumero(25);
verificarNumero("25");

