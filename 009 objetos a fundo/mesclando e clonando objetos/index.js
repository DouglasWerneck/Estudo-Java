let tenis = {
    tamanho : 45,
    estoque: true
}

let link = {link: {a: 'a', b: {c: 'c'}}}

let clone1 = tenis

console.log(clone1)

let mesclar = Object.assign(tenis, link)

console.log(mesclar)

let mesclar2 ={...tenis, ...link}

console.log(mesclar2)