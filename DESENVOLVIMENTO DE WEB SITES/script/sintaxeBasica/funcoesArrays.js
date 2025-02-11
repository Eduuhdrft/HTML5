const frutas = ["Morango","Kiwi","Manga","Laranja" ,"Banana"]

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

frutas.push("abacaxi")
console.log(frutas)

frutas.pop()
console.log(frutas)

let listaDeMaterialEscolar =["Lápis", "Caneta","Cola", "Caderno", "borracha"]

listaDeMaterialEscolar.forEach((material)=> {
    console.log(material)
})


let posicaoDoCaderno =listaDeMaterialEscolar.findIndex((material)=> material ==="Cola")
console.log(posicaoDoCaderno)

listaDeMaterialEscolar = listaDeMaterialEscolar.filter((material) => material.startsWith("C"))

console.log(listaDeMaterialEscolar)

const produtos = [
    {
        id:1,
        nome:"Calça",
        preco: 200
    },
    {
        id:2,
        nome:"Camiseta",
        preco:70
    },
    {
        id:3,
        nome:"Tenis",
        preco:300 
    }
]

const produtoProcurado = produtos.find((produto)=> produto.id===2)

console.log(produtoProcurado)

const total = produtos.reduce((totalCompra, produto) => totalCompra + produto.preco, 0)

console.log("O total da compra é:R$", total)


