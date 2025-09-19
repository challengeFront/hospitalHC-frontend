interface InformacoesProps {
  setPage: (page: number) => void;
}

function Informacoes({ setPage }: InformacoesProps) {
  const infos = [
    {
      icon: "🏥",
      titulo: "Endereço",
      descricao:
        "Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São Paulo - SP, 05403-000",
    },
    {
      icon: "🕒",
      titulo: "Horário de Atendimento",
      descricao:
        "Ambulatórios: Segunda a Sexta, das 7h às 19h. Pronto-socorro: 24h todos os dias.",
    },
    {
      icon: "📞",
      titulo: "Contato",
      descricao: "Telefone Geral: (11) 2661-0000 | SAC: 0800 123 456",
    },
    {
      icon: "🌐",
      titulo: "Site Oficial",
      descricao: "www.hc.fm.usp.br",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-28 mb-6" />

        <nav className="flex flex-col gap-4 w-full text-center font-semibold text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(1)}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(2)}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(3)}>
            FAQ
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(4)}>
            INFORMAÇÕES
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(5)}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
            TELECONSULTA
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(8)}>
            PLANO DE SAÚDE
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            INTEGRANTES
          </button>
        </nav>

        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* Barra superior */}
        <header className="flex justify-end items-center gap-8 mb-6">
          <button className="text-center">
            <div className="text-3xl">🧓</div>
            <p className="text-sm">Modo Idoso</p>
          </button>
          <button className="text-center">
            <div className="text-3xl">👤</div>
            <p className="text-sm">Perfil</p>
          </button>
          <button className="text-center">
            <div className="text-3xl">🚪</div>
            <p className="text-sm">Sair</p>
          </button>
        </header>

        {/* Informações */}
        <section>
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">
            Informações
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {infos.map((info, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col items-start"
              >
                <span className="text-4xl mb-2">{info.icon}</span>
                <h2 className="text-lg font-semibold text-[#0F8E89] mb-1">
                  {info.titulo}
                </h2>
                <p className="text-gray-700">{info.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Informacoes;
