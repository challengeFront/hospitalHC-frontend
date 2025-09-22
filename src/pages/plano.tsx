import { useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function PlanoSaude() {
  const navigate = useNavigate();

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
      <aside
        className="
          w-40 sm:w-48 md:w-64 shrink-0
          bg-[#004A80] text-white flex flex-col items-center py-6
          sticky top-0 h-screen overflow-y-auto
        "
      >
        <div className="flex items-center gap-3 mb-6">
          <img src="/NOVO-LOGO-HC.png" alt="Logo HC" className="h-14 sm:h-16 md:h-20" />
        </div>

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
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/contato")}>
            CONTATO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
          <button className="bg-[#0F8E89] py-2">PLANO DE SAÚDE</button>
        </nav>

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

          {/* Botão funcional do modo idoso */}
          <ModoIdoso />
        </div>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 min-w-0 bg-[#F6FAFB] p-3 sm:p-4 md:p-6 overflow-x-hidden">
        {/* Barra superior com pesquisa */}
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
            <ModoIdoso />
            <button className="text-center" onClick={() => navigate("/perfil")}>
              <div className="text-2xl md:text-3xl">👤</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Perfil</p>
            </button>
            <button onClick={() => navigate("/")} className="text-center">
              <div className="text-2xl md:text-3xl">🚪</div>
              <p className="text-[11px] sm:text-xs md:text-sm">Sair</p>
            </button>
          </div>
        </header>

        {/* Plano de Saúde */}
        <section className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <span className="text-4xl sm:text-5xl">💊</span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 text-[#004A80]">
              Plano de Saúde
            </h1>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base md:text-lg">
            <p><b>🏢 Razão Social:</b> {dadosPlano.razaoSocial}</p>
            <p><b>📋 Plano:</b> {dadosPlano.nomePlano}</p>
            <p><b>🔢 CNPJ:</b> {dadosPlano.cnpj}</p>
            <p><b>☎️ Contato:</b> {dadosPlano.contato}</p>
            <p><b>📞 Telefone:</b> {dadosPlano.telefone}</p>
            <p><b>📅 Início:</b> {dadosPlano.inicio}</p>
            <p><b>📅 Fim:</b> {dadosPlano.fim}</p>
            <p><b>💳 Nº Carteira:</b> {dadosPlano.numeroCarteira}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlanoSaude;




