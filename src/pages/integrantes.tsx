import { useNavigate } from "react-router-dom";

function Integrantes() {
  const navigate = useNavigate();

  const integrantes = [
    { nome: "Julia Queiroz de Oliveira", rm: "561583", sala: "1TDSPI" },
    { nome: "Maria Luiza Alves de Aquino", rm: "561802", sala: "1TDSPI" },
    { nome: "Juliana da Silva Stigliani", rm: "561171", sala: "1TDSPJ" },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/home")}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/perfil")}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/faq")}>
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center bg-[#0F8E89] px-4 py-2 rounded-md">
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-6 mb-6 px-6 py-4 border-b bg-white">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Pesquisar no sistema..."
              className="flex-1 outline-none text-gray-700"
            />
            <span className="text-gray-500">🔍</span>
          </div>

          <div className="flex gap-8">
            <button className="text-center">
              <div className="text-3xl">🧓</div>
              <p className="text-sm">Modo Idoso</p>
            </button>
            <button onClick={() => navigate("/perfil")} className="text-center">
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Lista de Integrantes */}
        <section className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">Integrantes</h1>

          <ul className="space-y-3 text-lg">
            {integrantes.map((pessoa, i) => (
              <li
                key={i}
                className="flex justify-between max-w-2xl bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-3"
              >
                <span className="font-semibold">{pessoa.nome}</span>
                <span className="text-gray-700">RM {pessoa.rm}</span>
                <span className="text-gray-600 italic">{pessoa.sala}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Integrantes;



