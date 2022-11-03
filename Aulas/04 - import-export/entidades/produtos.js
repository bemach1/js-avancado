export function criar(produto){
    console.log("PRODUTO CRIADO")
}

export function buscar(nomeProduto){
    return {produto : nomeProduto}
}

export function atualizar(produto){
    console.log("PRODUTO ALTERADO")
}

export function deletar(codigoProduto){
    console.log("PRODUTO DELETADO")
}

function buscarPorNome(nomeProduto){
    return {produto : nomeProduto}
}

export default {
    buscar, criar, atualizar, deletar,buscarPorNome
}
