const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort()); //metodo sort ordena em ordem alfabetica
console.log(stringArray.reverse()); // metodo reverse ordena ao contrario

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];
console.log(numberArray.sort((a, b) => a - b)); //função callback dizendo que a orem vai ser do inicio para o final
console.log(numberArray.sort((a, b) => b - a)); //função callback dizendo que a orem vai ser do final para o inicio
console.log(numberArray.sort((a, b) => a - b).reverse()); //usando o reverse pra dizer que vai ser do final para o inicio apesar da callback

const objectArray = [
  { nome: "Douglas" },
  { nome: "Thais" },
  { nome: "Ge" },
  { nome: "Joe" },
  { nome: "Andre" },
];

console.log(objectArray.sort((a, b) => a.nome.localeCompare(b.nome))); //ordenar o objeto em ordem alfabetica
console.log(objectArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse()); //ordenar em do final para o inicio

/*
    Se retornar um valor negativo, o valor de "a" sera ordenado  antes do "b"
    Se retornar 0, a ordenação de "a" e "b" não mudará
    Se retornar um valor positivo,  o valor de "b" sera ordenado  antes do "a"
*/