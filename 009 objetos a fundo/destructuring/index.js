const tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [
    {
      nome: "Nike",
    },
    {
      nome: "Adidas",
    },
  ],
  secret: 123456,
  n: 5,
  link: { a: "a e = a", b: { c: "c e = c" } },
};

const { tamanho, estoque, marcas } = tenis;

console.log(tamanho, estoque, marcas);

const {secret: Randon } = tenis
console.log(Randon)

const {
  link: {
    b: { c },
  },
} = tenis;

console.log(c);

console.log(tenis.link.a, tenis.link.b.c)
