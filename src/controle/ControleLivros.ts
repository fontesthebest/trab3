import Livro from "../modelo/Livro"

let livros = [new Livro(1,2,"nada","nada",["autor1","autor2"]),new Livro(2,33,"nada2","nada",["autor2"]),new Livro(3,55,"nada3","nada",["autor1","autor3"])]

export default class ControleLivro {
    obterLivros(){
        return livros
    }
    incluir(obj:Livro){
        let livro=[obj]
    }
    excluir(codigo:number){
        let index = livros.findIndex(editora=>editora.codigo==codigo)
        livros.splice(index,1)
    }
}