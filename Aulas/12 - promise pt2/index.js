// {
//     const minhaPromise = new Promise((resolve, reject) => {
//         resolve()
//     })

//     minhaPromise.then(() => {
//         console.log("Resolveu")
//     })
//     .catch(() => {
//         console.log("Erro")
//     })
//     .finally(() => {
//         console.log("Final")
//     })

//     fetch("http://localhost:3000/aluno/todos")
//     .then(response => {
//         console.log(response)
//     })
// }

// {
//     let listaPromiseAluno = []

//     for(let i = 0;i<=5;i++){
//         let body = {
//             matricula : i,
//             nome: `Nome ${i}`
//         }

//         let promise = fetch("http://localhost:3000/aluno", { method: "POST", body: JSON.stringify(body)})
//                         .then(response => {
//                             if(response.status != 200){
//                                 throw new Error("Erro no servidor")
//                             }
//                         })
//         // let promise = new Promise((resolve, reject) => {
//         //     // if(i%2 == 0){
//         //     //     reject()
//         //     //     console.log(`Promise ${i} Rejeitada`)
//         //     //     return
//         //     // }
//         //     resolve()
//         //     console.log(`Promise ${i} Sucesso`)
//         // })
//         listaPromiseAluno.push(promise)
//     }

//     console.time()
//     Promise.all(listaPromiseAluno)
//     .then((response) => {
//         console.log("Todos com sucesso")
//         console.time()
//     })
//     .catch(erro => {
//         console.log("ERRO")
//         console.log(erro)
//     })

// }

// {
//     const listaPromise = [
//         new Promise((res, rej) => {
//             setTimeout(() => { 
//                 console.log("Resolveu")
//                 res()
//             }, 4000) 
//         } ),
//         new Promise((res, rej) => {
//             setTimeout(() => {
//                 console.log("Rejeitou")
//                 rej()
//             }, 3000) 
//         } ),
//     ]

//     Promise.race(listaPromise)
//     .then(() => {
//         console.log("O primerio com sucesso")
//     })
//     .catch(erro => {
//         console.log("Primeiro com erro")
//         console.log(erro)
//     })
// }

{

    const listaPromise = [
                new Promise((res, rej) => {
                    setTimeout(() => { 
                        console.log("Resolveu")
                        res("Promise de sucesso")
                    }, 4000) 
                } ),
                new Promise((res, rej) => {
                    setTimeout(() => {
                        console.log("Rejeitou")
                        rej("Promise de erro")
                    }, 3000) 
                } ),
            ]

    Promise.allSettled(listaPromise)
    .then((resultado) => {
        console.log(resultado)
        console.log("Todos que terminaram")
    })
    .catch(erro => {
        console.log("Erro")
        console.log(erro)
    })

}