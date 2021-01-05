//o mongoose é utilizado para conectar a aplicação com o banco de dados.
const mongoose = require ('mongoose');
//a modelagem de dados do mongoose é através de "Schemas".
const Schema = mongoose.Schema;

//criação do modelo do banco de dados
let GameSchema = new Schema({
    titulo: {type: String, required: true, max: 100},
    dev: {type: String, required: true, max: 100},
    anoLancamento: {type: Number, required: true},
}, { collection: 'games' }
);

//exportar o modelo
module.exports = mongoose.model('Game', GameSchema);