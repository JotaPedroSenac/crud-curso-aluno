const express = require('express');
const { sequelize } = require('./src/config/configDb');
const cors = require('cors')

// Rotas
const alunoRoutes = require('./src/modules/aluno/routes/alunosRoutes');
const cursoRoutes = require('./src/modules/curso/routes/cursoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

// Middlewares
app.use(express.json());

// Rotas
app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);

sequelize.sync().then(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando na porta ${PORT}`);
    })
})
