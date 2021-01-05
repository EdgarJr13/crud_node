const express = require('express');
const router = express.Router();

//inserindo o controller na aplicação
const game_controller =
require('../controllers/games.controller');

//testando o controller
router.get('/testar', game_controller.test);

//criando um novo registro no banco de dados
router.post('/create', game_controller.create);

//exportando o router do controller
module.exports = router;