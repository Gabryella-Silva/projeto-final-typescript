/* import {Cadastro} from "./cadastro" */

const Cadastro = require("../Cadastro/cadastro");

class Usuario extends Cadastro{
    constructor (nome:string, email:string){
        super(nome,email)
    } 

    cadastrar():void{
        if(!this.email.includes("@"))
        {
            throw new Error(`Email invalido para ${this.nome}`)
        }
        console.log(`Usuario cadastrado ${this.nome} , email ${this.email} `)
    }
}

module.exports = Usuario;