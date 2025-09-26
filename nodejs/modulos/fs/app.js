//importando o modulo fs (file system)
//const fs = require('fs');
import fs from 'fs';

// Lendo um arquivo de forma assíncrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    //Tratando erro
    if (erro) {
        //adicionando o erro no console
        console.error('Erro ao ler o arquivo:', erro);
        //retornando para não executar o console.log abaixo
        return;
    }
    //se não houver erro, exibindo o conteúdo do arquivo
    console.log('Conteúdo do arquivo:', dados);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Esta mensagem aparece primeiro.');