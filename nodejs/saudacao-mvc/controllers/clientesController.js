const clientesModel = require('../models/clientesModel');

module.exports = {


    clientes: (req, res) => {
        res.sendFile('clientes.html' , { root: './views' });
},
login: (req, res) => {
        const {login, senha } = req.body;
        const mensagemLogin = clientesModel.gerarMensagemLogin(login, senha);
        res.sendFile(`<h1>'${mensagemLogin}</h1>`);
},
formlogin: (req, res) => {
        res.sendFile('formlogin.html' , { root: './views' });
}
};