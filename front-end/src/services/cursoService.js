import api from './api'

class CursoService{
    static async listar(){
        try {
            const res = await api.get('/cursos');
            return res.data;
        } catch (error) {
            console.log('Erro ao listar Cursos', error.message)
            return [];
        }
    }

    static async criar(dados){
        try {
            const res = await api.post('/cursos', dados);
            return res.data;
        } catch (error) {
            console.log('Erro ao criar o Curso', error.message)
        }
    }

    static async atualizar(cod_curso, dados){
        try {
            const res = await api.put(`/cursos/${cod_curso}`, dados);
            return res.data;
        } catch (error) {
            console.log('Erro ao atualizar o Curso', error.message)
        }
    }

    static async deletar(cod_curso){
        try {
            const res = await api.delete(`/cursos/${cod_curso}`);
            return res.data;
        } catch (error) {
            console.log('Erro ao deletar o Curso', error.message)
        }
    }
}

export default CursoService;