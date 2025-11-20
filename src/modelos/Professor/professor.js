"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario = require("../Usuario/usuario");
class Professor extends Usuario {
    disciplina;
    constructor(nome, email, disciplina) {
        super(nome, email);
        this.disciplina = disciplina;
    }
    cadastrar() {
        super.cadastrar();
        console.log(`Disciplina ${this.disciplina}`);
    }
}
module.exports = Professor;
