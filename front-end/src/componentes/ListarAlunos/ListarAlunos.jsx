import { useEffect, useState } from "react";
import AlunoService from "../../services/alunoService";

function ListarAlunos({aoEditar}){

    // Estado para armazenar os cursos
    const [alunos, setAlunos] = useState([]); //array pq será recebido uma lista
    // função para carregar a lista de cursos
    const carregar = async() => {
        const lista = await AlunoService.listar()
        console.log(lista)
        setAlunos(Array.isArray(lista) ? lista : []) // atualizar o Estado com a lista recebida. Se tiver nada, retorna um array vazio
    }

    
    // deletar aluno
    const deletar = async (matricula, nome) => {
        const confirm = window.confirm(`Deseja deletar o aluno ${nome}?`)
        if(confirm){
            const res = await AlunoService.deletar(matricula);
            console.log(res)
            if (res) {
                alert('Aluno deletado com sucesso!')
                carregar()
            }else{
                alert('Erro ao deletar!')
            }
        }
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
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Matricula</th>
                                <th>Nome</th>
                                <th>cod. Curso</th>
                                <th>Curso</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alunos.map((a) =>(
                                    <tr  key={a.matricula}>
                                        <td>{a.matricula}</td>
                                        <td>{a.nome}</td>
                                        <td>{a.cod_curso}</td>
                                        <td>{a.Curso.nome}</td>
                                        <td>
                                            <button onClick={() => aoEditar(a)}>Editar</button>
                                            <button onClick={() => deletar(a.matricula, a.nome)}>Excluir</button>
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

export default ListarAlunos;