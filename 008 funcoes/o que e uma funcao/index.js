/*
    O que é uma função ?
    É um conjunto de instruções que executa uma tarefa ou calcula um valor
*/

// 1 - Functions declaration
function isValidDeclaration() {
  const soma = 1 + 2;

  if (soma === 3) {
    return true;
  } else {
    return false;
  }
}
console.log(isValid());

// 2 - Function expression
const isValidExpression = function () {
  return false;
};

// 3 - Arrow Function
const isValidArrow = () => {
  const multiplicacao = 2 * 2;
  return multiplicacao;
};
