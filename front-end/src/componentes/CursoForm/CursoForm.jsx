import { useState, useEffect } from "react";
import CursoService from "../../services/cursoService";

export default function CursoForm({curso, setCursoEmEdicao}){
    const [cod_curso, setCod_curso] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    // atualiza o formulário sempre que o curso mudar
    useEffect(() => {
        if(curso){
            setCod_curso(curso.cod_curso)
            setNome(curso.nome)
        }
    }, [curso])

    const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        if(curso){
            await CursoService.atualizar(cod_curso, { nome });  
            setMensagem("Curso atualizado com sucesso!");
        } else {
            const data = await CursoService.criar({cod_curso, nome});
            setMensagem("Curso cadastrado com sucesso!");
            console.log(data);

            // Só limpa o formulário após sucesso no cadastro
            setCod_curso('');
            setNome('');
        }

        setCursoEmEdicao(null);
    } catch (error) {
        console.error("Erro ao salvar o curso:", error);  // Log para debug
        setMensagem(`Erro ao salvar o curso: ${error.response?.data?.message || error.message}`);
    }
}

    // const handleSubmit = async(e) => {
    //     e.preventDefault();

    //     try {
    //         if(curso){
    //             await CursoService.atualizar(cod_curso, { nome });  // atualiza só o nome
    //             setMensagem("Curso atualizado com sucesso!");
    //         }else{
    //         const data = await CursoService.criar({cod_curso, nome});
    //         console.log(data);
    //         }

    //         setNome('');
    //         setCod_curso('');
    //         setCursoEmEdicao(null);
    //     } catch (error) {
    //         setMensagem("Erro ao salvar o curso.");
    //     }
    // }

    const codCursoPattern = "^[A-Z][0-9]{3}$"

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Código do curso (ex: A123)" value={cod_curso} pattern={codCursoPattern}
                onChange={(e)=> setCod_curso(e.target.value)} minLength={4} maxLength={4} required /> 

                <input type="text" placeholder="Informe o nome do curso" value={nome}
                onChange={(e)=> setNome(e.target.value)} required/>

                <button type="submit">{curso ? "Atualizar" : "Cadastrar"}</button>
                {mensagem && <p>{mensagem}</p>}
            </form>
        </>
    )
}