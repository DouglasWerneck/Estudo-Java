/*
    O strict mode elimina alguns erros silenciosos
    que passariam batido do JavaScript e os faz emitir erros

    Além disso, essa forma corrige alguns erros que tornam o Javascript 
    dificil de ser otimizado, então algumas vezes os codigos no modo estrito
    rodam mais otimizados e velozes do que os codigos no modo "normal"

    Evita hoisting e palavras reservadas.

*/
"use strict";
// var arguments;
(() => {
  teste = "teste";
})();

console.log(teste)
