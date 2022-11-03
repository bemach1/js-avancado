// {
//     const pessoas = [
//         {nome: 'Joao'},
//         {nome: 'Pedro'},
//     ]

//     try{
//         console.log(pessoas[3].nome)
//     }catch(error){
//         // console.log("Ocorreu um erro na sua função")
//         console.log(error.stack)
//     }

// }


// {
//     function openFile(){
//         console.log("Abrir arquivo")
//     }
//     function writeFile(text){
//         // throw new Error("ERRO")
//         console.log(`Escrevendo ${text}`)
//     }
//     function closeFile(){
//         console.log("Fechar arquivo")
//     }

//     try{
//         openFile()
//         writeFile("TESTE")
//     }
//     catch(ex){
//         console.log("Não consegui escrever no arquivo")
//     }
//     finally{
//         closeFile()
//     }
// }


// {

//     function somar(firstNumber, secondNumber){
//         const firstNumberConvert = Number.parseInt(firstNumber)
//         const secondNumberConvert = Number.parseInt(secondNumber)

//         if(isNaN(firstNumberConvert)){
//             throw new TypeError("Primeiro numero invalido")
//         }

//         if(isNaN(secondNumberConvert)){
//             throw new TypeError("Segundo numero invalido")
//         }

//         throw new RangeError("Erro generico")

//         return firstNumber + secondNumber
//     }

//     try{
//         console.log(somar(2,2))
//     }
//     catch(ex){
//         if(ex instanceof TypeError){
//             console.log(`Ocorreu um erro de tipo ${ex.message}`)
//             return
//         }

//         if(ex instanceof RangeError){
//             console.log(`Ocorreu um erro range ${ex.message}`)
//         }
//     }

// }

// {
//     try{
//         let pessoa = null

//         //Tratar a conversao do JSON
//         try {
//             pessoa = JSON.parse('{ "name": "Joao" }');
//         } catch (e) {
//             console.log("Erro no parse do JSON")
//             throw new Error(e.message)
//         }

//         //Acessando os dados da pessoa
//         console.log(pessoa.name);

//     }catch(ex){
//         console.log("Não consegui finalizar o processo")
//     }
      
// }


{
    const nome = ""
    const endereco = ""
    
    function RequiredError(message, campo){
        this.message = message 
        this.campo = campo
    }

    RequiredError.prototype = Object.create(Error.prototype)

    try{

        if(nome == ""){
            throw new RequiredError("Nome é obrigatório.", "nome")
        }

        if(endereco == ""){
            throw new RequiredError("Endereco é obrigatório.", "endereco")
        }

    }catch(ex){
        if(ex instanceof RequiredError){
            document.querySelector(`#${ex.campo}`).style.color = "red";
            
        }

    }
    
}
