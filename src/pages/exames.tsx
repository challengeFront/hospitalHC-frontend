import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ResultadosExames() {
  const [exames, setExames] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // simulação de chamada de API com delay
    setTimeout(() => {
      setExames([
        {
          id: 1,
          data: "05/06/2025",
          tipo: "Hemograma Completo",
          medico: "Dr. João Martins",
          status: "Disponível",
        },
        {
          id: 2,
          data: "20/05/2025",
          tipo: "Ressonância Magnética",
          medico: "Dra. Paula Ribeiro",
          status: "Em análise",
        },
        {
          id: 3,
          data: "12/05/2025",
          tipo: "Raio-X Tórax",
          medico: "Dr. Carlos Mendes",
          status: "Disponível",
        },
        {
          id: 4,
          data: "28/04/2025",
          tipo: "Ultrassom Abdominal",
          medico: "Dra. Ana Souza",
          status: "Aguardando liberação",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

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
          <button className="bg-[#0F8E89] py-2" onClick={() => navigate("/exames")}>
            EXAMES
          </button>
        </nav>

        <div className="mt-8 flex flex-col gap-6 items-center">
          <button className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl">🎤</span>
            <span className="text-[11px] sm:text-xs md:text-sm">Assistente de voz</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => navigate("/integrantes")}>
            <span className="text-2xl md:text-3xl">👥</span>
            <span className="text-[11px] sm:text-xs md:text-sm">Integrantes</span>
          </button>
          <button className="text-center">
            <div className="text-2xl md:text-3xl">🧓</div>
            <p className="text-[11px] sm:text-xs md:text-sm">Modo Idoso</p>
          </button>
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

        {/* Resultados */}
        <section className="max-w-5xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#004A80]">
            Resultados de Exames
          </h1>

          {loading ? (
            <p className="text-gray-600">Carregando exames...</p>
          ) : (
            <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
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
                          onClick={() => navigate(`/exames/${exame.id}`)}
                          className={`px-3 sm:px-4 py-2 rounded-full font-medium text-sm sm:text-base ${
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
          )}
        </section>
      </main>
    </div>
  );
}

export default ResultadosExames;



