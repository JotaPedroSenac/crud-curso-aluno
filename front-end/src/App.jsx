import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageCurso from "./Pages/CursoPage/CursoPage";
import AlunoPage from "./Pages/AlunoPage/AlunosPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/alunos">Alunos</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/cursos" element={<PageCurso />} />
          <Route path="/alunos" element={<AlunoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
