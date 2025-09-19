interface ResultadosExamesProps {
  setPage: (page: number) => void;
}

function ResultadosExames({ setPage }: ResultadosExamesProps) {
  const exames = [
    {
      data: "05/06/2025",
      tipo: "Hemograma Completo",
      medico: "Dr. João Martins",
      status: "Disponível",
    },
    {
      data: "20/05/2025",
      tipo: "Ressonância Magnética",
      medico: "Dra. Paula Ribeiro",
      status: "Em análise",
    },
    {
      data: "12/05/2025",
      tipo: "Raio-X Tórax",
      medico: "Dr. Carlos Mendes",
      status: "Disponível",
    },
    {
      data: "28/04/2025",
      tipo: "Ultrassom Abdominal",
      medico: "Dra. Ana Souza",
      status: "Aguardando liberação",
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
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(4)}>
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
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(9)}>
            RESULTADOS DE EXAMES
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(10)}>
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

        {/* Resultados */}
        <section>
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">
            Resultados de Exames
          </h1>

          <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden max-w-4xl">
            <table className="w-full text-left">
              <thead className="bg-[#0F8E89] text-white">
                <tr>
                  <th className="py-3 px-4">Data</th>
                  <th className="py-3 px-4">Exame</th>
                  <th className="py-3 px-4">Médico</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Ação</th>
                </tr>
              </thead>
              <tbody>
                {exames.map((exame, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-0 hover:bg-[#CDE6E7] transition"
                  >
                    <td className="py-3 px-4">{exame.data}</td>
                    <td className="py-3 px-4">{exame.tipo}</td>
                    <td className="py-3 px-4">{exame.medico}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        exame.status === "Disponível"
                          ? "text-green-600"
                          : exame.status === "Em análise"
                          ? "text-yellow-600"
                          : "text-gray-600"
                      }`}
                    >
                      {exame.status}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        disabled={exame.status !== "Disponível"}
                        className={`px-4 py-2 rounded-full font-medium ${
                          exame.status === "Disponível"
                            ? "bg-[#0F8E89] text-white hover:bg-[#0c6e6a]"
                            : "bg-gray-400 text-white cursor-not-allowed"
                        }`}
                      >
                        Visualizar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResultadosExames;
