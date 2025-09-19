interface HomeProps {
  setPage: (page: number) => void;
}

function Home({ setPage }: HomeProps) {
  const aqua = "#0F8E89";

  return (
    <div className="min-h-screen flex">
      {/* Menu lateral */}
      <aside className="w-64 bg-[#0F8E89] text-white flex flex-col items-center py-6">
        {/* Logo igual Cadastro/Login */}
        <div className="mb-6">
          <img
            src="/NOVO-LOGO-HC.png"
            alt="Hospital das Clínicas"
            className="h-32 mx-auto"
          />
        </div>

        {/* Menu */}
        <nav className="flex flex-col w-full px-4 space-y-2 font-semibold">
          <button className="bg-[#0C6E6A] py-2 rounded text-center">
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            PERFIL
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            FAQ
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            CONTATO
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0C6E6A] py-2 rounded text-center">
            TELECONSULTA
          </button>
        </nav>

        {/* Extras */}
        <div className="mt-auto w-full px-4 space-y-2">
          <button className="bg-[#0C6E6A] py-2 rounded w-full flex items-center justify-center gap-2">
            🎤 Assistente de voz
          </button>
          <button className="bg-[#0C6E6A] py-2 rounded w-full flex items-center justify-center gap-2">
            👥 Integrantes
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Barra superior */}
        <header className="flex justify-between items-center px-6 py-4 border-b">
          {/* Barra de pesquisa */}
          <div className="flex items-center w-1/2">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border border-[#0F8E89] rounded-full px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Botões direita */}
          <div className="flex items-center gap-6 font-semibold">
            <button>🚶 Modo Idoso</button>
            <button>👤 Perfil</button>
            <button onClick={() => setPage(1)}>🚪 Sair</button>
          </div>
        </header>

        {/* Área central */}
        <main className="flex-1 flex flex-col items-center justify-center p-10 gap-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Linha 1 */}
            <button
              onClick={() => alert("Informações ainda não ligadas")}
              className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7]"
            >
              <div className="text-6xl mb-3">ℹ️</div>
              <span className="font-bold text-[#0F8E89] text-lg">
                Informações
              </span>
            </button>

            <button
              onClick={() => setPage(5)} // 🔗 vai para página Endereço
              className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7]"
            >
              <div className="text-6xl mb-3">📍</div>
              <span className="font-bold text-[#0F8E89] text-lg">Mapa</span>
            </button>

            {/* Linha 2 */}
            <button
              onClick={() => setPage(4)}
              className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7]"
            >
              <div className="text-6xl mb-3">💬</div>
              <span className="font-bold text-[#0F8E89] text-lg">
                Assistente pessoal
              </span>
            </button>

            <button
              onClick={() => alert("Resultados ainda não ligados")}
              className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7]"
            >
              <div className="text-6xl mb-3">📑</div>
              <span className="font-bold text-[#0F8E89] text-lg">
                Resultados de exames
              </span>
            </button>
          </div>

          {/* Linha 3 - único */}
          <button
            onClick={() => alert("Plano de saúde ainda não ligado")}
            className="bg-white shadow-lg rounded-2xl px-10 py-8 text-center hover:shadow-xl border-4 border-[#CDE6E7] w-1/2"
          >
            <div className="text-6xl mb-3">💊</div>
            <span className="font-bold text-[#0F8E89] text-lg">
              Plano de saúde
            </span>
          </button>
        </main>
      </div>
    </div>
  );
}

export default Home;

