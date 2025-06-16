import { useEffect, useState } from "react";
import CursoService from "../../services/cursoService";

function ListarCursos(){

    // Estado para armazenar os cursos
    const [cursos, setCursos] = useState([]); //array pq será recebido uma lista
    // função para carregar a lista de cursos
    const carregar = async() => {
        const lista = await CursoService.listar()
        console.log(lista)
        setCursos(Array.isArray(lista) ? lista : []) // atualizar o Estado com a lista recebida. Se tiver nada, retorna um array vazio
    }

    // executa a função carregar ao montar o componente (deixar reativo)
    useEffect(() => {
        carregar();
    }, [])
    // console.log(cursos)

    const deletar = async(cod_curso) =>{
        const res = confirm("Deseja deletar esse curso?");
        if (res) {
            await CursoService.deletar(cod_curso);
            carregar();
        }
    }

    const editar = async(curso) => {
        setCursoEmEdicao(curso)
    }
    return(
        <>
            <h1>Listagem de cursos</h1>
            {/* estruturas lógicas são feitas entre bigodinhos */}
            {
                cursos.length === 0 ? (
                    <p>Nenhum curso cadastrado no sistema.</p>
                ):
                (
                    <table>
                        <thead>
                            <th>Código</th>
                            <th>Nome</th>
                        </thead>
                        <tbody>
                            {
                                cursos.map((c) =>(
                                    <tr  key={c.cod_curso}>
                                        <td>{c.cod_curso}</td>
                                        <td>{c.nome}</td>
                                        <td>
                                            <button onClick={() => editar(c.cod_curso)}>Editar</button>
                                        </td>
                                        <td>
                                            <button onClick={() => editar(c)}>Editar</button>
                                        </td>
                                    </tr>
                                    
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </>
    )
}

export default ListarCursos;