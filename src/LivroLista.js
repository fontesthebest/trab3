import { getValue } from "@testing-library/user-event/dist/utils"
import ControleEditora from "./controle/ControleEditora"
import ControleLivro from "./controle/ControleLivros"
import { Fragment, useEffect, useState } from "react"



const controleLivro= new ControleLivro()
const controleEditora= new ControleEditora()




function Linhalivro(props) {
    let [ livros , novoLivros]= useState([])
    let [carregado,Ncarregado]= useState(false)
    useEffect(()=>{
        novoLivros(controleLivro.obterLivros())
        Ncarregado(true)
    })
    let Excluir = (codigo) => {
       controleLivro.excluir(codigo)
       Ncarregado(false)
       console.log(carregado)
        console.log(codigo)
    }
    
    return (<><h1>Catálogo de Livros</h1>
    <table className='container-fluid'>
        <thead>
            <td className='header col-4'>Título</td>
            <td className='header'>Resumo</td>
            <td className='header'>Editora</td>
            <td className='header'>Autores</td>
        
        {livros.map((livro,index)=>{
            return(
        <>
                
                  
                
                        <Fragment key={index}>
                        <tr>
                            <td>
                                <p key={index} style={{margin:0}}>{livro.título}</p> <button onClick={() => Excluir(livro.codigo)}>excluir</button>
                            </td>
                            
                            <td>
                                <p key={index}>{livro.resumo}</p>
                            </td>
                            <td>
                                <p>{controleEditora.getNomeEditora(livro.codEditora)}</p>
                            </td>
                            <td>
                                <div>
                                    {livro.autores.map(autor=><li>{autor}</li>)}
                                </div>
                            </td>
                        </tr>
                        </Fragment>
                    
        </>
            )
        })}
        </thead>
        </table>
    </>);
}

export default Linhalivro;