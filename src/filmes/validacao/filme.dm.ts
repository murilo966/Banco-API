import { Injectable } from "@nestjs/common";
import { FilmeEntity } from "./filme.entity";

@Injectable()
export class FilmesArmazenados{
    #filmes: FilmeEntity[] = [];  

    AdicionarFilme(filmes: FilmeEntity){
        this.#filmes.push(filmes);
    }

    // **Pedir ajuda**
    Compartilhar(id: string): string {
        const filme = this.buscaPorID(id);
        return filme.compartilhar();
    }
    
    atualizaFime(id: string, dadosAtualizacao: Partial<FilmeEntity>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }

    private buscaPorID(id: string){
        const possivelFilme = this.#filmes.find(
            filmeSalvo => filmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme nao encontrado')
        }
        
        return possivelFilme;
    }

    async removeFilme(id: string){
        const filme = this.buscaPorID(id);

        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
        
    }

    get Filmes(){        
        return this.#filmes;
    }
}