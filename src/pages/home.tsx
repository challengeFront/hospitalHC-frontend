import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside
        className="
          w-40 sm:w-48 md:w-64 shrink-0
          bg-[#004A80] text-white flex flex-col items-center py-6
          sticky top-0 h-screen overflow-y-auto
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
        </div>

        <nav className="flex flex-col gap-2 w-full text-center font-semibold text-xs sm:text-sm md:text-lg">
          <button className="bg-[#0F8E89] py-2">PÁGINA INICIAL</button>
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

        <div className="mt-8 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl">🎤</span>
            <span className="text-[11px] sm:text-xs md:text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-2xl md:text-3xl">👥</span>
            <span className="text-[11px] sm:text-xs md:text-sm">Integrantes</span>
          </button>
          <button className="text-center">
            <div className="text-2xl md:text-3xl">🧓</div>
            <p className="text-[11px] sm:text-xs md:text-sm">Modo Idoso</p>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 min-w-0 bg-[#F6FAFB] p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* Barra superior com pesquisa */}
        <header className="flex justify-between items-center gap-3 sm:gap-4 mb-6 px-3 sm:px-4 py-3 border-b bg-white rounded">
          <div className="flex items-center border border-gray-300 rounded-full px-3 sm:px-4 py-2 bg-white w-full max-w-md">
            <input
              type="text"
              placeholder="Pesquisar no sistema..."
              className="flex-1 outline-none text-gray-700 text-sm md:text-base"
            />
            <span className="text-gray-500">🔍</span>
          </div>

          <div className="hidden xs:flex gap-3 sm:gap-6">
            <button onClick={() => navigate("/perfil")} className="text-center">
              <div className="text-2xl md:text-3xl">👤</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-2xl md:text-3xl">🚪</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Botões principais da Home */}
        <section className="flex flex-col items-center justify-center gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
            {/* Linha 1 */}
            <button
              onClick={() => navigate("/informacoes")}
              className="bg-white shadow-md rounded-2xl px-6 sm:px-10 py-6 sm:py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-52 sm:w-60 h-40 sm:h-44 flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">ℹ️</div>
              <span className="font-bold text-[#0F8E89] text-base sm:text-lg">Informações</span>
            </button>

            <button
              onClick={() => navigate("/endereco")}
              className="bg-white shadow-md rounded-2xl px-6 sm:px-10 py-6 sm:py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-52 sm:w-60 h-40 sm:h-44 flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">📍</div>
              <span className="font-bold text-[#0F8E89] text-base sm:text-lg">Mapa</span>
            </button>

            {/* Linha 2 */}
            <button
              onClick={() => navigate("/chat")}
              className="bg-white shadow-md rounded-2xl px-6 sm:px-10 py-6 sm:py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-52 sm:w-60 h-40 sm:h-44 flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">💬</div>
              <span className="font-bold text-[#0F8E89] text-base sm:text-lg">Assistente pessoal</span>
            </button>

            <button
              onClick={() => navigate("/exames")}
              className="bg-white shadow-md rounded-2xl px-6 sm:px-10 py-6 sm:py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-52 sm:w-60 h-40 sm:h-44 flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">📑</div>
              <span className="font-bold text-[#0F8E89] text-base sm:text-lg">Resultados de exames</span>
            </button>
          </div>

          {/* Linha 3 */}
          <button
            onClick={() => navigate("/plano")}
            className="bg-white shadow-md rounded-2xl px-6 sm:px-10 py-6 sm:py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-52 sm:w-60 h-40 sm:h-44 flex flex-col justify-center"
          >
            <div className="text-4xl sm:text-5xl mb-2">💊</div>
            <span className="font-bold text-[#0F8E89] text-base sm:text-lg">Plano de saúde</span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;





