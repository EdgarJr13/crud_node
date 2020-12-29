const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//criação do modelo do banco de dados
let GameSchema = new Schema({
    titulo: {type: String, required: true, max: 100},
    dev: {type: String, required: true, max: 100},
    anoLancamento: {type: Number, required: true},
});

//exportar o modelo
module.exports = mongoose.model('Game', GameSchema);