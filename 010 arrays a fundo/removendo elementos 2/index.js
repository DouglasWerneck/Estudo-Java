/*
    slice = Pega os dados dentro de um array de um range sem quebrar o array ele faz uma copia do array e retorna o valor que foi pegado
    splice = remove os dados de um array dentro de um range faz uma copia do array e retorna o valor que foi removido

*/

let arr = [
  { nome: "Douglas", tel: "(99) 99999-9999" },
  { nome: "Thais", tel: "(99) 99999-9999" },
  { nome: "Joe", tel: "(99) 99999-9999" },
  { nome: "Ge", tel: "(99) 99999-9999" },
  { nome: "André", tel: "(99) 99999-9999" },
];

console.table(arr);

const newArr = arr.slice(0, 3);
console.table(newArr);

const newArr2 = arr.splice(0, 3);
console.table(newArr2)
