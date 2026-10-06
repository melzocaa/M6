function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

externo(4);

/*
STEP INTO:
Entra na função interno() para acompanhar sua execução linha por linha.

STEP OVER:
Executa a chamada de interno() sem entrar nela, passando para a
próxima linha da função atual.

STEP OUT:
Quando estamos dentro de interno(), executa o restante dessa função
e retorna para externo().
*/

