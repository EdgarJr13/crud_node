//instanciando o model em uma variável
var Game = require('../models/games.model');

//executando um pequeno teste no controller
exports.test = function (req, res) {
    res.send('Olá! Testando o controller');
};