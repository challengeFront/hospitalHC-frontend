interface TeleconsultaProps {
  setPage: (page: number) => void;
}

function Teleconsulta({ setPage }: TeleconsultaProps) {
  const consultas = [
    {
      dia: "02/06/2025",
      horario: "08:30",
      medico: "Dra. Maria Aparecida Araujo",
      especialidade: "Clínica geral",
      foto: "/dra-maria.png",
    },
    {
      dia: "30/06/2025",
      horario: "10:00",
      medico: "Dra. Linda Fagundes",
      especialidade: "Cardiologista",
      foto: "/dra-linda.png",
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
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(5)}>
            AGENDAMENTO
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            TELECONSULTA
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

        {/* Teleconsulta */}
        <section>
          <h1 className="text-2xl font-bold mb-4 text-[#004A80]">
            Teleconsulta
          </h1>
          <p className="mb-6 font-medium">Teleconsultas agendadas:</p>

          <div className="space-y-6">
            {consultas.map((c, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl shadow-md p-4 flex items-center justify-between"
              >
                <div>
                  <p>
                    <b>Dia:</b> {c.dia}
                  </p>
                  <p>
                    <b>Horário:</b> {c.horario}
                  </p>
                  <p>
                    <b>Médico:</b> {c.medico}
                  </p>
                  <p>
                    <b>Especialidade:</b> {c.especialidade}
                  </p>

                  <div className="flex gap-3 mt-3">
                    <button className="bg-[#0F8E89] text-white px-4 py-2 rounded-full hover:bg-[#0c6e6a]">
                      Cancelar consulta
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-full cursor-not-allowed">
                      Acessar consulta
                    </button>
                  </div>
                </div>

                <img
                  src={c.foto}
                  alt={c.medico}
                  className="h-24 w-24 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            ))}
          </div>

          {/* Observação */}
          <div className="mt-6 bg-black text-white px-4 py-2 rounded-lg inline-block text-sm">
            A consulta será liberada no dia e horário agendado
          </div>
        </section>
      </main>
    </div>
  );
}

export default Teleconsulta;
