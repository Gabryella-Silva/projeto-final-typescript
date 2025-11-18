abstract class Cadastro{
    nome:string;
    email:string;

    constructor( nome:string, email:string){
        this.nome = nome;
        this.email = email;

    }

  abstract cadastrar():void;


}

module.exports = Cadastro;