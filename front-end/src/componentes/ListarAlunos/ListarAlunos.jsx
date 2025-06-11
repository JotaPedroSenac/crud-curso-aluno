import { useEffect, useState } from "react";
import AlunoService from "../../services/alunoService";

function ListarAlunos(){

    // Estado para armazenar os cursos
    const [alunos, setAlunos] = useState([]); //array pq será recebido uma lista
    // função para carregar a lista de cursos
    const carregar = async() => {
        const lista = await AlunoService.listar()
        console.log(lista)
        setAlunos(Array.isArray(lista) ? lista : []) // atualizar o Estado com a lista recebida. Se tiver nada, retorna um array vazio
    }

    // executa a função carregar ao montar o componente (deixar reativo)
    useEffect(() => {
        carregar();
    }, [])
    // console.log(cursos)
    return(
        <>
            <h1>Listagem de Alunos</h1>
            {/* estruturas lógicas são feitas entre bigodinhos */}
            {
                alunos.length === 0 ? (
                    <p>Nenhum aluno cadastrado no sistema.</p>
                ):
                (
                    <table>
                        <thead>
                            <th>Matricula</th>
                            <th>Nome</th>
                            {/* <th>Curso</th> */}
                        </thead>
                        <tbody>
                            {
                                alunos.map((a) =>(
                                    <tr  key={a.matricula}>
                                        <td>{a.matricula}</td>
                                        <td>{a.nome}</td>
                                        {/* <td>{a.nome}</td> */}
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

export default ListarAlunos;