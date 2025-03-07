const paises = ['Brasil', 'Argentina', 'México'] // lista de dados

console.log('Aceesano o pais: ' + paises[0]) // acessando uma posição do array

console.log('Tamanho do array: ' + paises.length) // acessando o tamanho do array

// Operações

paises.push('Colombia') // adcionando dado no array, no final sempre
paises.pop() // remove ultimo elemento
paises.unshift('Paraguay') // adiciona na posição 
paises.shift() // remove o primeiro elemento

console.log(paises)