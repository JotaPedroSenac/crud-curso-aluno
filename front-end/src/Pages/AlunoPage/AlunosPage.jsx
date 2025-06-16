import React from "react";
import ListarAlunos from "../../componentes/ListarAlunos/ListarAlunos";
import AlunoForm from "../../componentes/AlunoForm/AlunoForm";


export default function PageAluno() {
    return(
        <>
            <AlunoForm/>
            <ListarAlunos/>
        </>
    )
}