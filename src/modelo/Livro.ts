export default class Livro {
    codEditora:number;
    codigo:number;
    título:string;
    resumo:string;
    autores:string[];
    constructor(codEditora:number,codigo:number,título:string,resumo:string,autores:string[]) {
    this.codEditora = codEditora;
    this.codigo= codigo;
    this.título=título;
    this.resumo=resumo;
    this.autores= autores;        
    }
}