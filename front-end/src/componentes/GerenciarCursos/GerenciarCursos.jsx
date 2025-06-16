import { useState } from "react";
import CursoForm from "./CursoForm";
import ListarCursos from "./ListarCursos";

export default function GerenciarCursos() {
    const [cursoEmEdicao, setCursoEmEdicao] = useState(null);

    return (
        <>
            <h1>Gerenciamento de Cursos</h1>
            <CursoForm curso={cursoEmEdicao} setCursoEmEdicao={setCursoEmEdicao} />
            <ListarCursos setCursoEmEdicao={setCursoEmEdicao} />
        </>
    );
}
