function tenis(tamanho, estoque, preco){
    return {
        tamanho,
        estoque,
        preco: preco
    }
}

console.log(tenis(35, true, 172))

const tamanho = 35
const estoque = true
const preco = 172

const tenis2 = {
    tamanho,
    estoque,
    preco
}

console.log(tenis2)

const tenis3 = {
    tamanho: 35,
    getTamanho: () =>{
        return tamanho
    }
}

console.log(tenis3.getTamanho())