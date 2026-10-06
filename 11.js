function testeDebug(x) {
  const y = x * 2;

  debugger;

  return y;
}

testeDebug(5);

/*
Relatório:

Quando a execução chega à instrução debugger, o navegador pausa
automaticamente a execução do programa. Nesse momento é possível
visualizar os valores das variáveis, acompanhar a execução linha
por linha e analisar a call stack.
*/