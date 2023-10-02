const num = [1,2,3,4,5]

console.log(num)
console.log(...num)
//spread operator são os ... que adicionamos para remover os elementos de array para utilizar funcionalidades
console.log(Math.max(num))
//nesse console.log vamos receber um NaN pois o formato de retorno da const num é um array
console.log(Math.max(...num))
//nesse console.log conseguimos fazer um spread retornando apenas os valores do array para utilizar outras funcionalidades Js
