class Produto{
    #id = 0
    nome = ""

    constructor(nome){
        this.nome = nome
    }

    criarEtiqueta(){
        return ` Produto : ${this.nome}`
    }

    calcularFrete(){
        throw new Error("Metodo não implementado")
    }
    
}

class Bebida extends Produto{
    litros = 0;
    constructor(nome, litros){
        super(nome)
        this.litros = litros
    }

    criarEtiqueta(){
        let etiqueta = super.criarEtiqueta()

        return `${etiqueta}
                Tipo : Bebida`
    }
}

let refrigerante = new Bebida("Coco cola", 2)

console.log(refrigerante)
console.log(refrigerante instanceof Bebida)
console.log(refrigerante instanceof Produto)


class Comida extends Produto{
    peso = 0;
    #ingredientes = []

    adicionarIngrediente(ingrediente){
        this.#ingredientes.push(ingrediente)
    }

    calcularFrete(){
        return 10
    }
    
}

class Pizza extends Comida{
    fatias = 0    
}

class Hamburguer extends Comida{
    tamanho = 0    
}


let minhaPizza = new Pizza("Pizza Chocolate")
minhaPizza.adicionarIngrediente("Granulado")
minhaPizza.adicionarIngrediente("Castanha")

let meuHambueguer = new Hamburguer("O maior")
meuHambueguer.adicionarIngrediente("Cebola")
meuHambueguer.adicionarIngrediente("Tomate")

console.log(minhaPizza)
console.log(meuHambueguer)

class ChocolateQuente extends Bebida{

}

let chocolate = new ChocolateQuente("Chocolate quente")

console.log(minhaPizza.calcularFrete())
// console.log(chocolate.calcularFrete())

console.log(minhaPizza.criarEtiqueta())
console.log(chocolate.criarEtiqueta())

/** PROGRAMAÇÃO FUNCIONAL */
console.log("PROPOTYPE")
console.log(chocolate.__proto__)

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.ExbirNomeCompleto = () => {
        return `${nome} ${sobrenome}`
    }
}

function PessoaFisica(nome, sobrenome){
    Object.call(this, nome, sobrenome)
}

// let wesdras = new PessoaFisica("Wesdras", "Alves")
// wesdras.prototype = Object.create(Pessoa)

// console.log(wesdras)
// console.log(wesdras.ExbirNomeCompleto())
