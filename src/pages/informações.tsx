import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

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
      <aside
        className="
          w-40 sm:w-48 md:w-64 shrink-0
          bg-[#004A80] text-white flex flex-col items-center py-6
          sticky top-0 h-screen overflow-y-auto
        "
      >
         <div className="flex items-center gap-3 mb-6">
         
          <button  onClick={() => navigate("/home")}>
            <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
          </button>
        </div>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="flex flex-col gap-2 w-full text-center font-semibold text-xs sm:text-sm md:text-lg">
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/home")}>
            PÁGINA INICIAL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/perfil")}>
            PERFIL
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/faq")}>
            FAQ
          </button>
          <button className="bg-[#0F8E89] py-2">INFORMAÇÕES</button>
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
        <div className="mt-8 flex flex-col gap-6 items-center">
          <div className="mt-10 flex flex-col gap-6 items-center">
            <Voz />
            <button
              className="flex flex-col items-center"
              onClick={() => navigate("/integrantes")}
            >
              <span className="text-3xl">👥</span>
              <span className="text-sm">Integrantes</span>
            </button>
          </div>

          {/* Botão funcional do Modo Idoso */}
          <ModoIdoso />
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 min-w-0 bg-[#F6FAFB] p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* BARRA SUPERIOR COM PESQUISA */}
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

        {/* CONTEÚDO CENTRAL */}
        <section className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#004A80]">
            Informações
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {infos.map((info, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 shadow-md rounded-xl p-4 sm:p-6 flex flex-col items-start"
              >
                <span className="text-3xl sm:text-4xl mb-2">{info.icon}</span>
                <h2 className="text-base sm:text-lg font-semibold text-[#0F8E89]">{info.titulo}</h2>
                <p className="text-gray-700 text-sm sm:text-base">{info.descricao}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Informacoes;





