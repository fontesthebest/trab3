import Editora from "../modelo/Editora"

let editoras = [new Editora(1, "nada"), new Editora(2, "nada2"),new Editora(3,"nada3")]

export default class ControleEditora {
    getEditoras(){
        return editoras
    }
    
    getNomeEditora(codEditora:number){
        let editora=editoras.filter(editora => editora.codEditora == codEditora)
        let nome= editora.map(editora=>{return editora.nome})
        let name= nome[0]
        return name
    }
}