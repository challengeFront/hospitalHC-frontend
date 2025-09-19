import { useState } from "react";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Endereco from "./pages/endereco";
import Perfil from "./pages/perfil";


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
    </div>
  );
}

export default App;