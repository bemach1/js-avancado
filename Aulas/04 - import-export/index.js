//Sem default
// import {criar, atualizar} from './entidades/produtos.js'
// Com default
// import produto, {criar} from './entidades/produtos.js'
// import * as produtosExportados from './entidades/produtos.js'
// import dadosProdutos from './dados/produtos.mjs'


// produtosExportados.buscar()

// produto.buscarPorNome()
// console.log(dadosProdutos)

//Importando varios dados de arquivos diferentes

// import db from './dados/index.mjs'

// console.log(db.produtos)
// console.log(db.status)

// const produto =  {nome: "Produto1"};
// db.pedidos.push(produto)

// console.log(db.pedidos)


//Importação Dinamica

function teste(){
    import("./dados/index.mjs")
    .then(dados => {
        console.log(dados.default)
    })
}

console.log("INICIO")
teste()
console.log("FIM")



