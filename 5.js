function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erro) {
    return null;
  }
}

console.log(safeParse('{"nome": "Melzoca"}'));
// { nome: "Leandromeda" }

console.log(safeParse("texto inválido"));
// null
