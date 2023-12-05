import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class AlteraFilmeDTO{

    @IsString()
    @IsNotEmpty({message: "nome Não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsInt()
    @IsOptional()
    duracao: BigInteger;

    @IsString()
    @IsNotEmpty({message: "sinopse Não pode estar vazia"})
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsNotEmpty({message: "informe o ano do filme, pois está vazio ou inválido"})
    @IsOptional()
    ano: string;

    @IsString()
    @IsNotEmpty({message: "o filme deve corresponder a algum genero"})
    @IsOptional()
    genero: string;

}