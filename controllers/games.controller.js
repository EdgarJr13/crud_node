//instanciando o model em uma variável
var Game = require('../models/games.model');

//executando um pequeno teste no controller
exports.test = function (req, res) {
    res.send('Olá! Testando o controller');
};

//adicionando um Game ao banco de dados
exports.create = function (req, res) {
    let game = new Game(
        {
            nome: req.body.nome,
            dev: req.body.dev,
            anoLancamento: req.body.anoLancamento
        }
    );
    game.save(function (err){
        if (err){
            return next(err);
        }
        res.send('Registro do Game criado com sucesso.')
    })
}