/*
    Objeto: TENIS (PROPRIEDADES) "cadaço", "palmilha"
    Objeto: CELULAR (PROPRIEDADES)
    Objeto: DRONE (PROPRIEDADES)
    
    Propriedades / atributos / funcionalidades
*/

let tenis = {
  tipo: "Corrida",
  cardaco: "G",
  estoque: false,
  tamanho: {
    palmilha: 39,
    tenis: 40,
    caixa: {
      altura: 35,
      largura: 40,
      profundidade: 10,
    },
  },
  marcaArray: ['Nike', 'adidas', 'etc'],
  marca: [
    {
      nome: "Nike",
    },
    {
      nome: "Adidas",
    },
  ],
  getmarca: function(param){
    return this.marca[param]
  },
  getmarcaArray: function(param){
    return this.marca[param]
  }
};

console.log(tenis)
console.log(tenis.tipo)
console.log(tenis.marca)