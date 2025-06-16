import React, { useState } from "react";
import ListarAlunos from "../../componentes/ListarAlunos/ListarAlunos";
import AlunoForm from "../../componentes/AlunoForm/AlunoForm";


export default function PageAluno() {
    const [alunoEditando, setAlunoEditando] = useState(null);

    const handleEditar = (aluno) =>{
        setAlunoEditando(aluno)
    }
    const handleSalvar = () =>{
        setAlunoEditando(null);
    }

    return(
        <>
            <AlunoForm alunoEditando={alunoEditando} aoSalvar={handleSalvar}/>
            <ListarAlunos aoEditar={handleEditar}/>
        </>
    )
}