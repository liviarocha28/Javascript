// importando o modulo os (operating system)
const os = require('os');
//exibindo informações sobre o sistema operacional
//exibimdo a arquitetura do sistema
console.log('Arquitetura do sistema:', os.arch());
//exibindo a quantidade de CPus
console.log('Quantidade de CPUs:', os.cpus().length);
//exibindo o total de memoria em bytes
console.log('Memoria total (bytes):', os.totalmem());
//exibindo a memoria livre em bytes
console.log('Memória livre (bytes):', os.freemem());
//exibindo o sistema operacional
console.log(os.platform());
