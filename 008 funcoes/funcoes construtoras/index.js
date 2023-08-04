function Name(name, sobrenome) {
  this.name = name;
  this.surname = () => {
    const nomeCompleto = `${this.name} ${sobrenome}`;
    return nomeCompleto;
  };
}

const douglas = new Name("Douglas", "Werneck");

console.log(douglas.surname());

//Pode passar os argumentos tanto na função construtora quanto nas funções dentro da função construtora

function Calculadora() {
  this.soma = (num1, num2) => {
    return `${num1 + num2}`;
  };

  this.subtracao = (num1, num2) => {
    return `${num1 - num2}`;
  };
}

const calculadora = new Calculadora();
console.log(calculadora.soma(1,1));
console.log(calculadora.subtracao(1,1));

