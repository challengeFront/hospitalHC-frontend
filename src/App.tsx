import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import das páginas existentes
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Chat from './pages/chat';
import Endereco from './pages/endereco';
import Perfil from './pages/perfil';
import Faq from './pages/faq';
import Teleconsulta from './pages/teleconsulta';
import Agendamento from './pages/agendamento';
import Integrantes from './pages/integrantes';
import Plano from './pages/plano';
import Informacoes from './pages/informacoes';
import ResultadosExames from './pages/exames';
import Contato from './pages/contato';
import DetalheExame from './pages/detalheexame';

// Import da nova página conectada à API Java
import Pacientes from './pages/pacientes';

// NOVOS imports dos outros recursos Java
import Medicos from './pages/medicos';
import Historicos from './pages/historicos';
import Prontuarios from './pages/prontuarios';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas principais */}
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
        <Route path="/exames" element={<ResultadosExames />} />
        <Route path="/contato" element={<Contato />} />

        {/* Nova rota para testar integração com a API Java */}
        <Route path="/pacientes" element={<Pacientes />} />

        {/* Rotas dos recursos da API Java (APENAS ADIÇÕES) */}
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/historicos" element={<Historicos />} />
        <Route path="/prontuarios" element={<Prontuarios />} />

        {/* Rota dinâmica de detalhes (mantida) */}
        <Route path="/exames/:id" element={<DetalheExame />} />
      </Routes>
    </Router>
  );
}

export default App;
