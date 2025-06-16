import { useState, useEffect } from "react";
import CursoService from "../../services/cursoService";

export default function CursoForm({ cursoEditando, aoSalvar }) { //duas props
    const [cod_curso, setCod_curso] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    // atualiza o formulário sempre que o curso mudar
    useEffect(() => {
        if (cursoEditando) {
            setCod_curso(cursoEditando.cod_curso)
            setNome(cursoEditando.nome)
        }
    }, [cursoEditando])


    // função para criar ou atualizar um curso
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (cursoEditando) {
                await CursoService.atualizar(cod_curso, { nome });  //o nome é a unica coisa no service que é passada
                setMensagem("Curso atualizado com sucesso!");
            } else {
                const data = await CursoService.criar({ cod_curso, nome });
                setMensagem("Curso cadastrado com sucesso!");
                console.log(data);
            }
        } catch (error) {
            console.error("Erro ao salvar o curso:", error);  // Log para debug
            setMensagem(`Erro ao salvar o curso: ${error.res?.data?.message || error.message}`);
        }

        // Só limpa o formulário após sucesso no cadastro
        setCod_curso('');
        setNome('');
        aoSalvar();
    }


    const codCursoPattern = "^[A-Z][0-9]{3}$"

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Código do curso (ex: A123)" value={cod_curso} pattern={codCursoPattern}
                    onChange={(e) => setCod_curso(e.target.value)} minLength={4} maxLength={4} 
                    disabled={!!cursoEditando}
                    required />

                <input type="text" placeholder="Informe o nome do curso" value={nome}
                    onChange={(e) => setNome(e.target.value)} required />

                <button type="submit">{cursoEditando ? "Atualizar" : "Cadastrar"}</button>
                {mensagem && <p>{mensagem}</p>}
            </form>
        </>
    )
}