

const fs = require("fs");

const Aluno = require("../modelos/Alunos/Aluno")
const Admin = require("../modelos/Admin/admin")
const Professor = require("../modelos/Professor/professor")

const usuarios: any[] = [];

try{
const aluno = new Aluno("Maria", "maria@gmail.com","2025");
aluno.cadastrar();
usuarios.push(aluno)

const admin = new Admin("Marta", "marta@gmail.com","Total");
admin.cadastrar();
usuarios.push(admin);

const professor = new Professor("João", "João@gmail.com","Matemática");
professor.cadastrar();
usuarios.push(professor)

fs.writeFileSync("usuario.txt" , JSON.stringify(usuarios, null, 3));
console.log("\n usuario.txt criado com sucesso")

const alunoInvalido = new Aluno("Jonas", "jonagmail.com", "B12");
alunoInvalido.cadastrar()

}catch(erro: any){

    console.log("\n Cadastro Invalido: ", erro.menssage)
}

module.exports = {}

