// express é uma dependência para rodar o servidor Node no localhost
const express = require('express');
//bodyParser é uma dependência para fazer o parser dos pedidos do banco
const bodyParser = require('body-parser');

//importando rotas
const games = require('./routes/games.route');
const app = express();

//configurando acesso ao banco de dados
const mongoose = require('mongoose');
let url = 'mongodb://dbAdmin:Junior&d13@cruddb.idrrw.mongodb.net/CrudDB?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

//configurando o Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphones);

//setando a rota da página
app.use('/games', games);

//definindo a porta que o servidor será executado
let porta = 8000;

//mensagem no log de confirmação de execução do servidor express
app.listen(porta, () => {
    console.log('Servidor em execução na porta ' + porta + '!');
});