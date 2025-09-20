interface HomeProps {
  setPage: (page: number) => void;
}

function Home({ setPage }: HomeProps) {
  return (
    <div className="min-h-screen flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/NOVO-LOGO-HC.png"
            alt="Hospital das Clínicas"
            className="h-32 mx-auto"
          />
        </div>

        {/* Menu */}
        <nav className="flex flex-col w-full font-semibold text-lg">
          <button className="bg-[#0F8E89] py-3 text-left px-6">PÁGINA INICIAL</button>
          <button onClick={() => setPage(6)} className="hover:bg-[#0F8E89] py-3 text-left px-6">
            PERFIL
          </button>
          <button onClick={() => setPage(7)} className="hover:bg-[#0F8E89] py-3 text-left px-6">
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-3 text-left px-6">CONTATO</button>
          <button onClick={() => setPage(9)} className="hover:bg-[#0F8E89] py-3 text-left px-6">
            AGENDAMENTO
          </button>
          <button onClick={() => setPage(8)} className="hover:bg-[#0F8E89] py-3 text-left px-6">
            TELECONSULTA
          </button>
        </nav>

        {/* Extras */}
        <div className="mt-auto w-full space-y-4 px-6">
          <button className="flex items-center gap-2 py-3">
            <span className="text-2xl">🎤</span> Assistente de voz
          </button>
          <button onClick={() => setPage(10)} className="flex items-center gap-2 py-3">
            <span className="text-2xl">👥</span> Integrantes
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Barra superior */}
        <header className="flex justify-between items-center px-6 py-4">
          {/* Barra de pesquisa */}
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border-2 border-[#0F8E89] rounded-full px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Botões da direita */}
          <div className="flex items-center gap-8 font-semibold text-black">
            <button className="flex flex-col items-center">
              <span className="text-3xl">🚶</span>
              <span className="text-sm">Modo Idoso</span>
            </button>
            <button onClick={() => setPage(6)} className="flex flex-col items-center">
              <span className="text-3xl">👤</span>
              <span className="text-sm">Perfil</span>
            </button>
            <button onClick={() => setPage(1)} className="flex flex-col items-center">
              <span className="text-3xl">🚪</span>
              <span className="text-sm">Sair</span>
            </button>
          </div>
        </header>

        {/* Área central */}
        <main className="flex-1 flex flex-col items-center justify-center p-10 gap-8">
          <div className="grid grid-cols-2 gap-10">
            {/* Linha 1 */}
            <button
              onClick={() => setPage(12)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">ℹ️</div>
              <span className="font-bold text-[#0F8E89] text-lg">Informações</span>
            </button>

            <button
              onClick={() => setPage(5)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">📍</div>
              <span className="font-bold text-[#0F8E89] text-lg">Mapa</span>
            </button>

            {/* Linha 2 */}
            <button
              onClick={() => setPage(4)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">💬</div>
              <span className="font-bold text-[#0F8E89] text-lg">Assistente pessoal</span>
            </button>

            <button
              onClick={() => setPage(13)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">📑</div>
              <span className="font-bold text-[#0F8E89] text-lg">Resultados de exames</span>
            </button>
          </div>

          {/* Linha 3 */}
          <button
            onClick={() => setPage(11)}
            className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
          >
            <div className="text-5xl mb-2">💊</div>
            <span className="font-bold text-[#0F8E89] text-lg">Plano de saúde</span>
          </button>
        </main>
      </div>
    </div>
  );
}

export default Home;


