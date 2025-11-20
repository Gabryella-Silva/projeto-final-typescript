"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario = require("../Usuario/usuario");
class Admin extends Usuario {
    permissao;
    constructor(nome, email, permissão) {
        super(nome, email);
        this.permissao = permissão;
    }
    cadastrar() {
        super.cadastrar();
        console.log(` Admin: ${this.nome},  Permissão:  ${this.permissao}`);
    }
}
module.exports = Admin;
