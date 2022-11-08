/**Encapsulamento de produto */
// class Produto{
//     #id;
//     #nome;
//     valor = 0
//     imposto = 0;
//     #ingredientes = []
    
//     constructor(id, nome){
//         this.#id = id;
//         this.#nome = nome;
//     }

//     exibirValorComImposto(){
//         return this.valor + (this.valor * this.imposto) 
//     }

//     adicionarIngrediente(ingrediente){
//         if(!(ingrediente instanceof Ingrediente)){
//             throw new Error("Ingrediente invalido")
//         }

//         this.#ingredientes.push(ingrediente)
//     }

//     obterCaloriasTotais(){
//         return this.#ingredientes.reduce((prev, cur) => {
//             return prev + cur.calorias
//         },0)
//     }

// }

// class Ingrediente{
//     nome;
//     calorias = 0;

//     constructor(nome, calorias)
//     {
//         this.nome = nome;
//         this.calorias = calorias;
//     }

// }

// const refrigerante = new Produto(1,"Coca")

// refrigerante.valor = 10
// refrigerante.imposto = 0.05

// let ingrediente1 = new Ingrediente("Açucar", 10)
// let ingrediente2 = new Ingrediente("Agua", 100)
// let ingrediente3 = new Ingrediente("Corante", 50)

// refrigerante.adicionarIngrediente(ingrediente1)
// refrigerante.adicionarIngrediente(ingrediente2)
// refrigerante.adicionarIngrediente(ingrediente3)

// console.log(refrigerante.obterCaloriasTotais())
// // refrigerante.adicionarIngrediente({nome: "Açucar", calorias: 10})

// console.log(refrigerante.exibirValorComImposto())
// console.log(refrigerante)

class Botao{
    #id;
    text = ""
    #cssClass = []

    constructor(id){
        this.#id = id
    }

    get id(){
        return this.#id
    }

    addClass(classCss){
        this.#cssClass.push(classCss)
    }

    get cssClass(){
        return [...this.#cssClass];
    }

    render(element){
        let html = `<button id="${this.#id}">${this.text}</button>`;
        console.log(html)

        element.innerHTML = html
    }
}

const div1 = document.querySelector(".data-1");
const div2 = document.querySelector(".data-2");

const botaoOK = new Botao("btnOK")
botaoOK.text = "OK"
console.log(botaoOK.id)

// botaoOK.id = "novoBotao"

botaoOK.addClass("class1") 

console.log("Class do botao OK", botaoOK.cssClass)

//Referencia dos #cssClass do objeto botoaoOK
let array = botaoOK.cssClass
array.pop()

console.log("Class do botao OK", botaoOK.cssClass)


botaoOK.render(div1)


const botaoSalvar = new Botao("btnSalvar")
botaoSalvar.text = "Salvar"
botaoSalvar.render(div2)


