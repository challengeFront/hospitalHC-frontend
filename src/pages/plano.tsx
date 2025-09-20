interface PlanoSaudeProps {
  setPage: (page: number) => void;
}

function PlanoSaude({ setPage }: PlanoSaudeProps) {
  const dadosPlano = {
    razaoSocial: "Unimed Seguros Saúde S.A.",
    nomePlano: "Unimed Nacional - Especial",
    cnpj: "49.420.001/0001-11",
    contato: "Atendimento ao Cliente",
    telefone: "0800 123 456",
    inicio: "01/01/2024",
    fim: "31/12/2025",
    numeroCarteira: "567890-123",
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
           <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(3)}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
            FAQ
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(14)}>
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

        {/* Plano de Saúde */}
        <section className="p-6">
          <div className="flex flex-col items-center mb-6">
            <span className="text-5xl">💊</span>
            <h1 className="text-2xl font-bold mt-2 text-[#004A80]">
              Plano de Saúde
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto space-y-3 border border-gray-200">
            <p>
              <b>Razão Social:</b> {dadosPlano.razaoSocial}
            </p>
            <p>
              <b>Plano:</b> {dadosPlano.nomePlano}
            </p>
            <p>
              <b>CNPJ:</b> {dadosPlano.cnpj}
            </p>
            <p>
              <b>Contato:</b> {dadosPlano.contato}
            </p>
            <p>
              <b>Telefone:</b> {dadosPlano.telefone}
            </p>
            <p>
              <b>Início de Vigência:</b> {dadosPlano.inicio}
            </p>
            <p>
              <b>Fim de Vigência:</b> {dadosPlano.fim}
            </p>
            <p>
              <b>Nº da Carteira:</b> {dadosPlano.numeroCarteira}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlanoSaude;

