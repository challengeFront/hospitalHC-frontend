import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import das páginas
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
import Informacoes from "./pages/informações";
import ResultadosExames from "./pages/exames";
import Contato from "./pages/contato";
import DetalheExame from "./pages/detalheExame"; // página com useParams

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

        {/* Rota dinâmica para detalhes de exames */}
        <Route path="/exames/:id" element={<DetalheExame />} />
      </Routes>
    </Router>
  );
}

export default App;


