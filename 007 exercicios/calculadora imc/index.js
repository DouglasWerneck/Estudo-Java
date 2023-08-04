const peso = 78;
const altura = 1.69;
const imc = Number((peso / (altura * altura)).toFixed(2));
console.log(imc);

switch (true) {
  case imc < 17:
    console.log("muito abaixo do peso");
    break;
  case imc >= 17 && imc <= 18.49:
    console.log("muito abaixo do peso");
    break;
  case imc >= 17 && imc <= 18.49:
    console.log("Abaixo do peso");
    break;
  case imc >= 18.5 && imc <= 24.99:
    console.log("Peso Normal");
    break;
  case imc >= 25 && imc <= 29.99:
    console.log("Acima do peso");
    break;
  case imc >= 30 && imc <= 34.88:
    console.log("Obesidade I");
    break;
  case imc >= 35 && imc <= 39.99:
    console.log("Obesidade II");
    break;

  default:
    break;
}
