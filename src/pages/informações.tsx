import { useNavigate } from "react-router-dom";

function Informacoes() {
  const navigate = useNavigate();

  const infos = [
    { icon: "🏥", titulo: "Endereço", descricao: "Av. Dr. Enéas Carvalho..." },
    { icon: "🕒", titulo: "Horário de Atendimento", descricao: "Ambulatórios 7h-19h, PS 24h." },
    { icon: "📞", titulo: "Contato", descricao: "Telefone Geral: (11) 2661-0000" },
    { icon: "🌐", titulo: "Site Oficial", descricao: "www.hc.fm.usp.br" },
  ];

  return (
    <div className="min-h-screen flex bg-white">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-[#004A80] text-white flex flex-col items-center py-6">
        <div className="flex items-center gap-3">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-30" />
        </div>

        {/* MENU DE NAVEGAÇÃO */}
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
          <button className="bg-[#0F8E89] py-2" onClick={() => navigate("/informacoes")}>
            INFORMAÇÕES
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

        {/* EXTRAS */}
        <div className="mt-10 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-3xl">🎤</span>
            <span className="text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-3xl">👥</span>
            <span className="text-sm">Integrantes</span>
          </button>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 bg-[#F6FAFB] p-6">
        {/* BARRA SUPERIOR COM PESQUISA */}
        <header className="flex justify-between items-center gap-6 mb-6 px-6 py-4 border-b bg-white">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white flex-1 max-w-lg">
            <input type="text" placeholder="Pesquisar no sistema..." className="flex-1 outline-none text-gray-700" />
            <span className="text-gray-500">🔍</span>
          </div>
          <div className="flex gap-8">
            <button className="text-center">
              <div className="text-3xl">🧓</div>
              <p className="text-sm">Modo Idoso</p>
            </button>
            <button className="text-center" onClick={() => navigate("/perfil")}>
              <div className="text-3xl">👤</div>
              <p className="text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-3xl">🚪</div>
              <p className="text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* CONTEÚDO CENTRAL */}
        <section>
          <h1 className="text-2xl font-bold mb-6 text-[#004A80]">Informações</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {infos.map((info, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-md rounded-xl p-6">
                <span className="text-4xl mb-2">{info.icon}</span>
                <h2 className="text-lg font-semibold text-[#0F8E89]">{info.titulo}</h2>
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



