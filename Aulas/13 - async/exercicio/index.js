import {getTurmas} from './services/turma-service.js'

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela(){
    const panelTurmas = document.querySelector(".turmas")

    panelTurmas.innerHTML = ""
    getTurmas().then(turmas => {
        turmas.forEach(turma => {
            let div = document.createElement("div")
            div.classList.add('turma')
            div.innerHTML = `<h2>${turma.nome}</h2>`;

            let alunos = turma.obterAlunosMatriculados().map(aluno => {
                            return `<div>${aluno}</div>`;
                        }).join('')

            div.innerHTML += alunos;
            panelTurmas.appendChild(div)
        })
    })
}

atualizarTela()
