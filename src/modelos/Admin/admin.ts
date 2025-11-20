const Usuario = require("../Usuario/usuario");

class Admin extends Usuario{
    permissao:string;

    constructor(nome:string, email:string, permissão:string){
        super(nome, email);
        this.permissao = permissão;

    }

    cadastrar():void{
        super.cadastrar();
        console.log(` Admin: ${this.nome},  Permissão:  ${this.permissao}`)
    }
}

module.exports = Admin;