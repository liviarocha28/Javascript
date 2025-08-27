const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade'); 
const idadeEm2025 = calculadora_idade.idade('Roberval',1990); 
const mensagem = modulo.saudacao('Joédio'); // Executando a função

console.log(mensagem);
console.log(idadeEm2025);