const Usuario = require("../Usuario/usuario")

class Professor extends Usuario{
    
    disciplina:string

    constructor(nome:string, email:string, disciplina:string){
        super(nome, email)
        this.disciplina = disciplina;
    }

    cadastrar():void{
        super.cadastrar()
        console.log(`Disciplina ${this.disciplina}`)
    }
}

module.exports = Professor;