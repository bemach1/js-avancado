/**Primeira parte abstração e definição de class */

// const texto = "WESDRAS"
// const numero = 1
// const verdade = true


// class Produto{
//     codigo = null
//     nome = ""

// }

// class Pedido{
//     codigo = null
//     nome = ""
// }

// function adicionarProduto(produto){
//     if(!(produto instanceof Produto)){
//         throw new Error("Produto inválido")
//     }

//     meusProdutos.push(produto)
// }


// const meusProdutos = []
// const produtoObj = { codigo : 1, nome : "Refrigerante" }
// const produtoObj2 = { codigo : 2, nome : "Pizza"}
// const produtoObj4 = new Produto()

// const produtoObj3 = new Produto()
// produtoObj3.codigo = 3
// produtoObj3.nome = "Suco"

// const novoPedido = new Pedido()

// adicionarProduto(produtoObj3)
// adicionarProduto(produtoObj4)
// // adcionarProduto({id: 5, name: "Hamburguer" })
// adicionarProduto(novoPedido)

// console.log(produtoObj)
// console.log(produtoObj2)
// console.log(produtoObj3)
// console.log(produtoObj4)


// console.log(meusProdutos)


/**Parte 2 Conceito de contrutor  */

// class Produto{
//     codigo = null
//     nome = ""

//     constructor(codigo, nome){
//         this.codigo = codigo
//         this.nome = nome
//     }

//     MostraNome(){
//         return this.nome
//     }
// }

// let produto1 = new Produto(1, "Refrigerante")
// let produto2 = new Produto(2, "Pizza")
// let produto3 = new Produto();


// console.log(produto1)
// console.log(produto1.valor)
// console.log(produto3)

/** Parte 3 Propriedades privadas e públicas */

class Produto{
    #codigo = null
    #nome = ""

    constructor(codigo, nome){
        this.#codigo = codigo
        this.#nome = nome
    }

    get codigo(){
        return this.#codigo
    }
    
    get nome(){
        return this.#nome
    }

    set nome(value){
        this.#nome = `Refrigerante ${value}` 
    }

    mostrarDados(){
        console.log("Meu código é:", this.#codigo)
        console.log("Meu nome é:", this.#nome)
    }
}

let refrigerante = new Produto(1, "Refrigerante")

refrigerante.nome = "Coca"

console.log(refrigerante)

refrigerante.nome = "Fanta"

console.log(refrigerante)
console.log(refrigerante.codigo)
// refrigerante.mostrarDados()

// console.log(refrigerante.mostrarCodigo())
// console.log(refrigerante.nome)