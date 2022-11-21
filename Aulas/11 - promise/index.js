
// const executor = function(resolve, reject){
//     setTimeout(() => {
//         resolve("Foi executado com sucesso")
//     }, 2000)
// }

// const promise = new Promise(executor)

// promise
// .then(msg => {
//     console.log("Sucesso")
//     console.log(msg)
// })
// .catch(msg => {
//     console.log("Erro")
//     console.log(msg)
// })


// console.log("Mudar DIV para Carregando")

// const meuFetch = new Promise((resolve, reject) => {
//     console.log("Vai no servidor buscar dados")
//     setTimeout(() => {
//         console.log("Terminou de executar")
//         resolve([10,20,30,40])
//     }, 5000)

//     setTimeout(() => {
//         console.log("Terminou de executar")
//         reject("Ocorreu erro")
//     }, 1000)

//     console.log("Aguardando a resposta")
// })


// meuFetch.then(resposta => {
//     console.log("Tira o loading da tela")
//     console.log(resposta)
// }).catch(err=> {
//     console.log("Ocorreu um erro tratado")
//     console.log(err)
// })


// function ProximoPrimo(numero){
//     return new Promise((resolve, reject) => {
//         let primoAnterior = numero;
//         let proximoPrimo = numero+1;
//         let achou = false

//         while(!achou){
//             let quantidade = 0;

//             for(i=2;i<=proximoPrimo;i++){
//                 if(proximoPrimo%i == 0){
//                     quantidade++;
//                 }
//             }
//             if(quantidade == 1){
//                 achou = true
//             }else{
//                 proximoPrimo++
//             }
//         }

//         if(achou){
//             resolve(proximoPrimo)
//         }

//         reject()
//     })
// }
// let primopequeno = ProximoPrimo(80024).then(resposta => {
//     console.log(resposta)
// }).catch(erro=> {

// })

const executorDeTarefa = function(time){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}


const executorDeTarefaHr = function(hrAgenda, minutoAgenda){
    return new Promise((resolve,reject) => {
        const checkTime = () => {
            let data = new Date(); 
            console.log(`Rodando hr: ${data.getHours()}  min: ${data.getMinutes()}`)

            if(data.getHours() ==hrAgenda && data.getMinutes() == minutoAgenda){
                console.log("Chegou a hr")
                resolve()
            }
            else{
                console.log("Reagenda para 1 minuto depois")

                setTimeout(() => {
                    checkTime()
                },(1000 * 60))
            }
        }      

        checkTime();
    })
}

// executorDeTarefa(4000).then(() => {
//     console.log("Hora de almoçar")
// })

// executorDeTarefa(2000).then(() => {
//     console.log("Já está quase na hr de almoçar")
// })

executorDeTarefaHr(19,58).then(() => {
    console.log("EXECUTA O DESPERTADOR")
})