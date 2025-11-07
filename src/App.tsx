import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* === Import das páginas existentes === */
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Endereco from "./pages/endereco";
import Perfil from "./pages/perfil";
import Faq from "./pages/faq";
import Teleconsulta from "./pages/teleconsulta";
import Agendamento from "./pages/agendamento";
import Integrantes from "./pages/integrantes";
import Plano from "./pages/plano";
import Informacoes from "./pages/informacoes";
import ResultadosExames from "./pages/exames";
import Contato from "./pages/contato";
import DetalheExame from "./pages/detalheexame";

/* === Import das novas páginas conectadas à API === */
import Pacientes from "./pages/pacientes";
import Medicos from "./pages/medicos";
import Especialidades from "./pages/especialidades";
import Agendamentos from "./pages/agendamentos";
import Historicos from "./pages/historicos";
import Prontuarios from "./pages/prontuarios";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas principais (já existentes) */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/teleconsulta" element={<Teleconsulta />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/plano" element={<Plano />} />
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/resultadosexames" element={<ResultadosExames />} />
        <Route path="/contato" element={<Contato />} />

        {/* Rota dinâmica de detalhes de exames */}
        <Route path="/exames/:id" element={<DetalheExame />} />

        {/* === Novas rotas da integração com o back-end === */}
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/historicos" element={<Historicos />} />
        <Route path="/prontuarios" element={<Prontuarios />} />

        {/* Fallback opcional: qualquer rota desconhecida volta pro login/home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
