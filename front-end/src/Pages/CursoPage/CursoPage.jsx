import React, {useState} from "react";
import CursoForm from "../../componentes/CursoForm/CursoForm";
import ListarCursos from "../../componentes/ListarCursos/ListarCursos";

export default function PageCurso() {
    const [cursoEditando, setCursoEditando] = useState(null);

    const handleEditar = (curso) =>{
        setCursoEditando(curso)
    }
    const handleSalvar = () =>{
        setCursoEditando(null);
    }

    return(
        <>
            <CursoForm cursoEditando={cursoEditando} aoSalvar={handleSalvar}/>
            <ListarCursos aoEditar={handleEditar}/>
        </>
    )
}