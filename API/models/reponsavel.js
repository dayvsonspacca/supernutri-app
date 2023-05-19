const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userResponsavel = new Schema({
  Nome: {
    type: String
  },
  Senha: {
    type: String
  },
  email: {
    type: String
  },
},{
    collection: 'Responsavel'
});

module.exports = mongoose.model('Responsavel', userResponsavel);