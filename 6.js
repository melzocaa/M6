function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    if (erro instanceof SyntaxError) {
      return null;
    }

    // Caso seja outro tipo de erro, não devemos escondê-lo.
    throw erro;
  }
}

console.log(safeParse('{"nome": "Leandromeda"}'));
console.log(safeParse("texto inválido"));
// null
