interface IntegrantesProps {
  setPage: (page: number) => void;
}

function Integrantes({ setPage }: IntegrantesProps) {
  const integrantes = [
    { nome: "Julia Queiroz de Oliveira", rm: "561583", sala: "1TDSPI" },
    { nome: "Maria Luiza Alves de Aquino",rm: "561802", sala: "1TDSPI" },
    { nome: "Juliana da Silva Stigliani", rm: "561171", sala: "1TDSPJ" },
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
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => setPage(6)}>
            TELECONSULTA
          </button>
          <button className="bg-[#0F8E89] py-2" onClick={() => setPage(7)}>
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

        {/* Integrantes */}
        <section className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">
            Integrantes
          </h1>

          <ul className="space-y-3 text-lg">
            {integrantes.map((pessoa, i) => (
              <li key={i} className="flex justify-between max-w-2xl">
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

