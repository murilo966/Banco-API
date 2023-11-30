import { Body, Controller, Get, Post } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import {v4  as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
@Controller('/usuarios')
export class UsuarioController{    
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }

    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.cidade,
                usuario.email
            )
        );
        
        return listaRetorno;
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        var usuario = new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,
                                    dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha)
        
            
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);        
        var retorno={
            id: usuario.id,
            message:'Usuário Criado'
        }
        
        return retorno
    }
}