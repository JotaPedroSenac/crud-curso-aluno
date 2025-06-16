import { useEffect, useState } from "react"
import AlunoService from "../../services/alunoService"

export default function AlunoForm({alunoEditando, aoSalvar}) {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_curso] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        if(alunoEditando){
            setMatricula(alunoEditando.matricula)
            setNome(alunoEditando.nome)
            setCod_curso(alunoEditando.cod_curso)
        }
    }, [alunoEditando])

    // função para lidar com o envio de formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            if (alunoEditando) {
                await AlunoService.atualizar(matricula, {nome, cod_curso})
                setMensagem("Aluno atualizado com sucesso!");
            }else{
                // será enviado ao service, a matricula, nome e codigo
                await AlunoService.criar({ matricula, nome, cod_curso })
                setMensagem("Aluno cadastrado com sucesso!");
            }

        } catch (error) {
            console.error("Erro ao salvar o aluno:", error);  // Log para debug
            setMensagem(`Erro ao salvar o aluno: ${error.res?.data?.message || error.message}`);
        }
        
        // zerar os inputs
        setMatricula('');
        setNome('');
        setCod_curso('');
        aoSalvar();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="matricula (ex: A12345)" value={matricula} onChange={(e) => setMatricula(e.target.value)} disable={!!alunoEditando} required />

            <input type="text" placeholder="Informe o nome do aluno" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <input type="text" placeholder="Código do curso (ex: A123)" value={cod_curso}
                onChange={(e) => setCod_curso(e.target.value)} required />

            <button type="submit">{alunoEditando ? "Atualizar" : "Cadastrar"}</button>
            {mensagem && <p>{mensagem}</p>}
        </form>
    )
}