import { useState } from "react"
import AlunoService from "../../services/alunoService"

export default function AlunoForm() {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_curso] = useState('');

    // função para lidar com o envio de formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        // será enviado ao service, a matricula, nome e codigo
        await AlunoService.criar({ matricula, nome, cod_curso })
        // zerar os inputs
        setMatricula('');
        setNome('');
        setCod_curso('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="matricula (ex: A12345)" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />

            <input type="text" placeholder="Informe o nome do aluno" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <input type="text" placeholder="Código do curso (ex: A123)" value={cod_curso}
                onChange={(e) => setCod_curso(e.target.value)} required />

            <button type="submit">Cadastrar</button>
        </form>
    )
}