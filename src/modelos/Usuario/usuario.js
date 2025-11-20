"use strict";
/* import {Cadastro} from "./cadastro" */
Object.defineProperty(exports, "__esModule", { value: true });
const Cadastro = require("../Cadastro/cadastro");
class Usuario extends Cadastro {
    constructor(nome, email) {
        super(nome, email);
    }
    cadastrar() {
        if (!this.email.includes("@")) {
            throw new Error(`Email invalido para ${this.nome}`);
        }
        console.log(`Usuario cadastrado ${this.nome} , email ${this.email} `);
    }
}
module.exports = Usuario;
