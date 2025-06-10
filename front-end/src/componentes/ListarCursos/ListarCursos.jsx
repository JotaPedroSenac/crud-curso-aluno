import { useEffect, useState } from "react";
import CursoService from "../../services/cursoService";

function ListarCursos(){

    // Estado para armazenar os cursos
    const [cursos, setCursos] = useState([]); //array pq será recebido uma lista
    // função para carregar a lista de cursos
    const carregar = async() => {
        const lista = await CursoService.listar()
        console.log(lista)
    }

    // executa a função carregar ao montar o componente (deixar reativo)
    useEffect(() => {
        carregar();
    }, [])
    return(
        <>
            <h1>Listagem de cursos</h1>
        </>
    )
}

export default ListarCursos;