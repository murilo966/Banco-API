import { IsEmail, IsInt, IsNotEmpty, IsString} from "class-validator";


export class criaFilmeDTO{

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    nome: string;

    @IsInt()
    duracao: BigInteger;

    @IsString()
    @IsNotEmpty({message: "sinopse Não pode estar vazia"})
    sinopse: string;

    @IsString()
    @IsNotEmpty({message: "informe o ano do filme, pois está vazio ou inválido"})
    ano: string;

    @IsString()
    @IsNotEmpty({message: "o filme deve corresponder a algum genero"})
    genero: string;
}