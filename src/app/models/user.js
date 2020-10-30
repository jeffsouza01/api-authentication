const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    telefone: [
      {
      numero: {
        type: String,
        require: true,
        maxlength: 9,
      },
      ddd: {
        type: String,
        require: true,
        maxlength: 2,
      },
    }
    ],

    data_criacao: {
        type: Date,
        default: Date.now,
    },
    data_atualizacao: {
        type: Date,
        default: Date.now,
    },
    ultimo_login: {
      type: Date,
      default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
})

const User = mongoose.model('Usuario', UserSchema);

module.exports = User;
