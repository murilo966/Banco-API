export class FilmeEntity{
    id: string;
    nome: string;
    duracao: BigInteger;
    sinopse: string;
    ano: string;
    genero: string;
    
    constructor(id: string, nome: string, duracao:BigInteger, sinopse: string, ano: string, genero: string){
        this.id = id;
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.ano = ano;
        this.genero = genero;
        
    }

    validarFilmes(){
        var retorno = [];
        if (this.nome == ""){
            retorno.push("Nome de filme inválido ou vazio");
        }
        if (!this.duracao){
            retorno.push("Duração inválida ou vazia");
        }
        if (this.sinopse == ""){
            retorno.push("Sinopse inválida ou vazia");
        }
        if (this.ano  == ""){
            retorno.push("Ano inválido ou vazio");
        }
        if (this.genero  == ""){
            retorno.push("Genero inválido ou vazio");
        }
        return retorno;
    }

}