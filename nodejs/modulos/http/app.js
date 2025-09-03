//importando o módulo HTTP
const http = require('http');

//criando um servidor que responde com "Hello Worls!" para todas as requisições
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta com status 200 (OK) e tipo de conteúdo text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando a resposta "Hello World!"
    res.end('Hello World!');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);