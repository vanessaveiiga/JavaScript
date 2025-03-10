// Funções
// Precisa chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

// function gerarNome(){
//     const nome = 'Vanessa'
//     const sobrenome = ' Veiga'
//     const idade = 30

//     console.log('Nome: ', nome + sobrenome)
//     console.log('Idade: ', idade)
// }

// gerarNome()

// function gerarNome(nome, sobrenome, idade){
//     console.log('Nome: ', nome + sobrenome)
//     console.log('Idade: ', idade)
// }

// gerarNome('Vanessa', ' Veiga', 30)
// gerarNome('Guilherme', 'João', 29)

function gerarNome(nome, sobrenome){
    return 'Nome: ' + nome + sobrenome
}

const nomeGerado = gerarNome('Vanessa', ' Veiga')
console.log(nomeGerado)