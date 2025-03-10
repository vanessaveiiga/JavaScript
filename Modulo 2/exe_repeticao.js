// Exercicio 1: Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes: 
// Eduardo, Maria, Fernando, João, Francisco
// Número da execução, começando em 1
// Nome que está sendo executado
// Separadores

// Execução: 1 
// Nome: Eduardo
// ----------------

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

nomes.forEach((nome, index) => {
    console.log('Execução: ', index +1)
    console.log(nome)
    console.log('----------------')
})

// for (let index = 1; index <= nomes.length; index){
//     console.log('Execução: ' + index ++)
//     console.log(nomes[index])
//     console.log('----------------')
// }
