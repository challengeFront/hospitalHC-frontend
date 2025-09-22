import { useParams, useNavigate } from "react-router-dom";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function DetalheExame() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Simulação de dados dos exames
  const exames = [
    {
      data: "05/06/2025",
      tipo: "Hemograma Completo",
      medico: "Dr. João Martins",
      status: "Disponível",
      resultado: "Todos os parâmetros dentro da normalidade.",
    },
    {
      data: "12/05/2025",
      tipo: "Raio-X Tórax",
      medico: "Dr. Carlos Mendes",
      status: "Disponível",
      resultado: "Imagem sem alterações significativas.",
    },
  ];

  // pegar o exame certo pelo índice da URL
  const exame = id ? exames[parseInt(id) - 1] : null;

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
          <button className="bg-[#0F8E89] py-2" onClick={() => navigate("/exames")}>
            EXAMES
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/agendamento")}>
            AGENDAMENTO
          </button>
          <button className="hover:bg-[#0F8E89] py-2" onClick={() => navigate("/teleconsulta")}>
            TELECONSULTA
          </button>
        </nav>

        {/* Ações extras */}
        <div className="mt-8 flex flex-col gap-6 items-center">
          <div className="mt-10 flex flex-col gap-6 items-center">
            <Voz />
            <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
              <span className="text-3xl">👥</span>
              <span className="text-sm">Integrantes</span>
            </button>
          </div>

          {/* Botão do Modo Idoso */}
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

        {/* CONTEÚDO PRINCIPAL */}
        {!exame ? (
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">Exame não encontrado</h1>
            <button
              onClick={() => navigate("/exames")}
              className="mt-4 bg-[#0F8E89] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
            >
              Voltar
            </button>
          </div>
        ) : (
          <section className="max-w-3xl mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#004A80]">
              Detalhes do Exame
            </h1>

            <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base"><b>Data:</b> {exame.data}</p>
              <p className="text-sm sm:text-base"><b>Exame:</b> {exame.tipo}</p>
              <p className="text-sm sm:text-base"><b>Médico:</b> {exame.medico}</p>
              <p className="text-sm sm:text-base"><b>Status:</b> {exame.status}</p>
              <p className="text-sm sm:text-base"><b>Resultado:</b> {exame.resultado}</p>
            </div>

            <button
              onClick={() => navigate("/exames")}
              className="mt-6 bg-[#0F8E89] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#0c6e6a] transition text-sm sm:text-base"
            >
              Voltar
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default DetalheExame;




