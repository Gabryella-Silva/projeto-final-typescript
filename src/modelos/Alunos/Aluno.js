"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario = require("../Usuario/usuario");
class Aluno extends Usuario {
    matricula;
    constructor(nome, email, matricula) {
        super(nome, email);
        this.matricula = matricula;
    }
    cadastrar() {
        super.cadastrar();
        console.log(`aluno cadastrado ${this.nome}, matricula: ${this.matricula}`);
    }
}
module.exports = Aluno;
