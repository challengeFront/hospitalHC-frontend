interface HomeProps {
  setPage: (page: number) => void;
}

function Home({ setPage }: HomeProps) {
  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
          <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="bg-[#0F8E89] py-2">
            
          PÁGINA INICIAL

          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
            FAQ
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(14)}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(8)}>
            TELECONSULTA
          </button>
        
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => setPage(10)}>
            <span className="text-3xl">👥</span>
            <span className="text-sm" >Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
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
            <button onClick={() => setPage(6)} className="text-center">
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => setPage(1)} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Botões principais da Home */}
        <section className="flex flex-col items-center justify-center p-10 gap-8">
          <div className="grid grid-cols-2 gap-10">
            {/* Linha 1 */}
            <button
              onClick={() => setPage(12)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">ℹ️</div>
              <span className="font-bold text-[#0F8E89] text-lg">
                Informações
              </span>
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
              <span className="font-bold text-[#0F8E89] text-lg">
                Assistente pessoal
              </span>
            </button>

            <button
              onClick={() => setPage(13)}
              className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
            >
              <div className="text-5xl mb-2">📑</div>
              <span className="font-bold text-[#0F8E89] text-lg">
                Resultados de exames
              </span>
            </button>
          </div>

          {/* Linha 3 */}
          <button
            onClick={() => setPage(11)}
            className="bg-white shadow-md rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-60 h-44 flex flex-col justify-center"
          >
            <div className="text-5xl mb-2">💊</div>
            <span className="font-bold text-[#0F8E89] text-lg">
              Plano de saúde
            </span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;



