/*
    Uma closure ocorre normalmente quando uma função
    é declarada dentro do corpo de outra, e a função anterior
    referencia variaveis locais da funçao exterior
*/

function qualSeuNome(name) {
  const msg = `O seu nome é:`;
  function nome() {
    return `${msg} ${name}`;
  }

  return nome();
}

console.log(qualSeuNome("Douglas"));

function calculadora(num1, num2) {
  const msg = "resultado = ";
  const soma = () => {
    return `${msg} ${num1 + num2}`;
  };
  const subtracao = () => {
    return `${msg} ${num1 - num2}`;
  };
  const multiplicacao = () => {
    return `${msg} ${num1 * num2}`;
  };
  const divisao = () => {
    return `${msg} ${num1 / num2}`;
  };

  return {
    soma: soma(),
    subtracao: subtracao(),
    multiplicacao: multiplicacao(),
    divisao: divisao(),
  };
}

//você pode acessar os objetos do retorno depois de chamar a função
console.log(calculadora(10, 2));
