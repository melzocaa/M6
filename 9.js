function soma(a, b) {
  console.log("Valor de a:", a);
  console.log("Valor de b:", b);

  const resultado = a + b;

  console.log("Resultado da soma:", resultado);

  return resultado;
}

console.log("Antes de chamar a função.");

console.log(soma(2, undefined));

console.log("Depois de chamar a função.");

// A causa do NaN é que b recebeu undefined.
// Ao fazer 2 + undefined, o JavaScript não consegue obter
// um número válido para a operação e o resultado é NaN.