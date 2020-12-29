const express = require('express');
const bodyParser = require('body-parser');

//importando a rota
const games = require('./routes/games.route');

//inicializar app express
const app = express();

//página inicial da aplicação
app.use('/games', games);

//definindo a porta que o servidor será executado
let porta = 8000;

//mensagem no log de confirmação de execução do servidor express
app.listen(porta, () => {
    console.log('Servidor em execução na porta ' + porta + '!');
});