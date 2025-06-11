import { useState } from "react";
import CursoService from "../../services/cursoService";

export default function CursoForm(){
    const [cod_curso, setCod_curso] = useState('');
    const [nome, setNome] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = await CursoService.criar({cod_curso, nome});
        console.log(data);
        setNome('');
        setCod_curso('');
    }

    const codCursoPattern = "^[A-Z][0-9]{3}$"

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Código do curso (ex: A123)" value={cod_curso} pattern={codCursoPattern}
                onChange={(e)=> setCod_curso(e.target.value)} minLength={4} maxLength={4} required/> 

                <input type="text" placeholder="Informe o nome do curso" value={nome}
                onChange={(e)=> setNome(e.target.value)} required/>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}