function soma(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return console.log("Você não digitou um numero");
}

console.log(soma(1, 5));

function subtracao() {
    return arguments
}

console.log(subtracao(1,2,3))
