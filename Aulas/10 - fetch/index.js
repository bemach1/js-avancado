// fetch("dados.txt")
// fetch("dados.json")


// function executaAposFinalizar(response){
//     if(response.ok){
//         console.log("Sucesso")
//     }
//     else{
//         console.log("Deu erro")
//     }
// }

// fetch("dados.json")
// .then(executaAposFinalizar)

const request = new Request("dados.json")

const init = {
    method: "GET",
    mode: "cors",
    cache: "no-cache"
}

// fetch(request,init)
// .then(response => {
//     if(response.ok){
//         return response.json()
//     }
// })
// .then(jsonData => {
//     console.log(jsonData)
// });


// fetch(request,init)
// .then(response => {
//     if(response.ok){
//         response.json()
//         .then(jsonData => {
//             console.log(jsonData)
//         })
//     }
// })

// fetch("dados.txt")
// .then(response => {
//     if(response.ok){
//         response.text()
//         .then(textData => {
//             console.log(textData)
//         })
//     }
// })

// const headers = new Headers()

// headers.append("content-type", "text/plain")

// fetch("dados.html", { headers : headers })
// .then(response => {
//     if(response.ok){
//         response.text()
//         .then(textData => {
//             console.log(textData)
//         })
//     }
// })

const url = "http://localhost:3000"

//Formas de mandar dados para o servidor
//1 (QueryString) - http://localhost:3000/produto?chave=valor&chave2=valor2
//2 (Parameters) - http://localhost:3000/produto/3
//3 (Body) - http://localhost:3000/produto
                // {chave:valor}
//GET = 1 e 2
//POST = 1,2 e 3
const botaoSalvar = document.querySelector("#salvar")
const botaoSalvarErro = document.querySelector("#salvar-erro")
const botaoBuscar = document.querySelector("#buscar")

botaoSalvar.addEventListener("click", () => {
    const headers = new Headers()

    headers.append("content-type", "application/json")

    const produto = {nome: "Produto 3", codigo: 3, valor: 20.2}
    const initProduto = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(produto)
    }

    fetch(`${url}/criar-produto`, initProduto)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            alert("Erro")
        }
    })
    .then(jsonData => {
        console.log(jsonData)
    })

})

botaoSalvarErro.addEventListener("click", () => {
    const headers = new Headers()

    headers.append("content-type", "application/json")

    const produto = {nome: "Produto 3", codigo: 3, valor: 20.2}
    const initProduto = {
        headers: headers,
        method: "POST",
        body: JSON.stringify(produto)
    }

    fetch(`${url}/criar-produto-erro`, initProduto)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            console.log(response.status)
            throw new Error("Erro no servidor")
        }
    })
    .then(jsonData => {
        console.log(jsonData)
    }).catch(erro => {
        console.log("CAIU NO ERRO")
        console.log(erro.message)
    })

})

botaoBuscar.addEventListener("click", () => {
    const headers = new Headers()

    fetch(`${url}/consultar-produto`, { headers : headers, mode: 'cors'})
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        console.log(jsonData)
    })
});
