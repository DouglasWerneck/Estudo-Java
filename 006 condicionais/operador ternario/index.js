const velocidade = 90;
const warn = 85;

//Operador ternario é uma forma mais simples de utilizar o if e o else
//sintaxe condição ? true : false
const condição =
  velocidade >= warn
    ? console.log("recebeu uma multa")
    : console.log("continue andando");

if (velocidade >= warn) {
  console.log("recebeu uma multa");
} else {
  console.log("continue andando");
}
