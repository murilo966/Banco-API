import {Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {v4  as uuid} from 'uuid'
import { AlteraFilmeDTO } from "../dto/atualizaFilme.dto";
import { criaFilmeDTO } from "../dto/filme.dto";
import { ListaFilmeDTO } from "../dto/listaFilme.dto";
import { FilmesArmazenados } from "./filme.dm";
import { FilmeEntity } from "./filme.entity";

@Controller('/filmes')
export class FilmeController{    
    constructor(private clsFilmesArmazenados: FilmesArmazenados){
        
    }
    @Get()
    async RetornoFilmes(){
        const filmesListados = await this.clsFilmesArmazenados.Filmes;
        const listaRetorno = filmesListados.map(
            filme => new ListaFilmeDTO(
                filme.id,
                filme.nome,
                filme.ano,
                filme.genero
            )
        );
        
        return listaRetorno;
    }


    // **Pedir ajuda**
    // @Get()
    //     async Compartilhar() {
    //         const filmesListados = await this.clsFilmesArmazenados.Filmes;
    //     }

    @Delete('/:id')
    async ExcluiFilme(@Param('id') id: string){
        const filmeRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            usuario: filmeRemovido,
            message: 'Filme removido'
        }
    
    }

    @Put('/:id')
    async AlteraFilme(@Param('id') id: string, @Body() novosDados: AlteraFilmeDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFime(id, novosDados)

        return{
            usuario: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Post()
    async IncluiFilme(@Body() dadosFilme: criaFilmeDTO){
        var filme = new FilmeEntity(uuid(),dadosFilme.nome,dadosFilme.duracao,
                                dadosFilme.sinopse, dadosFilme.ano, dadosFilme.genero)
        this.clsFilmesArmazenados.AdicionarFilme(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Criado'
        }    
        
        return retorno
    }
}