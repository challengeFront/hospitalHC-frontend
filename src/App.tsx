import { useState } from "react";

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


function App() {
  const [page, setPage] = useState(1);

  return (
    <div>
      {page === 1 && <Login setPage={setPage} />}
      {page === 2 && <Cadastro setPage={setPage} />}
      {page === 3 && <Home setPage={setPage} />}
      {page === 4 && <Chat setPage={setPage} />}
      {page === 5 && <Endereco setPage={setPage} />}
      {page === 6 && <Perfil setPage={setPage} />}
      {page === 7 && <Faq setPage={setPage} />}
      {page === 8 && <Teleconsulta setPage={setPage} />}
      {page === 9 && <Agendamento setPage={setPage} />}
      {page === 10 && <Integrantes setPage={setPage} />}
      {page === 11 && <Plano setPage={setPage} />}
      {page === 12 && <Informacoes setPage={setPage} />}
      {page === 13 && <ResultadosExames setPage={setPage} />}
    </div>
  );
}

export default App;