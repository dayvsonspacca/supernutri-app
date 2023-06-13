const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userCrianca = new Schema({
  Nome: {
    type: String
  },
  Idade: {
    type: String
  },
  Peso: {
    type: Double
  },
  Altura: {
    type: Double
  },
  CS: {
    type: String
  },
},{
    collection: 'Crianca'
});

module.exports = mongoose.model('Crianca', userCrianca);