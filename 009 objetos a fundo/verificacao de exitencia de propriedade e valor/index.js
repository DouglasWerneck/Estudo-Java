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

// hasOwnProperty | propertyName is tenis

console.log(tenis.hasOwnProperty("teste"));
console.log(tenis.hasOwnProperty("tamanho"));

if (tenis.hasOwnProperty("tamanho")) {
  console.log("Existe tenis");
} else {
  console.log("Não tem essa propriedade");
}

console.log("tamanho" in tenis)
