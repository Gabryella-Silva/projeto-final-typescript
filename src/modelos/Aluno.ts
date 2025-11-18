const Usuario = require("./usuario");

class Aluno extends Usuario {
    matricula:string

    constructor(nome:string, email:string, matricula:string){
        super( nome, email)
        
        this.matricula = matricula
    }

    cadastrar(): void{
        super.cadastrar();
        console.log(`aluno cadastrado ${this.nome}, matricula ${this.matricula}`)
    }
}
module.exports = Aluno;