import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Voz from "../components/voz";
import ModoIdoso from "../components/modoidoso";

function Teleconsulta() {
  const navigate = useNavigate();

  // Lista inicial de consultas
  const [consultas, setConsultas] = useState([
    {
      id: 1,
      dia: "02/06/2025",
      horario: "08:30",
      medico: "Dra. Maria Aparecida Araujo",
      especialidade: "Clínica geral",
    },
    {
      id: 2,
      dia: "30/06/2025",
      horario: "10:00",
      medico: "Dra. Linda Fagundes",
      especialidade: "Cardiologista",
    },
  ]);

  const [canceladas, setCanceladas] = useState<number[]>([]);
  const [mensagem, setMensagem] = useState<string | null>(null);

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => setMensagem(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  const cancelarConsulta = (id: number) => {
    setCanceladas([...canceladas, id]);
    setConsultas(consultas.filter((c) => c.id !== id));
    setMensagem("❌ Consulta cancelada com sucesso!");
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
          <button onClick={() => navigate("/home")} className="hover:bg-[#0F8E89] py-2">
            PÁGINA INICIAL
          </button>
          <button onClick={() => navigate("/perfil")} className="hover:bg-[#0F8E89] py-2">
            PERFIL
          </button>
          <button onClick={() => navigate("/faq")} className="hover:bg-[#0F8E89] py-2">
            FAQ
          </button>
          <button onClick={() => navigate("/contato")} className="hover:bg-[#0F8E89] py-2">
            CONTATO
          </button>
          <button onClick={() => navigate("/agendamento")} className="hover:bg-[#0F8E89] py-2">
            AGENDAMENTO
          </button>
          <button className="bg-[#0F8E89] py-2">TELECONSULTA</button>
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

        {/* Mensagem temporária */}
        {mensagem && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center font-semibold">
            {mensagem}
          </div>
        )}

        {/* Teleconsultas */}
        <section className="max-w-4xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-[#004A80]">
            Teleconsulta
          </h1>

          {consultas.length > 0 ? (
            <div className="space-y-6">
              {consultas.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-6"
                >
                  <p><b>Dia:</b> {c.dia}</p>
                  <p><b>Horário:</b> {c.horario}</p>
                  <p><b>Médico:</b> {c.medico}</p>
                  <p><b>Especialidade:</b> {c.especialidade}</p>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => cancelarConsulta(c.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition text-sm sm:text-base"
                    >
                      Cancelar consulta
                    </button>
                    <button className="bg-[#0F8E89] text-white px-4 py-2 rounded-full hover:bg-[#0c6e6a] transition text-sm sm:text-base">
                      Acessar consulta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Nenhuma consulta agendada.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Teleconsulta;


''


